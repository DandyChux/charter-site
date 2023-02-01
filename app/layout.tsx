import React from 'react'
import '@styles/globals.scss'
import Header from '@components/Header'
import ContactForm from '@components/Contact'

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {

    return (
        <html lang='en'>
            <body>
                <Header />
                {children}
                <ContactForm />
            </body>
        </html>
    )
}

export default Layout;