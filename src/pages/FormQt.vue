<script setup>
const handleSubmit = () => {
  const username = document.querySelector('input[name="username"]').value
  const usernumber = document.querySelector('input[name="usernumber"]').value

  if (usernumber.match(/^(\+?[0-9]{1,3}\s?)?[0-9]{3}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/) === null) {
    window.alert(
      'Некорректно введен номер телефона. Пожалуйста, введите номер в формате +8 999 999 99 99'
    )
    return
  }

  if (username.trim() === '') {
    window.alert("Поле 'Имя' не может быть пустым")
    return
  }

  document.querySelector('input[name="username"]').value = ''
  document.querySelector('input[name="usernumber"]').value = ''
  window.alert('Заявка успешно отправлена!')
}
</script>

<template>
  <h2 class="text-3xl font-bold mb-8">ЗАПОЛНИТЕ ЗАЯВКУ</h2>
  <div class="main">
    <div class="mainForm">
      <div class="labelForm">
        <label class="text-1xl font-bold mb-2">Имя <span></span></label>
        <input type="text" name="username" required placeholder="Завозин Павел Максимович" />
      </div>
      <div class="labelForm">
        <label class="text-1xl font-bold mb-2">Номер телефона<span></span></label>
        <input type="tel" name="usernumber" required placeholder="+8 999 999 99 99" />
      </div>
      <router-link to="/">
        <button
          @click="handleSubmit"
          type="submit"
          class="mt-4 bg-lime-500 w-full rounded-xl py-3 disabled:bg-slate-400 text-white transition hover:bg-lime-600 active:bg-lime-700"
        >
          Оформить заказ
        </button>
      </router-link>
    </div>
  </div>
</template>
