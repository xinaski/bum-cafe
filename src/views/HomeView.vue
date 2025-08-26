<template>

  <section class="bg-center bg-no-repeat bg-[url('/home/img-home2.png')] bg-gray-600 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 space-y-6">
      <img src="/brand/logo-square.svg" alt="BUM CAFÈ logo" class="h-32 text-center mx-auto" />
      <p class="text-2xl font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48 font-bold transform scale-x-125">El cafè que et desperta la vida</p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 space-x-3">
        <RouterLink to="/botiga" class="btn btn-primary">Deixa'm veure aquest coi de cafè</RouterLink>
        <RouterLink to="/sobre" class="btn btn-ghos text-white border border-white">Coneix la marca</RouterLink>
      </div>
    </div>
  </section>

  <section class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
      <p class="mb-1 text-3xl font-semibold tracking-wide uppercase md:mb-2 transform scale-x-125">
       TRIA EL TEU BUM!
      </p>
      <p class="text-base text-gray-700 md:text-lg">
        Siguis de Collonut, d’Espavila't o de la Iaia, aquí tens el cafè que et farà companyia. En gra, molt o en càpsules.
      </p>
    </div>
    <div class="grid gap-6 row-gap-5 lg:grid-cols-3">

      <RouterLink to="/botiga?tipus=collonut" class="block rounded-2xl bg-white p-5 hover:bg-gray-50 hover:shadow-md transform transition duration-300 hover:scale-105">
        <div class="text-center">
          <img class="object-cover w-full h-96 rounded lg:h-80 xl:h-96" 
          src="/product/collonut/product01-collonut.png" alt="img collonut" />
          <h5 class="mb-2 text-lg font-bold leading-none sm:text-xl transform scale-x-125">
            COLLONUT
          </h5>
          <p class="text-gray-700 mb-3">
            El nostre deluxe. Cafè premium, potent i sense tonteries.
          </p>
          <RouterLink to="/botiga?tipus=collonut" class="btn btn-primary">Fot-me’l a casa!</RouterLink>
        </div>
      </RouterLink>

      <RouterLink to="/botiga?tipus=espavilat" class="block rounded-2xl bg-white p-5 hover:bg-gray-50 hover:shadow-md transform transition duration-300 hover:scale-105">
       <div class="text-center">
          <img class="object-cover w-full h-96 rounded lg:h-80 xl:h-96" 
          src="/product/espavilat/product01-espavilat.png" alt="img espavila't" />
          <h5 class="mb-2 text-lg font-bold leading-none sm:text-xl transform scale-x-125">
            ESPAVILA’T
          </h5>
          <p class="text-gray-700 mb-3">
            El cafè de cada dia: honest, directe i amb la patada justa.
          </p>
          <RouterLink to="/botiga?tipus=espavilat" class="btn btn-primary">Espavila’m, collons!</RouterLink>
        </div>
      </RouterLink>

       <RouterLink to="/botiga?tipus=delaiaia" class="block rounded-2xl bg-white p-5 hover:bg-gray-50 hover:shadow-md transform transition duration-300 hover:scale-105">
        <div class="text-center">
          <img class="object-cover w-full h-96 rounded lg:h-80 xl:h-96" 
          src="/product/delaiaia/product01-iaia.png" alt="img de la iaia" />
          <h5 class="mb-2 text-lg font-bold leading-none sm:text-xl transform scale-x-125">
            DE LA IAIA
          </h5>
          <p class="text-gray-700 mb-3">
            Descafeïnat amb bon rotllo. Per quan vols cafè, però també dormir.
          </p>
          <RouterLink to="/botiga?tipus=delaiaia" class="btn btn-primary">Amb amor de la iaia</RouterLink>
        </div>
      </RouterLink>
     
    </div>
  </section>

  <section class="bg-bum-cream section block w-full min-w-0 overflow-hidden px-4 py-16">
    <CategoryCarousel :slides="slides" :intervalMs="4800" class="container-page" />
  </section>
  
</template>

<script setup>
import CategoryCarousel from '../components/CategoryCarousel.vue'

const slides = [
  {
    key: 'collonut',
    title: 'COLLONUT',
    desc: 'Aquest és el nostre cafè deluxe, el que et fa aixecar les celles només obrir el paquet. Fort, intens i amb cos, però sense perdre elegància. El Cullonut no és per als fluixos: és per a qui vol començar el dia amb un cop de puny de sabor i dir ben alt: “això sí que és cafè, collons!”',
    to: '/botiga?tipus=collonut',
    tone: 'collonut',
    img: '/product/collonut/pack-collonut.png',
    imgAlt: 'Paquet COLLONUT'
  },
  {
    key: 'espavilat',
    title: "ESPAVILA’T",
    desc: 'El cafè del dia a dia, el que et salva al matí, a la migdiada i fins i tot a les reunions avorrides. És directe, honest i et fot fora del llit sense contemplacions. Ni massa fort ni massa fluix, és el company perfecte per quan necessites una empenta i vols deixar de fer el gos. Un cafè normal? No: el cafè que t’espavila de debò.',
    to: '/botiga?tipus=espavilat',
    tone: 'espavilat',
    img: '/product/espavilat/pack-espavilat.png',
    imgAlt: "Paquet ESPAVILA'T"
  },
  {
    key: 'delaiaia',
    title: 'DE LA IAIA',
    desc: 'El nostre descafeïnat no és cap broma. És suau, tendre i té aquell punt de carinyo que et recorda quan la iaia et feia un cafetó a mitja tarda. Sí, no et posarà a saltar com un boig, però et donarà el gust de cafè de veritat sense les revolucions de la cafeïna. Ideal per després de sopar, o quan vols dormir però encara vols sentir-te part de la festa.',
    to: '/botiga?tipus=delaiaia',
    tone: 'delaiaia',
    img: '/product/delaiaia/pack-delaiaia.png',
    imgAlt: 'Paquet DE LA IAIA'
  },
]
</script>