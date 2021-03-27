export default {
 
  state: {
    staticCard: [
      {
        name: 'car',
        img: require('@/assets/img/car/carRed.jpg'),
        country: 'USA',
        title: 'Chevrolet Corvette',
        like: false,
        price: '120 000',
        id: 1
      },
    ],
    trashCard: []
  },
  mutations: {
    udpateCard(state, dataForm) {
      state.staticCard.push(dataForm)
    },
    updateTrash(state, dataItem) {
      state.trashCard.push(dataItem)
    }
  },
  actions: {
    getInfo({commit}, dataForm) {
      // console.log('dataForm', dataForm)
      commit('udpateCard', dataForm)
      this._vm.$toast.success('Карточка добавленна')
    },
    sendCardTrash({commit}, dataItem) {
      console.log('dataItem', dataItem)
      commit('updateTrash', dataItem)
      this._vm.$toast.success('Карточка перенесенна в корзину')
    }
  },
  getters: {
    staticCard: c => c.staticCard,
    trashCard: t => t.trashCard 
  }
}