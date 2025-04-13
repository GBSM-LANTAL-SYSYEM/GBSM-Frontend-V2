import * as C from "@/allFiles";
import * as S from "./style";

import { useMultiStepForm } from "@/hooks";
import { FormDataProps } from "@/types";
import { FormEvent, useState } from "react";
  
  const INITIAL_FORMDATA = {
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  };

const RentalPage = () => {
    const [formData, setFormData] = useState(INITIAL_FORMDATA);

    const updateFields = (fields: Partial<FormDataProps>) => {
      setFormData((prev) => ({ ...prev, ...fields }));
    };
  
    const { currentTitle, currentStep, prev, next, isFirstStep, isLastStep } = useMultiStepForm([
      {
        title: 'Input Email',
        element: <C.EmailForm {...formData} updateFields={updateFields} />,
      },
  
      {
        title: 'Input Password',
        element: <C.PasswordForm {...formData} updateFields={updateFields} />,
      },
      {
        title: 'Input Nickname',
        element: <C.NicknameForm {...formData} updateFields={updateFields} />,
      },
    ]);
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        if (isLastStep) {
          // TODO: Request form
          return alert("Submitted!");
        }
      
        next();
      };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <header>
          <button type="button" onClick={prev}>
            Prev
          </button>
          <span>{currentTitle}</span>
          <button>{isLastStep ? "Submit" : "Next"}</button>
        </header>

        {currentStep}
      </form>
    </div>
  );
};

export default RentalPage;
