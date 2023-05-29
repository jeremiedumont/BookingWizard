import {
  StyledCard,
  StyledCardHeading,
  StyledCardParagraph,
} from "./card.style";

interface CardProps {
  title: string;
  content: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const Card = ({ title, content, onClick, size = "small" }: CardProps) => {
  return (
    <StyledCard size={size} onClick={onClick}>
      <StyledCardHeading size={size}>{title}</StyledCardHeading>
      <StyledCardParagraph size={size}>{content}</StyledCardParagraph>
    </StyledCard>
  );
};

export default Card;
