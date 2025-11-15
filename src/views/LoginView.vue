<template>
  <div class="auth-wrapper">
    <Card class="login-card" :bordered="false">
      <div class="login-header">
        <Icon type="md-lock" size="32" />
        <h2>信託管理系統</h2>
        <p>請先登入以進行操作</p>
      </div>
      <Form ref="loginForm" :model="form" :rules="rules" @submit.native.prevent="handleSubmit">
        <FormItem prop="username">
          <Input
            v-model="form.username"
            size="large"
            placeholder="帳號"
            prefix="ios-person"
            autofocus
          />
        </FormItem>
        <FormItem prop="password">
          <Input
            v-model="form.password"
            type="password"
            size="large"
            placeholder="密碼"
            prefix="ios-lock"
          />
        </FormItem>
        <Button type="primary" long size="large" @click="handleSubmit">
          登入
        </Button>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '請輸入帳號', trigger: 'blur' }],
        password: [{ required: true, message: '請輸入密碼', trigger: 'blur' }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('login', {
            username: this.form.username
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.login-card {
  width: min(420px, 100%);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.login-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.login-header h2 {
  margin: 0.5rem 0 0;
  color: #1f2d3d;
}

.login-header p {
  margin: 0.25rem 0 0;
  color: #7b8a9c;
}
</style>

