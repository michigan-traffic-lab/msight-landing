<template>
  <section 
    id="top" 
    class="relative min-h-[100svh] pt-24 pb-10 overflow-hidden scroll-page hero-page"
  >
    <!-- Background -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 grid-bg opacity-40" />
      <div class="absolute inset-0 hero-radial" />
      <div class="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[var(--um-maize)]/12 blur-3xl" />
      <div class="absolute -bottom-56 -left-56 h-[680px] w-[680px] rounded-full bg-[var(--um-blue)]/35 blur-3xl" />
      <div class="absolute -top-8 right-0 h-[420px] w-[520px] rounded-full bg-[var(--um-blue)]/18 blur-3xl" />
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="min-h-[calc(100svh-7rem)] flex flex-col justify-center gap-8">
        <!-- Row 1: Left content + Right image -->
        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <!-- LEFT -->
          <div class="relative">
            <div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80">
              <span class="h-2 w-2 rounded-full bg-[var(--um-maize)]" />
              <span>Open-source</span>
            </div>

            <h1 
              ref="titleEl" 
              class="mt-6 tracking-tight"
            >
              <span
                class="block text-xs text-white/60 font-medium tracking-wider"
              >
                AI Empowered
              </span>

              <span
                class="block mt-1 font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.05]"
              >
                Digital Infrastructure
              </span>
              <span class="text-white/85 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">for</span>
            </h1>



            <div class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight typing-box ">
              <span class="inline-flex items-baseline">
                <span class="mx-3 h-[1.1em] w-[1px] bg-white/20" />
                <span 
                  ref="rotateWrap" 
                  class="relative inline-block w-full max-w-[26ch] sm:max-w-[30ch] lg:max-w-[34ch] align-bottom overflow-hidden"
                >
                  <span
                    class="typing-text text-gradient leading-tight"
                    :class="{ 'is-fading': isFading }"
                  >{{ typedText }}</span>
                  <!-- <span class="typing-caret" aria-hidden="true"></span> -->
                </span>
              </span>
            </div>

            <p 
              ref="subEl" 
              class="mt-4 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl hidden lg:block"
            >
              MSight delivers real-time, AI-driven roadside intelligence by integrating multi-sensor perception, edge compute,
              V2X messaging, and cloud analytics—enabling scalable safety applications, proactive operations, and near-miss understanding.
            </p>

            <!-- CTAs (desktop) -->
            <div class="mt-8 hidden lg:flex flex-col sm:flex-row gap-3">
              <!-- Primary: Get Started -->
              <a
                class="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold bg-[var(--um-maize)] text-black hover:brightness-105 transition"
                href="https://www.msight-docs.com"
              >
                <span>Get started</span>
                <!-- Material icon -->
                <Icon icon="mdi:rocket-launch" class="text-[25px]" />
              </a>

              <!-- Secondary: GitHub -->
              <a
                class="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold bg-white/10 hover:bg-white/15 border border-white/10 transition"
                href="https://github.com/your-org/msight"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Source</span>
                <Icon icon="mdi:github" class="text-[25px]" />
              </a>
            </div>
          </div>

          <!-- RIGHT: larger landscape image frame (3:2) -->
          <div class="relative">
            <div class="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[var(--um-maize)]/14 blur-3xl" />
            <div class="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-[var(--um-blue)]/35 blur-3xl" />

            <div class="glass rounded-3xl overflow-hidden border border-white/10 ring-1 ring-white/10 shadow-[var(--shadow)]">
              <div class="relative">
                <!-- 3:2 landscape: use aspect ratio, let it grow -->
                <div class="aspect-[3/2] w-full">
                  <img
                    ref="heroImg"
                    class="h-full w-full object-cover"
                    :src="`${baseUrl}assets/hero-city.jpg`"
                    alt="MSight concept: AI roadside intelligence at intersections"
                    loading="eager"
                  >
                </div>

                <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                <div class="absolute bottom-5 left-5 right-5">
                  <div class="glass rounded-2xl p-3 ring-1 ring-white/10">
                    <div class="text-[11px] text-white/70">
                      MSight functionality includes:
                    </div>
                    <div class="mt-1 text-sm font-semibold">
                      Sensor Streaming → Perception → Assess Risk → Broadcast Warnings
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              id="request-demo" 
              class="sr-only"
            >
              Request demo
            </div>
          </div>

          <!-- Mobile order: image → CTAs → text -->
          <div class="lg:hidden">
            <div class="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                class="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold bg-[var(--um-maize)] text-black hover:brightness-105 transition"
                href="https://www.msight-docs.com"
              >
                <span>Get started</span>
                <Icon icon="mdi:rocket-launch" class="text-[25px]" />
              </a>

              <a
                class="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold bg-white/10 hover:bg-white/15 border border-white/10 transition"
                href="https://github.com/your-org/msight"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Source</span>
                <Icon icon="mdi:github" class="text-[25px]" />
              </a>
            </div>

            <p class="mt-5 text-base text-white/75 leading-relaxed max-w-xl">
              MSight delivers real-time, AI-driven roadside intelligence by integrating multi-sensor perception, edge compute,
              V2X messaging, and cloud analytics—enabling scalable safety applications, proactive operations, and near-miss understanding.
            </p>
          </div>
        </div>
        <!-- Row 2 removed: metrics/widgets moved to later sections -->

        <!-- Row 3: Rolling deployments marquee -->
        <div class="relative">
          <div class="flex items-end justify-between gap-6 mb-3">
            <div>
              <div class="text-sm font-semibold text-white/90">Deployed with</div>
              <div class="mt-1 text-xs text-white/55">Programs and partners that operate MSight in the field</div>
            </div>
          </div>

          <div ref="marqueeShell" class="marquee-shell glass rounded-3xl border border-white/10 ring-1 ring-white/10">
            <div class="marquee py-3" aria-label="Deployment programs">
              <div class="marquee-track">
                <div ref="marqueeGroup" class="marquee-group" aria-hidden="true">
                  <div
                    v-for="p in marqueeProjects"
                    :key="p.name + '-a'"
                    class="marquee-item"
                  >
                    <div class="proj-icon" aria-hidden="true">
                      <img :src="p.logo" alt="" class="proj-logo" />
                    </div>
                    <div class="proj-name">{{ p.name }}</div>
                  </div>
                </div>

                <!-- duplicate group for seamless loop -->
                <div class="marquee-group" aria-hidden="true">
                  <div
                    v-for="p in marqueeProjects"
                    :key="p.name + '-b'"
                    class="marquee-item"
                  >
                    <div class="proj-icon" aria-hidden="true">
                      <img :src="p.logo" alt="" class="proj-logo" />
                    </div>
                    <div class="proj-name">{{ p.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { Icon } from '@iconify/vue'

gsap.registerPlugin(ScrollTrigger)

const titleEl = ref(null)
const subEl = ref(null)
const heroImg = ref(null)
const rotateWrap = ref(null)
const marqueeShell = ref(null)
const marqueeGroup = ref(null)
const typedText = ref('')
const isFading = ref(false)

// Impact widgets (animated)
const deploymentStart = new Date('2022-09-27T00:00:00Z')
const daysDeployed = computed(() => {
  const now = new Date()
  const diff = now.getTime() - deploymentStart.getTime()
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
})

const stats = [
  {
    id: 'tier1',
    title: 'Tier 1 performance',
    note: 'Intersection Safety Challenge hosted by USDOT',
  },
  {
    id: 'deploy',
    title: 'Deployed to 50+ intersections',
    note: 'Field-proven roadside sensing and analytics at scale',
  },
  {
    id: 'latency',
    title: 'End-to-end latency',
    note: 'Low-latency edge pipeline for real-time safety use cases',
  },
  {
    id: 'days',
    title: 'Days in continuous deployment',
    note: 'Operational availability across seasons and conditions',
  },
]


const TYPE_SPEED = 60 // ms per character
const ERASE_FADE = 260 // ms fade-out
const HOLD_AFTER_TYPE = 1800 // ms
// const HOLD_AFTER_TYPE = 1800 // ms

const rotateWords = [
  'Real-time Roadside Perception',
  'Unified Roadside Operations Hub',
  "Low-Latency Sensor Data Streaming",
  'Abnormal Behavior, and Accident Detection',
  'Connected Vehicles & V2X Environments',
  'Edge-Cloud Integration',
]

const longestRotateWord = computed(() => {
  return rotateWords.reduce((a, b) => (a.length > b.length ? a : b), '')
})

const baseUrl = import.meta.env.BASE_URL

const marqueeProjects = [
  { name: 'AACE2', logo: `${baseUrl}assets/aace_logo.png` },
  { name: 'University of Michigan', logo: `${baseUrl}assets/uofm_logo.png` },
  { name: 'Smart Intersection Project', logo: `${baseUrl}assets/sip_logo.png` },
  { name: 'P3Mobility', logo: `${baseUrl}assets/p3mobility_logo.jpg` },
  { name: 'RCOC', logo: `${baseUrl}assets/rcoc_logo.png` },
  { name: 'Mcity', logo: `${baseUrl}assets/mcity_logo.jpg` },
]

onMounted(() => {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

  // Headline reveal
  if (!reduced && titleEl.value) {
    const split = new SplitType(titleEl.value, { types: 'lines,words' })
    gsap.from(split.words, {
      yPercent: 70,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.018,
      delay: 0.08,
    })
  }

  if (!reduced && subEl.value) {
    gsap.from(subEl.value, {
      y: 10,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.22,
    })
  }

  // Image parallax (subtle)
  if (!reduced && heroImg.value) {
    gsap.fromTo(
      heroImg.value,
      { scale: 1.02, y: 0 },
      { scale: 1.06, y: -10, duration: 1.2, ease: 'power2.out', delay: 0.18 }
    )

    gsap.to(heroImg.value, {
      y: -14,
      ease: 'none',
      scrollTrigger: {
        trigger: heroImg.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }

  // Marquee: compute exact travel distance to avoid gaps/resets (handles image load + responsive)
  const setupMarquee = () => {
    const shell = marqueeShell.value
    const group = marqueeGroup.value
    if (!shell || !group) return

    // Width of ONE group. Track has two groups back-to-back.
    const w = group.getBoundingClientRect().width
    if (w > 0) shell.style.setProperty('--marquee-distance', `${w}px`)
  }

  // Run after layout + again after images load
  requestAnimationFrame(() => {
    setupMarquee()
    setTimeout(setupMarquee, 120)
    setTimeout(setupMarquee, 600)
  })

  window.addEventListener('resize', setupMarquee, { passive: true })

  // Recalc when logos finish loading
  const imgs = marqueeShell.value?.querySelectorAll('img') || []
  imgs.forEach((img) => {
    if (img.complete) return
    img.addEventListener('load', setupMarquee, { once: true })
    img.addEventListener('error', setupMarquee, { once: true })
  })

  // Typing-style rotating words (type-in + fade-out, fixed box)
  if (rotateWords.length) {
    let wordIndex = 0
    let charIndex = 0

    const START_DELAY = 250

    const tick = () => {
      const current = rotateWords[wordIndex]

      // Type forward
      typedText.value = current.slice(0, charIndex + 1)
      charIndex += 1

      if (charIndex < current.length) {
        setTimeout(tick, TYPE_SPEED)
        return
      }

      // Hold full phrase, then fade out
      setTimeout(() => {
        isFading.value = true

        setTimeout(() => {
          // Clear after fade
          typedText.value = ''
          isFading.value = false
          charIndex = 0
          wordIndex = (wordIndex + 1) % rotateWords.length
          setTimeout(tick, 120)
        }, ERASE_FADE)
      }, HOLD_AFTER_TYPE)
    }

    setTimeout(tick, START_DELAY)
  }
})
</script>

<style scoped>
.hero-radial{
  background:
    radial-gradient(900px 600px at 20% 30%, rgba(255,203,5,0.10), transparent 60%),
    radial-gradient(900px 600px at 80% 25%, rgba(0,39,76,0.35), transparent 55%),
    radial-gradient(900px 700px at 60% 80%, rgba(255,255,255,0.06), transparent 60%);
}

.rotate-word{
  will-change: transform, opacity;
}

/* Typing rotation: fixed box, no layout shift */
.typing-box{
  height: 2.4em; /* fixed height: exactly two lines */
}
.typing-text{
  display: block;
  overflow: hidden;
}
.typing-text.is-fading{
  animation: fadeOut 0.26s ease forwards;
}
@keyframes fadeOut{
  from { opacity: 1; }
  to { opacity: 0; }
}

.typing-caret{
  position: absolute;
  right: 0;
  bottom: 0.15em;
  width: 2px;
  height: 0.9em;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 2px;
  animation: caretBlink 1s steps(2, end) infinite;
}
@keyframes caretBlink{
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* Widget cards */
.stat-card{
  transition: transform 200ms ease, border-color 200ms ease, background-color 200ms ease;
}
.stat-card:hover{
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.18);
}

.stat-value-xl{
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  line-height: 1;
}

.stat-main{
  font-size: clamp(1.8rem, 2.6vw, 2.4rem); /* not larger than hero title */
  font-weight: 700;
  letter-spacing: -0.015em;
  text-shadow: 0 10px 36px rgba(0,0,0,0.45);
}

.stat-prefix{
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}

.stat-suffix{
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
}
.stat-value{
  text-shadow: 0 12px 40px rgba(0,0,0,0.55);
}

/* Marquee (polished) */
.marquee-shell{
  position: relative;
  overflow: hidden;
}

/* Edge fade for premium look */
.marquee-shell::before,
.marquee-shell::after{
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 72px;
  pointer-events: none;
  z-index: 2;
}
.marquee-shell::before{
  left: 0;
  background: linear-gradient(to right, rgba(6,10,18,0.95), rgba(6,10,18,0));
}
.marquee-shell::after{
  right: 0;
  background: linear-gradient(to left, rgba(6,10,18,0.95), rgba(6,10,18,0));
}

.marquee{
  position: relative;
}

.marquee-track{
  display: flex;
  width: max-content;
  will-change: transform;
  animation: marquee 22s linear infinite;
}

.marquee-group{
  display: flex;
  gap: 14px;
  padding: 0 5px;
  flex: 0 0 auto;
}



.marquee-item{
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 5px 15px;
  border-radius: 18px;
  background: rgba(255,255,255,0.06);
  border: 2px solid rgba(255,255,255,0.12);
  box-shadow: 0 18px 50px rgba(0,0,0,0.22);
  white-space: nowrap;
  backdrop-filter: blur(10px);
  transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease;
}

.marquee-item:hover{
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.22);
  background: rgba(255,255,255,0.08);
}

.proj-icon{
  height: 22px;
  width: 22px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  overflow: hidden;
}

.proj-logo{
  max-height: 90%;
  max-width: 90%;
  object-fit: contain;
  filter: brightness(1.05) contrast(1.05);
}

.proj-mark{
  font-weight: 800;
  color: rgba(255,255,255,0.9);
  transform: translateY(-0.5px);
}

.proj-name{
  font-size: 0.92rem;
  font-weight: 650;
  color: rgba(255,255,255,0.88);
  letter-spacing: -0.01em;
}

@keyframes marquee{
  from { transform: translateX(0); }
  to { transform: translateX(calc(-1 * var(--marquee-distance, 50%))); }
}


/* Reduced motion: stop marquee + animations gracefully */
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
</style>
