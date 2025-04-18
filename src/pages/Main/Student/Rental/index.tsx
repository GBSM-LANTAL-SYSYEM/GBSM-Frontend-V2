import * as C from "@/allFiles";
import * as S from "./style";

import useMultiStepForm from "./useMultiStepForm";
import { RentalFormData } from "@/types";
import { StepOne, StepTwo, StepThree } from "@/assets";
import { useSubmit, useFormSubmission } from "@/hooks";
import { FormEvent, useState } from "react";
  
const INITIAL_FORMDATA = {
  rentalDate: '',
  rentalUser: '',
  rentalUsers: '',
  rentalPurpose: '',
  rentalStartTime: '',
  labName: '',
};

const RentalPage = () => {
  const [formData, setFormData] = useState(INITIAL_FORMDATA);
  const handleSubmitLogic = useSubmit(formData);
  const { isSubmitting, handleSubmission } = useFormSubmission({ formData, handleSubmitLogic });

  const updateFields = (fields: Partial<RentalFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const { currentTitle, currentStep, currentImg, prev, next, isFirstStep, isLastStep } = useMultiStepForm([
    {
      title: '대표자 이름과\n사용자 인원을 모두 입력해주세요!',
      element: <C.UserInfoForm {...formData} updateFields={updateFields} />,
      img: StepOne
    },
    {
      title: '사용 목적을 적어주세요!',
      element: <C.PurposeForm {...formData} updateFields={updateFields} />,
      img: StepTwo
    },
    {
      title: '대여 희망일과 대여 시간,\n희망하는 실습실을 입력해주세요!',
      element: <C.ScheduleForm {...formData} updateFields={updateFields} />,
      img: StepThree
    },
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLastStep) {
      handleSubmission(e);
      return;
    }

    next();
  };

  return (
    <>
      <C.StudentSide />
      <S.TopCont>
        <S.Header>
          <h4>실습실 대여</h4>
          <img src={currentImg} alt="순서 이미지" draggable="false" />
        </S.Header>
        <S.Parent>
          <pre>
            <h1>{currentTitle}</h1>
          </pre>
          <form onSubmit={handleSubmit}>
            {currentStep}
            <S.BtnCont style={{ position: "absolute", bottom: 20, right: 20 }}>
              {!isFirstStep && (
                <button type="button" onClick={prev} className="prev">
                  이전
                </button>
              )}
              <button className="next" disabled={isSubmitting}>
                {isLastStep ? (isSubmitting ? "제출 중.." : "제출하기") : "다음"}
              </button>
            </S.BtnCont>
          </form>
        </S.Parent>
      </S.TopCont>
    </>
  );
};

export default RentalPage;