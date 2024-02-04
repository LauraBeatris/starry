import { useRef, type RefObject } from 'react';

/**
 * A custom React hook that facilitates form submission via the Enter key.
 *
 * It provides a form reference and a keydown event handler to trigger form submission.
 *
 * The submission is only triggered when the Enter key is pressed without the Shift key,
 * and the input field is not composing (e.g., during IME composition).
 */
export default function useEnterSubmit(): {
  formRef: RefObject<HTMLFormElement>;
  onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
} {
  const formRef = useRef<HTMLFormElement>(null);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ): void => {
    const value = event.currentTarget.value.trim();

    if (
      event.key === 'Enter' &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      if (value.length === 0) {
        event.preventDefault();
        return;
      }

      formRef.current?.requestSubmit();
      event.preventDefault();
    }
  };

  return { formRef, onKeyDown: handleKeyDown };
}
