<template>
       <input
            v-model="loveNoteballs"
            type="text"
            placeholder="stats search"
            v-autofocus
            />


    <div class="stats">
        <table class="table">
           

            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
    </thead>

    <tbody>
       
        <tr>
            <td>Number of Notes</td>
            <td>{{ storeNotes.totalNoteCount }}</td>
        </tr>
        <tr>
            <td>Number of characters of all notes</td>
            <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
        
    </tbody>
    
    </table>
 

        
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { useStoreNotes} from '@/stores/storeNotes'
const storeNotes = useStoreNotes()
import {vAutofocus} from '@/directives/vAutofocus'
import {useWatchCharacters} from '@/use/useWatchCharacters'
const loveNoteballs = ref('')
useWatchCharacters(loveNoteballs)



</script>