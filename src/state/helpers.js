import { mapState, mapGetters, mapActions } from 'vuex';

export const authComputed = {
  ...mapState('auth', {
    values: (state) => state.values,
  }),
  ...mapGetters('auth', ['loggedIn']),
};

export const apiMethods = mapActions('auth', [
  'addValue',
  'getValues',
  'addPrinciple',
  'getPrinciples',
]);
