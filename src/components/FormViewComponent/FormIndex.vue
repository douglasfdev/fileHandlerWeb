<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <LeftSideForm />
    </div>
    <div class="column is-three-quarter">
      <RightTopSideForm />
      <RightDownSideForm />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftSideForm from './LeftSideForm.vue'
import RightTopSideForm from './RightTopSideForm.vue'
import RightDownSideForm from './RightDownSideForm.vue'

export default defineComponent({
  name: 'FormIndex',
  components: {
    LeftSideForm,
    RightTopSideForm,
    RightDownSideForm,
  },
});
</script>
