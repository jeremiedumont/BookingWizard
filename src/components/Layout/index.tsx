import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const onTitleClick = () => {
    router.push("/");
  };

  return (
    <div className="app-main">
      <div className="app-layout color-primary">
        <h1 onClick={onTitleClick} style={{ cursor: "pointer" }}>
          TicketWizard
        </h1>
      </div>
      <div className="app-main">{children}</div>
    </div>
  );
}
