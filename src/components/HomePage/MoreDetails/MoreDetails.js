import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import details from "../../../assets/Landing/details.jpg";
import styles from "./MoreDetails.module.css";

function MoreDetails() {
  const router = useRouter();
  return (
    <>
      <div className={styles.more_details}>
        <div className={styles.more_details__left__title} data-aos="fade-up">
          Simplify your Hiring Process with Arch X
        </div>
        <div className={styles.more_details__right} data-aos="fade-up">
          <div className={styles.more_details__right__image}>
            <Image src={details} alt="logo" />
          </div>
        </div>
        <div className={styles.more_details__left} data-aos="fade-up">
          <div className={styles.more_details__left__subtitle}>
            {" "}
            1. Arch X makes hiring architects easy and hassle-free.
            <br />
            <br />
            2. Our Platform allows you to create job postings, review
            applications, and communicate with candidates all in one place.
            <br />
            <br />
            3. With archX, you can streamline your hiring process and save time
            and effort while finding the best candidates for your team.
          </div>
          <div className={styles.more_details__left__buttons}>
            <div
              className={styles.more_details__left__button}
              onClick={() => router.push("/architects")}
            >
              Get Started
            </div>
            <div className={styles.more_details__left__button}>Learn More</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreDetails;
