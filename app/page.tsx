"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
export default function Home() {
  const { push } = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post("/api/auth/login", payload);

      alert("Đăng nhập thành công");

      
      push("/examples");
    } catch (e) {
      const error = e as AxiosError;

      alert("Đăng nhập thất bại");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} >
        <div  className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <div>Login</div>
      </div>
      <br />
      <div className={styles.inputContainer}>
      <input
            type="text"
            id="username"
            name="username"
            required
            className={styles.inputBox}
          />
        
      </div>
      <br />
      <div className={styles.inputContainer}>
      <input
            type="password"
            id="password"
            name="password"
            required
            className={styles.inputBox}
          />
        
      </div>
      <br />
      <div className={styles.inputContainer}>
        <input className={styles.inputButton} type="submit"  value={'Log in'} />
      </div>
    </div>
      </form>
    </main>

  );
}




