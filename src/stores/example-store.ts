import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    userData: {},
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },

    registerUser() {
      try {
        // axios call

        console.log('hello');

        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then((res: object) => {
            console.log(res);
          })
          .catch((err: object) => {
            console.log(err);
          });
      } catch (error) {
        // showTooltip(error);
        // let the form component display the error
        return error;
      }
    },
  },
});
