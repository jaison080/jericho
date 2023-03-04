import React from "react";
import styles from "./ArchitectCard.module.css";

function ArchitectCard() {
  return (
    <div className={styles.architectcard} data-aos="fade-up">
      <div className={styles.img}>
        <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </div>
      <div className={styles.infos}>
        <div className={styles.name}>
          <h2>Bradley Steve</h2>
          <h4>@bradsteve</h4>
        </div>
        <p className={styles.text}>
          I'm a Front End Developer, follow me to be the first who see my new
          work.
        </p>
        <ul className={styles.stats}>
          <li>
            <h3>15K</h3>
            <h4>Views</h4>
          </li>
          <li>
            <h3>82</h3>
            <h4>Projects</h4>
          </li>
          <li>
            <h3>1.3M</h3>
            <h4>Followers</h4>
          </li>
        </ul>
        <div className={styles.links}>
          <button className={styles.follow}>Follow</button>
          <button className={styles.view}>View profile</button>
        </div>
      </div>
    </div>
  );
}

export default ArchitectCard;
