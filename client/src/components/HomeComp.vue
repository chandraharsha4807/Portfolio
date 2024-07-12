<template>
  <v-container id="homeContainer">
    <v-row>
      <v-col class="d-flex">
        <v-card
          class="home-card pa-2"
          variant="elevated"
          elevation-20
          max-width="60%"
        >
          <div class="d-flex">
            <div>
              <v-card-title class="home-card-title"
                >Chandra Harsha</v-card-title
              >
              <v-card-text class="home-card-text">
                Experienced UI Developer
                <span class="hr-line-color">|</span> Proficient in Javascript,
                Vue.js, React.js <span class="hr-line-color">|</span> Frontend
                Specialist with 3 Years of Hands-on Expertise.
              </v-card-text>
            </div>
            <v-spacer></v-spacer>
          </div>
          <div
            v-for="(item, index) in socialMediaList"
            :key="index"
            class="d-flex pl-3 pb-2"
          >
            <v-icon :icon="`custom:${item.icon}`"></v-icon>
            <span v-if="item?.disabled" class="pl-2">{{ item.title }}</span>
            <a
              v-else
              :href="item.link"
              target="_blank"
              class="text-white pl-2"
              >{{ item.title }}</a
            >
          </div>
        </v-card>
        <v-spacer></v-spacer>
        <v-avatar rounded="0" size="300" class="avatar-content pa-0 ma-0">
          <v-img
            alt="Profile"
            :src="'data:image/jpeg;base64,' + projectContants.profileBase64"
          ></v-img>
        </v-avatar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { projectContants } from "../constants/projects";
import { ref } from "vue";

const socialMediaList = ref([
  {
    title: "Chandra Harsha Ganivada",
    icon: "linkedin-logo",
    link: "https://www.linkedin.com/in/chandra-harsha-3ba907151",
  },
  {
    title: "Github Profile",
    icon: "git-logo",
    link: "https://github.com/chandraharsha4807?tab=repositories",
  },
  {
    title: "ganivadaharsha998@gmail.com",
    icon: "email-logo",
    link: "ganivadaharsha998@gmail.com",
    disabled: true,
  },
]);
</script>

<style scoped lang="scss">
.home-card {
  background: linear-gradient(45deg, black, #70a3d1);
  color: white;
  transition: transform 0.3s ease;
  &:hover {
    border: 2px solid violet;
    transform: scale(1.1);
  }
}

.avatar-content {
  transition: transform 0.3s ease;
  &:hover {
    border: 2px solid violet;
    transform: scale(1.1);
  }
}

.home-card-title {
  font-size: xxx-large;
  background: -webkit-linear-gradient(rgb(188, 12, 241), rgb(212, 4, 4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-card-text {
  font-size: large;
}
</style>
