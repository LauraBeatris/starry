'use client';

import analytics from '@vercel/analytics';
// @ts-ignore
import { ElementRef, useEffect, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { generateImage } from '@/app/(image-generation)/actions';
import { className } from '@/app/lib/className';
import useEnterSubmit from '@/app/lib/hooks/useEnterSubmit';
import { LoadingCircleIcon } from '@/app/ui/Icons/LoadingIcon';
import { SendIcon } from '@/app/ui/Icons/SendIcon';

declare global {
  interface promptmaker {
    (): string;
  }
}

interface PromptFormProps {
  initialPromptText?: string;
  disabled?: boolean;
}

const initialFormState = { message: '', errors: {} };

export function PromptForm({ disabled, initialPromptText }: PromptFormProps) {
  const [prompt, setPrompt] = useState('');
  const [placeholderPrompt, setPlaceholderPrompt] = useState(initialPromptText);

  const [state, dispatch] = useFormState(generateImage, initialFormState);

  const textareaRef = useRef<ElementRef<'textarea'>>(null);

  const { formRef, onKeyDown } = useEnterSubmit();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.select();
    }
  }, [initialPromptText]);

  return (
    <>
      <form
        ref={formRef}
        className="animate-fade-up mx-auto mt-5 flex w-full max-w-xl items-center space-x-2 rounded-lg border border-gray-200 bg-white px-1 py-2 shadow-md sm:px-4 sm:py-4"
        action={(data) => {
          analytics.track('Generating image with prompt', {
            prompt: prompt,
          });
          dispatch(data);
        }}
      >
        <textarea
          id="prompt"
          name="prompt"
          ref={textareaRef}
          value={prompt}
          autoFocus
          aria-describedby="customer-error"
          autoComplete="off"
          placeholder={placeholderPrompt}
          onChange={(e) => setPrompt(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (
              placeholderPrompt &&
              e.key === 'Tab' &&
              e.currentTarget.value === ''
            ) {
              setPrompt(placeholderPrompt);
              e.preventDefault();
            }
            onKeyDown(e);
          }}
          className="flex-1 resize-none outline-none"
        />

        <SubmitButton disabled={disabled} />
      </form>

      <div
        className="mx-auto w-full max-w-xl text-center"
        id="prompt-error"
        aria-live="polite"
        aria-atomic="true"
      >
        {state.errors?.prompt &&
          state.errors.prompt.map((error: string) => (
            <p className="text-md mt-2 font-bold text-red-600" key={error}>
              {error}
            </p>
          ))}
      </div>

      {state.message && (
        <div className="mx-auto w-full max-w-xl text-center" aria-live="polite">
          <p
            className="text-md mt-2 font-bold text-red-600"
            key={state.message}
          >
            {state.message}
          </p>
        </div>
      )}
    </>
  );
}

interface SubmitButtonProps {
  disabled?: boolean;
}

const SubmitButton = ({ disabled }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  const isDisabled = disabled || pending;

  return (
    <button
      className={className(
        'group rounded-lg p-2.5',
        isDisabled
          ? 'cursor-disabled bg-gray-100'
          : 'transition-all hover:bg-gray-100 active:bg-gray-200',
      )}
      disabled={isDisabled}
    >
      {pending ? (
        <LoadingCircleIcon />
      ) : (
        <SendIcon className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
      )}
    </button>
  );
};
