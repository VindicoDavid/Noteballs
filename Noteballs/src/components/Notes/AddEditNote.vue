<template>
  <div class="card has-background-link-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea 
          :value="modelValue" 
          @input="$emit('update:modelValue', $event.target.value)" 
          class="textarea" 
          placeholder="Add a new note" 
          ref="textAreaRef">
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

const props = defineProps({
  modelValue:{
    type: String,
    required: true
  }
})

const focusTextarea = () => {
  textAreaRef.value.focus()
}
defineExpose({
  focusTextarea
})

</script>
