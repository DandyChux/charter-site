'use client'
import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Image from 'next/image'
import OnPointLogo from '@public/On_Point_Charters_Logo.png'
import styles from '@styles/header/header.module.scss'

const Header: React.FC = () => {
    var activeLink;

    const handleSelect = (eventKey: any) => {
        console.log(eventKey);
        activeLink = eventKey;
    }

    return (
        <Navbar collapseOnSelect className={styles.navbar} sticky='top' expand='lg'>
            <Container>
                <Navbar.Brand href='/' className={styles['image-container']}>
                    <Image src={OnPointLogo} alt="On Point Charter Logo" placeholder='blur' width={125} height={95} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav' />
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className={styles['navbar-nav']} justify variant='tabs' defaultActiveKey={'/'} activeKey={activeLink} onSelect={handleSelect}>
                        <Nav.Link href='/' eventKey={'/'}>Home</Nav.Link>
                        <Nav.Link href='/about' eventKey={'/about'}>About</Nav.Link>
                        <Nav.Link href='/services' eventKey={'/services'}>Services</Nav.Link>
                        <Nav.Link href='/gallery' eventKey={'/gallery'}>Gallery</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;