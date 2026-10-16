export interface CoffeeDrink {
  id: string;
  number: string;
  name: string;
  mood: string;
  category: 'Comfort' | 'Refresh' | 'Focus' | 'Indulgence' | 'Adventure';
  flavourProfile: string[];
  flavourSummary: string;
  emotionalDescription: string;
  visualDirection: string;
  image: string;
  temp: 'Hot' | 'Iced' | 'Chilled' | 'Dessert';
  notes: string;
  origin: string;
  price: string;
}

export interface MoodCategoryItem {
  id: string;
  number: string;
  title: string;
  coffeeId: string;
  coffeeName: string;
  feeling: string;
  colorName: string;
  bgHex: string;
  textHex: string;
  accentHex: string;
  quote: string;
}

export interface MoodLetterEntry {
  letterNo: string;
  salutation: string;
  message: string;
  coffeeRecommendationId: string;
  reminder: string;
}

export interface MoodLetterMood {
  id: string;
  label: string;
  subtitle: string;
  letters: MoodLetterEntry[];
}

export interface JournalReflection {
  id: string;
  theme: string;
  quote: string;
  reflection: string;
  moment: string;
  author: string;
}

export const MOOD_CATEGORIES: MoodCategoryItem[] = [
  {
    id: 'slow-morning',
    number: '01',
    title: 'Slow Morning',
    coffeeId: 'honey-oat-latte',
    coffeeName: 'Honey Oat Latte',
    feeling: 'Gentle, peaceful, and unhurried.',
    colorName: 'Sage green',
    bgHex: '#BFCAB8',
    textHex: '#223122',
    accentHex: '#97A98F',
    quote: 'Nothing urgent. Nowhere to rush. Just a little honey, a little oat milk, and a moment that is entirely yours.'
  },
  {
    id: 'need-a-reset',
    number: '02',
    title: 'Need a Reset',
    coffeeId: 'iced-vanilla-latte',
    coffeeName: 'Iced Vanilla Latte',
    feeling: 'Refreshing, light, and ready for a fresh start.',
    colorName: 'Dusty blue',
    bgHex: '#B9CFD8',
    textHex: '#1E2D33',
    accentHex: '#8EAAB7',
    quote: 'Clear ice, chilled vanilla, and a breath that lets go of yesterday. Here is your quiet clean slate.'
  },
  {
    id: 'main-character',
    number: '03',
    title: 'Main Character',
    coffeeId: 'rose-mocha',
    coffeeName: 'Rose Mocha',
    feeling: 'Expressive, confident, and indulgent.',
    colorName: 'Muted rose',
    bgHex: '#D5A7A1',
    textHex: '#3D1F1C',
    accentHex: '#BD8A83',
    quote: 'Bittersweet dark chocolate kissed by fragrant damask rose. Unapologetic, cinematic, and beautifully yours.'
  },
  {
    id: 'deep-focus',
    number: '04',
    title: 'Deep Focus',
    coffeeId: 'flat-white',
    coffeeName: 'Flat White',
    feeling: 'Grounded, clear-headed, and focused.',
    colorName: 'Espresso brown',
    bgHex: '#2D201C',
    textHex: '#FFF9F1',
    accentHex: '#4A3731',
    quote: 'Double ristretto folded into dense microfoam. Uncluttered simplicity for when you have worlds to build.'
  },
  {
    id: 'soft-comfort',
    number: '05',
    title: 'Soft Comfort',
    coffeeId: 'cinnamon-cappuccino',
    coffeeName: 'Cinnamon Cappuccino',
    feeling: 'Cosy, familiar, and comforting.',
    colorName: 'Oat cream',
    bgHex: '#F5EFE6',
    textHex: '#3A2D28',
    accentHex: '#D8C7B0',
    quote: 'Warm dusted cinnamon on a pillow of velvet foam. Like pulling a favorite oversized sweater straight out of the dryer.'
  },
  {
    id: 'feeling-bold',
    number: '06',
    title: 'Feeling Bold',
    coffeeId: 'orange-cinnamon-cold-brew',
    coffeeName: 'Orange Cinnamon Cold Brew',
    feeling: 'Adventurous, energetic, and unexpected.',
    colorName: 'Burnt orange',
    bgHex: '#C66C42',
    textHex: '#FFF9F1',
    accentHex: '#A2532E',
    quote: 'Bright citrus zest cutting through deep 18-hour cold brew with a spiced whisper. Bold decisions begin in this glass.'
  }
];

