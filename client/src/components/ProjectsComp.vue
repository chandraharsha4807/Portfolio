<template>
  <v-container class="pt-0">
    <v-row>
      <v-col>
        <span class="title-heading">Projects</span>
      </v-col>
    </v-row>
    <v-row class="project-cards-container px-3">
      <v-card
        v-for="(item, index) in projectContants.projectsList"
        :key="index"
        class="project-card pa-2"
        variant="elevated"
        elevation-20
        max-width="100%"
        min-width="40%"
      >
        <a :href="item.link" target="_blank">
          <div>
            <div class="card-top-container">
              <div class="">
                <div class="image-content">
                  <v-img
                    alt="Profile"
                    :src="'data:image/jpeg;base64,' + item.imgBase64"
                  ></v-img>
                </div>
                <v-card-text class="px-0">
                  <span class="project-title">{{ item.title }}</span>
                </v-card-text>
              </div>
            </div>
            <div class="card-btm-container">
              <v-chip
                v-for="(tool, i) in item.tools"
                :key="i"
                class="mr-2 mb-2 custom-chip"
                color="blueviolet"
                variant="outlined"
                density="compact"
              >
                <v-icon :icon="`custom:${tool.logo}`"></v-icon>
                <span class="pl-2">{{ tool.text }}</span>
              </v-chip>
            </div>
          </div>
        </a>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { projectContants } from "../constants/projects";
</script>

<style scoped>
.project-cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
}
.project-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    border: 1px solid violet;
    transform: scale(1.1);
  }
}
.image-content {
  width: 100%;
  padding: 5px;
  border: 1px solid rgb(159, 38, 163);
  border-radius: 5px;
}
.project-title {
  font-size: medium;
  font-weight: 600;
  color: blueviolet;
}
.custom-chip {
  border-color: blueviolet;
}
</style>
