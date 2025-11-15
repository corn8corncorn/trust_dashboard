<template>
  <div class="header-bar">
    <div class="header-container">
      <div class="header-title">信託系統</div>
      <div class="header-actions">
        <span>使用者您好，歡迎使用。</span>
        <Button type="error" size="small" @click="$emit('logout')">
          登出
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
.header-bar {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
}

.header-container {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 2rem;
}

.header-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2d3d;
  white-space: nowrap;
}

.header-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  color: #3c4858;
  font-weight: 500;
  margin-left: auto;
  flex: 0 0 auto;
}
</style>

