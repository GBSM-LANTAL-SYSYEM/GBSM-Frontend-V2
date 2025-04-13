import * as S from "./style";
import * as C from "@/allFiles"

import { GBSM_Symbol } from "@/assets";

const Signup = () => {
    return (
        <>
            <S.Container>
                <S.TopCont>
                    <S.Parent>
                        <S.MainCont>
                            <S.SignupCont>
                                <S.SignupSubCont>
                                    <S.SignupTitle>
                                        <S.SignupLogoCont>
                                            <img src={GBSM_Symbol} alt="logo-new" className="gbsw_new_logo" />
                                        </S.SignupLogoCont>
                                        <S.SignupTextCont>
                                            <div style={{ fontSize: '1.55rem' }}>
                                                <span style={{ color: '#00AA87' }}>회원가입</span>
                                            </div>
                                        </S.SignupTextCont>
                                    </S.SignupTitle>
                                    <div>
                                        <C.SignupContainer />
                                    </div>
                                </S.SignupSubCont>
                            </S.SignupCont>
                            <S.RentalStauts />
                        </S.MainCont>
                    </S.Parent>
                </S.TopCont>
            </S.Container>
        </>
    );
};

export default Signup;