import styled, { css } from "styled-components";

interface StyledCardProps {
  size: "small" | "medium" | "large";
}

interface StyledCardListProps {
  orientation?: "horizontal" | "vertical";
}

const getSizeClassName = ({ size }: StyledCardProps) => {
  const sizeSmall = css`
    font-size: 12px;
  `;
  const sizeMedium = css`
    font-size: 16px;
  `;
  const sizeLarge = css`
    font-size: 22px;
  `;

  const sizeMap = {
    small: sizeSmall,
    medium: sizeMedium,
    large: sizeLarge,
  };

  return sizeMap[size];
};

const getOrientation = ({ orientation }: StyledCardListProps) => {
  if (orientation === "horizontal") {
    return css`
      flex-direction: row;
    `;
  }

  return css`
    flex-direction: column;
  `;
};

const StyledCard = styled.div<StyledCardProps>`
  background-color: #fffdfb;
  color: #2292a4;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-basis: 50%;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  ${getSizeClassName}
`;

const StyledCardHeading = styled.h3<StyledCardProps>`
  margin: 0;
  width: 100%;
  text-align: center;
  ${getSizeClassName}
`;

const StyledCardDivider = styled.p`
  border-bottom: 1px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: lightgray;
  border-style: solid;
  width: 100%;
  margin: 10px;
`;

const StyledCardParagraph = styled.p<StyledCardProps>`
  margin: 0;
  text-align: center;
  ${getSizeClassName}
`;

const StyledCardList = styled.div<StyledCardListProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  padding: 5%;
`;

export {
  StyledCard,
  StyledCardHeading,
  StyledCardParagraph,
  StyledCardList,
  StyledCardDivider,
};
