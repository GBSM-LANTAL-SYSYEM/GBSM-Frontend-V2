import { ChangeEvent } from "react";
import { FormDataProps } from "@/types";

type EmailFormProps = {
    updateFields: (field: Partial<FormDataProps>) => void;
  } & Partial<FormDataProps>;
  
  export const EmailForm = ({ email, updateFields }: EmailFormProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateFields({ email: e.target.value });
    };
  
    return (
      <>
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={handleChange} />
      </>
    );
  };
  
  type PasswordFormProps = {
    updateFields: (field: Partial<FormDataProps>) => void;
  } & Partial<FormDataProps>;
  
  export const PasswordForm = ({ password, passwordConfirm, updateFields }: PasswordFormProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateFields({ [e.target.id]: e.target.value });
    };
  
    return (
      <>
        <label htmlFor="password">Password</label>
        <input id="password" value={password} onChange={handleChange} />
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input id="passwordConfirm" value={passwordConfirm} onChange={handleChange} />
      </>
    );
  };
  
  type NicknameFormProps = {
    updateFields: (field: Partial<FormDataProps>) => void;
  } & Partial<FormDataProps>;
  
  export const NicknameForm = ({ nickname, updateFields }: NicknameFormProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateFields({ nickname: e.target.value });
    };
  
    return (
      <>
        <label htmlFor="nickname">Nickname</label>
        <input id="nickname" value={nickname} onChange={handleChange} />
      </>
    );
  };