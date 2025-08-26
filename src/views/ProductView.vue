<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { findBySlug, PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const router = useRouter()

const p = ref(null)            // producte actual
const qty = ref(1)             // quantitat seleccionada (fins que tinguem Pinia)
const imgError = ref(false)    // per fer fallback d’imatge si 404

function load(slug) {
  p.value = findBySlug(slug) || null
  imgError.value = false
  qty.value = 1
}

onMounted(() => load(route.params.slug))
watch(() => route.params.slug, s => load(s))

// Germanes: mateix 'nom' i 'tipus', altres formats/mides
const siblings = computed(() => {
  if (!p.value) return []
  return PRODUCTS.filter(x => x.tipus === p.value.tipus && x.nom === p.value.nom)
                 .sort((a,b) => (a.format || '').localeCompare(b.format || '') || (a.mida||a.unitats||0) - (b.mida||b.unitats||0))
})

// Productes relacionats: mateixa categoria però diferent producte
const related = computed(() => {
  if (!p.value) return []
  return PRODUCTS.filter(x => x.tipus === p.value.tipus && x.id !== p.value.id).slice(0, 3)
})

const tipusLabel = computed(() => {
  if (!p.value) return ''
  return p.value.tipus === 'collonut' ? 'COLLONUT' : p.value.tipus === 'espavilat' ? "ESPAVILA’T" : 'DE LA IAIA'
})

const formatLabel = computed(() => {
  if (!p.value) return ''
  if (p.value.format === 'capsules') return `càpsules (${p.value.unitats}u)`
  if (p.value.mida) return `${p.value.format} · ${p.value.mida}g`
  return p.value.format
})

function addToCart() {
  // Placeholder fins que muntem Pinia
  // Guarda una línia al localStorage perquè puguis veure que “entra”
  const key = 'bum-cart-demo'
  const current = JSON.parse(localStorage.getItem(key) || '[]')
  current.push({ id: p.value.id, slug: p.value.slug, qty: qty.value, price: p.value.preu })
  localStorage.setItem(key, JSON.stringify(current))
  alert('Afegit al carret 🛒 (demo)')
}

function onImgErr() {
  imgError.value = true
}
</script>

<template>
  <section class="container-page py-8">
    <!-- Not found -->
    <div v-if="!p" class="py-16 text-center">
      <p class="text-2xl font-bold mb-2">No hem trobat el producte</p>
      <p class="text-slate-600 mb-6">Potser s’ha mogut o el link no és correcte.</p>
      <RouterLink to="/botiga" class="btn btn-primary">Torna a la botiga</RouterLink>
    </div>

    <div v-else>
      <!-- Breadcrumbs -->
      <nav class="text-sm text-slate-500 mb-6">
        <RouterLink to="/" class="hover:underline">Inici</RouterLink>
        <span class="mx-2">/</span>
        <RouterLink to="/botiga" class="hover:underline">Botiga</RouterLink>
        <span class="mx-2">/</span>
        <span class="text-slate-700">{{ tipusLabel }}</span>
      </nav>

      <!-- Capçalera producte -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Imatge -->
        <div class="rounded-2xl border border-slate-200 overflow-hidden bg-white">
          <img
            v-if="!imgError && p.img"
            :src="p.img"
            :alt="p.desc || p.nom"
            class="w-full h-[360px] md:h-[480px] object-contain bg-white"
            @error="onImgErr"
          />
          <div v-else class="w-full h-[360px] md:h-[480px] grid place-items-center bg-slate-50 text-slate-500">
            Sense imatge
          </div>
        </div>

        <!-- Dades -->
        <div class="flex flex-col">
          <div class="mb-2">
            <span
              class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
              :class="{
                'bg-collonut/10 text-collonut': p.tipus==='collonut',
                'bg-espavilat/10 text-espavilat': p.tipus==='espavilat',
                'bg-delaiaia/10 text-delaiaia': p.tipus==='delaiaia'
              }"
            >
              {{ tipusLabel }}
            </span>
          </div>

          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-bum-base transform scale-x-125 origin-left">
            {{ p.nom }}
          </h1>

          <p class="text-slate-600 mt-3">{{ p.desc }}</p>

          <div class="mt-5 flex items-center gap-3">
            <span class="text-2xl font-bold">{{ p.preu.toFixed(2) }}€</span>
            <span class="text-sm text-slate-500">· {{ formatLabel }}</span>
          </div>

          <!-- Variants (altres formats/mides del mateix producte) -->
          <div v-if="siblings.length > 1" class="mt-6">
            <p class="text-sm text-slate-500 mb-2">Formats disponibles</p>
            <div class="flex flex-wrap gap-2">
              <RouterLink
                v-for="s in siblings"
                :key="s.id"
                :to="`/producte/${s.slug}`"
                class="px-3 py-1.5 rounded-xl border text-sm"
                :class="s.id === p.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-white hover:bg-slate-50 border-slate-300'"
              >
                <span v-if="s.format==='capsules'">càpsules ({{ s.unitats }}u)</span>
                <span v-else>{{ s.format }} · {{ s.mida }}g</span>
              </RouterLink>
            </div>
          </div>

          <!-- Controls compra -->
          <div class="mt-6 flex items-center gap-3">
            <label class="text-sm text-slate-600">Quantitat</label>
            <input
              v-model.number="qty"
              type="number"
              min="1"
              max="10"
              class="w-20 rounded-xl border px-3 py-2"
            />
          </div>

          <div class="mt-4 flex items-center gap-3">
            <button class="btn btn-primary" @click="addToCart">A dins del carro, collons!</button>
            <RouterLink to="/botiga" class="btn btn-ghost border-2">Continua comprant</RouterLink>
          </div>

          <!-- Info extra -->
          <ul class="mt-6 text-sm text-slate-600 space-y-1">
            <li>• Enviament 24-48h</li>
            <li>• Origen seleccionat i torrat recent</li>
            <li>• Compatible amb Nespresso® (càpsules)</li>
          </ul>
        </div>
      </div>

      <!-- Relacionats -->
      <section v-if="related.length" class="my-24">
        <h2 class="text-3xl font-semibold tracking-wide uppercase transform scale-x-125 origin-left">
          Et pot interessar
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard v-for="r in related" :key="r.id" :p="r" />
        </div>
      </section>
    </div>
  </section>
</template>

