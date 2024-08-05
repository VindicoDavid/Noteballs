<template>
  <div class="card p-4 mb-5"
  :class="'has-background-' + bgColor"
  >
  <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea 
  
          @input="$emit('update:modelValue', $event.target.value)" 
          class="textarea" 
          :placeholder="placeholder" 
          ref="textAreaRef"
          v-autofocus
          maxlength="100"
          >
          
        </textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineExpose } from 'vue'
const emits = defineEmits(['update:modelValue'])
const textAreaRef = ref(null)
import { vAutofocus } from '@/directives/vAutofocus'
const props = defineProps({
  modelValue:{
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'link-dark'
  },
  placeholder: {
    type: String,
    default: 'Add a new note'
  },
  label: {
    type: String,
    default: 'Label Text'
    
  }
})

const focusTextarea = () => {
  textAreaRef.value.focus()
}
defineExpose({
  focusTextarea
})


</script>
