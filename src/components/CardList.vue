<script setup>
import Card from './Card.vue'

defineProps({
  items: Array
})

const emit = defineEmits(['addToFavorite', 'addToCart'])
</script>

<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      @clickAdd="() => emit('addToCart', item)"
      @clickFavorite="() => emit('addToFavorite', item)"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAddead"
    />
  </div>
</template>
