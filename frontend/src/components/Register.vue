<template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Эл. почта" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <input v-model="first_name" type="text" placeholder="Имя" required />
      <input v-model="last_name" type="text" placeholder="Фамилия" required />

      <button type="submit">Зарегистрироваться</button>
    </form>
    <p v-if="errorText">{{ errorText }}</p>
    <div><a href="/login">Войти</a></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from '../router'
import { checkUpdateAccessToken } from '../compassables/directus';
import { registerUser, loginUser } from '../compassables/userStore'

const email = ref<string>('')
const password = ref<string>('')
const first_name = ref<string>('')
const last_name = ref<string>('')
const errorText = ref<string | null>(null)

// const test = await checkUpdateAccessToken()

const register = async () => {
  try {
    const responseRegisterUser = await registerUser({
      email: email.value, 
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
      role: '6899cc7f-b8bd-4785-ad9a-bccd3224e640'
    })
    if(responseRegisterUser.status !== 'ok') {
      errorText.value = "Вы уже зарегистрированы"
      throw responseRegisterUser.error
    }

    console.log('Регистрация прошла успешно')
  } catch (e: any) {
    console.log('Ошибка регистрации')
    throw e
  }

  try {
    const responseLoginUser = await loginUser(email.value, password.value)
    if(responseLoginUser.status !== 'ok') {
      errorText.value = "Неизвестная ошибка"
      throw responseLoginUser.error
    }
    console.log('Успешный вход')
    router.push('/')
  } catch (e: any) {
    console.log('Ошибка входа')
    throw e
  }
};
</script>