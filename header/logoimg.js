import { createElement } from "react";
import Logo from "./Libertymedia.png";

export default function LogoImg() {
  return createElement("img", {
    src: Logo,
    alt: "로고",
    width: "64px",
    height: "64px",
  });
}
