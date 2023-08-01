import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Carousel } from '~/components/carousel'
import { getImages } from '~/lib/utils'

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

            {/* <Carousel images={imageData.images} /> */}
        </div>
    )
}