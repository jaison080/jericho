import { Navbar } from "@/components";
import ArchitectCard from "@/components/ArchitectCard/ArchitectCard";
import CustomTitle from "@/utils/customTitle";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import styles from "../styles/Architect.module.css";

function Profile() {
  return (
    <>
      <CustomTitle title="Profile" />
      <Navbar />
      <div className={styles.architect_details__container}>
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
            <p>
              UX Designer, coffee enthusiast, and dog lover, looking to
              collabote in house designs. Currently building beautiful
              interfaces at XYZ Agency. Let's connect and collaborate!
            </p>
            <div className={styles.architect_details__social} style={{
              padding: "1rem 0",
            }}>
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
            </div>
          </div>
          <div className={styles.followers_container}>
            <h2 className={styles.followers_container_title}>Followers</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
                gap: "4rem",
              }}
            >
              <ArchitectCard />
              <ArchitectCard />
              <ArchitectCard />
            </div>
          </div>
          <div className={styles.followers_container}>
            <h2 className={styles.followers_container_title}>Liked Projects</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
                gap: "4rem",
              }}
            >
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
        </div>
      </div>
    </>
  );
}

export default Profile;
