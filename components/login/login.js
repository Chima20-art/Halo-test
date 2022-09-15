import React from 'react'
import styles from './login.module.css'

export default function Login() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginText}>
                <p className={styles.title}>Get started today!</p>
                <p className={styles.text}>
                    Learn more about how you can save our planet's nature. From
                    smart consumption to switching to renewable energy, each of
                    us can do our part to save the planet.{' '}
                </p>
            </div>
            <div className={styles.loginForm}>
                <img src="/redVector.png" className={styles.redVector} />
                <img src="/purpleVector.png" className={styles.purpleVector} />
                <h1 className={styles.loginTitle}>Log In </h1>
                <input className={styles.input1} placeholder="name" />
                <input className={styles.input2} placeholder="email" />
                <button className={styles.loginButton}> Book a demo</button>
            </div>
        </div>
    )
}
