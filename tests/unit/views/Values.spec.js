import Vue from 'vue';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue';
import Values from '@/views/Values';

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(CoreuiVue);

describe('Values.vue', () => {
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
          principles: [
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
    expect(Values.name).toBe('Values', store);
  });
});
