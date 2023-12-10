<template>
  <div class="box">
    <div class="columns">

      <div class="column">
        <section>
          <h1> Veja as pessoas vinculadas ao sistema, abaixo. </h1>
        </section>
      </div>

    </div>

    <div
        class="column is-11 is-offset-1 file is-primary is-boxed"
    >
      <table class="table">
        <thead>
          <tr>
            <th><abbr class="column" title="id">ID</abbr></th>
            <th><abbr class="column" title="name">Nome</abbr></th>
            <th><abbr class="column" title="sex">Sexo</abbr></th>
            <th><abbr class="column" title="age">Idade</abbr></th>
            <th><abbr class="column" title="size">Tamanho</abbr></th>
            <th><abbr class="column" title="weight">Peso</abbr></th>
            <tbody>
              <tr v-for="person in persons" :key="person.id">
                <th>{{ person.id }}</th>
                <td class="has-text-success-dark">{{ person.name }}</td>
                <td class="has-text-success-dark">{{ person.sex }}</td>
                <td class="has-text-success-dark">{{ person.age }}</td>
                <td class="has-text-success-dark">{{ person.size }}</td>
                <td class="has-text-success-dark">{{ person.weight }}</td>
              </tr>
            </tbody>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/services/api';
import { onMounted, ref } from 'vue';
import { IPersonDTO } from '@/interfaces';
const persons = ref<Array<IPersonDTO>>([]);


const getPersons = async () => {
  try {
    const req = await api.get(process.env.VUE_APP_LIST_PERSONS);

    persons.value = req.data;

    console.log(persons);

    return persons;
  } catch (e: any | unknown) {
    alert(e.message);
  }
};

onMounted(() => getPersons());
</script>

<style scoped>

</style>