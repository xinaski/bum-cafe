<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  slides: { type: Array, required: true },
  intervalMs: { type: Number, default: 4500 },
  startIndex: { type: Number, default: 0 },
  autoplay: { type: Boolean, default: true }
})

const idx = ref(props.startIndex)
const hovering = ref(false)
let timer = null

const total = computed(() => props.slides.length)
const current = computed(() => props.slides[idx.value] ?? null)

function next() { idx.value = (idx.value + 1) % total.value }
function prev() { idx.value = (idx.value - 1 + total.value) % total.value }
function go(i) { idx.value = i % total.value }

function play() {
  stop()
  if (!props.autoplay) return
  timer = setInterval(() => { if (!hovering.value) next() }, props.intervalMs)
}
function stop() { if (timer) { clearInterval(timer); timer = null } }

onMounted(play)
onBeforeUnmount(stop)
</script>

<template>
  <section
    class="relative overflow-hidden"
    aria-roledescription="carousel"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <!-- Slides wrapper (fixed height for layout stability) -->
    <div class="relative h-[300px] md:h-[500px]">
      <!-- Only one slide is visible; we still render all for transition -->
      <transition name="fade" mode="out-in">
        <article
          :key="current?.key ?? idx"
          class="absolute inset-0 grid md:grid-cols-2 gap-6 p-6 md:p-10"
          :aria-label="current?.title"
        >
          <!-- Left: copy -->
          <div class="flex flex-col justify-center">
            <!-- <p class="text-xs uppercase tracking-widest text-slate-500 mb-1">Categoria</p> -->
            <h2 class="text-3xl md:text-4xl font-bold font-bold transform scale-x-125 origin-left"
                :class="{
                  'text-collonut': current?.tone==='collonut',
                  'text-espavilat': current?.tone==='espavilat',
                  'text-delaiaia': current?.tone==='delaiaia'
                }">
              {{ current?.title }}
            </h2>
            <p class="text-slate-600 mt-2 md:mt-3">{{ current?.desc }}</p>
            <RouterLink
              :to="current?.to || '#'"
              class="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-2xl font-medium
                     bg-bum-accent text-white hover:brightness-95 focus:outline-none
                     focus:ring-2 focus:ring-bum-accent focus:ring-offset-2 w-max"
            >
              M'interessa molt fort
              <span aria-hidden>→</span>
            </RouterLink>
          </div>

          <!-- Right: imatge (o fallback de color) -->
          <div class="hidden md:block">
            <div class="h-full w-full rounded-xl overflow-hidden">
              <img
                v-if="current?.img"
                :src="current.img"
                :alt="current.imgAlt || current.title || ''"
                class="h-full w-full object-contain md:object-cover"
                loading="lazy"
                :sizes="'(min-width: 768px) 50vw, 100vw'"
              />
              <div
                v-else
                class="h-full w-full"
                :class="{
                  'bg-collonut/15': current?.tone==='collonut',
                  'bg-espavilat/15': current?.tone==='espavilat',
                  'bg-delaiaia/15': current?.tone==='delaiaia'
                }"
              />
            </div>
          </div>
        </article>
      </transition>
    </div>

    <!-- Controls -->
    <!-- <button
      class="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center size-9 rounded-full bg-white/90 border
             hover:bg-white focus:outline-none focus:ring-2 focus:ring-bum-accent"
      @click="prev" aria-label="Anterior">
      ‹
    </button>
    <button
      class="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center size-9 rounded-full bg-white/90 border
             hover:bg-white focus:outline-none focus:ring-2 focus:ring-bum-accent"
      @click="next" aria-label="Següent">
      ›
    </button> -->

    <!-- Dots -->
    <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2">
      <button
        v-for="(s,i) in slides" :key="s.key"
        class="w-2.5 h-2.5 rounded-full border"
        :class="i===idx ? 'bg-slate-900 border-slate-900' : 'bg-white/80 border-slate-300'"
        @click="go(i)"
        :aria-label="`Anar a ${s.title}`"
        :aria-current="i===idx ? 'true' : 'false'"
      />
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .45s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
