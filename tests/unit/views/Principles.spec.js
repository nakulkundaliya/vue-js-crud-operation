import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue';
import Principles from '@/views/Principles';

Vue.use(CoreuiVue);

describe('Principles.vue', () => {
  it('has a name', () => {
    expect(Principles.name).toBe('Principles');
  });
  it('is Vue instance', () => {
    const wrapper = shallowMount(Principles);
    expect(wrapper.vm).toBeTruthy();
  });
  it('is AddPrinciples', () => {
    const wrapper = shallowMount(Principles);
    expect(wrapper.findComponent(Principles)).toBeTruthy();
  });

  test('renders correctly', () => {
    const wrapper = shallowMount(Principles);
    Principles;
    expect(wrapper.element).toMatchSnapshot();
  });
});
