<template>
  <div class="system-settings">
    <!-- 信託部人員權限設定 -->
    <Card class="settings-card" :bordered="false">
      <div slot="title" class="section-title">信託部人員權限設定</div>
      <Form :model="staffForm" :label-width="100">
        <Row :gutter="16" type="flex" align="middle">
          <Col span="12">
            <FormItem label="*員工編號">
              <Input
                v-model="staffForm.staffNo"
                placeholder="請輸入員工編號"
                style="width: 220px"
              />
              <Tooltip content="查詢" transfer>
                <Button
                  type="primary"
                  icon="ios-search"
                  style="margin-left: 8px"
                  @click="handleStaffSearch"
                />
              </Tooltip>
            </FormItem>
          </Col>
          <Col span="12" class="form-actions">
            <Button type="primary" @click="handleStaffAdd">新增</Button>
            <Button style="margin-left: 8px" @click="resetStaffForm"
              >清空</Button
            >
          </Col>
        </Row>
      </Form>

      <Table
        :columns="staffColumns"
        :data="staffList"
        border
        stripe
        size="small"
        style="margin-top: 12px"
      />
    </Card>

    <!-- 容積移轉建築物設定 -->
    <Card class="settings-card" :bordered="false">
      <div slot="title" class="section-title">容積移轉建築物設定</div>
      <Form :model="buildingTransferForm" :label-width="80">
        <Row :gutter="16">
          <Col span="8">
            <FormItem label="*代碼">
              <Input
                v-model="buildingTransferForm.code"
                placeholder="請輸入代碼"
              />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="*名稱">
              <Input
                v-model="buildingTransferForm.name"
                placeholder="請輸入名稱"
              />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="說明">
              <Input
                v-model="buildingTransferForm.description"
                placeholder="請輸入說明"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24" class="form-actions">
            <Button type="primary" @click="handleBuildingTransferAdd"
              >新增</Button
            >
            <Button style="margin-left: 8px" @click="resetBuildingTransferForm"
              >清空</Button
            >
          </Col>
        </Row>
      </Form>

      <Table
        :columns="commonCodeColumns"
        :data="buildingTransferList"
        border
        stripe
        size="small"
        style="margin-top: 12px"
      />
    </Card>

    <!-- 帳務摘要設定 -->
    <Card class="settings-card" :bordered="false">
      <div slot="title" class="section-title">帳務摘要設定</div>
      <Form :model="accountSummaryForm" :label-width="80">
        <Row :gutter="16">
          <Col span="8">
            <FormItem label="*代碼">
              <Input
                v-model="accountSummaryForm.code"
                placeholder="請輸入代碼"
              />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="*名稱">
              <Input
                v-model="accountSummaryForm.name"
                placeholder="請輸入名稱"
              />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="說明">
              <Input
                v-model="accountSummaryForm.description"
                placeholder="請輸入說明"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24" class="form-actions">
            <Button type="primary" @click="handleAccountSummaryAdd"
              >新增</Button
            >
            <Button style="margin-left: 8px" @click="resetAccountSummaryForm"
              >清空</Button
            >
          </Col>
        </Row>
      </Form>

      <Table
        :columns="commonCodeColumns"
        :data="accountSummaryList"
        border
        stripe
        size="small"
        style="margin-top: 12px"
      />
    </Card>

    <!-- 事務摘要設定 -->
    <Card class="settings-card" :bordered="false">
      <div slot="title" class="section-title">事務摘要設定</div>
      <Form :model="caseSummaryForm" :label-width="80">
        <Row :gutter="16">
          <Col span="8">
            <FormItem label="*代碼">
              <Input v-model="caseSummaryForm.code" placeholder="請輸入代碼" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="*名稱">
              <Input v-model="caseSummaryForm.name" placeholder="請輸入名稱" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="說明">
              <Input
                v-model="caseSummaryForm.description"
                placeholder="請輸入說明"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24" class="form-actions">
            <Button type="primary" @click="handleCaseSummaryAdd">新增</Button>
            <Button style="margin-left: 8px" @click="resetCaseSummaryForm"
              >清空</Button
            >
          </Col>
        </Row>
      </Form>

      <Table
        :columns="commonCodeColumns"
        :data="caseSummaryList"
        border
        stripe
        size="small"
        style="margin-top: 12px"
      />
    </Card>

    <!-- 應備文件設定 -->
    <Card class="settings-card" :bordered="false">
      <div slot="title" class="section-title">應備文件設定</div>
      <Form :model="documentForm" :label-width="80">
        <Row :gutter="16">
          <Col span="8">
            <FormItem label="*代碼">
              <Input v-model="documentForm.code" placeholder="請輸入代碼" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="*名稱">
              <Input v-model="documentForm.name" placeholder="請輸入名稱" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="說明">
              <Input
                v-model="documentForm.description"
                placeholder="請輸入說明"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24" class="form-actions">
            <Button type="primary" @click="handleDocumentAdd">新增</Button>
            <Button style="margin-left: 8px" @click="resetDocumentForm"
              >清空</Button
            >
          </Col>
        </Row>
      </Form>

      <Table
        :columns="commonCodeColumns"
        :data="documentList"
        border
        stripe
        size="small"
        style="margin-top: 12px"
      />
    </Card>
  </div>
</template>