export const SIGNATURE_COFFEES: CoffeeDrink[] = [
  {
    id: 'honey-oat-latte',
    number: '01',
    name: 'Honey Oat Latte',
    mood: 'Slow Morning',
    category: 'Comfort',
    flavourProfile: ['Soft honey', 'Creamy oat milk', 'Smooth espresso'],
    flavourSummary: 'Honey, oat milk, and smooth espresso.',
    emotionalDescription: 'Nothing urgent. Nowhere to rush. Just a little honey, a little oat milk, and a moment that’s entirely yours.',
    visualDirection: 'A ceramic cup in soft morning sunlight with linen and warm neutral textures.',
    image: '/src/assets/images/drink_honey_oat_latte_1792164477922.jpg',
    temp: 'Hot',
    notes: 'Wildflower raw honey stirred with slow-steamed oat cream over washed Ethiopian Yirgacheffe espresso.',
    origin: 'Ethiopia & Hudson Valley Wildflower Honey',
    price: '$6.50'
  },
  {
    id: 'iced-vanilla-latte',
    number: '02',
    name: 'Iced Vanilla Latte',
    mood: 'Need a Reset',
    category: 'Refresh',
    flavourProfile: ['Madagascar vanilla', 'Chilled milk', 'Balanced espresso'],
    flavourSummary: 'Vanilla, chilled milk, and espresso.',
    emotionalDescription: 'A gentle exhalation after a crowded hour. Clinking clear ice and real vanilla bean to bring you back to yourself.',
    visualDirection: 'A clear glass with ice, visible condensation, and cool natural lighting.',
    image: '/src/assets/images/drink_iced_vanilla_latte_1792164477977.jpg',
    temp: 'Iced',
    notes: 'Pure cold-extracted vanilla bean infused into organic whole milk, layered over a double shot on pristine rock ice.',
    origin: 'Madagascar & Colombian Huila',
    price: '$6.75'
  },
  {
    id: 'rose-mocha',
    number: '03',
    name: 'Rose Mocha',
    mood: 'Main Character',
    category: 'Indulgence',
    flavourProfile: ['Dark single-origin chocolate', 'Subtle rose water', 'Rich espresso'],
    flavourSummary: 'Chocolate, subtle rose, and espresso.',
    emotionalDescription: 'Dramatic yet tender. For days when your soundtrack plays louder and the sunlight feels like a spotlight.',
    visualDirection: 'Chocolate-toned coffee with muted rose accents and elegant styling.',
    image: '/src/assets/images/drink_rose_mocha_1792164479282.jpg',
    temp: 'Hot',
    notes: '70% Ecuadorian melted chocolate, steeped Damascus rose mist, and dense espresso under micro-textured milk.',
    origin: 'Ecuador & Damascus Floral Extract',
    price: '$7.25'
  },
  {
    id: 'flat-white',
    number: '04',
    name: 'Flat White',
    mood: 'Deep Focus',
    category: 'Focus',
    flavourProfile: ['Rich espresso', 'Silky microfoam', 'Toasted caramel crema'],
    flavourSummary: 'Rich espresso and silky steamed milk.',
    emotionalDescription: 'Unwavering precision. A quiet anchor for thoughtful afternoons when words and ideas must finally align.',
    visualDirection: 'Close-up latte art in a minimal ceramic cup with rich coffee tones.',
    image: '/src/assets/images/drink_flat_white_1792164479746.jpg',
    temp: 'Hot',
    notes: 'Tight 1:1.5 ristretto extraction swirled with glossy, velvet microfoam in an unglazed stoneware bowl.',
    origin: 'Guatemala Antigua & Papua New Guinea',
    price: '$5.75'
  },
  {
    id: 'cinnamon-cappuccino',
    number: '05',
    name: 'Cinnamon Cappuccino',
    mood: 'Soft Comfort',
    category: 'Comfort',
    flavourProfile: ['Ceylon cinnamon', 'Airy milk foam', 'Malty espresso'],
    flavourSummary: 'Espresso, milk foam, and cinnamon.',
    emotionalDescription: 'A tactile, nostalgic embrace. Cinnamon dust warming your fingers while the afternoon settles outside.',
    visualDirection: 'A foamy cappuccino on a cosy table in warm afternoon light.',
    image: '/src/assets/images/drink_cinnamon_cappuccino_1792164480483.jpg',
    temp: 'Hot',
    notes: 'Freshly ground organic Ceylon cinnamon bark dusted over thick, airy foam crowning a dark Italian-style roast.',
    origin: 'Sri Lanka & Brazilian Cerrado',
    price: '$6.00'
  },
  {
    id: 'orange-cinnamon-cold-brew',
    number: '06',
    name: 'Orange Cinnamon Cold Brew',
    mood: 'Feeling Bold',
    category: 'Adventure',
    flavourProfile: ['18-hour cold brew', 'Blood orange peel', 'Cinnamon bark infusion'],
    flavourSummary: 'Cold brew, orange, and a hint of cinnamon.',
    emotionalDescription: 'Unexpected sparks of citrus dancing over dark, brooding depths. Designed for breaking routines.',
    visualDirection: 'Dark cold brew with orange peel and a bold, contrasting composition.',
    image: '/src/assets/images/drink_orange_cold_brew_1792164479876.jpg',
    temp: 'Chilled',
    notes: 'Cold-macerated orange peel and toasted cinnamon quills steeped directly into a slow-drip single-origin brew.',
    origin: 'Rwanda Inzovu & California Navel Orange',
    price: '$7.00'
  },
  {
    id: 'golden-hour-macchiato',
    number: '07',
    name: 'Golden Hour Macchiato',
    mood: 'Golden and carefree',
    category: 'Comfort',
    flavourProfile: ['Espresso', 'Velvet milk', 'Warm sea-salt caramel'],
    flavourSummary: 'Espresso, milk, and caramel.',
    emotionalDescription: 'Late afternoon amber glow distilled into a cup. Sweet, carefree, and glowing from the inside out.',
    visualDirection: 'A caramel-drizzled macchiato with warm golden light.',
    image: '/src/assets/images/drink_golden_hour_macchiato_1792164501368.jpg',
    temp: 'Hot',
    notes: 'House-made slow-simmered caramel ribboned through layered steamed milk and capped with a double espresso mark.',
    origin: 'Kenya Nyeri & French Fleur de Sel',
    price: '$6.50'
  },
  {
    id: 'velvet-cloud-latte',
    number: '08',
    name: 'Velvet Cloud Latte',
    mood: 'Soft comfort',
    category: 'Comfort',
    flavourProfile: ['Whipped cream top', 'Creamy milk', 'Mellow sweetness'],
    flavourSummary: 'Creamy milk, espresso, and mellow sweetness.',
    emotionalDescription: 'Like resting your mind against an undisturbed feather pillow. Weightless indulgence with zero edge.',
    visualDirection: 'A silky latte in a clear glass or ceramic cup with soft neutral styling.',
    image: '/src/assets/images/drink_velvet_cloud_latte_1792164501743.jpg',
    temp: 'Hot',
    notes: 'Suspended aerated sweet milk foam resting over a delicate blonde roast espresso with notes of vanilla wafer.',
    origin: 'Costa Rica Tarrazú',
    price: '$6.75'
  },
  {
    id: 'lavender-daydream',
    number: '09',
    name: 'Lavender Daydream',
    mood: 'Dreamy and peaceful',
    category: 'Comfort',
    flavourProfile: ['Culinary French lavender', 'Floral honey', 'Light espresso'],
    flavourSummary: 'Lavender-inspired floral notes and coffee.',
    emotionalDescription: 'Soft purple horizons and quiet thoughts. A gentle lullaby for afternoons that crave quiet reflection.',
    visualDirection: 'A lavender-toned latte in an elegant composition with soft, muted purple accents.',
    image: '/src/assets/images/drink_lavender_daydream_1792164502973.jpg',
    temp: 'Hot',
    notes: 'Provence organic culinary lavender blossoms cold-steeped with acacia nectar, gently blended into oat milk.',
    origin: 'Provence, France & Ethiopian Sidamo',
    price: '$7.00'
  },
  {
    id: 'midnight-mocha',
    number: '10',
    name: 'Midnight Mocha',
    mood: 'Quiet nights',
    category: 'Indulgence',
    flavourProfile: ['85% Dark cacao', 'Dense espresso', 'Creamy milk'],
    flavourSummary: 'Chocolate, espresso, and creamy milk.',
    emotionalDescription: 'For the night owls, book readers, and starlight thinkers. Shadows, secrets, and profound comfort.',
    visualDirection: 'Dark chocolate coffee, dramatic shadows, and deep espresso tones.',
    image: '/src/assets/images/drink_midnight_mocha_1792164502380.jpg',
    temp: 'Hot',
    notes: 'Intense Dutch processed dark cocoa melted directly into fresh espresso shots with a hint of black sea salt.',
    origin: 'Ghana Single Estate Cocoa & Sumatra Mandheling',
    price: '$7.50'
  },
  {
    id: 'hazelnut-hush',
    number: '11',
    name: 'Hazelnut Hush',
    mood: 'Unwind',
    category: 'Comfort',
    flavourProfile: ['Toasted hazelnut', 'Espresso', 'Silky milk'],
    flavourSummary: 'Toasted hazelnut, espresso, and silky milk.',
    emotionalDescription: 'Unplugging from the noise. The reassuring earthy crunch of toasted nuts and slow, buttery warmth.',
    visualDirection: 'A hazelnut latte with toasted nuts and warm brown textures.',
    image: '/src/assets/images/drink_hazelnut_hush_1792164504342.jpg',
    temp: 'Hot',
    notes: 'Piedmont roasted hazelnut butter whipped with espresso and finished with warm whole milk and crushed praline.',
    origin: 'Piedmont, Italy & Peru Chanchamayo',
    price: '$6.75'
  },
  {
    id: 'citrus-rush',
    number: '12',
    name: 'Citrus Rush',
    mood: 'Ready for something new',
    category: 'Adventure',
    flavourProfile: ['Sparkling tonic', 'Ruby grapefruit & lemon', 'Espresso float'],
    flavourSummary: 'Espresso, tonic, and citrus.',
    emotionalDescription: 'Fizzy, electric, and sun-drenched. The awakening jolt that shakes loose routine and invites play.',
    visualDirection: 'A sparkling espresso tonic with ice, citrus, and bright daylight.',
    image: '/src/assets/images/drink_citrus_rush_1792164503439.jpg',
    temp: 'Chilled',
    notes: 'Artisanal cinchona tonic water over clear hand-cut ice, express grapefruit oil, and a floated washed espresso.',
    origin: 'Honduras Marcala & Mediterranean Botanicals',
    price: '$7.00'
  },
  {
    id: 'white-velvet',
    number: '13',
    name: 'White Velvet',
    mood: 'Treat yourself',
    category: 'Indulgence',
    flavourProfile: ['Ivory white chocolate', 'Espresso', 'Creamy milk'],
    flavourSummary: 'White chocolate, espresso, and creamy milk.',
    emotionalDescription: 'Pure indulgence without an apology. Celebrating small milestones that only you truly understand.',
    visualDirection: 'A pale, creamy coffee with subtle white chocolate styling.',
    image: '/src/assets/images/drink_white_velvet_1792164524401.jpg',
    temp: 'Hot',
    notes: 'Melted Swiss white cocoa butter stirred into golden blonde espresso with a dusting of confectioner sugar.',
    origin: 'Switzerland & Colombia Nariño',
    price: '$7.25'
  },
  {
    id: 'coconut-coast',
    number: '14',
    name: 'Coconut Coast',
    mood: 'Mentally on holiday',
    category: 'Refresh',
    flavourProfile: ['Pressed coconut milk', 'Chilled espresso', 'Toasted coconut flake'],
    flavourSummary: 'Espresso and coconut milk.',
    emotionalDescription: 'Salt breezes and palm shadows in a glass. Transporting your spirit hundreds of miles away from the desk.',
    visualDirection: 'An iced coconut latte with tropical details and soft natural light.',
    image: '/src/assets/images/drink_coconut_coast_1792164524948.jpg',
    temp: 'Iced',
    notes: 'First-press organic coconut cream shaken over ice with double espresso and crowned with toasted coconut chips.',
    origin: 'Philippines & Tanzanian Peaberry',
    price: '$7.00'
  },
  {
    id: 'pistachio-poetry',
    number: '15',
    name: 'Pistachio Poetry',
    mood: 'A little fancy',
    category: 'Indulgence',
    flavourProfile: ['Sicilian pistachio paste', 'Rich espresso', 'Velvet steamed milk'],
    flavourSummary: 'Pistachio, espresso, and creamy milk.',
    emotionalDescription: 'Refined, poetic, and utterly memorable. Like an intimate conversation in a sun-drenched European courtyard.',
    visualDirection: 'Pistachio-green accents, crushed pistachios, and refined styling.',
    image: '/src/assets/images/drink_pistachio_poetry_1792164525686.jpg',
    temp: 'Hot',
    notes: 'Bronte green pistachio purée layered into rich espresso and topped with cracked emerald pistachio dust.',
    origin: 'Bronte, Sicily & Ethiopia Guji',
    price: '$7.50'
  },
  {
    id: 'brown-sugar-affair',
    number: '16',
    name: 'Brown Sugar Affair',
    mood: 'Main character energy',
    category: 'Refresh',
    flavourProfile: ['Dark brown sugar syrup', 'Shaken espresso', 'Cinnamon drizzle'],
    flavourSummary: 'Shaken espresso, brown sugar, and cinnamon.',
    emotionalDescription: 'Shaken with confidence. Cool caramel tones, lively espresso foam, and irresistible charisma.',
    visualDirection: 'An iced brown sugar espresso with visible layers and warm caramel tones.',
    image: '/src/assets/images/drink_brown_sugar_affair_1792164525920.jpg',
    temp: 'Iced',
    notes: 'Brown muscovado sugar and ground cassia vigorously shaken with espresso over rock ice and topped with oat milk.',
    origin: 'Mauritius Muscovado & Guatemala Huehuetenango',
    price: '$6.75'
  },
  {
    id: 'after-hours-affogato',
    number: '17',
    name: 'After Hours Affogato',
    mood: 'Indulgent and spontaneous',
    category: 'Indulgence',
    flavourProfile: ['Tahitian vanilla bean gelato', 'Dark molten espresso', 'Crema drizzle'],
    flavourSummary: 'Espresso and vanilla ice cream.',
    emotionalDescription: 'The meeting of opposites: bitter and sweet, molten and frozen. An impromptu celebration of the senses.',
    visualDirection: 'Espresso being poured over vanilla ice cream in a glass dessert cup.',
    image: '/src/assets/images/drink_after_hours_affogato_1792164526196.jpg',
    temp: 'Dessert',
    notes: 'Two generous scoops of dense artisanal vanilla gelato drowned under a fresh pulled double ristretto shot.',
    origin: 'Madagascar Vanilla & Italian Dark Blend',
    price: '$7.75'
  },
  {
    id: 'maple-muse',
    number: '18',
    name: 'Maple Muse',
    mood: 'Slow and cosy',
    category: 'Comfort',
    flavourProfile: ['Vermont amber maple syrup', 'Nutmeg dust', 'Creamy espresso latte'],
    flavourSummary: 'Maple syrup, espresso, and milk.',
    emotionalDescription: 'Crisp autumn air outside and pure woodsmoke warmth within. A cup to daydream with beside a rainy window.',
    visualDirection: 'A maple latte with a gentle syrup drizzle and warm, autumn-inspired styling.',
    image: '/src/assets/images/drink_maple_muse_1792164527402.jpg',
    temp: 'Hot',
    notes: 'Grade A Vermont dark maple syrup gently stirred into velvety whole milk and finished with fresh grated nutmeg.',
    origin: 'Vermont Amber Maple & Colombia Excelso',
    price: '$6.75'
  }
];

