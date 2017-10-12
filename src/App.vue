<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x grid-padding-y align-center">
      <div class="cell medium-7">
        <h1 class="text-center">The Super Quiz</h1>
        <br>
        <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>

<style lang="scss">
</style>
