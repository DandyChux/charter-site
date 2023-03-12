'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import OnPointLogo from '@public/On_Point_Charters_Logo.png'
import Person4 from '@public/person_4.jpeg'
import CustomerExampleIMG from '@public/customer_example_1.jpeg'
import ThreePeopleIMG from '@public/three-people_img.png'
import styles from '@styles/Home.module.scss'

export default function Home() {
    return (
      <>
        <Container className={styles['main-container']}>
            <div className={styles['hero-image']}>
                <Image src={OnPointLogo} alt="On Point Charter Logo" style={{ height: '100%', width: '100%'}} />
            </div>
            <h1 className={styles['home-title']}>Set Sail with On Point Charters</h1>
            <h5 className={styles['home-subtitle']}>Join me for an exciting day out on the water, where you can go fishing, bird watching, and sightseeing.</h5>

            <div className={styles['example-image']}>
                <Image src={ThreePeopleIMG} alt='example customer image' style={{ height: '100%', width: '100%' }} />
                <Image src={CustomerExampleIMG} alt='example customer image' style={{ height: '100%', width: '100%'}} />
            </div>
        </Container>
      </>
    )
}