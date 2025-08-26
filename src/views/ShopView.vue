<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PRODUCTS, TIPUS, FORMATS } from '../data/products'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const router = useRouter()

// Estat de filtres
const tipus = ref('')
const format = ref('')

// 1) URL → Estat (quan canvia la query, actualitza selects)
watch(
  () => route.query,
  (q) => {
    tipus.value = typeof q.tipus === 'string' ? q.tipus : ''
    format.value = typeof q.format === 'string' ? q.format : ''
  },
  { immediate: true } // inicialitza des de la URL al carregar
)

// 2) Estat → URL (quan canvien els selects, actualitza la query només si cal)
watch([tipus, format], ([t, f]) => {
  const next = {}
  if (t) next.tipus = t
  if (f) next.format = f

  const curr = route.query || {}
  const same =
    (curr.tipus ?? '') === (next.tipus ?? '') &&
    (curr.format ?? '') === (next.format ?? '')

  if (!same) router.replace({ query: next })
})

// Productes filtrats
const filtered = computed(() =>
  PRODUCTS.filter(p =>
    (!tipus.value || p.tipus === tipus.value) &&
    (!format.value || p.format === format.value)
  )
)
</script>

<template>
  <section class="container-page py-8">
    <h1 class="text-2xl font-bold mb-4">Botiga</h1>

    <!-- Filtres -->
    <div class="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select v-model="tipus" class="border rounded-2xl px-3 py-2">
        <option value="">Tots els tipus</option>
        <option v-for="t in TIPUS" :key="t" :value="t">
          {{ t === 'collonut' ? 'COLLONUT' : t === 'espavilat' ? "ESPAVILA'T" : 'DE LA IAIA' }}
        </option>
      </select>

      <select v-model="format" class="border rounded-2xl px-3 py-2">
        <option value="">Tots els formats</option>
        <option v-for="f in FORMATS" :key="f" :value="f">
          {{ f === 'capsules' ? 'càpsules' : f }}
        </option>
      </select>

      <button @click="tipus=''; format='';"
              class="border rounded-2xl px-3 py-2 hover:bg-slate-50 text-left">
        Neteja filtres
      </button>
    </div>

    <!-- Comptador -->
    <p class="text-sm text-slate-500 mb-3">
      #productes: {{ filtered.length }}
    </p>

    <!-- Llistat de targetes -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard v-for="p in filtered" :key="p.id" :p="p" />
    </div>

    <figure v-if="filtered.length === 0" class="text-center py-10">
       <img class="object-cover w-full h-96 rounded xl:h-96 my-6"
        src="/miscelanea/img-noproduct.png"
        alt="No hi ha productes"
      />
      <figcaption class="text-base text-gray-700 md:text-xl">
        No hi ha productes amb aquests filtres.
      </figcaption>
    </figure>

  </section>

</template>