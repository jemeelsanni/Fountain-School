import { React } from 'react';
import { useSwiper } from 'swiper/react';

function SlideNextButton() {
  const swiper = useSwiper();

  return (
      <div>
          <span onClick={() => swiper.slideNext()} className=" h-4 w-4 inline-block rounded-3xl bg-white cursor-pointer my-2" data-src="./video 1.mp4"> </span>
          <span onClick={() => swiper.slideNext()} className=" h-4 w-4 inline-block rounded-3xl bg-white cursor-pointer my-2" data-src="./video 2.mp4"> </span>
          <span onClick={() => swiper.slideNext()} className=" h-4 w-4 inline-block rounded-3xl bg-white cursor-pointer my-2" data-src="./video 3.mp4"> </span>
          <span onClick={() => swiper.slideNext()} className=" h-4 w-4 inline-block rounded-3xl bg-white cursor-pointer my-2" data-src="./video 4.mp4"> </span>
      </div>

  );
}

export default SlideNextButton;