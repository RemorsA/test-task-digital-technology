<template>
  <div class="container">
    <div class="container-main">
      <div class="container-form">
        <div class="name">Регистрация</div>

        <div class="container-input">
          <div class="name-icon"></div>
          <Inputs placeholder="Имя" v-model="form.name"/>
        </div>

        <div class="container-input">
          <div class="pass-icon"></div>
          <Inputs placeholder="Пароль" v-model="form.pass"/>
        </div>

        <div class="container-input">
          <div class="email-icon"></div>
          <Inputs placeholder="Email" v-model="form.email"/>
        </div>

        <div class="container-btn">
          <Button @click="regUser"/>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Inputs from '@/components/Inputs.vue'

export default {
  components: { Button, Inputs },

  data() {
    return {
      form: {
        name: '',
        pass: '',
        email: ''
      }
    }
  },
  methods: {
    regUser() {
      const parsed = JSON.stringify(this.form)
      localStorage.setItem('user', parsed)
      this.$router.push('Profile')
    }
  }
}
</script>

<style lang='scss'>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Oswald:wght@200&display=swap');

  * {
    box-sizing: border-box;
    margin: 0%;
    padding: 0;
  }

  .name-icon {
    background-image: url('../static/0.svg');
    width: 32px;
    height: 32px;
    margin: 10px;
  }

  .pass-icon {
    background-image: url('../static/2.svg');
    width: 32px;
    height: 32px;
    margin: 10px;
  }

  .email-icon {
    background-image: url('../static/1.svg');
    width: 32px;
    height: 32px;
    margin: 10px;
  }


  .container {
    margin-top: 50px;
    .container-main {
      margin: auto;
      width: 500px;
      background: #C9A4A4;
      border-radius: 5px;
      padding: 10px;
      .container-form {
        border-radius: 20px;
        .name {
          text-align: end;
          font-size: 30px;
          font-family: 'Oswald', sans-serif;
        }
        .container-input {
          display: flex;
          padding: 10px;
        }
      }
    }
  } 
</style>
