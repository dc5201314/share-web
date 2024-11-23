<template>
  <a-layout-footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="contact">
          <h3 style="font-size: 40px">联系我们</h3>
          <p class="p">微信公众: 凤凰杏林学堂</p>
          <p class="p">QQ: 364007372</p>
          <p class="p">Email: 18761663770@163.com</p>
          <p class="p">备案号: 苏ICP备10204884号-5</p>
        </div>
      </div>
      <div class="footer-right">
        <div class="qr-codes">
          <div>
            <img src="@/assets/qrcode1.png" alt="小程序二维码" />
            <div class="title">江苏中医在线小程序</div>
          </div>
          <div>
            <img src="@/assets/qrcode2.png" alt="公众号二维码" />
            <div class="title">凤凰杏林学堂</div>
          </div>
        </div>
      </div>
    </div>
  </a-layout-footer>
</template>

<script setup>
import { onMounted, ref } from "vue";

const footerVisible = ref(true); // 控制页脚的可见性

onMounted(() => {
  // 监听滚动事件
  const handleScroll = () => {
    const contentElement = document.querySelector(".content");
    const scrollTop = contentElement.scrollTop; // 获取当前滚动位置
    const scrollHeight = contentElement.scrollHeight; // 内容总高度
    const clientHeight = contentElement.clientHeight; // 可视区域高度
    footerVisible.value = scrollTop + clientHeight < scrollHeight; // 控制可见性
  };

  // 添加滚动事件监听
  const contentElement = document.querySelector(".content");
  contentElement.addEventListener("scroll", handleScroll);

  // 在组件销毁时移除事件监听
  return () => {
    contentElement.removeEventListener("scroll", handleScroll);
  };
});
</script>

<style scoped>
.footer {
  background: #333333;
  color: #fff;
  text-align: center;
  padding: 20px 50px;
  max-height: 50vh; /* 最大高度为视口的一半 */
  overflow-y: auto; /* 内容溢出时可滚动 */
}
.p {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 18px;
}
.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.footer-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact {
  text-align: left;
  margin-right: 200px;
}

.qr-codes {
  display: flex;
}
.qr-codes img {
  width: 195px;
  height: 195px;
  margin-left: 30px;
}
.title {
  margin-top: 15px;
  font-size: 18px;
  margin-left: 26px;
}
</style>
