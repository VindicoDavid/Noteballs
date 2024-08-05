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
    deleteNote(idToDelete){
      this.notes = this.notes.filter(note => note.id !== idToDelete)
    },
    updateNote(id, content){
    
      
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
      
      
    },

   

   
  },
  getters:{
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.find(note => note.id === id).content
        
      }
    },
    totalNoteCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count=0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
  
})