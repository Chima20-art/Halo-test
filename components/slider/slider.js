import styles from './slider.module.css'
import React, { useState, useRef } from 'react'
import Slider from 'react-slick'

export default function SliderReact(props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const ITEMS = [
        {
            id: 2,
            title: 'Save watter',
            description:
                'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            image: '/img.png',
        },
        {
            id: 3,
            title: 'Plant trees',
            description:
                'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            image: '/img2.png',
        },
        {
            id: 4,
            title: 'Save energy',
            description:
                'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            image: '/img4.png',
        },
        {
            id: 0,
            title: 'Avoid plastic',
            description:
                'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            image: '/img5.png',
        },
        {
            id: 1,
            title: 'Choose organic',
            description:
                'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            image: '/img3.png',
        },
    ]
    const sliderRef = useRef(null)

    const settings = {
        className: 'slider variable-width',
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        dots: false,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentIndex(newIndex)
        },
    }

    return (
        <div className={styles.container}>
            <div>
                <Slider ref={sliderRef} {...settings} className={styles.slider}>
                    {ITEMS.map((item, index) => {
                        return (
                            <div
                                key={item.title}
                                className={
                                    index == currentIndex
                                        ? styles.sliderSelectedItem
                                        : styles.sliderItem
                                }
                            >
                                <h1>{item.title}</h1>
                            </div>
                        )
                    })}
                </Slider>
                <div className={styles.sliderControles}>
                    <img
                        onClick={() => {
                            sliderRef?.current?.slickPrev()
                        }}
                        className={styles.controleSvg}
                        src="/leftArrow.svg"
                    />
                    <p className={styles.controleText}>
                        {currentIndex + 1}/{ITEMS.length}
                    </p>
                    <img
                        onClick={() => {
                            sliderRef?.current?.slickNext()
                        }}
                        className={styles.controleSvg}
                        src="/rightArrow.svg"
                    />
                </div>
            </div>
        </div>
    )
}
