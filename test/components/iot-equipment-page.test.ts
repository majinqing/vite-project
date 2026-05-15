import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import IotEquipmentPage from '@/views/iot/equipment/index.vue';
import {
  ElButtonStub,
  ElEmptyStub,
  ElInputStub,
  ElOptionStub,
  ElProgressStub,
  ElSelectStub,
  ElTagStub,
} from '../helpers/element-plus';

const mountPage = () =>
  mount(IotEquipmentPage, {
    global: {
      stubs: {
        ElInput: ElInputStub,
        ElSelect: ElSelectStub,
        ElOption: ElOptionStub,
        ElButton: ElButtonStub,
        ElTag: ElTagStub,
        ElProgress: ElProgressStub,
        ElEmpty: ElEmptyStub,
        ElIcon: true,
      },
    },
  });

describe('物联网设备管理页面', () => {
  it('默认展示中文标题和完整设备列表', () => {
    const wrapper = mountPage();

    expect(wrapper.text()).toContain('物联网设备管理');
    expect(wrapper.text()).toContain('接入设备');
    expect(wrapper.findAll('[data-testid="device-row"]')).toHaveLength(6);
  });

  it('支持通过关键字筛选设备', async () => {
    const wrapper = mountPage();
    const keywordInput = wrapper.get('[data-testid="keyword-input"]');

    await keywordInput.setValue('网关');
    await nextTick();

    const rows = wrapper.findAll('[data-testid="device-row"]');
    expect(rows).toHaveLength(1);
    expect(wrapper.text()).toContain('一号田环境网关');
  });

  it('支持按状态筛选设备', async () => {
    const wrapper = mountPage();
    const statusSelect = wrapper.get('[data-testid="status-select"]');

    await statusSelect.setValue('warning');
    await nextTick();

    const rows = wrapper.findAll('[data-testid="device-row"]');
    expect(rows).toHaveLength(2);
    expect(wrapper.text()).toContain('土壤墒情节点 A-12');
    expect(wrapper.text()).toContain('冷链仓储温控盒');
  });

  it('支持组合筛选并可重置', async () => {
    const wrapper = mountPage();
    const areaSelect = wrapper.get('[data-testid="area-select"]');
    const statusSelect = wrapper.get('[data-testid="status-select"]');

    await areaSelect.setValue('南区示范带');
    await statusSelect.setValue('offline');
    await nextTick();

    expect(wrapper.findAll('[data-testid="device-row"]')).toHaveLength(1);
    expect(wrapper.text()).toContain('虫情监测终端 07');

    await wrapper.get('[data-testid="reset-filters"]').trigger('click');
    await nextTick();

    expect(wrapper.findAll('[data-testid="device-row"]')).toHaveLength(6);
  });
});
