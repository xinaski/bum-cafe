<template>
  <div class="min-h-screen bg-white text-slate-800 flex flex-col">


    <header class="sticky top-0 z-10 bg-bum-base backdrop-blur border-b">
      <div class="container-page h-14 flex items-center justify-between">

        <RouterLink to="/" class="flex items-center gap-2">
          <img src="/brand/logoheader.svg" alt="BUM CAFÈ logo" class="h-6 w-auto" />
        </RouterLink>


        <nav class="hidden text-bum-cream md:flex items-center gap-6 text-sm">
          <RouterLink class="hover:underline underline-offset-2" to="/">Inici</RouterLink>
          <RouterLink class="hover:underline underline-offset-2" to="/botiga">Botiga</RouterLink>
          <RouterLink class="hover:underline underline-offset-2" to="/sobre">Sobre nosaltres</RouterLink>
        </nav>


        <button @click="mobileOpen = !mobileOpen" class="md:hidden text-bum-cream p-2">☰</button>
      </div>

      <div v-if="mobileOpen" class="md:hidden border-t-2 border-bum-cream bg-bum-base text-bum-cream px-4 py-6 space-y-4">
        <RouterLink class="block hover:underline" to="/" @click="mobileOpen=false">Inici</RouterLink>
        <RouterLink class="block hover:underline" to="/botiga" @click="mobileOpen=false">Botiga</RouterLink>
        <RouterLink class="block hover:underline" to="/sobre" @click="mobileOpen=false">Sobre nosaltres</RouterLink>
      </div>
    </header>


    <RouterView />


    <footer class="bg-bum-base py-6 text-sm text-bum-cream">
      <div class="container-page flex justify-between">
        <p>© {{ new Date().getFullYear() }} BUM CAFÈ</p>
        <p class="opacity-80">Collonut · Espavila’t · De la Iaia</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const mobileOpen = ref(false)
</script>


<script setup>
</script>

