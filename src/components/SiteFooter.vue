<template>
  <footer class="border-t border-white/10 mt-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid gap-10 md:grid-cols-4">
        <div class="self-center">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl bg-[var(--um-blue)] grid place-items-center border border-white/10">
              <span class="font-semibold tracking-tight text-[var(--um-maize)]">M</span>
            </div>
            <div>
              <div class="font-semibold">MSight</div>
              <div class="text-xs text-white/70">Open-source roadside intelligence system</div>
            </div>
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold">Product</div>
          <ul class="mt-3 space-y-2 text-sm text-white/70">
            <li><a class="hover:text-white" href="#performance">Performance</a></li>
            <li><a class="hover:text-white" href="#deployments">Deployments</a></li>
            <li><a class="hover:text-white" href="#architecture">Architecture</a></li>
            <li><a class="hover:text-white" href="#development">Development</a></li>
            <li><a class="hover:text-white" href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <div class="text-sm font-semibold">Documentation</div>
          <ul class="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a class="inline-flex items-center gap-2 hover:text-white" :href="urls.github" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:github" class="text-[16px] text-white/70" />
                GitHub
              </a>
            </li>
            <li>
              <a class="inline-flex items-center gap-2 hover:text-white" :href="urls.dockerHub" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:docker" class="text-[16px] text-white/70" />
                Docker Hub
              </a>
            </li>
            <li>
              <a class="inline-flex items-center gap-2 hover:text-white" :href="urls.documentation" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:file-document-outline" class="text-[16px] text-white/70" />
                Documentation
              </a>
            </li>
            <li>
              <a class="inline-flex items-center gap-2 hover:text-white" :href="urls.quickStart" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:flash" class="text-[16px] text-white/70" />
                Quick Start
              </a>
            </li>
            <li>
              <a class="inline-flex items-center gap-2 hover:text-white" :href="urls.tutorials" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:school" class="text-[16px] text-white/70" />
                Tutorials
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div class="text-sm font-semibold">Contact</div>
          <ul class="mt-3 space-y-2 text-sm text-white/70">
            <li class="font-semibold text-white/90">Rusheng Zhang</li>
            <li class="text-xs text-white/60">Assistant Research Scientist • UMTRI</li>
            <li class="text-xs text-white/60">Lead Developer</li>
            <li class="text-xs text-white/60">University of Michigan, Ann Arbor</li>
            <li><a class="hover:text-white" href="mailto:rushengz@umich.edu">rushengz@umich.edu</a></li>
            <li><a class="hover:text-white" href="#">Press kit (placeholder)</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/60">
        <div>© {{ year }} MSight. All rights reserved.</div>
        <div class="flex gap-4">
          <a class="hover:text-white" href="#">Privacy (placeholder)</a>
          <a class="hover:text-white" href="#">Security (placeholder)</a>
          <a class="hover:text-white" href="#">License (placeholder)</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { urls } from "@/config/urls.js";

const year = new Date().getFullYear()
</script>