<script>
export default {
  name: "SystemSettingsView",
  data() {
    return {
      // 信託部人員權限
      staffForm: {
        staffNo: "",
      },
      staffList: [{ staffNo: "1234", staffName: "測試1" }],
      // 容積移轉建築物設定
      buildingTransferForm: {
        code: "",
        name: "",
        description: "",
      },
      buildingTransferList: [
        { code: "00", name: "無", description: "容積移轉建築物" },
        { code: "01", name: "歷史性建築物", description: "容積移轉建築物" },
        { code: "02", name: "非歷史性建築物", description: "容積移轉建築物" },
        { code: "03", name: "古蹟", description: "容積移轉建築物" },
      ],
      // 帳務摘要設定
      accountSummaryForm: {
        code: "",
        name: "",
        description: "",
      },
      accountSummaryList: [
        { code: "01", name: "支付工程款", description: "帳務摘要" },
        { code: "02", name: "支付信託手續費", description: "帳務摘要" },
      ],
      // 事務摘要設定
      caseSummaryForm: {
        code: "",
        name: "",
        description: "",
      },
      caseSummaryList: [
        { code: "01", name: "信託案件簽約完畢", description: "事務摘要" },
        { code: "02", name: "信託登記申請用印", description: "事務摘要" },
        { code: "03", name: "信託塗銷申請用", description: "事務摘要" },
        { code: "04", name: "支付工程款", description: "事務摘要" },
        { code: "05", name: "用印", description: "事務摘要" },
      ],
      // 應備文件設定
      documentForm: {
        code: "",
        name: "",
        description: "",
      },
      documentList: [
        { code: "01", name: "公司變更登記影本", description: "" },
        { code: "02", name: "負責人身分證影本", description: "" },
        { code: "03", name: "印鑑卡", description: "" },
        { code: "04", name: "委託人身分證影本", description: "" },
        { code: "05", name: "代理人身分證影本", description: "" },
        { code: "06", name: "授權書", description: "" },
      ],
      // 表格欄位
      staffColumns: [
        {
          title: "功能",
          key: "action",
          width: 80,
          align: "center",
          render: (h, params) => {
            return h(
              "Button",
              {
                props: {
                  type: "warning",
                  size: "small",
                },
                on: {
                  click: () => {
                    this.$Message.info(`編輯員工：${params.row.staffNo}`);
                  },
                },
              },
              "編輯"
            );
          },
        },
        {
          title: "員工編號",
          key: "staffNo",
          align: "center",
        },
        {
          title: "員工姓名",
          key: "staffName",
          align: "center",
        },
      ],
      commonCodeColumns: [
        {
          title: "功能",
          key: "action",
          width: 80,
          align: "center",
          render: (h, params) => {
            return h(
              "Button",
              {
                props: {
                  type: "warning",
                  size: "small",
                },
                on: {
                  click: () => {
                    this.$Message.info(`編輯代碼：${params.row.code}`);
                  },
                },
              },
              "編輯"
            );
          },
        },
        {
          title: "代碼",
          key: "code",
          width: 100,
          align: "center",
        },
        {
          title: "名稱",
          key: "name",
          align: "center",
          minWidth: 150,
        },
        {
          title: "說明",
          key: "description",
          align: "center",
          minWidth: 150,
        },
      ],
    };
  },
  methods: {
    // 信託部人員權限
    handleStaffSearch() {
      if (!this.staffForm.staffNo) {
        this.$Message.info("請先輸入員工編號");
        return;
      }
      this.$Message.info(`查詢員工編號：${this.staffForm.staffNo}`);
    },
    handleStaffAdd() {
      if (!this.staffForm.staffNo) {
        this.$Message.warning("請輸入員工編號");
        return;
      }
      this.staffList.push({
        staffNo: this.staffForm.staffNo,
        staffName: "新員工",
      });
      this.$Message.success("已新增人員權限");
      this.resetStaffForm();
    },
    resetStaffForm() {
      this.staffForm.staffNo = "";
    },
    // 容積移轉建築物設定
    handleBuildingTransferAdd() {
      if (!this.buildingTransferForm.code || !this.buildingTransferForm.name) {
        this.$Message.warning("請輸入代碼與名稱");
        return;
      }
      this.buildingTransferList.push({ ...this.buildingTransferForm });
      this.$Message.success("已新增容積移轉建築物設定");
      this.resetBuildingTransferForm();
    },
    resetBuildingTransferForm() {
      this.buildingTransferForm = {
        code: "",
        name: "",
        description: "",
      };
    },
    // 帳務摘要設定
    handleAccountSummaryAdd() {
      if (!this.accountSummaryForm.code || !this.accountSummaryForm.name) {
        this.$Message.warning("請輸入代碼與名稱");
        return;
      }
      this.accountSummaryList.push({ ...this.accountSummaryForm });
      this.$Message.success("已新增帳務摘要設定");
      this.resetAccountSummaryForm();
    },
    resetAccountSummaryForm() {
      this.accountSummaryForm = {
        code: "",
        name: "",
        description: "",
      };
    },
    // 事務摘要設定
    handleCaseSummaryAdd() {
      if (!this.caseSummaryForm.code || !this.caseSummaryForm.name) {
        this.$Message.warning("請輸入代碼與名稱");
        return;
      }
      this.caseSummaryList.push({ ...this.caseSummaryForm });
      this.$Message.success("已新增事務摘要設定");
      this.resetCaseSummaryForm();
    },
    resetCaseSummaryForm() {
      this.caseSummaryForm = {
        code: "",
        name: "",
        description: "",
      };
    },
    // 應備文件設定
    handleDocumentAdd() {
      if (!this.documentForm.code || !this.documentForm.name) {
        this.$Message.warning("請輸入代碼與名稱");
        return;
      }
      this.documentList.push({ ...this.documentForm });
      this.$Message.success("已新增應備文件設定");
      this.resetDocumentForm();
    },
    resetDocumentForm() {
      this.documentForm = {
        code: "",
        name: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped>
.system-settings {
  padding: 0;
}

.settings-card {
  margin-bottom: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1f2d3d;
  text-align: center;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media (max-width: 768px) {
  .form-actions {
    justify-content: center;
    margin-top: 8px;
  }
}
</style>
