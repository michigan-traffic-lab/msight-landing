<template>
  <section
    id="deployments"
    class="mt-24 scroll-mt-24 scroll-page min-h-[100svh] flex items-center"
    aria-label="Deployments"
  >
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="glass rounded-[32px] border border-white/10 overflow-hidden">
        <!-- 3-row layout: header / media / narrative -->
        <div class="p-6 sm:p-10 grid gap-6" style="grid-template-rows: auto 1fr auto">
          <!-- Header -->
          <div class="flex items-end justify-between gap-6 flex-wrap">
            <div class="w-full">
              <div class="text-xs uppercase tracking-[0.22em] text-white/60">Deployments</div>
              <h2 class="mt-3 font-semibold tracking-tight text-3xl sm:text-4xl">
                Proven in real-world deployments.
              </h2>
              <p class="mt-4 text-white/75 leading-relaxed">
                Demonstrated across multiple intersections and operating conditions, including night
                operations and SPaT-integrated analytics.
              </p>
            </div>
          </div>

          <!-- Media Carousel -->
          <div class="relative">
            <div class="stage rounded-3xl border border-white/10 overflow-hidden">
              <div
                class="slides"
                :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
                aria-live="polite"
              >
                <!-- Slide 1: 6 deployments (3x2 mosaic in one card) -->
                <div class="slide" role="group" :aria-label="`Slide 1 of ${slides.length}`">
                  <div class="mosaic-card" aria-label="Deployment montage">
                    <div class="mosaic-grid">
                      <video
                        class="mosaic-video"
                        src="/assets/deploy1.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                      <video
                        class="mosaic-video"
                        src="/assets/deploy2.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                      <video
                        class="mosaic-video"
                        src="/assets/deploy3.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                      <video
                        class="mosaic-video"
                        src="/assets/deploy4.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                      <video
                        class="mosaic-video"
                        src="/assets/deploy5.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                      <video
                        class="mosaic-video"
                        src="/assets/deploy6.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                    </div>
                  </div>
                </div>

                <!-- Slide 2: USDOT Intersection Safety Challenge (single video) -->
                <div class="slide" role="group" :aria-label="`Slide 2 of ${slides.length}`">
                  <div class="mediaGrid grid-1">
                    <div class="tile">
                      <video
                        class="video"
                        src="/assets/regular.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                    </div>
                  </div>
                </div>

                <!-- Slide 3: SPaT integration (3-up) -->
                <div class="slide" role="group" :aria-label="`Slide 3 of ${slides.length}`">
                  <div class="mediaGrid grid-3">
                    <div class="tile">
                      <video
                        class="video"
                        src="/assets/spat1.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                    </div>
                    <div class="tile">
                      <video
                        class="video"
                        src="/assets/spat2.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                    </div>
                    <div class="tile">
                      <video
                        class="video"
                        src="/assets/spat3.mp4"
                        muted
                        playsinline
                        autoplay
                        loop
                        preload="metadata"
                      ></video>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Arrows -->
              <button class="navBtn left" type="button" aria-label="Previous slide" @click="prev">
                <span aria-hidden="true">‹</span>
              </button>
              <button class="navBtn right" type="button" aria-label="Next slide" @click="next">
                <span aria-hidden="true">›</span>
              </button>

              <!-- Dots -->
              <div class="dots" role="tablist" aria-label="Deployment slides">
                <button
                  v-for="(s, i) in slides"
                  :key="s.key"
                  class="dot"
                  :class="{ active: i === activeIndex }"
                  type="button"
                  role="tab"
                  :aria-selected="i === activeIndex"
                  :aria-label="`Go to slide ${i + 1}`"
                  @click="go(i)"
                />
              </div>
            </div>
          </div>

          <!-- Narrative row -->
          <div class="mt-2">
            <transition name="fade" mode="out-in">
              <div :key="activeIndex">
                <div class="text-lg sm:text-xl font-semibold">{{ slides[activeIndex].title }}</div>
                <p class="mt-3 text-base sm:text-lg text-white/75 leading-relaxed">
                  {{ slides[activeIndex].description }}
                  <a
                    v-if="slides[activeIndex].linkUrl"
                    class="ml-2 underline underline-offset-4 text-[var(--um-maize)] hover:text-[var(--um-maize)]/90 transition"
                    :href="slides[activeIndex].linkUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ slides[activeIndex].linkLabel || 'Read more →' }}
                  </a>
                </p>

                <ul
                  v-if="slides[activeIndex].bullets?.length"
                  class="mt-4 grid gap-2 text-base sm:text-lg text-white/70"
                >
                  <li v-for="(b, idx) in slides[activeIndex].bullets" :key="idx" class="bullet">
                    <span class="dotMini" aria-hidden="true"></span>
                    <span>{{ b }}</span>
                  </li>
                </ul>
              </div>
            </transition>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const slides = [
  {
    key: "deployments",
    tag: "Multi-site",
    title: "Multi-site deployments (day-to-day operations)",
    description:
      "Six deployment clips demonstrating robustness across different intersections and field conditions. This highlights repeatable installation, stable runtime, and consistent perception outputs.",
    bullets: [
      "Cross-site consistency in detection and tracking",
      "Wide-FOV coverage for complex approaches and turn movements",
      "Designed for long-running, unattended roadside operation",
    ],
    durationMs: 10000,
  },
  {
    key: "isdot-isc",
    tag: "USDOT ISC",
    title: "USDOT Intersection Safety Challenge (Tier 1 award)",
    description:
      "MSight received a Tier 1 award (highest) in the USDOT Intersection Safety Challenge (Stage 1B: System Assessment and Evaluation).",
    linkUrl:
      "https://www.transportation.gov/briefing-room/us-dot-announces-winners-intersection-safety-challenge-stage-1b-system-assessment-and",
    linkLabel: "USDOT Official announcement →",
    bullets: [
      "Tier 1 (highest) award recognition",
      "Validated under structured system assessment and evaluation",
      "Demonstrates robust field deployment capability",
    ],
  },
  {
    key: "spat",
    tag: "SPaT",
    title: "SPaT-integrated perception and analytics",
    description:
      "Examples of integrating object-level perception with signal phase and timing (SPaT). Enables signal-aware analytics and warning applications such as red-light violation and dilemma-zone advisories.",
    bullets: [
      "Signal-aware event detection (e.g., red-light running)",
      "Time-aligned analytics for before/after evaluations",
      "Enables downstream V2X warnings and reporting",
    ],
  },
];

