import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "@/styles/Layout.module.css";
import Image from "next/image";
import logoAleia from "@/assets/imgs/logo_aleia.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateModel } from "@/models/StateMode";
import { toogleMenu } from "@/redux/actions";

type LayoutProps = {
  children?: React.ReactNode;
  toogleMenu: () => void;
};

function Layout({ children, toogleMenu }: LayoutProps) {
  const menuIsOpen = useSelector((state: StateModel) => state.menu_is_open);

  const handleOpenMenu = () => {
    toogleMenu();
  };

  return (
    <main className={styles.main_container}>
      <header className={styles.header_container}>
        <Image src={logoAleia} alt="Logo Aleia" className={styles.logo} />
        <menu className={styles.menu_container}>
          <section
            className={styles.mobile_menu_container}
            onClick={handleOpenMenu}
          >
            {menuIsOpen && <CgClose size={20} />}
            {!menuIsOpen && <CgMenuRight size={20} />}
          </section>
          <section className={styles.full_menu_container}>
            <section className={styles.menu_items_container}>
              <Link href="">About us</Link>
              <Link href="">Projects</Link>
              <Link href="">Cateer</Link>
              <Link href="">Contacts</Link>
            </section>
            <span className={styles.language}>En</span>
          </section>
        </menu>
      </header>
      {children}
    </main>
  );
}

const mapDispatchToProps = {
  toogleMenu,
};

export default connect(null, mapDispatchToProps)(Layout);
