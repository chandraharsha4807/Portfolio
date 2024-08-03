<template>
  <v-container id="contactContainer">
    <v-row>
      <v-col>
        <h1 class="text-white">Contact Info</h1>
        <hr class="mb-7" />
        <v-card
          variant="elevated"
          elevation-20
          max-width="100%"
          class="contact-card"
        >
          <v-card-title
            v-for="(item, index) in contactInfo"
            :key="index"
            class="d-flex align-center"
          >
            <v-icon :icon="`custom:${item.icon}`"></v-icon>
            <span class="pl-3">{{ item.text }}</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="text-white declartion-text">
          I hereby declare that the above provided information is true to the
          best of my knowledge.
        </span>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-end">
      <span class="hr-line-color-2"
        >-<span class="pl-3">G.Chandra Harsha</span></span
      >
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const contactInfo = ref([
  {
    icon: "account-icon",
    text: "Chandra Harsha Ganivada",
  },
  {
    icon: "email-logo",
    text: "ganivadaharsha998@gmail.com",
  },
  {
    icon: "contact-icon",
    text: "+91 9003257754",
  },
]);
</script>

<style scoped>
.contact-card {
  background: linear-gradient(45deg, black, transparent);
  color: white;
}
.declartion-text {
  font-size: larger;
}
#contactContainer{
  margin-bottom: 100px;
}
</style>
