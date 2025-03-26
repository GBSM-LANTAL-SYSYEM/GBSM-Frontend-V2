import * as S from "./style";

import React from "react";
import useAuth from "@hooks/useAuth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignupContainer = () => {
    const { signupData, setSignupData, handleSignup, isLoading } = useAuth();
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <S.SignupInputCont>
            <S.SignupInputWrap onSubmit={handleSignup}>
                <S.InputCont>
                    <S.SignupInput
                        type="text"
                        name="username"
                        value={signupData.username}
                        placeholder="아이디"
                        onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                    />
                </S.InputCont>

                <S.InputCont>
                    <S.SignupInput
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={signupData.password}
                        placeholder="비밀번호"
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    />
                    <S.PasswordToggleButton type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? <AiFillEyeInvisible className="show_logo" /> : <AiFillEye className="show_logo" />}
                    </S.PasswordToggleButton>
                </S.InputCont>
                <S.SignupBtn type="submit" disabled={isLoading}>
                    회원가입
                </S.SignupBtn>
                <S.SignUpBtn to={"/"}>
                    계정이 있으신가요? &nbsp; <span style={{ color: '#00AA87' }}> 로그인으로 돌아가기</span>
                </S.SignUpBtn>
            </S.SignupInputWrap>
        </S.SignupInputCont>
    );
};

export default SignupContainer;
