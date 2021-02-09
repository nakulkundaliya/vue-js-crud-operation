import Vue from 'vue';
import Router from 'vue-router';

// Containers
const TheContainer = () => import('@/containers/TheContainer');

// Views
const Dashboard = () => import('@/views/Dashboard');

// Views - Components
const AddValues = () => import('@/views/AddValues');
const AddPrinciples = () => import('@/views/AddPrinciples');
const Values = () => import('@/views/Values');
const Principles = () => import('@/views/Principles');

Vue.use(Router);

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: '',
          redirect: '/values',
          name: 'Values',
          component: {
            render(c) {
              return c('router-view');
            },
          },
          children: [
            {
              path: 'values',
              name: 'Values',
              component: Values,
            },
            {
              path: 'values/add',
              name: 'Add',
              component: AddValues,
            },
          ],
        },
        {
          path: '',
          redirect: '/principles',
          name: 'Principles',
          component: {
            render(c) {
              return c('router-view');
            },
          },
          children: [
            {
              path: 'principles',
              name: 'Principles',
              component: Principles,
            },
            {
              path: 'principles/add',
              name: 'Add',
              component: AddPrinciples,
            },
          ],
        },
      ],
    },
  ];
}
