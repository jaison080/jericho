import ArchitectCard from "@/components/ArchitectCard/ArchitectCard";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import styles from "../styles/Architects.module.css";

function Architects() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>Architects</div>

        <div className={styles.cards_container}>
          <ArchitectCard />
          <ArchitectCard />
          <ArchitectCard />
          <ArchitectCard />
          <ArchitectCard />
          <ArchitectCard />
          <ArchitectCard />
          <ArchitectCard />
        </div>
      </div>
    </>
  );
}

export default Architects;
