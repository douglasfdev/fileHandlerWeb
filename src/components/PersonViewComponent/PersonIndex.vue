<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
        <LeftSideForm />
    </div>
    <div class="column is-three-quarter">
      <RightTopSidePerson />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftSideForm from '../FormViewComponent/LeftSideForm.vue';
import RightTopSidePerson from './RightTopSidePerson.vue';

export default defineComponent({
  name: 'PersonIndex',
  components: {
    LeftSideForm,
    RightTopSidePerson
  },
})
</script>

<style scoped>

</style>
