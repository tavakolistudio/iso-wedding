/**
 * Sitewide brand identity, contact details, founder bios, shared UI
 * strings, and per-page static copy. This is the first file to open when
 * updating text anywhere on the site — see README.md for the full guide.
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://iso-wedding.vercel.app";

export const brand = {
  name: "ISO Wedding",
  parentBrand: "Tavakoli Studio",
  tagline: {
    en: "Cinematic Wedding Photography & Films in Istanbul",
    fa: "عکاسی و فیلم‌برداری سینمایی عروسی در استانبول",
    tr: "İstanbul'da Sinematik Düğün Fotoğrafçılığı & Filmleri",
  },
  logo: "/images/logo-mark.png",
};

export const contact = {
  whatsappDisplay: "+90 501 696 7777",
  /** Digits-only, used to build wa.me links. */
  whatsappDigits: "905016967777",
  instagramHandle: "@tavakolistudio",
  instagramUrl: "https://instagram.com/tavakolistudio",
  email: "tavakolipix@gmail.com",
};

export const founders = [
  {
    id: "mohammad",
    name: { en: "Mohammad Tavakoli", fa: "Mohammad Tavakoli", tr: "Mohammad Tavakoli" },
    role: {
      en: "Photographer & Filmmaker",
      fa: "عکاس و فیلم‌ساز",
      tr: "Fotoğrafçı & Film Yapımcısı",
    },
    bio: {
      en: "Mohammad is an Iranian photographer and filmmaker with more than 20 years of experience across photography, filmmaking and visual storytelling. Over two decades, his work has moved from journalistic image-making to the intimate, cinematic visual language that now defines ISO Wedding. He approaches every wedding the way he would a film set — reading light, anticipating moments, and staying close enough to capture what's real without ever getting in the way of it.",
      fa: "محمد عکاس و فیلم‌ساز ایرانی با بیش از ۲۰ سال تجربه در عکاسی، فیلم‌سازی و روایت‌گری بصری است. در طول دو دهه، کار او از عکاسی خبری به سوی زبان بصری صمیمی و سینمایی‌ای حرکت کرده که امروز هویت ISO Wedding را شکل می‌دهد. او به هر عروسی همان‌گونه نزدیک می‌شود که به یک پلاتوی فیلم‌برداری — نور را می‌خوانَد، لحظات را پیش‌بینی می‌کند و آن‌قدر نزدیک می‌ماند که واقعیت را ثبت کند، بدون آنکه هرگز مانع آن شود.",
      tr: "Mohammad, fotoğrafçılık, film yapımcılığı ve görsel hikaye anlatıcılığında 20 yılı aşkın deneyime sahip İranlı bir fotoğrafçı ve film yapımcısıdır. İki on yıl boyunca çalışmaları, gazetecilik tarzı görüntü üretiminden, bugün ISO Wedding'i tanımlayan samimi ve sinematik görsel dile doğru evrildi. Her düğüne bir film setine yaklaştığı gibi yaklaşır — ışığı okur, anları önceden sezer ve gerçek olanı yakalayacak kadar yakın durup asla önüne geçmez.",
    },
    image: "/images/about/about-mohammad-tavakoli.svg",
  },
  {
    id: "mahtab",
    name: { en: "Mahtab Behrayan", fa: "مهتاب بهریان", tr: "Mahtab Behrayan" },
    role: {
      en: "Creative Director & Writer",
      fa: "مدیر خلاق و نویسنده",
      tr: "Yaratıcı Direktör & Yazar",
    },
    bio: {
      en: "Mahtab is a creative director, writer and idea strategist with a strong narrative and artistic vision. She shapes the story behind every shoot long before a single frame is captured — from the mood and pacing of a wedding film to the words that accompany it. Her background in writing and ideation brings a layer of meaning to the studio's work that goes beyond the visual, turning each project into something closer to a short story than a photo set.",
      fa: "مهتاب مدیر خلاق، نویسنده و استراتژیست ایده با چشم‌اندازی روایی و هنری قوی است. او داستان پشت هر جلسه عکاسی را مدت‌ها پیش از ثبت اولین قاب شکل می‌دهد — از فضا و ریتم یک فیلم عروسی تا کلماتی که همراه آن می‌آیند. پیشینه او در نویسندگی و ایده‌پردازی، لایه‌ای از معنا به کار استودیو می‌افزاید که فراتر از تصویر است و هر پروژه را به چیزی نزدیک‌تر به یک داستان کوتاه تبدیل می‌کند تا یک ست عکاسی.",
      tr: "Mahtab, güçlü bir anlatı ve sanatsal vizyona sahip bir yaratıcı direktör, yazar ve fikir stratejistidir. Her çekimin ardındaki hikayeyi, ilk kare çekilmeden çok önce şekillendirir — bir düğün filminin atmosferinden ve temposundan, ona eşlik eden kelimelere kadar. Yazarlık ve fikir geliştirme geçmişi, stüdyonun çalışmalarına görselin ötesinde bir anlam katmanı ekler ve her projeyi bir fotoğraf setinden çok kısa bir hikayeye yaklaştırır.",
    },
    image: "/images/about/about-mahtab-behrayan.svg",
  },
];

/** Short, generic strings reused across multiple pages/components. */
export const ui = {
  viewGallery: { en: "View Gallery", fa: "مشاهده گالری", tr: "Galeriyi Görüntüle" },
  checkAvailability: {
    en: "Check Availability on WhatsApp",
    fa: "بررسی زمان‌های خالی در واتساپ",
    tr: "WhatsApp'tan Uygunluk Sorun",
  },
  /** Short form for tight spaces — the header CTA pill and mobile nav drawer. */
  checkAvailabilityShort: {
    en: "Check Availability",
    fa: "بررسی زمان‌های خالی",
    tr: "Uygunluk Sor",
  },
  /** Shared between the hero primary CTA and the fixed bottom nav pill. */
  startChat: { en: "Start a chat", fa: "شروع گفتگو", tr: "Sohbet Başlat" },
  sendMessage: { en: "Send a Message", fa: "ارسال پیام", tr: "Mesaj Gönderin" },
  learnMore: { en: "Learn More", fa: "بیشتر بدانید", tr: "Daha Fazla Bilgi" },
  readMore: { en: "Read More", fa: "ادامه مطلب", tr: "Devamını Oku" },
  bookOnWhatsapp: { en: "Book on WhatsApp", fa: "رزرو در واتساپ", tr: "WhatsApp'tan Rezervasyon" },
  backToHome: { en: "Back to Home", fa: "بازگشت به خانه", tr: "Ana Sayfaya Dön" },
  backToLocations: { en: "Back to Locations", fa: "بازگشت به لوکیشن‌ها", tr: "Lokasyonlara Dön" },
  allLabel: { en: "All", fa: "همه", tr: "Tümü" },
  photoSpotsHeading: {
    en: "Photo Spots in This Area",
    fa: "نقاط عکاسی در این منطقه",
    tr: "Bu Bölgedeki Çekim Noktaları",
  },
};

