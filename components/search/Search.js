import Image from 'next/image'
import React from 'react'
import Header from '../Header/Header'
import styles from '../search/search.module.css'

export default function Search() {
    return (
        <div className={styles.searchContainer}>
            <Header />
            <div className={styles.content}>
                <div className={styles.contactForm}>
                    <img
                        src="/Headline.svg"
                        alt="headline"
                        className={styles.headline}
                    />

                    <p className={styles.paragraph}>
                        The scale of the challenges facing our planet can seem
                        daunting, but we can all do something.
                    </p>
                    <div className={styles.searchDiv}>
                        <div className={styles.inputDiv}>
                            <Image
                                src="/location.svg"
                                width={14}
                                height={20}
                                alt="location icon"
                            />
                            <input
                                type="text"
                                className={styles.input}
                                id="lname"
                                name="lname"
                                placeholder="Find the place to help"
                            />
                        </div>

                        <button className={styles.searchButton}>SEARCH</button>
                    </div>
                </div>
                <div className={styles.parot}>
                    <img src="/Parrot.svg" className={styles.parotImg}></img>
                    <img src="/card.svg" className={styles.card} />
                </div>
            </div>
        </div>
    )
}
