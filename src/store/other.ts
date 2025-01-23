import { defineStore } from 'pinia'

export const otherStore = defineStore('other',{
  state:()=>{
    return {
      store:'other'
    }
  }
})