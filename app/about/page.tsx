'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '@styles/about/about.module.scss'
import CaptainHayden from '@public/captain_hayden.jpeg'
import Image from 'next/image'

export default function About() {
    
    return (
        <Container>
            <h1 className={styles.aboutHeader}>About the Captain</h1>

            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <Image src={CaptainHayden} alt='Captain Hayden Tscheider' style={{ width: '100%', height: '100%' }}  />
                </div>
                <div className={styles.textContainer}>
                    <p style={{ padding: '1rem', fontSize: '1.25rem' }}>
                    My name is Hayden Tschieder I was born and raised right here in the Florida pan handle and have spent my life getting to know the beautiful forgotten coast and the amazing fishery it provides us with. Whether you’re looking to go fishing, scalloping, bird watching, take an eco tour, spend a relaxing day on the sandbar, or watch the beautiful sun set over the water I’ve got you covered. Bring your friends and family and come join me for an action packed day on the water.
                    </p>
                </div>
            </div>


        </Container>
    )
}