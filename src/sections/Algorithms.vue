<template>
  <section id="algorithms" class="mt-24 scroll-mt-24 scroll-page">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <div class="text-xs uppercase tracking-[0.22em] text-white/60">Algorithms</div>
          <h2 class="mt-3 font-semibold tracking-tight text-3xl sm:text-4xl">
            Full-stack perception: detection, fusion, tracking, prediction, and safety analytics.
          </h2>
          <p class="mt-4 text-white/75 leading-relaxed max-w-xl">
            MSight supports camera and LiDAR pipelines—2D detection and localization, 3D BEV fusion, multi-sensor association, Bayesian filtering, and trajectory forecasting—feeding conflict/near-miss detection and V2X warning messages.
          </p>

          <div class="mt-7 grid gap-4">
            <div class="algo-card glass rounded-3xl p-6 border border-white/10">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <div class="text-sm font-semibold">2D detection & localization</div>
                  <p class="mt-2 text-sm text-white/70 leading-relaxed">
                    Ingest RTSP video frames, detect objects, and map pixel coordinates to world coordinates via camera calibration.
                  </p>
                </div>
                <span class="tag">Cameras</span>
              </div>
            </div>

            <div class="algo-card glass rounded-3xl p-6 border border-white/10">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <div class="text-sm font-semibold">3D detection & BEV fusion</div>
                  <p class="mt-2 text-sm text-white/70 leading-relaxed">
                    Fuse LiDAR + multi-view cameras in a shared BEV representation to improve accuracy while maintaining real-time latency.
                  </p>
                </div>
                <span class="tag">LiDAR + Camera</span>
              </div>
            </div>

            <div class="algo-card glass rounded-3xl p-6 border border-white/10">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <div class="text-sm font-semibold">Tracking & prediction</div>
                  <p class="mt-2 text-sm text-white/70 leading-relaxed">
                    Associate detections (e.g., Hungarian matching), update state (e.g., Kalman/Bayesian filters), then forecast trajectories with a transformer-based predictor.
                  </p>
                </div>
                <span class="tag">Online</span>
              </div>
            </div>

            <div class="algo-card glass rounded-3xl p-6 border border-white/10">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <div class="text-sm font-semibold">Conflict / near-miss detection</div>
                  <p class="mt-2 text-sm text-white/70 leading-relaxed">
                    Pairwise analysis on predicted trajectories using PET/PrET-style timing gaps, with temporal consistency checks to reduce false triggers.
                  </p>
                </div>
                <span class="tag">Safety</span>
              </div>
            </div>
          </div>

          <div class="mt-6 text-xs text-white/55">
            Placeholder: add a dedicated “Model Zoo” section (weights + benchmarks) once public release packages are finalized.
          </div>
        </div>

        <div class="relative">
          <div class="glass rounded-3xl overflow-hidden border border-white/10">
            <img class="w-full h-[520px] object-cover" src="/assets/fisheye-roundabout.png" alt="Fisheye roundabout view" loading="lazy" />
          </div>

          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div class="glass rounded-3xl p-5 border border-white/10">
              <div class="text-sm font-semibold">V2X-ready outputs</div>
              <p class="mt-2 text-sm text-white/70 leading-relaxed">
                Encode and forward messages to RSUs; support SDSM and SAE J2735 message families (add exact support list once published).
              </p>
            </div>
            <div class="glass rounded-3xl p-5 border border-white/10">
              <div class="text-sm font-semibold">Privacy-aware sensing</div>
              <p class="mt-2 text-sm text-white/70 leading-relaxed">
                Placeholder: explain PII handling (thermal imagery, on-edge processing, retention policy) for deployment partners.
              </p>
            </div>
          </div>

          <div class="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[var(--um-maize)]/10 blur-3xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  if (reduced) return

  gsap.from('.algo-card', {
    y: 16,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.08,
    scrollTrigger: {
      trigger: '#algorithms',
      start: 'top 70%'
    }
  })
})
</script>

<style scoped>
.tag {
  font-size: 12px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,203,5,0.16);
  border: 1px solid rgba(255,203,5,0.30);
  color: rgba(255,255,255,0.92);
  white-space: nowrap;
}

.algo-card {
  transition: transform 250ms ease, border-color 250ms ease, background 250ms ease;
}

.algo-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255,203,5,0.35);
  background: rgba(255,255,255,0.07);
}
</style>
