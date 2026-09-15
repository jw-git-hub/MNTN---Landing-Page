// Появление карточек Feature при прокрутке. Стили и направления — styles/sections/feature.css.
// Без скрипта или при отключённом движении карточки просто видны.

const CARD_SELECTOR = '.feature';
const ENABLED_CLASS = 'has-reveal';
const REVEALED_CLASS = 'is-revealed';
const VISIBLE_SHARE = 0.15;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function canAnimate() {
  return 'IntersectionObserver' in window && !window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function revealVisibleCards(entries, observer) {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      entry.target.classList.add(REVEALED_CLASS);
      observer.unobserve(entry.target);
    });
}

function initCardReveal() {
  const cards = document.querySelectorAll(CARD_SELECTOR);
  if (cards.length === 0 || !canAnimate()) return;

  const observer = new IntersectionObserver(revealVisibleCards, { threshold: VISIBLE_SHARE });
  cards.forEach((card) => observer.observe(card));
  document.documentElement.classList.add(ENABLED_CLASS);
}

initCardReveal();
