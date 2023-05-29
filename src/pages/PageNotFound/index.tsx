import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import logo from "./lost.jpg";

export default function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="app-main">
      <Image src={logo} alt="Logo" height={500} />
      <h1>You lost yourself, you will be teleported in a few seconds...</h1>
    </div>
  );
}