export const MOOD_LETTERS: MoodLetterMood[] = [
  {
    id: 'slow',
    label: 'Slow',
    subtitle: 'For unhurried mornings and deep breaths',
    letters: [
      {
        letterNo: '001',
        salutation: 'Dear slow morning,',
        message: 'You don’t have to have everything figured out today. Let the morning take its time. Find a little sunlight, take a breath, and give yourself permission to begin slowly.',
        coffeeRecommendationId: 'honey-oat-latte',
        reminder: 'You can take the day one moment at a time.'
      },
      {
        letterNo: '002',
        salutation: 'Dear unhurried heart,',
        message: 'The world will tell you to hurry before you’ve even had your first sip. Resist it for just twenty minutes. Watch the steam rise, listen to the kettle whistle, and let yourself just be here.',
        coffeeRecommendationId: 'maple-muse',
        reminder: 'Rest is not something you have to earn.'
      },
      {
        letterNo: '003',
        salutation: 'Dear quiet morning,',
        message: 'Today does not demand a grand entrance. A gentle beginning is more than enough. Pour your coffee, open the curtains, and let the light find you exactly as you are.',
        coffeeRecommendationId: 'velvet-cloud-latte',
        reminder: 'Gentleness is its own quiet kind of strength.'
      }
    ]
  },
  {
    id: 'overwhelmed',
    label: 'Overwhelmed',
    subtitle: 'When the noise feels a little too loud',
    letters: [
      {
        letterNo: '014',
        salutation: 'Dear tired mind,',
        message: 'Put down the mental inventory for five minutes. You do not need to solve the whole week in this single hour. Drink this cup while it is warm. The rest can wait.',
        coffeeRecommendationId: 'iced-vanilla-latte',
        reminder: 'You are allowed to pause without explaining yourself.'
      },
      {
        letterNo: '015',
        salutation: 'Dear deep breather,',
        message: 'When everything feels like an emergency, remember: you only ever have to live inside this present ten seconds. Feel your feet on the floor. Take a sip. You are safe right now.',
        coffeeRecommendationId: 'flat-white',
        reminder: 'One thing at a time. Then the next.'
      },
      {
        letterNo: '016',
        salutation: 'Dear overloaded soul,',
        message: 'You carry so many invisible responsibilities that no one else sees. Right here, right now, lay that bag down. Let the aroma of roasted beans be your sanctuary.',
        coffeeRecommendationId: 'hazelnut-hush',
        reminder: 'Not everything that pulls at your sleeve deserves your response.'
      }
    ]
  },
  {
    id: 'hopeful',
    label: 'Hopeful',
    subtitle: 'A quiet spark waiting to catch light',
    letters: [
      {
        letterNo: '028',
        salutation: 'Dear dreamer,',
        message: 'That little flutter in your chest? That’s possibility knocking. Trust what is beginning to bloom, even if you can’t name the flowers yet. Step forward with open hands.',
        coffeeRecommendationId: 'golden-hour-macchiato',
        reminder: 'Good things are quietly gathering on your behalf.'
      },
      {
        letterNo: '029',
        salutation: 'Dear believer in tomorrow,',
        message: 'Some days feel like the first page of a chapter you’ve been waiting months to read. Turn the page with wonder. Taste the honey and caramel, and welcome the light.',
        coffeeRecommendationId: 'honey-oat-latte',
        reminder: 'Every sunrise carries an unwritten story.'
      },
      {
        letterNo: '030',
        salutation: 'Dear open heart,',
        message: 'Keep holding that gentle optimism. It is rare, and it is brave. Let this drink celebrate the quiet confidence that things are shifting in your favor.',
        coffeeRecommendationId: 'citrus-rush',
        reminder: 'Hope is a compass that never rusts.'
      }
    ]
  },
  {
    id: 'confident',
    label: 'Confident',
    subtitle: 'Standing tall in your own light',
    letters: [
      {
        letterNo: '042',
        salutation: 'Dear force of nature,',
        message: 'You didn’t stumble into this moment by accident. You built the wings, you walked the uphill miles, and you earned the view. Step into the room knowing you belong.',
        coffeeRecommendationId: 'rose-mocha',
        reminder: 'Own your voice without lowering the volume.'
      },
      {
        letterNo: '043',
        salutation: 'Dear main character,',
        message: 'Look at how far you’ve come from the versions of you that doubted this would ever happen. Toast to yourself today. Take up space. You look magnificent.',
        coffeeRecommendationId: 'brown-sugar-affair',
        reminder: 'Your presence changes the room.'
      },
      {
        letterNo: '044',
        salutation: 'Dear game changer,',
        message: 'Clear eyes, warm coffee, and an appetite for adventure. Whatever challenge meets you today, it hasn’t met this version of you yet. Go show them.',
        coffeeRecommendationId: 'orange-cinnamon-cold-brew',
        reminder: 'Doubt is just white noise. Keep moving.'
      }
    ]
  },
  {
    id: 'nostalgic',
    label: 'Nostalgic',
    subtitle: 'Golden memories and familiar warmth',
    letters: [
      {
        letterNo: '057',
        salutation: 'Dear old soul,',
        message: 'Isn’t it beautiful how a single scent—cinnamon, roasted espresso, warm milk—can carry you back ten years in half a heartbeat? Honor those old seasons, then smile at this one.',
        coffeeRecommendationId: 'cinnamon-cappuccino',
        reminder: 'The memories are sweet because they made who you are today.'
      },
      {
        letterNo: '058',
        salutation: 'Dear daydreamer,',
        message: 'It’s okay to linger in the golden haze of yesterday for a little while. Just remember to bring the lessons and warmth back with you into this afternoon.',
        coffeeRecommendationId: 'midnight-mocha',
        reminder: 'What is behind was meaningful; what is ahead is waiting.'
      },
      {
        letterNo: '059',
        salutation: 'Dear quiet keeper of stories,',
        message: 'Some cups feel like a postcard from an old friend. Wrap your fingers around the ceramic. Feel the familiar heat. You are rooted in love that lasts.',
        coffeeRecommendationId: 'hazelnut-hush',
        reminder: 'Home is not just a place; it is a feeling you can brew.'
      }
    ]
  },
  {
    id: 'in-need-of-comfort',
    label: 'In Need of Comfort',
    subtitle: 'Soft textures, warm blankets, tender care',
    letters: [
      {
        letterNo: '071',
        salutation: 'Dear tender heart,',
        message: 'It has been heavy lately, hasn’t it? You don’t need to be strong every second. Wrap both hands around this warm mug, lean your head back, and let the warmth soften your shoulders.',
        coffeeRecommendationId: 'cinnamon-cappuccino',
        reminder: 'It is okay to be fragile. The world will hold you.'
      },
      {
        letterNo: '072',
        salutation: 'Dear gentle friend,',
        message: 'Here is a cup made with nothing but patience and care. You do not need to explain why today is difficult. Just sit with this drink and know that you are cared for.',
        coffeeRecommendationId: 'velvet-cloud-latte',
        reminder: 'Tomorrow is another chance to feel light again.'
      },
      {
        letterNo: '073',
        salutation: 'Dear tired traveler,',
        message: 'May this cup be a warm blanket around your spirit. Take small sips. Watch the light change. You will make it through this day, just as you have through every day before.',
        coffeeRecommendationId: 'white-velvet',
        reminder: 'Give yourself the same kindness you offer everyone else.'
      }
    ]
  }
];

