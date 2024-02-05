import { PromptForm } from './PromptForm';

// TODO - Improve props definition to avoid impossible states
type GenerateImageFormProps = {
  initialPromptText?: string;
  imagePlaceholder?: string;
  remainingGenerations: number;
};

export function GenerateImageForm({
  initialPromptText,
  remainingGenerations,
}: GenerateImageFormProps) {
  return (
    <section className="md:p-reset z-10 w-full px-2">
      <PromptForm
        disabled={remainingGenerations <= 0}
        initialPromptText={initialPromptText}
      />
    </section>
  );
}
