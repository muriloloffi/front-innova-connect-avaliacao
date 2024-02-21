import { Layout, List } from '@/templates/gyms';

export default {
  path: '/gyms',
  component: Layout,
  children: [
    { path: '', component: List },
  ],
};
