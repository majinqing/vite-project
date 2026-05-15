import { defineComponent, h } from 'vue';

export const ElInputStub = defineComponent({
  name: 'ElInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () =>
      h('input', {
        'data-testid': 'stub-input',
        value: props.modelValue,
        placeholder: props.placeholder,
        onInput: (event: Event) => {
          const target = event.target as HTMLInputElement;
          emit('update:modelValue', target.value);
        },
      });
  },
});

export const ElSelectStub = defineComponent({
  name: 'ElSelect',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit, slots }) {
    return () =>
      h(
        'select',
        {
          'data-testid': attrs['data-testid'],
          value: props.modelValue,
          onChange: (event: Event) => {
            const target = event.target as HTMLSelectElement;
            emit('update:modelValue', target.value);
          },
        },
        slots.default ? slots.default() : [],
      );
  },
});

export const ElOptionStub = defineComponent({
  name: 'ElOption',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return () => h('option', { value: props.value }, props.label);
  },
});

export const ElButtonStub = defineComponent({
  name: 'ElButton',
  emits: ['click'],
  setup(_, { attrs, emit, slots }) {
    return () =>
      h(
        'button',
        {
          'data-testid': attrs['data-testid'],
          onClick: () => emit('click'),
        },
        slots.default ? slots.default() : [],
      );
  },
});

export const ElDialogStub = defineComponent({
  name: 'ElDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'close'],
  setup(props, { attrs, emit, slots }) {
    return () =>
      props.modelValue
        ? h('div', { 'data-testid': attrs['data-testid'] ?? 'dialog-stub' }, [
            slots.header ? h('div', { class: 'el-dialog-header-stub' }, slots.header()) : null,
            slots.default ? h('div', { class: 'el-dialog-body-stub' }, slots.default()) : null,
            slots.footer ? h('div', { class: 'el-dialog-footer-stub' }, slots.footer()) : null,
            h(
              'button',
              {
                type: 'button',
                'data-testid': 'dialog-close',
                onClick: () => {
                  emit('update:modelValue', false);
                  emit('close');
                },
              },
              'close',
            ),
          ])
        : null;
  },
});

export const ElTagStub = defineComponent({
  name: 'ElTag',
  setup(_, { slots }) {
    return () => h('span', { class: 'el-tag-stub' }, slots.default ? slots.default() : []);
  },
});

export const ElProgressStub = defineComponent({
  name: 'ElProgress',
  props: {
    percentage: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    return () => h('div', { class: 'el-progress-stub' }, `${props.percentage}%`);
  },
});

export const ElEmptyStub = defineComponent({
  name: 'ElEmpty',
  props: {
    description: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return () => h('div', { class: 'el-empty-stub' }, props.description);
  },
});
