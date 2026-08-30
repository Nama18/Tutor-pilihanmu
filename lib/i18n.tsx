"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Language = "en" | "id";

const en = {
  nav: {
    home: "Home",
    programs: "Programs",
    about: "About Us",
    startLearning: "Start Learning",
    toggleMenu: "Toggle menu",
  },
  hero: {
    title: "Empower Your Child's Future",
    subtitle:
      "Personalized tutoring designed to unlock potential and build lasting confidence.",
    cta: "Start Learning Now",
    imageAlt:
      "A happy female tutor and a young boy student engaging in a fun online learning session",
  },
  programs: {
    title: "Tailored Learning for Every Age",
    subtitle:
      "We offer specialized programs designed to engage and challenge learners at every stage — from early childhood to professionals exploring something new.",
    items: [
      {
        titleKey: "toddler",
        title: "Toddler",
        description:
          "Play-based learning introducing basic concepts, colors, and social skills in a fun environment.",
      },
      {
        titleKey: "preschool",
        title: "Preschool",
        description:
          "Building foundational literacy and numeracy skills to prepare for a smooth transition to school.",
      },
      {
        titleKey: "primary",
        title: "Primary",
        description:
          "Core subject tutoring in Math, Science, and Language Arts to boost confidence and grades.",
      },
      {
        titleKey: "middleSchool",
        title: "Middle School",
        description:
          "Advanced subject support, study skills, and exam preparation for academic success.",
      },
      {
        titleKey: "highSchool",
        title: "High School",
        description:
          "In-depth subject mastery, exam preparation, and study strategies for college readiness.",
      },
      {
        titleKey: "college",
        title: "College",
        description:
          "University-level support in coursework, projects, and foundational academic skills.",
      },
      {
        titleKey: "professionals",
        title: "Professionals",
        description:
          "Flexible upskilling sessions for working adults looking to learn something new.",
      },
    ],
  },
  subjects: {
    title: "Subjects We Teach",
    subtitle: "Choose from focused subject programs taught by expert tutors.",
    items: [
      {
        titleKey: "english",
        title: "English",
        description:
          "Master conversation, academic writing, and debate — and speak with confidence in every room.",
      },
      {
        titleKey: "social",
        title: "Social",
        description:
          "Understand the forces that shape our world through Accounting, Economics, History, Sociology, and Geography — with engaging, real-world lessons.",
      },
      {
        titleKey: "science",
        title: "Science",
        description:
          "Master Math, Physics, and Chemistry with clear explanations and hands-on problem solving.",
      },
      {
        titleKey: "coding",
        title: "Coding / IT",
        description:
          "Learn programming, web development, and digital skills for school and beyond.",
      },
      {
        titleKey: "mandarin",
        title: "Mandarin",
        description:
          "Learn Mandarin from beginner to advanced with practical, interactive lessons.",
      },
    ],
  },
  features: {
    title: "Why Choose Us?",
    subtitle: "A proven method for academic success.",
    items: [
      {
        titleKey: "personalized",
        title: "Personalized Approach",
        description: "Tailored learning plans to fit individual student needs.",
      },
      { titleKey: "flexibleHours", title: "Flexible Hours", description: "" },
      { titleKey: "expertTutors", title: "Expert Tutors", description: "" },
    ],
  },
  testimonial: {
    title: "Student Stories",
    items: [
      {
        quote:
          "Hi miss, sorry for the late reply. When I asked Katya, she said all the lessons are going well.",
        name: "Katya's Parent",
        role: "Student's Parent",
      },
      {
        quote:
          "Good morning too miss. The consultation session went smoothly — so far so good.",
        name: "Parent",
        role: "Program Consultation",
      },
      {
        quote: "Yes miss, the tutor explains things really well.",
        name: "Parent",
        role: "Lesson Feedback",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle:
      "Got a question? We've gathered the answers parents and students ask us most.",
    items: [
      {
        question: "How much does it cost to book a session?",
        answer:
          "Every session starts from just 75k — flexible pricing designed to fit your budget without compromising quality.",
      },
      {
        question: "Why should I choose tutoring here?",
        answer:
          "You set your own schedule, learn from qualified tutors, and every lesson is tailored to your child's needs — so learning truly fits them, not the other way around.",
      },
      {
        question: "Are there discount packages for booking more than a month?",
        answer:
          "Yes, definitely. The longer you book, the more you save — ask us about our monthly package rates!",
      },
      {
        question: "What does free consultation mean?",
        answer:
          "We believe lessons should go straight to what matters. After you book, we'll arrange a free consultation with your tutor before the first session — a chance to discuss challenges and set clear learning goals together.",
      },
      {
        question: "What ages do you accept?",
        answer:
          "We welcome students from elementary through high school — and adults are welcome too!",
      },
    ],
  },
  contact: {
    mobileCtaTitle: "Ready to excel?",
    joinNow: "Join Now",
    title: "Get in Touch",
    subtitle:
      "We're here to help you find the perfect learning path for your child. Reach out for a free consultation or any questions you might have.",
    email: "tutorpilihanmu@gmail.com",
    address: "Based in Bandung",
    cardTitle: "Ready to start?",
    cardText:
      "Chat with our education consultants directly on WhatsApp for immediate assistance.",
    chatCta: "Chat via WhatsApp",
  },
  whatsapp: {
    ariaLabel: "Chat on WhatsApp",
    chat: "Chat with us",
  },
  bottomNav: {
    categories: "Categories",
    programs: "Programs",
    about: "About",
    faq: "FAQ",
  },
  footer: {
    tagline:
      "Empowering students through personalized online tutoring. We make learning engaging, effective, and fun.",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Home",
      "Programs",
      "About Us",
      "Careers",
    ],
    copyright: "© 2026 Tutor Pilihanmu. All rights reserved.",
    instagram: "Tutor Pilihanmu on Instagram",
    tiktok: "Tutor Pilihanmu on TikTok",
  },
};

type Dict = typeof en;

const id: Dict = {
  nav: {
    home: "Beranda",
    programs: "Program",
    about: "Tentang Kami",
    startLearning: "Mulai Belajar",
    toggleMenu: "Buka menu",
  },
  hero: {
    title: "Wujudkan Masa Depan Anak Anda",
    subtitle:
      "Bimbingan belajar personal yang dirancang untuk menggali potensi dan membangun kepercayaan diri yang langgeng.",
    cta: "Mulai Belajar Sekarang",
    imageAlt:
      "Seorang tutor wanita yang ceria dan seorang murid laki-laki kecil sedang mengikuti sesi belajar online yang menyenangkan",
  },
  programs: {
    title: "Pembelajaran yang Disesuaikan untuk Semua Usia",
    subtitle:
      "Kami menawarkan program khusus yang dirancang untuk melibatkan dan menantang pelajar di setiap tahap — dari anak usia dini hingga profesional yang ingin mempelajari hal baru.",
    items: [
      {
        titleKey: "toddler",
        title: "Balita",
        description:
          "Pembelajaran berbasis bermain yang mengenalkan konsep dasar, warna, dan keterampilan sosial dalam lingkungan yang menyenangkan.",
      },
      {
        titleKey: "preschool",
        title: "Prasekolah",
        description:
          "Membangun keterampilan dasar literasi dan numerasi sebagai persiapan transisi yang lancar menuju sekolah.",
      },
      {
        titleKey: "primary",
        title: "Sekolah Dasar",
        description:
          "Bimbingan mata pelajaran inti seperti Matematika, Sains, dan Bahasa untuk meningkatkan kepercayaan diri dan nilai.",
      },
      {
        titleKey: "middleSchool",
        title: "SMP",
        description:
          "Dukungan mata pelajaran lanjutan, keterampilan belajar, dan persiapan ujian untuk kesuksesan akademik.",
      },
      {
        titleKey: "highSchool",
        title: "SMA",
        description:
          "Penguasaan mata pelajaran secara mendalam, persiapan ujian, dan strategi belajar untuk kesiapan kuliah.",
      },
      {
        titleKey: "college",
        title: "Kuliah",
        description:
          "Dukungan tingkat universitas untuk tugas kuliah, proyek, dan keterampilan akademik dasar.",
      },
      {
        titleKey: "professionals",
        title: "Profesional",
        description:
          "Sesi peningkatan keterampilan yang fleksibel untuk para pekerja yang ingin mempelajari hal baru.",
      },
    ],
  },
  subjects: {
    title: "Mata Pelajaran",
    subtitle: "Pilih program mata pelajaran yang diajarkan oleh tutor berpengalaman.",
    items: [
      {
        titleKey: "english",
        title: "Bahasa Inggris",
        description:
          "Kuasai percakapan, penulisan akademik, dan debat — dan berbicaralah dengan percaya diri di mana pun.",
      },
      {
        titleKey: "social",
        title: "IPS",
        description:
          "Pahami kekuatan yang membentuk dunia kita melalui Akuntansi, Ekonomi, Sejarah, Sosiologi, dan Geografi — dengan pelajaran nyata yang menarik.",
      },
      {
        titleKey: "science",
        title: "IPA",
        description:
          "Kuasai Matematika, Fisika, dan Kimia dengan penjelasan yang jelas dan pemecahan masalah langsung.",
      },
      {
        titleKey: "coding",
        title: "Coding / IT",
        description:
          "Pelajari pemrograman, pengembangan web, dan keterampilan digital untuk sekolah dan seterusnya.",
      },
      {
        titleKey: "mandarin",
        title: "Bahasa Mandarin",
        description:
          "Pelajari Bahasa Mandarin dari pemula hingga mahir dengan pelajaran interaktif yang praktis.",
      },
    ],
  },
  features: {
    title: "Mengapa Memilih Kami?",
    subtitle: "Metode terbukti untuk kesuksesan akademik.",
    items: [
      {
        titleKey: "personalized",
        title: "Pendekatan Personal",
        description: "Rencana belajar yang disesuaikan dengan kebutuhan setiap siswa.",
      },
      { titleKey: "flexibleHours", title: "Jam Fleksibel", description: "" },
      { titleKey: "expertTutors", title: "Tutor Ahli", description: "" },
    ],
  },
  testimonial: {
    title: "Cerita Siswa",
    items: [
      {
        quote:
          "Halo miss, maaf baru merespon. Waktu saya tanya Katya, katanya les-nya semuanya oke.",
        name: "Orang Tua Katya",
        role: "Orang Tua Siswa",
      },
      {
        quote:
          "Selamat pagi juga miss, sesi konsultasinya lancar — sejauh ini baik-baik saja.",
        name: "Orang Tua",
        role: "Konsultasi Program",
      },
      {
        quote:
          "Iya miss, tutor-nya enak jelasinnya.",
        name: "Orang Tua",
        role: "Umpan Balik Les",
      },
    ],
  },
  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    subtitle:
      "Punya pertanyaan? Kami rangkum jawaban yang paling sering ditanyakan orang tua dan siswa.",
    items: [
      {
        question: "Berapa biaya yang harus dikeluarkan untuk booking sesi?",
        answer:
          "Setiap sesi mulai dari 75 ribu saja — harga yang fleksibel dan tetap ramah di kantong, tanpa mengurangi kualitas belajar.",
      },
      {
        question: "Kenapa harus pilih les di sini?",
        answer:
          "Jadwalnya fleksibel, tutornya berkualitas, dan setiap sesi disesuaikan dengan kebutuhan anak Anda — jadi belajar benar-benar mengikuti mereka, bukan sebaliknya.",
      },
      {
        question: "Apakah ada paket diskon jika booking lebih dari sebulan?",
        answer:
          "Jelas ada. Semakin lama booking, semakin besar hematnya — tanyakan penawaran paket bulanan kami, ya!",
      },
      {
        question: "Free konsultasi maksudnya gimana?",
        answer:
          "Kami percaya sesi les harus langsung fokus ke materi yang penting. Setelah Anda booking, kami akan jadwalkan konsultasi gratis dengan tutor sebelum les dimulai — waktunya untuk membahas kendala dan menyusun tujuan belajar bersama.",
      },
      {
        question: "Menerima murid umur berapa saja?",
        answer:
          "Kami menerima siswa dari SD hingga SMA — dan untuk umum juga boleh, kok!",
      },
    ],
  },
  contact: {
    mobileCtaTitle: "Siap berprestasi?",
    joinNow: "Gabung Sekarang",
    title: "Hubungi Kami",
    subtitle:
      "Kami siap membantu Anda menemukan jalur belajar yang tepat untuk anak Anda. Hubungi kami untuk konsultasi gratis atau pertanyaan apa pun.",
    email: "tutorpilihanmu@gmail.com",
    address: "Berbasis di Bandung",
    cardTitle: "Siap untuk memulai?",
    cardText:
      "Chat langsung dengan konsultan pendidikan kami di WhatsApp untuk bantuan segera.",
    chatCta: "Chat via WhatsApp",
  },
  whatsapp: {
    ariaLabel: "Chat di WhatsApp",
    chat: "Chat dengan kami",
  },
  bottomNav: {
    categories: "Kategori",
    programs: "Program",
    about: "Tentang",
    faq: "FAQ",
  },
  footer: {
    tagline:
      "Memberdayakan siswa melalui bimbingan belajar online yang personal. Kami membuat belajar menjadi menarik, efektif, dan menyenangkan.",
    quickLinks: "Tautan Cepat",
    followUs: "Ikuti Kami",
    links: [
      "Kebijakan Privasi",
      "Syarat & Ketentuan",
      "Beranda",
      "Program",
      "Tentang Kami",
      "Karier",
    ],
    copyright:
      "© 2026 Tutor Pilihanmu. Seluruh hak cipta dilindungi.",
    instagram: "Tutor Pilihanmu di Instagram",
    tiktok: "Tutor Pilihanmu di TikTok",
  },
};

const dictionaries: Record<Language, Dict> = { en, id };

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Apply the saved preference only after hydration so server/client HTML match.
  useEffect(() => {
    const stored = window.localStorage.getItem("language");
    if (stored === "en" || stored === "id") {
      queueMicrotask(() => setLanguage(stored));
    }
  }, []);

  const setLanguageAndStore = useCallback((lang: Language) => {
    setLanguage(lang);
    window.localStorage.setItem("language", lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: setLanguageAndStore, t: dictionaries[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
