<template>
<div>
    <h2>Авторизация</h2>
    <form @submit.prevent="login">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Пароль" required />
    <button type="submit">Войти</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import directus from '../directus';

export default defineComponent({
name: 'Login',
setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const error = ref<string | null>(null);

    const login = async () => {
    try {
        const response = await directus.auth.login({
        email: email.value,
        password: password.value,
        });
        localStorage.setItem('access_token', response.access_token);
        alert('Авторизация успешна!');
    } catch (e: any) {
        error.value = e.message || 'Ошибка авторизации';
    }
    };

    return {
    email,
    password,
    error,
    login,
    };
},
});
</script>
  