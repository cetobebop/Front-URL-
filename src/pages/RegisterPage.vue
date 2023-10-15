<template>
  <q-page class="row justify-center">
    <div class="col-sm-6 col-md-5">
      <h2>Register</h2>
      <q-form @submit.prevent="handleSubmit">
        <q-input
          v-model="email"
          label="Email"
          class="q-mt-lg"
          :rules="[vEmail]"
        >
        </q-input>
        <q-input
          type="password"
          v-model="password"
          label="Password"
          class="q-mt-lg"
          :rules="[vPassword]"
        ></q-input>

        <div>
          <q-btn type="submit" class="q-mt-sm" :disable="loading">Entrar</q-btn>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useAuth } from "src/composables/auth";
import { useRules } from "src/composables/inputRules";
import { useUserStore } from "../stores/userStore";
import { useDialog } from "src/composables/dialogs";

const { vEmail, vPassword } = useRules();
const { dialog } = useDialog();
const userStore = useUserStore();
const { expiresIn, token } = storeToRefs(userStore);
const { register } = useAuth();
const router = useRouter();

const email = ref("");
const password = ref("");

const loading = ref(false);

const handleSubmit = async () => {
  try {
    loading.value = true;
    const res = await register(email.value, password.value);
    token.value = res?.token;
    expiresIn.value = res?.expiresIn;
    console.log(res);
    if (res[0]) return dialog(res[0].msg);
    router.push("/");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
