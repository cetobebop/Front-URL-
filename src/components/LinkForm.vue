<template>
  <q-form @submit.prevent="HandleEvent" ref="linkForm">
    <q-input
      label="Ingrese un link"
      v-model="link"
      :rules="[vLinks]"
      lazy-rules
    ></q-input>

    <q-btn
      type="submit"
      label="Agregar"
      color="light-blue-8"
      class="full-width q-mt-sm"
    ></q-btn>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import { useLinkStore } from "src/stores/linkStore";
import { useDialog } from "src/composables/dialogs";
import { useRules } from "src/composables/inputRules";

const { dialog } = useDialog();

const { vLinks } = useRules();

const linkForm = ref(null);

const link = ref("");
const linkStore = useLinkStore();

const HandleEvent = async () => {
  try {
    await linkStore.createLink(link.value);
    link.value = "";
    linkForm.value.resetValidation();
  } catch (error) {
    dialog(error.errors[0].msg);
  }
};
</script>
