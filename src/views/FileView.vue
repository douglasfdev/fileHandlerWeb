<template>
  <Form />
</template>

<script lang="ts">
import Vue from 'vue'
import Form from '@/components/FormViewComponent/FormIndex.vue'

export default Vue.extend({
  name: 'HomeView',
  components: {
    Form,
  },
});
</script>
