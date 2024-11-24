<template>
    <ul>
        <WalletItem v-for="wallet in props.wallets" :key="wallet.uuid" :wallet="wallet"/>
        <!-- <li v-for="wallet in props.wallets" :key="wallet.uuid">
            <a :href="`/wallet/${wallet.uuid}`">
                <h3>{{ wallet.name }}</h3>
                <p>Баланс: {{ wallet.balance }}</p>
            </a>
        </li> -->
    </ul>
</template>

<script lang="ts" setup>
import WalletItem from './WalletItem.vue'
// import { useRoute } from 'vue-router'
// import { ref, onMounted } from 'vue'

const props = defineProps({
    wallets: {
        // type: Array<{
        //     name: String,
        //     schema: String,
        //     connection?: {
        //         node_name: String,
        //         output_name: String
        //     }
        // }>,
        required: true
    }
})

// const route = useRoute()
// const wallet = ref({})
// onMounted(async () => {

// })


</script>

<style>
/* .pts-wallet-header {
    display: flex;
} */
</style>