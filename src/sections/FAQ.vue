<template>
  <section id="faq" class="mt-24 scroll-mt-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <div class="text-xs uppercase tracking-[0.22em] text-white/60">
            FAQ
          </div>
          <h2 class="mt-3 font-semibold tracking-tight text-3xl sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p class="mt-4 text-white/75 leading-relaxed max-w-xl">
            This section covers common technical and operational questions from
            potential users, deployment partners, and contributors considering
            MSight for real-world use.
          </p>
        </div>

        <div class="glass rounded-3xl p-6 border border-white/10">
          <div
            v-for="(q, i) in faqs"
            :key="q.q"
            class="faq-item rounded-2xl border border-white/10 bg-white/5 p-5 mb-3"
            :class="{ 'is-open': openIndex === i }"
          >
            <button
              class="faq-summary w-full text-left flex items-center justify-between gap-4"
              type="button"
              :aria-expanded="openIndex === i"
              @click="toggle(i)"
            >
              <span class="text-sm font-semibold">{{ q.q }}</span>
              <span class="faq-icon text-white/60">+</span>
            </button>

            <div
              class="faq-body"
              :ref="(el) => setContentRef(el, i)"
              :style="{
                maxHeight:
                  openIndex === i ? `${contentHeights[i] || 0}px` : '0px',
                opacity: openIndex === i ? 1 : 0,
              }"
            >
              <div class="mt-3 space-y-3">
                <p
                  v-for="(p, pi) in q.a"
                  :key="pi"
                  class="text-sm text-white/70 leading-relaxed"
                >
                  <template v-if="typeof p === 'string'">
                    {{ p }}
                  </template>

                  <template v-else>
                    <template v-for="(part, idx) in p" :key="idx">
                      <span v-if="part.t">{{ part.t }}</span>
                      <a
                        v-else
                        :href="part.href"
                        class="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-[var(--um-maize)]/80 hover:text-white transition"
                      >
                        {{ part.label }}
                      </a>
                    </template>
                  </template>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, nextTick, ref } from "vue";

const openIndex = ref(null);
const contentRefs = ref([]);
const contentHeights = ref([]);

const setContentRef = (el, i) => {
  if (el) contentRefs.value[i] = el;
};

const updateHeights = () => {
  contentHeights.value = contentRefs.value.map((el) =>
    el ? el.scrollHeight : 0,
  );
};

const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i;
  nextTick(updateHeights);
};

onMounted(() => {
  nextTick(updateHeights);
  window.addEventListener("resize", updateHeights, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeights);
});

const faqs = [
  {
    q: "What hardware do I need to install on the roadside?",
    a: [
      "MSight requires an edge computing device deployed at the roadside and connected to the local network to integrate existing sensing and infrastructure assets. The specific hardware configuration depends on the deployment scope, including the number and type of sensors, the perception algorithms being executed, and data characteristics such as image resolution and frame rate.",
      "For data collection and logging only, a CPU-based edge device is sufficient. For real-time perception, tracking, or analytics, a GPU-equipped edge device is recommended to meet computational and latency requirements.",
    ],
  },
  {
    q: "What needs to be done to set up perception on my infrastructure?",
    a: [
      [
        { t: "The first step is to identify the sensors installed on your infrastructure, such as regular RGB cameras, infrared cameras, fisheye cameras, LiDAR, or other sensing modalities. A typical perception pipeline involves collecting representative data from these sensors, labeling the data, training an object detection model (2D or 3D depending on the application), and performing sensor calibration to map detections into a usable coordinate system. Once prepared, the trained models and configuration can be deployed to an MSight edge device connected to the roadside infrastructure. Although this process may appear complex, MSight provides " },
        { href: "#documentation", label: "step-by-step documentation" },
        { t: " and examples to guide users through each stage. With basic computer proficiency, a user without prior perception experience can typically complete setup and deploy a working system within approximately one week." }
      ],
    ],
  },
  {
    q: "What if the sensors installed on my infrastructure are not supported by MSight?",
    a: [
      "MSight is actively and continuously developed to support new sensors and use cases. If a specific sensor is not yet supported, MSight’s extensible architecture allows users to implement a custom adapter by developing a new node that interfaces with the sensor. The platform’s developer-oriented documentation and bag-of-nodes design make this process straightforward. By integrating a custom sensor node, users can still leverage core MSight capabilities, including the pub/sub communication framework, standardized data definitions, RSU and traffic signal controller integration, cloud connectivity, and deployment tooling. Users are also encouraged to contribute newly developed sensor adapter nodes back to the MSight codebase to strengthen the ecosystem.",
    ],
  },
  {
    q: "Is MSight free to use? Is there a commercial version?",
    a: [
      "All MSight source code is released as open source and is free to use under a non-commercial open-source license. The license permits research, academic, and non-commercial use without cost, while placing restrictions on direct commercial exploitation.",
      "MSight itself does not ship as a turnkey commercial product. The open-source release includes core runtime components and reference examples, including basic patterns for cloud integration.",
      "For organizations seeking production-grade capabilities, MSight offers optional paid commercial services through partnerships, including managed cloud services, dashboards, analytics, and deployment consulting.",
    ],
  },
  {
    q: "Are there examples of using MSight?",
    a: [
      "Yes. MSight provides a rich set of tutorials and documentation covering realistic roadside infrastructure use cases, demonstrating end-to-end workflows from sensor integration to deployment and operation.",
    ],
  },
];
</script>

<style scoped>
.faq-item {
  overflow: hidden;
  transition: background 200ms ease, border-color 200ms ease;
}

.faq-item.is-open {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.07);
}

.faq-summary {
  outline: none;
  background: transparent;
  border: none;
  padding: 0;
}

.faq-icon {
  transition: transform 250ms ease, color 250ms ease;
}

.faq-item.is-open .faq-icon {
  transform: rotate(45deg);
  color: rgba(255, 255, 255, 0.9);
}

.faq-body {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 360ms ease, opacity 320ms ease;
}
</style>
