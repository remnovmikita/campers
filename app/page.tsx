import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <section className={styles.main}>
   <div className={styles.container}>
   <h1 className={styles.h1}>Campers of your dreams</h1>
   <p className={styles.p}>You can find everything you want in our catalog</p>
   <button className={styles.button}>View Now</button>
   </div>
   </section>
  );
}
