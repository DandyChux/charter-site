'use client'
import React from 'react'
import { Form, FloatingLabel, Button, FormGroup } from 'react-bootstrap'
import styles from '@styles/contact/contact.module.scss'

const ContactForm: React.FC = () => {

    return (
        // Name, Email, Phone, Message
        <Form className={styles.form}>
            <h2 className={styles['form-header']}>Get In Touch</h2>

            <FloatingLabel label='Name*' controlId='floatingName' className={styles['form-area']}>
                <Form.Control type='text' placeholder='John Smith' required />
            </FloatingLabel>
            <FloatingLabel label='Email*' controlId='floatingEmail' className={styles['form-area']}>
                <Form.Control type='email' placeholder='name@example.com' required />
            </FloatingLabel>
            <FloatingLabel label='Phone' controlId='floatingNumber' className={styles['form-area']}>
                <Form.Control type='number' placeholder='(123)456-7890' />
            </FloatingLabel>
            <FloatingLabel label='Message*' controlId='floatingTextarea' className={styles['form-area']}>
                <Form.Control as='textarea' placeholder='Leave your message here' required />
            </FloatingLabel>

            <Button variant='primary' type='submit' className={styles['form-button']}>Submit</Button>
        </Form>
    )
}

export default ContactForm