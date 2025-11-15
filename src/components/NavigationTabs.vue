<template>
  <div class="nav-bar">
    <Tabs
      :value="active"
      type="card"
      animated
      @on-click="handleChange"
    >
      <TabPane
        v-for="item in items"
        :key="item.value"
        :name="item.value"
        :label="item.label"
      />
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'NavigationTabs',
  props: {
    active: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleChange(name) {
      this.$emit('change', name);
    }
  }
};
</script>

