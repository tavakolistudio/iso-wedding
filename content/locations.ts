import type { LocationSpot } from "./types";

/**
 * The 9 featured Istanbul shoot locations. Written for organic search
 * relevance (Istanbul wedding photographer/videographer, pre-wedding &
 * couple photoshoot Istanbul) while staying editorial, not keyword-stuffed.
 */
export const locations: LocationSpot[] = [
  {
    id: "galata",
    slug: "galata",
    name: { en: "Galata", fa: "گالاتا", tr: "Galata" },
    description: {
      en: "Cobblestone streets, the iconic Galata Tower, and a skyline that mixes old and new — Galata is one of the most requested backdrops for couple photoshoots and pre-wedding photography in Istanbul.",
      fa: "کوچه‌های سنگ‌فرش، برج نمادین گالاتا و خط آسمانی که قدیم و جدید را در هم می‌آمیزد — گالاتا یکی از پرتقاضاترین لوکیشن‌ها برای عکاسی کاپل و عکاسی پره‌وداد در استانبول است.",
      tr: "Taş döşeli sokaklar, ikonik Galata Kulesi ve eskiyle yeniyi harmanlayan bir silüet — Galata, İstanbul'da çift çekimi ve pre-wedding fotoğrafçılığı için en çok talep edilen lokasyonlardan biridir.",
    },
    mood: {
      en: "Romantic, historic, effortlessly photogenic at any hour.",
      fa: "رومانتیک، تاریخی و در هر ساعتی از روز فوق‌العاده عکس‌پذیر.",
      tr: "Romantik, tarihi ve günün her saatinde fotojenik.",
    },
    image: "/images/locations/location-galata.svg",
    imageAlt: {
      en: "Galata Tower and the surrounding cobblestone streets of Istanbul",
      fa: "برج گالاتا و کوچه‌های سنگ‌فرش اطراف آن در استانبول",
      tr: "Galata Kulesi ve çevresindeki taş döşeli sokaklar",
    },
    samplePhotos: [
      "/images/portfolio/portfolio-01.jpg",
      "/images/portfolio/portfolio-02.jpg",
      "/images/portfolio/portfolio-03.jpg",
    ],
  },
  {
    id: "karakoy",
    slug: "karakoy",
    name: { en: "Karaköy", fa: "کاراکوی", tr: "Karaköy" },
    description: {
      en: "Once a working harbor, now Istanbul's most stylish waterfront district — Karaköy pairs industrial-chic architecture with sweeping views across the water, ideal for editorial-style wedding and couple sessions.",
      fa: "منطقه‌ای که زمانی بندری کاری بود و امروز شیک‌ترین محله ساحلی استانبول به‌شمار می‌رود — کاراکوی معماری صنعتی-شیک را با چشم‌اندازهای گسترده به آب ترکیب می‌کند و برای جلسات عکاسی عروسی و کاپل با حس‌وحال ادیتوریال ایده‌آل است.",
      tr: "Bir zamanlar çalışan bir liman olan Karaköy, şimdi İstanbul'un en şık sahil semti — endüstriyel-şık mimariyi suya açılan geniş manzaralarla birleştirerek editoryal tarzda düğün ve çift çekimleri için idealdir.",
    },
    mood: {
      en: "Urban, modern, quietly cinematic.",
      fa: "شهری، مدرن و آرام‌آرام سینمایی.",
      tr: "Kentsel, modern ve sessizce sinematik.",
    },
    image: "/images/locations/location-karakoy.svg",
    imageAlt: {
      en: "Karaköy waterfront district in Istanbul at dusk",
      fa: "محله ساحلی کاراکوی در استانبول هنگام غروب",
      tr: "Akşamüstü İstanbul Karaköy sahil semti",
    },
    samplePhotos: [
      "/images/portfolio/portfolio-04.jpg",
      "/images/portfolio/portfolio-05.jpg",
      "/images/portfolio/portfolio-06.jpg",
    ],
  },
  {
    id: "bosphorus",
    slug: "bosphorus",
    name: { en: "Bosphorus", fa: "بسفر", tr: "Boğaz" },
    description: {
      en: "No location says \"Istanbul\" quite like the Bosphorus. Its waterfront promenades and golden-hour light make it a signature setting for wedding photography and films across the city.",
      fa: "هیچ لوکیشنی به‌اندازه بسفر نماد استانبول نیست. پیاده‌روهای ساحلی و نور ساعت طلایی آن، این مکان را به یک لوکیشن شاخص برای عکاسی و فیلم‌برداری عروسی در سراسر شهر تبدیل کرده است.",
      tr: "Hiçbir lokasyon Boğaz kadar 'İstanbul' demez. Sahil yürüyüş yolları ve gün batımı ışığı, onu şehrin dört bir yanındaki düğün fotoğrafçılığı ve filmleri için imza bir mekan haline getiriyor.",
    },
    mood: {
      en: "Sweeping, golden, timeless.",
      fa: "گسترده، طلایی و بی‌زمان.",
      tr: "Geniş, altın rengi ve zamansız.",
    },
    image: "/images/locations/location-bosphorus.svg",
    imageAlt: {
      en: "Wide view of the Bosphorus strait in Istanbul at golden hour",
      fa: "نمای گسترده‌ای از بسفر در استانبول در ساعت طلایی",
      tr: "Gün batımında İstanbul Boğazı'nın geniş görünümü",
    },
    samplePhotos: [
      "/images/portfolio/portfolio-07.jpg",
      "/images/portfolio/portfolio-08.jpg",
      "/images/portfolio/portfolio-09.jpg",
    ],
  },
  {
    id: "ortakoy",
    slug: "ortakoy",
    name: { en: "Ortaköy", fa: "اورتاکوی", tr: "Ortaköy" },
    description: {
      en: "The domes of Ortaköy Mosque framed against the Bosphorus Bridge create one of Istanbul's most recognizable wedding photography backdrops, especially in the soft light of early evening.",
      fa: "گنبدهای مسجد اورتاکوی در قاب پل بسفر، یکی از شناخته‌شده‌ترین پس‌زمینه‌های عکاسی عروسی در استانبول را می‌سازد، به‌خصوص در نور ملایم اوایل عصر.",
      tr: "Ortaköy Camii'nin kubbeleri Boğaz Köprüsü'nü çevreleyerek, özellikle akşamüstünün yumuşak ışığında, İstanbul'un en tanınan düğün fotoğrafçılığı fonlarından birini oluşturuyor.",
    },
    mood: {
      en: "Iconic, elegant, postcard-cinematic.",
      fa: "نمادین، شیک و سینمایی همچون یک کارت‌پستال.",
      tr: "İkonik, zarif ve kartpostal gibi sinematik.",
    },
    image: "/images/locations/location-ortakoy.svg",
    imageAlt: {
      en: "Ortaköy Mosque with the Bosphorus Bridge in the background",
      fa: "مسجد اورتاکوی با پل بسفر در پس‌زمینه",
      tr: "Arka planda Boğaz Köprüsü ile Ortaköy Camii",
    },
    samplePhotos: [
      "/images/portfolio/portfolio-10.jpg",
      "/images/portfolio/portfolio-11.jpg",
      "/images/portfolio/portfolio-01.jpg",
    ],
  },
  {
    id: "balat",
    slug: "balat",
    name: { en: "Balat", fa: "بالات", tr: "Balat" },
    description: {
      en: "Pastel-colored houses, narrow alleys and decades of layered history make Balat a favorite for couples who want a more colorful, storybook feel to their pre-wedding photoshoot in Istanbul.",
      fa: "خانه‌های رنگی، کوچه‌های باریک و لایه‌های تاریخی چنددهه‌ای، بالات را به یکی از مکان‌های محبوب برای زوج‌هایی تبدیل کرده که می‌خواهند عکاسی پره‌وداد آن‌ها در استانبول حس‌وحالی رنگی و قصه‌مانند داشته باشد.",
      tr: "Pastel renkli evler, dar sokaklar ve katmanlı bir tarih — Balat, pre-wedding çekimlerinde daha renkli ve masalsı bir his isteyen çiftlerin gözdesi.",
    },
    mood: {
      en: "Colorful, nostalgic, full of character.",
      fa: "رنگارنگ، نوستالژیک و پر از شخصیت.",
      tr: "Renkli, nostaljik ve karakter dolu.",
    },
    image: "/images/locations/location-balat.svg",
    imageAlt: {
      en: "Colorful historic houses lining a narrow street in Balat, Istanbul",
      fa: "خانه‌های تاریخی رنگی در یک کوچه باریک در بالات، استانبول",
      tr: "Balat'ta dar bir sokakta renkli tarihi evler",
    },
    samplePhotos: [
      "/images/portfolio/portfolio-02.jpg",
      "/images/portfolio/portfolio-03.jpg",
      "/images/portfolio/portfolio-04.jpg",
    ],
  },
  {
    id: "sultanahmet",
    slug: "sultanahmet",
    name: { en: "Sultanahmet", fa: "سلطان‌احمد", tr: "Sultanahmet" },
    description: {
      en: "Home to Istanbul's most iconic skyline of domes and minarets, Sultanahmet offers a grand, historic setting for couples who want their wedding photography to feel timeless and monumental.",
      fa: "سلطان‌احمد که میزبان نمادین‌ترین خط آسمان استانبول با گنبدها و مناره‌هایش است، فضایی بزرگ و تاریخی برای زوج‌هایی فراهم می‌کند که می‌خواهند عکاسی عروسی‌شان حسی بی‌زمان و باشکوه داشته باشد.",
      tr: "İstanbul'un kubbeler ve minarelerden oluşan en ikonik silüetine ev sahipliği yapan Sultanahmet, düğün fotoğraflarının zamansız ve anıtsal hissetmesini isteyen çiftler için büyük ve tarihi bir mekan sunuyor.",
    },
    mood: {
      en: "Grand, historic, unmistakably Istanbul.",
      fa: "باشکوه، تاریخی و بی‌اشتباه استانبولی.",
      tr: "Anıtsal, tarihi ve tartışmasız İstanbul.",
    },
    image: "/images/locations/location-sultanahmet.svg",
    imageAlt: {
      en: "Domes and minarets of the Sultanahmet skyline in Istanbul",
      fa: "گنبدها و مناره‌های خط آسمان سلطان‌احمد در استانبول",
      tr: "İstanbul Sultanahmet silüetindeki kubbeler ve minareler",
    },
    samplePhotos: [
      "/images/portfolio/portfolio-05.jpg",
      "/images/portfolio/portfolio-06.jpg",
      "/images/portfolio/portfolio-07.jpg",
    ],
  },
  {
    id: "pierre-loti",
    slug: "pierre-loti",
    name: { en: "Pierre Loti Hill", fa: "تپه پیرلوتی", tr: "Pierre Loti Tepesi" },
    description: {
      en: "Reached by cable car above the Golden Horn, Pierre Loti Hill offers sweeping panoramic views that are especially striking at sunset — a quieter, more intimate choice for couple sessions.",
      fa: "تپه پیرلوتی که با تله‌کابین بر فراز شاخ طلایی قرار دارد، چشم‌اندازهای پانورامای گسترده‌ای را ارائه می‌دهد که به‌خصوص هنگام غروب آفتاب خیره‌کننده است — انتخابی آرام‌تر و خصوصی‌تر برای جلسات عکاسی کاپل.",
      tr: "Haliç'in üzerinde teleferikle ulaşılan Pierre Loti Tepesi, özellikle gün batımında etkileyici panoramik manzaralar sunar — çift çekimleri için daha sakin ve samimi bir seçim.",
    },
    mood: {
      en: "Elevated, peaceful, made for golden hour.",
      fa: "مرتفع، آرام و ساخته‌شده برای ساعت طلایی.",
      tr: "Yüksek, sakin ve gün batımı için yaratılmış.",
    },
    image: "/images/locations/location-pierre-loti.svg",
    imageAlt: {
      en: "Panoramic view of the Golden Horn from Pierre Loti Hill at sunset",
      fa: "چشم‌انداز پانورامای شاخ طلایی از تپه پیرلوتی هنگام غروب",
      tr: "Gün batımında Pierre Loti Tepesi'nden Haliç'in panoramik görünümü",
    },
    samplePhotos: [
      "/images/portfolio/portfolio-08.jpg",
      "/images/portfolio/portfolio-09.jpg",
      "/images/portfolio/portfolio-10.jpg",
    ],
  },
  {
    id: "rooftop-luxury-yacht",
    slug: "rooftop-luxury-yacht",
    name: {
      en: "Rooftops, Luxury Hotels & Yachts",
      fa: "روفتاپ، هتل‌های لوکس و قایق‌های اختصاصی",
      tr: "Çatı Katları, Lüks Oteller & Yatlar",
    },
    description: {
      en: "For couples who want the city skyline as their backdrop without the crowds, rooftop terraces, luxury hotel suites and private yachts on the Bosphorus offer an elevated, editorial setting for wedding and couple photography.",
      fa: "برای زوج‌هایی که می‌خواهند خط آسمان شهر را به‌عنوان پس‌زمینه داشته باشند، بدون ازدحام جمعیت — تراس‌های روفتاپ، سوییت‌های هتل‌های لوکس و قایق‌های خصوصی روی بسفر، فضایی والا و ادیتوریال برای عکاسی عروسی و کاپل فراهم می‌کنند.",
      tr: "Kalabalıktan uzak, şehir silüetini arka plan olarak isteyen çiftler için çatı katı terasları, lüks otel süitleri ve Boğaz'da özel yatlar, düğün ve çift fotoğrafçılığı için sofistike, editoryal bir ortam sunar.",
    },
    mood: {
      en: "Exclusive, polished, effortlessly luxurious.",
      fa: "اختصاصی، شیک و لوکس بدون تلاش اضافی.",
      tr: "Ayrıcalıklı, zarif ve zahmetsizce lüks.",
    },
    image: "/images/locations/location-rooftop-yacht.svg",
    imageAlt: {
      en: "Private rooftop terrace overlooking the Istanbul skyline at night",
      fa: "تراس خصوصی روفتاپ با چشم‌اندازی به خط آسمان استانبول در شب",
      tr: "Gece İstanbul silüetine bakan özel çatı katı terası",
    },
    samplePhotos: [
      "/images/portfolio/portfolio-11.jpg",
      "/images/portfolio/portfolio-01.jpg",
      "/images/portfolio/portfolio-02.jpg",
    ],
  },
  {
    id: "grand-hotel-de-londres",
    slug: "grand-hotel-de-londres",
    name: {
      en: "Grand Hotel de Londres",
      fa: "گرند هتل دو لندر",
      tr: "Grand Hotel de Londres",
    },
    description: {
      en: "A 19th-century boutique hotel in Pera, Grand Hotel de Londres is loved by photographers for its faded grandeur — gilded mirrors, antique furniture, caged birds and candlelit staircases. Its bohemian, vintage interiors make it one of Istanbul's most cinematic indoor settings for wedding photography, in any season and regardless of weather.",
      fa: "هتل بوتیک گرند هتل دو لندر، با قدمتی از قرن نوزدهم در محله پرا، در میان عکاسان به‌خاطر شکوه نوستالژیک خود شناخته شده است — آینه‌های طلاکوب، مبلمان عتیقه، قفس‌های پرنده و راه‌پله‌هایی در نور شمع. فضای داخلی بوهمیایی و وینتیج آن، این هتل را به یکی از سینمایی‌ترین لوکیشن‌های سرپوشیده استانبول برای عکاسی عروسی تبدیل کرده، در هر فصل و بدون نگرانی از آب‌وهوا.",
      tr: "Pera'da 19. yüzyıldan kalma butik bir otel olan Grand Hotel de Londres (Büyük Londra Oteli), yaldızlı aynaları, antika mobilyaları, kuş kafesleri ve mum ışığıyla aydınlanan merdivenleriyle fotoğrafçılar arasında nostaljik zarafetiyle tanınır. Bohem ve vintage iç mekanları, onu İstanbul'un mevsimden ve hava koşulundan bağımsız en sinematik kapalı mekan düğün fotoğrafçılığı lokasyonlarından biri yapar.",
    },
    mood: {
      en: "Antique, bohemian, unmistakably nostalgic.",
      fa: "عتیقه‌ای، بوهمیایی و غرق در نوستالژی.",
      tr: "Antika, bohem ve nostaljik bir zarafet.",
    },
    image: "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-01.jpg",
    imageAlt: {
      en: "Bride and groom on the antique staircase of Grand Hotel de Londres in Istanbul",
      fa: "عروس و داماد روی راه‌پله عتیقه گرند هتل دو لندر در استانبول",
      tr: "İstanbul'daki Grand Hotel de Londres'in antika merdivenlerinde gelin ve damat",
    },
    samplePhotos: [
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-02.jpg",
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-03.jpg",
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-04.jpg",
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-05.jpg",
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-06.jpg",
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-07.jpg",
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-08.jpg",
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-09.jpg",
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-10.jpg",
      "/images/locations/grand-hotel-de-londres/grand-hotel-de-londres-11.jpg",
    ],
  },
];

export function getLocationBySlug(slug: string): LocationSpot | undefined {
  return locations.find((location) => location.slug === slug);
}
