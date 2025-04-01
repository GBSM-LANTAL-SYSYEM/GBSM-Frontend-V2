import * as S from "./style"

import { ErrorCharacter } from "@/assets";

const NotFound = () => {
    return (
        <S.TopCont>
            <S.MainWrap>
                <img src={ErrorCharacter} alt="404 에러 캐릭터" />
                <h1>4<span>0</span>4</h1>
                <h2>이 페이지는 없는 페이지입니다.</h2>
            </S.MainWrap>
        </S.TopCont>
    )
};

export default NotFound