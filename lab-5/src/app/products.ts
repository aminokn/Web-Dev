export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image1: string;
  image2: string;
  image3: string;
  link: string;
  category : string;
  like : number;
}

export const products = [
  {
    id: 1,
    name: 'The Ordinary Niacinamide 10%+Zinc 1% сыворотка 30 мл',
    price: 4563,
    description: `тип: сыворотка
    действие: матирование, ,противовоспалительное, ,выравнивание, ,регенерация
    область нанесения: для лица
    тип кожи: проблемная
    страна производства: Канада`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h05/33287281410078/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/hc0/33287286620190/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/he8/33287304249374/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-5.jpg',
    link: 'https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/?c=750000000#!/item',
    rating: 5.0,
    category : "Кремы и сыворотки",
    like : 0
  },
  {
    id: 2,
    name: "A'pieu Madecassoside крем 50 мл",
    price: 3699,
    description: `тип: крем
    действие: питание, ,увлажнение
    область нанесения: для лица
    тип кожи: для всех типов
    страна производства: Корея`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h92/32556827934750/a-pieu-madecassoside-cream-50-ml-100396850-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h85/h79/46340608098334/a-pieu-madecassoside-cream-50-ml-100396850-3-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h35/32556837208094/a-pieu-madecassoside-cream-50-ml-100396850-4-Container.jpg',
    link: 'https://kaspi.kz/shop/p/a-pieu-madecassoside-krem-50-ml-100396850/?c=750000000#!/item',
    rating: 5.0,
    category : "Кремы и сыворотки",
    like : 0
  },
  {
    id: 3,
    name: 'MEDI-PEEL крем Volume Tox Peptide 9 для лица 50 мл',
    price: 5682 ,
    description: `тип: крем
    действие: увлажнение, ,регенерация, ,повышение упругости
    область нанесения: для лица
    тип кожи: проблемная
    страна производства: Корея`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/h55/32401916592158/medi-peel-peptide-9-volume-tox-50-ml-100106918-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/h50/32401920983070/medi-peel-peptide-9-volume-tox-50-ml-100106918-2-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h7f/32401925865502/medi-peel-peptide-9-volume-tox-50-ml-100106918-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/medi-peel-krem-volume-tox-peptide-9-dlja-litsa-50-ml-100106918/?c=750000000#!/item',
    rating: 5.0,
    category : "Кремы и сыворотки",
    like : 0
  },
  {
    id: 4,
    name: 'Heimish All Clean Balm бальзам 120 мл',
    price: 5737,
    description: `тип: бальзам
    объем: 120 мл
    тип кожи: для всех типов
    страна производства: Корея`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h7a/32773972426782/heimish-all-clean-balm-mnogofunkcionalnyj-dla-lica-120-ml-100341040-1-Container.jpg',
    image2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h9f/49837555187742/heimish-all-clean-balm-balzam-120-ml-100341040-2.jpg',
    image3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h4d/49837555646494/heimish-all-clean-balm-balzam-120-ml-100341040-3.jpg',
    link: 'https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=750000000#!/item',
    rating: 5.0,
    category : "Средства для умывания и очищения",
    like : 0
  },
  {
    id: 5,
    name: 'CeraVe Очищающий гель 236 мл',
    price: 8499,
    description: `тип: гель
    объем: 236 мл
    тип кожи: жирная, ,нормальная
    страна производства: Франция`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h41/h3a/34161202429982/cerave-ocisausij-gel-dla-zirnoj-kozi-236-ml-101592349-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h17/50275232481310/cerave-ocisausij-gel-236-ml-101592349-5.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h04/50275231563806/cerave-ocisausij-gel-236-ml-101592349-3.jpg',
    link: 'https://kaspi.kz/shop/p/cerave-ochischajuschii-gel-236-ml-101592349/?c=750000000#!/item',
    rating: 5,
    category : "Средства для умывания и очищения",
    like : 0
  },
  {
    id: 6,
    name: 'ISEHAN эссенция Sunkiller Perfect Water SPF50 50 мл',
    price: 6899,
    description: `тип: эссенция
    объем: 50 мл
    область нанесения: для лица
    возрастные ограничения: 20+
    тип кожи: для всех типов
    страна производства: Япония`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h75/49838050082846/isehan-sunkiller-perfect-water-essence-spf50-essentsiya-50-ml-100386249-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd7/49838050279454/isehan-sunkiller-perfect-water-essence-spf50-essentsiya-50-ml-100386249-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h85/ha9/47623506952222/isehan-sunkiller-perfect-water-essence-spf50-essentsiya-50-ml-100386249-3.jpg',
    link: 'https://kaspi.kz/shop/p/isehan-essentsija-sunkiller-perfect-water-spf50-50-ml-100386249/?c=750000000#!/item',
    rating: 5.0,
    category : "Средства для умывания и очищения",
    like : 0
  },
  {
    id: 7,
    name: 'Dr.Ceuracle Vegan Kombucha Tea Essence эссенция 150 мл',
    price: 9899,
    description: `тип: эссенция
    объем: 150 мл
    область нанесения: для лица
    возрастные ограничения: без ограничений
    тип кожи: для всех типов
    страна производства: Корея`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/h56/33701627232286/dr-ceuracle-vegan-kombucha-tea-essence-150-ml-101239735-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/had/33701635096606/dr-ceuracle-vegan-kombucha-tea-essence-150-ml-101239735-3-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/hcf/48943849406494/dr-ceuracle-vegan-kombucha-tea-essence-150-ml-101239735-2-Container.jpg',
    link: 'https://kaspi.kz/shop/p/dr-ceuracle-vegan-kombucha-tea-essence-essentsija-150-ml-101239735/?c=750000000#!/item',
    rating: 5.0,
    category : "Средства для умывания и очищения",
    like : 0
  },
  {
    id: 8,
    name: 'LANEIGE маска Lip Sleeping 3 мл',
    price: 999 ,
    description: `тип: маска
    эффект: восстановление
    уф-защита: отсутствует
    объем: 3 мл
    тип кожи: для всех типов
    страна производства: Южная Корея`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h99/h40/32919816405022/laneige-lip-sleeping-mask-set-3-g-100697657-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/hdd/49966018265118/laneige-lip-sleeping-mask-set-3-g-100697657-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/he0/49966018723870/laneige-lip-sleeping-mask-set-3-g-100697657-3.jpg',
    link: 'https://kaspi.kz/shop/p/laneige-maska-lip-sleeping-3-ml-100697657/?c=750000000#!/item',
    rating: 5.0,
    category : "Средства для ухода за кожей губ",
    like : 0
  },
  {
    id: 9,
    name: 'Патчи Farmstay гидрогелевые Collagen для глаз 60 шт',
    price: 3554 ,
    description: `вид патчей: гидрогелевые
    зона нанесения: для глаз
    действие: разглаживание, ,увлажнение, ,лифтинг, ,освежающий, ,от отеков, ,от темных кругов
    тип кожи: для всех типов
    страна производства: Корея`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/hc1/47606801334302/farmstay-collagen-water-full-hydrogel-eye-patch-90-st-100306796-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/hf0/47606801563678/farmstay-collagen-water-full-hydrogel-eye-patch-90-st-100306796-2-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h5a/47606802022430/farmstay-collagen-water-full-hydrogel-eye-patch-90-st-100306796-4-Container.jpg',
    link: 'https://kaspi.kz/shop/p/farmstay-gidrogelevye-collagen-dlja-glaz-60-sht-100306796/?c=750000000#!/item',
    rating: 5.0,
    category : "Скрабы и пилинги",
    like : 0
  },
  {
    id: 10,
    name: 'Christina Rose De Mer Peeling Soap пилинг для лица 30 мл',
    price: 7375,
    description: `HP LaserJet M141w 7MD74A`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/hce/33309687513118/christina-rose-de-mer-peeling-soap-30-ml-100627125-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/hc6/49917951672350/christina-rose-de-mer-peeling-soap-piling-dla-lica-30-ml-100627125-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/h81/49917952131102/christina-rose-de-mer-peeling-soap-piling-dla-lica-30-ml-100627125-3.jpg',
    link: 'https://kaspi.kz/shop/p/christina-rose-de-mer-peeling-soap-piling-dlja-litsa-30-ml-100627125/?c=750000000#!/item',
    rating: 5.0,
    category : "Скрабы и пилинги",
    like : 0
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/