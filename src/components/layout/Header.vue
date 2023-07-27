<template>
  <div class="header">
    <img class="header-left" src="../../../public/images/trainline-mint.svg"/>
    <div class="header-right">
        <a-button v-if="!$store.state.isLogin" type="primary" ghost class="login-btn">Login</a-button>
        <a-dropdown v-else :trigger="['click']" @click="handleClick">
            <a-menu slot="overlay">
                <a-menu-item key="account">
                    <a-icon type="user" />
                    Thông tin cá nhân
                </a-menu-item>
                <a-menu-item key="logout">
                    <a-icon type="logout" />
                    Đăng xuất
                </a-menu-item>
            </a-menu>
            <a-avatar />
        </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {}
    },
    computed: {
    },
    methods: {
        handleClick(e) {
            console.log(e);
        }
    }
}
</script>

<style scoped>
.header {
    padding: 12px 32px;
    display: flex;
    justify-content: space-between;
}
.login-btn {
    margin-right: 16px;
}
</style>