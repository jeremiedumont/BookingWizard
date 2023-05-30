import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled from "styled-components";
import wave from "./9707.jpg";

interface LayoutProps {
  children: ReactNode;
}

const WaveImage = styled(Image)`
  width: 100%;
  height: 20%;
`;

const LogoImage = styled(Image)`
  height: 90%;
  width: auto;
`;

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const onTitleClick = () => {
    router.push("/");
  };

  return (
    <div className="app-main">
      <div className="app-layout">
        {/* <LogoImage src={logo} alt="logo" /> */}
        <h1
          onClick={onTitleClick}
          style={{ cursor: "pointer", color: "#2292a4" }}
        >
          BookingWizard
        </h1>
      </div>
      <div className="app-main">{children}</div>
      <WaveImage src={wave} alt="wave" />
    </div>
  );
}
