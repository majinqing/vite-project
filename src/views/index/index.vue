<script setup lang="ts">
import type { Component } from 'vue';
import {
  DataAnalysis,
  Monitor,
  Promotion,
} from '@element-plus/icons-vue';

type MetricCard = {
  title: string;
  value: string;
  unit: string;
  note: string;
};

type SummaryCard = {
  title: string;
  description: string;
  label: string;
};

type EntryCard = {
  title: string;
  description: string;
  icon: Component;
};

const heroTags = ['建设成效总览', '管理视角展示', '静态展示版本'];

const metricCards: MetricCard[] = [
  {
    title: '接入设备',
    value: '128',
    unit: '台',
    note: '统一纳管传感器、网关与终端',
  },
  {
    title: '覆盖面积',
    value: '42',
    unit: '万亩',
    note: '重点棉田连续监测已形成规模',
  },
  {
    title: '累计数据',
    value: '860',
    unit: '万条',
    note: '环境与设备状态持续沉淀',
  },
  {
    title: '闭环率',
    value: '97.6',
    unit: '%',
    note: '高优事项基本形成闭环流程',
  },
];

const summaryCards: SummaryCard[] = [
  {
    title: '建设覆盖更完整',
    description: '统一入口已形成，建设规模与设备接入成果更容易展示。',
    label: '统一纳管',
  },
];

const entryCards: EntryCard[] = [
  {
    title: '设备管理',
    description: '查看设备规模与运行档案',
    icon: Monitor,
  },
  {
    title: '数据报表',
    description: '查看阶段指标与报表入口',
    icon: DataAnalysis,
  },
];
</script>

<template>
  <div class="home-page">
    <section class="hero-panel panel">
      <div class="hero-main">
        <p class="hero-kicker">新疆数字棉花科技创新平台</p>
        <h1 class="hero-title">面向管理视角的建设成效总览</h1>
        <p class="hero-description">
          首页只保留管理层最需要先看到的内容：平台定位、建设规模、成果摘要，以及几个关键入口。
        </p>
        <div class="hero-tags">
          <span v-for="tag in heroTags" :key="tag" class="hero-tag">{{ tag }}</span>
        </div>
      </div>
      <div class="hero-side">
        <div class="hero-side-label">当前重点</div>
        <div class="hero-side-value">先看规模，再看成果</div>
        <p class="hero-side-text">本页收敛为一屏展示，不再堆叠过多模块，方便快速浏览。</p>
      </div>
    </section>

    <section class="metrics-panel panel">
      <div class="section-head">
        <div>
          <p class="section-kicker">建设成效指标</p>
          <h2>用核心数字展示平台成果</h2>
        </div>
      </div>
      <div class="metrics-grid">
        <article v-for="item in metricCards" :key="item.title" class="metric-card">
          <p class="metric-title">{{ item.title }}</p>
          <div class="metric-value-row">
            <strong class="metric-value">{{ item.value }}</strong>
            <span class="metric-unit">{{ item.unit }}</span>
          </div>
          <p class="metric-note">{{ item.note }}</p>
        </article>
      </div>
    </section>

    <section class="bottom-grid">
      <article class="panel summary-panel">
        <div class="section-head">
          <div>
            <p class="section-kicker">成果摘要</p>
            <h2>把数字背后的亮点讲清楚</h2>
          </div>
        </div>
        <div class="summary-grid">
          <article v-for="item in summaryCards" :key="item.title" class="summary-card">
            <span class="summary-label">{{ item.label }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </article>

      <article class="panel side-panel">
        <div class="section-head">
          <div>
            <p class="section-kicker">快捷入口</p>
            <h2>保留必要入口</h2>
          </div>
        </div>
        <div class="entry-list">
          <div v-for="item in entryCards" :key="item.title" class="entry-card">
            <div class="entry-icon">
              <el-icon><component :is="item.icon" /></el-icon>
            </div>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="trend-card">
          <el-icon><Promotion /></el-icon>
          <span>当前首页先聚焦一屏展示，后续再接入真实跳转与后台数据。</span>
        </div>
      </article>
    </section>
  </div>
</template>

<style src="./index.scss" scoped lang="scss"></style>
