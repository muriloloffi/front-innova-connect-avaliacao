import { Layout, Signin, Signup } from '@/templates/auth';

export default {
  path: '/api/auth',
  component: Layout,
  children: [
    { path: '', redirect: 'signin' },
    { path: 'signin', component: Signin },
    { path: 'signup', component: Signup },
  ],
};
