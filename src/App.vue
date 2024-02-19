<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function onSubmit(values) {
  console.log(JSON.stringify(values, null, 2));
}
</script>

<template>
  <div id="app">
    <Form class="flex columns-auto" :validation-schema="schema" @submit="onSubmit">
      <Field type="email" name="email"/>
      <ErrorMessage name="email"/>
      <Field type="text" name="name"/>
      <ErrorMessage name="name"/>
      <Field type="password" name="password"/>
      <ErrorMessage name="password"/>

      <button type="submit">Submit</button>
    </Form>
  </div>
</template>


<style scoped>
</style>
