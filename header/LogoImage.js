import { createElement } from "react";
import Logo from "./Libertymedia.png";

export default function LogoImage() {
  return createElement("img", {
    src: Logo,
    alt: "로고",
    width: "32px",
    height: "32px",
  });
}
