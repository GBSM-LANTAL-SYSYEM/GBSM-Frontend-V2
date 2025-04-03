import * as C from "@/allFiles";
import * as S from "./style";

import React from "react";
import { useBlockBackNavigation, useFetchLab, useSortLab } from "@/hooks";
import { FaArrowRight } from "react-icons/fa";
import { GBSM_Symbol, MeisterCharacter, SWCharacter, GameCharacter } from "@/assets";


const StudentScreen: React.FC = () => {
    useBlockBackNavigation(); 

    const { rentalRequests, isLoading, fetchAvailableLabs } = useFetchLab();
    const { sortedRequests, sortOrder, setSortOrder } = useSortLab(rentalRequests);

    return (
        <>
            <S.TopCont>
                <S.Parent>
                    <S.Header>
                        <S.RentCont>
                            <img src={GBSM_Symbol} alt="logo-new" className="gbsw" />
                            <S.RentSubCont>
                                <S.LinkRent to={"/student/rental"}>실습실 대여하기</S.LinkRent>
                                <FaArrowRight className="arrow" />
                            </S.RentSubCont>
                        </S.RentCont>
                        <S.NoticeCont>
                            <S.NoticeSubCont>
                                <div>
                                    <p className='important_text'>매일 점심 시간 (13시 40분) 신청 마감</p>
                                    <S.NoticeRuleCont>
                                        <p className='notice_text'>야자 시간 전 미리 문 열어놓기 !</p>
                                        <p className='explanation'>
                                            미리 안 열어놓고 야자시간에 열쇠달라고 해도 안 열어줌, 손으로 따다 적발 시 벌점 20점
                                        </p>
                                    </S.NoticeRuleCont>
                                    <S.NoticeRuleCont>
                                        <p className='notice_text'>실습실 사용 후 정리는 매너이자 필수 !</p>
                                        <p className='explanation'>
                                            전원, 냉난방, 조명, 책상 의자 배치 등 정리 / 지켜지지 않을 시 2주간 실습실 이용 제한
                                        </p>
                                    </S.NoticeRuleCont>
                                </div>
                            </S.NoticeSubCont>
                        </S.NoticeCont>
                    </S.Header>
                    <S.StudentHeader>
                        <p>
                            안녕하세요, <span style={{ color: "#00AA87", fontWeight: "600" }}>사용자</span>님
                        </p>
                        <div>
                            <select id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}>
                                <option value="asc">날짜 오름차순</option>
                                <option value="desc">날짜 내림차순</option>
                            </select>
                            <button onClick={fetchAvailableLabs} disabled={isLoading}>조회</button>
                        </div>
                    </S.StudentHeader>
                    <S.Body>
                        <S.BodyWrap>
                            <S.RentalCont>
                                <p className="list_detail">대여 실습실</p>
                                <p className="list_detail">대표자</p>
                                <p className="list_detail">사용 인원</p>
                                <p className="list_detail">사용 목적</p>
                                <p className="list_detail">대여날짜</p>
                                <p className="list_detail">대여시간</p>
                            </S.RentalCont>
                            {isLoading ? (
                                <C.Loading children="조금만 기다려주세요.."/>
                            ) : sortedRequests.length > 0 ? (
                                sortedRequests.map((request) => (
                                    <S.RentalUserWrap key={request.userId}>
                                        <S.Tooltip className="user_detail">{request.labName}</S.Tooltip>
                                        <p className="user_detail">{request.rentalUser}</p>
                                        <S.Tooltip className="user_detail">{request.rentalUsers}</S.Tooltip>
                                        <S.Tooltip className="user_detail">{request.rentalPurpose}</S.Tooltip>
                                        <p className="user_detail">{request.rentalDate}</p>
                                        <p className="user_detail">{request.rentalStartTime}</p>
                                        {/* <img src={Symbol} alt="경소마고 로고" className="gbsm_symbol" /> */}
                                    </S.RentalUserWrap>
                                ))
                            ) : (
                                <S.NotRentTextWrap>
                                    <S.CharacterWrap>
                                        <img src={MeisterCharacter} alt="" className="meister_character" />
                                        <img src={SWCharacter} alt="" className="sw_character" />
                                        <img src={GameCharacter} alt="" className="game_character" />
                                    </S.CharacterWrap>
                                    <p style={{ fontSize: 17 }}>아직 신청 완료된 실습실이 없습니다.</p>
                                </S.NotRentTextWrap>
                            )}
                        </S.BodyWrap>
                    </S.Body>
                </S.Parent>
            </S.TopCont>
        </>
    );
};

export default StudentScreen;
