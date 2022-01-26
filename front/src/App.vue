<script setup lang="ts">
import Collection from './components/Collection.vue';
import { ItemType } from './types/components.interfaces';

const items: ItemType[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
</script>

<template>
    <Collection :items="items" />
</template>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $collectio-rep;
}
</style>
