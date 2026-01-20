<template>
  <section
    id="performance"
    ref="sectionEl"
    class="mt-24 scroll-mt-24 scroll-page min-h-[100svh] flex items-center"
  >
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="glass rounded-[32px] border border-white/10 overflow-hidden">
        <!-- Use a 3-row layout so it fills 100svh gracefully -->
        <div
          class="p-6 sm:p-10 grid gap-6"
          style="grid-template-rows: auto auto 1fr"
        >
          <!-- Row 1: Header -->
          <div class="grid gap-6 items-end lg:grid-cols-[minmax(0,5fr)_auto]">
            <div class="min-w-0">
              <div class="text-xs uppercase tracking-[0.22em] text-white/60">
                Performance
              </div>
              <h2
                class="mt-3 font-semibold tracking-tight text-3xl sm:text-4xl"
              >
                Built for real-time operation and field robustness.
              </h2>
              <p class="mt-4 text-white/75 max-w-none leading-relaxed">
                MSight is engineered for real-time roadside operation,
                delivering sub-100 ms latency, sub-meter accuracy perception and reliable field robustness
                across diverse deployment conditions. MSight has been evaluated in U.S. DOT programs
                and earned a Tier 1 (highest) award in the USDOT Intersection
                Safety Challenge.
                <a
                  class="ml-2 underline underline-offset-4 text-white/80 hover:text-white transition"
                  href="https://www.transportation.gov/briefing-room/us-dot-announces-winners-intersection-safety-challenge-stage-1b-system-assessment-and"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  News release →
                </a>
              </p>
            </div>

            <a
              class="rounded-2xl px-5 py-3 font-semibold bg-[var(--um-blue)]/60 hover:bg-[var(--um-blue)]/70 border border-white/10 transition justify-self-start lg:justify-self-end"
              href="https://www.msight-docs.com"
            >
              See how to deploy
              <span class="ml-2 text-white/70">→</span>
            </a>
          </div>

          <!-- Row 2: Dedicated wide video row -->
          <div class="glass rounded-3xl border border-white/10 overflow-hidden">
            <div class="relative aspect-[21/9] w-full">
              <video
                class="absolute inset-0 h-full w-full object-cover"
                :data-src="`${baseUrl}assets/roundabout.mp4`"
                autoplay
                muted
                loop
                playsinline
                preload="none"
              />

              <!-- Subtle overlay to keep text legible elsewhere; no yellow strip -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"
              />

              <!-- Optional label (kept minimal) -->
              <div class="absolute left-4 bottom-4 sm:left-6 sm:bottom-6">
                <div
                  class="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/80"
                >
                  Field footage (roundabout)
                </div>
              </div>
            </div>
          </div>

          <!-- Row 3: Content that expands (fills remaining height) -->

          <!-- Left column: Stats + capability cards -->
          <!-- Row 3: KPI widgets -->
          <div
            class="grid gap-6 content-start lg:items-stretch lg:grid-cols-4 sm:grid-cols-2"
          >
            <!-- 1) Latency -->
            <div class="stat glass rounded-3xl p-6 border border-white/10">
              <div class="text-xs text-white/60">End-to-end latency</div>
              <div class="mt-2 text-3xl font-semibold">
                <span class="text-white/70 mr-1">&lt;</span>
                <span data-count="100">0</span>
              </div>
              <div class="mt-2 text-xs text-white/60">
                milliseconds (field target)
              </div>
            </div>

            <!-- 2) Tier 1 award -->
            <div class="stat glass rounded-3xl p-6 border border-white/10">
              <div class="text-xs text-white/60">USDOT recognition</div>
              <div class="mt-2 text-3xl font-semibold" data-count="1" data-start="100">100</div>
              <div class="mt-2 text-xs text-white/60">
                Tier 1 (highest) system award
              </div>
            </div>

            <!-- 3) Sensor types -->
            <!-- <div class="stat glass rounded-3xl p-6 border border-white/10">
              <div class="text-xs text-white/60">Sensor modalities</div>
              <div class="mt-2 text-3xl font-semibold" data-count="4">0</div>
              <div class="mt-2 text-xs text-white/60">
                Supports 
              </div>
            </div> -->

            <!-- 4) Locations deployed -->
            <div class="stat glass rounded-3xl p-6 border border-white/10">
              <div class="text-xs text-white/60">Locations deployed</div>
              <div class="mt-2 text-3xl font-semibold" data-count="50">0</div>
              <div class="mt-2 text-xs text-white/60">
                field sites with active operation
              </div>
            </div>

            <!-- 5) Deployment duration (days since 2022/09/27) -->
            <div class="stat glass rounded-3xl p-6 border border-white/10">
              <div class="text-xs text-white/60">Deployment duration</div>
              <div
                class="mt-2 text-3xl font-semibold"
                data-days-since="2022-09-27"
              >
                0
              </div>
              <div class="mt-2 text-xs text-white/60">
                days since first deployment
              </div>
            </div>
          </div>
        </div>
        <!-- Removed the old bottom gradient strip entirely -->
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const baseUrl = import.meta.env.BASE_URL;
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionEl = ref(null);
let triggers = [];

function computeDaysSince(isoDateString) {
  // Use local time; stable enough for a KPI counter.
  const start = new Date(isoDateString + "T00:00:00");
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;
  const diff = Math.floor((now.getTime() - start.getTime()) / msPerDay);
  return Math.max(0, diff);
}

onMounted(() => {
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  if (!sectionEl.value) return;

  // 1) Compute the "days since" KPI and store it into data-count
  const daysEl = sectionEl.value.querySelector("[data-days-since]");
  if (daysEl) {
    const start = daysEl.getAttribute("data-days-since");
    const days = computeDaysSince(start);
    daysEl.setAttribute("data-count", String(days));
    // Keep initial display at 0 so it "pops" on first scroll
    daysEl.textContent = "0";
  }

  const counters = [...sectionEl.value.querySelectorAll("[data-count]")];
  if (!counters.length) return;

  if (reduced) {
    counters.forEach((el) => {
      const end = Number(el.getAttribute("data-count"));
      el.textContent = Number.isFinite(end) ? Math.round(end).toString() : el.textContent;
    });
    return;
  }

  const runCounters = () => {
    counters.forEach((el) => {
      const end = Number(el.getAttribute("data-count"));
      if (!Number.isFinite(end)) return;

      const startAttr = Number(el.getAttribute("data-start"));
      const startVal = Number.isFinite(startAttr) ? startAttr : 0;
      const obj = { val: startVal };

      const tween = gsap.to(obj, {
        val: end,
        duration: 4,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toString();
        },
      });

      triggers.push(tween);
    });
  };

  const trigger = ScrollTrigger.create({
    trigger: sectionEl.value,
    start: "top 75%",
    once: true,
    onEnter: runCounters,
  });

  triggers.push(trigger);
  ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  triggers = [];
});
</script>

