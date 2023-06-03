import { TestAPI } from "@/api/test";
import Card from "@/components/Card";
import { StyledCardList } from "@/components/Card/card.style";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Add this line */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: #f08080;
  margin: 0;
`;

export default function Home() {
  const router = useRouter();
  const options = [
    {
      id: 1,
      title: "Discover",
      content: "Find our new potential automations",
      onClick: () => router.push("/Discover"),
    },
    {
      id: 2,
      title: "My Automations",
      content: "Look at your current automations",
    },
  ];

  useEffect(() => {
    //Using default fetch
    // const getHello = async () => {
    //   const res = await fetch("http://localhost:4000/");
    //   const data = await res.json();
    //   console.log(data);
    // };

    const hello = async () => {
      const res = await TestAPI.getHello();
      const data = await res.json();
      console.log(data);
    };
    hello();
  }, []);

  return (
    <StyledHomeContainer>
      <StyledCardList>
        {options.map((option) => (
          <Card
            key={option.id}
            title={option.title}
            content={option.content}
            onClick={option.onClick}
            size="large"
          />
        ))}
      </StyledCardList>
    </StyledHomeContainer>
  );
}
