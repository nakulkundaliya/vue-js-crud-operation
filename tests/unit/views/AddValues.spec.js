import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue';
import AddValues from '@/views/AddValues';

Vue.use(CoreuiVue);

describe('AddValues.vue', () => {
  it('has a name', () => {
    expect(AddValues.name).toBe('AddValues');
  });
  it('is Vue instance', () => {
    const wrapper = shallowMount(AddValues);
    expect(wrapper.vm).toBeTruthy();
  });
  it('is AddValues', () => {
    const wrapper = shallowMount(AddValues);
    expect(wrapper.findComponent(AddValues)).toBeTruthy();
  });

  test('renders correctly', () => {
    const wrapper = shallowMount(AddValues);
    AddValues;
    expect(wrapper.element).toMatchSnapshot();
  });
});
