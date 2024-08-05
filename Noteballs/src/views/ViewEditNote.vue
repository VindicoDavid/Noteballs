<template>
    <div class="edit-note mx-5 mt-5 mb-5">
        <!-- <h1>Edit Note with id {{ $route.params.id }}</h1> -->
        <AddEditNote v-model="NoteContent" bgColor="success-dark" placeholder="Edit Note..." label="Edit Note" ref="AddEditNoteRef">
            <template #buttons>
                <button
                class="button is-link has-background-success"
                :disabled="!NoteContent"
             
                >
                    Save Note
                </button>
                <button
                class="button is-link has-background--success-light"
                @click="$router.back()"
                >
                 Cancel
                </button>

            </template>

        </AddEditNote>
        
    </div>
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import {useStoreNotes} from '@/stores/storeNotes.js'
import { ref } from 'vue'

const storeNotes = useStoreNotes()
const NoteContent = ref('')
const AddEditNoteRef = ref(null)

</script>