<template>
  <Suspense>
    <template #default>
      <div id="portfolio">
        <v-layout>
          <v-main class="main-conatiner">
            <router-view />
          </v-main>
        </v-layout>
      </div>
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
#portfolio {
  overflow-y: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: #241a24;
}

// * {
//   scrollbar-width: thin;
// }

/* Scrollbar styles */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(224, 224, 221);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: rgb(153, 118, 209);
  border-radius: 20px;
  border: 3px solid rgb(224, 224, 221);
}
.hr-line-color{
  font-size:larger;
   background: -webkit-linear-gradient(rgb(188, 12, 241), rgb(45, 253, 56));
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hr-line-color-2{
   font-size:larger;
   background: -webkit-linear-gradient(rgb(188, 12, 241), rgb(253, 45, 45));
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.title-heading {
  font-size: x-large;
  font-weight: 550;
  color: white;
}
</style>
