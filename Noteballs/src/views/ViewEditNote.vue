<template>
    <div class="edit-note mx-5 mt-5 mb-5">
        <!-- <h1>Edit Note with id {{ $route.params.id }}</h1> -->
        <AddEditNote v-model="noteContent" bgColor="success-dark" placeholder="Edit Note..." label="Edit Note" ref="AddEditNoteRef">
            <template #buttons>
                <button
                class="button is-link has-background-success mr-2"
                :disabled="!noteContent"
                @click="handleSaveClicked"
             
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
        <pre>{{ $route.params.id }}</pre>
        
    </div>
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import {useRoute, useRouter} from 'vue-router'
import {useStoreNotes} from '@/stores/storeNotes.js'
import { ref } from 'vue'


const storeNotes = useStoreNotes()
const noteContent = ref('')
const AddEditNoteRef = ref(null)


noteContent.value = storeNotes.getNoteContent

const route = useRoute()
const router = useRouter()
// console.log(route.params.id)

const handleSaveClicked = () => {
    // storeNotes.updateNoteContent(noteContent.value)
    // $router.back()
    console.log('Save Clicked')

    storeNotes.updateNote(route.params.id, noteContent.value)

   router.push('/')
}

</script>