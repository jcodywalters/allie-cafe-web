import { NextPage } from "next";
import Head from "next/head";
import { drinkMenu, foodMenu, dessertMenu } from "../fixtures";
import styles from "../styles/Menu.module.css";
import { MenuItem } from "../types";


function renderItemComponent(item: MenuItem) {
  return (
    // FIXME: How should keys be handled in a list
    // eslint-disable-next-line react/jsx-key
    <div className={styles["menu-item"]}>
      <span className={styles["menu-item-price"]}>{item.price}</span>
      <div className={styles["menu-item-title"]}>{item.title}</div>
      <div className={styles["menu-item-description"]}>{item.description}</div>
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
              <h2 className={styles.title}>Drinks</h2>
            </div>
            <div className={styles["menu-items"]}>
              {
                drinkMenu.map((item) => renderItemComponent(item as any))
              }
            </div>

            <div className={styles["menu-header"]}>
              <h2 className={styles.title}>Food</h2>
            </div>
            <div className={styles["menu-items"]}>
              {
                foodMenu.map((item) => renderItemComponent(item as any))
              }
            </div>

            <div className={styles["menu-header"]}>
              <h2 className={styles.title}>Dessert</h2>
            </div>
            <div className={styles["menu-items"]}>
              {
                dessertMenu.map((item) => renderItemComponent(item as any))
              }
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Menu;