import React, { useState } from 'react'
import styles from '../Header/header.module.css'
import Image from 'next/image'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className={styles.headerContainer}>
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
                    <div className={styles.menuItem}>Home</div>
                    <div className={styles.menuItem}>Our mission</div>
                    <div className={styles.menuItem}>Places</div>
                    <div className={styles.menuItem}>Team</div>
                </div>
                <button className={styles.applyButton}>Apply</button>
                <div className={styles.menu} onClick={() => setOpenMenu(true)}>
                    <Image src="/menu.svg" width={22} height={17} alt="menu" />
                </div>
                {openMenu && (
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <div>
                                <Image
                                    src="/Logo.svg"
                                    width={111}
                                    height={37}
                                    alt="logo"
                                    className={styles.logo}
                                />
                            </div>

                            <div onClick={() => setOpenMenu(false)}>
                                <Image
                                    src="/icon-close.svg"
                                    width={16}
                                    height={16}
                                    alt="icon-close"
                                    className={styles.closeIcon}
                                />
                            </div>
                        </div>
                        <div className={styles.mobileMenu}>
                            <div className={styles.mobileMenuItems}>
                                <div className={styles.menuItem}>Home</div>
                                <div className={styles.menuItem}>
                                    Our mission
                                </div>
                                <div className={styles.menuItem}>Places</div>
                                <div className={styles.menuItem}>Team</div>
                            </div>

                            <button className={styles.mobileApplyButton}>
                                Apply
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
