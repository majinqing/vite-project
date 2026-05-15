<script setup lang="ts">
import { computed, reactive } from 'vue';
import type { Component } from 'vue';
import {
  Bell,
  Connection,
  Cpu,
  DataLine,
  Search,
  SetUp,
  WarningFilled,
} from '@element-plus/icons-vue';

type DeviceStatus = 'online' | 'warning' | 'offline';
type FilterStatus = 'all' | DeviceStatus;

type OverviewCard = {
  title: string;
  value: string;
  unit: string;
  note: string;
  icon: Component;
};

type DeviceRecord = {
  id: string;
  name: string;
  type: string;
  area: string;
  status: DeviceStatus;
  protocol: string;
  battery: number;
  signal: number;
  lastReport: string;
  manager: string;
  pendingTask: string;
};

type AlertRecord = {
  title: string;
  deviceName: string;
  level: 'high' | 'medium' | 'low';
  time: string;
  action: string;
};

type AreaRecord = {
  name: string;
  online: number;
  total: number;
  issueCount: number;
};

type SelectOption<T extends string> = {
  label: string;
  value: T;
};

const overviewCards: OverviewCard[] = [
  {
    title: '接入设备',
    value: '248',
    unit: '台',
    note: '传感器、网关、控制器统一纳管',
    icon: Connection,
  },
  {
    title: '在线率',
    value: '92.7',
    unit: '%',
    note: '过去 24 小时平均连接状态',
    icon: DataLine,
  },
  {
    title: '待处理告警',
    value: '18',
    unit: '条',
    note: '需运维和值班人员持续跟进',
    icon: Bell,
  },
  {
    title: '远程指令成功率',
    value: '96.4',
    unit: '%',
    note: '批量配置与重启指令执行稳定',
    icon: SetUp,
  },
];

const devices: DeviceRecord[] = [
  {
    id: 'EQ-10021',
    name: '一号田环境网关',
    type: 'LoRa 网关',
    area: '北区试验田',
    status: 'online',
    protocol: 'MQTT',
    battery: 100,
    signal: 91,
    lastReport: '2 分钟前',
    manager: '张运维',
    pendingTask: '例行巡检',
  },
  {
    id: 'EQ-10098',
    name: '土壤墒情节点 A-12',
    type: '土壤传感器',
    area: '北区试验田',
    status: 'warning',
    protocol: 'CoAP',
    battery: 28,
    signal: 63,
    lastReport: '17 分钟前',
    manager: '李工程',
    pendingTask: '电池更换',
  },
  {
    id: 'EQ-10105',
    name: '智能灌溉控制箱 03',
    type: '控制器',
    area: '东侧棉田',
    status: 'online',
    protocol: 'Modbus',
    battery: 76,
    signal: 88,
    lastReport: '5 分钟前',
    manager: '马调度',
    pendingTask: '策略已同步',
  },
  {
    id: 'EQ-10144',
    name: '虫情监测终端 07',
    type: '图像终端',
    area: '南区示范带',
    status: 'offline',
    protocol: 'HTTP',
    battery: 12,
    signal: 14,
    lastReport: '3 小时前',
    manager: '张运维',
    pendingTask: '现场复位',
  },
  {
    id: 'EQ-10188',
    name: '气象站 WS-09',
    type: '气象设备',
    area: '南区示范带',
    status: 'online',
    protocol: 'MQTT',
    battery: 82,
    signal: 93,
    lastReport: '1 分钟前',
    manager: '周值班',
    pendingTask: '数据正常',
  },
  {
    id: 'EQ-10216',
    name: '冷链仓储温控盒',
    type: '温控终端',
    area: '仓储中心',
    status: 'warning',
    protocol: 'MQTT',
    battery: 41,
    signal: 57,
    lastReport: '24 分钟前',
    manager: '王仓储',
    pendingTask: '温度偏高复核',
  },
];

const alerts: AlertRecord[] = [
  {
    title: '离线时长超阈值',
    deviceName: '虫情监测终端 07',
    level: 'high',
    time: '今天 09:40',
    action: '派单现场复位',
  },
  {
    title: '电池电量偏低',
    deviceName: '土壤墒情节点 A-12',
    level: 'medium',
    time: '今天 10:15',
    action: '安排补电更换',
  },
  {
    title: '温控波动异常',
    deviceName: '冷链仓储温控盒',
    level: 'low',
    time: '今天 10:32',
    action: '复核仓内环境',
  },
];

