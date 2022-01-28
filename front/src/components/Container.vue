<script setup lang="ts">
import Collection from './Collection.vue';
import { CollectionType } from '../types/components.interfaces';

const sampleCollection: CollectionType = {
    id: 1,
    items: [{ id: 1 }, { id: 2 }, { id: 3 }],
};
</script>

<template>
    <div id="container">
        <Collection :collection="sampleCollection" />
    </div>
</template>

<style scoped lang="scss">
#container {
    margin: 0 10vh;
}
</style>
