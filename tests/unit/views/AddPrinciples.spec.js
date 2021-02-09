import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue';
import AddPrinciples from '@/views/AddPrinciples';

Vue.use(CoreuiVue);

describe('AddPrinciples.vue', () => {
  it('has a name', () => {
    expect(AddPrinciples.name).toBe('AddPrinciples');
  });
  it('is Vue instance', () => {
    const wrapper = shallowMount(AddPrinciples);
    expect(wrapper.vm).toBeTruthy();
  });
  it('is AddPrinciples', () => {
    const wrapper = shallowMount(AddPrinciples);
    expect(wrapper.findComponent(AddPrinciples)).toBeTruthy();
  });

  test('renders correctly', () => {
    const wrapper = shallowMount(AddPrinciples);
    AddPrinciples;
    expect(wrapper.element).toMatchSnapshot();
  });
});
