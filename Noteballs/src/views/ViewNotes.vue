<template>
  <div class="notes mx-5 mt-5 mb-5">
    <AddEditNote v-model="newNote" 
    ref="addEditNoteRef"
    placeholder="Add a new note..."
    >
      <template #buttons>
        <button 
        class="button is-link has-background-link" 
        @click="addNote"
        :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>

    </AddEditNote>

    <Note
    v-for="note in storeNotes.notes"
    :key="note.id"
    :note="note"
    class="card mb-4"
    />
    
  </div>
</template>

<script setup>
import { ref, watch} from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import {useStoreNotes} from '@/stores/storeNotes.js'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)


const addNote = () => {
  storeNotes.addNote(newNote.value)

  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
  // newNoteRef.value.focus()

}

// const handleDeleteClicked = (id) => {
//   deleteNote(id)
// }
const handleEditClicked = (id) => {
  // Handle the edit logic here
  console.log('edit note', id)
}

watch( newNote, (newValue, oldValue) => {
 if(newValue.length === 100){
    alert('You have reached the maximum limit of 100 characters')
 }
})





</script>