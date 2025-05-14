import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: '10',
  grabCursor: true,
});

swiper.on('progress', (swiper, progress) => {
  const progressBar = swiper.el
    .closest('.swiper-parent')
    ?.querySelector<HTMLElement>('.swiper-progressbar');
  if (!progressBar) {
    console.info('Progress bar not found');
    return;
  }
  const progressInPercent = Math.round(Math.min(Math.max(progress * 100, 0), 100));
  progressBar.style.transform = `scaleX(${progressInPercent}%)`;
});
