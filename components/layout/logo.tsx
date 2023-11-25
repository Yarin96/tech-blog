import Image from "next/image";
import classes from "./logo.module.css";
import logo from "../../public/images/site/coffee-beans.png";

export default function Logo() {
  return <Image src={logo} alt="Site Logo" className={classes.logo} />;
}
