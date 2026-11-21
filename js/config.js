/**
 * Dnyandeep English School - Central Image & Media Configuration
 * 
 * Every image slot on the website is configured here (IMAGES object).
 * Real school photographs can be swapped in directly by updating the paths below.
 */

const IMAGES = {
  // Brand
  LOGO: "images/logo.png",
  FAVICON: "favicon.png",

  // Hero Section
  HERO_POSTER: "images/hero-poster.webp",
  HERO_POSTER_640: "images/hero-poster.webp",
  HERO_SCENE: "images/hero-illustration.webp",
  HERO_SCENE_ALT: "Dnyandeep English School Academic Campus Illustration",

  // About Section (4:3, 1200x900)
  ABOUT_CARD: "images/about-heritage.webp",
  ABOUT_CARD_640: "images/about-heritage-640.webp",
  ABOUT_CARD_ALT: "Illustration of Dnyandeep English School heritage building with central archway and courtyard",

  // Leadership Section (1:1, 600x600)
  LEADERSHIP_AVATAR: "images/leadership-avatar.webp",
  LEADERSHIP_AVATAR_640: "images/leadership-avatar-640.webp",
  LEADERSHIP_AVATAR_ALT: "Neutral stylised educator icon avatar in deep forest green and warm cream",

  // Academic Programs (2:1, 1520x770)
  PROGRAM_PRE_PRIMARY: "images/programs-pre-primary.webp",
  PROGRAM_PRE_PRIMARY_640: "images/programs-pre-primary-640.webp",
  PROGRAM_PRE_PRIMARY_ALT: "Illustration of nursery classroom scene with wooden blocks, picture books and rainbow rug",

  PROGRAM_PRIMARY: "images/programs-primary.webp",
  PROGRAM_PRIMARY_640: "images/programs-primary-640.webp",
  PROGRAM_PRIMARY_ALT: "Illustration of primary school classroom with teacher at chalkboard, seated children, globe and bookshelf",

  PROGRAM_SECONDARY: "images/programs-secondary.webp",
  PROGRAM_SECONDARY_640: "images/programs-secondary-640.webp",
  PROGRAM_SECONDARY_ALT: "Illustration of secondary school science lab with microscope, beakers, solar system model and teacher guiding students",

  // Campus Facilities (3:2, 1200x800)
  FACILITY_SPORTS: "images/facility-sports.webp",
  FACILITY_SPORTS_640: "images/facility-sports-640.webp",
  FACILITY_SPORTS_ALT: "Illustration of school sports playground with football field and running track",

  FACILITY_ARTS: "images/facility-arts.webp",
  FACILITY_ARTS_640: "images/facility-arts-640.webp",
  FACILITY_ARTS_ALT: "Illustration of school art and cultural room with easels, paint palettes, crafts display and musical instruments",

  FACILITY_COMPUTER: "images/facility-computer.webp",
  FACILITY_COMPUTER_640: "images/facility-computer-640.webp",
  FACILITY_COMPUTER_ALT: "Illustration of modern computer lab with rows of desktop monitors and students working quietly",

  FACILITY_SCIENCE: "images/facility-science.webp",
  FACILITY_SCIENCE_640: "images/facility-science-640.webp",
  FACILITY_SCIENCE_ALT: "Illustration of school science exhibition with working models on display in courtyard",

  // Gallery Tiles (1:1, 900x900)
  GALLERY_CLASSROOM: "images/gallery-classroom.webp",
  GALLERY_CLASSROOM_640: "images/gallery-classroom-640.webp",
  GALLERY_CLASSROOM_ALT: "Illustration of interactive classroom activities with students collaborating on origami crafts",

  GALLERY_CULTURAL: "images/gallery-cultural.webp",
  GALLERY_CULTURAL_640: "images/gallery-cultural-640.webp",
  GALLERY_CULTURAL_ALT: "Illustration of students performing cultural folk dance on a flower-garlanded auditorium stage",

  GALLERY_SPORTS: "images/gallery-sports.webp",
  GALLERY_SPORTS_640: "images/gallery-sports-640.webp",
  GALLERY_SPORTS_ALT: "Illustration of annual sports day athletics race with students running on track and cheering classmates",

  GALLERY_ANNUAL_FUNCTION: "images/gallery-annual-function.webp",
  GALLERY_ANNUAL_FUNCTION_640: "images/gallery-annual-function-640.webp",
  GALLERY_ANNUAL_FUNCTION_ALT: "Illustration of annual school function celebrations on decorated auditorium stage seen from audience",

  // Student Activities (Icon Cards)
  ACTIVITY_SPORTS: "images/gallery-sports.webp",
  ACTIVITY_SPORTS_640: "images/gallery-sports-640.webp",
  ACTIVITY_SPORTS_ALT: "Sports and physical education activities at Dnyandeep",

  ACTIVITY_ARTS: "images/facility-arts.webp",
  ACTIVITY_ARTS_640: "images/facility-arts-640.webp",
  ACTIVITY_ARTS_ALT: "Arts, drawing, and cultural craft activities",

  ACTIVITY_MUSIC: "images/gallery-cultural.webp",
  ACTIVITY_MUSIC_640: "images/gallery-cultural-640.webp",
  ACTIVITY_MUSIC_ALT: "Music and cultural performances",

  ACTIVITY_COMPUTER: "images/facility-computer.webp",
  ACTIVITY_COMPUTER_640: "images/facility-computer-640.webp",
  ACTIVITY_COMPUTER_ALT: "Computer lab practical learning and digital literacy",

  ACTIVITY_SCIENCE: "images/facility-science.webp",
  ACTIVITY_SCIENCE_640: "images/facility-science-640.webp",
  ACTIVITY_SCIENCE_ALT: "Science exhibitions and project learning",

  // Quote Section Banner (21:9, 2000x860)
  QUOTE_BG: "images/quote-bg.webp",
  QUOTE_BG_640: "images/quote-bg-640.webp",
  QUOTE_BG_ALT: "Soft abstract green watercolour wash with faint plaid texture and cream highlights"
};

const SCHOOL_MEDIA_CONFIG = {
  // Feature flags
  HERO_VIDEO: true,
  HERO_VIDEO_SRC: "videos/hero.mp4",
  HERO_VIDEO_MOBILE_SRC: "videos/hero-mobile.mp4",
  HERO_VIDEO_POSTER: "images/hero-poster.webp",

  // Images mapping
  ...IMAGES
};

// Expose globally
if (typeof window !== 'undefined') {
  window.IMAGES = IMAGES;
  window.SCHOOL_MEDIA_CONFIG = SCHOOL_MEDIA_CONFIG;
}

