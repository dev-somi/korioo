import { BarChart3, MapPin, PhoneCall, Users } from "lucide-react";
import Image from "next/image";
import { cookies } from "next/headers";
import { ScrollBlackHeader } from "./components/ScrollBlackHeader";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className ?? "h-4 w-4"} fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.373-2.452a1 1 0 00-1.176 0l-3.374 2.452c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.044 9.394c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.287-3.967z" />
    </svg>
  );
}

function KoreaFlagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className ?? "h-4 w-4"}>
      <path d="M2.5 12c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5-9.5-4.253-9.5-9.5Z" fill="#fff" />
      <path d="M12 6.2a4.7 4.7 0 0 1 4.07 2.35c.3.52.12 1.18-.4 1.48a1.1 1.1 0 0 1-1.48-.4A2.5 2.5 0 0 0 12 8.4a2.5 2.5 0 0 0-2.18 1.23 1.1 1.1 0 0 1-1.48.4 1.1 1.1 0 0 1-.4-1.48A4.7 4.7 0 0 1 12 6.2Z" fill="#E11D48" />
      <path d="M12 17.8a4.7 4.7 0 0 1-4.07-2.35 1.1 1.1 0 1 1 1.88-1.08A2.5 2.5 0 0 0 12 15.6a2.5 2.5 0 0 0 2.18-1.23 1.1 1.1 0 1 1 1.88 1.08A4.7 4.7 0 0 1 12 17.8Z" fill="#2563EB" />
      <path d="M3.9 7.1l3.1 1.8M4.5 5.9l3.1 1.8M3.3 8.3l3.1 1.8" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17 14.9l3.1 1.8M16.4 16.1l3.1 1.8M17.6 13.7l3.1 1.8" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default async function Home() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("sk_locale")?.value || "en";
  const locale = ["ko", "en", "ar", "es", "fr", "it", "ja", "pl", "pt", "tr", "zh-Hans", "zh-Hant"].includes(localeCookie) ? localeCookie as any : "en";

  const COPY = {
    ko: {
      languageLabel: "한국어", login: "로그인", signup: "가입",
      heroTitle1: "진짜 한국어를 배우세요.", heroTitle2: "실질적인 발전을 이루세요.", heroCta: "시작하기",
      strip1: "모든 레벨 환영", strip2: "원어민 튜터와 1:1 화상 수업", strip3: "언제, 어디서나, 24시간",
      goalsTitle: "목표부터 시작하세요", goalsBody: "다양한 수업, 주제 및 활동을 통해 목표에 다가가 보세요. 나의 목표에 맞춰 관심 있는 대화 주제를 선택합니다.", goalsCta: "수강 시작", goalsCard1: "나만의 목표에 집중하기", goalsCard2: "학습 방식 선택",
      tutorsTitle: "나에게 맞는 튜터를 만나 보세요", tutorsBody: "나의 학습 스타일과 관심사에 맞는 튜터들로 팀을 구성하여 성장에 필요한 경험과 피드백을 얻으세요.", tutorsCta: "튜터 검색", tutorsCard1: "첫 주에 다양한 튜터들과 만나 보기", tutorsCard2: "나만을 위한 학습 팀 만들기",
      progressTitle: "진행 상황 보기", progressBody: "수업을 통해 실력을 쌓고 해당 수업을 기반으로 구성된 맞춤 활동으로 학습을 이어 나가 보세요. 시간이 지나면서 자신이 얼마나 성장하는지 지켜보세요.", progressCta: "수강 시작", progressCard1: "수업 안팎에서 배우기", progressCard2: "성장 과정 추적하기",
      pronunciationTitle: "완벽함을 추구하기 보다는 실력 향상에 집중하세요", pronunciationBody: "두려워하거나 판단하지 말고 실수를 통해 배워 나가세요.",
      pricingTitle: "지금 바로 시작하세요. 배움에는 끝이 없죠!",
      pricingSmall: "소규모 그룹", pricingSmallPrice: "₩23,370", pricingSmallDesc: "영어 원어민 및 다양한 악양을 가진 사람들과 함께 말하기와 듣기 실력을 향상하고자 하는 학습자에게 추천합니다. 21세 이상 성인 대상", pricingSmallBtn: "소규모 그룹 플랜 시작하기",
      pricingPersonal: "개인+", pricingPersonalPrice: "₩57,760", pricingPersonalDesc: "1:1 환경에서 실제 영어 회화를 연습하면서 자신감과 유창성을 키우고자 하는 학습자에게 이상적입니다.", pricingPersonalBtn: "개인+ 플랜 시작하기",
      pricingPro: "PRO", pricingProPrice: "₩81,024", pricingProDesc: "PRO 전용 튜터, 체계적인 레슨, 단계별 맞춤 지도를 통해 영어 효율적으로 학습 목표를 달성하고 싶은 분께 추천드립니다.", pricingProBtn: "프로 플랜 시작하기", pricingMonth: " /월",
      testimonialPre: "아직 구독할 준비가 안 되셨나요? 캠블리가 제공하는 모든 것을 살펴보세요", testimonialLink: "캠블리 둘러보기", testimonialQuote: '"보이지 않는 감옥에 갇힌 것 같았습니다. 유일한 탈출구는 바로 언어입니다."', testimonialAuthor1: "Ana, 브라질", testimonialRole1: "미국 회사에서 근무", testimonialAuthor2: "Mehmet, 튀르키예", testimonialRole2: "베를린 거주", testimonialAuthor3: "Wei, 중국", testimonialRole3: "UC 버클리에서 근무", testimonialCta: "수강 시작",
      platformTitle: "PC, 모바일, 테블릿 등 다양한 디바이스로 이용 가능한 캠블리", platformBody: "어디서든 수업을 들을 수 있습니다. 언제든지 연습을 할 수 있습니다. 앱으로 학습을 계속 이어 나가 보세요.",
      tutorCtaTitle: "내가 원하는 대로", tutorCtaBody: "튜터 커뮤니티에 가입하면 언제 어디서나 수익을 올릴 수 있습니다.", tutorCtaBtn: "지금 바로 함께하기",
      finalTitle: "대화를 시작하세요", finalStartBtn: "시작하기", finalPlanBtn: "플랜 옵션 확인하기", finalLoginText: "이미 계정이 있으세요?", finalLoginLink: "로그인",
      nav: [{label:"방법",href:"#how"},{label:"튜터",href:"#tutors"},{label:"커리큘럼",href:"#curriculum"},{label:"자료",href:"#resources"},{label:"Pro",href:"#pro"},{label:"그룹",href:"#groups"},{label:"키즈",href:"#kids"},{label:"비즈니스",href:"#business"}],
      footer1: "튜터 소개", footer1_1: "고객 지원 센터", footer1_2: "커리어", footer1_3: "뉴스룸",
      footer2: "가입", footer2_1: "Cambly Pro", footer2_2: "아이들을 위한 캠블리", footer2_3: "비즈니스용 캠블리", footer2_4: "튜터가 되고 싶으세요?", footer2_5: "캠블리 홍보대사 신청하기",
      footer3: "기타", footer3_1: "개인정보 보호정책", footer3_2: "개인정보 보호 관련 옵션", footer3_3: "이용 약관 및 조건", footer4: "소셜", copyRight: "Cambly Inc. © Copyright 2024. All Rights Reserved."
    },
    en: {
      languageLabel: "영어", login: "Log in", signup: "Sign up",
      heroTitle1: "Learn real Korean.", heroTitle2: "Make real progress.", heroCta: "Get started",
      strip1: "All levels welcome", strip2: "1:1 video lessons with native tutors", strip3: "Anytime, anywhere, 24/7",
      goalsTitle: "Start with your goal", goalsBody: "Get closer to your goals through engaging conversations and activities.", goalsCta: "Start learning", goalsCard1: "Focus on your goals", goalsCard2: "Choose your method",
      tutorsTitle: "Meet the perfect tutor for you", tutorsBody: "Build a team of tutors suited for your learning style.", tutorsCta: "Find a tutor", tutorsCard1: "Meet various tutors your first week", tutorsCard2: "Create your own learning team",
      progressTitle: "Track your progress", progressBody: "Build up your skills and watch yourself grow over time.", progressCta: "Start learning", progressCard1: "Learn in and out of class", progressCard2: "Track your growth",
      pronunciationTitle: "Focus on progress, not perfection", pronunciationBody: "Learn from your mistakes without fear of judgment.",
      pricingTitle: "Start right now. Learning never ends!",
      pricingSmall: "Small Group", pricingSmallPrice: "$20", pricingSmallDesc: "Recommended for improving speaking and listening skills with natives and peers.", pricingSmallBtn: "Start Small Group",
      pricingPersonal: "Personal+", pricingPersonalPrice: "$45", pricingPersonalDesc: "Ideal for practicing real conversations in a 1:1 environment.", pricingPersonalBtn: "Start Personal+",
      pricingPro: "PRO", pricingProPrice: "$75", pricingProDesc: "Recommended for achieving goals efficiently through step-by-step guidance.", pricingProBtn: "Start PRO Plan", pricingMonth: " /mo",
      testimonialPre: "Not ready to subscribe? Browse everything we offer", testimonialLink: "Explore Cambly", testimonialQuote: '"I felt trapped in an invisible cage. The only way out was language."', testimonialAuthor1: "Ana, Brazil", testimonialRole1: "Works at a US company", testimonialAuthor2: "Mehmet, Türkiye", testimonialRole2: "Lives in Berlin", testimonialAuthor3: "Wei, China", testimonialRole3: "Works at UC Berkeley", testimonialCta: "Start learning",
      platformTitle: "Cambly available on PC, Mobile, and Tablets", platformBody: "Take lessons anywhere, anytime. Keep practicing with the app.",
      tutorCtaTitle: "On your own terms", tutorCtaBody: "Join the tutor community and earn from anywhere, anytime.", tutorCtaBtn: "Join now",
      finalTitle: "Start the conversation", finalStartBtn: "Get started", finalPlanBtn: "Check plan options", finalLoginText: "Already have an account?", finalLoginLink: "Log in",
      nav: [{label:"How it works",href:"#how"},{label:"Tutors",href:"#tutors"},{label:"Courses",href:"#curriculum"},{label:"Resources",href:"#resources"},{label:"Pro",href:"#pro"},{label:"Groups",href:"#groups"}],
      footer1: "Tutors", footer1_1: "Support Center", footer1_2: "Careers", footer1_3: "News",
      footer2: "Sign Up", footer2_1: "Cambly Pro", footer2_2: "Cambly Kids", footer2_3: "Cambly for Business", footer2_4: "Become a Tutor", footer2_5: "Ambassador Program",
      footer3: "Other", footer3_1: "Privacy Policy", footer3_2: "Privacy Choices", footer3_3: "Terms of Service", footer4: "Social", copyRight: "Cambly Inc. © Copyright 2024. All Rights Reserved."
    },
    ar: {
      languageLabel: "العربية", login: "تسجيل الدخول", signup: "إنشاء حساب",
      heroTitle1: "تعلّم الكورية الحقيقية.", heroTitle2: "حقق تقدماً ملموساً.", heroCta: "ابدأ الآن",
      strip1: "مرحباً بجميع المستويات", strip2: "دروس فيديو فردية مع مدرسين ناطقين أصلياً", strip3: "في أي وقت وأي مكان، 24/7",
      goalsTitle: "ابدأ بهدفك", goalsBody: "اقترب من هدفك عبر دروس وأنشطة متنوعة. تواصل فوراً مع مدرس وارتقِ بتعبيراتك الطبيعية.", goalsCta: "ابدأ التعلم", goalsCard1: "ركز على أهدافك", goalsCard2: "اختر أسلوبك",
      tutorsTitle: "تعرف على المعلم المثالي لك", tutorsBody: "قم ببناء فريق من المعلمين المناسبين لأسلوب التعلم الخاص بك.", tutorsCta: "ابحث عن مدرس", tutorsCard1: "تعرف على معلمين مختلفين في أسبوعك الأول", tutorsCard2: "أنشئ فريق التعلم الخاص بك",
      progressTitle: "تتبع تقدمك", progressBody: "ابنِ مهاراتك وشاهد نموك بمرور الوقت.", progressCta: "ابدأ التعلم", progressCard1: "تعلم داخل وخارج الفصل", progressCard2: "تتبع نموك",
      pronunciationTitle: "ركز على التقدم، وليس الكمال", pronunciationBody: "تعلم من أخطائك دون خوف.",
      pricingTitle: "ابدأ الآن. التعلم لا ينتهي!",
      pricingSmall: "مجموعة صغيرة", pricingSmallPrice: "الاشتراك", pricingSmallDesc: "يوصى به لتحسين مهارات التحدث والاستماع.", pricingSmallBtn: "ابدأ الخطة",
      pricingPersonal: "شخصي+", pricingPersonalPrice: "اشتراك", pricingPersonalDesc: "مثالي لممارسة المحادثات الحقيقية في بيئة فردية.", pricingPersonalBtn: "ابدأ الخطة",
      pricingPro: "استثنائي", pricingProPrice: "اشتراك", pricingProDesc: "موصى به لتحقيق أهدافك بكفاءة عبر التوجيه.", pricingProBtn: "ابدأ الخطة", pricingMonth: "/شهر",
      testimonialPre: "لست مستعداً للاشتراك؟ تصفح ما نقدمه", testimonialLink: "استكشف كامبلي", testimonialQuote: '"شعرت وكأنني محاصر في قفص غير مرئي. المخرج الوحيد كان اللغة."', testimonialAuthor1: "آنا، البرازيل", testimonialRole1: "تعمل في شركة أمريكية", testimonialAuthor2: "محمد، تركيا", testimonialRole2: "يعيش في برلين", testimonialAuthor3: "وي، الصين", testimonialRole3: "يعمل في جامعة كاليفورنيا", testimonialCta: "ابدأ التعلم",
      platformTitle: "كامبلي متاح على الكمبيوتر والهاتف", platformBody: "خذ الدروس في أي مكان وزمان.",
      tutorCtaTitle: "بشروطك الخاصة", tutorCtaBody: "انضم إلى مجتمع المعلمين واكسب في أي وقت.", tutorCtaBtn: "انضم الآن",
      finalTitle: "ابدأ المحادثة", finalStartBtn: "البدء", finalPlanBtn: "تحقق من الخطط", finalLoginText: "هل لديك حساب بالفعل؟", finalLoginLink: "تسجيل الدخول",
      nav: [{label:"كيف يعمل",href:"#how"},{label:"المدرسون",href:"#tutors"},{label:"المنهج",href:"#curriculum"},{label:"الموارد",href:"#resources"},{label:"Pro",href:"#pro"}],
      footer1: "المدرسون", footer1_1: "مركز الدعم", footer1_2: "وظائف", footer1_3: "أخبار",
      footer2: "اشتراك", footer2_1: "Cambly Pro", footer2_2: "Cambly Kids", footer2_3: "Cambly للشركات", footer2_4: "كن مدرساً", footer2_5: "برنامج السفراء",
      footer3: "أخرى", footer3_1: "سياسة الخصوصية", footer3_2: "خيارات الخصوصية", footer3_3: "شروط الخدمة", footer4: "اجتماعي", copyRight: "Cambly Inc. © Copyright 2024. All Rights Reserved."
    }
  } as const;

  const copy = locale === "ko" ? COPY.ko : locale === "ar" ? COPY.ar : { ...COPY.en, languageLabel: COPY[locale as keyof typeof COPY]?.languageLabel || "English" };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900" dir={locale === "ar" ? "rtl" : "ltr"}>
      <ScrollBlackHeader copy={copy} localeCode={locale} />
      <main>
        <section className="relative isolate overflow-hidden bg-zinc-900">
          <img src="https://images.unsplash.com/photo-1752650733337-cb0189176fb9?auto=format&fit=crop&w=2400&q=80" alt="Hero background" className="absolute inset-0 h-full w-full object-cover opacity-85" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/15" />
          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl items-center px-4 py-24 text-center sm:px-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">{copy.heroTitle1}<br />{copy.heroTitle2}</h1>
              <div className="mt-8 flex justify-center"><a href="#signup" className="btn btn-primary px-8 py-3.5 text-base shadow-md">{copy.heroCta}</a></div>
            </div>
          </div>
        </section>

        <section className="bg-[#2563EB]">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-5 text-sm font-bold text-white sm:px-6 md:grid-cols-3 md:gap-4">
            <div className="flex items-center justify-center gap-3"><BarChart3 className="h-5 w-5" aria-hidden="true" />{copy.strip1}</div>
            <div className="flex items-center justify-center gap-3"><Users className="h-5 w-5" aria-hidden="true" />{copy.strip2}</div>
            <div className="flex items-center justify-center gap-3"><MapPin className="h-5 w-5" aria-hidden="true" />{copy.strip3}</div>
          </div>
        </section>

        <section className="bg-[#FAF8F1]">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">{copy.goalsTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">{copy.goalsBody}</p>
            <div className="mt-8 flex justify-center"><a href="#start" className="btn bg-[#FFE030] px-8 py-3.5 text-base font-extrabold text-zinc-900 shadow-sm hover:bg-[#F2D425] transition-colors" style={{ borderRadius: "9999px" }}>{copy.goalsCta}</a></div>
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group relative rounded-3xl overflow-hidden bg-[#FE644B] aspect-[4/5] md:aspect-square flex flex-col pt-10">
                <div className="relative z-10 text-center mb-6"><p className="font-extrabold text-zinc-900 text-lg sm:text-xl tracking-tight leading-snug px-4">{copy.goalsCard1}</p></div>
                <div className="relative flex-1 w-full mx-auto px-6 pb-6">
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#FF9B7D]/60 ring-1 ring-black/5">
                    <Image
                      src="/focus-goal-illustration.svg"
                      alt={copy.goalsCard1}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-4 sm:p-6"
                      priority={locale === "ko"}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 h-28 rounded-b-[2rem] bg-gradient-to-t from-[#FE644B]/60 via-[#FE644B]/10 to-transparent" />
                </div>
              </div>
              <div className="group relative rounded-3xl overflow-hidden bg-[#D3D0C5] aspect-[4/5] md:aspect-square flex flex-col pt-10">
                <div className="relative z-10 text-center mb-6"><p className="font-extrabold text-zinc-900 text-lg sm:text-xl tracking-tight leading-snug px-4">{copy.goalsCard2}</p></div>
                <div className="relative flex-1 w-full mx-auto"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt={copy.goalsCard2} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-[#D3D0C5] via-transparent to-transparent opacity-80" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F1]">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">{copy.tutorsTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">{copy.tutorsBody}</p>
            <div className="mt-8 flex justify-center"><a href="#tutors" className="btn bg-[#FFE030] px-8 py-3.5 text-base font-extrabold text-zinc-900 shadow-sm hover:bg-[#F2D425] transition-colors" style={{ borderRadius: "9999px" }}>{copy.tutorsCta}</a></div>
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square flex flex-col pt-10">
                <div className="relative z-10 text-center mb-6"><p className="font-extrabold text-zinc-900 text-lg sm:text-xl tracking-tight leading-snug px-4">{copy.tutorsCard1}</p></div>
                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80" alt={copy.tutorsCard1} className="absolute inset-0 mt-20 w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square flex flex-col pt-10">
                <div className="relative z-10 text-center mb-6"><p className="font-extrabold text-white text-lg sm:text-xl tracking-tight leading-snug px-4">{copy.tutorsCard2}</p></div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt={copy.tutorsCard2} className="absolute inset-0 mt-20 w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F1]">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">{copy.progressTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">{copy.progressBody}</p>
            <div className="mt-8 flex justify-center"><a href="#tutors" className="btn bg-[#FFE030] px-8 py-3.5 text-base font-extrabold text-zinc-900 shadow-sm hover:bg-[#F2D425] transition-colors" style={{ borderRadius: "9999px" }}>{copy.progressCta}</a></div>
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group relative rounded-3xl overflow-hidden bg-[#3DA0C8] aspect-[4/5] md:aspect-square flex flex-col pt-10">
                <div className="relative z-10 text-center mb-6"><p className="font-extrabold text-zinc-900 text-lg sm:text-xl tracking-tight leading-snug px-4">{copy.progressCard1}</p></div>
                <img src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80" alt={copy.progressCard1} className="absolute inset-0 mt-20 w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="group relative rounded-3xl overflow-hidden bg-[#BCD4DD] aspect-[4/5] md:aspect-square flex flex-col pt-10">
                <div className="relative z-10 text-center mb-6"><p className="font-extrabold text-zinc-900 text-lg sm:text-xl tracking-tight leading-snug px-4">{copy.progressCard2}</p></div>
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt={copy.progressCard2} className="absolute inset-0 mt-20 w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F1] pt-12 pb-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-5xl mb-6">{copy.platformTitle}</h2>
            <p className="mx-auto max-w-xl text-zinc-700 text-sm md:text-base font-semibold mb-8">{copy.platformBody}</p>
            <div className="flex justify-center gap-4 mb-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-[45px] hover:opacity-80 cursor-pointer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-[45px] hover:opacity-80 cursor-pointer" />
            </div>
            <div className="relative mx-auto max-w-3xl border-[16px] border-zinc-900 rounded-[3rem] overflow-hidden bg-black shadow-2xl">
               <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80" className="w-full h-auto aspect-video object-cover" alt="Multi device view" />
            </div>
          </div>
        </section>

        <section className="bg-[#B2E4F2] pt-24 pb-16 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl relative" style={{ perspective: "1000px" }}>
              <img src="https://images.unsplash.com/photo-1542452255-b4618e9cce32?auto=format&fit=crop&w=800&q=80" className="w-full object-cover aspect-video" alt="Tutor" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">{copy.tutorCtaTitle}</h2>
              <p className="text-zinc-800 font-semibold mb-8">{copy.tutorCtaBody}</p>
              <button className="btn bg-black text-white px-8 py-3.5 rounded-full hover:bg-zinc-800 font-extrabold text-sm shadow-md">{copy.tutorCtaBtn}</button>
            </div>
          </div>
          <div className="absolute -left-[10%] bottom-[-20%] w-[50%] h-[60%] bg-[#7698B9] rotate-[-5deg] transform origin-bottom-left" />
        </section>

        <section className="bg-[#FFE030] py-16 md:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">{copy.pronunciationTitle}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold text-zinc-800 sm:text-base">{copy.pronunciationBody}</p>
            <div className="mt-16 inline-flex flex-col items-center justify-center bg-[#FFEB3B]/30 px-16 py-12 md:px-32 md:py-24 rounded-[3rem] text-center">
              <p className="text-6xl font-serif tracking-tighter text-zinc-900 md:text-[7rem] italic">/ôr/ /ēzē/</p>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F1] py-16 md:py-32">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">{copy.pricingTitle}</h2>
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto items-stretch">
              <div className="card p-8 text-left bg-white rounded-3xl flex flex-col items-start gap-4 shadow-sm border border-transparent">
                <span className="inline-flex rounded text-xs font-bold bg-[#A8B2E0] px-2.5 py-1 text-zinc-900">{copy.pricingSmall}</span>
                <div className="text-4xl font-extrabold text-zinc-900 tracking-tighter mt-4">{copy.pricingSmallPrice}<span className="text-base font-semibold text-zinc-500">{copy.pricingMonth}</span></div>
                <p className="text-xs text-zinc-600 leading-relaxed font-semibold mt-4">{copy.pricingSmallDesc}</p>
                <div className="mt-auto pt-8 w-full"><button className="w-full btn bg-black text-white py-3.5 rounded-full hover:bg-zinc-800 text-sm font-bold shadow-md">{copy.pricingSmallBtn}</button></div>
              </div>
              <div className="card p-8 text-left bg-white rounded-3xl flex flex-col items-start gap-4 shadow-xl border-2 border-[#FFE030] scale-100 md:scale-105 z-10 relative">
                <span className="inline-flex rounded text-xs font-bold bg-[#FFE030] px-2.5 py-1 text-zinc-900">{copy.pricingPersonal}</span>
                <div className="text-4xl font-extrabold text-zinc-900 tracking-tighter mt-4">{copy.pricingPersonalPrice}<span className="text-base font-semibold text-zinc-500">{copy.pricingMonth}</span></div>
                <p className="text-xs text-zinc-600 leading-relaxed font-semibold mt-4">{copy.pricingPersonalDesc}</p>
                <div className="mt-auto pt-8 w-full"><button className="w-full btn bg-black text-white py-3.5 rounded-full hover:bg-zinc-800 text-sm font-bold shadow-md">{copy.pricingPersonalBtn}</button></div>
              </div>
              <div className="card p-8 text-left bg-white rounded-3xl flex flex-col items-start gap-4 shadow-sm border border-transparent">
                <span className="inline-flex rounded text-xs font-bold bg-zinc-800 px-2.5 py-1 text-white tracking-widest">{copy.pricingPro}</span>
                <div className="text-4xl font-extrabold text-zinc-900 tracking-tighter mt-4">{copy.pricingProPrice}<span className="text-base font-semibold text-zinc-500">{copy.pricingMonth}</span></div>
                <p className="text-xs text-zinc-600 leading-relaxed font-semibold mt-4">{copy.pricingProDesc}</p>
                <div className="mt-auto pt-8 w-full"><button className="w-full btn bg-black text-white py-3.5 rounded-full hover:bg-zinc-800 text-sm font-bold shadow-md">{copy.pricingProBtn}</button></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F1] pb-24 md:pb-40 overflow-hidden relative">
          <div className="text-center mb-16 relative z-10 px-4">
             <p className="text-[10px] md:text-sm font-semibold text-zinc-600 mb-6 tracking-wide">{copy.testimonialPre}</p>
             <a href="#tutors" className="btn bg-[#FFE030] px-8 py-3 text-sm font-extrabold text-zinc-900 shadow-sm rounded-full hover:bg-[#F2D425] transition-colors">{copy.testimonialLink}</a>
          </div>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 mt-12 mb-10 overflow-hidden">
             <div className="relative overflow-hidden rounded-md sm:rounded-3xl shadow-2xl bg-[#2C2422]" style={{ transform: "rotate(-3deg) scale(1.03)", transformOrigin: "center" }}>
                <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1600&q=80" alt="Testimonial background" className="w-full h-auto min-h-[500px] object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-20">
                   <h3 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-2xl tracking-tight mb-12">{copy.testimonialQuote}</h3>
                   <div className="flex flex-col sm:flex-row flex-wrap gap-8 mb-10">
                      <div className="flex items-center gap-3"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full border border-white/10" alt="Ana" /><div><p className="text-white text-sm font-bold">{copy.testimonialAuthor1}</p><p className="text-white/60 text-xs mt-0.5">{copy.testimonialRole1}</p></div></div>
                      <div className="flex items-center gap-3"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full border-2 border-transparent" alt="Mehmet" /><div><p className="text-white text-sm font-bold">{copy.testimonialAuthor2}</p><p className="text-white/60 text-xs mt-0.5">{copy.testimonialRole2}</p></div></div>
                      <div className="flex items-center gap-3"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full border-2 border-[#FFE030]" alt="Wei" /><div><p className="text-white text-sm font-bold">{copy.testimonialAuthor3}</p><p className="text-white/60 text-xs mt-0.5">{copy.testimonialRole3}</p></div></div>
                   </div>
                   <div><button className="btn bg-[#FFE030] px-8 py-3 text-sm font-extrabold text-zinc-900 shadow-sm rounded-full hover:bg-[#F2D425] transition-colors">{copy.testimonialCta}</button></div>
                </div>
             </div>
          </div>
        </section>

        <section className="bg-[#FFE030] py-24 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-8">{copy.finalTitle}</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <button className="btn bg-black text-white px-10 py-3.5 rounded-full hover:bg-zinc-800 font-extrabold text-sm shadow-md w-full sm:w-auto">{copy.finalStartBtn}</button>
             <button className="btn bg-transparent border border-black text-black px-8 py-3.5 rounded-full hover:bg-black/5 font-extrabold text-sm w-full sm:w-auto">{copy.finalPlanBtn}</button>
          </div>
          <p className="mt-8 text-sm font-semibold text-zinc-800">{copy.finalLoginText} <a href="#login" className="underline font-bold">{copy.finalLoginLink}</a></p>
        </section>
      </main>

      <footer className="bg-black text-white pt-20 pb-12">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-wrap gap-16 md:gap-24">
             <div><h4 className="font-extrabold text-lg mb-6">{copy.footer1}</h4><ul className="space-y-4 text-sm text-zinc-400 font-medium"><li><a href="#" className="hover:text-white">{copy.footer1_1}</a></li><li><a href="#" className="hover:text-white">{copy.footer1_2}</a></li><li><a href="#" className="hover:text-white">{copy.footer1_3}</a></li></ul></div>
             <div><h4 className="font-extrabold text-lg mb-6">{copy.footer2}</h4><ul className="space-y-4 text-sm text-zinc-400 font-medium"><li><a href="#" className="hover:text-white">{copy.footer2_1}</a></li><li><a href="#" className="hover:text-white">{copy.footer2_2}</a></li><li><a href="#" className="hover:text-white">{copy.footer2_3}</a></li><li><a href="#" className="hover:text-white">{copy.footer2_4}</a></li><li><a href="#" className="hover:text-white">{copy.footer2_5}</a></li></ul></div>
             <div><h4 className="font-extrabold text-lg mb-6">{copy.footer3}</h4><ul className="space-y-4 text-sm text-zinc-400 font-medium"><li><a href="#" className="hover:text-white">{copy.footer3_1}</a></li><li><a href="#" className="hover:text-white">{copy.footer3_2}</a></li><li><a href="#" className="hover:text-white">{copy.footer3_3}</a></li></ul></div>
          </div>
          <div><h4 className="font-extrabold text-lg mb-6 text-center md:text-left">{copy.footer4}</h4><div className="flex gap-4 items-center justify-center md:justify-start text-zinc-400 mb-8"><span className="cursor-pointer hover:text-white">📷</span><span className="cursor-pointer hover:text-white">🌐</span><span className="cursor-pointer hover:text-white">▶</span><span className="cursor-pointer hover:text-white">𝕏</span></div><div className="flex flex-col sm:flex-row gap-4"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-[40px] cursor-pointer opacity-80 hover:opacity-100" /><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-[40px] cursor-pointer opacity-80 hover:opacity-100" /></div></div>
        </div>
        <div className="mx-auto max-w-6xl px-4 mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><div className="w-5 h-5 rounded-full border-[3px] border-black border-dashed" /></div><span className="text-xl font-extrabold tracking-tight">Cambly</span></div>
           <p className="text-xs text-zinc-500">{copy.copyRight}</p>
        </div>
      </footer>
    </div>
  );
}
