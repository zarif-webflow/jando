import Swiper from 'swiper';

const allSwiperElements = Array.from(document.querySelectorAll<HTMLElement>('.swiper'));

for (const swiperElement of allSwiperElements) {
  const initialSlide = swiperElement.getAttribute('data-initial-slide');
  const initialSlideIndex = initialSlide ? parseInt(initialSlide, 10) : 0;
  const gap = swiperElement.getAttribute('data-gap');
  const gapValue = gap ? parseInt(gap, 10) : 10;

  const swiper = new Swiper(swiperElement, {
    slidesPerView: 'auto',
    spaceBetween: gapValue,
    grabCursor: true,
    init: false,
    initialSlide: initialSlideIndex,
  });

  const setProgressBar = (progress: number, progressbar: HTMLElement | null | undefined) => {
    if (!progressbar) {
      console.info('Progress bar not found');
      return;
    }
    const progressInPercent = Math.round(Math.min(Math.max(progress * 100, 0), 100));
    progressbar.style.transform = `scaleX(${progressInPercent}%)`;
  };

  swiper.on('init', (swiper) => {
    const progressBar = swiper.el
      ?.closest('.swiper-parent')
      ?.querySelector<HTMLElement>('.swiper-progressbar');

    setProgressBar(swiper.progress, progressBar);
  });

  swiper.on('progress', (swiper, progress) => {
    const progressBar = swiper.el
      ?.closest('.swiper-parent')
      ?.querySelector<HTMLElement>('.swiper-progressbar');

    setProgressBar(progress, progressBar);
  });

  swiper.init();
}
