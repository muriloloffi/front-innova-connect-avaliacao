import { Layout, Signin, Signup } from '@/templates/auth';

export default {
  path: '/api/auth',
  component: Layout,
  children: [
    { path: '', redirect: 'signin' },
    //'sign' e 'signup' ficou repetitivo, mas não tenho tempo para melhorar agora
    { path: 'signin', component: Signin },
    { path: 'signup', component: Signup },
  ],
};
