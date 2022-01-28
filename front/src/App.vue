<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Container from './components/Container.vue';
</script>

<template>
    <Header />
    <Container />
    <Footer />
</template>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
    background: $collectio-rep;
}
</style>
