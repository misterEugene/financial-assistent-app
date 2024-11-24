<template>
    <div class="pts-wallet-container">
        <div class="pts-wallet-header">
            <div class="pts-wallet-title">
                <a :href="`/wallet/${props.wallet.uuid}`">
                    {{ props.wallet.title }}
                </a>
            </div>
            <div class="pts-wallet-balance">
                {{ props.wallet.balance }}
            </div>
        </div>
        <div class="pts-wallet-filter">
            <form></form>
        </div>
        <div class="pts-wallet-body">
            
        </div>
    </div>
</template>

<script lang="ts" setup>
// import { useRoute } from 'vue-router'
// import { ref } from 'vue'

const props = defineProps({
    wallet: {
        required: true
    }
})

// const route = useRoute()
// const wallet = ref({})


</script>

<style>
.pts-wallet-header {
    display: flex;
    justify-content: space-between;
}

.pts-wallet-title {
}
</style>