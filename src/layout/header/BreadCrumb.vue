<template>
  <div class="logo">
    <img :src="MenuLogo" />
    <span class="logo-title">{{ title }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import MenuLogo from "@/assets/icon.png";

const title = ref("中医在线");
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  height: 60px;
  background-color: #ffffff;
  text-align: center;
  cursor: pointer;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
    margin-left: 5px;
  }
  .logo-title {
    color: #050505;
    font-weight: 800;
    line-height: 60px;
    font-size: 22px;
    font-family: FangSong;
  }
}
</style>
