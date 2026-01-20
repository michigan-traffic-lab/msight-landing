<template>
  <section
    id="development"
    class="scroll-mt-24 scroll-page min-h-[100svh] flex items-center"
  >
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="glass rounded-[32px] border border-white/10 overflow-hidden">
        <div class="p-6 sm:p-10">
          <!-- Header -->
          <div
            class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div class="w-full">
              <div class="text-xs uppercase tracking-[0.22em] text-white/60">
                Developer + Deployment Friendly
              </div>
              <h2
                class="mt-3 font-semibold tracking-tight text-3xl sm:text-4xl"
              >
                Build new functionality fast, deploy reliably anywhere.
              </h2>
              <p class="mt-4 text-white/75 leading-relaxed">
                MSight is open source and designed for real-world operations. A
                pub/sub runtime and “bag of nodes” architecture make it
                straightforward to contribute new capabilities—wrap your
                algorithm as a node, connect it via configuration, and ship.
                Documentation and deployment examples are first-class: Docker
                Hub images, docker-compose + .env patterns, Supervisor for edge
                hosts, and Kubernetes for larger fleets.
              </p>
            </div>
          </div>

          <!-- Body -->
          <div class="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
            <!-- Left: “How it works” visual + contributor promise -->
            <div>
              <!-- CTAs -->
              <div class="mb-7 flex flex-col sm:flex-row gap-3">
                <a
                  class="cta cta-secondary"
                  href="#"
                >
                  <span
                    class="icon"
                    aria-hidden="true"
                  >
                    <Icon icon="mdi:book-open-variant" class="h-5 w-5" />
                  </span>
                  Documentation
                </a>

                <a
                  class="cta cta-primary"
                  href="#"
                >
                  <span
                    class="icon"
                    aria-hidden="true"
                  >
                    <Icon icon="mdi:github" class="h-5 w-5" />
                  </span>
                  GitHub
                </a>

                <a
                  class="cta cta-tertiary"
                  href="#"
                >
                  <span
                    class="icon"
                    aria-hidden="true"
                  >
                    <Icon icon="mdi:docker" class="h-5 w-5" />
                  </span>
                  Docker Hub
                </a>
              </div>
              <div class="glass rounded-3xl p-6 border border-white/10">
                <div class="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div class="text-sm font-semibold">
                      Architecture that scales contributors
                    </div>
                    <p class="mt-2 text-sm text-white/70 max-w-xl">
                      Nodes are small, testable units. Pub/sub wiring is
                      declarative via configuration—so new features integrate
                      cleanly without rewriting the runtime.
                    </p>
                  </div>
                  <div class="badge">
                    <span
                      class="dot-small"
                      aria-hidden="true"
                    />
                    Pub/Sub + Bag of Nodes
                  </div>
                </div>
              </div>

              <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="subcard">
                  <div class="text-sm font-semibold">
                    Tutorial-driven
                  </div>
                  <ul class="mt-2 text-sm text-white/70 space-y-1">
                    <li>• Camera-only, LiDAR-only, and fusion examples</li>
                    <li>• End-to-end walkthroughs (build → run → validate)</li>
                    <li>• Patterns for testing and profiling</li>
                  </ul>
                </div>
                <div class="subcard">
                  <div class="text-sm font-semibold">
                    Contributor-friendly
                  </div>
                  <ul class="mt-2 text-sm text-white/70 space-y-1">
                    <li>• “Write a node” is the unit of contribution</li>
                    <li>• Stable interfaces + typed data contracts</li>
                    <li>• CI-ready project structure</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Right: Deployment playbooks + roadmap -->
            <div class="glass rounded-3xl p-6 border border-white/10">
              <div class="text-sm font-semibold">
                Deployment options and playbooks
              </div>
              <p class="mt-2 text-sm text-white/70">
                Start with official Docker images and compose examples. Move to
                Supervisor for edge hosts, and Kubernetes when you need
                fleet-scale lifecycle management.
              </p>

              <div class="mt-5 grid gap-4">
                <div class="deploy-item">
                  <div class="deploy-icon">
                    <!-- container icon -->
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="h-5 w-5"
                    >
                      <path
                        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73Z"
                      />
                      <path d="M3.3 7l8.7 5 8.7-5" />
                      <path d="M12 22V12" />
                    </svg>
                  </div>
                  <div>
                    <div class="k">
                      Docker Hub images
                    </div>
                    <div class="v">
                      Official images for edge deployment and reproducible CI.
                    </div>
                    <div class="meta">
                      docker-compose + <code>.env</code> configuration pattern
                    </div>
                  </div>
                </div>

                <div class="deploy-item">
                  <div class="deploy-icon">
                    <!-- slider/toggles icon -->
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="h-5 w-5"
                    >
                      <path d="M4 21v-7" />
                      <path d="M4 10V3" />
                      <path d="M12 21v-9" />
                      <path d="M12 8V3" />
                      <path d="M20 21v-5" />
                      <path d="M20 12V3" />
                      <path d="M2 10h4" />
                      <path d="M10 8h4" />
                      <path d="M18 12h4" />
                    </svg>
                  </div>
                  <div>
                    <div class="k">
                      Supervisor on edge hosts
                    </div>
                    <div class="v">
                      Simple service management, restarts, log rotation, health
                      checks.
                    </div>
                    <div class="meta">
                      A good default for single-intersection deployments
                    </div>
                  </div>
                </div>

                <div class="deploy-item">
                  <div class="deploy-icon">
                    <!-- kubernetes-ish: network icon -->
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="h-5 w-5"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                      />
                      <path d="M12 3v6" />
                      <path d="M12 15v6" />
                      <path d="M3 12h6" />
                      <path d="M15 12h6" />
                      <path d="M5.6 5.6l4.2 4.2" />
                      <path d="M14.2 14.2l4.2 4.2" />
                      <path d="M18.4 5.6l-4.2 4.2" />
                      <path d="M9.8 14.2l-4.2 4.2" />
                    </svg>
                  </div>
                  <div>
                    <div class="k">
                      Kubernetes for fleets
                    </div>
                    <div class="v">
                      Rolling updates, multi-node scaling, observability
                      integrations.
                    </div>
                    <div class="meta">
                      Best when you need centralized ops across many sites
                    </div>
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
import { Icon } from "@iconify/vue";
</script>

