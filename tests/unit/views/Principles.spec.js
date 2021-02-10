import Vue from 'vue';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue';
import Principles from '@/views/Principles';

const localVue = createLocalVue();
localVue.use(Vuex);
describe('Principles.vue', () => {
  let actions;
  let store;
  beforeEach(() => {
    Vue.use(CoreuiVue);
    actions = {
      getPrinciples: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      modules: {
        auth: { namespaced: true },
      },
      state: {
        auth: {
          values: [
            {
              _id: '13123dsdsf',
              name: 'Test',
            },
          ],
        },
      },
    });
  });
  it('has a name', () => {
    expect(Principles.name).toBe('Principles', store);
  });
});
