import { PromptForm } from './PromptForm';

// TODO - Improve props definition to avoid impossible states
type GenerateImageFormProps = {
  initialPromptText?: string;
  imagePlaceholder?: string;
};

export function GenerateImageForm({
  initialPromptText,
}: GenerateImageFormProps) {
  return (
    <section className="md:p-reset z-10 w-full px-2">
      <PromptForm initialPromptText={initialPromptText} />
    </section>
  );
}
