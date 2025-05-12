let myDishes = [
  {
    "name": "Moussaka",
    "price": 8.99,
    "description": "Ein herzhafter Auflauf aus geschichteten Auberginen, gewürztem Hackfleisch, Tomatensauce und einer cremigen Béchamelsauce, überbacken im Ofen.",
  },
  {
    "name": "Souvlaki",
    "price": 9.99,
    "description": "Gegrillte Fleischspieße, serviert mit Fladenbrot, Pommes, Gemüse und oft Tzatziki, ein klassisches Streetfood.",
  },
  {
    "name": "Gyros",
    "price": 8.99,
    "description": "Am Spieß gegartes, dünn aufgeschnittenes Fleisch (ähnlich Döner), serviert im Pita-Brot mit Zwiebeln, Tomaten, Pommes und Tzatziki.",
  },
  {
    "name": "Dolmades",
    "price": 12.99,
    "description": "Mit gewürztem Reis gefüllte Weinblätter, oft kalt serviert mit Zitrone oder warm als Teil eines Hauptgerichts.",
  },
  {
    "name": "Spanakopita",
    "price": 2.50,
    "description": "Knuspriger Filoteig, gefüllt mit Spinat, Feta-Käse, Zwiebeln und Kräutern, ein beliebter Snack oder leichtes Mittagessen.",
  },
  {
    "name": "Horiatiki",
    "price": 13.50,
    "description": "Ein frischer Salat aus Tomaten, Gurken, roten Zwiebeln, Oliven und einem dicken Stück Feta-Käse, gewürzt mit Oregano und Olivenöl, ohne Blattsalat.",
  },
  {
    "name": "Kleftiko",
    "price": 18.50,
    "description": "Langsam geschmortes Lammfleisch mit Knoblauch, Zitronensaft und Kräutern, traditionell in Papier oder Ton gegart, zart und aromatisch.",
  },
  {
    "name": "Fasolada",
    "price": 5.99,
    "description": "Eine nahrhafte Bohnensuppe aus weißen Bohnen, Tomaten, Karotten, Sellerie und Olivenöl, gilt als griechisches Nationalgericht.",
  },
]

let myDrinks = [
  {
    "name": "Ellinikós kafés",
    "price": 2.50,
    "description": "Ein starker, ungesüßter Kaffee, der in einem kleinen Kupferkrug (Brezel) zubereitet wird. Er hat eine dicke, samtige Crema und enthält oft den Kaffeesatz.",
  },
  {
    "name": "Frappe",
    "price": 3.00,
    "description": "Ein eisgekühlter Instantkaffee, der in Griechenland besonders im Sommer sehr beliebt ist. Er wird in einem Shaker mit Eis und Zucker gemixt, sodass er schön schaumig wird.",
  },
  {
    "name": "Freddo Espresso",
    "price": 3.50,
    "description": "Ein kalter Espresso, der mit Eis gemischt wird, um ein erfrischendes Sommergetränk zu bieten. Der Espresso wird in der Regel mit etwas Zucker serviert.",
  },
  {
    "name": "Freddo Cappuccino",
    "price": 4.00,
    "description": "Eine kalte Variante des klassischen Cappuccinos, mit einem Schuss kaltem Espresso und aufgeschäumter kalter Milch. Sehr beliebt an heißen Tagen.",
  },
  {
    "name": "Lemonada",
    "price": 2.99,
    "description": "Eine erfrischende Limonade aus frischem Zitronensaft, Zucker und Wasser, oft mit Eiswürfeln serviert. Perfekt, um sich an heißen Tagen zu erfrischen.",
  },
  {
    "name": "Tonic Water",
    "price": 2.50,
    "description": "Ein prickelndes Getränk mit einem bitteren Geschmack, das oft als Mixer in Cocktails verwendet wird, aber auch allein genossen werden kann.",
  },
  {
    "name": "Fruchtsäfte",
    "price": 3.50,
    "description": "Frisch gepresste Säfte aus verschiedenen Früchten wie Orange, Granatapfel oder Mango, die in Griechenland oft frisch und direkt serviert werden.",
  },
  {
    "name": "Ouzo",
    "price": 4.50,
    "description": "Ein traditioneller griechischer Anis-Aperitif, der meist mit Wasser und Eis serviert wird. Ouzo hat einen einzigartigen, aromatischen Geschmack und ist ein beliebtes Getränk zu Meze.",
  },
  {
    "name": "Retsina",
    "price": 4.00,
    "description": "Ein griechischer Weißwein, der mit Harz aromatisiert wird und einen speziellen, harzigen Geschmack hat. Sehr typisch für Griechenland.",
  },
  {
    "name": "Metaxa",
    "price": 5.99,
    "description": "Ein griechischer Brandy, der aus Weinbrand und einer speziellen Kräutermischung besteht. Metaxa wird oft als Digestif nach dem Essen genossen und hat einen milden, aber komplexen Geschmack.",
  },
]

let myDesserts = [
  {
    "name": "Baklava",
    "price": 3.50,
    "description": "Süßes Schichtgebäck aus hauchdünnem Filoteig, gefüllt mit gehackten Nüssen (meist Walnüsse oder Pistazien) und getränkt in Honig- oder Zuckersirup.",
  },
  {
    "name": "Galaktoboureko",
    "price": 4.00,
    "description": "Cremiger Grießpudding in Filoteig, im Ofen gebacken und mit Zitronen-Zuckersirup übergossen, warm serviert besonders köstlich.",
  },
  {
    "name": "Loukoumades",
    "price": 3.50,
    "description": "Kleine frittierte Teigbällchen, serviert mit Honig, Zimt und oft mit gehackten Nüssen, quasi „griechische Donuts“.",
  },
  {
    "name": "Kataifi",
    "price": 4.00,
    "description": "Ähnlich wie Baklava, aber mit feinen „Engelshaar“-Teigfäden, gefüllt mit Nüssen und getränkt in Sirup, sehr knusprig und süß.",
  },
  {
    "name": "Halva",
    "price": 2.99,
    "description": "Ein festes, süßes Dessert aus Grieß, Zucker, Öl und Nüssen, oft zimtig und mit Mandeln serviert.",
  },
  {
    "name": "Rizogalo",
    "price": 3.00,
    "description": "Cremiger Milchreis mit Zimt bestreut, oft gekühlt serviert, schlicht, aber sehr beliebt.",
  },
  {
    "name": "Bougatsa",
    "price": 3.50,
    "description": "Knuspriger Filoteig, gefüllt mit Vanillecreme oder süßem Grieß, serviert mit Puderzucker und Zimt, oft zum Frühstück gegessen.",
  },
  {
    "name": "Melomakarona",
    "price": 2.50,
    "description": "Weiche Weihnachtskekse aus Grieß und Honig, mit Orangenschale und Zimt aromatisiert, in Honigsirup getränkt.",
  },
  {
    "name": "Pasteli",
    "price": 2.00,
    "description": "Knapper Honig-Sesam-Riegel, oft mit Mandeln oder Pistazien, ein traditioneller, gesunder Snack.",
  },
  {
    "name": "Yiaourti me Meli",
    "price": 3.99,
    "description": "Griechischer Joghurt, serviert mit hochwertigem Honig und Walnüssen, einfach, aber sehr typisch und sättigend.",
  },
]