export const JOURNAL_REFLECTIONS: JournalReflection[] = [
  {
    id: 'slow-mornings',
    theme: 'On Slow Mornings',
    quote: 'Give yourself a moment before giving the world your attention.',
    reflection: 'Before the emails buzz and notifications demand your energy, there exists a sacred twenty minutes. In that quiet slice of dawn, you belong entirely to yourself. The steam off your cup is your only schedule.',
    moment: '7:15 AM · The First Light',
    author: 'Moodbrew Journal, Vol. I'
  },
  {
    id: 'starting-again',
    theme: 'On Starting Again',
    quote: 'A new beginning doesn’t always need a Monday.',
    reflection: 'We often postpone our restarts until the calendar gives us permission. But a reset can happen at 2:40 PM on a rainy Thursday over a cold brew with a twist of orange. All it takes is one intentional breath.',
    moment: '2:40 PM · The Midday Reset',
    author: 'Moodbrew Journal, Vol. I'
  },
  {
    id: 'finding-comfort',
    theme: 'On Finding Comfort',
    quote: 'Sometimes, the smallest rituals make an ordinary day feel special.',
    reflection: 'The tactile weight of a stoneware ceramic mug. The hiss of the steam wand. The sprinkle of Ceylon cinnamon falling like autumn leaves. We don’t just drink coffee; we inhabit a ritual.',
    moment: '4:30 PM · The Cozy Hour',
    author: 'Moodbrew Journal, Vol. I'
  },
  {
    id: 'being-present',
    theme: 'On Being Present',
    quote: 'Let this be a moment you experience instead of rushing past.',
    reflection: 'How often do we drink our coffee while reading three articles, checking two messages, and anticipating five meetings? Today, take three sips where you do nothing else. Notice the temperature, the sweetness, the quiet.',
    moment: '11:00 AM · The Grounding Pause',
    author: 'Moodbrew Journal, Vol. I'
  },
  {
    id: 'little-wins',
    theme: 'On Little Wins',
    quote: 'Not every victory needs an audience.',
    reflection: 'You showed up. You got out of bed when it felt hard. You answered that difficult call. Celebrate the quiet triumphs with an affogato or a rose mocha. You know what it cost to get here.',
    moment: '5:45 PM · The Quiet Toast',
    author: 'Moodbrew Journal, Vol. I'
  }
];
