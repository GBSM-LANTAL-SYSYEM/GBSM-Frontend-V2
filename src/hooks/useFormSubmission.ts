import { FormEvent, useState } from "react";

interface UseFormSubmissionProps<T> {
  formData: T;
  handleSubmitLogic: (e: FormEvent<HTMLFormElement>, formData: T) => Promise<void> | void;
}

export const useFormSubmission = <T>({ formData, handleSubmitLogic }: UseFormSubmissionProps<T>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await handleSubmitLogic(e, formData);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, setIsSubmitting, handleSubmission };
};