const areaRecords: AreaRecord[] = [
  { name: '北区试验田', online: 68, total: 72, issueCount: 3 },
  { name: '东侧棉田', online: 54, total: 58, issueCount: 2 },
  { name: '南区示范带', online: 39, total: 45, issueCount: 6 },
  { name: '仓储中心', online: 23, total: 25, issueCount: 1 },
];

const areaOptions: SelectOption<string>[] = [
  { label: '全部区域', value: '全部区域' },
  ...areaRecords.map((item) => ({ label: item.name, value: item.name })),
];

const statusOptions: SelectOption<FilterStatus>[] = [
  { label: '全部状态', value: 'all' },
  { label: '在线', value: 'online' },
  { label: '预警', value: 'warning' },
  { label: '离线', value: 'offline' },
];

const filters = reactive({
  keyword: '',
  area: '全部区域',
  status: 'all' as FilterStatus,
});

const filteredDevices = computed(() =>
  devices.filter((item) => {
    const matchKeyword =
      !filters.keyword ||
      item.name.includes(filters.keyword) ||
      item.id.includes(filters.keyword) ||
      item.type.includes(filters.keyword);

    const matchArea = filters.area === '全部区域' || item.area === filters.area;
    const matchStatus = filters.status === 'all' || item.status === filters.status;

    return matchKeyword && matchArea && matchStatus;
  }),
);

const statusSummary = computed(() => {
  const online = devices.filter((item) => item.status === 'online').length;
  const warning = devices.filter((item) => item.status === 'warning').length;
  const offline = devices.filter((item) => item.status === 'offline').length;

  return { online, warning, offline };
});

const areaCompletion = (item: AreaRecord) => Math.round((item.online / item.total) * 100);

const getStatusLabel = (status: DeviceStatus) => {
  if (status === 'online') return '在线';
  if (status === 'warning') return '预警';
  return '离线';
};

const getStatusTagType = (status: DeviceStatus) => {
  if (status === 'online') return 'success';
  if (status === 'warning') return 'warning';
  return 'danger';
};

const getAlertTagType = (level: AlertRecord['level']) => {
  if (level === 'high') return 'danger';
  if (level === 'medium') return 'warning';
  return 'info';
};

const getAlertLabel = (level: AlertRecord['level']) => {
  if (level === 'high') return '高优';
  if (level === 'medium') return '中优';
  return '提示';
};

const resetFilters = () => {
  filters.keyword = '';
  filters.area = '全部区域';
  filters.status = 'all';
};
</script>

