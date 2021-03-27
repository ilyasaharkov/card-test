<template>
  <div>
    <h3 style="margin-bottom: 50px">Корзина</h3>
    <div class="card-wrapper" v-if="trashCard.length > 0">
    <div class="card" v-for="(item, index) in trashCard" :key="index">
      <p style="font-weight: 600" class="card-country">{{item.country}}</p>
      <img class="card-img" :src="item.img" :alt="item.name" >
      <div class="card-info">
        <span class="icon"><i class="bi bi-star"></i></span>
        <p>{{item.title}}</p>
        <span class="icon"><i class="bi bi-heart"></i></span>
      </div>
      <div class="card-info">
        <p>{{item.price}} $</p>
        <button @click="deleteEvent(item.id)" class="button">Удалить</button>
      </div>
    </div>
  </div>
  <div v-else>Товаров в коризне нет</div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Trash',
  computed: {
    ...mapGetters(['trashCard'])
  },
  methods: {
    deleteEvent: function(id) {
        console.log('id', id)
        this.trashCard.splice(this.trashCard.indexOf(id), 1);
        if(this.trashCard.length < 1) {
          this.$router.push('/')
          this.$toast.info("Корзина пуста")
        } else {
          this.$toast.info("Карточка удалена")
        }
    }
  }
}
</script>


<style lang="sass" scoped>
  .card
    padding: 10px
    width: 40%
    margin: 10px 10px
    background-color: #f2f6f9
    border-radius: 5px
    &-wrapper
      flex-wrap: wrap
      width: 50%
      margin: 0 auto
      display: flex
    &-country
      margin: 10px 0
    &-img
      width: 100%
    &-info
      margin-top: 20px
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 20px
      &:last-child
        margin-bottom: 10px
      &-button
        padding: 10px
        background: #ed6b6a
        color: white
    &-layout
      background: #ed6b6a
      padding: 30px
</style>