<style scoped>
/* CTAs */
.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 18px;
  padding: 12px 16px;
  min-width: 170px;
  min-height: 44px;
  font-weight: 700;
  transition:
    filter 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.cta:hover {
  transform: translateY(-1px);
}
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.cta-primary {
  background: #0b0b0b;
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.2);
}
.cta-primary:hover {
  filter: brightness(1.08);
}

.cta-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.92);
}
.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.16);
}

.cta-tertiary {
  background: #2496ed; /* Docker brand blue */
  color: rgba(255, 255, 255, 0.92);
  border-color: rgba(36, 150, 237, 0.45);
}
.cta-tertiary:hover {
  filter: brightness(1.05);
}

/* Mini stats */
.mini-stat {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 18px;
  padding: 14px 14px;
}
.mini-stat .k {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.mini-stat .v {
  margin-top: 4px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

/* Architecture badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
  font-weight: 700;
}
.dot-small {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 203, 5, 0.9);
  box-shadow: 0 0 0 4px rgba(255, 203, 5, 0.16);
}

/* Diagram */
.diagram-row {
  display: grid;
  grid-template-columns: 1fr 28px 1.4fr 28px 1fr;
  gap: 10px;
  align-items: center;
}
.pill {
  text-align: center;
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  font-size: 13px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.88);
}
.bus {
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px dashed rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.2);
}
.bus-label {
  font-size: 13px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.88);
}
.bus-sub {
  margin-top: 2px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
}
.arrow {
  text-align: center;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 900;
}

/* Subcards */
.subcard {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 18px;
  padding: 14px 14px;
}

/* Deployment items */
.deploy-item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  padding: 14px 14px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}
.deploy-icon {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 203, 5, 0.14);
  border: 1px solid rgba(255, 203, 5, 0.22);
  color: rgba(255, 255, 255, 0.92);
}
.k {
  font-weight: 800;
}
.v {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.72);
  margin-top: 4px;
  line-height: 1.45;
}
.meta {
  margin-top: 6px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.58);
}

/* Check list */
.check {
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}

/* Mobile diagram fallback */
@media (max-width: 640px) {
  .diagram-row {
    grid-template-columns: 1fr;
  }
  .arrow {
    display: none;
  }
}
</style>
