import { defineStore } from 'pinia';

import { otherStore } from './other';
export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'pinia',
      count: 0,
      themeColor: '#fff',
    };
  },
  getters: {},
  actions: {
    addCount() {
      this.count++;
    },
    changeThemeColor(theme: string) {
      // console.log(theme);
      this.themeColor = theme;
    }
  },
});
