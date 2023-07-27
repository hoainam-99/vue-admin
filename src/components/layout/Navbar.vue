<template>
    <div>
        <a-button type="primary" style="margin: 8px 0" @click="toggleCollapsed">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-menu
            mode="inline"
            theme="light"
            :inline-collapsed="collapsed"
            :selected-keys="selectedKey"
        >
            <a-menu-item v-for="item in menu" :key="item.key">
                <a-icon :type="item.icon" />
                <span>{{ item.label }}</span>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
const menu = [
    { label: "Danh sách tàu", key: "train", icon: "car"}
]
export default {
    name: "AppNavbar",
    data() {
        return {
            menu,
            collapsed: false,
            selectedKey: ["train"]
        }
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
    }
}
</script>

<style>

</style>