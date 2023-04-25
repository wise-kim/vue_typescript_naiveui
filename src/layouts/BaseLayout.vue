<script lang="ts" setup>
import { RouterView } from 'vue-router'
import BaseHeader from './BaseHeader.vue'
</script>

<template>
    <BaseHeader />
    <main>
        <RouterView />
    </main>
</template>

<style lang="scss" scoped>
main {
    min-width: 1440px;
    padding: 20px;
}
</style>