const activeIndex = ref(0);

function clampIndex(i) {
  const n = slides.length;
  return (i + n) % n;
}

function next() {
  activeIndex.value = clampIndex(activeIndex.value + 1);
  scheduleNext();
}
function prev() {
  activeIndex.value = clampIndex(activeIndex.value - 1);
  scheduleNext();
}
function go(i) {
  activeIndex.value = clampIndex(i);
  scheduleNext();
}

// Auto-advance (no pause-on-hover)
const DEFAULT_MS = 8000;
let timer = null;

function scheduleNext() {
  if (timer) clearTimeout(timer);
  const ms = slides[activeIndex.value]?.durationMs || DEFAULT_MS;
  timer = setTimeout(() => next(), ms);
}

onMounted(() => {
  scheduleNext();
});

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer);
});
</script>

<style scoped>
/* Stage keeps a very wide look to match “wider-than-landscape” videos */
.stage {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 1;
  background: rgba(255, 255, 255, 0.03);
}

/* Slider */
.slides {
  height: 100%;
  display: flex;
  transition: transform 1950ms cubic-bezier(0.2, 0.9, 0.2, 1);
  will-change: transform;
}
.slide {
  flex: 0 0 100%;
  padding: 14px;
  height: 100%;
}

/* Media grid layouts */
.mediaGrid {
  height: 100%;
  display: grid;
  gap: 10px;
}
.grid-1 {
  grid-template-columns: 1fr;
}
.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

/* Slide 1: single-card 3x2 mosaic */
.mosaic-card {
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
}

.mosaic-grid {
  height: 100%;
  display: grid;
  gap: 0;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  place-items: center;
}

.mosaic-video {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  background: #050a14;
  display: block;
}

@media (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .mosaic-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto;
  }
}

/* Video tile */
.tile {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
}
.video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #050a14;
  display: block;
}

/* Arrows */
.navBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.35);
  color: rgba(255, 255, 255, 0.9);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 160ms ease, transform 160ms ease;
  backdrop-filter: blur(10px);
}
.navBtn:hover {
  background: rgba(0, 0, 0, 0.5);
}
.navBtn:active {
  transform: translateY(-50%) scale(0.98);
}
.navBtn.left {
  left: 14px;
}
.navBtn.right {
  right: 14px;
}
.navBtn span {
  font-size: 28px;
  line-height: 1;
  transform: translateY(-1px);
}

/* Dots */
.dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 12px;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 14px;
}
.dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.18);
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease, width 160ms ease;
}
.dot.active {
  width: 26px;
  background: rgba(255, 255, 255, 0.45);
}

/* Narrative bullets */
.bullet {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.dotMini {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  margin-top: 7px;
}

/* Narrative fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 420ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
