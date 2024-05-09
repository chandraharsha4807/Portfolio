<template>
  <v-container id="aboutContainer">
    <v-row>
      <v-col>
        <h1 class="text-white">About</h1>
        <hr />
        <Experience />
        <Projects />
        <SkillSet />
        <AchievementsComp/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Experience from "./ExperienceComp.vue";
import Projects from "./ProjectsComp.vue";
import SkillSet from "./SkillSetComp.vue";
import AchievementsComp from "./AchievementsComp.vue"
</script>

<style scoped></style>
