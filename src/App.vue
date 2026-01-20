<template>
  <div ref="root" class="min-h-screen">
    <TopNav />
    <main>
      <Hero />
      <Performance />
      <Deployment />
      <Architecture />
      <Development />
      <FAQ />
      <SiteFooter />
    </main>
  </div>
</template>

<script setup>
import { nextTick, onMounted, onBeforeUnmount, ref } from "vue";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import TopNav from "./components/TopNav.vue";
import SiteFooter from "./components/SiteFooter.vue";

import Hero from "./sections/Hero.vue";
import Architecture from "./sections/Architecture.vue";
import Deployment from "./sections/Deployment.vue";
import Performance from "./sections/Performance.vue";
import Development from "./sections/Development.vue";
import FAQ from "./sections/FAQ.vue";
gsap.registerPlugin(ScrollTrigger);

const root = ref(null);
let lenis;
let rafId;
let gsapTicker;
let videoObserver;

onMounted(() => {
  // Smooth scroll (respects prefers-reduced-motion via CSS fallback)
  lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });

  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  // Keep ScrollTrigger in sync
  lenis.on("scroll", ScrollTrigger.update);
  gsapTicker = (t) => lenis.raf(t * 1000);
  gsap.ticker.add(gsapTicker);
  gsap.ticker.lagSmoothing(0);

  // Ambient gradient drift
  gsap.to(root.value, {
    "--ambientX": "80%",
    "--ambientY": "30%",
    duration: 8,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });

  // Pause offscreen videos to reduce memory/CPU
  nextTick(() => {
    const videos = Array.from(document.querySelectorAll("video"));
    if (!videos.length) return;

    videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (!(video instanceof HTMLVideoElement)) return;

          if (entry.isIntersecting) {
            const dataSrc = video.getAttribute("data-src");
            if (dataSrc && !video.getAttribute("src")) {
              video.setAttribute("src", dataSrc);
              video.load?.();
              video.addEventListener(
                "loadeddata",
                () => {
                  const playPromise = video.play?.();
                  if (playPromise && typeof playPromise.catch === "function") {
                    playPromise.catch(() => {});
                  }
                },
                { once: true },
              );
            }

            const playPromise = video.play?.();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          } else {
            video.pause?.();
            const dataSrc = video.getAttribute("data-src");
            if (dataSrc && video.getAttribute("src")) {
              video.removeAttribute("src");
              video.load?.();
            }
          }
        });
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    );

    videos.forEach((video) => videoObserver.observe(video));
  });
});

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId);
  if (lenis) lenis.destroy();
  if (gsapTicker) gsap.ticker.remove(gsapTicker);
  if (videoObserver) videoObserver.disconnect();
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>
