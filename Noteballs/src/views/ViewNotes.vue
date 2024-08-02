<template>
  <div class="notes mx-5 mt-5 mb-5">
    <div class="card has-background-link-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea v-model="newNote" class="textarea" placeholder="Add a new note" ref="newNoteRef"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button 
          class="button is-link has-background-link" 
          @click="addNote"
          :disabled="!newNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note
    v-for="note in storeNotes.notes"
    :key="note.id"
    :note="note"
    class="card mb-4"
    @deleteClicked="handleDeleteClicked"
    
    />
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import {useStoreNotes} from '@/stores/storeNotes.js'

const storeNotes = useStoreNotes()

const newNote = ref('')
const newNoteRef = ref(null)


const addNote = () => {
  storeNotes.addNote(newNote.value)

  newNote.value = ''
  newNoteRef.value.focus()

}

const handleDeleteClicked = (id) => {
  deleteNote(id)
}
const handleEditClicked = (id) => {
  // Handle the edit logic here
  console.log('edit note', id)
}

// delete note
const deleteNote = (id) => {
  console.log('delete note', id)
  notes.value = notes.value.filter(note => note.id !== id)
  
}




</script>