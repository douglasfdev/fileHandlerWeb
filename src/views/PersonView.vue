<template>
  <Person />
</template>

<script lang="ts">
import Vue from 'vue'
import Person from '@/components/PersonViewComponent/PersonIndex.vue'

export default Vue.extend({
  name: 'HomeView',
  components: {
    Person,
  },
});
</script>
