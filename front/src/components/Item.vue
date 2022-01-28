<script setup lang="ts">
import { ItemType } from '../types/components.interfaces';

defineProps<{ item: ItemType }>();
</script>

<template>
    <div id="item" class="gradient-border shadowed-box">
        <span>this is item {{ item.id }}</span>
    </div>
</template>

<style scoped lang="scss">
#item {
    display: flex;
    margin: 12px 30px;
    min-height: 70px;

    span {
        margin-top: 24px;
        margin-left: 16px;
    }
}
</style>
