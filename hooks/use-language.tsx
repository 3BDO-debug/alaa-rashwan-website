"use client";

import { subscribe } from "diagnostics_channel";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation //
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact Us",
    "nav.subscribe": "Subscribe Now",

    // floating box
    "floating.title": "Special Offer",
    "floating.subtitle": "3-Months For",
    "floating.offerEnds": "Offer ends in:",
    "floating.goal": "Reach your goal & get a 🎁 gift!",
    "floating.cta": "Claim offer",

    // Hero Section
    "hero.badge": "Transform Your Body",
    "hero.title": "Build Your Dream Physique",
    "hero.subtitle":
      "Professional fitness coaching that delivers real results. Join thousands who've transformed their bodies and lives with proven training methods.",
    "hero.cta.primary": "Start Your Journey",
    "hero.cta.secondary": "View Success Stories",
    "hero.stats.clients": "Happy Clients",
    "hero.stats.success": "Success Rate",
    "hero.stats.experience": "Years Experience",

    // About Section
    "about.badge": "Meet Your Coach",
    "about.title": "I'm Alaa Rashwan",
    "about.description":
      "With over 10 years of experience in fitness coaching, I've helped thousands achieve their dream physiques through personalized training and nutrition programs.",
    "about.qualification1": "Certified Trainer",
    "about.qualification2": "Nutrition Expert",
    "about.qualification3": "10+ Years Experience",
    "about.qualification4": "5000+ Happy Clients",
    "about.cta": "Learn More About Me",

    // Transformations Section
    "transformations.badge": "Success Stories",
    "transformations.title": "Real Transformations",
    "transformations.subtitle":
      "See how our clients achieved incredible results with dedicated training and proper guidance.",

    // Pricing Section
    "pricing.badge": "Choose Your Plan",
    "pricing.title": "Training Programs",
    "pricing.subtitle":
      "Select the perfect training program that fits your goals and lifestyle.",
    "pricing.mostPopulor": "Most Popular",
    "pricing.cta": "Subscribe Now",

    // Reviews Section
    "reviews.badge": "Client Testimonials",
    "reviews.title": "What Our Clients Say",
    "reviews.subtitle":
      "Real feedback from people who transformed their lives with our coaching.",
    "reviews.verified": "Verified Client",
    "reviews.review1.name": "Amr",
    "reviews.review1.review":
      "Good luck, God willing, coach. You are one of the respectable people, you understand your work well, and may God grant you success, health, and wellness.",
    "reviews.review2.name": "Yasmin",
    "reviews.review2.review":
      "The coach is one of the very respectable people, he fears God in his work, never delays in replying to any question, and is very honest in what he says. This offer is truly real. I started with the coach, this is my first week, and honestly the follow-up is very good. I was never able to stay committed before, but since I started with him, thank God I’ve been able to commit. God willing, I’ll continue with you until I reach my ideal shape. Wishing you success, God willing.",
    "reviews.review3.name": "Maha",
    "reviews.review3.review":
      "Thank God, it’s very good. Mashallah, I’ve gained 9 kilos, and of course that made a huge difference in my appearance.",
    "reviews.review4.name": "Esraa",
    "reviews.review4.review":
      "Thank you so much. I honestly don’t feel any kind of pressure at all. Psychologically, I feel completely different compared to any other time I tried dieting with many online nutrition doctors. With them, it was always just about rules: ‘this is forbidden, this is not.’ But with you, it’s just a system we follow, without pressure. May God reward you for every person whose life is changing because of your approach, encouragement, and lack of pressure.",
    "reviews.review5.name": "Bassant",
    "reviews.review5.review":
      "Honestly, coach, you’re one of the best people I’ve worked with. You never delay in helping anyone, you’re supportive, and you take care of everything. Thank you for all your effort with us.",
    "reviews.review6.name": "Maria",
    "reviews.review6.review":
      "I haven’t been in touch with you for a long time yet, but honestly, I feel very comfortable dealing with you. May God help us reach our goals, and may He grant you health, God willing.",

    // contact form
    "contactForm.firstName": "First Name *",
    "contactForm.firstNamePlaceholder": "Enter your first name",
    "contactForm.lastName": "Last Name *",
    "contactForm.lastNamePlaceholder": "Enter your last name",
    "contactForm.email": "Email Address *",
    "contactForm.emailPlaceholder": "Enter your email",
    "contactForm.phone": "Phone Number *",
    "contactForm.phonePlaceholder": "Enter your phone number",
    "contactForm.goal": "Fitness Goal *",
    "contactForm.select": "Select your primary goal",
    "contactForm.weight": "Weight Loss",
    "contactForm.muscle": "Muscle Building",
    "contactForm.general": "General Fitness",
    "contactForm.strength": "Strength Training",
    "contactForm.nutrition": "Nutrition Building",
    "contactForm.other": "Other",
    "contactForm.message": "Message *",
    "contactForm.messagePlaceholder":
      "Tell me about your fitness goals, current situation, and any questions you have...",
    "contactForm.cta": "Send Message",

    // Contact Section
    "contact.badge": "Get In Touch",
    "contact.title": "Ready to Start Your Transformation?",
    "contact.subtitle":
      "Contact us today to begin your fitness journey with personalized coaching.",

    // plan 1
    "plan.eco.title": "Economic Package",
    "plan.eco.feature1":
      "Follow-up: 3 days per week with Coach & Team + daily replies to any questions",
    "plan.eco.feature2": "Nutrition plans updated based on your progress",
    "plan.eco.feature3": "Workout video plan (Gym or Home)",
    "plan.eco.feature4":
      "Continuous interaction: You contact us 3 days, and we contact you 3 days",

    // plan 2
    "plan.golden.title": "Golden Package",
    "plan.golden.feature1": "Follow-up: Daily check-ins (except Friday)",
    "plan.golden.feature2": "Supervised by Coach Alaa & the team",
    "plan.golden.feature3":
      "Customized nutrition & workout plans with instant updates",
    "plan.golden.feature4":
      "Injury management & personalized workout plans for injuries",
    "plan.golden.feature5": "Motivational & mental support",

    // plan 3
    "plan.ladies.title": "Ladies Package 👩",
    "plan.ladies.feature1":
      "Follow-up: With a female nutrition doctor + female coach",
    "plan.ladies.feature2":
      "Privacy: 100% confidential and exclusive with a female-only team",
    "plan.ladies.feature3": "Customized nutrition & workout plans",
    "plan.ladies.feature4": "Continuous tracking and adjustments",

    // plan 4
    "plan.vip.title": "VIP Package ⭐",
    "plan.vip.feature1":
      "Follow-up: Daily check-ins directly with Coach Alaa only",
    "plan.vip.feature2": "Fully customized and updated nutrition plans",
    "plan.vip.feature3": "Exclusive workout programs (Gym or Home)",
    "plan.vip.feature4": "Personal Zoom/Video calls",
    "plan.vip.feature5": "Detailed progress tracking & body measurements",
    "plan.vip.feature6": "Direct support & motivation from Coach Alaa",
    "plan.vip.feature7": "Priority replies & premium support",

    // Common home
    "plan.button": "Subscribe Now",
    "plan.freeMonths": "Free months",

    // durations
    "duration.1": "1 Month",
    "duration.3": "3 Months",
    "duration.6": "6 Months",
    "duration.12": "12 Months",

    // subscription popup
    "subscriptionPopUp.title": "Subscription for",
    "subscriptionPopUp.firstName": "First Name",
    "subscriptionPopUp.lastName": "Last Name",
    "subscriptionPopUp.email": "Email",
    "subscriptionPopUp.phone": "Phone Number",
    "subscriptionPopUp.gender": "Gender",
    "subscriptionPopUp.male": "Male",
    "subscriptionPopUp.female": "Female",
    "subscriptionPopUp.cancel": "Cancel",
    "subscriptionPopUp.submit": "Submit",

    // about us page
    "aboutUs.badge": "Meet Your Coach",
    "aboutUs.title1": "I'm",
    "aboutUs.title2": "Alaa Rashwan",
    "aboutUs.subtitle":
      "Your personal coach is here to help you achieve a remarkable change with clear steps and direct guidance.",
    "aboutUs.experience": "Years Experience",
    "aboutUs.changed": "Lives Changed",

    // journey
    "journey.badge": "My Journey",
    "journey.title1": "From",
    "journey.title2": "Struggle",
    "journey.title3": "to Success",
    "journey.beginningTitle": "The Beginning",
    "journey.beginningSubtitle1":
      "My fitness journey began with my own struggles. Like many of you, I was an everyday person dealing with weight issues, low energy, and low confidence. I tried countless diets and workout programs, but nothing seemed to work long-term.",
    "journey.beginningSubtitle2":
      "That’s when I realized the problem wasn’t me—it was the one-size-fits-all approach most programs use. I needed something personalized, sustainable, and realistic for my lifestyle. Today, I bring that same approach to my clients—not just with tailored plans, but also by keeping them motivated through fun challenges and rewards, because I believe celebrating progress with meaningful gifts makes the journey more exciting and achievable.",
    "journey.educationTitle": "The Education",
    "journey.educationSubtitle":
      " After my own transformation, I became passionate about helping others. I invested years in education, earning multiple certifications in personal training, nutrition, and behavioral psychology.",
    "journey.qualification1": "NASM Certified Personal Trainer",
    "journey.qualification2": "Precision Nutrition Certified",
    "journey.qualification3": "Behavioral Change Specialist",
    "journey.missionTitle": "The Mission",
    "journey.missionSubtitle1":
      "Today, my mission is simple: to help everyday people achieve extraordinary results without sacrificing their lifestyle or sanity. I believe fitness should enhance your life, not consume it.",
    "journey.missionSubtitle2":
      "Every program I create is designed with real people in mind – busy parents, working professionals, students, and anyone who wants to feel confident and healthy in their own skin.",

    // credentials
    "credentials.badge": "Professional Credentials",
    "ceredentials.title1": "My",
    "ceredentials.title2": "Certifications",
    "ceredentials.title3": "& Qualifications",
    "ceredentials.subtitle":
      "Backed by years of education and continuous learning to provide you with the most effective, science-based training methods.",

    // values
    "values.badge": "My Values",
    "values.title1": "What I",
    "values.title2": "Stand For",
    "values.value1.title": "Personalization",
    "values.value1.description":
      "Every person is unique, and so should be their fitness journey. I create customized programs that fit your lifestyle, preferences, and goals.",
    "values.value2.title": "Sustainability",
    "values.value2.description":
      "Quick fixes don't work. I focus on building lasting habits and lifestyle changes that you can maintain for life.",
    "values.value3.title": "Support",
    "values.value3.description":
      "You're never alone in this journey. I provide ongoing support, motivation, and guidance every step of the way.",

    // stories
    "stories.badge": "Success Stories",
    "stories.title1": "Real People, Real",
    "stories.title2": "Results",
    "stories.subtitle":
      "These transformations represent more than just physical changes – they're stories of renewed confidence, energy, and life satisfaction.",

    // ready
    "ready.badge": "Ready to Start?",
    "ready.title1": "Let's Write Your",
    "ready.title2": "Success Story",
    "ready.subtitle":
      "Join thousands of people who have transformed their lives with personalized coaching. Your journey to a healthier, more confident you starts today.",
    "ready.cta1": "View Subscription Plans",
    "ready.cta2": "Get in Touch",

    // pricing page intro
    "pricingPage.badge": "Choose Your Plan",
    "pricingPage.title1": "Invest in Your",
    "pricingPage.title2": "Transformation",
    "pricingPage.subtitle":
      "Choose the perfect coaching plan that fits your goals, budget, and lifestyle. All plans include personalized guidance and proven results.",
    "pricingPage.feature1.title": "30-Day",
    "pricingPage.feature1.subtitle": "Money Back Guarantee",
    "pricingPage.feature2.title": "Cancel",
    "pricingPage.feature2.subtitle": "Anytime",
    "pricingPage.feature3.title": "24/7",
    "pricingPage.feature3.subtitle": "Support Available",
    "pricingPage.hook": "Not sure which plan is right for you?",
    "pricingPage.hookCta": "Schedule a Free Consultation",

    // questions
    "questions.badge": "Common Questions",
    "questions.title1": "Frequently Asked",
    "questions.title2": "Questions",
    "questions.q1": "Can I change my plan later?",
    "questions.a1":
      "You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
    "questions.q2": "What if I'm not satisfied?",
    "questions.a2":
      "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your first month's payment.",
    "questions.q3": "Do I need gym equipment?",
    "questions.a3":
      "Not necessarily! I can create workout plans for home, gym, or outdoor settings based on your preferences and available equipment.",
    "questions.q4": "How quickly will I see results?",
    "questions.a4":
      "Most clients start seeing changes within 2-4 weeks, with significant transformations typically occurring within 3-6 months of consistent effort.",

    // transform
    "transform.badge": "Ready to Transform?",
    "transform.title1": "Your",
    "transform.title2": "Journey",
    "transform.title3": "Starts Today",
    "transform.subtitle":
      "Don't wait for the perfect time. The best time to start is now. Choose your plan and begin your transformation journey today.",
    "transform.cta1": "Subscribe Now",
    "transform.cta2": "Schedule Free Consultation",
    "transform.footer":
      "30-day money-back guarantee • Cancel anytime • No hidden fees",

    // contact page
    "contactPage.badge": "Get In Touch",
    "contactPage.title1": "Let's Start Your",
    "contactPage.title2": "Journey",
    "contactPage.subtitle":
      "Ready to transform your life? I'm here to answer your questions and help you choose the perfect program for your goals.",
    "contactPage.feature1.title": "24h",
    "contactPage.feature1.subtitle": "Response Time",
    "contactPage.feature2.title": "Free",
    "contactPage.feature2.subtitle": "Consultation",
    "contactPage.feature3.title": "100%",
    "contactPage.feature3.subtitle": "Confidential",
    "contactPage.form.title": "Send Me a Message",
    "contactPage.form.subtitle":
      "Fill out the form below and I'll get back to you within 24 hours.",

    // info
    "info.badge": "Contact Information",
    "info.title1": "Let's",
    "info.title2": "Connect",
    "info.subtitle":
      "I'm here to support you every step of the way. Whether you have questions about programs, need guidance on getting started, or want to discuss your specific goals, don't hesitate to reach out.",
    "info.email": "Email",
    "info.phone": "Phone",
    "info.response.title": "Response Time",
    "info.response.subtitle": "Instant",
    "info.consultation.title": "Free Consultation Available",
    "info.consultation.subtitle":
      "Not sure which program is right for you? Schedule a free 15-minute consultation call to discuss your goals and find the perfect fit.",
    "info.consultation.cta": "Schedule Free Call",

    // q&a
    "qa.badge": "Quick Answers",
    "qa.title1": "Before You",
    "qa.title2": "Reach Out",
    "qa.q1": "How quickly can I start?",
    "qa.a1":
      "Once you subscribe, you'll receive your personalized program within 48 hours and can start immediately.",
    "qa.q2": "Do you work with beginners?",
    "qa.a2":
      "I specialize in helping everyday people, regardless of their current fitness level.",
    "qa.q3": "What if I have injuries?",
    "qa.a3":
      "I can modify programs to work around injuries and limitations. Always consult your doctor first.",
    "qa.q4": "Can I cancel anytime?",
    "qa.a4":
      "Yes, you can cancel your subscription at any time with no cancellation fees or penalties.",

    // footer
    "footer.description":
      "Transform your body and mind with professional fitness coaching tailored for everyday people.",
    "footer.linksTitle": "Quick Links",
    "footer.link1": "Home",
    "footer.link2": "About Us",
    "footer.link3": "Pricing",
    "footer.link4": "Contact Us",
    "footer.programsTitle": "Programs",
    "footer.program1": "Weight Loss",
    "footer.program2": "Muscle Building",
    "footer.program3": "Strength Training",
    "footer.program4": "Nutrition Coaching",
    "footer.followUs": "Follow Us",
  },

  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.pricing": "الأسعار",
    "nav.contact": "تواصل معنا",
    "nav.subscribe": "اشترك الآن",

    // floating box
    "floating.title": "عرض خاص",
    "floating.subtitle": "3 أشهر مقابل",
    "floating.offerEnds": "ينتهي العرض خلال:",
    "floating.goal": "حقق هدفك واحصل على 🎁 هدية!",
    "floating.cta": "احجز العرض",

    // Hero Section
    "hero.badge": "حوّل جسمك",
    "hero.title": "ابنِ جسمك المثالي",
    "hero.subtitle":
      "تدريب احترافي يحقق نتائج حقيقية. انضم لآلاف الأشخاص الذين غيّروا حياتهم وأجسامهم بطرق تدريب مجربة.",
    "hero.cta.primary": "ابدأ رحلتك",
    "hero.cta.secondary": "شاهد قصص النجاح",
    "hero.stats.clients": "عملاء سعداء",
    "hero.stats.success": "نسبة النجاح",
    "hero.stats.experience": "سنوات الخبرة",

    // About Section
    "about.badge": "تعرف على مدربك",
    "about.title": "أنا علاء رشوان",
    "about.description":
      "بأكثر من 10 سنوات خبرة في التدريب الرياضي، ساعدت آلاف الأشخاص على تحقيق أجسام أحلامهم من خلال برامج تدريب وتغذية مخصصة.",
    "about.qualification1": "مدرب معتمد",
    "about.qualification2": "خبير تغذية",
    "about.qualification3": "10+ سنوات خبرة",
    "about.qualification4": "5000+ عميل سعيد",
    "about.cta": "تعرف عليّ أكثر",

    // Transformations Section
    "transformations.badge": "قصص النجاح",
    "transformations.title": "تحولات حقيقية",
    "transformations.subtitle":
      "شاهد كيف حقق عملاؤنا نتائج مذهلة من خلال التدريب المخصص والإرشاد الصحيح.",

    // Pricing Section
    "pricing.badge": "اختر خطتك",
    "pricing.title": "برامج التدريب",
    "pricing.subtitle": "اختر البرنامج المناسب لأهدافك ونمط حياتك.",
    "pricing.mostPopulor": "الأكثر شيوعًا",
    "pricing.cta": "اشترك الآن",

    // Reviews Section
    "reviews.badge": "آراء العملاء",
    "reviews.title": "ماذا يقول عملاؤنا",
    "reviews.subtitle": "آراء حقيقية من أشخاص غيّروا حياتهم معنا.",
    "reviews.verified": "عميل موثق",
    "reviews.review1.name": "عمرو",
    "reviews.review1.review":
      "بالتوفيق باذن الله تعالى يا كوتش حضرتك من الناس المحترمة وفاهم كويس فى شغلك وربنا يوفقك ويديك الصحه والعافيه يارب",
    "reviews.review2.name": "يسمين",
    "reviews.review2.review":
      "الكابتن من الشخصيات المحترمه جدا وبيتقى ربنا فى شغله ومش بيتاخر فى الرد على اى سؤال وفى مصداقيه فى كلامه والعرض ده فعلا حقيقى وانا بدات مع الكابتن وده اول اسبوع ليا وفعلا المتابعه حلوه جدا وانا فعلا مكنتش بعرف التزم بدات مع الكابتن والحمدلله بقيت التزم وان شاء اللّٰه هكمل مع حضرتك لحد المثالى بالتوفيق لحضرتك أن شاء اللّٰه",
    "reviews.review3.name": "مها",
    "reviews.review3.review":
      "الحمد لله كويس جدا ما شاء اللّٰه كدا زيادة ٩ كيلو اكيد فرقوا جدا في الشكل",
    "reviews.review4.name": "إسراء",
    "reviews.review4.review":
      "شكرا جدا لحضرتك انا فعلا مش حاسة بأي ضغط خالص نفسيا متغيرة تماما عن أي مرة جربت دايت مع دكاترة تغذية كتير اون لاين بس هو مجرد نظام نمشي عليه مش اكتر ودا ممنوع ودا لا لا ربنا يجزيك خير ع كل حد فينا حياته بتتغير بسبب نظامك وعدم ضغطك وتشجيعك",
    "reviews.review5.name": "باسنت",
    "reviews.review5.review":
      "حقيقي يا كابتن حضرتك من اشطر الناس اللي تابعت عندها ومش تتأخر على حد وبتساعد وبتراعي كل حاجه شكراً لحضرتك على تعبك معانا",
    "reviews.review6.name": "ماريا",
    "reviews.review6.review":
      "انا لسه مكلماك مش من فتره كبيره بس بجد ارتحت معاك في التعامل قوي وربنا يكمل و نوصل لهدفنا يارب وربنا يديك الصحه يارب",

    // contact form
    "contactForm.firstName": "الاسم الأول *",
    "contactForm.firstNamePlaceholder": "ادخل اسمك الأول",
    "contactForm.lastName": "اسم العائلة *",
    "contactForm.lastNamePlaceholder": "ادخل اسم العائلة",
    "contactForm.email": "البريد الإلكتروني *",
    "contactForm.emailPlaceholder": "ادخل بريدك الإلكتروني",
    "contactForm.phone": "رقم الهاتف *",
    "contactForm.phonePlaceholder": "ادخل رقم هاتفك",
    "contactForm.goal": "الهدف الرياضي *",
    "contactForm.select": "اختر هدفك الأساسي",
    "contactForm.weight": "خسارة الوزن",
    "contactForm.muscle": "بناء العضلات",
    "contactForm.general": "لياقة عامة",
    "contactForm.strength": "تدريب القوة",
    "contactForm.nutrition": "بناء نظام غذائي",
    "contactForm.other": "أخرى",
    "contactForm.message": "رسالتك *",
    "contactForm.messagePlaceholder":
      "اخبرني عن أهدافك، وضعك الحالي، وأي أسئلة لديك...",
    "contactForm.cta": "أرسل الرسالة",

    // Contact Section
    "contact.badge": "تواصل معنا",
    "contact.title": "جاهز لتبدأ رحلتك؟",
    "contact.subtitle": "اتصل بنا اليوم وابدأ رحلتك مع تدريب مخصص.",

    // الخطة 1
    "plan.eco.title": "الباقة الاقتصادية",
    "plan.eco.feature1":
      "المتابعة: 3 أيام في الأسبوع مع الكابتن والفريق + رد يومي على أي استفسارات",
    "plan.eco.feature2": "تحديث خطط التغذية بناءً على تقدمك",
    "plan.eco.feature3": "خطة تمارين بالفيديو (جيم أو منزل)",
    "plan.eco.feature4":
      "تفاعل مستمر: أنت تتواصل معنا 3 أيام ونحن نتواصل معك 3 أيام",

    // الخطة 2
    "plan.golden.title": "الباقة الذهبية",
    "plan.golden.feature1": "المتابعة: متابعة يومية (ما عدا يوم الجمعة)",
    "plan.golden.feature2": "بإشراف الكابتن علاء والفريق",
    "plan.golden.feature3": "خطط تغذية وتمارين مخصصة مع تحديثات فورية",
    "plan.golden.feature4": "إدارة الإصابات وخطط تمارين مخصصة للإصابات",
    "plan.golden.feature5": "دعم تحفيزي ونفسي",

    // الخطة 3
    "plan.ladies.title": "باقة السيدات 👩",
    "plan.ladies.feature1": "المتابعة: مع دكتورة تغذية وكابتن سيدات",
    "plan.ladies.feature2": "الخصوصية: سرية تامة وحصرية مع فريق نسائي فقط",
    "plan.ladies.feature3": "خطط تغذية وتمارين مخصصة",
    "plan.ladies.feature4": "متابعة وتعديلات مستمرة",

    // الخطة 4
    "plan.vip.title": "الباقة المميزة VIP ⭐",
    "plan.vip.feature1": "المتابعة: متابعة يومية مباشرة مع الكابتن علاء فقط",
    "plan.vip.feature2": "خطط تغذية مخصصة بالكامل مع تحديثات مستمرة",
    "plan.vip.feature3": "برامج تمارين حصرية (جيم أو منزل)",
    "plan.vip.feature4": "مكالمات زووم/فيديو شخصية",
    "plan.vip.feature5": "متابعة دقيقة للنتائج وقياسات الجسم",
    "plan.vip.feature6": "دعم مباشر وتحفيز من الكابتن علاء",
    "plan.vip.feature7": "أولوية في الردود ودعم مميز",

    // Common home
    "plan.button": "اشترك الآن",
    "plan.freeMonths": "أشهر مجانية",

    // durations
    "duration.1": "شهر واحد",
    "duration.3": "3 أشهر",
    "duration.6": "6 أشهر",
    "duration.12": "12 شهرًا",

    // subscription popup
    "subscriptionPopUp.title": "الاشتراك في",
    "subscriptionPopUp.firstName": "الاسم الأول",
    "subscriptionPopUp.lastName": "اسم العائلة",
    "subscriptionPopUp.email": "البريد الإلكتروني",
    "subscriptionPopUp.phone": "رقم الهاتف",
    "subscriptionPopUp.gender": "النوع",
    "subscriptionPopUp.male": "ذكر",
    "subscriptionPopUp.female": "أنثى",
    "subscriptionPopUp.cancel": "إلغاء",
    "subscriptionPopUp.submit": "إرسال",

    // about us page
    "aboutUs.badge": "تعرف على مدربك",
    "aboutUs.title1": "أنا",
    "aboutUs.title2": "علاء رشوان",
    "aboutUs.subtitle":
      "مدربك الشخصي هنا لمساعدتك على تحقيق تغيير مميز بخطوات واضحة وتوجيه مباشر.",
    "aboutUs.experience": "سنوات خبرة",
    "aboutUs.changed": "حياة تغيّرت",

    // journey
    "journey.badge": "رحلتي",
    "journey.title1": "من",
    "journey.title2": "المعاناة",
    "journey.title3": "إلى النجاح",
    "journey.beginningTitle": "البداية",
    "journey.beginningSubtitle1":
      "بدأت رحلتي في اللياقة مع معاناتي الخاصة. مثل الكثير منكم، كنت شخصًا عاديًا أتعامل مع مشاكل الوزن، وانخفاض الطاقة، وقلة الثقة بالنفس. جربت العديد من الحميات وبرامج التمرين، لكن لم ينجح أي منها على المدى الطويل.",
    "journey.beginningSubtitle2":
      "عندها أدركت أن المشكلة لم تكن فيّ، بل في الأسلوب الواحد الذي تتبعه معظم البرامج. كنت بحاجة إلى شيء مخصص، مستدام، وواقعي ليناسب أسلوب حياتي. واليوم، أنقل هذا النهج نفسه إلى عملائي—ليس فقط من خلال خطط مخصصة، بل أيضًا عبر الحفاظ على حماسهم من خلال تحديات ممتعة ومكافآت، لأني أؤمن أن الاحتفال بالتقدم بهدايا ذات معنى يجعل الرحلة أكثر متعة وقابلية للتحقيق.",
    "journey.educationTitle": "التعليم",
    "journey.educationSubtitle":
      "بعد تحولي الشخصي، كرست حياتي لمساعدة الآخرين. استثمرت سنوات في الدراسة وحصلت على عدة شهادات في التدريب الشخصي، التغذية، وعلم النفس السلوكي.",
    "journey.qualification1": "مدرب شخصي معتمد من NASM",
    "journey.qualification2": "شهادة Precision Nutrition",
    "journey.qualification3": "أخصائي تغيير سلوكي",
    "journey.missionTitle": "المهمة",
    "journey.missionSubtitle1":
      "رسالتي اليوم بسيطة: مساعدة الأشخاص العاديين على تحقيق نتائج استثنائية دون التضحية بأسلوب حياتهم.",
    "journey.missionSubtitle2":
      "كل برنامج أصممه مخصص للأشخاص المشغولين: الآباء، الموظفين، الطلاب، وكل من يريد أن يشعر بالثقة والصحة.",

    // credentials
    "credentials.badge": "الاعتمادات المهنية",
    "ceredentials.title1": "شهاداتي",
    "ceredentials.title2": "ومؤهلاتي",
    "ceredentials.title3": "المهنية",
    "ceredentials.subtitle":
      "مدعومة بسنوات من التعليم والتعلم المستمر لتزويدك بأحدث الأساليب العلمية.",

    // values
    "values.badge": "قيمـي",
    "values.title1": "ما الذي",
    "values.title2": "أؤمن به",
    "values.value1.title": "التخصيص",
    "values.value1.description":
      "كل شخص مختلف، ولذلك يجب أن تكون رحلته الرياضية مخصصة وفقًا لأهدافه وحياته.",
    "values.value2.title": "الاستدامة",
    "values.value2.description":
      "الحلول السريعة لا تنجح. أركز على بناء عادات طويلة الأمد يمكنك الاستمرار عليها.",
    "values.value3.title": "الدعم",
    "values.value3.description":
      "أنت لست وحدك. أوفر لك دعمًا وتحفيزًا مستمرًا في كل خطوة.",

    // stories
    "stories.badge": "قصص النجاح",
    "stories.title1": "أشخاص حقيقيون،",
    "stories.title2": "نتائج حقيقية",
    "stories.subtitle":
      "هذه التحولات ليست جسدية فقط، بل قصص عن الثقة والطاقة والسعادة بالحياة.",

    // ready
    "ready.badge": "جاهز للبدء؟",
    "ready.title1": "دعنا نكتب",
    "ready.title2": "قصتك الناجحة",
    "ready.subtitle":
      "انضم لآلاف الأشخاص الذين غيّروا حياتهم معنا. رحلتك نحو نسخة صحية وأكثر ثقة من نفسك تبدأ اليوم.",
    "ready.cta1": "شاهد خطط الاشتراك",
    "ready.cta2": "تواصل معنا",

    // pricing page intro
    "pricingPage.badge": "اختر خطتك",
    "pricingPage.title1": "استثمر في",
    "pricingPage.title2": "تحولك",
    "pricingPage.subtitle":
      "اختر الخطة المثالية لأهدافك وميزانيتك. جميع الخطط تشمل متابعة شخصية ونتائج مثبتة.",
    "pricingPage.feature1.title": "ضمان 30 يوم",
    "pricingPage.feature1.subtitle": "استرجاع الأموال",
    "pricingPage.feature2.title": "إلغاء",
    "pricingPage.feature2.subtitle": "في أي وقت",
    "pricingPage.feature3.title": "24/7",
    "pricingPage.feature3.subtitle": "دعم متاح",
    "pricingPage.hook": "غير متأكد من الخطة المناسبة لك؟",
    "pricingPage.hookCta": "احجز استشارة مجانية",

    // questions
    "questions.badge": "الأسئلة الشائعة",
    "questions.title1": "أسئلة",
    "questions.title2": "شائعة",
    "questions.q1": "هل يمكنني تغيير خطتي لاحقًا؟",
    "questions.a1":
      "يمكنك ترقية أو تخفيض خطتك في أي وقت. يسري التغيير مع دورة الفوترة التالية.",
    "questions.q2": "ماذا لو لم أكن راضيًا؟",
    "questions.a2":
      "نوفر ضمان استرداد الأموال خلال 30 يومًا. إذا لم تكن راضيًا، سنعيد لك دفعتك الأولى.",
    "questions.q3": "هل أحتاج لمعدات رياضية؟",
    "questions.a3":
      "ليس بالضرورة! يمكنني تصميم خطط للمنزل أو النادي أو الهواء الطلق حسب إمكانياتك.",
    "questions.q4": "متى سأرى النتائج؟",
    "questions.a4":
      "معظم العملاء يلاحظون التغيير خلال 2-4 أسابيع، والتحولات الكبرى تحدث عادة خلال 3-6 أشهر.",

    // transform
    "transform.badge": "جاهز للتحول؟",
    "transform.title1": "رحلتك",
    "transform.title2": "تبدأ",
    "transform.title3": "اليوم",
    "transform.subtitle":
      "لا تنتظر الوقت المثالي. الوقت الأفضل هو الآن. اختر خطتك وابدأ رحلتك.",
    "transform.cta1": "اشترك الآن",
    "transform.cta2": "احجز استشارة مجانية",
    "transform.footer":
      "ضمان استرجاع الأموال خلال 30 يوم • إلغاء في أي وقت • لا رسوم خفية",

    // contact page
    "contactPage.badge": "تواصل معنا",
    "contactPage.title1": "لنبدأ",
    "contactPage.title2": "رحلتك",
    "contactPage.subtitle":
      "جاهز لتغيير حياتك؟ أنا هنا للإجابة على أسئلتك ومساعدتك في اختيار البرنامج الأنسب.",
    "contactPage.feature1.title": "24 ساعة",
    "contactPage.feature1.subtitle": "وقت الرد",
    "contactPage.feature2.title": "مجانية",
    "contactPage.feature2.subtitle": "استشارة",
    "contactPage.feature3.title": "100%",
    "contactPage.feature3.subtitle": "سرية",
    "contactPage.form.title": "أرسل لي رسالة",
    "contactPage.form.subtitle": "املأ النموذج وسأرد عليك خلال 24 ساعة.",

    // info
    "info.badge": "معلومات التواصل",
    "info.title1": "دعنا",
    "info.title2": "نتواصل",
    "info.subtitle":
      "أنا هنا لدعمك في كل خطوة. سواء كان لديك أسئلة عن البرامج أو تحتاج إرشادًا، لا تتردد في التواصل.",
    "info.email": "البريد الإلكتروني",
    "info.phone": "الهاتف",
    "info.response.title": "وقت الرد",
    "info.response.subtitle": "بمجرد ارسال",
    "info.consultation.title": "استشارة مجانية متاحة",
    "info.consultation.subtitle":
      "غير متأكد من البرنامج المناسب لك؟ احجز مكالمة مجانية مدتها 15 دقيقة لمناقشة أهدافك.",
    "info.consultation.cta": "احجز مكالمة مجانية",

    // q&a
    "qa.badge": "إجابات سريعة",
    "qa.title1": "قبل أن",
    "qa.title2": "تتواصل معنا",
    "qa.q1": "كم من الوقت أحتاج للبدء؟",
    "qa.a1": "بمجرد الاشتراك، ستحصل على برنامجك خلال 48 ساعة وتبدأ مباشرة.",
    "qa.q2": "هل تعمل مع المبتدئين؟",
    "qa.a2": "أخصص برامجي لمساعدة جميع الأشخاص بغض النظر عن مستواهم الحالي.",
    "qa.q3": "ماذا لو كان لدي إصابات؟",
    "qa.a3":
      "يمكنني تعديل البرامج لتناسب إصاباتك، ولكن استشر طبيبك دائمًا أولًا.",
    "qa.q4": "هل يمكنني الإلغاء في أي وقت؟",
    "qa.a4": "نعم، يمكنك إلغاء اشتراكك في أي وقت دون رسوم.",

    // footer
    "footer.description":
      "حوّل جسدك وعقلك مع تدريب احترافي مخصص للأشخاص العاديين.",
    "footer.linksTitle": "روابط سريعة",
    "footer.link1": "الرئيسية",
    "footer.link2": "من نحن",
    "footer.link3": "الأسعار",
    "footer.link4": "تواصل معنا",
    "footer.programsTitle": "البرامج",
    "footer.program1": "خسارة الوزن",
    "footer.program2": "بناء العضلات",
    "footer.program3": "تدريب القوة",
    "footer.program4": "التغذية",
    "footer.followUs": "تابعنا",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
