import React, { useState } from 'react'
import styles from './footer.module.css'

export default function Footer() {
    const [openAnswer, setOpenAnswer] = useState(true)

    return (
        <div className={styles.footerContainer}>
            <div className={styles.containerDiv}>
                <p className={styles.bigTitle}> &nbsp;Contacts</p>
                <div className={styles.wrap}>
                    <div className={styles.description}>
                        &nbsp;2019 Rootz Foundation.
                    </div>
                    <div className={styles.description}>
                        &nbsp;All rights reserved
                    </div>
                </div>
            </div>
            <div className={styles.horizontalDiv}>
                <div className={styles.containerDiv1}>
                    <div className={styles.div1}>
                        <p className={styles.smallTitle}> Headerquarters</p>
                        <p className={styles.description}>1234 Taliban, </p>
                        <div className={styles.div3}>
                            <div className={styles.description}>
                                Los Angeles,
                            </div>
                            <div className={styles.description}>
                                {' '}
                                La 1234567
                            </div>{' '}
                        </div>

                        <p className={styles.description}>(123) 456-7890</p>
                    </div>
                </div>
                <div className={styles.containerDiv2}>
                    <p className={styles.smallTitle}> social media</p>
                    <div className={styles.imagesContainer}>
                        <img src="/Facebook.png" className={styles.image} />
                        <img src="/LinkedIn.png" className={styles.image} />
                        <img src="/Twitter.png" className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}
