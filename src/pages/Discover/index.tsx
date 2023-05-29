import Card from "@/components/Card";
import { AutomationList } from "./discover.object";
import { StyledDiscoverContainer } from "./discover.style";

export default function Discover() {
  const handleCardClick = (cardKey: string) => {
    console.log(`Card with key ${cardKey} was clicked.`);
    const automation = AutomationList.find(
      (automation) => automation.key === cardKey
    );
  };

  return (
    <StyledDiscoverContainer>
      <h1>Discover</h1>
      <div className="card-container">
        {AutomationList.map((card) => (
          <Card
            key={card.key}
            title={card.title}
            content={card.content}
            size="medium"
            onClick={() => handleCardClick(card.key)}
          />
        ))}
      </div>
    </StyledDiscoverContainer>
  );
}
