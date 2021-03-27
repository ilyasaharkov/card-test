<template>
  <div>
      <div class="card-modal"><add-card/></div>
    <div class="card-wrapper">
    <div class="card" v-for="(item, index) in staticCard" :key="index">
      <p style="font-weight: 600" class="card-country">{{item.country}}</p>
      <img class="card-img" :src="item.img" :alt="item.name" >
      <div class="card-info">
        <span class="icon"><i class="bi bi-star"></i></span>
        <p>{{item.title}}</p>
        <span class="icon"><i class="bi bi-heart"></i></span>
      </div>
      <div class="card-info">
        <p>{{item.price}} $</p>
        <button @click.prevent="sendTrash(item)" class="button">В корзину</button>
      </div>
    </div>
  </div> 
</div>

</template>

<script>
import {mapGetters} from 'vuex'
import addCard from '../components/addCard.vue'
export default {
  components: { addCard },
  computed: mapGetters(['staticCard']),
  methods: {
    sendTrash(dataItem) {
      // console.log('id',dataItem)
      this.$store.dispatch('sendCardTrash', dataItem)
    },
  }
}
</script>

<style lang="sass" scoped>
  .card
    padding: 10px
    width: 40%
    margin: 20px auto
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
    &-modal
      width: 26%
      margin: 0 auto
  .fade-enter-active, .fade-leave-active 
    transition: opacity .5s 
  .fade-enter, .fade-leave-to 
    opacity: 0;
</style>
