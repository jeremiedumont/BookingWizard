import Card from "@/components/Card";
import { StyledCardList } from "@/components/Card/card.style";
import { AutomationKeys, AutomationList } from "@/objects/automations.object";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const handleCardClick = (cardKey: AutomationKeys) => {
    console.log(`Card with key ${cardKey} was clicked.`);
    router.push({
      pathname: "/Automation",
      query: {
        automationKey: cardKey,
      },
    });
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
