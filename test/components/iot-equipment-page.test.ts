import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import IotEquipmentPage from '@/views/iot/equipment/index.vue';
import {
  ElButtonStub,
  ElDialogStub,
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
        ElDialog: ElDialogStub,
        ElTag: ElTagStub,
        ElProgress: ElProgressStub,
        ElEmpty: ElEmptyStub,
        ElIcon: true,
      },
    },
  });

describe('物联网设备管理页面', () => {
  it('默认显示中文标题、顶部全局搜索和完整设备列表', () => {
    const wrapper = mountPage();

    expect(wrapper.text()).toContain('物联网设备管理');
    expect(wrapper.text()).toContain('接入设备');
    expect(wrapper.get('[data-testid="global-search-input"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="add-device-dialog"]').exists()).toBe(false);
    expect(wrapper.findAll('[data-testid="device-row"]')).toHaveLength(6);
  });

  it('支持打开新增接入弹窗并提交模拟设备', async () => {
    const wrapper = mountPage();

    await wrapper.get('[data-testid="open-add-device"]').trigger('click');

    expect(wrapper.find('[data-testid="add-device-dialog"]').exists()).toBe(true);

    await wrapper.get('[data-testid="add-device-name"]').setValue('新建虫情监测终端');
    await wrapper.get('[data-testid="add-device-type"]').setValue('图像终端');
    await wrapper.get('[data-testid="add-device-area"]').setValue('南区示范带');
    await wrapper.get('[data-testid="add-device-protocol"]').setValue('MQTT');
    await wrapper.get('[data-testid="add-device-manager"]').setValue('赵巡检');
    await wrapper.get('[data-testid="submit-add-device"]').trigger('click');
    await nextTick();

    expect(wrapper.find('[data-testid="add-device-dialog"]').exists()).toBe(false);
    expect(wrapper.findAll('[data-testid="device-row"]')).toHaveLength(7);
    expect(wrapper.text()).toContain('新建虫情监测终端');

    await wrapper.get('[data-testid="global-search-input"]').setValue('新建虫情监测终端');
    await nextTick();

    expect(wrapper.findAll('[data-testid="device-row"]')).toHaveLength(1);
    expect(wrapper.text()).toContain('新建虫情监测终端');
  });

  it('支持取消新增接入弹窗且不会新增设备', async () => {
    const wrapper = mountPage();

    await wrapper.get('[data-testid="open-add-device"]').trigger('click');
    await wrapper.get('[data-testid="add-device-name"]').setValue('取消提交设备');
    await wrapper.get('[data-testid="cancel-add-device"]').trigger('click');
    await nextTick();

    expect(wrapper.find('[data-testid="add-device-dialog"]').exists()).toBe(false);
    expect(wrapper.findAll('[data-testid="device-row"]')).toHaveLength(6);
    expect(wrapper.text()).not.toContain('取消提交设备');
  });

  it('支持通过顶部全局搜索筛选设备并同步台账关键字', async () => {
    const wrapper = mountPage();
    const globalSearchInput = wrapper.get('[data-testid="global-search-input"]');

    await globalSearchInput.setValue('网关');
    await nextTick();

    const rows = wrapper.findAll('[data-testid="device-row"]');
    const keywordInput = wrapper.get('[data-testid="keyword-input"]');

    expect(rows).toHaveLength(1);
    expect(wrapper.text()).toContain('一号田环境网关');
    expect((keywordInput.element as HTMLInputElement).value).toBe('网关');
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

  it('支持组合筛选并可重置所有条件', async () => {
    const wrapper = mountPage();
    const globalSearchInput = wrapper.get('[data-testid="global-search-input"]');
    const areaSelect = wrapper.get('[data-testid="area-select"]');
    const statusSelect = wrapper.get('[data-testid="status-select"]');

    await globalSearchInput.setValue('终端');
    await areaSelect.setValue('南区示范带');
    await statusSelect.setValue('offline');
    await nextTick();

    expect(wrapper.findAll('[data-testid="device-row"]')).toHaveLength(1);
    expect(wrapper.text()).toContain('虫情监测终端 07');

    await wrapper.get('[data-testid="reset-filters"]').trigger('click');
    await nextTick();

    expect((wrapper.get('[data-testid="global-search-input"]').element as HTMLInputElement).value).toBe('');
    expect((wrapper.get('[data-testid="keyword-input"]').element as HTMLInputElement).value).toBe('');
    expect(wrapper.findAll('[data-testid="device-row"]')).toHaveLength(6);
  });
});
