<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="title-heading">Skill Set</span>
        <v-card
          variant="elevated"
          elevation-20
          max-width="100%"
          class="pa-4 skill-card-container"
        >
          <div
            v-for="(item, i) in skillSetList"
            :key="i"
            class="d-flex align-center pb-3"
          >
            <v-icon :icon="`custom:${item.icon}`"></v-icon>
            <div class="progress-container pl-4">
              <v-progress-linear
                :model-value="item.progress"
                rounded
                :color="item.progressColor"
                height="14"
              >
            </v-progress-linear>
            </div>
            <span class="hr-line-color-2 px-3"> {{ item.progress }}% </span>
            --------------
            <span class="text-white px-3">{{ item.text }}</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const skillSetList = ref([
  {
    progress: 90,
    icon: "vue-logo",
    progressColor: "#519950",
    text: "Vue.js",
  },
  {
    progress: 80,
    icon: "html-logo",
    progressColor: "red",
    text: "HTML",
  },
  {
    progress: 80,
    icon: "css-logo",
    progressColor: "#be35cf",
    text: "CSS",
  },
  {
    progress: 80,
    icon: "javascript-logo",
    progressColor: "amber",
    text: "JavaScript",
  },
  {
    progress: 60,
    icon: "react-logo",
    progressColor: "#5da1a1",
    text: "React.js",
  },
  {
    progress: 60,
    icon: "node-logo",
    progressColor: "#1a910b",
    text: "Node.js",
  },
  {
    progress: 40,
    icon: "graphql-logo",
    progressColor: "#a91489",
    text: "Graphql",
  },
  {
    progress: 20,
    icon: "postgresql-logo",
    progressColor: "#2c5e81",
    text: "Postgres",
  },
  {
    progress: 20,
    icon: "mongo-logo",
    progressColor: "#cbcac7",
    text: "MongoDB",
  },
]);
</script>

<style scoped>
.skill-card-container {
  background-color: #424242;
}
.progress-container {
  width: 70%;
}
</style>
