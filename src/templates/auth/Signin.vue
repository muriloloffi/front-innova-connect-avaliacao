<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '@/stores';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

async function onSubmit(values) {
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
        <div class="m-4">
          <label for="email">Email</label>
          <Field class ="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="text" name="email" :class="{ 'is-invalid': errors.email }" />
        </div>
        <div class="m-4">
          <label for="password">Password</label>
          <Field class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="password" name="password" :class="{ 'is-invalid': errors.password }" />
        </div>
        <div class="m-2">
          <button class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 m-2" :disabled="isSubmitting">
            <span v-show="isSubmitting">Loading...</span>
            Sign in
          </button>
          <router-link to="signup" class="inline-block align-middle text-center select-none border whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline font-normal text-blue-700 bg-transparent m-2">
            Sign up
          </router-link>
        </div>
      </Form>
    </div>
  </div>
</template>