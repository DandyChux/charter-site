import React from 'react'
import Image from 'next/image'
import CaptainImage from '~public/captain_hayden.jpeg'

export default function About() {

    return (
        <div className='flex flex-col'>
            <h1 className='my-2 mx-0'>About the Captain</h1>

            <div className='flex flex-col gap-4 md:flex-row w-full my-8 mx-0'>
                <div className='w-full h-[20rem] md:w-[45rem] md:h-[35rem] shadow-md flex-1'>
                    <Image src={CaptainImage} alt='Captain Hayden' className='w-full h-full' />
                </div>
                <div className='w-full text-center md:w-[50%]'>
                    <p className='p-4 text-2xl text-right'>
                        My name is Hayden Tschieder I was born and raised right here in the Florida pan handle and have spent my life getting to know the beautiful forgotten coast and the amazing fishery it provides us with. Whether you&apos;re looking to go fishing, scalloping, bird watching, take an eco tour, spend a relaxing day on the sandbar, or watch the beautiful sun set over the water I&apos;ve got you covered. Bring your friends and family and come join me for an action packed day on the water.
                    </p>
                </div>
            </div>
        </div>
    )
}