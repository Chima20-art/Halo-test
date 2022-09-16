import React, { useState } from 'react'
import styles from './slider.module.css'

export default function Slider() {
    const [openAnswer, setOpenAnswer] = useState(true)

    return <div className={styles.sliderContainer}></div>
}
