import Card from "@/components/Card";
import { StyledCardList } from "@/components/Card/card.style";
import {
  Automation,
  AutomationKeys,
  AutomationList,
} from "@/modules/automations/automations.object";
import styled from "styled-components";

const StyledDiscoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Add this line */
  align-items: center; /* Add this line */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`;

export default function Discover() {
  const handleCardClick = (cardKey: AutomationKeys) => {
    console.log(`Card with key ${cardKey} was clicked.`);
    const automation: Automation = AutomationList.find(
      (automation) => automation.key === cardKey
    );
  };

  return (
    <StyledDiscoverContainer>
      <h1>Discover</h1>
      <StyledCardList>
        {AutomationList.map((card) => (
          <Card
            key={card.key}
            title={card.title}
            content={card.content}
            size="medium"
            onClick={() => handleCardClick(card.key)}
          />
        ))}
      </StyledCardList>
    </StyledDiscoverContainer>
  );
}
