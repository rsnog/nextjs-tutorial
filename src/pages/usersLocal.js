import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = response.data;
    setUsers(data);
  };

  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

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
        <div>{user.username}</div>
      ))}
    </div>
  );
}
