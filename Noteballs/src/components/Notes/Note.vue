
<template>
<div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
    </div>

    <footer class="card-footer">
      <a href="#" class="card-footer-item" @click="editNote(note)">Edit</a>
      <a href="#" class="card-footer-item" @click="deleteNote(note.id)">Delete</a>
    </footer>
  </div>
  </template>
  <script setup>
    import { ref } from 'vue'

    const props = defineProps({
      note: Object,
      type: Object,
      required: true
    })
</script>