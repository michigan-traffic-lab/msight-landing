<template>
  <section id="platform" class="mt-20 scroll-page">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
            <span class="h-2 w-2 rounded-full bg-[var(--um-maize)]" />
            <span>Connected • Coordinated • Edge–cloud</span>
          </div>

          <h2 ref="hEl" class="mt-5 font-semibold tracking-tight text-3xl sm:text-4xl">
            A digital infrastructure platform for
            <span class="text-gradient">safe, efficient, intelligent</span> mobility.
          </h2>

          <p class="mt-5 text-white/75 leading-relaxed">
            MSight integrates roadside facilities—sensors, RSUs, traffic signal controllers—and binds them into an
            application-ready system via a modular “bag of nodes” design and a pluggable Pub/Sub backbone.
          </p>

          <div class="mt-7 grid gap-4 sm:grid-cols-2">
            <div class="feature-card glass rounded-3xl p-5">
              <div class="text-sm font-semibold">Edge intelligence</div>
              <p class="mt-2 text-sm text-white/70 leading-relaxed">
                Ingest multi-modal sensor streams and run low-latency perception, tracking, prediction, and V2X encoding.
              </p>
            </div>
            <div class="feature-card glass rounded-3xl p-5">
              <div class="text-sm font-semibold">Cloud power</div>
              <p class="mt-2 text-sm text-white/70 leading-relaxed">
                Large-scale analytics, long-term storage, and cloud-native applications (reporting, dashboards, alerts).
              </p>
            </div>
            <div class="feature-card glass rounded-3xl p-5">
              <div class="text-sm font-semibold">Composable nodes</div>
              <p class="mt-2 text-sm text-white/70 leading-relaxed">
                Add new sensors or algorithms by attaching nodes—without rewriting the core infrastructure.
              </p>
            </div>
            <div class="feature-card glass rounded-3xl p-5">
              <div class="text-sm font-semibold">Interoperable messaging</div>
              <p class="mt-2 text-sm text-white/70 leading-relaxed">
                Support for SPaT/controls and V2X message generation (e.g., BSM/PSM, SDSM—placeholders as needed).
              </p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="glass rounded-3xl overflow-hidden border border-white/10">
            <img class="w-full h-[520px] object-cover" src="/assets/deployment.png" alt="MSight digital infrastructure overview" loading="lazy" />
          </div>
          <div class="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-[var(--um-maize)]/15 blur-3xl" />
          <div class="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[var(--um-blue)]/55 blur-3xl" />

          <div class="absolute bottom-5 left-5 right-5 glass rounded-3xl p-5">
            <div class="text-xs uppercase tracking-[0.22em] text-white/60">Typical applications</div>
            <div class="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div class="pill">Red-light violation warning</div>
              <div class="pill">Emergency vehicle warning</div>
              <div class="pill">Wrong-way detection</div>
              <div class="pill">Work zone warning</div>
              <div class="pill">VRU warning</div>
              <div class="pill">Conflict / near-miss analytics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const hEl = ref(null)

onMounted(() => {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  if (reduced) return

  gsap.from(hEl.value, {
    y: 14,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: hEl.value,
      start: 'top 80%'
    }
  })

  gsap.from('.feature-card', {
    y: 18,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.08,
    scrollTrigger: {
      trigger: '#platform',
      start: 'top 70%'
    }
  })
})
</script>

<style scoped>
.pill {
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.04);
  border-radius: 999px;
  padding: 10px 12px;
}
</style>
