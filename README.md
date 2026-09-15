<div align="center">

<img src="docs/preview.jpg" alt="Первый экран собранной страницы: заголовок на фоне трёх слоёв гор" width="820">

# MNTN — Landing Page

**Вёрстка по готовому макету Figma. Чистые HTML и CSS, без JavaScript.**

[**Открыть страницу →**](https://jw-git-hub.github.io/MNTN---Landing-Page/)

[Русский](#русский) · [English](#english)

</div>

---

## Русский

### Что это

Пример одной услуги: у заказчика есть макет от дизайнера — я собираю по нему
страницу, которую можно открыть в браузере, посмотреть с телефона и отправить
ссылкой.

Дизайн здесь не мой. Макет взят из Figma Community — специально чужой и ранее
не виденный, чтобы пример нельзя было подогнать задним числом. Моя работа —
всё, что между макетом и живой страницей по ссылке выше.

### Что показывает эта работа

- **Макет перенесён числами, а не на глаз.** Высота страницы в браузере —
  4600 точек, ровно как в макете; отклонения блоков — в пределах одной точки.
  Открыв макет и страницу рядом, вы увидите одно и то же.
- **Повторяющееся собрано один раз.** Три секции — один блок с тремя
  наполнениями, у второй фотография слева. Правка цвета или отступа делается
  в одном месте и сразу везде.
- **Сцена гор разложена на слои, а не вклеена картинкой.** Три гряды и два
  затемнения тянутся от ширины окна, заголовок стоит между слоями.
- **Мобильная версия придумана — и об этом сказано прямо.** В макете был
  только десктоп 1920. Телефон и планшет собраны мной и подлежат согласованию
  с дизайнером, а не выдаются за «как в макете».
- **Тексты перенесены дословно**, включая опечатки оригинала. Правки в текст
  вносит тот, кому он принадлежит.
- **Сделано то, чего в макете не рисуют:** описания к фотографиям, подписи
  для навигации с клавиатуры, видимая рамка фокуса, отключение анимации,
  если человек выключил движение в системе.
- **Собрано за один заход** утром 15 сентября 2026 года — это видно
  в истории коммитов.

### Чего здесь нет

Это чистая вёрстка макета, и границу честнее назвать сразу. Страницу
**не** оптимизировали под скорость и вес, **не** готовили к поиску,
**не** размечали под ответы ИИ-ассистентов, **не** подключали аналитику,
формы и интеграции. Все ссылки — заглушки: адресов в макете не было,
они помечены в коде как открытый вопрос. Это отдельные слои работы,
они делаются поверх вёрстки.

### Ссылки

- Живая страница — <https://jw-git-hub.github.io/MNTN---Landing-Page/>
- Разбор работы человеческим языком — <https://jw-dev.pro/cases/mntn-landing-page>
- Сделаю то же по вашему макету — <https://jw-dev.pro>

<details>
<summary><b>Технические детали</b></summary>

**Стек.** HTML + CSS, без JavaScript, без сборщика и зависимостей. Страница
работает из папки; публикация — GitHub Pages из ветки, сборка не нужна.

**Раскладка файлов.**

```
index.html
styles/
  tokens.css        значения макета: цвета, типографика, отступы, слои
  fonts.css         @font-face, пять локальных woff2
  main.css          сброс, контейнер, типографика, ссылки, тэглайн
  sections/         по файлу на секцию: header, hero, scenery, feature, footer
assets/
  images/           горы (png + webp), фотографии (jpg + webp, 1x и 2x)
  icons/sprite.svg  стрелка, Instagram, Twitter, Account
  fonts/            Gilroy 500/700/800, Chronicle Display 600/700
docs/preview.jpg    кадр первого экрана для этого описания
```

**Решения.** Раскладка на flex и grid; зеркальная секция — модификатор
с `order`, порядок в разметке не меняется. Сцена гор масштабируется от ширины
через container query units (`max(100cqw, 900px) / 1920`), слои разложены
по `z-index` в порядке Figma; от 1920px заголовок уходит под горы, как
в макете, ниже — поверх, иначе горы его перекрывают. Градиент пересчитан
из `gradientHandlePositions`: −19.7°, стопы 31.1% и 108.9%.

**Адаптив.** Мобильный-первым, брейкпоинты 768 / 1280 / 1920. Значения
десктопа взяты из макета, остальные выведены — в `tokens.css` это помечено
у каждой группы.

**Картинки и шрифты.** `picture` с webp и джипегом-запасным, `srcset` 1x/2x,
`loading="lazy"` ниже первого экрана, `fetchpriority="high"` у дальнего слоя
гор. Шрифты — локальные woff2, `font-display: swap`, два начертания первого
экрана предзагружены. Первая загрузка на 1920 — около 0,7 МБ.

**Доступность.** Семантические секции, `aria-label` у навигаций и иконок,
`aria-labelledby` у секций, `aria-hidden` у декора, `:focus-visible`,
`prefers-reduced-motion`.

**Замер.** Каждая секция после вёрстки сверялась с координатами фрейма Figma:
отклонения в пределах 1px. Осознанные расхождения: «Account» 18px вместо 17px
(единый кегль интерфейса), копирайт не повторяет случайный сдвиг макета на 6px,
двойной пробел в заголовке второй секции схлопывается браузером.

</details>

### Права

Репозиторий опубликован только для ознакомления — см. [LICENSE](LICENSE).
Макет (Figma Community), шрифты Gilroy и Chronicle Display и фотографии
принадлежат их правообладателям и включены исключительно ради демонстрации
вёрстки.

---

## English

### What this is

A demonstration of one service: the client has a designer's mockup, and I turn
it into a page you can open in a browser, view on a phone and send as a link.

The design is not mine. The mockup comes from the Figma Community — deliberately
someone else's and previously unseen, so the example cannot be quietly tailored
to fit. My work is everything between that mockup and the live page linked above.

### What this work demonstrates

- **The mockup was transferred by numbers, not by eye.** Page height in the
  browser is 4600 px, exactly as in the mockup; block offsets stay within one
  pixel. Put the mockup and the page side by side and you see the same thing.
- **Repeated structure is built once.** Three sections share one block with
  three sets of content; the second one is mirrored. A colour or spacing change
  happens in one place and applies everywhere.
- **The mountain scene is layered, not pasted as one image.** Three ridges and
  two gradients scale with the viewport, and the heading sits between the layers.
- **The mobile layout is invented — and said so out loud.** The mockup only had
  a 1920 desktop frame. Phone and tablet layouts are mine and need the
  designer's sign-off; they are not passed off as "per the mockup".
- **Copy is reproduced verbatim,** original typos included. Text is edited by
  whoever owns it.
- **The parts a mockup never shows are handled:** image descriptions, labels for
  keyboard navigation, a visible focus ring, and motion switched off when the
  system says so.
- **Built in a single sitting** on the morning of 15 September 2026 — visible in
  the commit history.

### What is not here

This is pure markup, and the boundary is better stated up front. The page was
**not** optimised for speed or weight, **not** prepared for search engines,
**not** marked up for AI assistants, and carries no analytics, forms or
integrations. Every link is a placeholder: the mockup had no addresses, and they
are flagged as open questions in the code. Those are separate layers of work,
done on top of the markup.

### Links

- Live page — <https://jw-git-hub.github.io/MNTN---Landing-Page/>
- Case study in plain language (Russian) — <https://jw-dev.pro/cases/mntn-landing-page>
- Same for your mockup — <https://jw-dev.pro>

<details>
<summary><b>Technical notes</b></summary>

**Stack.** HTML + CSS, no JavaScript, no bundler, no dependencies. The page runs
straight from the folder; published via GitHub Pages from a branch, no build step.

**Layout of the repository.**

```
index.html
styles/
  tokens.css        mockup values: colours, type, spacing, layers
  fonts.css         @font-face, five local woff2 files
  main.css          reset, container, typography, links, tagline
  sections/         one file per section: header, hero, scenery, feature, footer
assets/
  images/           mountains (png + webp), photos (jpg + webp, 1x and 2x)
  icons/sprite.svg  arrow, Instagram, Twitter, Account
  fonts/            Gilroy 500/700/800, Chronicle Display 600/700
docs/preview.jpg    first-screen shot for this readme
```

**Decisions.** Flex and grid; the mirrored section is a modifier using `order`,
so the reading order in the markup stays the same. The mountain scene scales
with container query units (`max(100cqw, 900px) / 1920`), layers ordered by
`z-index` as in Figma; from 1920px up the heading goes behind the mountains as
designed, below that it stays in front — otherwise the ridges cover it. The hero
gradient is recalculated from `gradientHandlePositions`: −19.7°, stops at 31.1%
and 108.9%.

**Responsive.** Mobile-first, breakpoints at 768 / 1280 / 1920. Desktop values
come from the mockup, the rest are derived — each group is marked accordingly
in `tokens.css`.

**Images and fonts.** `picture` with webp and a jpg fallback, `srcset` 1x/2x,
`loading="lazy"` below the fold, `fetchpriority="high"` on the far mountain
layer. Fonts are local woff2 with `font-display: swap`; the two faces used above
the fold are preloaded. First load at 1920 is about 0.7 MB.

**Accessibility.** Semantic sections, `aria-label` on navigation and icons,
`aria-labelledby` on sections, `aria-hidden` on decoration, `:focus-visible`,
`prefers-reduced-motion`.

**Measurement.** Every section was checked against the Figma frame coordinates
after coding: deviations within 1px. Deliberate differences: “Account” is 18px
instead of 17px (one UI type size), the copyright does not repeat the mockup's
accidental 6px shift, and the double space in the second section's heading is
collapsed by the browser.

</details>

### Rights

This repository is published for viewing only — see [LICENSE](LICENSE). The
mockup (Figma Community), the Gilroy and Chronicle Display fonts and the
photographs belong to their respective owners and are included solely to
demonstrate the markup.
