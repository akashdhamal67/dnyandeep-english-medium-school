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

  // About Section (4:3, 1200x900) - Real Premises Photo from des.org.in
  ABOUT_CARD: "images/premises-building-front.webp?v=7",
  ABOUT_CARD_640: "images/premises-building-front-640.webp?v=7",
  ABOUT_CARD_ALT: "Dnyandeep English School building facade and main campus entrance",

  // Leadership Section (1:1, 600x600)
  LEADERSHIP_AVATAR: "images/leadership-avatar.webp?v=7",
  LEADERSHIP_AVATAR_640: "images/leadership-avatar-640.webp?v=7",
  LEADERSHIP_AVATAR_ALT: "Neutral stylised educator icon avatar in deep forest green and warm cream",

  // Academic Programs (2:1, 1520x770)
  PROGRAM_PRE_PRIMARY: "images/programs-pre-primary.webp?v=7",
  PROGRAM_PRE_PRIMARY_640: "images/programs-pre-primary-640.webp?v=7",
  PROGRAM_PRE_PRIMARY_ALT: "Illustration of nursery classroom scene with wooden blocks, picture books and rainbow rug",

  PROGRAM_PRIMARY: "images/programs-primary.webp?v=7",
  PROGRAM_PRIMARY_640: "images/programs-primary-640.webp?v=7",
  PROGRAM_PRIMARY_ALT: "Illustration of primary school classroom with teacher at chalkboard, seated children, globe and bookshelf",

  PROGRAM_SECONDARY: "images/programs-secondary.webp?v=7",
  PROGRAM_SECONDARY_640: "images/programs-secondary-640.webp?v=7",
  PROGRAM_SECONDARY_ALT: "Illustration of secondary school science lab with microscope, beakers, solar system model and teacher guiding students",

  // Campus Facilities (3:2, 1200x800) - Real Premises Photos from des.org.in
  FACILITY_SPORTS: "images/premises-sports-ground.webp?v=7",
  FACILITY_SPORTS_640: "images/premises-sports-ground-640.webp?v=7",
  FACILITY_SPORTS_ALT: "Aerial view of Dnyandeep English School campus sports ground and school building",

  FACILITY_ARTS: "images/premises-campus-courtyard.webp?v=7",
  FACILITY_ARTS_640: "images/premises-campus-courtyard-640.webp?v=7",
  FACILITY_ARTS_ALT: "Dnyandeep English School campus courtyard and creative assembly space",

  FACILITY_COMPUTER: "images/premises-computer-lab.webp?v=7",
  FACILITY_COMPUTER_640: "images/premises-computer-lab-640.webp?v=7",
  FACILITY_COMPUTER_ALT: "Dnyandeep English School computer laboratory with desktop workstations",

  FACILITY_SCIENCE: "images/premises-science-courtyard.webp?v=7",
  FACILITY_SCIENCE_640: "images/premises-science-courtyard-640.webp?v=7",
  FACILITY_SCIENCE_ALT: "Dnyandeep English School academic corridor and science laboratory wing",

  // Contact Section Campus Photo (Real premises from des.org.in)
  CONTACT_CAMPUS: "images/premises-campus-entrance.webp?v=7",
  CONTACT_CAMPUS_640: "images/premises-campus-entrance-640.webp?v=7",
  CONTACT_CAMPUS_ALT: "Dnyandeep English School campus main entrance gate and school building",

  // Gallery Tiles (Real premises photos + activities)
  GALLERY_CAMPUS_MAIN: "images/premises-building-front.webp?v=7",
  GALLERY_CAMPUS_AERIAL: "images/premises-sports-ground.webp?v=7",
  GALLERY_CAMPUS_LAB: "images/premises-computer-lab.webp?v=7",
  GALLERY_CAMPUS_ENTRANCE: "images/premises-campus-entrance.webp?v=7",
  GALLERY_CAMPUS_SIDE: "images/premises-campus-building-side.webp?v=7",
  GALLERY_CAMPUS_COURTYARD: "images/premises-campus-courtyard.webp?v=7",

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

