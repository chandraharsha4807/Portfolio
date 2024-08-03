<template>
  <v-app-bar density="compact">
    <v-spacer></v-spacer>
    <v-tabs v-model="tab" align-tabs="end" color="#d61be1">
      <v-tab
        v-for="(item, index) in tabsList"
        :key="index"
        :value="item.value"
        @click="navigateToContent(item.id)"
      >
        <span class="d-flex">
          <v-icon size="24">{{ item.icon }}</v-icon>
          <span class="pl-2 text-md-subtitle-1">{{ item.title }}</span>
        </span>
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
  </v-app-bar>
  <div
    id="scroll-container"
    ref="parentRef"
    class="pa-10"
    @scroll="trackScroll"
  >
    <Home ref="homeRef" />
    <About ref="aboutRef" />
    <Contact ref="contactRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Home from "../components/HomeComp.vue";
import About from "../components/AboutComp.vue";
import Contact from "../components/ContactComp.vue";

const parentRef = ref(null);
const homeRef = ref(null);
const aboutRef = ref(null);
const contactRef = ref(null);
const tab = ref(0);

const tabsList = ref([
  {
    title: "Home",
    icon: "mdi-home",
    id: "homeContainer",
    value: 1,
  },
  {
    title: "About",
    icon: "mdi-sticker-emoji",
    id: "aboutContainer",
    value: 2,
  },
  {
    title: "Contact",
    icon: "mdi-phone",
    id: "contactContainer",
    value: 3,
  },
]);

const trackScroll = (event: any) => {
  const homeElement = homeRef.value?.$el;
  const aboutElement = aboutRef.value?.$el;
  const contactElement = contactRef.value?.$el;
  const homeRect = homeElement.getBoundingClientRect();
  const aboutRect = aboutElement.getBoundingClientRect();
  const contactRect = contactElement.getBoundingClientRect();
  if (
    homeRect.top < 10 &&
    aboutRect.top <= homeRect.height &&
    aboutRect.bottom >= contactRect.height + 300
  ) {
    tab.value = 2;
  } else if (aboutRect.bottom - 300 <= contactRect.height) {
    tab.value = 3;
  } else {
    tab.value = 1;
  }
};

const navigateToContent = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
#scroll-container {
  overflow-y: auto;
  height: calc(100vh - 50px);
}
</style>
