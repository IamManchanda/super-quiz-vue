<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x grid-padding-y align-center">
      <div class="cell medium-7">
        <h1 class="text-center">The Super Quiz</h1>
        <br>
        <transition name="flip" mode="out-in">
          <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>

<style lang="scss">
.flip-enter {}

.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}

.flip-leave {}

.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  } to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  } to {
    transform: rotateY(0deg);
  }
}
</style>
