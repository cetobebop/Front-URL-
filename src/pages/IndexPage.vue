<template>
  <q-page padding>
    <h3>Bienvenido</h3>

    <link-form></link-form>

    <template v-if="!isEmpty">
      <link-card v-for="link of links" :key="link._id" :link="link"></link-card>
    </template>
    <h3 v-if="isEmpty" class="text-center">Sin links</h3>
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import LinkCard from "src/components/LinkCard.vue";
import LinkForm from "src/components/LinkForm.vue";
import { useLinkStore } from "src/stores/linkStore";
import { onMounted, ref, watchEffect } from "vue";

const linkStore = useLinkStore();

const { links } = storeToRefs(linkStore);

const isEmpty = ref(false);

onMounted(async () => {
  try {
    await linkStore.getLinks();
  } catch (error) {
    watchEffect(() => {
      isEmpty.value = !links.value.length;
    });
  }
});
</script>
