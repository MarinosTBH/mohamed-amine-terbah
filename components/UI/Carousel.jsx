import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselComponent({ id, images }) {
    return (
        <div className="h-[500px] w-full">
            <Carousel>
                {images.map((img) => (
                    <div key={img} className="relative w-full h-full duration-700 ease-in-out">
                        <Image
                            fill
                            src={img}
                            className="object-cover md:object-contain" // Cover for large screens, Contain for mobile
                            alt={`${id} ${img.split("/").pop()}`}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
