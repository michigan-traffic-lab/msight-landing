<template>
  <section id="final-cta" class="mt-24 scroll-mt-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden rounded-[36px] border border-white/10">
        <div class="absolute inset-0 bg-gradient-to-r from-[var(--um-blue)]/70 via-black/30 to-[var(--um-maize)]/25" />
        <div class="absolute inset-0 opacity-40 grid-bg" />

        <div class="relative p-10 sm:p-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
              <span class="h-2 w-2 rounded-full bg-[var(--um-maize)]" />
              <span>Ready to launch MSight open source</span>
            </div>
            <h2 class="mt-5 font-semibold tracking-tight text-3xl sm:text-4xl">
              Build safer intersections with a
              <span class="text-gradient">production-grade research stack</span>.
            </h2>
            <p class="mt-4 text-white/75 leading-relaxed max-w-xl">
              This page is structured like a commercial product site: clear story, proof, demos, and a crisp onboarding path.
              Swap in your final numbers, diagrams, and links from the slide deck before publishing.
            </p>
          </div>

          <div class="glass rounded-3xl p-6 border border-white/10">
            <div class="text-sm font-semibold">Launch checklist</div>
            <ul class="mt-3 space-y-2 text-sm text-white/75">
              <li>• Replace GitHub/docs links and quick start commands</li>
              <li>• Add official UM logos and legal/branding approvals</li>
              <li>• Curate a 45–60s trailer video + 3 screenshots</li>
              <li>• Publish a paper list + citation bibtex</li>
              <li>• Add deployment requirements and privacy statement</li>
            </ul>

            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <a class="rounded-2xl px-5 py-3 text-center font-semibold bg-[var(--um-maize)] text-black hover:brightness-105 transition" href="#">
                GitHub
              </a>
              <a class="rounded-2xl px-5 py-3 text-center font-semibold bg-white/10 hover:bg-white/15 border border-white/10 transition" href="#">
                Documentation
              </a>
            </div>

            <div class="mt-4 text-xs text-white/55">
              Optional: add a “Request a demo” form for deployment partners (universities, cities, DOTs).
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
