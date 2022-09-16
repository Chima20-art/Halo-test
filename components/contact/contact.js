import React, { useState } from 'react'
import styles from './contact.module.css'

export default function Contact() {
    const [openAnswer, setOpenAnswer] = useState(true)

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactText}>
                {' '}
                <p className={styles.title}>Ready to Get started?</p>
                <p className={styles.text}>
                    When pattern is mentioned in interior design, it is easy to
                    asso- ciate it with a geometric patterned wallpaper or
                    colourful prints on interior fabrics.{' '}
                </p>
                <button className={styles.contactButton}>Contact us</button>
            </div>
            <div className={styles.contactQuestions}>
                <div className={styles.questionDiv}>
                    <div className={styles.question}>
                        <div className={styles.questionTitle}>
                            What can I do to protect our planet?
                        </div>
                        <div
                            className={styles.plusIcon}
                            onClick={() => setOpenAnswer(!openAnswer)}
                        >
                            {openAnswer ? (
                                <img src="/plusButton.svg" />
                            ) : (
                                <img src="/minusButton.svg" />
                            )}
                        </div>
                    </div>
                    {!openAnswer && (
                        <div className={styles.paragraph}>
                            Not to make an open fire in nature and to clean up
                            litter; not to pollute open water bodies; to switch
                            to alternative energy sources; to reduce the use of
                            non-renewable resources
                        </div>
                    )}
                </div>
                <div className={styles.questionDiv}>
                    <div className={styles.question}>
                        <div className={styles.questionTitle}>
                            What can I do to protect our planet?
                        </div>
                        <div
                            className={styles.plusIcon}
                            onClick={() => setOpenAnswer(!openAnswer)}
                        >
                            {openAnswer ? (
                                <img src="/plusButton.svg" />
                            ) : (
                                <img src="/minusButton.svg" />
                            )}
                        </div>
                    </div>
                    {!openAnswer && (
                        <div className={styles.paragraph}>
                            Not to make an open fire in nature and to clean up
                            litter; not to pollute open water bodies; to switch
                            to alternative energy sources; to reduce the use of
                            non-renewable resources
                        </div>
                    )}
                </div>
                <div className={styles.questionDiv}>
                    <div className={styles.question}>
                        <div className={styles.questionTitle}>
                            What can I do to protect our planet?
                        </div>
                        <div
                            className={styles.plusIcon}
                            onClick={() => setOpenAnswer(!openAnswer)}
                        >
                            {openAnswer ? (
                                <img src="/plusButton.svg" />
                            ) : (
                                <img src="/minusButton.svg" />
                            )}
                        </div>
                    </div>
                    {!openAnswer && (
                        <div className={styles.paragraph}>
                            Not to make an open fire in nature and to clean up
                            litter; not to pollute open water bodies; to switch
                            to alternative energy sources; to reduce the use of
                            non-renewable resources
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
