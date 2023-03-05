import { Navbar } from "@/components";
import CustomTitle from "@/utils/customTitle";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "../../styles/Architect.module.css";

function ArchitectDetails() {
  return (
    <>
      <CustomTitle title="Architect Details" />
      <Navbar />
      <div className={styles.architect_details__container}>
        <h1>Architect Details</h1>
        <div className={styles.architect_details}>
          <div className={styles.architect_details__image}>
            <img
              src="
https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60            "
              alt=""
            />
          </div>
          <div className={styles.architect_details__info}>
            <h2>Architect Name</h2>
            <p>Architect Description</p>
          </div>
          <div className={styles.architect_details__social}>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
            <button className={styles.btn}>Follow</button>
          </div>
        </div>
        <div className={styles.architect_details__projects}>
          <h2>Architect Projects</h2>
          <div className={styles.projects__filter}>
            <div className={styles.project}>
              <div className={styles.project__image}>
                <img
                  src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60"
                  alt=""
                />
              </div>
              <div className={styles.project__info}>
                <h3>Project Name</h3>
                <p>Project Description</p>
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.project__image}>
                <img
                  src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60"
                  alt=""
                />
              </div>
              <div className={styles.project__info}>
                <h3>Project Name</h3>
                <p>Project Description</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.architect_details__contact}>
          <button className={styles.contact_btn}>Contact Architect</button>
        </div>
      </div>
    </>
  );
}

export default ArchitectDetails;
