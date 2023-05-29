import { useRouter } from "next/router";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const onTitleClick = () => {
    router.push("/");
  };

  return (
    <div className="app-main">
      <div className="app-layout color-primary">
        <h1 onClick={onTitleClick} style={{ cursor: "pointer" }}>
          BookingWizard
        </h1>
      </div>
      <div className="app-main">{children}</div>
    </div>
  );
}
