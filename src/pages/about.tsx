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
          <h1 className={styles.title}>About</h1>
        </div>

        <div className={styles["block-spacer"]}>
          <div className={styles["block-content"]}>&nbsp;</div>
        </div>

        <div className={styles.block}>
          <div className={styles["block-content"]}>
          <h1>There is a bar. Your kids can play in the playroom with my brother he loves kids and he is seven years old and me the chef i am nine years old and there is a nice warm fire place and a sofa i love to make pancakes.</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Menu;