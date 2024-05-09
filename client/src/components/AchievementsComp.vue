<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="title-heading">Achievements</span>
        <v-card
          variant="elevated"
          elevation-20
          max-width="100%"
          class="achievements-card"
        >
          <v-card-text style="font-size: large">
            Received the SPOT Award twice and GEM of the Year Award, earned for
            developing the skillset and not shying away from tough challenges.
            Willingness to assist others and commitment to educating teammates
            are unequaled. Being very proactive in working across teams,
            significant help has been provided to complete end-to-end tasks.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.achievements-card {
  background-color: #70a3d1;
  transition: transform 0.3s ease;
  &:hover {
    border: 2px solid violet;
    transform: scale(1.1);
  }
}
</style>
