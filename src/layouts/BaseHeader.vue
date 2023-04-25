<script lang="ts" setup>
import { RouterLink, useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { h } from 'vue'

const gnb = [
    { name: '지원신청서 등록 및 수정', to: '/reg_and_update' },
    { name: '지원자 관리', to: '/applicants' },
    { name: '통계 관리', to: '/statics' }
]
const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: 'home' // router 의 name
                    }
                },
                { default: () => 'Logo' }
            ),
        key: '/'
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: '지원신청서 등록 및 수정'
                    }
                },
                { default: () => '지원신청서 등록 및 수정' }
            ),
        key: '/reg_and_update'
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: '지원자 관리'
                    }
                },
                { default: () => '지원자 관리' }
            ),
        key: '/applicants'
    },
    {
        label: () =>
            h(
                'a',
                {
                    href: '/reg_and_update2'
                },
                '메뉴a'
            ),
        key: 'reg_and_update2'
    }
]
const router = useRouter()
const currentRouter = router.currentRoute.value.path
</script>

<template>
    <header>
        <!-- <RouterLink to="/" @click="onClickLogo()"><h1>로고</h1></RouterLink> -->
        <n-menu mode="horizontal" :options="menuOptions" :default-value="currentRouter"> </n-menu>
        <!-- <n-tabs type="card" size="large" animate>
            <n-tab-pane
                :closable="route.path == ''"
                v-for="menu in gnb"
                :name="menu.name"
                :key="menu.name"
                :tab="menu.name"
            > -->
        <!-- <RouterLink :to="menu.to"> {{ menu.name }}</RouterLink> -->
        <!-- </n-tab-pane>
        </n-tabs> -->
    </header>
</template>

<style lang="scss" scoped></style>
