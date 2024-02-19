import { Layout, List, Update } from '@/templates/users';

export default {
  path: '/users',
  component: Layout,
  children: [
    { path: '', redirect: List },
    { path: 'update/:id', component: AddEdit },
  ],
};
