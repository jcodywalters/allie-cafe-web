import { NextPage } from "next";
import Head from "next/head";
import { breakfastMenu } from "../fixtures";
import styles from "../styles/Menu.module.css";
import { MenuItem } from "../types";


function renderItemComponent(item: MenuItem) {
  return (
    // FIXME: How should keys be handled in a list
    // eslint-disable-next-line react/jsx-key
    <div className={styles["menu-item"]}>
      <span className={styles["menu-item-price"]}>$3.25 / $4.00</span>
      <div className={styles["menu-item-title"]}>Drip Coffee</div>
      <div className={styles["menu-item-description"]}>12oz/16oz</div>
    </div>
  )
}

const Menu: NextPage = () => {
  return (
    // FIXME: Is there a better way to do this? styles["{string}"]
    <div className={styles["content-wrapper"]}>
      <Head>
        <title>Allie Cafe</title>
        <meta name="description" content="Allie cafe cooks home made breakfast from scratch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <div className={styles["block-content"]}>
          <h1 className={styles.title}>Our Menu</h1>
        </div>

        <div className={styles["block-spacer"]}>
          <div className={styles["block-content"]}>&nbsp;</div>
        </div>

        <div className={styles.block}>
          <div className={styles["block-content"]}>
            <div className={styles["menu-header"]}>
              <h2 className={styles.title}>Breakfast</h2>
            </div>
            <div className={styles["menu-items"]}>
              {
                breakfastMenu.map((item) => renderItemComponent(item as any))
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Menu;