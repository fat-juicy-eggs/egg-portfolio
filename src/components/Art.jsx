import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Art = () => {
    const images = [
        './one.png',
        './two.png',
        './three.png',
        './four.png',
        './five.png'
    ];
    return (
        <div className='lg:pb-20' id='Art'>
            <div className='z-50 font-bold text-xl md:text-2xl lg:text-3xl sticky top-0 w-full py-2 text-green-500 bg-white opacity-95'>
                Art
            </div>
            <div className='z-20 text-lg md:text-xl xl:text-2xl leading-relaxed space-y-5 mt-5'>
                <h1>
                    Violin
                </h1>
                <p className='text-sm'>
                    Saint Saens Introduction et Rondo Capriccioso 
                    Bach Partita No. 3
                </p>
                <iframe
                    id='ytplayer'
                    type='text/html'
                    width='100%'
                    height='400'
                    src='https://youtube.com/embed/Rmi-3GuTpvs?autoplay=0&controls=1&rel=1'
                    ></iframe>
                <h1>
                    3D art in Blender
                </h1>
                <div className='max-w-full mx-5 z-10'>
                    <Carousel 
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        interval={3000}
                        stopOnHover={true}
                        swipeable={true}
                    >
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} className='w-full h-auto object-cover rounded-lg'></img>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Art;