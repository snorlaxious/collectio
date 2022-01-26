<script setup lang="ts">
import Item from './Item.vue';
import { ItemType } from '../types/components.interfaces';

defineProps<{ items: ItemType[] }>();
</script>

<template>
    <div id="collection" class="shadowed-box">
        <Item
            v-for="item in items"
            :key="item.id"
            class="gradient-border shadowed-box"
        />
    </div>
</template>

<style scoped lang="scss">
#collection {
    width: 80vw;
    min-height: 80vh;
    border-radius: 16px;
    background: white;
    display: grid;
}
</style>
