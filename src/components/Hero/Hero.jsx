import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shekhar</h1>
        <p className={styles.description}>
          I am currently pursing a degree in Computer Science & Engineering at
          Dharwad.
        </p>
        <p className={styles.description}>
          I have strong passion for full-stack web development, My goal is to
          leverage my technical skills and creativity to develop comprehensive
          solutions that enhance user experiences.
        </p>
        <a href="mailto:shekharmd7373@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
