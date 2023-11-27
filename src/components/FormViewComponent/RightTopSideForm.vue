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
          @change="onFileChanged"
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

          <button class="button is-primary is-light mt-6" @click="saveCsv">Upload</button>
        </span>

      </label>
    </div>

    <span v-if="!!uploadedFile" class="mt-6 pt-6">
      <span class="has-background-success-light">Nome do arquivo no banco de dados:</span> <span class="has-text-info-dark"> {{ fileName }} </span>
    </span>
    <span v-else class="mt-6 pt-6">
      <span class="has-background-primary-light">Aguarde...</span>
    </span>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import api from '@/services/api';

const file = ref<File | null>();
const fileName = ref<string>();
const form = ref<HTMLFormElement>();
const selectedFileName = ref<string | undefined>();
const uploadedFile = ref<boolean>(false);

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
    const req = await api.post(process.env.VUE_APP_POST_FILE, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    const res = req.data;

    fileName.value = res.file;
    uploadedFile.value = true;
  } catch (e: any | unknown) {
    alert(e.message);
    form.value?.reset();
    file.value = null;
  }
}
</script>
