import * as S from "./style";

import React from "react";
import useAuth from "@hooks/useAuth";
import { AiFillExclamationCircle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginContainer = () => {
    const { loginData, setLoginData, handleSignIn, isLoading } = useAuth();
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <S.LoginInputCont>
            <S.LoginInputWrap onSubmit={handleSignIn}>
                <S.InputCont>
                    <S.LoginInput
                        type="text"
                        name="login"
                        value={loginData.login}
                        placeholder="아이디"
                        onChange={(e) => setLoginData({ ...loginData, login: e.target.value })}
                    />
                    <S.LoginIssueText>
                        <AiFillExclamationCircle className="issue_logo" />
                        <span>정보가 기억나지 않는다면 담당자 이수민 선생님께 문의해주세요.</span>
                    </S.LoginIssueText>
                </S.InputCont>

                <S.InputCont>
                    <S.LoginInput
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={loginData.password}
                        placeholder="비밀번호"
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                    <S.PasswordToggleButton type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? <AiFillEyeInvisible className="show_logo" /> : <AiFillEye className="show_logo" />}
                    </S.PasswordToggleButton>
                </S.InputCont>
                <S.LoginBtn type="submit" disabled={isLoading}>
                    로그인
                </S.LoginBtn>
                <S.SignInBtn to={"/signup"}>
                    <span>회원가입</span>
                </S.SignInBtn>
            </S.LoginInputWrap>
        </S.LoginInputCont>
    );
};

export default LoginContainer;