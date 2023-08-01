"use client"

import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import { Button } from "./ui/button";

export type CarouselProps = {
    images: string[],
    autoSlide?: boolean,
    autoSlideInterval?: number,
}

export const Carousel: React.FC<CarouselProps> = ({ images, autoSlide = true, autoSlideInterval = 3000 }) => {
    const [currentImage, setCurrentImage] = useState(0)

    const prev = () => {
        setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const next = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }

    const goTo = (index: number) => {
        setCurrentImage(index)
    }

    useEffect(() => {
        if (!autoSlide) return

        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex relative overflow-hidden w-full h-full max-w-3xl">
            {images.map((image, index) => (
                <div
                    key={index} 
                    className={`relative w-full h-full transition-opacity duration-500 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`} 
                    // style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                    <Image src={image} alt={image} fill className="h-[30rem] w-full" />
                </div>
            ))}

            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <Button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeftIcon className='w-6 h-6' />
                </Button>
                <Button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRightIcon className='w-6 h-6' />
                </Button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, index) => (
                        <div 
                            key={index}
                            onClick={() => goTo(index)}
                            className={`transition-all w-3 h-3 bg-white rounded-full ${currentImage === index ? 'p-2' : 'bg-opacity-50'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}