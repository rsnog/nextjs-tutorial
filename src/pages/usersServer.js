import Link from "next/link";
import styles from "../../styles/Home.module.css";
import axios from "axios";

function Users({ users }) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      {users.map((user) => (
        <div>{user.email}</div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.data;
  return {
    props: { users: data }, //will be passed to the page component as props
  };
}

export default Users;
