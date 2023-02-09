import React, { useEffect, useState } from "react";
import styles from "@/styles/HouseList.module.css";
import axios from "axios";
import { HouseModel } from "@/models/HouseModel";
import House from "./House";

function HouseList() {
  const [houses, setHouses] = useState<HouseModel[]>([]);

  useEffect(() => {
    axios
      .get("/api/houses")
      .then((response) => {
        const { houses } = response.data;
        setHouses(houses ? houses : []);
      })
      .catch(() => {
        console.error("error");
      });
  }, []);

  return (
    <section className={styles.house_list_container}>
      {houses.map((house) => (
        <House key={house.id} {...house} />
      ))}
    </section>
  );
}

export default HouseList;
