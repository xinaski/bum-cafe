<script setup>
defineProps({
  p: { type: Object, required: true }
})
</script>

<template>
   <RouterLink :to="`/producte/${p.slug}`" >
    <article class="rounded-2xl bg-white p-4 hover:shadow-md hover:bg-gray-50 transition">
      <div class="overflow-hidden rounded mb-3 h-64">
        <img
          v-if="p.img"
          :src="p.img"
          :alt="p.desc || p.nom"
          class="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
        <div v-else class="w-full h-full bg-slate-200 grid place-items-center text-slate-500 text-sm">
          Sense imatge
        </div>
      </div>

      <h3 class="font-semibold transform scale-x-125 origin-left">{{ p.nom }}</h3>
      <p class="text-sm text-slate-600 mb-2">{{ p.desc }}</p>

      <div class="flex items-center justify-between">
        <span class="font-bold">{{ (p.preu ?? 0).toFixed(2) }}€</span>
        <RouterLink
          :to="`/producte/${p.slug}`"
          class="btn btn-primary"
        >
          Veure
        </RouterLink>
      </div>
    </article>
  </RouterLink>
</template>
