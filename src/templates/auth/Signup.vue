<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

import { useUsersStore, useAlertStore } from '@/stores';
import { router } from '@/router';
import { apiSignInRoute } from '@/utils/constants';

const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

async function onSubmit(values) {
  console.log(schema);
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
        <div v-for="field in formFields" class="m-4" :key="field.name">
          <label :for="field.name">{{ field.label }}</label>
          <Field class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" :type="field.type" :name="field.name" :class="{ 'is-invalid': errors[field.name] }" />
          <ErrorMessage :name="field.name" class="text-red-500 text-xs italic" />
        </div>
        <div class="m-2">
          <button class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-400 m-2" :disabled="isSubmitting">
            <span v-show="isSubmitting">Loading...</span>
            Sign up
          </button>
          <router-link to="signin" class="inline-block align-middle text-center select-none border whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline font-normal text-blue-700 hover:bg-gray-200 bg-transparent m-2">
            Back to sign in
          </router-link>
        </div>
      </Form>
    </div>
  </div>
</template>