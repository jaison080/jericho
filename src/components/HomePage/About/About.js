import Image from "next/image";
import React from "react";
import styles from "./About.module.css";
import logo from "../../../assets/Landing/logo.png";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();
  return (
    <>
      <div className={styles.about}>
        <div className={styles.about__left} data-aos="fade-up">
          <div className={styles.about__left__title}>
            Find the Best Architectural Talent with Arch X
          </div>
          <div className={styles.about__left__subtitle}>
            1. With Arch X, you can easily search and find the most talented
            architects to join your team.
            <br />
            <br />
            2. Our platform features a wide range of experienced and skilled
            architects from various backgrounds, allowing you to build the
            perfect team for your project.
            <br />
            <br />
            3. Whether you need a project manager, designer, or technical
            expert, Arch X has got you covered.
          </div>
          <div className={styles.about__left__buttons}>
            <div
              className={styles.about__left__button}
              onClick={() => router.push("/architects")}
            >
              Get Started
            </div>
            <div className={styles.about__left__button}>Learn More</div>
          </div>
        </div>
        <div className={styles.about__right} data-aos="fade-up">
          <div className={styles.about__right__image}>
            <Image src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
