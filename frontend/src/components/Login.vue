<template>
    <div>
      <h2>Авторизация</h2>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Пароль" required />
        <button type="button" :disabled="loading" @click="login">Войти</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <div><a href="/register">Зарегистрироваться</a></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useDirectus } from '../compassables/directus'
  
  const email = ref<string>('')
  const password = ref<string>('')
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)
  
  const login = async () => {
      loading.value = true
      error.value = null
  
      try {
        const directusClient = await useDirectus()
        const response = await directusClient.login(email.value, password.value)
        console.log("Авторизация успешна", response)
        window.location.replace(`${window.location.protocol}//${window.location.host}/`)
      } catch (e: any) {
        error.value = e.message || 'Ошибка авторизации'
      } finally {
        loading.value = false
      }
  };
  </script>