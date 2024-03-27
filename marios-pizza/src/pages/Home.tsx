import { Carousel } from "../components/Carousel";
import { AboutUs } from "./AboutUs";

const images = [
  {
    src: "/images/carousel-pics/Mario's.Jan-4.jpg",
    alt: "image1",
  },
  {
    src: "/images/carousel-pics/Mario's.Jan-15.jpg",
    alt: "image2",
  },
  {
    src: "/images/carousel-pics/Mario's.Jan-26.jpg",
    alt: "image3",
  },
  {
    src: "/images/carousel-pics/Mario's.Jan-40.jpg",
    alt: "image4",
  },
  {
    src: "/images/carousel-pics/Mario's.Jan-44.jpg",
    alt: "image5",
  },
];

export function Home() {
  return (
    <>
      <Carousel images={images} />
      <AboutUs />
    </>
  );
}
