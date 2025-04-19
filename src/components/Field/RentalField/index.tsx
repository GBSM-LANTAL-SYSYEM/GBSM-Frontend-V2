import * as C from "@/allFiles";
import * as S from "./style"

import { ChangeEvent } from "react";
import { RentalFormData } from "@/types";
import { LAB_OPTIONS, TIME_OPTIONS } from "@/constants";

type UserInfoFormProps = {
    updateFields: (fields: Partial<RentalFormData>) => void;
  } & Partial<RentalFormData>;
  
  export const UserInfoForm = ({ rentalUser, rentalUsers, updateFields }: UserInfoFormProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateFields({ [e.target.name]: e.target.value });
    };
  
    return (
      <>
        <C.InputField
        label="대표자 이름 기재 (1101 홍길동)"
        type="text"
        name="rentalUser"
        value={rentalUser}
        placeholder="대표자 이름"
        onChange={handleChange}
        required
      />

      <C.InputField
        label="사용 인원 전원 기재 (1101 홍길동, 1201 홍길순)"
        type="text"
        name="rentalUsers"
        value={rentalUsers}
        placeholder="사용 인원 이름"
        onChange={handleChange}
        required
      />
      </>
    );
  };
  
  type PurposeFormProps = {
    updateFields: (fields: Partial<RentalFormData>) => void;
  } & Partial<RentalFormData>;
  
  export const PurposeForm = ({ rentalPurpose, updateFields }: PurposeFormProps) => {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      updateFields({ rentalPurpose: e.target.value });
    };
  
    return (
      <>
        <S.TextareaField>
          <h2>
            프로젝트시 무슨 프로젝트인지 어떤 대회인지 <br /> 반드시 적어주세요.
          </h2>
          <S.TextareaCont>
            <span>사용 목적</span>
            <textarea
              name="rentalPurpose"
              value={rentalPurpose}
              placeholder="사용 목적을 입력하세요."
              onChange={handleChange}
              required
            />
          </S.TextareaCont>
        </S.TextareaField>
      </>
    );
  };
  
  type ScheduleFormProps = {
    updateFields: (fields: Partial<RentalFormData>) => void;
  } & Partial<RentalFormData>;
  
  export const ScheduleForm = ({ rentalDate, rentalStartTime, labName, updateFields }: ScheduleFormProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      updateFields({ [e.target.name]: e.target.value });
    };
  
    return (
      <>
        <C.InputField
          label="대여 희망일"
          type="date"
          name="rentalDate"
          value={rentalDate}
          placeholder="대여 희망일"
          onChange={handleChange}
          required
        />

        <C.SelectField
          label="사용 대여 시간"
          name="rentalStartTime"
          children="사용 대여 시간을 선택해주세요."
          value={rentalStartTime}
          options={TIME_OPTIONS}
          onChange={(e) => updateFields({ rentalStartTime: e.target.value })}
          required
        />

        <C.SelectField
          label="대여 희망 실습실 선택"
          name="labName"
          children="사용 실습실을 선택해주세요."
          value={labName}
          options={LAB_OPTIONS}
          onChange={(e) => updateFields({ labName: e.target.value })}
          required
        />
      </>
    );
  };