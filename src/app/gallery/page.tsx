import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Carousel } from '~/components/carousel'

async function getImages() {
    const res = await fetch(`${window.location.origin}/api/images`)
  
    if (!res.ok) {
        throw new Error('Failed to fetch images')
    }
  
    return res.json()
}

type ImageData = {
    images: string[]
}

export default async function Gallery() {
    const imageData = await getImages() as ImageData

    return (
        <div className='flex flex-col'>
            <h1>
                Gallery
            </h1>

            <Carousel images={imageData.images} />
        </div>
    )
}