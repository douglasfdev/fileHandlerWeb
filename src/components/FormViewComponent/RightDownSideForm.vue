<template>
  <div class="box">
    <div class="columns">

      <div class="column">

      <button @click="updateListFiles" class="button is-info is-inverted">
        <i :class="spinIcon" style="color: #1E90FF"></i>
      </button>

        <h1 class="mb-6"> Arquivos: </h1>
          <table v-if="isListed" class="table">
            <thead>
              <tr>
                <th><abbr class="column" title="id">ID</abbr></th>
                <th><abbr class="column" title="name">Nome</abbr></th>
                <th><abbr class="column" title="creted_at">Data Criação</abbr></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="file in files" :key="file.id">
                <th>{{ file.id }}</th>
                <td class="has-text-success-dark">{{ file.name }}</td>
                <td class="has-text-warning-dark">
                  {{
                    Intl.DateTimeFormat('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZone: 'UTC',
                    }).format(new Date(file.created_at)).replace(/\,/g, " |")
                  }}
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else>
            <progress class="progress is-medium is-dark" max="100"></progress>
          </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { IFileDTO } from '@/interfaces'
import api from '@/services/api'

const files = ref<Array<IFileDTO>>([])
const spinIcon = ref('fa-solid fa-sync')
const isListed = ref<boolean>(false)

const showFiles = async () => {
  try {
    const req = await api.get(process.env.VUE_APP_LIST_FILES, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    const res = req.data
    files.value = res


    isListed.value = true
    return res;
  } catch (e: any | unknown) {
    alert(e.message);
  }
};

const updateListFiles = async ($event: MouseEvent) => {
  spinIcon.value = 'fa-solid fa-sync fa-spin'
  $event.preventDefault()

  await showFiles();
  spinIcon.value = 'fa-solid fa-sync'
  isListed.value = true
}

onMounted(() => showFiles())
</script>

<style scoped>

</style>