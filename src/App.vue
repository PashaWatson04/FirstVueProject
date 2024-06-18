<script setup>
import { ref, watch, provide, computed } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

/* Корзина (START) */

const cart = ref([])
const drawerOpen = ref(false)

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAddead = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAddead = false
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart
})

/* Корзина (END) */
</script>

<template>
  <Drawer v-if="drawerOpen" :total-price="totalPrice" :vatPrice="vatPrice" />
  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <Header :totalPrice="totalPrice" @open-drawer="openDrawer" />
    <div class="p-10">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<!-- scoped ограничивает стили и они распространяются только внутри компанента -->