<template>
  <div class="equipment-page">
    <section class="hero-panel panel">
      <div class="hero-main">
        <p class="hero-kicker">物联网设备管理</p>
        <h1 class="hero-title">把接入规模、连接质量和处置节奏放在同一页里看清楚</h1>
        <p class="hero-description">
          当前页面先用静态业务数据填充设备管理主视图，方便展示“设备总览、筛选检索、告警跟进、设备台账”的完整信息结构，后续可直接替换为真实接口。
        </p>
        <div class="hero-tags">
          <span class="hero-tag">统一纳管</span>
          <span class="hero-tag">状态追踪</span>
          <span class="hero-tag">运维处置</span>
        </div>
      </div>

      <div class="hero-side">
        <div class="hero-side-head">
          <span>今日重点</span>
          <el-tag type="danger" effect="dark" round>3 条高优告警</el-tag>
        </div>
        <div class="hero-side-grid">
          <div class="hero-side-item">
            <strong>{{ statusSummary.online }}</strong>
            <span>在线设备</span>
          </div>
          <div class="hero-side-item">
            <strong>{{ statusSummary.warning }}</strong>
            <span>预警设备</span>
          </div>
          <div class="hero-side-item">
            <strong>{{ statusSummary.offline }}</strong>
            <span>离线设备</span>
          </div>
          <div class="hero-side-item">
            <strong>6</strong>
            <span>待派单任务</span>
          </div>
        </div>
      </div>
    </section>

    <section class="metrics-grid">
      <article v-for="item in overviewCards" :key="item.title" class="metric-card panel">
        <div class="metric-head">
          <div class="metric-icon">
            <el-icon><component :is="item.icon" /></el-icon>
          </div>
          <p class="metric-title">{{ item.title }}</p>
        </div>
        <div class="metric-value-row">
          <strong class="metric-value">{{ item.value }}</strong>
          <span class="metric-unit">{{ item.unit }}</span>
        </div>
        <p class="metric-note">{{ item.note }}</p>
      </article>
    </section>

    <section class="workspace-grid">
      <article class="panel device-panel">
        <div class="panel-head">
          <div>
            <p class="section-kicker">设备台账</p>
            <h2>按区域和状态快速筛选设备</h2>
          </div>
          <div class="panel-head-actions">
            <el-button plain>批量下发</el-button>
            <el-button type="primary">新增接入</el-button>
          </div>
        </div>

        <div class="filter-bar">
          <el-input
            v-model="filters.keyword"
            data-testid="keyword-input"
            placeholder="搜索设备名称、编号或类型"
            clearable
          >
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>

          <el-select
            v-model="filters.area"
            data-testid="area-select"
            placeholder="选择区域"
          >
            <el-option
              v-for="item in areaOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>

          <el-select
            v-model="filters.status"
            data-testid="status-select"
            placeholder="选择状态"
          >
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>

          <el-button data-testid="reset-filters" @click="resetFilters">重置筛选</el-button>
        </div>

        <div class="table-summary">
          <span>筛选结果 {{ filteredDevices.length }} 台</span>
          <span>区域覆盖 {{ areaRecords.length }} 个</span>
        </div>

        <div class="device-list">
          <article
            v-for="item in filteredDevices"
            :key="item.id"
            class="device-row"
            data-testid="device-row"
          >
            <div class="device-row-main">
              <div class="device-row-top">
                <div class="device-name-cell">
                  <strong>{{ item.name }}</strong>
                  <span>{{ item.id }} · {{ item.type }}</span>
                </div>
                <el-tag :type="getStatusTagType(item.status)" effect="light" round>
                  {{ getStatusLabel(item.status) }}
                </el-tag>
              </div>

              <div class="device-meta">
                <span>区域：{{ item.area }}</span>
                <span>协议：{{ item.protocol }}</span>
                <span>最近上报：{{ item.lastReport }}</span>
                <span>负责人：{{ item.manager }}</span>
              </div>
            </div>

            <div class="device-row-side">
              <div class="quality-cell">
                <div class="quality-item">
                  <span>信号</span>
                  <el-progress
                    :percentage="item.signal"
                    :stroke-width="8"
                    :show-text="false"
                  />
                </div>
                <div class="quality-item">
                  <span>电量</span>
                  <el-progress
                    :percentage="item.battery"
                    :stroke-width="8"
                    :show-text="false"
                  />
                </div>
              </div>
              <span class="pending-task">{{ item.pendingTask }}</span>
            </div>
          </article>

          <el-empty
            v-if="filteredDevices.length === 0"
            description="没有符合条件的设备"
          />
        </div>
      </article>

      <aside class="side-column">
        <article class="panel alert-panel">
          <div class="panel-head">
            <div>
              <p class="section-kicker">告警跟进</p>
              <h2>优先看需要马上处理的异常</h2>
            </div>
            <el-icon class="panel-icon"><WarningFilled /></el-icon>
          </div>

          <div class="alert-list">
            <div v-for="item in alerts" :key="item.title + item.deviceName" class="alert-item">
              <div class="alert-item-top">
                <strong>{{ item.title }}</strong>
                <el-tag :type="getAlertTagType(item.level)" effect="plain" round>
                  {{ getAlertLabel(item.level) }}
                </el-tag>
              </div>
              <p>{{ item.deviceName }}</p>
              <div class="alert-meta">
                <span>{{ item.time }}</span>
                <span>{{ item.action }}</span>
              </div>
            </div>
          </div>
        </article>

        <article class="panel area-panel">
          <div class="panel-head">
            <div>
              <p class="section-kicker">区域运行</p>
              <h2>查看各区域设备在线完成度</h2>
            </div>
            <el-icon class="panel-icon"><Cpu /></el-icon>
          </div>

          <div class="area-list">
            <div v-for="item in areaRecords" :key="item.name" class="area-item">
              <div class="area-item-top">
                <strong>{{ item.name }}</strong>
                <span>{{ item.online }}/{{ item.total }} 在线</span>
              </div>
              <el-progress :percentage="areaCompletion(item)" :stroke-width="10" />
              <div class="area-item-foot">
                <span>异常 {{ item.issueCount }} 项</span>
                <span>{{ areaCompletion(item) }}%</span>
              </div>
            </div>
          </div>
        </article>
      </aside>
    </section>
  </div>
</template>

<style src="./index.scss" scoped lang="scss"></style>
