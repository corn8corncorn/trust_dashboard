<template>
  <div class="placeholder-card">
    <h3>{{ title }}</h3>
    <p>此頁面尚未提供資料，請從上方功能單選擇其他作業。</p>
  </div>
</template>

<script>
export default {
  name: 'PlaceholderPanel',
  props: {
    title: {
      type: String,
      default: '功能頁'
    }
  }
};
</script>

