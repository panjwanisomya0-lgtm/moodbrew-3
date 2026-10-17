// Import all images through Vite's module graph so that Vite bundles, hashes,
// and correctly resolves them in both development and production (e.g. Vercel builds).

import heroArtisanalLatte from './images/hero_artisanal_latte_1792164452790.jpg';
import storyCafeAtmosphere from './images/story_cafe_atmosphere_1792164453968.jpg';
import momentSunlitTable from './images/moment_sunlit_table_1792164454048.jpg';
import moodLetterStationery from './images/mood_letter_stationery_1792164453891.jpg';

import drinkHoneyOatLatte from './images/drink_honey_oat_latte_1792164477922.jpg';
import drinkIcedVanillaLatte from './images/drink_iced_vanilla_latte_1792164477977.jpg';
import drinkRoseMocha from './images/drink_rose_mocha_1792164479282.jpg';
import drinkFlatWhite from './images/drink_flat_white_1792164479746.jpg';
import drinkCinnamonCappuccino from './images/drink_cinnamon_cappuccino_1792164480483.jpg';
import drinkOrangeColdBrew from './images/drink_orange_cold_brew_1792164479876.jpg';

import drinkGoldenHourMacchiato from './images/drink_golden_hour_macchiato_1792164501368.jpg';
import drinkVelvetCloudLatte from './images/drink_velvet_cloud_latte_1792164501743.jpg';
import drinkLavenderDaydream from './images/drink_lavender_daydream_1792164502973.jpg';
import drinkMidnightMocha from './images/drink_midnight_mocha_1792164502380.jpg';
import drinkHazelnutHush from './images/drink_hazelnut_hush_1792164504342.jpg';
import drinkCitrusRush from './images/drink_citrus_rush_1792164503439.jpg';

import drinkWhiteVelvet from './images/drink_white_velvet_1792164524401.jpg';
import drinkCoconutCoast from './images/drink_coconut_coast_1792164524948.jpg';
import drinkPistachioPoetry from './images/drink_pistachio_poetry_1792164525686.jpg';
import drinkBrownSugarAffair from './images/drink_brown_sugar_affair_1792164525920.jpg';
import drinkAfterHoursAffogato from './images/drink_after_hours_affogato_1792164526196.jpg';
import drinkMapleMuse from './images/drink_maple_muse_1792164527402.jpg';

export const IMAGES = {
  hero: heroArtisanalLatte,
  storyCafe: storyCafeAtmosphere,
  momentTable: momentSunlitTable,
  moodLetterStationery: moodLetterStationery,

  // Drinks mapped by ID
  'honey-oat-latte': drinkHoneyOatLatte,
  'iced-vanilla-latte': drinkIcedVanillaLatte,
  'rose-mocha': drinkRoseMocha,
  'flat-white': drinkFlatWhite,
  'cinnamon-cappuccino': drinkCinnamonCappuccino,
  'orange-cinnamon-cold-brew': drinkOrangeColdBrew,

  'golden-hour-macchiato': drinkGoldenHourMacchiato,
  'velvet-cloud-latte': drinkVelvetCloudLatte,
  'lavender-daydream': drinkLavenderDaydream,
  'midnight-mocha': drinkMidnightMocha,
  'hazelnut-hush': drinkHazelnutHush,
  'citrus-rush': drinkCitrusRush,

  'white-velvet': drinkWhiteVelvet,
  'coconut-coast': drinkCoconutCoast,
  'pistachio-poetry': drinkPistachioPoetry,
  'brown-sugar-affair': drinkBrownSugarAffair,
  'after-hours-affogato': drinkAfterHoursAffogato,
  'maple-muse': drinkMapleMuse,
} as const;
