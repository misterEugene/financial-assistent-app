<template>
<div>
    <h2>Список кошельков</h2>
    <div v-if="isAuth">
        <WalletsList :wallets="wallets"/>
    </div>
    <div v-else>
        Сначала нужно <a href="/login">войти</a> :)
    </div>
</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { checkAuth, useDirectus } from '../compassables/directus'
import { loadWallets } from '../compassables/walletStore'
import WalletsList from './WalletsList.vue'
import { readMe } from '@directus/sdk'

const isAuth = ref<boolean>(false)
const wallets = ref([])

onMounted(async () => {
    isAuth.value = await checkAuth()
    const directusClient = await useDirectus()
    const responseCurenteUser = await directusClient.request(readMe())
    const currentUserId = responseCurenteUser.id
    const responseWalletsCurrentUser = await loadWallets(currentUserId)
    wallets.value = responseWalletsCurrentUser
})
</script>