import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { HiPlus } from "react-icons/hi";

import styles from "@/styles/House.module.css";
import { HouseModel } from "@/models/HouseModel";

function House(props: HouseModel) {
  return (
    <section className={styles.house_container}>
      <section className={styles.image_container}>
        <CiHeart className={styles.favorite_icon} />
        <Image
          src={`/assets/imgs/${props.img}`}
          width={1000}
          height={1000}
          alt="House Image"
          className={styles.house_image}
        ></Image>
      </section>
      <section className={styles.house_description_container}>
        <span className={styles.price}>{props.price}</span>
        <span className={styles.address}>{props.address}</span>
      </section>
      <section className={styles.details_container}>
        <button className={styles.details_button}>
          View Details
          <HiPlus className={styles.plus_icon} />
        </button>
      </section>
    </section>
  );
}

export default House;
