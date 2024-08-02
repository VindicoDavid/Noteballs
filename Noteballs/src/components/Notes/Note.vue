
<template>
<div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right hast-text-grey light mt-2">
        <small>{{ characterLength }}</small>
        </div>
    </div>

    <footer class="card-footer">
      <a href="#" class="card-footer-item" @click.prevent="editNote">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="storeNotes.deleteNote(props.note.id)">Delete</a>
    </footer>
  </div>
  </template>
  <script setup>
    import { ref, computed } from 'vue'
    import {useStoreNotes} from '@/stores/storeNotes.js'

    const storeNotes = useStoreNotes()

    const characterLength = computed(() => {
        let length = props.note.content.length
        let description = length>1? 'characters': 'character'
      return `${length} ${description}`
    })


    const props = defineProps({
      note: Object,
      type: Object,
      required: true
    })
    const emit = defineEmits([
        'deleteClicked',
        'editClicked'
    ]
       
    )

    const editNote = () => {
       emit('editClicked', props.note.id)
    }

    const handleDeleteClicked = () => {
        emit('deleteClicked', props.note.id)
    }
</script>