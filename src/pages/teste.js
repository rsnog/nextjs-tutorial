import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Teste() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <div>HELLO WORD</div>
    </div>
  );
}

export default Teste;
