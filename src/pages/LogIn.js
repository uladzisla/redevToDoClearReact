import React, { useState, useRef } from "react";
import styles from "./LogIn.module.css";

const LogIn = () => {
  // const [dataLogIn, setDataLogIn] = useState([]);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const formControl = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail, enteredPassword);
  };

  return (
    <div className={styles.form} onSubmit={formControl}>
      <div className={`${styles["form-toggle"]} `} />
      <div className={`${styles["form-panel"]} ${styles.one}`}>
        <div className={styles["form-header"]}>
          <h1>Account Login</h1>
        </div>
        <div className={styles["form-content"]}>
          <form>
            <div className={styles["form-group"]}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                ref={emailInputRef}
                id="username"
                name="username"
                required="required"
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                ref={passwordInputRef}
                id="password"
                name="password"
                required="required"
              />
            </div>

            <div className={styles["form-group"]}>
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
