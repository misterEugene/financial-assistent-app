<template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import directus from '../directus';

export default defineComponent({
  name: 'Register',
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const error = ref<string | null>(null);

    const register = async () => {
      try {
        await directus.users.createOne({
          email: email.value,
          password: password.value,
        });
        alert('Регистрация успешна!');
      } catch (e: any) {
        error.value = e.message || 'Ошибка регистрации';
      }
    };

    return {
      email,
      password,
      error,
      register,
    };
  },
});
</script>
