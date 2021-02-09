export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['VUE JS Task'],
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Values',
        to: '/values',
        icon: 'cil-grid',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Principles',
        to: '/principles',
        icon: 'cil-grid',
      },
    ],
  },
];
