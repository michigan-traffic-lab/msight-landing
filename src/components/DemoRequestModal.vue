<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="modal-overlay"
        @click.self="handleOverlayClick"
      >
        <div
          class="modal-container glass"
          :class="{ 'shake': isShaking }"
        >
          <div class="modal-header">
            <h3 class="text-xl font-semibold">
              Request a Demo
            </h3>
            <button
              type="button"
              class="close-btn"
              aria-label="Close"
              @click="handleCancel"
            >
              <svg
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
            </button>
          </div>

          <form
            class="modal-body"
            @submit.prevent="handleSubmit"
          >
            <div class="form-group">
              <label for="demo-name">
                Name <span class="required">*</span>
              </label>
              <input
                id="demo-name"
                v-model="form.name"
                type="text"
                placeholder="Your full name"
                required
              >
            </div>

            <div class="form-group">
              <label for="demo-enterprise">
                Organization / Enterprise <span class="required">*</span>
              </label>
              <input
                id="demo-enterprise"
                v-model="form.enterprise"
                type="text"
                placeholder="Your organization name"
                required
              >
            </div>

            <div class="form-group">
              <label for="demo-position">
                Position / Role
              </label>
              <input
                id="demo-position"
                v-model="form.position"
                type="text"
                placeholder="Your job title"
              >
            </div>

            <div class="form-group">
              <label for="demo-email">
                Email <span class="required">*</span>
              </label>
              <input
                id="demo-email"
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                required
              >
            </div>

            <div class="form-group">
              <label for="demo-phone">
                Phone Number
              </label>
              <input
                id="demo-phone"
                v-model="form.phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
              >
            </div>

            <div class="form-group">
              <label for="demo-message">
                What are you looking for? <span class="required">*</span>
              </label>
              <textarea
                id="demo-message"
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your use case, infrastructure, or specific interests..."
                required
              />
            </div>

            <div class="modal-actions">
              <button
                type="button"
                class="btn btn-cancel"
                :disabled="isSubmitting"
                @click="handleCancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn-submit"
                :disabled="isSubmitting"
              >
                <span
                  v-if="isSubmitting"
                  class="loading-spinner"
                />
                {{ isSubmitting ? 'Submitting...' : 'Submit Request' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>

    <NotificationToast
      v-model="showNotification"
      :type="notificationType"
      :title="notificationTitle"
      :message="notificationMessage"
      :duration="6000"
    />
  </Teleport>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import NotificationToast from "@/components/NotificationToast.vue";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlglbljg";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "cancel", "submit"]);

const form = reactive({
  name: "",
  enterprise: "",
  position: "",
  email: "",
  phone: "",
  message: "",
});

const isShaking = ref(false);
const showNotification = ref(false);
const notificationType = ref("success");
const notificationTitle = ref("Request Submitted!");
const notificationMessage = ref("Thank you for your interest in MSight. We will contact you shortly through your provided email or phone.");
const isSubmitting = ref(false);

const resetForm = () => {
  form.name = "";
  form.enterprise = "";
  form.position = "";
  form.email = "";
  form.phone = "";
  form.message = "";
};

const handleOverlayClick = () => {
  // Trigger shake animation instead of closing
  isShaking.value = true;
  setTimeout(() => {
    isShaking.value = false;
  }, 500);
};

const handleCancel = () => {
  emit("update:modelValue", false);
  emit("cancel");
  resetForm();
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;
  
  isSubmitting.value = true;
  
  try {
    // Build form data for submission
    const formData = new URLSearchParams();
    formData.append("name", form.name);
    formData.append("enterprise", form.enterprise);
    formData.append("position", form.position);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("message", form.message);
    
    // Formspree special fields
    formData.append("_replyto", form.email);
    formData.append("_subject", `MSight Demo Request from ${form.name} (${form.enterprise})`);
    formData.append("_format", "plain");
    
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    
    if (response.ok) {
      console.log("Form submitted successfully", { ...form });
      emit("submit", { ...form });
      emit("update:modelValue", false);
      
      // Show success notification
      notificationType.value = "success";
      notificationTitle.value = "Request Submitted!";
      notificationMessage.value = "Thank you for your interest in MSight. We will contact you shortly through your provided email or phone.";
      showNotification.value = true;
      
      resetForm();
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    
    // Show error notification
    notificationType.value = "error";
    notificationTitle.value = "Submission Failed";
    notificationMessage.value = "There was an error submitting your request. Please try again or contact us directly.";
    showNotification.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// Prevent body scroll when modal is open
watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(20, 20, 25, 0.95);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-btn:hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.1);
}

.modal-body {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
}

.required {
  color: var(--um-maize);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 0.9375rem;
  transition: all 0.2s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--um-maize);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(255, 203, 5, 0.15);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.modal-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-radius: 14px;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-cancel {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.8);
}

.btn-cancel:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.btn-submit {
  background: var(--um-maize);
  border: 1px solid var(--um-maize);
  color: #000;
}

.btn-submit:hover:not(:disabled) {
  filter: brightness(1.08);
  transform: translateY(-1px);
}

.btn-submit:disabled,
.btn-cancel:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Modal transition animations */
.modal-enter-active {
  transition: opacity 0.35s ease;
}

.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container {
  animation: modalPopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.modal-leave-active .modal-container {
  animation: modalPopOut 0.25s ease forwards;
}

@keyframes modalPopIn {
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(30px);
  }
  50% {
    opacity: 1;
    transform: scale(1.02) translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes modalPopOut {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
}

/* Shake animation when clicking outside */
.shake {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-6px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(6px);
  }
}

/* Scrollbar styling */
.modal-container::-webkit-scrollbar {
  width: 6px;
}

.modal-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.modal-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
}

.modal-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.25);
}
</style>
