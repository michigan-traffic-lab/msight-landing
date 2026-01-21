<template>
  <section
    id="architecture"
    class="scroll-mt-24 arch-section items-start pt-12"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header row -->
      <div class="grid gap-6 items-start lg:grid-cols-[minmax(0,1.8fr)_auto]">
        <div class="min-w-0">
          <div class="text-xs uppercase tracking-[0.22em] text-white/60">
            Architecture
          </div>

          <!-- Tabs (mobile: under section label) -->
          <div
            class="arch-tabs mt-3"
            :style="{ '--tab-index': String(activeIndex) }"
            @mouseenter="pauseAuto()"
            @mouseleave="resumeAuto()"
          >
            <span
              class="arch-tab-indicator"
              aria-hidden="true"
            />

            <button
              v-for="t in topics"
              :key="t.id + '-mobile'"
              class="arch-tab"
              :class="active === t.id ? 'is-active' : ''"
              type="button"
              @click="setActive(t.id)"
            >
              {{ t.tab }}
            </button>
          </div>

          <!-- Fixed-height header stage to prevent shake -->
          <div class="arch-head-stage">
            <transition
              name="fade-up"
              mode="out-in"
            >
              <div :key="activeTopic.id">
                <h2
                  class="mt-3 font-semibold tracking-tight text-3xl sm:text-4xl"
                >
                  {{ activeTopic.title }}
                </h2>
                <p class="mt-4 text-white/75 leading-relaxed">
                  {{ activeTopic.summary }}
                </p>
                <a
                  class="mt-5 inline-flex items-center rounded-2xl px-5 py-3 font-semibold bg-[var(--um-blue)]/60 hover:bg-[var(--um-blue)]/70 border border-white/10 transition"
                  href="https://www.msight-docs.com"
                >
                  See documentation
                  <span class="ml-2 text-white/70">→</span>
                </a>
              </div>
            </transition>
          </div>
        </div>

        <!-- Tabs (sliding pill) -->
        <!-- <div
          class="arch-tabs hidden lg:flex"
          :style="{ '--tab-index': String(activeIndex) }"
          @mouseenter="pauseAuto()"
          @mouseleave="resumeAuto()"
        >
          <span
            class="arch-tab-indicator"
            aria-hidden="true"
          />

          <button
            v-for="t in topics"
            :key="t.id"
            class="arch-tab"
            :class="active === t.id ? 'is-active' : ''"
            type="button"
            @click="setActive(t.id)"
          >
            {{ t.tab }}
          </button>
        </div> -->
      </div>

      <!-- Content row -->
      <div class="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <!-- Left image card (animated + fixed viewport) -->
        <transition
          name="fade-up"
          mode="out-in"
        >
          <div
            :key="activeTopic.id + '-media'"
            class="arch-media-card rounded-3xl overflow-hidden border border-white/10 ring-1 ring-white/10 shadow-[var(--shadow)]"
          >
            <div class="arch-media-stage">
              <img
                class="arch-media-img"
                :src="activeTopic.image"
                :alt="activeTopic.imageAlt"
                loading="lazy"
                draggable="false"
              >
            </div>
          </div>
        </transition>

        <!-- Right cards (animated + fixed stage) -->
        <div class="arch-right-stage">
          <transition
            name="fade-up"
            mode="out-in"
          >
            <div
              :key="activeTopic.id + '-cards'"
              class="grid gap-4 arch-right-inner"
            >
              <div
                v-for="card in activeTopic.cards"
                :key="card.title"
                class="glass rounded-3xl p-5 border border-white/10"
              >
                <div class="flex items-start justify-between gap-4">
                  <div class="text-sm font-semibold">
                    {{ card.title }}
                  </div>
                  <div
                    v-if="card.badge"
                    class="chip"
                  >
                    {{ card.badge }}
                  </div>
                </div>

                <p class="mt-2 text-sm text-white/70 leading-relaxed">
                  {{ card.body }}
                </p>

                <ul
                  v-if="card.bullets?.length"
                  class="mt-4 space-y-2 text-sm text-white/75"
                >
                  <li
                    v-for="(b, i) in card.bullets"
                    :key="i"
                  >
                    • {{ b }}
                  </li>
                </ul>

                <div
                  v-if="card.chips?.length"
                  class="mt-4 flex flex-wrap gap-2"
                >
                  <span
                    v-for="c in card.chips"
                    :key="c"
                    class="chip chip-muted"
                  >{{ c }}</span>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <!-- 
      <div class="mt-6 text-xs text-white/55">
        Tip: once the MSight data-type docs are public, add a small interactive “node explorer” (hover nodes → show inputs/outputs).
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
// const asset = (p) => new URL(p.replace(/^\//, ""), import.meta.env.BASE_URL).toString();
const topics = [
  {
    id: "edgecloud",
    tab: "Edge–Cloud",
    title: "Edge–cloud Architecture for Roadside Intelligence",
    summary:
      "MSight is an integrated edge–cloud system designed to support a broad spectrum of safety and operational applications, including multi-sensor perception, fusion and tracking, risk assessment, near-miss analysis, V2X messaging, low-latency sensor streaming, and continuous system monitoring—without requiring pipeline redesign across deployments.",
    image: "assets/architecture.png",
    imageAlt: "MSight conceptual edge–cloud architecture",
    cards: [
      {
        title: "Edge",
        badge: "Roadside hub",
        body: "The edge server is the central hub at the roadside. It connects and operationalizes existing, often isolated infrastructure (cameras, LiDAR, RSU, signal controller feeds) and turns the intersection into an integrated intelligent system.",
        // bullets: [
        //   "Low-latency perception and event detection at the source",
        //   "Integrates heterogeneous sensors and roadside interfaces",
        //   "Runs reliably under field constraints (weather, connectivity, power)",
        // ],
        // chips: [
        //   "Perception",
        //   "Fusion",
        //   "Tracking",
        //   "Prediction",
        //   "RSU/Controller I/O",
        // ],
      },
      {
        title: "Cloud",
        badge: "Enhanced capability",
        body: "Cloud integration strengthens system capability by enabling data archiving and analytics, continuous improvement and scalable deployment, while supporting user-facing notification services which delivers safety information to mobile devices with relatively low latency, improving accessibility.",
        // bullets: [
        //   "dashboards, and centralized observability",
        //   "Data archiving + analytics for near-miss understanding",
        //   "Continuous improvement via model and configuration updates",
        //   "Notification and messaging services for end users",
        // ],
        // chips: [
        //   "Archiving",
        //   "Analytics",
        //   "Remote Ops",
        //   "CI/CD",
        //   "Mobile Notifications",
        // ],
      },
    ],
  },
  {
    id: "pubsub",
    tab: "Pub/Sub",
    title: "Pub/Sub Core on the Roadside for Flexible, Deployable Pipelines",
    summary:
      "The edge device is built around a publish–subscribe backbone and a “bag of nodes” design, enabling a highly flexible and easily deployable architecture that adapts to diverse field conditions and fully leverages existing roadside configurations.",
    image: "assets/pubsub.png",
    imageAlt: "MSight pub/sub core and modular node graph",
    cards: [
      {
        title: "Publish–Subscribe backbone",
        badge: "Decoupled integration",
        body: "Modules communicate through typed topics, which decouples producers and consumers, simplifies composition, and allows you to add, remove, or replace capabilities without collapsing the system.",
        // bullets: [
        //   "Decoupled communication between modules",
        //   "Composable pipelines across deployments",
        //   "Fault isolation: failures are contained by design",
        // ],
        chips: ["NATS", "Redis", "Kafka"],
      },
      {
        title: "Bag of nodes",
        badge: "Atomic blocks",
        body: "MSight wraps atomic functionalities into reusable nodes (ingestion, detection, fusion, tracking, prediction, RSU forwarding). Operators assemble nodes via configuration; Pub/Sub connects them into integrated roadside tasks.",
        // bullets: [
        //   "Atomic nodes → configurable end-to-end tasks",
        //   "Easy deployment: change graph by config, not code",
        //   "Extensible: new sensors/algorithms plug into standard types",
        // ],
        // chips: [
        //   "Nodes",
        //   "Configs",
        //   "Standardized data types",
        //   "Message serialization",
        // ],
      },
    ],
  },
  {
    id: "facilities",
    tab: "Existing Facilities",
    title: "Make Existing Roadside Infrastructure Smart",
    summary:
      "Many intersections already have cameras and control interfaces, but they are often siloed. MSight modernizes and integrates these assets—so agencies can achieve smart functionality by orchestrating what is already deployed, then incrementally expanding capability over time.",
    image: "assets/hub.png",
    imageAlt: "MSight integrating existing roadside sensors and facilities",
    cards: [
      {
        title: "Infrastructure integration",
        badge: "Leverage existing",
        body: "MSight connects heterogeneous roadside facilities (cameras, LiDAR, RSUs, traffic signal controllers, etc.) and exposes them through consistent interfaces and message types—enabling coordinated perception, risk assessment, and actionable outputs.",
        bullets: [
          "Integrate multiple sensor types and vendor ecosystems",
          "Unified data plane and consistent semantics",
          "Incremental upgrade path: add capability without redesign",
        ],
        chips: ["Cameras", "LiDAR", "RSU", "SPaT/MAP"],
      },
    ],
  },
];

