<template>
  <section id="logos-marquee" class="mt-14 scroll-mt-24 scroll-page">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4">
        <div class="text-xs uppercase tracking-[0.22em] text-white/60">Deployed with</div>
        <div class="h-px flex-1 bg-white/10" />
      </div>

      <div class="mt-6 glass rounded-3xl overflow-hidden border border-white/10">
        <div class="marquee flex gap-10 py-5 px-6 text-sm text-white/70">
          <div class="flex gap-10 items-center">
            <span class="logo-chip">University of Michigan / UMTRI</span>
            <span class="logo-chip">Mcity</span>
            <span class="logo-chip">USDOT (placeholder)</span>
            <span class="logo-chip">MDOT (placeholder)</span>
            <span class="logo-chip">Oakland County / RCOC (placeholder)</span>
            <span class="logo-chip">P3M (placeholder)</span>
          </div>
          <!-- duplicate for seamless loop -->
          <div class="flex gap-10 items-center" aria-hidden="true">
            <span class="logo-chip">University of Michigan / UMTRI</span>
            <span class="logo-chip">Mcity</span>
            <span class="logo-chip">USDOT (placeholder)</span>
            <span class="logo-chip">MDOT (placeholder)</span>
            <span class="logo-chip">Oakland County / RCOC (placeholder)</span>
            <span class="logo-chip">P3M (placeholder)</span>
          </div>
        </div>
      </div>

      <p class="mt-3 text-xs text-white/55">
        Replace text chips with official partner logos (SVG) once permissions/branding assets are available.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.marquee {
  width: max-content;
  animation: marquee 22s linear infinite;
}

.logo-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.04);
  white-space: nowrap;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee { animation: none; }
}
</style>
