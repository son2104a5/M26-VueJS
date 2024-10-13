import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [
      {
        id: 1,
        name: "Nguyễn Đắc Sơn",
        gender: "Nam",
        dateOfBirth: "21/08/2004",
        address: "Thanh Xuân, Hà Nội",
      },
      {
        id: 2,
        name: "Lê Thanh Tùng",
        gender: "Nam",
        dateOfBirth: "05/12/1998",
        address: "Sơn Trà, Hà Nội",
      },
      {
        id: 3,
        name: "Phan Văn Tùng",
        gender: "Nam",
        dateOfBirth: "15/05/1997",
        address: "Quảng Ngãi, Quảng Nam",
      }
    ],
    products: [
      {
        id: 1,
        name: "Iphone 12",
        price: 10000000,
        quantity: 10,
      },
      {
        id: 2,
        name: "Samsung Galaxy S21",
        price: 8000000,
        quantity: 5,
      },
      {
        id: 3,
        name: "Xiaomi Redmi Note 10 Pro",
        price: 5000000,
        quantity: 15,
      }
    ],
    count: 0,
    randomNumbers: [],
    company: "Rikkei Academy",
    darkMode: false,
    language: 'vi'
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount
    },
    decrement(state, payload) {
      state.count -= payload.amount
    },
    addRandomNumber(state, payload) {
      state.randomNumbers.push(payload.amount);
    },
    updateCompany(state, payload) {
      state.company = payload.amount;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    },
    setLocale(state, payload) {
      state.locale = payload
    }
  },
  actions: {
    generateRandomNumber({ commit }) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      commit('addRandomNumber', {
        amount: randomNumber,
      });
    },
  },
});

export default store;
