import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Carousel.css'

const items = [
  {
    src: 'https://cdn.statically.io/img/wallpaperaccess.com/full/799571.png',
    altText: 'Winter Japan',
    caption: 'Winter Japan'
  },
  {
    src: 'https://images.alphacoders.com/892/892616.png',
    altText: 'I Love You',
    caption: 'I Love You'
  },
  {
    src: 'https://images.wallpapersden.com/image/download/broken-heart-anime-girl_a2ZsbmWUmZqaraWkpJRnamtlrWZlbWU.jpg',
    altText: '愛している',
    caption: '愛している'
  },
  // {
  //   src: 'https://theme.hstatic.net/1000341902/1000629852/14/slideshow_3.jpg?v=336',
  //   altText: 'Aodai Collection',
  //   caption: 'Aodai Collection'
  // },
  // {
  //   src: 'https://theme.hstatic.net/1000409756/1000626231/14/slideshow_3.jpg?v=271',
  //   altText: 'UV Protection Coat',
  //   caption: 'UV Protection Coat'
  // },
  // {
  //   src: 'https://leika.vn/wp-content/uploads/2019/05/happy-mother-day-anh-bia.jpg',
  //   altText: 'Happy Mothers Day 2021',
  //   caption: 'Happy Mothers Day 2021'
  // }
];

export function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item,index) => {
    const number = "<< " + String(index + 1) + " >>";
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img width="100%" src={item.src} alt={item.altText} />
        <CarouselCaption className="text-secondary" captionText={number} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default MyCarousel;