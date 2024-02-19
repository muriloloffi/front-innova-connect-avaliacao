<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useUsersStore, useAlertStore } from '@/stores';
import { router } from '@/router';
import { apiSignInRoute } from '@/utils/constants';

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

async function onSubmit(values) {
  const usersStore = useUsersStore();
  const alertStore = useAlertStore();
  try {
    await usersStore.signup(values);
    await router.push(apiSignInRoute);
    alertStore.success('Registration successful! Please sign in.');
  } catch (error) {
    alertStore.error(error);
  }
}
</script>

<template>
  <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 m-6">
    <h4 class="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">Sign up</h4>
    <div class="flex-auto p-6">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="mb-4">
          <label for="name">Name</label>
          <Field type="text" name="name" :class="{ 'is-invalid': errors.name }" />
          <div class="hidden mt-1 text-sm text-red" v-show="errors.name">{{ errors.name }}</div>
        </div>
        <div class="mb-4">
          <label for="email">Email</label>
          <Field type="text" name="email" :class="{ 'is-invalid': errors.email }" />
          <div class="hidden mt-1 text-sm text-red" v-show="errors.email">{{ errors.email }}</div>
        </div>
        <div class="mb-4">
          <label for="password">Password</label>
          <Field type="password" name="password" :class="{ 'is-invalid': errors.password }" />
          <div class="hidden mt-1 text-sm text-red" v-show="errors.password">{{ errors.password }}</div>
        </div>
        <div class="mb-4">
          <button class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600" :disabled="isSubmitting">
            <span v-show="isSubmitting">Loading...</span>
            Sign up
          </button>
          <router-link to="signin" class="inline-block align-middle text-center select-none border whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline font-normal text-blue-700 bg-transparent">
            Sign in
          </router-link>
        </div>
      </Form>
    </div>
  </div>
</template>