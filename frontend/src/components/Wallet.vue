<template>
    <div>
        Wallet: {{ route.params.uuid }}
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>