import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nigitha</h1>
        <p className={styles.description}>
          As a budding Software Developer, I bring a fresh perspective and a
          solid foundation in software development gained through academic
          coursework and hands-on projects. Eager to contribute my skills and
          learn from experienced professionals in a dynamic work environment.
        </p>
        <a href="mailto:nigithanaren@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
