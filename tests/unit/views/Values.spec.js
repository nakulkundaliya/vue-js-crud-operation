import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue';
import Values from '@/views/Values';

Vue.use(CoreuiVue);

describe('Values.vue', () => {
  it('has a name', () => {
    expect(Values.name).toBe('Values');
  });
  it('is Vue instance', () => {
    const wrapper = shallowMount(Values);
    expect(wrapper.vm).toBeTruthy();
  });
  it('is AddPrinciples', () => {
    const wrapper = shallowMount(Values);
    expect(wrapper.findComponent(Values)).toBeTruthy();
  });

  test('renders correctly', () => {
    const wrapper = shallowMount(Values);
    Values;
    expect(wrapper.element).toMatchSnapshot();
  });
});
