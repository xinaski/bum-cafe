// Tipologies per a filtres
export const MERCH_TYPES = [
  'cafetera', 'aeropress', 'french-press', 'molinet',
  'tassa-esmaltada', 'mug', 'got-termic', 'tassa-vidre',
  'tote', 'samarreta', 'gorra', 'beanie', 'adhesius',
  'frother', 'balanca', 'filtres', 'kit-cata'
]

// Catàleg de merch
export const MERCH = [
  // 🔥 Essentials
  { id: 'mk-moka-inox',      slug: 'cafetera-italiana-inox', categoria: 'merch', tipus: 'cafetera',     nom: 'Cafetera italiana inox',          preu: 29.90, desc: 'Moka clàssica d’acer inoxidable (3 tasses).',                    img: '/merch/cafetera-moka-inox.png' },
  { id: 'mk-aeropress',      slug: 'aeropress',               categoria: 'merch', tipus: 'aeropress',   nom: 'AeroPress',                        preu: 39.90, desc: 'Cafè net i aromàtic en 2 minuts. Pack complet.',               img: '/merch/aeropress.png' },
  { id: 'mk-french-press',   slug: 'french-press-600ml',      categoria: 'merch', tipus: 'french-press',nom: 'French Press 600 ml',              preu: 24.90, desc: 'Clàssica, senzilla i robusta per infusionar cafè.',            img: '/merch/french-press.png' },
  { id: 'mk-molinet',        slug: 'molinet-manual',          categoria: 'merch', tipus: 'molinet',     nom: 'Molinet manual',                    preu: 34.90, desc: 'Compacte, ajustable i portable. Ideal per viatjar.',            img: '/merch/molinet-manual.png' },

  // ☕️ Tasses i gots
  { id: 'mk-tassa-esmalt',   slug: 'tassa-esmaltada-bum',     categoria: 'merch', tipus: 'tassa-esmaltada', nom: 'Tassa esmaltada B·U·M',       preu: 12.90, desc: 'Vintage amb logo B·U·M. Resistència de campanya.',              img: '/merch/tassa-esmaltada.png' },
  { id: 'mk-mug-gamberro',   slug: 'mug-espavilat',           categoria: 'merch', tipus: 'mug',         nom: 'Mug “ESPAVILA’T”',                 preu: 14.90, desc: 'Ceràmica, apte microones i rentaplats. Frases gamberres.',      img: '/merch/mug-espavilat.png' },
  { id: 'mk-got-termic',     slug: 'got-termic-reutilitzable',categoria: 'merch', tipus: 'got-termic',  nom: 'Got tèrmic reutilitzable',          preu: 19.90, desc: 'Aïllat, tapa hermètica i eco-friendly. Per portar-lo a tot arreu.', img: '/merch/got-termic.png' },
  { id: 'mk-tassa-vidre',    slug: 'tassa-vidre-doble',       categoria: 'merch', tipus: 'tassa-vidre', nom: 'Tassa de vidre doble',             preu: 16.90, desc: 'Premium, paret doble. Ideal per latte art i fotos.',           img: '/merch/tassa-vidre-doble.png' },

  // 🌍 Lifestyle & Merch
  { id: 'mk-tote',           slug: 'tote-gamberra',           categoria: 'merch', tipus: 'tote',        nom: 'Tote “Porto cafè i mala llet”',    preu: 11.90, desc: 'Cotó gruixut, serigrafia de qualitat. Resistència top.',        img: '/merch/tote.png' },
  { id: 'mk-samarreta',      slug: 'samarreta-bum',           categoria: 'merch', tipus: 'samarreta',   nom: 'Samarreta B·U·M',                  preu: 19.90, desc: 'Unisex, cotó 100%, branding canyer.',                           img: '/merch/samarreta.png' },
  { id: 'mk-gorra',          slug: 'gorra-bum',               categoria: 'merch', tipus: 'gorra',       nom: 'Gorra B·U·M',                      preu: 17.90, desc: 'Branding subtil i net. Ajustable.',                              img: '/merch/gorra.png' },
  { id: 'mk-beanie',         slug: 'beanie-bum',              categoria: 'merch', tipus: 'beanie',      nom: 'Beanie B·U·M',                     preu: 17.90, desc: 'Càlid i minimalista. Te’l treuràs poc.',                         img: '/merch/beanie.png' },
  { id: 'mk-adhesius',       slug: 'adhesius-bum-pack',       categoria: 'merch', tipus: 'adhesius',    nom: 'Pack adhesius BUM',                 preu: 4.90,  desc: 'Col·leccionables i canyers. Pack variat.',                        img: '/merch/adhesius-pack.png' },

  // 🤘 Per frikis del cafè
  { id: 'mk-frother',        slug: 'escuma-llet-usb',         categoria: 'merch', tipus: 'frother',     nom: 'Escuma de llet USB',               preu: 13.90, desc: 'Capuccinos a casa sense misteri. USB recarregable.',            img: '/merch/frother-usb.png' },
  { id: 'mk-balanca',        slug: 'balanca-digital',         categoria: 'merch', tipus: 'balanca',     nom: 'Balança digital compacta',         preu: 22.90, desc: 'Precisa al gram. Temporitzador i tare.',                         img: '/merch/balanca.png' },
  { id: 'mk-filtres-v60',    slug: 'filtres-v60-eco-100',     categoria: 'merch', tipus: 'filtres',     nom: 'Filtres V60 eco (100u)',           preu: 6.90,  desc: 'Paper eco, flux constant i sabor net.',                           img: '/merch/filtres-v60.png' },
  { id: 'mk-kit-cata',       slug: 'kit-cata-bum',            categoria: 'merch', tipus: 'kit-cata',    nom: 'Kit de cata BUM',                  preu: 29.00, desc: 'Cullerot, tassa i guia “fes-te barista”.',                       img: '/merch/kit-cata.png' },
]
