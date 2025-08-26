<script setup>
import { useRoute } from 'vue-router'
import { findBySlug } from '../data/products'

const { params: { slug } } = useRoute()
const producte = findBySlug(slug)
</script>

<template>
  <article v-if="producte">
    <p class="text-xs uppercase tracking-wide text-slate-500 mb-2">Fitxa de producte</p>
    <h1 class="text-2xl font-bold mb-2">{{ producte.nom }}</h1>
    <p class="text-slate-600 mb-6">{{ producte.desc }}</p>

    <div class="rounded-2xl bg-white p-6 shadow">
      <div class="h-56 bg-slate-100 rounded mb-4"></div>
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold">{{ producte.preu.toFixed(2) }}€</span>
        <div class="flex gap-2">
          <RouterLink to="/botiga" class="inline-flex items-center rounded-xl px-4 py-2 border hover:bg-slate-50">
            Tornar
          </RouterLink>
          <button class="inline-flex items-center rounded-xl px-4 py-2 bg-amber-500 text-slate-900 hover:brightness-95">
            Afegir al carret
          </button>
        </div>
      </div>
    </div>
  </article>

  <section v-else class="text-center py-16">
    <h2 class="text-xl font-bold mb-2">Producte no trobat</h2>
    <RouterLink to="/botiga" class="inline-flex items-center rounded-xl px-4 py-2 border hover:bg-slate-50">
      Tornar a la botiga
    </RouterLink>
  </section>
</template>
