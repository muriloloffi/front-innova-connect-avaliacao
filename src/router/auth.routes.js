import { Layout, Login, Register } from '@/templates/auth';

export default {
  path: '/api/auth',
  component: Layout,
  children: [
    { path: '', redirect: 'login' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
  ],
};
