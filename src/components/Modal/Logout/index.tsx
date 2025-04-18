import * as S from './style';

import React, { useState, useEffect } from 'react';
import useAuth from '@/hooks/useAuth';
import { GBSM_Symbol } from "@/assets";

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const LogOutModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { handleLogout } = useAuth();

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const confirmLogout = () => {
        handleLogout();
        onClose();
    };

    if (!isVisible) return null;

    return (
        <S.ModalBackground onClick={onClose}>
            <S.ModalWrapper $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <S.ModalLogoCont>
                    <img src={GBSM_Symbol} alt="symbol_new" className='gbsw_new_logo' />
                </S.ModalLogoCont>
                <div style={{ fontSize: '1rem' }}>
                    <span style={{ color: '#00AA87' }}>경북소프트웨어 마이스터고등학교</span>
                </div>
                <div style={{ fontSize: '1rem' }}>
                    <span style={{ color: '#7d7d7d' }}>랩실 대여 시스템</span>
                </div>
                <p>정말로 로그아웃하시겠습니까?</p>
                <S.BtnWrap>
                    <button onClick={confirmLogout} className='del_btn'>확인</button>
                    <button onClick={onClose} className='cancel_btn'>취소</button>
                </S.BtnWrap>
            </S.ModalWrapper>
        </S.ModalBackground>
    );
};

export default LogOutModal;