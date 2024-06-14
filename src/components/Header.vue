<script setup>
defineProps({
  totalPrice: Number
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <router-link to="/">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">DreamAc</h2>
          <p class="text-slate-400">Магазин лучшего парфюма</p>
        </div>
      </div>
    </router-link>
    <div class="flex items-center gap-4">
      <img src="/geo.png" alt="" class="w-8" />
      <div>
        <a href="https://2gis.ru/novosibirsk/firm/70000001080542551">
          <h5 class="text-xl font-bold uppercase">Мы находимся здесь</h5>
          <p class="text-slate-400">Нажми что бы посмотреть на карте</p>
        </a>
      </div>
    </div>
    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black"
      >
        <img src="/cart.svg" alt="Logo" />
        <b>{{ totalPrice }} руб</b>
      </li>
      <router-link to="favorites">
        <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
          <img src="/favorite.svg" alt="" />
          <span>Закладки</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>