const active = ref("edgecloud");
const activeTopic = computed(
  () => topics.find((t) => t.id === active.value) || topics[0],
);
const activeIndex = computed(() =>
  Math.max(
    0,
    topics.findIndex((t) => t.id === active.value),
  ),
);

const AUTO_MS = 6000;
let timer = null;

const prefersReduced = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

const advance = () => {
  const idx = topics.findIndex((t) => t.id === active.value);
  active.value = topics[(idx + 1) % topics.length].id;
};

const startAuto = () => {
  if (prefersReduced()) return;
  stopAuto();
  timer = setInterval(advance, AUTO_MS);
};

const stopAuto = () => {
  if (timer) clearInterval(timer);
  timer = null;
};

const pauseAuto = () => stopAuto();
const resumeAuto = () => startAuto();

const setActive = (id) => {
  active.value = id;
  startAuto();
};

onMounted(() => startAuto());
onBeforeUnmount(() => stopAuto());
</script>

<style scoped>
.arch-section {
  min-height: 100svh;
}
/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.875s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition:
    opacity 0.875s ease,
    transform 0.875s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Stabilize header height */
.arch-head-stage {
  min-height: 160px;
}

/* Image card: light matte on the card */
.arch-media-card {
  background: rgba(255, 255, 255, 0.6) !important;
  border-color: rgba(255, 255, 255, 0.35) !important;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.25),
    0 24px 70px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Fixed viewport; transparent stage */
