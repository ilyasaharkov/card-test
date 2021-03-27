<template>
  <div class="form-wrapper">
  <form @submit.prevent="sendForm" class="form">
    <h3>Добавление карточки</h3>
    <input v-model.trim="form.country" class="form-input" placeholder="Старана производетеля...">
    <input v-model.trim="form.img"  class="form-input" placeholder="Вставьте ссылку картинки...">
    <input v-model.trim="form.title"  class="form-input" placeholder="Название товара">
    <input v-model.trim="form.price"  class="form-input"  placeholder="Стоимость машины...">
    <input type="hidden"  v-model="form.like"  >
    <button type="submit" class="button">Добавить карточку</button>
  </form>
  </div>
 
</template>

<script>
export default {
  name: 'addCard',
  data: () => ({
    form: {
      country: '',
      img: '',
      title: '',
      price: '',
      like: false,
    }
  }),
  methods: {
    sendForm() {
      const dataForm = {
        country: this.form.country,
        img: this.form.img,
        title: this.form.title,
        id: Date.now(),
        price: this.form.price,
        like: false
      }
      // console.log('dataForm', dataForm)
      this.$store.dispatch('getInfo', dataForm)
    }
  }
}
</script>

<style lang="sass" scoped>
  .form 
    margin-top: 30px
    display: flex
    align-items: center
    flex-direction: column
    margin: 0 auto
    border-radius: 5px
    padding: 20px 0
    &-wrapper
      margin-top: 20px
      background-color: white
      border-radius: 5px
      border: 2px solid #ed6b6a
    &-input
      margin-top: 10px
      padding: 10px 2px 10px 2px
      border: none
      border-bottom: 2px solid #ed6b6a
      margin-bottom: 10px
      &:focus
        outline: none
</style>