import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import axios from "axios";

function Profile({ user = {} }) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
    { params: { id: context.params.id } }
  );
  const user = await response.data[0];

  return {
    props: { user }, //will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export default Profile;
