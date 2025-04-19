import * as S from "./style";

import React from "react";

interface TooltipProps {
  text: string;
  maxLength: number;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, maxLength, className }) => {
  const isTruncated = text.length > maxLength;
  const displayText = isTruncated ? `${text.slice(0, maxLength)}...` : text;

  return (
    <S.Tooltip className={className}>
      <span>{displayText}</span>
      {isTruncated && (
        <span className="tooltiptext" aria-label={`Full text: ${text}`}>
          {text}
        </span>
      )}
    </S.Tooltip>
  );
};

export default Tooltip;