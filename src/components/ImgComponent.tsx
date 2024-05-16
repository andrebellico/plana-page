'use client'

import React, { useState, useEffect } from 'react'
import { Blurhash } from 'react-blurhash'
import NextImage from 'next/image'

interface ImageComponentProps {
  src: string
  width?: number
  height?: number
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  width,
  height,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImageLoaded(true)
    }
  }, [src])

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash="L56kbYE0?^oyE2xaofof-oRjofaf"
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && (
        <NextImage
          objectFit="cover"
          alt="home"
          className="absolute top-0 left-0 w-full h-[95vh]"
          layout="fill"
          src={src}
          width={width}
          height={height}
        />
      )}
    </>
  )
}

export default ImageComponent
