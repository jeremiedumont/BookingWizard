import { Automation, AutomationList } from "@/objects/automations.object";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledAutomationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Add this line */
  align-items: center; /* Add this line */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`;

export default function Automation() {
  const router = useRouter();
  const [automation, setAutomation] = useState<Automation>(null);

  useEffect(() => {
    const automationFound: Automation = AutomationList.find(
      (automation) => automation.key === router.query.automationKey
    );

    if (automationFound) {
      setAutomation(automationFound);
    }
  }, [router.query.automationKey]);

  return (
    <StyledAutomationContainer>
      <h1>{automation?.title}</h1>
    </StyledAutomationContainer>
  );
}
