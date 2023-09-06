import React, { Suspense } from 'react'
import type { Metadata } from 'next';
import Logo from '~public/On_Point_Charters_Logo.png'
import Spinner from '~/components/ui/spinner';
import { ContactForm } from '~/components/contact-form';
import { Header } from '~/components/header';
import { Analytics } from '@vercel/analytics/react'
import Providers from '~/components/providers';

import '~/styles/globals.css'

export const metadata: Metadata = {
    title: {
        default: 'On Point Charters ',
        template: '%s | On Point Charters'
    },
    viewport: {
        width: 'device-width',
        initialScale: 1
    },
    description: 'On Point Charters is a boating charter service in the Florida panhandle.',
    icons: { icon: Logo.src }
    // keywords: ['Next.js', 'Tailwind', 'React', 'TypeScript', 'JavaScript'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Suspense fallback={<div className='relative flex flex-col h-full w-full items-center justify-center'><Spinner /></div>}>
                        <Header />
                        <main className="flex flex-col flex-1 py-12 px-8">
                            {children}
                            <ContactForm />
                        </main>
                    </Suspense>
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}