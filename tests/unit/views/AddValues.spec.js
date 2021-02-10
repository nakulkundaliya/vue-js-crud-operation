import Vue from 'vue';
import Vuex from 'vuex';

import { shallowMount, createLocalVue } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue';
import AddValues from '@/views/AddValues';

Vue.use(CoreuiVue);
const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(CoreuiVue);

describe('AddValues.vue', () => {
  let actions;
  let store;
  beforeEach(() => {
    Vue.use(CoreuiVue);
    actions = {
      addValue: jest.fn((cb) => cb(null, true)),
    };
    store = new Vuex.Store({
      actions,
      modules: {
        auth: { namespaced: true },
      },
    });
  });
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

  it('add values', () => {
    const { vm } = shallowMount(AddValues, {
      localVue,
      store,
    });
    vm.name = 'Test';
    const routerPush = jest.fn();
    vm.$router = { push: routerPush };
    const redirectFrom = '/values';
    vm.$route = { query: { redirectFrom } };

    return vm.add().then(() => {
      expect(vm.error).toEqual(null);
      expect(routerPush).toHaveBeenCalledWith(redirectFrom);
    });
  });

  test('renders correctly', () => {
    const wrapper = shallowMount(AddValues);
    expect(wrapper.element).toMatchSnapshot();
  });
});
