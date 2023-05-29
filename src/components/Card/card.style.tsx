import styled, { css } from "styled-components";

interface StyledCardProps {
  size: "small" | "medium" | "large";
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

const StyledCard = styled.div<StyledCardProps>`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-basis: 25%;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  ${getSizeClassName}
`;

const StyledCardHeading = styled.h3<StyledCardProps>`
  margin-bottom: 10px;
  border-bottom: 1px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: lightgray;
  width: 100%;
  text-align: center;
  border-style: solid;
  padding-bottom: 2px;
  ${getSizeClassName}
`;

const StyledCardParagraph = styled.p<StyledCardProps>`
  margin: 0;
  text-align: center;
  ${getSizeClassName}
`;

export { StyledCard, StyledCardHeading, StyledCardParagraph };
