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
            <h1 className='mb-8'>
                Gallery
            </h1>

            {/* Make a grid with the images */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {imageData.images.map((image, index) => (
                    <div key={index} className='relative h-64 motion-safe:hover:scale-105 duration-500'>
                        <Image 
                            src={image} 
                            alt={image}
                            loading={imageData.images.length > 8 ? 'lazy' : 'eager'}
                            sizes='(min-width: 768px) 33vw, 
                                (min-width: 1024px) 25vw,
                                (min-width: 1280px) 20vw,
                                (min-width: 1536px) 16vw,
                                100vw'
                            fill
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}