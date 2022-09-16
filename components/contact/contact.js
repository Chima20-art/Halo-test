import React, { useState } from 'react'
import styles from './contact.module.css'

export default function Contact() {
    const [openAnswer, setOpenAnswer] = useState(true)
    var questions = [
        {
            question: 'What can I do to protect our planet?',
            answer: ' Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources ',
        },
        {
            question: 'How to save nature ecology?',
            answer: ' Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources ',
        },
        {
            question: 'What is nature conservation?',
            answer: ' Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources ',
        },
    ]

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
                {questions.map((item) => {
                    return (
                        <div className={styles.questionDiv}>
                            <div className={styles.question}>
                                <div className={styles.questionTitle}>
                                    {item.question}
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
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
