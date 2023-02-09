import React from "react";
import styles from "@/styles/HeadInfo.module.css";
import { HiArrowLongRight } from "react-icons/hi2";

function HeadInfo() {
  return (
    <section className={styles.head_info_container}>
      <h2 className={styles.head_info_title}>
        We are an award winning interior design Agency
      </h2>
      <button type="button" className={styles.head_info_btn}>
        <span>view all properties</span>
        <HiArrowLongRight className={styles.arrow_styles} />
      </button>
    </section>
  );
}

export default HeadInfo;
