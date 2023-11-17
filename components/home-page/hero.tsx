import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/yarin.png"
          alt="An image showing Yarin"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Yarin</h1>
      <p>I write about tech</p>
    </section>
  );
};

export default Hero;
