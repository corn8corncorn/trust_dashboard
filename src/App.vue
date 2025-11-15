<template>
  <div class="app-shell">
    <LoginView v-if="!isAuthenticated" @login="handleLogin" />

    <div v-else class="main-wrapper">
      <AppHeader @logout="handleLogout" />

      <NavigationTabs
        :active="activePage"
        :items="navItems"
        @change="handlePageChange"
      />

      <div class="content-area">
        <HomeView v-if="activePage === 'home'" :login-time="loginTime" />
        <PlaceholderPanel
          v-else
          :title="getPageTitle(activePage)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoginView from './views/LoginView.vue';
import HomeView from './views/HomeView.vue';
import AppHeader from './components/AppHeader.vue';
import NavigationTabs from './components/NavigationTabs.vue';
import PlaceholderPanel from './components/PlaceholderPanel.vue';

export default {
  name: 'App',
  components: {
    LoginView,
    HomeView,
    AppHeader,
    NavigationTabs,
    PlaceholderPanel
  },
  data() {
    return {
      isAuthenticated: false,
      loginTime: null,
      activePage: 'home',
      navItems: [
        { label: '首頁', value: 'home' },
        { label: '基本資料', value: 'profile' },
        { label: '報表', value: 'report' },
        { label: '系統設定', value: 'settings' },
        { label: '信託系統', value: 'trust' }
      ]
    };
  },
  methods: {
    handleLogin() {
      this.isAuthenticated = true;
      this.loginTime = new Date();
    },
    handleLogout() {
      this.isAuthenticated = false;
      this.activePage = 'home';
    },
    handlePageChange(page) {
      this.activePage = page;
    },
    getPageTitle(page) {
      const found = this.navItems.find((item) => item.value === page);
      return found ? found.label : '功能頁';
    }
  }
};
</script>

