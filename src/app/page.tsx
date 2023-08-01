import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '~public/On_Point_Charters_Logo.png'
import { Button } from "~/components/ui/button";

export default function Home() {
    return (
        <div className='flex flex-col p-4'>
            <div className='w-full flex flex-col space-y-3 items-center justify-center text-center'>
                <h1>
                    Set Sail with On Point Charters
                </h1>
                <h5 className='text-primary/75 text-lg font-medium md:w-[26rem]'>
                    Join me for an exciting day on the water, where you can go fishing, bird watching, and sightseeing.
                </h5>
            </div>

            <div className='relative w-[20rem] h-[25rem] md:w-[45rem] md:h-[45rem] mx-auto -mt-32 md:-mt-56 md:mb-8'>
                <Image src={Logo} alt='Logo' fill />
            </div>

            <Link href='/services' className='mx-auto' passHref>
                <Button>Learn more</Button>
            </Link>

            <div>
                {/* Example images go here, maybe */}
            </div>
        </div>
    )
}