.arch-media-stage {
  min-height: 210px; /* mobile */
  height: auto;
  width: 100%;
  padding: 8px;
  display: grid;
  place-items: center;
  background: transparent;
}

.arch-media-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 14px;
  background: transparent;
  display: block;
}

/* Right side fixed stage */
.arch-right-stage {
  height: 400px; /* mobile */
  overflow: hidden;
  /*background: rgba(255, 0, 128, 0.12);*/
}

.arch-right-inner {
  height: 100%;
  overflow: auto;
  padding-right: 0;
  scrollbar-gutter: auto;
  scrollbar-width: none;
}

.arch-right-inner::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.arch-right-inner::-webkit-scrollbar {
  width: 8px;
}
.arch-right-inner::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.14);
  border-radius: 999px;
}
.arch-right-inner::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
}

@media (min-width: 1024px) {
  .arch-media-stage {
    min-height: 500px;
    height: auto;
  }
  .arch-right-stage {
    height: 500px;
  }
}

/* Tabs: sliding active pill */
.arch-tabs {
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  max-width: 560px;
  padding: 0;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  gap: 0;
  isolation: isolate;
}

.arch-tab-indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: calc(100% / 3);
  border-radius: 14px;
  background: var(--um-maize);
  transform: translateX(calc(var(--tab-index, 0) * 100%));
  transition: transform 850ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
  z-index: 0;
}

.arch-tab {
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 750;
  color: rgba(255, 255, 255, 0.78);
  transition: color 500ms ease;
  user-select: none;
}

.arch-tab:hover {
  color: rgba(255, 255, 255, 0.95);
}

.arch-tab.is-active {
  color: rgba(0, 0, 0, 0.92);
}

/* Chips */
.chip {
  display: inline-flex;
  align-items: center;
  padding: 7px 11px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  font-size: 12px;
  font-weight: 650;
  color: rgba(255, 255, 255, 0.88);
  white-space: nowrap;
}
.chip-muted {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.78);
  background: rgba(255, 255, 255, 0.05);
}

:global(main > section.arch-section) {
  align-items: flex-start;
}
</style>
