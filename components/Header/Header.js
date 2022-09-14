import React from 'react'
import styles from '../Header/header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <div className={styles.header}>
            {' '}
            <Image
                src="/Logo.svg"
                width={111}
                height={37}
                alt="logo"
                className={styles.logo}
            />
            <div className={styles.menuItems}>
                <div>Home</div>
                <div>Our mission</div>
                <div>Places</div>
                <div>Team</div>
            </div>
            <button className={styles.applyButton}>Apply</button>
            <div className={styles.menu}>
                <Image src="/menu.svg" width={22} height={17} alt="menu" />
            </div>
        </div>
    )
}
