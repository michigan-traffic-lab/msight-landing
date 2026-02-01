<template>
  <Teleport to="body">
    <Transition name="notification">
      <div
        v-if="modelValue"
        class="notification-container"
        :class="[`notification-${type}`]"
      >
        <div class="notification-icon">
          <svg
            v-if="type === 'success'"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <svg
            v-else-if="type === 'error'"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <svg
            v-else
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="notification-content">
          <div class="notification-title">
            {{ title }}
          </div>
          <p
            v-if="message"
            class="notification-message"
          >
            {{ message }}
          </p>
        </div>
        <button
          type="button"
          class="notification-close"
          aria-label="Close notification"
          @click="close"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "success",
    validator: (value) => ["success", "error", "info"].includes(value),
  },
  title: {
    type: String,
    default: "Success",
  },
  message: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 5000,
  },
});

const emit = defineEmits(["update:modelValue"]);

let timer = null;

const close = () => {
  emit("update:modelValue", false);
};

const startTimer = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      close();
    }, props.duration);
  }
};

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
};

watch(
  () => props.modelValue,
  (isVisible) => {
    clearTimer();
    if (isVisible) {
      startTimer();
    }
  }
);
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  max-width: 400px;
  width: calc(100% - 40px);
  padding: 16px 20px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(20, 20, 25, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 20px 40px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.notification-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
}

.notification-success .notification-icon {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

.notification-error .notification-icon {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

.notification-info .notification-icon {
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
}

.notification-content {
  flex: 1;
  min-width: 0;
}

.notification-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #fff;
}

.notification-message {
  margin-top: 4px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.notification-close {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.5);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.notification-close:hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.1);
}

/* Notification animations */
.notification-enter-active {
  animation: notificationSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.notification-leave-active {
  animation: notificationSlideOut 0.3s ease forwards;
}

@keyframes notificationSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@keyframes notificationSlideOut {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-30px) scale(0.95);
  }
}

/* Responsive */
@media (max-width: 480px) {
  .notification-container {
    top: 80px;
    left: 20px;
    right: 20px;
    width: auto;
    max-width: none;
    transform: none;
  }

  @keyframes notificationSlideIn {
    0% {
      opacity: 0;
      transform: translateY(-30px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes notificationSlideOut {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-30px) scale(0.95);
    }
  }
}
</style>
