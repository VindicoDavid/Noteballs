// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes:[
            {
              id: 'id1',
              content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
            },
            {
              id: 'id2',
              content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
            }]
          
    }
  },
  actions:{
    
     addNote (newNoteContent){
      let currentDate = new Date().getTime()
      let id= currentDate.toString()
      let note = {
        id: id,
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    
   
  }
  
})