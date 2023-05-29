import Card from "@/components/Card";
import { useRouter } from "next/router";
import { useEffect } from "react";

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

  useEffect(() => {}, []);

  return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="card-container">
        {options.map((option) => (
          <Card
            key={option.id}
            title={option.title}
            content={option.content}
            onClick={option.onClick}
            size="large"
          />
        ))}
      </div>
    </div>
  );
}
