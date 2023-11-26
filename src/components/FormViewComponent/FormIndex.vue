<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <LeftSideForm />
    </div>
    <div class="column is-three-quarter">
      <RightSideForm />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftSideForm from './LeftSideForm.vue'
import RightSideForm from './RightSideForm.vue'

export default defineComponent({
  name: 'FormIndex',
  components: {
    LeftSideForm,
    RightSideForm,
  },
});
</script>
