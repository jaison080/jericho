import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import hero from "../../../assets/Landing/hero.png";
import styles from "./Hero.module.css";

function Hero() {
  const router = useRouter();
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__left} data-aos="fade-up">
          <div className={styles.hero__left__title}>Arch X</div>
          <div className={styles.hero__left__subtitle}>
            Design your Dream Property with Arch X.
          </div>
          <div className={styles.hero__left__buttons}>
            <div
              className={styles.hero__left__button}
              onClick={() => router.push("/architects")}
            >
              Get Started
            </div>
            <div className={styles.hero__left__button}>Learn More</div>
          </div>
        </div>
        <div className={styles.hero__right} data-aos="fade-up">
          <div className={styles.hero__right__image}>
            <Image src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