export const pages = {
  home: {
    seo: {
      title: {
        en: "ISO Wedding | Wedding Photographer & Videographer in Istanbul",
        fa: "ISO Wedding | عکاس و فیلم‌بردار عروسی در استانبول",
        tr: "ISO Wedding | İstanbul'da Düğün Fotoğrafçısı & Videografı",
      },
      description: {
        en: "Premium wedding photography, wedding films, pre-wedding and couple shoots in Istanbul. Cinematic storytelling by ISO Wedding, a Tavakoli Studio brand.",
        fa: "عکاسی، فیلم‌برداری عروسی، عکاسی پره‌وداد و جلسات کاپل پریمیوم در استانبول. روایت‌گری سینمایی توسط ISO Wedding، برندی از Tavakoli Studio.",
        tr: "İstanbul'da premium düğün fotoğrafçılığı, düğün filmleri, pre-wedding ve çift çekimleri. ISO Wedding'den sinematik hikaye anlatımı, bir Tavakoli Studio markası.",
      },
      keywords: [
        "Istanbul wedding photographer",
        "Istanbul wedding videographer",
        "pre wedding photoshoot Istanbul",
        "couple photoshoot Istanbul",
        "wedding photography Istanbul",
        "Iranian wedding photographer Istanbul",
      ],
    },
    hero: {
      eyebrow: {
        en: "Wedding Photography & Films in Istanbul",
        fa: "عکاسی و فیلم‌برداری عروسی در استانبول",
        tr: "İstanbul'da Düğün Fotoğrafı ve Film Çekimi",
      },
      headline: {
        line1: { en: "Your wedding story,", fa: "داستان عروسی شما،", tr: "Düğün hikâyeniz," },
        line2: { en: "framed in Istanbul.", fa: "در قاب استانبول.", tr: "İstanbul'un ışığında." },
        /** Substring of line1/line2 (respectively) rendered in the serif accent style. */
        accent1: { en: "wedding story", fa: "داستان عروسی", tr: "Düğün hikâyeniz" },
        accent2: { en: "Istanbul", fa: "استانبول", tr: "İstanbul" },
      },
      description: {
        en: "ISO Wedding creates cinematic wedding photography, wedding films, pre-wedding and couple sessions for couples who want elegant, emotional and timeless memories in Istanbul.",
        fa: "ISO Wedding برای زوج‌هایی ساخته شده که می‌خواهند عکس و فیلم عروسی، فرمالیته و کاپل‌شوت آن‌ها در استانبول شیک، احساسی، سینمایی و ماندگار باشد.",
        tr: "ISO Wedding, İstanbul'da zarif, duygusal ve sinematik düğün fotoğrafları, düğün filmleri, dış çekim ve çift çekimleri üretir.",
      },
      secondParagraph: {
        en: "Led by Mohammad Tavakoli and Mahtab Behrayan, the studio blends over two decades of visual experience with a narrative, director-led approach.",
        fa: "این برند با نگاه تصویری محمد توکلی و ایده‌پردازی و کارگردانی مهتاب بهریان، فقط عکس نمی‌سازد؛ یک روایت تصویری از خاطره شما می‌سازد.",
        tr: "Mohammad Tavakoli'nin görsel deneyimi ve Mahtab Behrayan'ın yaratıcı yönetmenliğiyle, her çekim yalnızca fotoğraf değil, görsel bir hikâyeye dönüşür.",
      },
      ctaPrimary: ui.startChat,
      ctaSecondary: { en: "View gallery", fa: "مشاهده گالری", tr: "Galeriyi Gör" },
    },
    marquee: {
      images: [
        {
          src: "/images/portfolio/portfolio-01.jpg",
          alt: {
            en: "Bride and groom on a grand staircase in Istanbul",
            fa: "عروس و داماد روی پله‌های بزرگ در استانبول",
            tr: "İstanbul'da büyük bir merdivende gelin ve damat",
          },
        },
        {
          src: "/images/portfolio/portfolio-02.jpg",
          alt: {
            en: "Intimate wedding portrait by candlelight in Istanbul",
            fa: "پرتره صمیمی عروسی در نور شمع در استانبول",
            tr: "İstanbul'da mum ışığında samimi bir düğün portresi",
          },
        },
        {
          src: "/images/portfolio/portfolio-03.jpg",
          alt: {
            en: "Bride and groom sharing a quiet moment on the stairs",
            fa: "لحظه‌ای آرام میان عروس و داماد روی پله‌ها",
            tr: "Merdivenlerde sakin bir an paylaşan gelin ve damat",
          },
        },
        {
          src: "/images/portfolio/portfolio-04.jpg",
          alt: {
            en: "Wedding couple portrait among vintage Istanbul interiors",
            fa: "پرتره زوج عروسی در فضای دکوراسیون کلاسیک استانبول",
            tr: "İstanbul'un vintage iç mekanlarında düğün çifti portresi",
          },
        },
        {
          src: "/images/portfolio/portfolio-05.jpg",
          alt: {
            en: "Bride holding a bouquet in a historic Istanbul hall",
            fa: "عروس با دسته‌گل در سالنی تاریخی در استانبول",
            tr: "İstanbul'da tarihi bir salonda buket tutan gelin",
          },
        },
        {
          src: "/images/portfolio/portfolio-06.jpg",
          alt: {
            en: "Bride and groom by an arched window in Istanbul",
            fa: "عروس و داماد کنار پنجره‌ای قدیمی در استانبول",
            tr: "İstanbul'da kemerli bir pencere kenarında gelin ve damat",
          },
        },
        {
          src: "/images/portfolio/portfolio-07.jpg",
          alt: {
            en: "Wedding portrait beneath a crystal chandelier in Istanbul",
            fa: "پرتره عروسی زیر لوستر کریستالی در استانبول",
            tr: "İstanbul'da kristal avize altında düğün portresi",
          },
        },
        {
          src: "/images/portfolio/portfolio-08.jpg",
          alt: {
            en: "Bride and groom in a vintage Istanbul lounge",
            fa: "عروس و داماد در سالن کلاسیک استانبول",
            tr: "İstanbul'da vintage bir salonda gelin ve damat",
          },
        },
        {
          src: "/images/portfolio/portfolio-09.jpg",
          alt: {
            en: "Wedding couple reflected in a gilded mirror in Istanbul",
            fa: "زوج عروسی در آینه‌ای طلایی در استانبول",
            tr: "İstanbul'da yaldızlı bir aynada yansıyan düğün çifti",
          },
        },
        {
          src: "/images/portfolio/portfolio-10.jpg",
          alt: {
            en: "Bride and groom framed through a glass door in Istanbul",
            fa: "عروس و داماد در قاب دری شیشه‌ای در استانبول",
            tr: "İstanbul'da bir cam kapı çerçevesinde gelin ve damat",
          },
        },
      ],
    },
    quote: {
      text: {
        en: "We don't just photograph weddings. We direct memories.",
        fa: "ما فقط عروسی را عکاسی نمی‌کنیم؛ خاطره را کارگردانی می‌کنیم.",
        tr: "Biz sadece düğün fotoğrafı çekmiyoruz; anıları yönetiyoruz.",
      },
      author: "ISO Wedding — by Tavakoli Studio",
      image: "/images/portfolio/portfolio-02.jpg",
    },
    packages: {
      eyebrow: { en: "Packages", fa: "پکیج‌ها", tr: "Paketler" },
      heading: { en: "Ways to Tell Your Story", fa: "راه‌های روایت داستان شما", tr: "Hikayenizi Anlatmanın Yolları" },
      cta: { en: "Ask availability", fa: "استعلام زمان خالی", tr: "Uygunluk Sor" },
      items: [
        {
          id: "couple-session",
          title: { en: "Couple Session", fa: "کاپل‌شوت", tr: "Çift Çekimi" },
          description: {
            en: "For couples, anniversaries, travel memories and romantic Istanbul portraits.",
            fa: "برای کاپل‌شوت، سالگرد، سفر عاشقانه و پرتره‌های دونفره در استانبول.",
            tr: "Çift çekimleri, yıl dönümü, seyahat anıları ve romantik İstanbul portreleri.",
          },
        },
        {
          id: "pre-wedding-formality",
          title: { en: "Pre-Wedding / Formality", fa: "فرمالیته / پیش‌عروسی", tr: "Pre-Wedding / Nişan" },
          description: {
            en: "A cinematic pre-wedding story across Istanbul's most iconic locations.",
            fa: "روایت سینمایی فرمالیته و پیش‌عروسی در لوکیشن‌های خاص استانبول.",
            tr: "İstanbul'un özel lokasyonlarında sinematik dış çekim ve nişan hikâyesi.",
          },
        },
        {
          id: "wedding-photo-film",
          title: { en: "Wedding Photo & Film", fa: "عکس و فیلم عروسی", tr: "Düğün Fotoğraf & Film" },
          description: {
            en: "Photography and film coverage for wedding days, ceremonies and luxury celebrations.",
            fa: "پوشش عکس و فیلم روز عروسی، مراسم و جشن‌های خاص.",
            tr: "Düğün günü, tören ve özel kutlamalar için fotoğraf ve film çekimi.",
          },
        },
      ],
    },
    testimonialsCarousel: {
      eyebrow: { en: "Kind Words", fa: "نظرات عزیزان ما", tr: "Güzel Sözler" },
      heading: { en: "What Couples Say", fa: "زوج‌ها چه می‌گویند", tr: "Çiftlerimiz Ne Diyor" },
      items: [
        {
          quote: {
            en: "The photos felt like scenes from a film, not just wedding pictures.",
            fa: "عکس‌ها بیشتر شبیه صحنه‌های یک فیلم بودند تا عکس‌های معمولی عروسی.",
            tr: "Fotoğraflar sıradan düğün karelerinden çok bir film sahnesi gibiydi.",
          },
        },
        {
          quote: {
            en: "They knew exactly how to guide us in Istanbul without making anything feel fake.",
            fa: "در استانبول خیلی خوب راهنمایی‌مان کردند و همه چیز طبیعی و شیک بود.",
            tr: "İstanbul'da bizi çok doğal ve zarif şekilde yönlendirdiler.",
          },
        },
        {
          quote: {
            en: "The final film was emotional, elegant and beyond what we expected.",
            fa: "فیلم نهایی احساسی، مرتب و خیلی فراتر از انتظار ما بود.",
            tr: "Final film duygusal, şık ve beklentimizin çok üzerindeydi.",
          },
        },
      ],
    },
    featuredStories: {
      eyebrow: { en: "Featured Stories", fa: "داستان‌های منتخب", tr: "Seçkin Hikâyeler" },
      heading: { en: "A Closer Look", fa: "نگاهی نزدیک‌تر", tr: "Daha Yakından Bakış" },
      items: [
        {
          id: "bosphorus-wedding-story",
          title: { en: "Bosphorus Wedding Story", fa: "داستان عروسی در بسفر", tr: "Boğaz'da Düğün Hikâyesi" },
          description: {
            en: "Elegant wedding portraits by the water, with Istanbul's skyline as the background.",
            fa: "پرتره‌های شیک عروسی در کنار آب، با خط آسمان استانبول در پس‌زمینه.",
            tr: "Suyun kenarında zarif düğün portreleri, arka planda İstanbul'un silüeti.",
          },
          image: "/images/portfolio/portfolio-10.jpg",
        },
        {
          id: "galata-couple-session",
          title: { en: "Galata Couple Session", fa: "کاپل‌شوت گالاتا", tr: "Galata Çift Çekimi" },
          description: {
            en: "A refined urban love story through Galata, Karaköy and old Istanbul streets.",
            fa: "روایتی شیک و شهری از عشق، در گالاتا، کاراکوی و کوچه‌های قدیمی استانبول.",
            tr: "Galata, Karaköy ve eski İstanbul sokaklarında zarif bir şehir aşkı hikâyesi.",
          },
          image: "/images/portfolio/portfolio-08.jpg",
        },
        {
          id: "formality-old-istanbul",
          title: { en: "Formality in Old Istanbul", fa: "فرمالیته در استانبول قدیم", tr: "Eski İstanbul'da Dış Çekim" },
          description: {
            en: "Cinematic pre-wedding imagery shaped by architecture, movement and natural light.",
            fa: "تصاویر سینمایی فرمالیته، شکل‌گرفته با معماری، حرکت و نور طبیعی.",
            tr: "Mimari, hareket ve doğal ışıkla şekillenen sinematik dış çekim görselleri.",
          },
          image: "/images/portfolio/portfolio-07.jpg",
        },
      ],
    },
    partnerCta: {
      heading: {
        en: "Create your Istanbul wedding story",
        fa: "داستان عروسی‌تان را در استانبول بسازیم",
        tr: "İstanbul'daki düğün hikâyenizi birlikte oluşturalım",
      },
      cta: { en: "Start chat on WhatsApp", fa: "گفتگو در واتساپ", tr: "WhatsApp'tan Yazın" },
    },
    galleryPreview: {
      eyebrow: { en: "Featured Work", fa: "نمونه کارها", tr: "Seçkin Çalışmalar" },
      heading: { en: "A Glimpse Into Our Stories", fa: "نگاهی به داستان‌های ما", tr: "Hikayelerimizden Bir Kesit" },
      subtitle: {
        en: "A small selection from real weddings, pre-wedding sessions and couple shoots across Istanbul.",
        fa: "گزیده‌ای کوچک از عروسی‌های واقعی، جلسات پره‌وداد و عکاسی‌های کاپل در سراسر استانبول.",
        tr: "İstanbul'un dört bir yanından gerçek düğünler, pre-wedding çekimleri ve çift fotoğraflarından küçük bir seçki.",
      },
      cta: { en: "View Full Gallery", fa: "مشاهده گالری کامل", tr: "Tüm Galeriyi Görüntüle" },
    },
    aboutPreview: {
      eyebrow: { en: "The Storytellers", fa: "راویان داستان", tr: "Hikaye Anlatıcıları" },
      heading: { en: "Mohammad & Mahtab", fa: "محمد و مهتاب", tr: "Mohammad & Mahtab" },
      body: {
        en: "A photographer and filmmaker with over 20 years behind the lens, and a creative director who shapes every story before it's ever photographed. Together, they run ISO Wedding from the city they call home.",
        fa: "عکاس و فیلم‌سازی با بیش از ۲۰ سال تجربه پشت دوربین، در کنار مدیر خلاقی که پیش از ثبت هر قاب، داستان آن را شکل می‌دهد. آن‌ها این استودیو را از شهری که خانه‌شان می‌نامند، اداره می‌کنند.",
        tr: "Lensin ardında 20 yılı aşkın deneyime sahip bir fotoğrafçı ve film yapımcısı, ve her kare çekilmeden önce hikayeyi şekillendiren bir yaratıcı direktör. ISO Wedding'i, ev dedikleri şehirden birlikte yönetiyorlar.",
      },
      cta: { en: "More About Us", fa: "بیشتر درباره ما", tr: "Hakkımızda Daha Fazla" },
    },
    servicesSection: {
      eyebrow: { en: "What We Offer", fa: "خدمات ما", tr: "Sunduklarımız" },
      heading: {
        en: "Wedding Photography & Film in Istanbul",
        fa: "عکاسی و فیلم عروسی در استانبول",
        tr: "İstanbul'da Düğün Fotoğrafçılığı & Filmi",
      },
      subtitle: {
        en: "Four ways to tell your story, each shaped around how you actually want to spend your day.",
        fa: "چهار شیوه برای روایت داستان شما، هرکدام متناسب با نحوه‌ای که واقعاً می‌خواهید روزتان را تجربه کنید.",
        tr: "Hikayenizi anlatmanın dört farklı yolu; her biri gününüzü gerçekten nasıl yaşamak istediğinize göre şekilleniyor.",
      },
    },
    whyChooseUs: {
      eyebrow: { en: "Why Couples Choose Us", fa: "چرا زوج‌ها ما را انتخاب می‌کنند", tr: "Çiftler Neden Bizi Seçiyor" },
      heading: { en: "Crafted With Intention", fa: "ساخته‌شده با نیت و دقت", tr: "Özenle Tasarlandı" },
      items: [
        {
          title: { en: "20+ Years of Storytelling", fa: "بیش از ۲۰ سال روایت‌گری بصری", tr: "20+ Yıllık Görsel Hikaye Anlatıcılığı" },
          body: {
            en: "Two decades behind the camera and behind the story, across photography and film.",
            fa: "دو دهه تجربه پشت دوربین و پشت داستان، در عکاسی و فیلم.",
            tr: "Hem kameranın hem de hikayenin ardında iki on yıllık deneyim, fotoğraf ve film boyunca.",
          },
        },
        {
          title: { en: "Photography & Film, One Vision", fa: "عکاسی و فیلم، با یک نگاه واحد", tr: "Fotoğraf ve Film, Tek Bir Vizyon" },
          body: {
            en: "A unified cinematic approach, so your stills and your film feel like they belong together.",
            fa: "رویکردی یکپارچه و سینمایی، تا عکس‌ها و فیلم شما حس کنند که به یک دنیا تعلق دارند.",
            tr: "Bütünlüklü sinematik bir yaklaşım; fotoğraflarınız ve filminiz birbirine ait hissettirir.",
          },
        },
        {
          title: { en: "Farsi, Turkish & English", fa: "فارسی، ترکی و انگلیسی", tr: "Farsça, Türkçe & İngilizce" },
          body: {
            en: "Effortless communication for couples from Iran, Turkey, or anywhere else in the world.",
            fa: "ارتباطی ساده و بی‌دردسر برای زوج‌هایی از ایران، ترکیه یا هر نقطه دیگری از جهان.",
            tr: "İran'dan, Türkiye'den veya dünyanın herhangi bir yerinden çiftler için zahmetsiz iletişim.",
          },
        },
        {
          title: { en: "Istanbul, Truly Known", fa: "شناختی واقعی از استانبول", tr: "İstanbul'u Gerçekten Tanımak" },
          body: {
            en: "Locations chosen for light and meaning, not just for looking good in a feed.",
            fa: "لوکیشن‌هایی که برای نور و معنا انتخاب شده‌اند، نه فقط برای زیبایی در یک پست اینستاگرام.",
            tr: "Sadece güzel görünmek için değil, ışık ve anlam için seçilmiş lokasyonlar.",
          },
        },
        {
          title: { en: "Personal, Not Templated", fa: "شخصی، نه کلیشه‌ای", tr: "Şablona Değil, Kişiye Özel" },
          body: {
            en: "Every shoot is shaped around the couple living it — never a copy-paste package.",
            fa: "هر جلسه عکاسی متناسب با همان زوجی که آن را زندگی می‌کند شکل می‌گیرد — هیچ پکیج کپی‌شده‌ای وجود ندارد.",
            tr: "Her çekim, onu yaşayan çifte göre şekillenir — kopyala-yapıştır bir paket asla.",
          },
        },
        {
          title: { en: "Easy for Travelling Couples", fa: "آسان برای زوج‌های مسافر", tr: "Seyahat Eden Çiftler İçin Kolaylık" },
          body: {
            en: "Clear planning and scheduling support for couples arriving from abroad.",
            fa: "برنامه‌ریزی شفاف و پشتیبانی زمان‌بندی برای زوج‌هایی که از خارج از کشور سفر می‌کنند.",
            tr: "Yurt dışından gelen çiftler için açık planlama ve zamanlama desteği.",
          },
        },
      ],
    },
    locationsPreview: {
      eyebrow: { en: "Set the Scene", fa: "صحنه را بچینید", tr: "Sahneyi Hazırlayın" },
      heading: { en: "Istanbul as Your Backdrop", fa: "استانبول، پس‌زمینه داستان شما", tr: "Arka Planınız: İstanbul" },
      subtitle: {
        en: "From Bosphorus shorelines to centuries-old streets — explore the city's most cinematic corners.",
        fa: "از سواحل بسفر تا کوچه‌های قرن‌ها قدیمی — سینمایی‌ترین گوشه‌های شهر را کشف کنید.",
        tr: "Boğaz kıyılarından yüzyıllık sokaklara — şehrin en sinematik köşelerini keşfedin.",
      },
      cta: { en: "Explore All Locations", fa: "مشاهده همه لوکیشن‌ها", tr: "Tüm Lokasyonları Keşfedin" },
    },
    testimonials: {
      eyebrow: { en: "Kind Words", fa: "نظرات عزیزان ما", tr: "Güzel Sözler" },
      heading: { en: "Stories, As Told By Our Couples", fa: "داستان‌ها، به روایت زوج‌های ما", tr: "Çiftlerimizin Anlatımıyla Hikayeler" },
    },
    finalCta: {
      heading: { en: "Let's Tell Your Story", fa: "بیایید داستان شما را روایت کنیم", tr: "Hikayenizi Anlatalım" },
      subtitle: {
        en: "Dates fill quickly in peak season — reach out and let's talk about your day.",
        fa: "در فصل اوج، تاریخ‌ها سریع پر می‌شوند — همین حالا تماس بگیرید تا درباره روزتان گفت‌وگو کنیم.",
        tr: "Yoğun sezonda tarihler hızla doluyor — bize ulaşın, gününüzü konuşalım.",
      },
      ctaPrimary: {
        en: "Check Availability on WhatsApp",
        fa: "بررسی زمان‌های خالی در واتساپ",
        tr: "WhatsApp'tan Uygunluk Sorun",
      },
      ctaSecondary: { en: "Send a Message", fa: "ارسال پیام", tr: "Mesaj Gönderin" },
    },
  },
  about: {
    seo: {
      title: {
        en: "About Mohammad & Mahtab | ISO Wedding",
        fa: "درباره محمد و مهتاب | ISO Wedding",
        tr: "Mohammad & Mahtab Hakkında | ISO Wedding",
      },
      description: {
        en: "Meet the photographer, filmmaker and creative director behind ISO Wedding — a Tavakoli Studio brand based in Istanbul.",
        fa: "با عکاس، فیلم‌ساز و مدیر خلاقی پشت ISO Wedding آشنا شوید — برندی از Tavakoli Studio، مستقر در استانبول.",
        tr: "ISO Wedding'in arkasındaki fotoğrafçı, film yapımcısı ve yaratıcı direktörle tanışın — İstanbul merkezli bir Tavakoli Studio markası.",
      },
    },
    hero: {
      eyebrow: { en: "Our Story", fa: "داستان ما", tr: "Hikayemiz" },
      heading: { en: "The People Behind Your Story", fa: "افرادی که پشت داستان شما هستند", tr: "Hikayenizin Arkasındaki İsimler" },
      subtitle: {
        en: "Two storytellers, one shared obsession with how light, place and emotion come together.",
        fa: "دو روایت‌گر، با یک دلبستگی مشترک به نحوه‌ی در هم تنیدن نور، مکان و احساس.",
        tr: "Işığın, mekanın ve duygunun nasıl bir araya geldiğine dair ortak bir tutkuya sahip iki hikaye anlatıcısı.",
      },
    },
    philosophy: {
      heading: { en: "Our Philosophy", fa: "فلسفه ما", tr: "Felsefemiz" },
      body: {
        en: "We believe a wedding film or photograph should feel like a memory, not a performance. Our approach is documentary at heart and cinematic in execution — we observe closely, direct gently, and let the story lead. Every couple, every culture and every celebration we work with shapes how we tell that particular story; nothing here is templated.",
        fa: "ما باور داریم یک فیلم یا عکس عروسی باید حس یک خاطره را داشته باشد، نه یک اجرای نمایشی. رویکرد ما در ریشه مستند و در اجرا سینمایی است — از نزدیک مشاهده می‌کنیم، به‌آرامی هدایت می‌کنیم و اجازه می‌دهیم داستان خودش پیش برود. هر زوج، هر فرهنگ و هر جشنی که با آن همکاری می‌کنیم، نحوه روایت آن داستان خاص را شکل می‌دهد؛ هیچ‌چیز در اینجا کلیشه‌ای نیست.",
        tr: "Bir düğün filminin veya fotoğrafının bir performans gibi değil, bir anı gibi hissettirmesi gerektiğine inanıyoruz. Yaklaşımımız özünde belgesel, uygulamada sinematiktir — yakından gözlemler, nazikçe yönlendirir ve hikayenin öncülük etmesine izin veririz. Birlikte çalıştığımız her çift, her kültür ve her kutlama, o hikayenin nasıl anlatılacağını şekillendirir; burada hiçbir şey şablona dayanmaz.",
      },
    },
    brandStory: {
      heading: { en: "Why ISO Wedding", fa: "چرا ISO Wedding", tr: "ISO Wedding Neden Var" },
      body: {
        en: "ISO Wedding began as a focused expression of something Mohammad and Mahtab were already doing through Tavakoli Studio: telling love stories, cinematically, in one of the most visually rich cities in the world. Based in Istanbul, the studio was created specifically for couples — Iranian couples living in or travelling to Turkey, Turkish couples, and international couples — who want their wedding, pre-wedding or couple session told with the same care as a film, not just documented like an event.",
        fa: "ISO Wedding به‌عنوان تجلی متمرکزی از کاری آغاز شد که محمد و مهتاب پیش‌تر از طریق Tavakoli Studio انجام می‌دادند: روایت داستان‌های عاشقانه، به‌شکل سینمایی، در یکی از شهرهای از نظر بصری غنی جهان. این استودیو، مستقر در استانبول، مخصوصاً برای زوج‌هایی ساخته شده — زوج‌های ایرانی ساکن یا مسافر به ترکیه، زوج‌های ترک و زوج‌های بین‌المللی — که می‌خواهند عروسی، پره‌وداد یا جلسه کاپل‌شان با همان دقتی روایت شود که یک فیلم دارد، نه صرفاً ثبت شود مثل یک رویداد.",
        tr: "ISO Wedding, Mohammad ve Mahtab'ın Tavakoli Studio aracılığıyla zaten yaptıkları bir şeyin odaklanmış bir ifadesi olarak doğdu: dünyanın görsel açıdan en zengin şehirlerinden birinde, aşk hikayelerini sinematik bir şekilde anlatmak. İstanbul merkezli stüdyo, özellikle çiftler için kuruldu — Türkiye'de yaşayan veya Türkiye'ye gelen İranlı çiftler, Türk çiftler ve uluslararası çiftler — düğünlerinin, pre-wedding çekimlerinin veya çift seanslarının sadece bir etkinlik gibi belgelenmesini değil, bir film kadar özenle anlatılmasını isteyenler için.",
      },
    },
    closing: {
      heading: { en: "A Premium, Story-Driven Approach", fa: "رویکردی پریمیوم و داستان‌محور", tr: "Premium, Hikaye Odaklı Bir Yaklaşım" },
      body: {
        en: "From the first message to the final film, every step is built around storytelling rather than templates: a real planning conversation, locations chosen with intention, and a final gallery or film that feels like your story — because it is.",
        fa: "از اولین پیام تا فیلم نهایی، هر مرحله بر پایه روایت‌گری شکل گرفته، نه بر اساس قالب‌های از پیش تعیین‌شده: گفت‌وگویی واقعی برای برنامه‌ریزی، لوکیشن‌هایی انتخاب‌شده با نیت، و گالری یا فیلمی نهایی که حس داستان خودِ شما را دارد — چون واقعاً داستان شماست.",
        tr: "İlk mesajdan son filme kadar her adım, şablonlar üzerine değil hikaye anlatıcılığı üzerine kuruludur: gerçek bir planlama görüşmesi, özenle seçilmiş lokasyonlar ve sizin hikayeniz gibi hissettiren bir galeri veya film — çünkü öyle.",
      },
    },
  },
  services: {
    seo: {
      title: {
        en: "Wedding Photography & Film Services in Istanbul | ISO Wedding",
        fa: "خدمات عکاسی و فیلم عروسی در استانبول | ISO Wedding",
        tr: "İstanbul Düğün Fotoğrafçılığı & Film Hizmetleri | ISO Wedding",
      },
      description: {
        en: "Wedding photography, wedding films, pre-wedding/formality shoots and couple sessions in Istanbul — four ways to tell your story.",
        fa: "عکاسی عروسی، فیلم عروسی، عکاسی پره‌وداد و جلسات کاپل در استانبول — چهار شیوه برای روایت داستان شما.",
        tr: "İstanbul'da düğün fotoğrafçılığı, düğün filmi, pre-wedding/nişan çekimi ve çift çekimleri — hikayenizi anlatmanın dört yolu.",
      },
    },
    hero: {
      eyebrow: { en: "What We Offer", fa: "خدمات ما", tr: "Sunduklarımız" },
      heading: { en: "Services", fa: "خدمات", tr: "Hizmetler" },
      subtitle: {
        en: "Four ways to work with us, each built around how you want your story told.",
        fa: "چهار شیوه همکاری با ما، هرکدام متناسب با نحوه‌ای که می‌خواهید داستانتان روایت شود.",
        tr: "Bizimle çalışmanın dört yolu; her biri hikayenizin nasıl anlatılmasını istediğinize göre kurulu.",
      },
    },
  },
  gallery: {
    seo: {
      title: {
        en: "Wedding & Couple Photography Gallery in Istanbul | ISO Wedding",
        fa: "گالری عکاسی عروسی و کاپل در استانبول | ISO Wedding",
        tr: "İstanbul Düğün & Çift Fotoğrafçılığı Galerisi | ISO Wedding",
      },
      description: {
        en: "Browse wedding, pre-wedding, couple session and Istanbul city photography from ISO Wedding.",
        fa: "گالری عکاسی عروسی، پره‌وداد، جلسات کاپل و عکاسی شهری استانبول را در ISO Wedding مشاهده کنید.",
        tr: "ISO Wedding'den düğün, pre-wedding, çift çekimi ve İstanbul şehir fotoğraflarına göz atın.",
      },
    },
    hero: {
      eyebrow: { en: "Portfolio", fa: "نمونه کارها", tr: "Portföy" },
      heading: { en: "Gallery", fa: "گالری", tr: "Galeri" },
      subtitle: {
        en: "A curated look at weddings, pre-wedding sessions, couple shoots and the city that frames them all.",
        fa: "نگاهی منتخب به عروسی‌ها، جلسات پره‌وداد، عکاسی‌های کاپل و شهری که همه آن‌ها را در قاب می‌گیرد.",
        tr: "Düğünlere, pre-wedding çekimlerine, çift fotoğraflarına ve hepsini kareleyen şehre özenle seçilmiş bir bakış.",
      },
    },
    filters: {
      all: { en: "All", fa: "همه", tr: "Tümü" },
      wedding: { en: "Wedding", fa: "عروسی", tr: "Düğün" },
      "pre-wedding": { en: "Pre-Wedding", fa: "پره‌وداد", tr: "Pre-Wedding" },
      "couple-session": { en: "Couple Session", fa: "جلسه کاپل", tr: "Çift Çekimi" },
      "istanbul-city": { en: "Istanbul City Shoots", fa: "عکاسی شهری استانبول", tr: "İstanbul Şehir Çekimleri" },
    },
  },
  locations: {
    seo: {
      title: {
        en: "Best Istanbul Wedding & Couple Photoshoot Locations | ISO Wedding",
        fa: "بهترین لوکیشن‌های عکاسی عروسی و کاپل در استانبول | ISO Wedding",
        tr: "En İyi İstanbul Düğün & Çift Çekimi Lokasyonları | ISO Wedding",
      },
      description: {
        en: "Galata, Bosphorus, Ortaköy, Balat, Sultanahmet, Galata Bridge, Grand Hotel de Londres and more — explore the best Istanbul locations for wedding, pre-wedding and couple photography.",
        fa: "گالاتا، بسفر، اورتاکوی، بالات، سلطان‌احمد، پل گالاتا، گرند هتل دو لندر و بیشتر — بهترین لوکیشن‌های استانبول برای عکاسی عروسی، پره‌وداد و کاپل را کشف کنید.",
        tr: "Galata, Boğaz, Ortaköy, Balat, Sultanahmet, Galata Köprüsü, Grand Hotel de Londres ve daha fazlası — düğün, pre-wedding ve çift fotoğrafçılığı için en iyi İstanbul lokasyonlarını keşfedin.",
      },
    },
    hero: {
      eyebrow: { en: "Istanbul", fa: "استانبول", tr: "İstanbul" },
      heading: { en: "Istanbul Locations", fa: "لوکیشن‌های استانبول", tr: "İstanbul Lokasyonları" },
      subtitle: {
        en: "Ten of our favorite corners of the city for wedding, pre-wedding and couple photography — each with its own light, mood and story.",
        fa: "ده مورد از مکان‌های مورد علاقه ما برای عکاسی عروسی، پره‌وداد و کاپل در شهر — هرکدام با نور، حس‌وحال و داستان خاص خودش.",
        tr: "Düğün, pre-wedding ve çift fotoğrafçılığı için en sevdiğimiz on köşe — her biri kendi ışığı, atmosferi ve hikayesiyle.",
      },
    },
  },
  planner: {
    seo: {
      title: {
        en: "Plan Your Shoot | ISO Wedding",
        fa: "برنامه‌ریزی عکاسی | ISO Wedding",
        tr: "Çekim Planla | ISO Wedding",
      },
      description: {
        en: "Plan your Istanbul wedding or couple shoot step by step — project type, location, visual style, outfit advice and an estimated budget.",
        fa: "جلسه عکاسی عروسی یا کاپل خود در استانبول را گام‌به‌گام برنامه‌ریزی کنید — نوع پروژه، لوکیشن، سبک بصری، راهنمای لباس و بودجه تخمینی.",
        tr: "İstanbul'daki düğün veya çift çekiminizi adım adım planlayın — proje türü, konum, görsel stil, kıyafet önerisi ve tahmini bütçe.",
      },
    },
  },
  contact: {
    seo: {
      title: {
        en: "Contact Us | ISO Wedding",
        fa: "تماس با ما | ISO Wedding",
        tr: "İletişim | ISO Wedding",
      },
      description: {
        en: "Get in touch about wedding photography, wedding films, pre-wedding or couple sessions in Istanbul — reply within 24 hours.",
        fa: "برای عکاسی عروسی، فیلم عروسی، جلسات پره‌وداد یا کاپل در استانبول با ما در ارتباط باشید — پاسخ در کمتر از ۲۴ ساعت.",
        tr: "İstanbul'da düğün fotoğrafçılığı, düğün filmi, pre-wedding veya çift çekimi için bizimle iletişime geçin — 24 saat içinde yanıt.",
      },
    },
    hero: {
      eyebrow: { en: "Get in Touch", fa: "ارتباط با ما", tr: "Bize Ulaşın" },
      heading: { en: "Let's Talk About Your Day", fa: "بیایید درباره روزتان صحبت کنیم", tr: "Gününüzü Konuşalım" },
      subtitle: {
        en: "Tell us a little about your plans and we'll reply with availability, pricing and next steps — usually within 24 hours.",
        fa: "کمی درباره برنامه‌هایتان به ما بگویید تا با زمان‌های خالی، قیمت‌گذاری و مراحل بعدی پاسخ دهیم — معمولاً در کمتر از ۲۴ ساعت.",
        tr: "Planlarınızdan kısaca bahsedin, size uygunluk, fiyatlandırma ve sonraki adımlarla ilgili dönelim — genellikle 24 saat içinde.",
      },
    },
    form: {
      name: { en: "Full Name", fa: "نام کامل", tr: "Ad Soyad" },
      email: { en: "Email Address", fa: "آدرس ایمیل", tr: "E-posta Adresi" },
      whatsapp: { en: "WhatsApp Number", fa: "شماره واتساپ", tr: "WhatsApp Numarası" },
      shootType: { en: "Shoot Type", fa: "نوع جلسه عکاسی", tr: "Çekim Türü" },
      preferredDate: { en: "Preferred Date", fa: "تاریخ ترجیحی", tr: "Tercih Edilen Tarih" },
      message: { en: "Tell Us About Your Day", fa: "کمی درباره روزتان بگویید", tr: "Bize Gününüzden Bahsedin" },
      submit: { en: "Send Message", fa: "ارسال پیام", tr: "Mesaj Gönder" },
      sending: { en: "Sending...", fa: "در حال ارسال...", tr: "Gönderiliyor..." },
      shootTypeOptions: [
        { en: "Wedding Photography", fa: "عکاسی عروسی", tr: "Düğün Fotoğrafçılığı" },
        { en: "Wedding Film", fa: "فیلم عروسی", tr: "Düğün Filmi" },
        { en: "Pre-Wedding / Formality", fa: "پره‌وداد / فرمالیته", tr: "Pre-Wedding / Nişan" },
        { en: "Couple Session", fa: "جلسه کاپل", tr: "Çift Çekimi" },
        { en: "Other", fa: "سایر", tr: "Diğer" },
      ],
      requiredError: {
        en: "This field is required.",
        fa: "این فیلد الزامی است.",
        tr: "Bu alan zorunludur.",
      },
      emailError: {
        en: "Please enter a valid email address.",
        fa: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
        tr: "Lütfen geçerli bir e-posta adresi girin.",
      },
    },
    success: {
      heading: { en: "Thank You", fa: "متشکریم", tr: "Teşekkürler" },
      body: {
        en: "Your message has been received. We'll get back to you on WhatsApp or email within 24 hours.",
        fa: "پیام شما با موفقیت دریافت شد. ما در کمتر از ۲۴ ساعت از طریق واتساپ یا ایمیل با شما تماس می‌گیریم.",
        tr: "Mesajınız alındı. 24 saat içinde WhatsApp veya e-posta yoluyla size dönüş yapacağız.",
      },
    },
    whatsappCta: { en: "Message Us on WhatsApp", fa: "پیام در واتساپ", tr: "WhatsApp'tan Mesaj Gönder" },
    instagramCta: { en: "Follow Us on Instagram", fa: "دنبال کردن در اینستاگرام", tr: "Instagram'da Takip Edin" },
    defaultWhatsappMessage: {
      en: "Hi! I'd love to know more about wedding photography and availability in Istanbul.",
      fa: "سلام! می‌خواستم درباره عکاسی عروسی و زمان‌های خالی در استانبول بیشتر بدانم.",
      tr: "Merhaba! İstanbul'da düğün fotoğrafçılığı ve uygunluk hakkında daha fazla bilgi almak istiyorum.",
    },
  },
  blog: {
    seo: {
      title: {
        en: "Journal | ISO Wedding",
        fa: "ژورنال | ISO Wedding",
        tr: "Blog | ISO Wedding",
      },
      description: {
        en: "Stories, behind-the-scenes notes and wedding inspiration from Istanbul — coming soon.",
        fa: "داستان‌ها، یادداشت‌های پشت‌صحنه و ایده‌های عروسی از استانبول — به‌زودی.",
        tr: "İstanbul'dan hikayeler, perde arkası notları ve düğün ilhamı — çok yakında.",
      },
    },
    hero: {
      eyebrow: { en: "Journal", fa: "ژورنال", tr: "Blog" },
      heading: { en: "New Stories Are on Their Way", fa: "داستان‌های تازه در راه‌اند", tr: "Yeni Hikayeler Yolda" },
      subtitle: {
        en: "We're preparing journal entries from real weddings, location guides and behind-the-scenes notes. Check back soon, or follow us on Instagram for updates in the meantime.",
        fa: "ما در حال آماده‌سازی یادداشت‌های ژورنال از عروسی‌های واقعی، راهنمای لوکیشن‌ها و یادداشت‌های پشت‌صحنه هستیم. به‌زودی دوباره سر بزنید، یا در همین حین ما را در اینستاگرام دنبال کنید.",
        tr: "Gerçek düğünlerden notlar, lokasyon rehberleri ve perde arkası içerikler hazırlıyoruz. Yakında tekrar uğrayın, ya da bu süreçte bizi Instagram'da takip edin.",
      },
    },
  },
};

export const footer = {
  description: {
    en: "Premium wedding photography and films in Istanbul, by Tavakoli Studio.",
    fa: "عکاسی و فیلم‌برداری پریمیوم عروسی در استانبول، با امضای Tavakoli Studio.",
    tr: "İstanbul'da premium düğün fotoğrafçılığı ve filmleri, Tavakoli Studio imzasıyla.",
  },
  quickLinksHeading: { en: "Quick Links", fa: "لینک‌های سریع", tr: "Hızlı Bağlantılar" },
  contactHeading: { en: "Get in Touch", fa: "ارتباط با ما", tr: "İletişim" },
  languageHeading: { en: "Language", fa: "زبان", tr: "Dil" },
  /** Brand + location stay Latin in every locale, per brand guidelines. */
  copyrightBrand: "ISO Wedding by Tavakoli Studio",
  copyrightLocation: "Istanbul, Turkey",
  poweredBy: {
    label: { en: "Powered by", fa: "قدرت گرفته از", tr: "Destekleyen" },
    name: "TAVAKOLISTUDIO",
    url: "https://tavakolistudio.vercel.app/en",
  },
};
