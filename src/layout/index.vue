<template>
  <div>
    <Header class="header"/>
    <div class="content">
      <Navbar class="navbar"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Navbar from "@/components/layout/Navbar.vue";
export default {
    name: "AppLayout",
    components: {
        Header, Navbar
    }
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.content {
  display: flex;
}
.navbar {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  height: calc(100vh - 57px);
}
</style>