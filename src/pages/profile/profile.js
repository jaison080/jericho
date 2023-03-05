import { Navbar } from "@/components";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "../../styles/Architect.module.css";

function Profile() {
  return (
    <>
      <Navbar />
      <div className={styles.architect_details__container}>
        {/* <h1></h1> */}
        <div className={styles.architect_details}>
          <div className={styles.architect_details__image}>
            <img
              src="
              https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60           "
              alt=""
            />
          </div>
          <div className={styles.architect_details__info}>
            <h2>@username</h2>
            <h3>Company: @building_blocks</h3>
            <p>UX Designer, coffee enthusiast, and dog lover, looking to collabote in house designs. Currently building beautiful interfaces at XYZ Agency. Let's connect and collaborate!</p>
          </div>
          <div className={styles.architect_details__social}>
            <button className={styles.btn}>Follow</button>
            <button className={styles.btn}>Reach out</button>
          </div>
          <div className={styles.architect_details__social}>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;