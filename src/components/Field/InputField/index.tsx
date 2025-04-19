import * as S from "./style";

import React, { useState, useMemo } from "react";
import { getTodayDate } from "@/utils";

interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    name,
    value,
    onChange,
    required = false,
    placeholder,
}) => {
    const today = useMemo(() => getTodayDate(), []);
    const [inputValue, setInputValue] = useState(value ?? (type === "date" ? today : ""));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange(e);
    };

    return (
        <S.InputCont>
            <span>{label}</span>
            <input
                type={type}
                name={name}
                value={inputValue}
                onChange={handleChange}
                required={required}
                placeholder={placeholder}
                {...(type === "date" ? { min: today } : {})}
            />
        </S.InputCont>
    );
};

export default InputField;