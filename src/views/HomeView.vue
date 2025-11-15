<template>
  <div>
    <div class="content-card">
      <p class="welcome-text">
        使用者您好，<br />
        登入時間為 {{ formattedLoginTime }}，<br />
        請選擇上方功能單進行作業，<br />
        使用中如有任何疑問，請逕洽信託部，<br />
        謝謝！
      </p>
    </div>

    <div class="table-block">
      <div class="table-title">今日待處理事務</div>
      <Table :columns="taskColumns" :data="tasks" border />
    </div>

    <div class="table-block">
      <div class="table-title">存續到期提醒</div>
      <Table :columns="contractColumns" :data="contractReminders" border />
    </div>

    <div class="table-block">
      <div class="table-title">手續費到期提醒</div>
      <Table :columns="feeColumns" :data="feeReminders" border />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    loginTime: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      tasks: [],
      contractReminders: [],
      feeReminders: []
    };
  },
  computed: {
    formattedLoginTime() {
      return this.formatDate(this.loginTime);
    },
    taskColumns() {
      return [
        {
          title: '日期',
          key: 'date',
          align: 'center'
        },
        {
          title: '事務摘要',
          key: 'summary',
          align: 'center'
        }
      ];
    },
    contractColumns() {
      return [
        {
          title: '契約到期日',
          key: 'expireDate',
          align: 'center'
        },
        {
          title: '契約編號',
          key: 'contractNo',
          align: 'center'
        },
        {
          title: '案名',
          key: 'caseName',
          align: 'center'
        }
      ];
    },
    feeColumns() {
      return [
        {
          title: '應扣款日',
          key: 'deductDate',
          align: 'center'
        },
        {
          title: '契約編號',
          key: 'contractNo',
          align: 'center'
        },
        {
          title: '案名',
          key: 'caseName',
          align: 'center'
        },
        {
          title: '手續費金額',
          key: 'feeAmount',
          align: 'center'
        },
        {
          title: '每期應收金額',
          key: 'installment',
          align: 'center'
        },
        {
          title: '攤提與否',
          key: 'amortized',
          align: 'center'
        }
      ];
    }
  },
  methods: {
    formatDate(date) {
      const pad = (value) => String(value).padStart(2, '0');
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());
      return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    }
  }
};
</script>

