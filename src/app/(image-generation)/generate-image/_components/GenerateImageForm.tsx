// @ts-ignore
import promptmaker from 'promptmaker';

import { PromptForm } from './PromptForm';

type GenerateImageFormProps = {
  imagePlaceholder?: string;
  remainingGenerations: number;
};

export function GenerateImageForm({
  remainingGenerations,
}: GenerateImageFormProps) {
  return (
    <section className="md:p-reset z-10 w-full px-2">
      <PromptForm
        disabled={remainingGenerations <= 0}
        initialPromptText={promptmaker()}
      />
    </section>
  );
}
