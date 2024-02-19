<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '@/stores';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

async function onSubmit() {
  const authStore = useAuthStore();
  const { email, password } = values;
  await authStore.login(email, password);
}
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting}">
    <div>
      <label for="email">Email</label>
      <Field type="text" name="email" :class="{ 'is-invalid': errors.email }" />
    </div>
    <div>
      <label for="password">Password</label>
      <Field type="password" name="password" :class="{ 'is-invalid': errors.password }" />
    </div>
    <div class="form-group">
      <button :disabled="isSubmitting">
        <span v-show="isSubmitting">Loading...</span>
        Login
      </button>
      // TODO: Add a link to the registration page
    </div>
  </Form>
</template>