import React, { useState } from "react";
import styles from "./LogIn.module.css";
const Registration = () => {
  return (
    <div className={`${styles.form} `}>
      <div className={`${styles["form-panel"]}  `}>
        <div className={styles["form-header"]}>
          <h1>Register Account</h1>
        </div>
        <div className={styles["form-content"]}>
          <form>
            <div className={styles["form-group"]}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required="required"
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required="required"
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                required="required"
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required="required" />
            </div>
            <div className={styles["form-group"]}>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Registration;
