<template>
  <a-layout class="mycontainer">
    <AppHeader />
    <a-layout-content class="content">
      <AppContent />
    </a-layout-content>
    <a-layout-footer class="footer">
      <AppFooter />
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import AppHeader from "./header/Header.vue";
import AppContent from "./content/Content.vue";
import AppFooter from "./footer/Footer.vue";
</script>

<style scoped>
.mycontainer {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 确保总高度至少为视口高度 */
  height: 100%; /* 确保容器高度填满 */
}

.content {
  overflow-y: auto; /* 内容溢出时可滚动 */
  padding: 20px; /* 内容区内边距 */
  background: #f6f6f6; /* 内容背景色 */
}

.footer {
  max-height: 50vh; /* 最大高度为视口的一半 */
  overflow-y: auto; /* 内容溢出时可滚动 */
  background: #333; /* 页脚背景色 */
  color: #fff; /* 页脚文字颜色 */
  padding: 20px; /* 页脚内边距 */
  margin: 0; /* 确保与上部无缝衔接 */
}
</style>
