<template>
  <q-card class="my-card q-mt-sm">
    <q-card-section>
      <div class="text-overline">{{ link.shortid }}</div>
      {{ link.longLink }}
    </q-card-section>

    <q-card-actions>
      <q-btn
        flat
        round
        icon="mdi-trash-can-outline"
        color="red"
        @click="HandleEventDelete()"
      />
      <q-btn flat round icon="mdi-pencil-outline" @click="HandleEventUpdate" />
      <q-btn flat color="primary" @click="copyText(link.shortid)"> Copy </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { Loading } from "quasar";

import { useLinkStore } from "../stores/linkStore";
import { useRemoveItem } from "src/composables/removeItem";
import { useDialog } from "src/composables/dialogs";
import { useNotify } from "src/composables/notify";
import { useClipboard } from "src/composables/clipboard";

const { dialogPromp, dialogConfirm } = useDialog();

const { errorNotify, successNotify } = useNotify();

const linkStore = useLinkStore();

async function UpdateItem(value) {
  try {
    Loading.show();
    await linkStore.updateLink(props.link._id, value);
    linkStore.links = linkStore.links.map((l) =>
      props.link._id === l._id ? { ...l, longLink: value } : l
    );
    successNotify("se ha actualizado correctamente");
  } catch (error) {
    errorNotify(error?.errors[0]?.msg);
  } finally {
    Loading.hide();
  }
}

function HandleEventUpdate() {
  dialogPromp("¿desea actualizar?", props.link.longLink, UpdateItem);
}

function HandleEventDelete() {
  dialogConfirm("¿Desea eliminar este elemento?", deleteLink);
}

async function deleteLink() {
  try {
    linkStore.links = useRemoveItem(props.link._id, linkStore.links);
    const res = await linkStore.deleteLinks(props.link._id);
    successNotify("se ha eliminado correctamente");
  } catch (error) {
    errorNotify(error?.errors[0]?.msg);
  }
}

function copyText(nanoLink) {
  const link = `${process.env.URL_FRONT}/${nanoLink}`;
  useClipboard(link);
  successNotify("copiado con exito");
}

const props = defineProps({
  link: Object,
});
</script>
