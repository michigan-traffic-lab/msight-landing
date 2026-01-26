<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="glass mt-3 flex items-center justify-between rounded-2xl px-4 py-3 shadow-[var(--shadow)]"
      >
        <a
          href="#top"
          class="flex items-center gap-3"
          @click="(e) => onNavClick(e, 'top')"
        >
          <div class="h-10 w-10 rounded-xl bg-[var(--um-blue)] grid place-items-center border border-white/10 overflow-hidden">
            <img
              :src="`${baseUrl}assets/msight-logo.png`"
              alt="MSight logo"
              class="h-7 w-7 object-contain"
              loading="eager"
            >
          </div>
          <div class="leading-tight">
            <div class="font-semibold tracking-tight">MSight</div>
            <div class="text-xs text-white/70">Real-time Roadside Intelligence</div>
          </div>
        </a>

        <nav class="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a
            class="hover:text-white transition"
            href="#performance"
            @click="(e) => onNavClick(e, 'performance')"
          >Performance</a>
          <a
            class="hover:text-white transition"
            href="#deployments"
            @click="(e) => onNavClick(e, 'deployments')"
          >Deployments</a>
          <a
            class="hover:text-white transition"
            href="#architecture"
            @click="(e) => onNavClick(e, 'architecture')"
          >Architecture</a>
          <a
            class="hover:text-white transition"
            href="#development"
            @click="(e) => onNavClick(e, 'development')"
          >Development</a>
          <a
            class="hover:text-white transition"
            href="#faq"
            @click="(e) => onNavClick(e, 'faq')"
          >FAQ</a>
        </nav>

        <div class="flex items-center gap-2">
          <a
            class="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/15 border border-white/10 transition"
            href="#demo"
            @click="(e) => onNavClick(e, 'demo')"
          >
            Ask for Demo
            <Icon
              icon="mdi:calendar-clock"
              class="text-[18px] text-white/70"
            />
          </a>
          <a
            class="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition nav-github"
            href="https://github.com/your-org/msight"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
            <Icon icon="mdi:github" class="text-[18px]" />
          </a>
          <a
            class="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-[var(--um-maize)] text-black hover:brightness-105 transition"
            href="https://msight-user-docs.readthedocs.io/en/latest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started
            <span>
              <Icon
                icon="mdi:rocket-launch"
                class="text-[25px]"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const baseUrl = import.meta.env.BASE_URL

const HEADER_OFFSET_PX = 92 // adjust if your header height differs

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  const y = el.getBoundingClientRect().top + window.pageYOffset
  const startY = window.pageYOffset
  const distance = y - startY
  const duration = 1600 // ms (4x slower than default)

  let startTime = null
  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOut(progress)
    window.scrollTo(0, startY + distance * eased)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

function onNavClick(e, id) {
  e.preventDefault()
  scrollToId(id)

  // Optional: update URL hash without jumping
  history.replaceState(null, '', `#${id}`)
}
</script>

<style scoped>
.nav-github {
  background: #0b0b0b;
  color: #ffffff;
  border: 1px solid rgba(255,255,255,0.2);
}
.nav-github:hover {
  filter: brightness(1.08);
}
</style>
