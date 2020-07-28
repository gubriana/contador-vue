<template>
  <div>
    <h2>Contador de CLICKS</h2>
   <button @click="onClick()">click!</button><br>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: 'ContadorClicks',
  methods: {
    onClick() {
      this.$store.commit('increment')
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
