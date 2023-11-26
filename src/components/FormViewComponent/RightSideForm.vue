<template>
  <div class="box">
    <div class="columns">

      <div class="column">

        <section>
          <h1> Adicione seu arquivo CSV que contenha dados de uma pessoa. </h1>
        </section>

      </div>

    </div>

    <div
      class="column is-11 is-offset-1 file is-primary is-boxed"
      role="form"
      aria-label="Formulário para adição de arquivos CSV com atributos de uma pessoa"
    >
      <label class="file-label">
        <input
          class="file-input"
          type="file"
          name="person"
          placeholder="Adicione um arquivo CSV"
          ref="fileInput"
          accept=".csv"
          @change="onFileChanged($event)"
        />
        <span class="file-cta">
          <span class="file-icon">
            <i class="fa fa-cloud-upload" aria-hidden="true"></i>
          </span>
          <span v-if="selectedFileName">
            {{ selectedFileName }}
          </span>
          <span v-else>
            Adicione seu arquivo…
          </span>
          <button class="button is-primary is-light mt-6" @click="saveCsv() ">Upload</button>
        </span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import api from '@/services/api';

const file = ref<File | null>();
const form = ref<HTMLFormElement>();
const selectedFileName = ref<string | undefined>();

const onFileChanged = ($event: Event) => {
  const target = $event.target as HTMLInputElement;

  const hasFile = target.files?.item(0);
  if (!target && !hasFile) return alert("Nao foi encontrado um arquivo!");

  const type = target.files?.item(0)?.type;
  if (type != 'text/csv') return alert("Arquivo invalido, precisa ser .csv!");

  file.value = target.files?.item(0);
   selectedFileName.value = file.value?.name;
}

const saveCsv = async () => {
  if (!file.value) return alert("Nao foi encontrado um arquivo");

  const csvFile = file.value;

  const formData = new FormData();
  formData.append('csvFile', csvFile);

  try {
    const req = await api.post('uploadFile/', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    const res = req.data;
    console.log(res);
  } catch (e: any | unknown) {
    alert(e.message);
    form.value?.reset();
    file.value = null;
  }
}
</script>

<style></style>