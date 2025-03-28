import * as S from "./style";
import * as C from "@/allFiles"

import { GBSM_Symbol } from "@/assets";

const Landing = () => {
    return (
        <>
            <S.Container>
                <S.TopCont>
                    <S.Parent>
                        <S.MainCont>
                            <S.LoginCont>
                                <S.LoginSubCont>
                                    <S.LoginTitle>
                                        <S.LoginLogoCont>
                                            <img src={GBSM_Symbol} alt="logo-new" className="gbsw_new_logo" />
                                        </S.LoginLogoCont>
                                        <S.LoginTextCont>
                                            <div style={{ fontSize: '1.35rem' }}>
                                                <span style={{ color: '#00AA87' }}>경북소프트웨어마이스터고등학교</span>
                                            </div>
                                            <div className="tag_bottom">실습실 대여 시스템</div>
                                        </S.LoginTextCont>
                                    </S.LoginTitle>
                                    <div>
                                        <C.LoginContainer />
                                    </div>
                                </S.LoginSubCont>
                            </S.LoginCont>
                            <S.RentalStauts />
                        </S.MainCont>
                    </S.Parent>
                </S.TopCont>
            </S.Container>
        </>
    );
};

export default Landing