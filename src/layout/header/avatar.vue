<template>
  <div>
    <span class="el-dropdown-link">
      <img class="user-img" src="@/assets/user.jpg" />
    </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.el-dropdown-link:focus {
  display: flex;
  outline: none;
}
.user-img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
}
</style>
