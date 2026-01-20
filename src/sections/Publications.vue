<template>
  <section id="publications" class="mt-24 scroll-page">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div class="text-xs uppercase tracking-[0.22em] text-white/60">Publications</div>
          <h2 class="mt-3 font-semibold tracking-tight text-3xl sm:text-4xl">
            Peer-reviewed work and technical resources.
          </h2>
          <p class="mt-4 text-white/75 max-w-2xl leading-relaxed">
            Replace the placeholders below with the exact papers, code artifacts, and datasets referenced in your slide deck.
            Include DOI/arXiv links once public.
          </p>
        </div>
        <a class="rounded-2xl px-5 py-3 font-semibold bg-white/10 hover:bg-white/15 border border-white/10 transition" href="#">
          Media kit (placeholder)
          <span class="ml-2 text-white/70">↗</span>
        </a>
      </div>

      <div class="mt-8 grid gap-4 lg:grid-cols-2">
        <div v-for="p in pubs" :key="p.title" class="glass rounded-3xl p-6 border border-white/10">
          <div class="text-sm font-semibold">{{ p.title }}</div>
          <div class="mt-2 text-sm text-white/70">{{ p.venue }}</div>
          <p class="mt-3 text-sm text-white/70 leading-relaxed">{{ p.desc }}</p>
          <div class="mt-4 flex gap-2 flex-wrap">
            <a class="chip hover:border-[var(--um-maize)]/40" href="#">Paper (placeholder)</a>
            <a class="chip hover:border-[var(--um-maize)]/40" href="#">Code (placeholder)</a>
            <a v-if="p.data" class="chip hover:border-[var(--um-maize)]/40" href="#">Dataset (placeholder)</a>
          </div>
        </div>
      </div>

      <div class="mt-8 glass rounded-3xl p-6 border border-white/10">
        <div class="text-sm font-semibold">Press & demos (placeholder)</div>
        <p class="mt-2 text-sm text-white/70 leading-relaxed">
          Add a grid of embedded short videos (YouTube/Vimeo) plus screenshots. Ensure you have the rights to all media.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const pubs = [
  {
    title: 'Towards Comprehensive Roadside Intelligence: Sensor Fusion and Full Stack Perception with Multiple Cameras',
    venue: 'Journal / Conference (placeholder)',
    desc: 'A multi-camera sensor fusion and tracking scheme based on Bayesian filters with scalable error modeling.',
    data: false,
  },
  {
    title: 'Evaluating Roadside Perception for Autonomous Vehicles: Insights from Field Testing',
    venue: 'Journal / Conference (placeholder)',
    desc: 'Field evaluation of roadside perception performance with metrics and deployment lessons learned.',
    data: false,
  },
  {
    title: 'Ann Arbor Near-Miss Video Analytics System (system report)',
    venue: 'Technical report (placeholder)',
    desc: 'City-scale conflict and near-miss analytics using roadside video and multimodal trajectories.',
    data: true,
  },
  {
    title: 'Intersection Safety Challenge submission (system overview)',
    venue: 'USDOT ISC artifact (placeholder)',
    desc: 'System summary, evaluation, and demo materials supporting the challenge submission.',
    data: false,
  }
]
</script>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.05);
  font-size: 12px;
  transition: border-color 200ms ease, background 200ms ease;
}
.chip:hover {
  background: rgba(255,255,255,0.07);
}
</style>
