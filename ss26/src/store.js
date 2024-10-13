import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        title: 'Task 1',
        completed: false
      },
      {
        id: 2,
        title: 'Task 2',
        completed: true
      },
      {
        id: 3,
        title: 'Task 3',
        completed: false
      }
    ]
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.completed);
    }
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setInterval(() => {
        commit('increment', {
            amount: 1
        })
      }, 1000)
    }
  }
})

export default store;
