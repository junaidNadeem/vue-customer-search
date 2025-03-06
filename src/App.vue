<template>
  <div id="app">
    <CustomerModal />
  </div>
</template>

<script>
import CustomerModal from './views/CustomerModal.vue';

export default {
  name: 'App',
  components: {
    CustomerModal
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', Arial, sans-serif;
}

* {
  box-sizing: border-box;
  font-family: 'Montserrat', Arial, sans-serif;
}
</style>