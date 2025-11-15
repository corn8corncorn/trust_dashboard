<template>
  <Modal
    v-model="visible"
    title="契約建檔"
    :mask-closable="false"
    width="1400"
    :styles="{ top: '20px' }"
    class-name="create-contract-modal"
    @on-cancel="handleCancel"
  >
    <div class="contract-form-container">
      <Form
        ref="contractForm"
        :model="formData"
        :label-width="140"
        :rules="rules"
      >
        <!-- 📘 契約建檔 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">📘 契約建檔</div>
          <Row :gutter="16">
            <Col span="12">
              <FormItem label="*契約編號" prop="contractNo">
                <Row :gutter="8">
                  <Col span="8">
                    <Select
                      v-model="formData.contractNoPrefix1"
                      placeholder="F103"
                    >
                      <Option value="F103">F103</Option>
                    </Select>
                  </Col>
                  <Col span="8">
                    <Select
                      v-model="formData.contractNoPrefix2"
                      placeholder="招攬單位"
                    >
                      <Option value="A">A</Option>
                    </Select>
                  </Col>
                  <Col span="8">
                    <Input
                      v-model="formData.contractNoSuffix"
                      placeholder="輸入編號"
                      clearable
                    />
                  </Col>
                </Row>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="招攬部門">
                <Input
                  v-model="formData.department"
                  disabled
                  placeholder="系統代出"
                />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="16">
            <Col span="12">
              <FormItem label="*推薦人身分" prop="referrerIdentity">
                <Select
                  v-model="formData.referrerIdentity"
                  placeholder="身分別"
                >
                  <Option value="identity1">身分別1</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="*推薦人" prop="referrer">
                <Input
                  v-model="formData.referrer"
                  placeholder="員編-姓名"
                  clearable
                />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="16">
            <Col span="12">
              <FormItem label="*經辦人身分" prop="handlerIdentity">
                <Select v-model="formData.handlerIdentity" placeholder="身分別">
                  <Option value="identity1">身分別1</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="*經辦人" prop="handler">
                <Input
                  v-model="formData.handler"
                  placeholder="員編-姓名"
                  clearable
                />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="16">
            <Col span="12">
              <FormItem label="*信託部承辦人員" prop="trustHandler">
                <Select v-model="formData.trustHandler" placeholder="員編-姓名">
                  <Option value="staff1">員編-姓名1</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="*契約案名" prop="caseName">
                <Input
                  v-model="formData.caseName"
                  placeholder="輸入方塊"
                  clearable
                />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="16">
            <Col span="12">
              <FormItem label="*業務類別" prop="businessType">
                <Select
                  v-model="formData.businessType"
                  placeholder="不動產開發"
                >
                  <Option value="realestate">不動產開發</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="容積移轉建築物">
                <Select
                  v-model="formData.buildingType"
                  placeholder="歷史性建築物"
                >
                  <Option value="historic">歷史性建築物</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="16">
            <Col span="12">
              <FormItem label="案件金額">
                <Input
                  v-model="formData.caseAmount"
                  placeholder="輸入方塊"
                  clearable
                />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="*簽約日" prop="contractDate">
                <DatePicker
                  v-model="formData.contractDate"
                  type="date"
                  placeholder="選取日期"
                  clearable
                  style="width: 100%"
                />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="16">
            <Col span="12">
              <FormItem label="結案日">
                <DatePicker
                  v-model="formData.closeDate"
                  type="date"
                  placeholder="選取日期"
                  clearable
                  style="width: 100%"
                />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="信託帳號">
                <Row :gutter="8">
                  <Col span="4">
                    <Select
                      v-model="formData.trustAccountType"
                      placeholder="+/-"
                    >
                      <Option value="+">+</Option>
                      <Option value="-">-</Option>
                    </Select>
                  </Col>
                  <Col span="20">
                    <Input
                      v-model="formData.trustAccount"
                      placeholder="帳號"
                      clearable
                    />
                  </Col>
                </Row>
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="16">
            <Col span="12">
              <FormItem label="*存續期間" prop="duration">
                <Row :gutter="8">
                  <Col span="11">
                    <DatePicker
                      v-model="formData.durationStart"
                      type="date"
                      placeholder="選取日期"
                      clearable
                      style="width: 100%"
                    />
                  </Col>
                  <Col span="2" style="text-align: center; line-height: 32px"
                    >~</Col
                  >
                  <Col span="11">
                    <DatePicker
                      v-model="formData.durationEnd"
                      type="date"
                      placeholder="選取日期"
                      clearable
                      style="width: 100%"
                    />
                  </Col>
                </Row>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="*信託登記日" prop="trustRegDate">
                <DatePicker
                  v-model="formData.trustRegDate"
                  type="date"
                  placeholder="選取日期"
                  clearable
                  style="width: 100%"
                />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="16">
            <Col span="12">
              <FormItem label="信託塗銷日">
                <DatePicker
                  v-model="formData.trustCancelDate"
                  type="date"
                  placeholder="選取日期"
                  clearable
                  style="width: 100%"
                />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="塗銷原因">
                <Select
                  v-model="formData.cancelReason"
                  placeholder="信託目的完成"
                >
                  <Option value="completed">信託目的完成</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="24">
              <FormItem label="信託財產返還明細">
                <Row :gutter="8">
                  <Col span="6">
                    <div style="display: flex; align-items: center; gap: 8px">
                      <span>銀行</span>
                      <Input
                        v-model="formData.returnBankName"
                        placeholder="輸入方塊"
                        clearable
                        style="flex: 1"
                      />
                    </div>
                  </Col>
                  <Col span="6">
                    <div style="display: flex; align-items: center; gap: 8px">
                      <span>分行</span>
                      <Input
                        v-model="formData.returnBranchName"
                        placeholder="輸入方塊"
                        clearable
                        style="flex: 1"
                      />
                    </div>
                  </Col>
                  <Col span="6">
                    <div style="display: flex; align-items: center; gap: 8px">
                      <span>帳號</span>
                      <Input
                        v-model="formData.returnAccountNo"
                        placeholder="輸入方塊"
                        clearable
                        style="flex: 1"
                      />
                    </div>
                  </Col>
                </Row>
              </FormItem>
            </Col>
          </Row>
        </Card>

        <!-- 🟦 委託人資料 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">🟦 委託人資料</div>
          <Table
            :columns="clientColumns"
            :data="formData.clients"
            border
            :scroll="{ x: 1500 }"
          >
            <template slot-scope="{ row, index }" slot="action">
              <div style="display: flex; gap: 8px; justify-content: center">
                <Tooltip content="修改" transfer>
                  <Button
                    type="warning"
                    size="small"
                    :loading="loading"
                    @click="editClient(index)"
                  >
                    <Icon type="ios-create-outline" />
                  </Button>
                </Tooltip>
                <Tooltip content="刪除" transfer>
                  <Button
                    type="error"
                    size="small"
                    :loading="loading"
                    @click="removeClient(index)"
                  >
                    <Icon type="ios-trash-outline" />
                  </Button>
                </Tooltip>
              </div>
            </template>
          </Table>
          <Button
            type="dashed"
            long
            style="margin-top: 10px"
            :loading="loading"
            @click="addClient"
            >+</Button
          >
        </Card>

        <!-- 🟧 信託關係人資料 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">🟧 信託關係人資料</div>
          <Table
            :columns="trusteeRelationColumns"
            :data="formData.trusteeRelations"
            border
          >
            <template slot-scope="{ row, index }" slot="action">
              <div style="display: flex; gap: 8px; justify-content: center">
                <Tooltip content="修改" transfer>
                  <Button
                    type="warning"
                    size="small"
                    :loading="loading"
                    @click="editTrusteeRelation(index)"
                  >
                    <Icon type="ios-create-outline" />
                  </Button>
                </Tooltip>
                <Tooltip content="刪除" transfer>
                  <Button
                    type="error"
                    size="small"
                    :loading="loading"
                    @click="removeTrusteeRelation(index)"
                  >
                    <Icon type="ios-trash-outline" />
                  </Button>
                </Tooltip>
              </div>
            </template>
          </Table>
          <Button
            type="dashed"
            long
            style="margin-top: 10px"
            :loading="loading"
            @click="addTrusteeRelation"
            >+</Button
          >
        </Card>

        <!-- 🟨 受託人資料 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">🟨 受託人資料</div>
          <Row :gutter="16">
            <Col span="12">
              <FormItem label="受託人">
                <Input
                  v-model="formData.trustee"
                  disabled
                  value="○○商業銀行股份有限公司"
                />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="類別">
                <Select v-model="formData.trusteeType" placeholder="乙方">
                  <Option value="partyB">乙方</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="信託種類">
                <Select v-model="formData.trustType" placeholder="自益信託">
                  <Option value="self">自益信託</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <div style="margin-top: 20px">
            <h4>受託人明細</h4>
            <Table
              :columns="trusteeDetailColumns"
              :data="formData.trusteeDetails"
              border
            >
              <template slot-scope="{ row, index }" slot="action">
                <div style="display: flex; gap: 8px; justify-content: center">
                  <Tooltip content="修改" transfer>
                    <Button
                      type="warning"
                      size="small"
                      :loading="loading"
                      @click="editTrusteeDetail(index)"
                    >
                      <Icon type="ios-create-outline" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="刪除" transfer>
                    <Button
                      type="error"
                      size="small"
                      :loading="loading"
                      @click="removeTrusteeDetail(index)"
                    >
                      <Icon type="ios-trash-outline" />
                    </Button>
                  </Tooltip>
                </div>
              </template>
            </Table>
            <Button
              type="dashed"
              long
              style="margin-top: 10px"
              @click="addTrusteeDetail"
              >+</Button
            >
          </div>
        </Card>

        <!-- 🟩 受益人資料 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">🟩 受益人資料</div>
          <Table
            :columns="beneficiaryColumns"
            :data="formData.beneficiaries"
            border
          >
            <template slot-scope="{ row, index }" slot="action">
              <div style="display: flex; gap: 8px; justify-content: center">
                <Tooltip content="修改" transfer>
                  <Button
                    type="warning"
                    size="small"
                    :loading="loading"
                    @click="editBeneficiary(index)"
                  >
                    <Icon type="ios-create-outline" />
                  </Button>
                </Tooltip>
                <Tooltip content="刪除" transfer>
                  <Button
                    type="error"
                    size="small"
                    :loading="loading"
                    @click="removeBeneficiary(index)"
                  >
                    <Icon type="ios-trash-outline" />
                  </Button>
                </Tooltip>
              </div>
            </template>
          </Table>
          <Button
            type="dashed"
            long
            style="margin-top: 10px"
            :loading="loading"
            @click="addBeneficiary"
            >+</Button
          >
        </Card>

        <!-- 🟫 土地資料 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">🟫 土地資料</div>
          <Table :columns="landColumns" :data="formData.lands" border>
            <template slot-scope="{ row, index }" slot="action">
              <div style="display: flex; gap: 8px; justify-content: center">
                <Tooltip content="修改" transfer>
                  <Button
                    type="warning"
                    size="small"
                    :loading="loading"
                    @click="editLand(index)"
                  >
                    <Icon type="ios-create-outline" />
                  </Button>
                </Tooltip>
                <Tooltip content="刪除" transfer>
                  <Button
                    type="error"
                    size="small"
                    :loading="loading"
                    @click="removeLand(index)"
                  >
                    <Icon type="ios-trash-outline" />
                  </Button>
                </Tooltip>
              </div>
            </template>
          </Table>
          <Button type="dashed" long style="margin-top: 10px" @click="addLand"
            >+</Button
          >
        </Card>

        <!-- ⬜ 建物資料 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">⬜ 建物資料</div>
          <Table :columns="buildingColumns" :data="formData.buildings" border>
            <template slot-scope="{ row, index }" slot="action">
              <div style="display: flex; gap: 8px; justify-content: center">
                <Tooltip content="修改" transfer>
                  <Button
                    type="warning"
                    size="small"
                    :loading="loading"
                    @click="editBuilding(index)"
                  >
                    <Icon type="ios-create-outline" />
                  </Button>
                </Tooltip>
                <Tooltip content="刪除" transfer>
                  <Button
                    type="error"
                    size="small"
                    :loading="loading"
                    @click="removeBuilding(index)"
                  >
                    <Icon type="ios-trash-outline" />
                  </Button>
                </Tooltip>
              </div>
            </template>
          </Table>
          <Button
            type="dashed"
            long
            style="margin-top: 10px"
            :loading="loading"
            @click="addBuilding"
            >+</Button
          >
          <Row :gutter="16" style="margin-top: 16px">
            <Col span="12">
              <FormItem label="備註">
                <Input
                  v-model="formData.remark"
                  type="textarea"
                  :rows="3"
                  clearable
                />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="本金土地">
                <Input
                  v-model="formData.principalLand"
                  placeholder="輸入方塊（先人工鍵入，之後以中菲代入）"
                  clearable
                />
              </FormItem>
            </Col>
          </Row>
        </Card>

        <!-- 💰 信託手續費 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">💰 信託手續費</div>
          <Table :columns="feeColumns" :data="formData.fees" border>
            <template slot-scope="{ row, index }" slot="action">
              <div style="display: flex; gap: 8px; justify-content: center">
                <Tooltip content="修改" transfer>
                  <Button
                    type="warning"
                    size="small"
                    :loading="loading"
                    @click="editFee(index)"
                  >
                    <Icon type="ios-create-outline" />
                  </Button>
                </Tooltip>
                <Tooltip content="刪除" transfer>
                  <Button
                    type="error"
                    size="small"
                    :loading="loading"
                    @click="removeFee(index)"
                  >
                    <Icon type="ios-trash-outline" />
                  </Button>
                </Tooltip>
              </div>
            </template>
          </Table>
          <Button type="dashed" long style="margin-top: 10px" @click="addFee"
            >+</Button
          >
          <Row style="margin-top: 16px">
            <Col span="12">
              <FormItem label="支付方">
                <Select v-model="formData.payer" placeholder="01-甲方">
                  <Option value="partyA">01-甲方</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
        </Card>

        <!-- 📄 所需的應備文件選取 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">📄 所需的應備文件選取</div>
          <CheckboxGroup v-model="formData.requiredDocs">
            <Row>
              <Col span="8">
                <Checkbox label="01">01-公司變更登記影本</Checkbox>
              </Col>
              <Col span="8">
                <Checkbox label="02">02-負責人身分證影本</Checkbox>
              </Col>
              <Col span="8">
                <Checkbox label="03">03-印鑑卡</Checkbox>
              </Col>
            </Row>
            <Row style="margin-top: 10px">
              <Col span="8">
                <Checkbox label="04">04-委託人身分證影本</Checkbox>
              </Col>
              <Col span="8">
                <Checkbox label="05">05-代理人身分證影本</Checkbox>
              </Col>
              <Col span="8">
                <Checkbox label="06">06-授權書</Checkbox>
              </Col>
            </Row>
          </CheckboxGroup>
        </Card>

        <!-- 🎯 內部分潤 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">🎯 內部分潤</div>
          <Row :gutter="16">
            <Col span="12">
              <FormItem label="分潤比率">
                <Input
                  v-model="formData.internalProfitRate"
                  placeholder="輸入方塊"
                  clearable
                />
                <span style="margin-left: 8px">%</span>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="分潤獎金">
                <Input
                  v-model="formData.internalProfitBonus"
                  placeholder="輸入方塊"
                  clearable
                />
              </FormItem>
            </Col>
          </Row>
        </Card>

        <!-- 🎯 外部分潤 -->
        <Card class="form-section" :bordered="false">
          <div slot="title" class="section-title">🎯 外部分潤</div>
          <Row :gutter="16">
            <Col span="12">
              <FormItem label="分潤對象">
                <Select
                  v-model="formData.externalProfitTarget"
                  placeholder="00無"
                >
                  <Option value="none">00無</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="分潤比率">
                <div style="display: flex; align-items: center; gap: 8px">
                  <Input
                    v-model="formData.externalProfitRate"
                    placeholder="輸入方塊"
                    clearable
                    style="flex: 1"
                  />
                  <span>%</span>
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
              <FormItem label="分潤獎金">
                <Input
                  v-model="formData.externalProfitBonus"
                  placeholder="輸入方塊"
                  clearable
                />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="姓名">
                <div style="display: flex; align-items: center; gap: 8px">
                  <Input
                    v-model="formData.externalProfitName"
                    placeholder="輸入方塊"
                    clearable
                    style="flex: 1"
                  />
                  <Tooltip content="查詢" transfer>
                    <Button
                      type="primary"
                      :loading="loading"
                      @click="queryExternalProfitName"
                    >
                      <Icon type="ios-search" />
                    </Button>
                  </Tooltip>
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
              <FormItem label="戶名">
                <Input
                  v-model="formData.externalProfitAccountName"
                  placeholder="輸入方塊"
                  clearable
                />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="分行名稱">
                <Input
                  v-model="formData.externalProfitBranchName"
                  placeholder="輸入方塊"
                  clearable
                />
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
              <FormItem label="銀行名稱">
                <Input
                  v-model="formData.externalProfitBankName"
                  placeholder="輸入方塊"
                  clearable
                />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="銀行帳號">
                <Input
                  v-model="formData.externalProfitBankAccount"
                  placeholder="輸入方塊"
                  clearable
                />
              </FormItem>
            </Col>
          </Row>
        </Card>
      </Form>
    </div>

    <div slot="footer">
      <Button :loading="loading" @click="handleCancel">取消</Button>
      <Button type="primary" :loading="loading" @click="handleSubmit"
        >儲存</Button
      >
    </div>
  </Modal>
