<script setup lang="ts">
import Item from './Item.vue';
import { CollectionType } from '../types/components.interfaces';

defineProps<{ collection: CollectionType }>();
</script>

<template>
    <div id="collection" class="shadowed-box">
        <div id="collection-name">
            <span>this is collection name</span>
        </div>
        <Item v-for="item in collection.items" :key="item.id" :item="item" />
    </div>
</template>

<style scoped lang="scss">
#collection {
    margin: 20px 0;
    padding: 20px 0;
    border-radius: 16px;
    background: white;
}

#collection-name {
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 30px;

    span {
        font-size: 1.5em;
        font-weight: bold;
    }
}
</style>
