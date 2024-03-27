import { useState, useEffect } from "react";

type Pictures = {
  caption?: string;
  src: string;
  alt: string;
};

type CarouselProps = {
  images: Pictures[];
};

export function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      if (currentImage >= images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 5000);
    return () => clearInterval(id);
  }, [currentImage, images]);

  return <ImageCarousel images={images} currentImage={currentImage} />;
}

type ImageCarouselProps = {
  images: CarouselProps["images"];
  currentImage: number;
};

function ImageCarousel({ images, currentImage }: ImageCarouselProps) {
  return (
    <div>
      <div className="w-full h-60 sm:h-72 md:h-96 lg:h-screen">
        <img
          className="w-full h-full"
          src={images[currentImage].src}
          alt={images[currentImage].alt}
        />
      </div>
    </div>
  );
}
