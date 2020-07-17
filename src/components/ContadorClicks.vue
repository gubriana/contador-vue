<template>
  <div>
    <h2>Contador de CLICKS</h2>
   <button @click="onClick()">click!</button><br>
    <p>Número de CLICKS = {{timesClicked}} </p>
  </div>
</template>

<script>
export default {
  name: 'ContadorClicks',
  data() {
    return{
      timesClicked: 0
    }
  },
  methods: {
    onClick(){
      this.timesClicked++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
