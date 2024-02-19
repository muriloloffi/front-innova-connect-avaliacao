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
  <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 m-6">
    <h4 class="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">Login</h4>
    <div class="flex-auto p-6">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting}">
        <div class="mb-4">
          <label for="email">Email</label>
          <Field type="text" name="email" :class="{ 'is-invalid': errors.email }" />
        </div>
        <div class="mb-4">
          <label for="password">Password</label>
          <Field type="password" name="password" :class="{ 'is-invalid': errors.password }" />
        </div>
        <div class="mb-4">
          <button class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600" :disabled="isSubmitting">
            <span v-show="isSubmitting">Loading...</span>
            Login
          </button>
          // TODO: Add a link to the registration page
        </div>
      </Form>
    </div>
  </div>
</template>