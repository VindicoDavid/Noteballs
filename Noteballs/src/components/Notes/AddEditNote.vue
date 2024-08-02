<!-- edit form copied from add note -->
<template>
    <div class="card has-background-link-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea 
            :value="modelValue" 
            @input="$emit('update:modelValue', modelValue)" 
            class="textarea" 
            placeholder="Add a new note" 
            ref="newNoteRef">
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
const emits = defineEmits(['update:modelValue'])

const props = defineProps({
 modelValue:{
    type: String,
    required: true
 }
})
</script>