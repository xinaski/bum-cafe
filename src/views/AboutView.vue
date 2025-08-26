<template>
  <section id="sobre-nosaltres" aria-labelledby="sobre-nosaltres-title" class="relative overflow-hidden">
    <img class="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96" 
          src="/about/img-about.jpg" alt="img de la iaia" />

    <div class="mx-auto max-w-5xl px-6 py-16">

      <p class="mb-1 text-3xl font-semibold tracking-wide uppercase md:mb-2 transform scale-x-125 origin-left">
       Sobre nosaltres
      </p>

      <p class="mt-6 text-lg leading-relaxed text-gray-700">
        Som els de <strong>BUM Cafè</strong> i sí: estem <em>greument</em> enamorats del cafè (cap remei possible). Ens agrada
        intens, amb cos i amb una història al darrere. Per això fa anys que caminem, volen i rodem pel món per trobar
        grans que valguin la pena — i ens n'hem pres unes quantes tasses pel camí.
      </p>

      <p class="mt-4 text-lg leading-relaxed text-gray-700">
        Hem visitat mercats plens de fum i colors, plantacions amagades a la muntanya i torrefactors que són temples.
        Hem rigut amb pagesos, hem après com qui no vol la cosa i hem tastat des de torrats suaus fins a cops a la taula.
        Tot, per portar-te un cafè amb <span class="font-semibold">caràcter i bona llet</span> (de la figurada, eh!).
      </p>

      <p class="mt-4 text-lg leading-relaxed text-gray-700">
        Som de <strong>Mataró</strong>, al cor del <strong>Maresme</strong>, però tenim ànima nòmada i el nas sempre buscant aroma.
        Aquí no hi trobaràs històries avorrides de “notes florals amb toc de caramel i nas d’ametlla”… aquí hi trobaràs cafè que 
        et fot fora del llit, cafè per despertar-te i fer-te dir: <strong>“Collons, quin cafè!”</strong>.
      </p>

      <p class="mt-4 text-lg leading-relaxed text-gray-700">
        Ens defineixen tres coses molt simples: fer-ho amb ganes, dir-ho sense filtres i cuidar el producte com si fos
        or. Si és <span class="font-semibold">BUM</span>, és perquè ho hem provat, remenat i triat amb criteri.
      </p>

      <!-- Valors / Punts claus -->
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 class="text-base font-semibold tracking-wide text-gray-900">Aventura</h3>
          <p class="mt-2 text-sm text-gray-600">Viatgem, tastem i descobrim. El món és gran i el bon cafè, també.</p>
        </div>
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 class="text-base font-semibold tracking-wide text-gray-900">Bon rotllo</h3>
          <p class="mt-2 text-sm text-gray-600">Som divertits i una mica gamberros. Aquí venim a gaudir, no a avorrir.</p>
        </div>
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 class="text-base font-semibold tracking-wide text-gray-900">Qualitat eco</h3>
          <p class="mt-2 text-sm text-gray-600">Orígens cuidats, traçabilitat i processos que respecten el planeta.</p>
        </div>
      </div>

      <!-- CTA opcional -->
      <div class="mt-12">
        <RouterLink to="/botiga" class="btn btn-primary">
          Coneix les nostres seleccions
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path fill-rule="evenodd" d="M4.5 12a.75.75 0 0 1 .75-.75h11.69l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.25A.75.75 0 0 1 4.5 12Z" clip-rule="evenodd" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component pur d'UI: enganxa'l on vulguis. No requereix props ni dependències.
</script>

<style scoped>
/* Ajusta si vols menys difuminat/contrast dels accents */
</style>
