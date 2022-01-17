<template>
  <div class="container">
    <div class="container-user-profile">
      <div class="container-input">
        <div class="name-icon"></div>
        <Inputs v-model="form.name"/>
      </div>
      <div class="container-input">
        <div class="email-icon"></div>
        <Inputs v-model="form.email"/>
      </div>
    </div>
  </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue'

export default {
  components: { Inputs },
  data() {
    return {
      form: {
        email: '',
        name: ''
      }
      
    }
  },
  mounted() {
    this.form = JSON.parse(localStorage.getItem('user')) ?? []
  }
  
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 50px;
    .container-user-profile {
      border-radius: 5px;
      padding: 5px;
      background: #C9A4A4;
      margin: auto;
      width: 300px;
      .container-input {
        padding: 10px;
      }
    }
  }
</style>