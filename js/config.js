/**
 * Dnyandeep English School - Central Image & Media Configuration
 * 
 * Every image slot on the website is configured here.
 * Real school photographs can be swapped in directly by updating the paths below.
 */

const SCHOOL_MEDIA_CONFIG = {
  // Feature flags
  HERO_VIDEO: false, // Old video is OFF by default pending senior confirmation
  HERO_VIDEO_SRC: "videos/hero-bg.mp4",
  HERO_VIDEO_POSTER: "videos/hero-poster.jpg",

  // Brand
  LOGO: "images/logo.png",
  FAVICON: "favicon.png",

  // Hero Section
  HERO_SCENE: "images/hero-illustration.webp",
  HERO_SCENE_ALT: "Dnyandeep English School Academic Campus Illustration",

  // Welcome / About Section
  ABOUT_CARD: "images/about-illustration.webp",
  ABOUT_CARD_ALT: "Dnyandeep School 80+ Years Heritage of Education Since 1944",

  // Leadership Section
  LEADERSHIP_AVATAR: "images/leadership-avatar.webp",
  LEADERSHIP_AVATAR_ALT: "Dnyandeep English School Principal",

  // Academic Programs
  PROGRAM_PRE_PRIMARY: "images/program-pre-primary.webp",
  PROGRAM_PRE_PRIMARY_ALT: "Pre-Primary Nursery to Senior KG Education",

  PROGRAM_PRIMARY: "images/program-primary.webp",
  PROGRAM_PRIMARY_ALT: "Primary Section Standard 1 to 4 Education",

  PROGRAM_SECONDARY: "images/program-secondary.webp",
  PROGRAM_SECONDARY_ALT: "Secondary SSC Section Standard 5 to 10 Board Education",

  // Student Activities
  ACTIVITY_SPORTS: "images/activity-sports.webp",
  ACTIVITY_SPORTS_ALT: "Sports and Physical Education at Dnyandeep",

  ACTIVITY_ARTS: "images/activity-arts.webp",
  ACTIVITY_ARTS_ALT: "Arts, Drawing and Craft Creative Activities",

  ACTIVITY_MUSIC: "images/activity-music.webp",
  ACTIVITY_MUSIC_ALT: "Music and Cultural Event Celebrations",

  ACTIVITY_COMPUTER: "images/activity-computer.webp",
  ACTIVITY_COMPUTER_ALT: "Computer Lab and Practical Digital Learning",

  ACTIVITY_SCIENCE: "images/activity-science.webp",
  ACTIVITY_SCIENCE_ALT: "Science Exhibitions and Skill-Based Experiments",

  // Infrastructure & Facilities
  FACILITY_SPORTS: "images/facility-sports.webp",
  FACILITY_SPORTS_ALT: "Indoor and Outdoor Sports Grounds and Pavilion",

  FACILITY_ARTS: "images/facility-arts.webp",
  FACILITY_ARTS_ALT: "Dedicated Creative Art and Cultural Studio Spaces",

  FACILITY_COMPUTER: "images/facility-computer.webp",
  FACILITY_COMPUTER_ALT: "Modern Computer Lab Equipped with Educational Systems",

  // Quote Section
  QUOTE_BG: "images/quote-bg.webp",
  QUOTE_BG_ALT: "Dnyandeep Educational Philosophy Banner"
};

// Expose globally
if (typeof window !== 'undefined') {
  window.SCHOOL_MEDIA_CONFIG = SCHOOL_MEDIA_CONFIG;
}
