<template>
  <div class="basic-data-view">
    <!-- 契約搜尋表單 -->
    <Card class="search-form-card" :bordered="false">
      <div slot="title" class="card-title">契約搜尋</div>
      <Form ref="searchForm" :model="searchForm" :label-width="120">
        <Row :gutter="16">
          <Col span="12">
            <FormItem label="契約編號">
              <Input v-model="searchForm.contractNo" placeholder="請輸入契約編號" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="招攬單位">
              <Select v-model="searchForm.unit" placeholder="請選取">
                <Option value="">請選取</Option>
                <Option value="unit1">單位一</Option>
                <Option value="unit2">單位二</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="16">
          <Col span="12">
            <FormItem label="簽約起迄日">
              <Row :gutter="8">
                <Col span="11">
                  <DatePicker
                    v-model="searchForm.contractStartDate"
                    type="date"
                    placeholder="起日期"
                    style="width: 100%"
                  />
                </Col>
                <Col span="2" style="text-align: center; line-height: 32px">~</Col>
                <Col span="11">
                  <DatePicker
                    v-model="searchForm.contractEndDate"
                    type="date"
                    placeholder="迄日期"
                    style="width: 100%"
                  />
                </Col>
              </Row>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="契約案名">
              <Input v-model="searchForm.caseName" placeholder="請輸入契約案名" />
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="16">
          <Col span="12">
            <FormItem label="經辦人員編">
              <Input
                v-model="searchForm.staffNo"
                placeholder="員編（查詢）"
                style="width: calc(100% - 80px)"
              />
              <Button type="primary" style="margin-left: 8px" @click="queryStaff">查詢</Button>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="信託塗銷起迄日">
              <Row :gutter="8">
                <Col span="11">
                  <DatePicker
                    v-model="searchForm.cancelStartDate"
                    type="date"
                    placeholder="起日期"
                    style="width: 100%"
                  />
                </Col>
                <Col span="2" style="text-align: center; line-height: 32px">~</Col>
                <Col span="11">
                  <DatePicker
                    v-model="searchForm.cancelEndDate"
                    type="date"
                    placeholder="迄日期"
                    style="width: 100%"
                  />
                </Col>
              </Row>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="16">
          <Col span="12">
            <FormItem label="委託人 ID">
              <Input v-model="searchForm.clientId" placeholder="請輸入委託人 ID" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="手續費狀態">
              <CheckboxGroup v-model="searchForm.feeStatus">
                <Checkbox label="已收">已收</Checkbox>
                <Checkbox label="未收">未收</Checkbox>
              </CheckboxGroup>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="16">
          <Col span="12">
            <FormItem label="結案狀態">
              <RadioGroup v-model="searchForm.closeStatus">
                <Radio label="已結案">已結案</Radio>
                <Radio label="未結案">未結案</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="土地坐落">
              <Input v-model="searchForm.landLocation" placeholder="請輸入土地坐落" />
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="24">
            <FormItem label="應備文件">
              <RadioGroup v-model="searchForm.docStatus">
                <Radio label="已齊全">已齊全</Radio>
                <Radio label="未齊全">未齊全</Radio>
                <Radio label="未確認">未確認</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="24" style="text-align: center; margin-top: 1rem">
            <Button type="primary" size="large" style="margin-right: 8px" @click="createNew">
              建立新契約
            </Button>
            <Button type="primary" size="large" style="margin-right: 8px" @click="handleSearch">
              查詢
            </Button>
            <Button size="large" style="margin-right: 8px" @click="handleClear">清空</Button>
            <Button type="success" size="large" @click="handleExport">匯出 Excel 檔</Button>
          </Col>
        </Row>
      </Form>
    </Card>

    <!-- 搜尋結果表格 -->
    <Card class="result-table-card" :bordered="false" v-if="searchResults.length > 0">
      <div slot="title" class="card-title">契約主檔</div>
      <Table :columns="tableColumns" :data="searchResults" border stripe></Table>
    </Card>

    <!-- 契約檔案 Modal -->
    <Modal
      v-model="fileModalVisible"
      title="契約檔案"
      :mask-closable="false"
      width="800"
      @on-cancel="handleCloseFileModal"
    >
      <div class="file-modal-content">
        <div class="contract-info">
          <p><strong>契約編號：</strong>{{ currentContract.contractNo }}</p>
          <p><strong>契約案名：</strong>{{ currentContract.caseName }}</p>
        </div>
        <Divider />
        <div class="file-list">
          <h4>檔案列表</h4>
          <Table :columns="fileColumns" :data="contractFiles" border></Table>
        </div>
      </div>
      <div slot="footer">
        <Button @click="handleCloseFileModal">關閉</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'BasicDataView',
  data() {
    return {
      searchForm: {
        contractNo: '',
        unit: '',
        contractStartDate: '',
        contractEndDate: '',
        caseName: '',
        staffNo: '',
        cancelStartDate: '',
        cancelEndDate: '',
        clientId: '',
        feeStatus: [],
        closeStatus: '未結案',
        landLocation: '',
        docStatus: ''
      },
      searchResults: [],
      fileModalVisible: false,
      currentContract: {},
      contractFiles: [],
      tableColumns: [
        {
          title: '契約主檔',
          key: 'file',
          align: 'center',
          width: 100,
          render: (h, params) => {
            return h(
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.openFileModal(params.row);
                  }
                }
              },
              '主檔'
            );
          }
        },
        {
          title: '契約編號',
          key: 'contractNo',
          align: 'center',
          width: 150
        },
        {
          title: '契約案名',
          key: 'caseName',
          align: 'center',
          minWidth: 150
        },
        {
          title: '簽約日',
          key: 'contractDate',
          align: 'center',
          width: 120
        },
        {
          title: '招攬單位',
          key: 'unit',
          align: 'center',
          width: 120
        },
        {
          title: '經辦人員',
          key: 'staff',
          align: 'center',
          width: 150
        },
        {
          title: '信託手續費',
          key: 'trustFee',
          align: 'right',
          width: 120
        },
        {
          title: '已收帳款',
          key: 'received',
          align: 'right',
          width: 120
        },
        {
          title: '應收但未收帳款',
          key: 'unreceived',
          align: 'right',
          width: 150
        },
        {
          title: '結案日',
          key: 'closeDate',
          align: 'center',
          width: 120
        },
        {
          title: '備註',
          key: 'remark',
          align: 'center',
          minWidth: 150
        }
      ],
      fileColumns: [
        {
          title: '檔案名稱',
          key: 'fileName',
          align: 'left',
          minWidth: 200
        },
        {
          title: '檔案類型',
          key: 'fileType',
          align: 'center',
          width: 120
        },
        {
          title: '上傳日期',
          key: 'uploadDate',
          align: 'center',
          width: 150
        },
        {
          title: '檔案大小',
          key: 'fileSize',
          align: 'right',
          width: 120
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          width: 150,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small',
                    style: { marginRight: '8px' }
                  },
                  on: {
                    click: () => {
                      this.downloadFile(params.row);
                    }
                  }
                },
                '下載'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.deleteFile(params.row);
                    }
                  }
                },
                '刪除'
              )
            ]);
          }
        }
      ]
    };
  },
  methods: {
    queryStaff() {
      this.$Message.info('查詢經辦人員功能');
    },
    createNew() {
      this.$Message.info('建立新契約功能');
    },
    handleSearch() {
      // 模擬搜尋結果
      this.searchResults = [
        {
          contractNo: 'F102001A0000',
          caseName: 'xxx',
          contractDate: '2024/01/15',
          unit: '分行',
          staff: '員編-姓名',
          trustFee: '5,000',
          received: '5,000',
          unreceived: '5,000',
          closeDate: '',
          remark: ''
        }
      ];
      this.$Message.success('查詢完成');
    },
    handleClear() {
      this.searchForm = {
        contractNo: '',
        unit: '',
        contractStartDate: '',
        contractEndDate: '',
        caseName: '',
        staffNo: '',
        cancelStartDate: '',
        cancelEndDate: '',
        clientId: '',
        feeStatus: [],
        closeStatus: '未結案',
        landLocation: '',
        docStatus: ''
      };
      this.searchResults = [];
      this.$Message.info('已清空表單');
    },
    handleExport() {
      this.$Message.info('匯出 Excel 檔功能');
    },
    openFileModal(contract) {
      this.currentContract = contract;
      // 模擬載入該契約的檔案列表
      this.contractFiles = [
        {
          fileName: '契約書.pdf',
          fileType: 'PDF',
          uploadDate: '2024/01/15',
          fileSize: '2.5 MB'
        },
        {
          fileName: '委託人身份證明.pdf',
          fileType: 'PDF',
          uploadDate: '2024/01/16',
          fileSize: '1.2 MB'
        },
        {
          fileName: '土地登記謄本.pdf',
          fileType: 'PDF',
          uploadDate: '2024/01/17',
          fileSize: '3.8 MB'
        }
      ];
      this.fileModalVisible = true;
    },
    handleCloseFileModal() {
      this.fileModalVisible = false;
      this.currentContract = {};
      this.contractFiles = [];
    },
    downloadFile(file) {
      this.$Message.info(`下載檔案：${file.fileName}`);
      // 這裡可以實作實際的下載功能
    },
    deleteFile(file) {
      this.$Modal.confirm({
        title: '確認刪除',
        content: `確定要刪除檔案「${file.fileName}」嗎？`,
        onOk: () => {
          const index = this.contractFiles.findIndex((f) => f.fileName === file.fileName);
          if (index > -1) {
            this.contractFiles.splice(index, 1);
            this.$Message.success('檔案已刪除');
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.basic-data-view {
  padding: 0;
}

.search-form-card,
.result-table-card {
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2d3d;
}

.result-table-card {
  margin-top: 1.5rem;
}

.file-modal-content {
  padding: 0.5rem 0;
}

.contract-info {
  margin-bottom: 1rem;
}

.contract-info p {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #3c4858;
}

.file-list h4 {
  margin: 1rem 0 0.75rem;
  color: #1f2d3d;
  font-weight: 600;
}

@media (max-width: 768px) {
  .search-form-card,
  .result-table-card {
    padding: 1rem;
  }
}
</style>

