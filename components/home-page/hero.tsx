import Image from "next/image";
import classes from "./hero.module.css";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section className={classes.hero}>
      {/* <div className={classes.image}>
        <Image
          src="/images/site/yarin.png"
          alt="An image showing Yarin"
          width={300}
          height={300}
        />
      </div> */}
      <h1>Yarin Bar</h1>
      <p>
        <TypewriterComponent
          options={{
            strings: [
              "I am a Fullstack Developer",
              "I write about technologies",
              "I write about web development",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
    </section>
  );
};

export default Hero;
