import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";
import Image from "next/image";
import { useState } from "react";

export default function MainNavigation() {
  const gitHub = "/images/site/link.png";
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const dataLinks = [
    { name: "Home", Link: "/" },
    { name: "Posts", Link: "/posts" },
    { name: "About", Link: "/about" },
    { name: "GitHub", Link: "https://github.com/Yarin96/tech-blog" },
  ];

  const toggleSidebar = () => {
    setActiveHamburger(!activeHamburger);
    setOverlayVisible(!overlayVisible);
  };

  const closeSidebar = () => {
    setActiveHamburger(false);
    setOverlayVisible(false);
  };

  return (
    <>
      <header className={classes.header}>
        <Link href="/">
          <Logo />
        </Link>
        <nav className={classes.desktop}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            {/* <li>
            <Link href="/contact">Contact</Link>
          </li> */}
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link target="_blank" href="https://github.com/Yarin96/tech-blog">
                GitHub{" "}
                <Image
                  src={gitHub}
                  alt="GitHub Link"
                  className={classes.github}
                  width={8}
                  height={3}
                />
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={toggleSidebar}
          className={
            activeHamburger ? classes.activeHamburger : classes.hamburger
          }
          role="button"
          aria-label="Toggle Sidebar"
        />
        <div
          className={activeHamburger ? classes.activeSideBar : classes.sideBar}
        >
          <ul className={classes.links}>
            {dataLinks.map((item) => {
              return (
                <li key={item.name}>
                  {item.name === "GitHub" ? (
                    <Link
                      target="_blank"
                      href={item.Link}
                      onClick={closeSidebar}
                    >
                      GitHub{" "}
                      <Image
                        src={gitHub}
                        alt="GitHub Link"
                        className={classes.github}
                        width={8}
                        height={3}
                      />
                    </Link>
                  ) : (
                    <Link href={item.Link} onClick={closeSidebar}>
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </header>
      {overlayVisible && (
        <div className={classes.overlay} onClick={closeSidebar} />
      )}
    </>
  );
}
