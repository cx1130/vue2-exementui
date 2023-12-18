<template>
  <div v-show="loading" class="loading-overlay">
    <div class="loading-spinner">
      <!-- 这里可以放 loading 动画或文字 -->
      <!-- 这里使用一个简单的 loading 文字作为示例 -->
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    showLoading() {
      this.loading = true;
    },
    hideLoading() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 设置一个较高的 z-index 使其位于其他元素上方 */
}

.loading-spinner {
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