</template>

<script>
export default {
  name: "CreateContractModal",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: this.value,
      loading: false,
      formData: {
        // 契約建檔
        contractNoPrefix1: "",
        contractNoPrefix2: "",
        contractNoSuffix: "",
        department: "",
        referrerIdentity: "",
        referrer: "",
        handlerIdentity: "",
        handler: "",
        trustHandler: "",
        caseName: "",
        businessType: "",
        buildingType: "",
        caseAmount: "",
        contractDate: "",
        closeDate: "",
        trustAccountType: "+",
        trustAccount: "",
        durationStart: "",
        durationEnd: "",
        trustRegDate: "",
        trustCancelDate: "",
        cancelReason: "",
        returnBank: false,
        returnBankName: "",
        returnBranch: false,
        returnBranchName: "",
        returnAccount: false,
        returnAccountNo: "",
        // 委託人資料
        clients: [],
        // 信託關係人資料
        trusteeRelations: [],
        // 受託人資料
        trustee: "○○商業銀行股份有限公司",
        trusteeType: "",
        trustType: "",
        trusteeDetails: [],
        // 受益人資料
        beneficiaries: [],
        // 土地資料
        lands: [],
        // 建物資料
        buildings: [],
        remark: "",
        principalLand: "",
        // 信託手續費
        fees: [],
        payer: "",
        // 應備文件
        requiredDocs: [],
        // 內部分潤
        internalProfitRate: "",
        internalProfitBonus: "",
        // 外部分潤
        externalProfitTarget: "",
        externalProfitRate: "",
        externalProfitBonus: "",
        externalProfitName: "",
        externalProfitAccountName: "",
        externalProfitBranchName: "",
        externalProfitBankName: "",
        externalProfitBankAccount: "",
      },
      rules: {
        contractNoSuffix: [
          { required: true, message: "請輸入契約編號", trigger: "blur" },
        ],
        referrerIdentity: [
          { required: true, message: "請選擇推薦人身分", trigger: "change" },
        ],
        referrer: [
          { required: true, message: "請輸入推薦人", trigger: "blur" },
        ],
        handlerIdentity: [
          { required: true, message: "請選擇經辦人身分", trigger: "change" },
        ],
        handler: [{ required: true, message: "請輸入經辦人", trigger: "blur" }],
        trustHandler: [
          {
            required: true,
            message: "請選擇信託部承辦人員",
            trigger: "change",
          },
        ],
        caseName: [
          { required: true, message: "請輸入契約案名", trigger: "blur" },
        ],
        businessType: [
          { required: true, message: "請選擇業務類別", trigger: "change" },
        ],
        contractDate: [
          {
            required: true,
            message: "請選擇簽約日",
            trigger: "change",
            type: "date",
          },
        ],
        durationStart: [
          {
            required: true,
            message: "請選擇存續期間起日",
            trigger: "change",
            type: "date",
          },
        ],
        durationEnd: [
          {
            required: true,
            message: "請選擇存續期間迄日",
            trigger: "change",
            type: "date",
          },
        ],
        trustRegDate: [
          {
            required: true,
            message: "請選擇信託登記日",
            trigger: "change",
            type: "date",
          },
        ],
      },
      // 表格欄位定義
      clientColumns: [
        {
          title: "功能",
          key: "action",
          width: 80,
          align: "center",
          slot: "action",
        },
        {
          title: "簡稱",
          key: "shortName",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h(
              "Select",
              {
                props: {
                  value: params.row.shortName,
                  placeholder: "請選取",
                  transfer: true,
                },
                style: { width: "100%" },
                on: {
                  "on-change": (val) => {
                    params.row.shortName = val;
                  },
                },
              },
              [
                h("Option", { props: { value: "partyA" } }, "甲方"),
                h("Option", { props: { value: "partyB" } }, "乙方"),
                h("Option", { props: { value: "partyC" } }, "丙方"),
              ]
            );
          },
        },
        {
          title: "身分",
          key: "identity",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "Select",
              {
                props: {
                  value: params.row.identity,
                  placeholder: "請選取",
                  transfer: true,
                },
                style: { width: "100%" },
                on: {
                  "on-change": (val) => {
                    params.row.identity = val;
                  },
                },
              },
              [
                h("Option", { props: { value: "landlord" } }, "地主"),
                h("Option", { props: { value: "owner" } }, "所有權人"),
                h("Option", { props: { value: "agent" } }, "代理人"),
                h("Option", { props: { value: "other" } }, "其他"),
              ]
            );
          },
        },
        {
          title: "身分證字號",
          key: "idNumber",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: {
                value: params.row.idNumber,
                placeholder: "請輸入身分證字號",
                clearable: true,
              },
              on: {
                input: (val) => {
                  params.row.idNumber = val;
                },
              },
            });
          },
        },
        {
          title: "委託人",
          key: "clientName",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              [
                h("Input", {
                  props: {
                    value: params.row.clientName,
                    placeholder: "請輸入委託人",
                    clearable: true,
                  },
                  style: { flex: 1 },
                  on: {
                    input: (val) => {
                      params.row.clientName = val;
                    },
                  },
                }),
                h(
                  "Tooltip",
                  {
                    props: {
                      content: "查詢",
                      transfer: true,
                    },
                  },
                  [
                    h("Button", {
                      props: {
                        type: "primary",
                        size: "small",
                        icon: "ios-search",
                        loading: this.loading,
                      },
                      style: { marginLeft: "8px" },
                      on: {
                        click: () => {
                          this.queryClient(params.index);
                        },
                      },
                    }),
                  ]
                ),
              ]
            );
          },
        },
        {
          title: "代表人",
          key: "representative",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.representative, clearable: true },
              on: {
                input: (val) => {
                  params.row.representative = val;
                },
              },
            });
          },
        },
        {
          title: "電話一",
          key: "phone1",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.phone1, clearable: true },
              on: {
                input: (val) => {
                  params.row.phone1 = val;
                },
              },
            });
          },
        },
        {
          title: "電話二",
          key: "phone2",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.phone2, clearable: true },
              on: {
                input: (val) => {
                  params.row.phone2 = val;
                },
              },
            });
          },
        },
        {
          title: "戶籍地址",
          key: "registeredAddress",
          minWidth: 200,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.registeredAddress, clearable: true },
              on: {
                input: (val) => {
                  params.row.registeredAddress = val;
                },
              },
            });
          },
        },
        {
          title: "通訊地址",
          key: "mailingAddress",
          minWidth: 200,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.mailingAddress, clearable: true },
              on: {
                input: (val) => {
                  params.row.mailingAddress = val;
                },
              },
            });
          },
        },
        {
          title: "受益人",
          key: "isBeneficiary",
          width: 100,
          align: "center",
          render: (h, params) => {
            return h("Checkbox", {
              props: { value: params.row.isBeneficiary },
              on: {
                "on-change": (val) => {
                  params.row.isBeneficiary = val;
                },
              },
            });
          },
        },
      ],
      trusteeRelationColumns: [
        {
          title: "功能",
          key: "action",
          width: 80,
          align: "center",
          slot: "action",
        },
        {
          title: "統一編號",
          key: "taxId",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              [
                h("Input", {
                  props: {
                    value: params.row.taxId,
                    clearable: true,
                  },
                  style: { flex: 1 },
                  on: {
                    input: (val) => {
                      params.row.taxId = val;
                    },
                  },
                }),
                h(
                  "Tooltip",
                  {
                    props: {
                      content: "查詢",
                      transfer: true,
                    },
                  },
                  [
                    h("Button", {
                      props: {
                        type: "primary",
                        size: "small",
                        icon: "ios-search",
                        loading: this.loading,
                      },
                      style: { marginLeft: "8px" },
                      on: {
                        click: () => {
                          this.queryTrusteeRelation(params.index);
                        },
                      },
                    }),
                  ]
                ),
              ]
            );
          },
        },
        {
          title: "信託關係人",
          key: "name",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.name, clearable: true },
              on: {
                input: (val) => {
                  params.row.name = val;
                },
              },
            });
          },
        },
        {
          title: "戶籍地址",
          key: "registeredAddress",
          minWidth: 200,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.registeredAddress, clearable: true },
              on: {
                input: (val) => {
                  params.row.registeredAddress = val;
                },
              },
            });
          },
        },
        {
          title: "電話一",
          key: "phone1",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.phone1, clearable: true },
              on: {
                input: (val) => {
                  params.row.phone1 = val;
                },
              },
            });
          },
        },
        {
          title: "電話二",
          key: "phone2",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.phone2, clearable: true },
              on: {
                input: (val) => {
                  params.row.phone2 = val;
                },
              },
            });
          },
        },
        {
          title: "備註",
          key: "remark",
          minWidth: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.remark, clearable: true },
              on: {
                input: (val) => {
                  params.row.remark = val;
                },
              },
            });
          },
        },
      ],
      trusteeDetailColumns: [
        {
          title: "功能",
          key: "action",
          width: 80,
          align: "center",
          slot: "action",
        },
        {
          title: "簡稱",
          key: "shortName",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h(
              "Select",
              {
                props: {
                  value: params.row.shortName,
                  placeholder: "請選取",
                  transfer: true,
                },
                style: { width: "100%" },
                on: {
                  "on-change": (val) => {
                    params.row.shortName = val;
                  },
                },
              },
              [
                h("Option", { props: { value: "partyA" } }, "甲方"),
                h("Option", { props: { value: "partyB" } }, "乙方"),
                h("Option", { props: { value: "partyC" } }, "丙方"),
              ]
            );
          },
        },
        {
          title: "統一編號",
          key: "taxId",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              [
                h("Input", {
                  props: {
                    value: params.row.taxId,
                    clearable: true,
                  },
                  style: { flex: 1 },
                  on: {
                    input: (val) => {
                      params.row.taxId = val;
                    },
                  },
                }),
                h(
                  "Tooltip",
                  {
                    props: {
                      content: "查詢",
                      transfer: true,
                    },
                  },
                  [
                    h("Button", {
                      props: {
                        type: "primary",
                        size: "small",
                        icon: "ios-search",
                        loading: this.loading,
                      },
                      style: { marginLeft: "8px" },
                      on: {
                        click: () => {
                          this.queryTrusteeDetail(params.index);
                        },
                      },
                    }),
                  ]
                ),
              ]
            );
          },
        },
        {
          title: "受託人",
          key: "name",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.name, clearable: true },
              on: {
                input: (val) => {
                  params.row.name = val;
                },
              },
            });
          },
        },
        {
          title: "代表人",
          key: "representative",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.representative, clearable: true },
              on: {
                input: (val) => {
                  params.row.representative = val;
                },
              },
            });
          },
        },
        {
          title: "登記地址",
          key: "registeredAddress",
          minWidth: 200,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.registeredAddress, clearable: true },
              on: {
                input: (val) => {
                  params.row.registeredAddress = val;
                },
              },
            });
          },
        },
        {
          title: "電話一",
          key: "phone1",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.phone1, clearable: true },
              on: {
                input: (val) => {
                  params.row.phone1 = val;
                },
              },
            });
          },
        },
        {
          title: "電話二",
          key: "phone2",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.phone2, clearable: true },
              on: {
                input: (val) => {
                  params.row.phone2 = val;
                },
              },
            });
          },
        },
      ],
      beneficiaryColumns: [
        {
          title: "功能",
          key: "action",
          width: 80,
          align: "center",
          slot: "action",
        },
        {
          title: "統一編號",
          key: "taxId",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              [
                h("Input", {
                  props: {
                    value: params.row.taxId,
                    clearable: true,
                  },
                  style: { flex: 1 },
                  on: {
                    input: (val) => {
                      params.row.taxId = val;
                    },
                  },
                }),
                h(
                  "Tooltip",
                  {
                    props: {
                      content: "查詢",
                      transfer: true,
                    },
                  },
                  [
                    h("Button", {
                      props: {
                        type: "primary",
                        size: "small",
                        icon: "ios-search",
                        loading: this.loading,
                      },
                      style: { marginLeft: "8px" },
                      on: {
                        click: () => {
                          this.queryBeneficiary(params.index);
                        },
                      },
                    }),
                  ]
                ),
              ]
            );
          },
        },
        {
          title: "受益人",
          key: "name",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.name, clearable: true },
              on: {
                input: (val) => {
                  params.row.name = val;
                },
              },
            });
          },
        },
        {
          title: "電話一",
          key: "phone1",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.phone1, clearable: true },
              on: {
                input: (val) => {
                  params.row.phone1 = val;
                },
              },
            });
          },
        },
        {
          title: "電話二",
          key: "phone2",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.phone2, clearable: true },
              on: {
                input: (val) => {
                  params.row.phone2 = val;
                },
              },
            });
          },
        },
        {
          title: "戶籍地址",
          key: "registeredAddress",
          minWidth: 200,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.registeredAddress, clearable: true },
              on: {
                input: (val) => {
                  params.row.registeredAddress = val;
                },
              },
            });
          },
        },
        {
          title: "通訊地址",
          key: "mailingAddress",
          minWidth: 200,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.mailingAddress, clearable: true },
              on: {
                input: (val) => {
                  params.row.mailingAddress = val;
                },
              },
            });
          },
        },
      ],
      landColumns: [
        {
          title: "功能",
          key: "action",
          width: 80,
          align: "center",
          slot: "action",
        },
        {
          title: "土地坐落",
          key: "location",
          minWidth: 400,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              { style: { display: "flex", gap: "8px", alignItems: "center" } },
              [
                h("Input", {
                  props: {
                    value: params.row.region,
                    placeholder: "系統帶出地區",
                    clearable: true,
                  },
                  style: { flex: "1" },
                  on: {
                    input: (val) => {
                      params.row.region = val;
                    },
                  },
                }),
                h(
                  "Tooltip",
                  {
                    props: {
                      content: "查詢",
                      transfer: true,
                    },
                  },
                  [
                    h(
                      "Button",
                      {
                        props: { size: "small" },
                        on: {
                          click: () => {
                            this.queryLandRegion(params.index);
                          },
                        },
                      },
                      "查詢"
                    ),
                  ]
                ),
                h("Input", {
                  props: {
                    value: params.row.section,
                    placeholder: "系統帶出地段",
                    clearable: true,
                  },
                  style: { flex: "1" },
                  on: {
                    input: (val) => {
                      params.row.section = val;
                    },
                  },
                }),
                h("span", "段"),
                h("Input", {
                  props: {
                    value: params.row.subsection,
                    placeholder: "系統帶出小段",
                    clearable: true,
                  },
                  style: { flex: "1" },
                  on: {
                    input: (val) => {
                      params.row.subsection = val;
                    },
                  },
                }),
                h("span", "小段"),
                h("Input", {
                  props: {
                    value: params.row.landNo,
                    placeholder: "輸入地號",
                    clearable: true,
                  },
                  style: { flex: "1" },
                  on: {
                    input: (val) => {
                      params.row.landNo = val;
                    },
                  },
                }),
              ]
            );
          },
        },
        {
          title: "權利範圍",
          key: "rightRange",
          width: 200,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              { style: { display: "flex", gap: "8px", alignItems: "center" } },
              [
                h("Input", {
                  props: {
                    value: params.row.rightRangeNumerator,
                    clearable: true,
                  },
                  style: { flex: "1" },
                  on: {
                    input: (val) => {
                      params.row.rightRangeNumerator = val;
                    },
                  },
                }),
                h("span", "分之"),
                h("Input", {
                  props: {
                    value: params.row.rightRangeDenominator,
                    clearable: true,
                  },
                  style: { flex: "1" },
                  on: {
                    input: (val) => {
                      params.row.rightRangeDenominator = val;
                    },
                  },
                }),
              ]
            );
          },
        },
        {
          title: "土地面積(㎡)",
          key: "area",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.area || "100", clearable: true },
              on: {
                input: (val) => {
                  params.row.area = val;
                },
              },
            });
          },
        },
        {
          title: "所有權人",
          key: "owner",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.owner, clearable: true },
              on: {
                input: (val) => {
                  params.row.owner = val;
                },
              },
            });
          },
        },
      ],
      buildingColumns: [
        {
          title: "功能",
          key: "action",
          width: 80,
          align: "center",
          slot: "action",
        },
        {
          title: "建物坐落",
          key: "location",
          minWidth: 300,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              { style: { display: "flex", gap: "8px", alignItems: "center" } },
              [
                h("Input", {
                  props: {
                    value: params.row.location,
                    clearable: true,
                  },
                  style: { flex: 3 },
                  on: {
                    input: (val) => {
                      params.row.location = val;
                    },
                  },
                }),
                h("span", "建號"),
                h("Input", {
                  props: {
                    value: params.row.buildingNo,
                    clearable: true,
                  },
                  style: { flex: 1 },
                  on: {
                    input: (val) => {
                      params.row.buildingNo = val;
                    },
                  },
                }),
              ]
            );
          },
        },
        {
          title: "建物門牌",
          key: "address",
          minWidth: 250,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.address, clearable: true },
              on: {
                input: (val) => {
                  params.row.address = val;
                },
              },
            });
          },
        },
        {
          title: "所有權人",
          key: "owner",
          minWidth: 200,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.owner, clearable: true },
              on: {
                input: (val) => {
                  params.row.owner = val;
                },
              },
            });
          },
        },
        {
          title: "權利範圍",
          key: "rightRange",
          minWidth: 250,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              { style: { display: "flex", gap: "8px", alignItems: "center" } },
              [
                h("Input", {
                  props: {
                    value: params.row.rightRangeNumerator,
                    clearable: true,
                  },
                  style: { flex: "1" },
                  on: {
                    input: (val) => {
                      params.row.rightRangeNumerator = val;
                    },
                  },
                }),
                h("span", "分之"),
                h("Input", {
                  props: {
                    value: params.row.rightRangeDenominator,
                    clearable: true,
                  },
                  style: { flex: "1" },
                  on: {
                    input: (val) => {
                      params.row.rightRangeDenominator = val;
                    },
                  },
                }),
              ]
            );
          },
        },
      ],
      feeColumns: [
        {
          title: "功能",
          key: "action",
          width: 80,
          align: "center",
          slot: "action",
        },
        {
          title: "開辦費/手續費",
          key: "feeType",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "Select",
              {
                props: {
                  value: params.row.feeType,
                  placeholder: "請選取",
                  transfer: true,
                },
                style: { width: "100%" },
                on: {
                  "on-change": (val) => {
                    params.row.feeType = val;
                  },
                },
              },
              [
                h("Option", { props: { value: "setup" } }, "開辦費"),
                h("Option", { props: { value: "fee" } }, "手續費"),
              ]
            );
          },
        },
        {
          title: "手續費金額a",
          key: "feeAmount",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.feeAmount, clearable: true },
              on: {
                input: (val) => {
                  params.row.feeAmount = val;
                },
              },
            });
          },
        },
        {
          title: "手續費率",
          key: "feeRate",
          width: 120,
          align: "center",
          render: (h, params) => {
            return h("Input", {
              props: { value: params.row.feeRate, clearable: true },
              on: {
                input: (val) => {
                  params.row.feeRate = val;
                },
              },
            });
          },
        },
        {
          title: "收費方式b",
          key: "paymentMethod",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "Select",
              {
                props: {
                  value: params.row.paymentMethod,
                  placeholder: "請選取",
                  transfer: true,
                },
                style: { width: "100%" },
                on: {
                  "on-change": (val) => {
                    params.row.paymentMethod = val;
                  },
                },
              },
              [
                h("Option", { props: { value: "01" } }, "01一次入帳"),
                h("Option", { props: { value: "02" } }, "02分期付款"),
                h("Option", { props: { value: "03" } }, "03按月收取"),
              ]
            );
          },
        },
        {
          title: "應扣款日",
          key: "deductDate",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("DatePicker", {
              props: {
                value: params.row.deductDate,
                type: "date",
                placeholder: "選取日期",
                clearable: true,
                transfer: true,
              },
              style: { width: "100%" },
              model: {
                value: params.row.deductDate,
                callback: (val) => {
                  this.$set(params.row, "deductDate", val);
                },
                event: "on-change",
              },
            });
          },
        },
        {
          title: "實際扣款日",
          key: "actualDeductDate",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("DatePicker", {
              props: {
                value: params.row.actualDeductDate,
                type: "date",
                placeholder: "選取日期",
                clearable: true,
                transfer: true,
              },
              style: { width: "100%" },
              model: {
                value: params.row.actualDeductDate,
                callback: (val) => {
                  this.$set(params.row, "actualDeductDate", val);
                },
                event: "on-change",
              },
            });
          },
        },
        {
          title: "攤提起日",
          key: "amortizeStartDate",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("DatePicker", {
              props: {
                value: params.row.amortizeStartDate,
                type: "date",
                placeholder: "選取日期",
                clearable: true,
                transfer: true,
              },
              style: { width: "100%" },
              model: {
                value: params.row.amortizeStartDate,
                callback: (val) => {
                  this.$set(params.row, "amortizeStartDate", val);
                },
                event: "on-change",
              },
            });
          },
        },
        {
          title: "攤提迄日",
          key: "amortizeEndDate",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("DatePicker", {
              props: {
                value: params.row.amortizeEndDate,
                type: "date",
                placeholder: "選取日期",
                clearable: true,
                transfer: true,
              },
              style: { width: "100%" },
              model: {
                value: params.row.amortizeEndDate,
                callback: (val) => {
                  this.$set(params.row, "amortizeEndDate", val);
                },
                event: "on-change",
              },
            });
          },
        },
      ],
    };
  },
  watch: {
    value(val) {
      this.visible = val;
    },
    visible(val) {
      this.$emit("input", val);
      if (!val) {
        this.resetForm();
      }
    },
  },
  methods: {
    resetForm() {
      this.formData = {
        contractNoPrefix1: "",
        contractNoPrefix2: "",
        contractNoSuffix: "",
        department: "",
        referrerIdentity: "",
        referrer: "",
        handlerIdentity: "",
        handler: "",
        trustHandler: "",
        caseName: "",
        businessType: "",
        buildingType: "",
        caseAmount: "",
        contractDate: "",
        closeDate: "",
        trustAccountType: "+",
        trustAccount: "",
        durationStart: "",
        durationEnd: "",
        trustRegDate: "",
        trustCancelDate: "",
        cancelReason: "",
        returnBank: false,
        returnBankName: "",
        returnBranch: false,
        returnBranchName: "",
        returnAccount: false,
        returnAccountNo: "",
        clients: [],
        trusteeRelations: [],
        trustee: "○○商業銀行股份有限公司",
        trusteeType: "",
        trustType: "",
        trusteeDetails: [],
        beneficiaries: [],
        lands: [],
        buildings: [],
        remark: "",
        principalLand: "",
        fees: [],
        payer: "",
        requiredDocs: [],
        internalProfitRate: "",
        internalProfitBonus: "",
        externalProfitTarget: "",
        externalProfitRate: "",
        externalProfitBonus: "",
        externalProfitName: "",
        externalProfitAccountName: "",
        externalProfitBranchName: "",
        externalProfitBankName: "",
        externalProfitBankAccount: "",
      };
      this.$refs.contractForm.resetFields();
    },
    handleCancel() {
      this.visible = false;
    },
    handleSubmit() {
      this.$refs.contractForm.validate((valid) => {
        if (valid) {
          this.$Message.success("契約建檔成功");
          this.$emit("submit", this.formData);
          this.visible = false;
        } else {
          this.$Message.error("請填寫必填欄位");
        }
      });
    },
    // 新增/刪除表格行
    addClient() {
      this.formData.clients.push({
        shortName: "",
        identity: "",
        idNumber: "",
        clientName: "",
        representative: "",
        phone1: "",
        phone2: "",
        registeredAddress: "",
        mailingAddress: "",
        isBeneficiary: false,
      });
    },
    editClient(index) {
      this.$Message.info(`編輯委託人：${index}`);
      // 這裡可以實作編輯功能
    },
    removeClient(index) {
      this.formData.clients.splice(index, 1);
    },
    addTrusteeRelation() {
      this.formData.trusteeRelations.push({
        taxId: "",
        name: "",
        registeredAddress: "",
        phone1: "",
        phone2: "",
        remark: "",
      });
    },
    editTrusteeRelation(index) {
      this.$Message.info(`編輯信託關係人：${index}`);
      // 這裡可以實作編輯功能
    },
    removeTrusteeRelation(index) {
      this.formData.trusteeRelations.splice(index, 1);
    },
    addTrusteeDetail() {
      this.formData.trusteeDetails.push({
        shortName: "",
        taxId: "",
        name: "",
        representative: "",
        registeredAddress: "",
        phone1: "",
        phone2: "",
      });
    },
    editTrusteeDetail(index) {
      this.$Message.info(`編輯受託人明細：${index}`);
      // 這裡可以實作編輯功能
    },
    removeTrusteeDetail(index) {
      this.formData.trusteeDetails.splice(index, 1);
    },
    addBeneficiary() {
      this.formData.beneficiaries.push({
        taxId: "",
        name: "",
        phone1: "",
        phone2: "",
        registeredAddress: "",
        mailingAddress: "",
      });
    },
    editBeneficiary(index) {
      this.$Message.info(`編輯受益人：${index}`);
      // 這裡可以實作編輯功能
    },
    removeBeneficiary(index) {
      this.formData.beneficiaries.splice(index, 1);
    },
    addLand() {
      this.formData.lands.push({
        region: "",
        section: "",
        subsection: "",
        landNo: "",
        rightRangeNumerator: "",
        rightRangeDenominator: "",
        area: "100",
        owner: "",
      });
    },
    editLand(index) {
      this.$Message.info(`編輯土地資料：${index}`);
      // 這裡可以實作編輯功能
    },
    removeLand(index) {
      this.formData.lands.splice(index, 1);
    },
    addBuilding() {
      this.formData.buildings.push({
        location: "",
        buildingNo: "",
        address: "",
        owner: "",
        rightRangeNumerator: "",
        rightRangeDenominator: "",
      });
    },
    editBuilding(index) {
      this.$Message.info(`編輯建物資料：${index}`);
      // 這裡可以實作編輯功能
    },
    removeBuilding(index) {
      this.formData.buildings.splice(index, 1);
    },
    addFee() {
      this.formData.fees.push({
        feeType: "",
        feeAmount: "",
        feeRate: "",
        paymentMethod: "",
        deductDate: "",
        actualDeductDate: "",
        amortizeStartDate: "",
        amortizeEndDate: "",
      });
    },
    editFee(index) {
      this.$Message.info(`編輯信託手續費：${index}`);
      // 這裡可以實作編輯功能
    },
    removeFee(index) {
      this.formData.fees.splice(index, 1);
    },
    // 查詢方法
    queryClient(index) {
      this.$Message.info(
        `查詢委託人：${this.formData.clients[index].clientName}`
      );
    },
    queryTrusteeRelation(index) {
      this.$Message.info(
        `查詢信託關係人：${this.formData.trusteeRelations[index].taxId}`
      );
    },
    queryTrusteeDetail(index) {
      this.$Message.info(
        `查詢受託人明細：${this.formData.trusteeDetails[index].taxId}`
      );
    },
    queryBeneficiary(index) {
      this.$Message.info(
        `查詢受益人：${this.formData.beneficiaries[index].taxId}`
      );
    },
    queryLandRegion(index) {
      this.$Message.info(`查詢土地地區：${this.formData.lands[index].region}`);
    },
    queryExternalProfitName() {
      this.$Message.info(`查詢姓名：${this.formData.externalProfitName}`);
    },
  },
};
</script>

<style scoped>
.contract-form-container {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 10px;
}

.form-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2d3d;
}

.create-contract-modal {
  /deep/ .ivu-modal-body {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }
}
</style>
