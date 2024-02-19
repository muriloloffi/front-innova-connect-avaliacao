<template>
  <div id="app">
    <Form @submit="onSubmit">
      <Field type="text" name="name"/>
      <Field type="email" name="email" :rules="validateEmail"/>
      <ErrorMessage name="email"/>
      <Field type="password" name="password"/>

      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';

function onSubmit(values) {
  console.log(JSON.stringify(values, null, 2));
}

function validateEmail(value) {
  if (!value) {
    return 'This field is required';
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'Invalid email';
  }

  return true;
}
</script>

<style scoped>
</style>
