<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { checkAuth, useDirectus } from './compassables/directus'
import { readMe } from '@directus/sdk'

const isAuth = ref(false)

const user = ref({})

const loadCurrentUser = async () => {
    try {
        // isLoading.value = true
        const directusClient = await useDirectus()
        if(directusClient) {
            const responseUserData = await directusClient.request(readMe())
            if(responseUserData.id) {
                user.value = {
                    first_name: responseUserData.first_name,
                    last_name: responseUserData.last_name
                }
                // isAuth.value = await checkAuth()
            }
        }
    } catch (err) {
        console.log(321, await err)
        // isAuth.value = await checkAuth()
    } finally {
        // isLoading.value = false
    }
}

const logout = async () => {
    await userLogout()
}

onMounted(async () => {
    isAuth.value = await checkAuth()
    await loadCurrentUser()
    isAuth.value = await checkAuth()
});

const route=useRoute()
</script>

<template>
  <div>
    <nav class="pts-nav">
      <ul>
        <li>
          <a href="/">Главная</a>
        </li>
        <template v-if="isAuth">
          <li>
            <a href="/profile" class="pts-profile">{{ user.first_name }} {{ user.last_name }}</a> |
            <a href="/logout">Выйти</a>
          </li> 
        </template>
        <template v-else>
          <li>
            <a href="/login">Войти</a> |
            <a href="/register">Зарегистрироваться</a>
          </li>
        </template>
      </ul>
    </nav>
    <main>
      <div class="pts-container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

html {
  --bg-one: #027a14;
  --text-one: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
}

ul {
  list-style: none;
}

.pts-nav {
  background-color: var(--bg-one);
}

.pts-container {
  max-width: 1200px;
  padding: 30px 15px 0;
}

.pts-nav > ul {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 25px 15px 20px;
}

.pts-nav > ul > li > a {
  color: var(--text-one);
  text-decoration: none;
  font-weight: 700;
}
</style>