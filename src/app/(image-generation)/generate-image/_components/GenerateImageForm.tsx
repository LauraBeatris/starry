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
    <section className="md:p-reset z-50 w-full px-2">
      <PromptForm initialPromptText={initialPromptText} />

      {/* <Suspense fallback={<RemainingDisplay />}>
        <RemainingCount />
  </Suspense>*/}
    </section>
  );
}
