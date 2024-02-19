import { Layout, List } from '@/templates/users';

export default {
  path: '/users',
  component: Layout,
  children: [
    { path: '', redirect: List },
  ],
};
