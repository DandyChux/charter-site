'use client'
import React from 'react'
import { Container, Card, CardGroup, Table } from 'react-bootstrap'
import styles from '@styles/services/service.module.scss'

interface IPrices {
    time?: string;
    price: string;
}

interface IServices {
    title: string;
    subtitle?: string;
    rates: IPrices[]
}

export default function Services() {

    const serviceList: IServices[] = [
        {
            title: 'Full Day Fishing',
            subtitle: '(up to 4 anglers)',
            rates: [
                // ['6 hours', '$450'],
                // ['8 hours', '$600']
                {
                    time: '6 hours',
                    price: '$450'
                },
                {
                    time: '8 hours',
                    price: '$600'
                }
            ]
        },
        {
            title: 'Half Day Fishing',
            subtitle: '(up to 4 anglers)',
            rates: [
                {
                    time: '4 hours',
                    price: '$350'
                }
            ]
        },
        {
            title: 'Scalloping Trip w/ cleaning tutorial',
            rates: [
                {
                    time: '6 hours',
                    price: '$550'
                }
            ]
        },
        {
            title: 'Bird Watching / Eco Tours / Photography Tours',
            rates: [
                {
                    time: '4 hours',
                    price: '$300',
                },
                {
                    time: '6 hours',
                    price: '$400'
                }
            ]
        },
        {
            title: 'Sand Bar Trips',
            rates: [
                {
                    time: '4 hours',
                    price: '$300',
                }
            ]
        },
        {
            title: 'Sunset Cruise',
            rates: [
                // ['$250']
                {
                    price: '$250'
                }
            ]
        },
    ];

    return (
        <Container>
            
            <h1 className={styles.serviceHeader}>Our Services</h1>

            <CardGroup className={styles.serviceList}>
                {serviceList.map((service) => (
                    <div key={service.title} className={styles.cardContainer}>
                        <Card className={styles.card} border={'primary'}>
                            <Card.Header as={'div'} className={styles.cardHeader}>
                                {service.title}
                                <br />
                                {service.subtitle}
                            </Card.Header>
                            <Card.Body>
                                <Table responsive striped="columns">
                                    <thead>
                                        <tr>
                                            <th>Time</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {service.rates.map(rate => (
                                                <>
                                                    <tr key={rate.price}>
                                                        <td>{rate.time}</td>
                                                        <td>{rate.price}</td>
                                                    </tr>
                                                </>
                                            ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </CardGroup>

        </Container>
    )
}