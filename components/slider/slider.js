import styles from './slider.module.css'
import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
const ITEMS = [
    {
        id: 1,
        title: 'Save watter',
        description:
            'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        image: '/slider-img1.png',
    },
    {
        id: 2,
        title: 'Plant trees',
        description:
            'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        image: '/slider-img2.png',
    },
    {
        id: 3,
        title: 'Save energy',
        description:
            'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        image: '/slider-img5.png',
    },
    {
        id: 4,
        title: 'Avoid plastic',
        description:
            'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        image: '/slider-img6.png',
    },
    {
        id: 5,
        title: 'Choose organic',
        description:
            'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        image: '/slider-img3.png',
    },
]
export default function SliderReact(props) {
    const [currentIndex, setCurrentIndex] = useState(0)

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
                        return index == currentIndex ? (
                            <div
                                key={item.title}
                                className={styles.sliderSelectedItem}
                            >
                                <div className={styles.selectedSliderDiv}>
                                    {' '}
                                    <img
                                        src={item.image}
                                        className={styles.selectedSliderImg}
                                    />
                                    <img
                                        src="/bg.png"
                                        className={styles.bgImg}
                                    />
                                    <div className={styles.selectedSliderText}>
                                        <h1
                                            className={
                                                styles.selectedSliderTitle
                                            }
                                        >
                                            {item.title}
                                        </h1>
                                        <p className={styles.sliderDescription}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={item.title} className={styles.sliderItem}>
                                <div className={styles.sliderDiv}>
                                    {' '}
                                    <img
                                        src={item.image}
                                        className={styles.sliderImg}
                                    />
                                    <h1 className={styles.sliderTitle}>
                                        {item.title}
                                    </h1>
                                </div>
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
