<template>
  <div class="card">
    <div class="card-divider align-center">
      <h3 class="text-center">{{ question }}</h3>
    </div>
    <div class="card-section grid-x grid-margin-x text-center">
      <div class="cell small-12 medium-6">
        <button class="button primary radius margin-1" @click="onAnswer(buttonData[0].correct)">
          {{ buttonData[0].answer }}
        </button>
      </div>
      <div class="cell small-12 medium-6">
        <button class="button primary radius margin-1" @click="onAnswer(buttonData[1].correct)">
          {{ buttonData[1].answer }}
        </button>
      </div>
      <div class="cell small-12 medium-6">
        <button class="button primary radius margin-1" @click="onAnswer(buttonData[2].correct)">
          {{ buttonData[2].answer }}
        </button>
      </div>
      <div class="cell small-12 medium-6">
        <button class="button primary radius margin-1" @click="onAnswer(buttonData[3].correct)">
          {{ buttonData[3].answer }}
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./AppQuestion.js"></script>
<style lang="scss"></style>