'use client'
import React from 'react'
import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import styles from '@styles/gallery/gallery.module.scss'
import { Container, Carousel } from 'react-bootstrap'
import CustomerExample_1 from '@public/customer_example_1.jpeg'
import CustomerExample_2 from '@public/customer_example_2.jpeg'
import CustomerExample_3 from '@public/customer_example_3.jpeg'
import ThreePeopleImg from '@public/three-people_img.png'

interface IGalleryImage {
    name: string;
    img: StaticImageData;
    alt: string;
}

const Gallery: NextPage = () => {

    const galleryImages: IGalleryImage[] = [
        {
            name: 'Customer Example 1',
            img: CustomerExample_1,
            alt: 'First slide',
        },
        {
            name: 'Three People',
            img: ThreePeopleImg,
            alt: 'Second slide'
        },
        {
            name: 'Customer Example 3',
            img: CustomerExample_3,
            alt: 'Third slide'
        },
        {
            name: 'Customer Example 2',
            img: CustomerExample_2,
            alt: 'Fourth slide',
        },
    ]

    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Gallery</h1>

            <Carousel className={styles.carousel} variant='dark'>
                {galleryImages.map(image => (
                    <Carousel.Item key={image.name} className={styles.carouselItem}>
                        <Image src={image.img} alt={image.alt} className={styles.carouselImg} />
                        {/* <Carousel.Caption>

                        </Carousel.Caption> */}
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    )
}

export default Gallery