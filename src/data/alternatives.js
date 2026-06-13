export const alternatives = [
  {
    id: 1,
    cat: "Dairy",
    original: "Cow Milk",
    alternatives: [
      {
        alt: "Groundnut Milk",
        tag: "Cheapest + Easiest",
        reason: "Cheapest plant milk — costs just ₹10-15 per litre at home. Easy to make and nutritious.",
        recipe: {
          title: "🥜 Homemade Groundnut Milk",
          ingredients: ["1/2 cup peanuts (soaked overnight)", "3 cups water", "2 dates (for sweetness)", "Pinch of cardamom"],
          steps: ["Drain soaked peanuts.", "Blend with water, dates and cardamom for 2 min.", "Strain well through muslin cloth.", "Store in fridge — stays fresh 3-4 days!"]
        }
      },
      {
        alt: "Oat Milk",
        tag: "Creamy + Popular",
        reason: "Very easy to make at home. Creamy texture, great for chai and smoothies. Oats are widely available in India.",
        recipe: {
          title: "🌾 Homemade Oat Milk",
          ingredients: ["1 cup rolled oats", "3 cups cold water", "Pinch of salt", "1 tsp honey (optional)"],
          steps: ["Soak oats in cold water for 15 min.", "Blend for 30 seconds only (not more — gets slimy).", "Strain through muslin cloth immediately.", "Store in fridge up to 4 days. Shake before use!"]
        }
      },
      {
        alt: "Soy Milk",
        tag: "High Protein",
        reason: "Highest protein among all plant milks (7-8g per cup). Great for athletes and growing kids. Soy is grown widely in India.",
        recipe: {
          title: "🫘 Homemade Soy Milk",
          ingredients: ["1 cup soybeans (soaked overnight)", "4 cups water", "1 tsp vanilla (optional)", "2 dates (optional)"],
          steps: ["Drain and peel soybeans.", "Blend with fresh water until smooth.", "Boil the blended mixture for 10 min, stirring constantly.", "Strain through muslin. Cool and refrigerate!"]
        }
      },
      {
        alt: "Coconut Milk",
        tag: "South India Favourite",
        reason: "Widely used in South Indian cooking. Rich, creamy and naturally sweet. Perfect for curries, desserts and chai.",
        recipe: {
          title: "🥥 Fresh Coconut Milk",
          ingredients: ["1 fresh coconut (grated)", "2 cups warm water"],
          steps: ["Blend grated coconut with warm water for 2 min.", "Strain through muslin — this is thick coconut milk.", "Add 1 more cup water, blend again for thin milk.", "Use fresh or refrigerate up to 2 days."]
        }
      }
    ]
  },
  {
    id: 2,
    cat: "Dairy",
    original: "Curd (Dahi)",
    alternatives: [
      {
        alt: "Groundnut Curd",
        tag: "Probiotic + Affordable",
        reason: "Made from groundnut milk — probiotic, creamy and great for gut health. Costs a fraction of dairy curd.",
        recipe: {
          title: "🥜 Groundnut Milk Curd",
          ingredients: ["1 cup peanuts (soaked 8 hrs)", "2.5 cups water", "2 tbsp curd starter or lemon juice"],
          steps: ["Blend peanuts with water, strain — this is groundnut milk.", "Heat milk to 80°C, cool to 40°C.", "Add starter, mix well.", "Cover and keep warm 8-10 hrs. Refrigerate once set!"]
        }
      },
      {
        alt: "Coconut Curd",
        tag: "Creamy + Rich",
        reason: "Thick and creamy curd made from coconut milk. Perfect for raita and desserts. Widely used in South India.",
        recipe: {
          title: "🥥 Coconut Milk Curd",
          ingredients: ["1 can or 2 cups thick coconut milk", "2 tbsp curd starter or lemon juice"],
          steps: ["Warm coconut milk to 40°C (lukewarm).", "Add starter and mix gently.", "Pour into a bowl, cover with cloth.", "Keep in warm place 8-10 hrs until set. Refrigerate!"]
        }
      },
      {
        alt: "Cashew Curd",
        tag: "Thick + Creamy",
        reason: "Richest and creamiest plant-based curd. Great for shrikhand and dips. Cashews are widely grown in India.",
        recipe: {
          title: "🪙 Cashew Curd",
          ingredients: ["1 cup cashews (soaked 4 hrs)", "1.5 cups water", "2 tbsp starter or lemon juice"],
          steps: ["Blend soaked cashews with water until very smooth.", "Warm to 40°C.", "Add starter, mix well.", "Set in warm place 8-10 hrs. Refrigerate!"]
        }
      }
    ]
  },
  {
    id: 3,
    cat: "Dairy",
    original: "Paneer (Cottage Cheese)",
    alternatives: [
      {
        alt: "Soy Tofu",
        tag: "Closest Texture",
        reason: "Closest to paneer in texture and protein content. Absorbs spices well. Available in most Indian cities now.",
        recipe: {
          title: "🫘 Marinated Tofu (Paneer style)",
          ingredients: ["250g firm tofu", "1 tsp turmeric", "1 tsp cumin", "Salt to taste", "1 tbsp coconut oil"],
          steps: ["Press tofu between towels to remove water.", "Cut into paneer-sized cubes.", "Marinate with spices for 30 min.", "Pan fry in coconut oil until golden. Use in any paneer recipe!"]
        }
      },
      {
        alt: "Chickpea Tofu",
        tag: "100% Indian Ingredients",
        reason: "Made from besan (chickpea flour) — 100% Indian ingredients, easy to make at home. Popular in Burma as 'Tohu'.",
        recipe: {
          title: "🟡 Chickpea Tofu (Besan Tofu)",
          ingredients: ["1 cup chickpea flour (besan)", "3 cups water", "1 tsp salt", "1/2 tsp turmeric"],
          steps: ["Mix besan in 1 cup cold water — no lumps.", "Boil remaining 2 cups water, slowly add besan mix while stirring.", "Cook on medium flame 8-10 min until thick.", "Pour into mold, cool, refrigerate 2 hrs. Slice and use!"]
        }
      },
      {
        alt: "Cashew Cheese",
        tag: "Rich + Creamy",
        reason: "Great for creamy paneer dishes like shahi paneer. Rich in healthy fats. Best for gravies and spreads.",
        recipe: {
          title: "🪙 Cashew Cheese",
          ingredients: ["1 cup cashews (soaked 4 hrs)", "2 tbsp lemon juice", "1 tsp salt", "1/4 cup water"],
          steps: ["Drain soaked cashews.", "Blend with lemon juice, salt and water until very smooth.", "Use as is for creamy gravies.", "Or set in mold in fridge for 2 hrs for sliceable cheese!"]
        }
      }
    ]
  },
  {
    id: 4,
    cat: "Dairy",
    original: "Ghee (Clarified Butter)",
    alternatives: [
      {
        alt: "Cold-pressed Coconut Oil",
        tag: "Best Substitute",
        reason: "Similar smoke point to ghee. Adds a mild flavour to Indian cooking. Widely available across India.",
        recipe: {
          title: "🥥 Herb-infused Coconut Oil",
          ingredients: ["1 cup cold-pressed coconut oil", "5-6 curry leaves", "1 inch ginger"],
          steps: ["Heat coconut oil on low flame.", "Add curry leaves and ginger, infuse 2 min.", "Cool and strain.", "Use exactly like ghee!"]
        }
      },
      {
        alt: "Sesame Oil (Til Oil)",
        tag: "Traditional + Healthy",
        reason: "Traditional Indian cooking oil, rich in antioxidants. Used widely in South India and Maharashtra. Great for tadka.",
        recipe: {
          title: "🌱 Sesame Tadka Oil",
          ingredients: ["1/2 cup cold-pressed sesame oil", "1 tsp mustard seeds", "Curry leaves"],
          steps: ["Heat sesame oil on medium flame.", "Add mustard seeds, let them splutter.", "Add curry leaves.", "Use as tadka — far healthier than ghee!"]
        }
      },
      {
        alt: "Cold-pressed Groundnut Oil",
        tag: "Most Affordable",
        reason: "Most affordable cold-pressed oil in India. High smoke point, perfect for all Indian cooking. Rich in Vitamin E.",
        recipe: {
          title: "🥜 Spiced Groundnut Oil",
          ingredients: ["1 cup cold-pressed groundnut oil", "2 dried red chillies", "1 tsp cumin seeds"],
          steps: ["Heat oil gently.", "Add cumin and chillies, infuse 1 min.", "Cool and store.", "Use in place of ghee for rotis and dal!"]
        }
      }
    ]
  },
  {
    id: 5,
    cat: "Dessert",
    original: "Store-bought Ice Cream",
    alternatives: [
      {
        alt: "Banana Nice Cream",
        tag: "No Palm Oil + 3 Ingredients",
        reason: "Store-bought ice cream contains palm oil (deforestation), refined sugar and artificial flavours. This is equally creamy with zero guilt.",
        recipe: {
          title: "🍌 Banana Nice Cream",
          ingredients: ["3 ripe bananas (frozen)", "2 tbsp cocoa powder", "Pinch of salt"],
          steps: ["Peel bananas and freeze minimum 4 hours.", "Blend frozen bananas until smooth.", "Add cocoa and salt, blend again.", "Serve immediately or freeze 1 hr for firmer texture!"]
        }
      },
      {
        alt: "Coconut Milk Ice Cream",
        tag: "Rich + Creamy",
        reason: "Full-fat coconut milk makes incredibly creamy ice cream. No palm oil, no preservatives. Can be made in many Indian flavours.",
        recipe: {
          title: "🥥 Coconut Milk Ice Cream",
          ingredients: ["2 cans full-fat coconut milk (refrigerated overnight)", "3 tbsp jaggery powder", "1 tsp cardamom", "Saffron (optional)"],
          steps: ["Scoop thick cream from top of refrigerated coconut milk.", "Whip with jaggery and cardamom until fluffy.", "Pour into container, freeze 4 hrs.", "Scoop and serve — tastes like kulfi!"]
        }
      },
      {
        alt: "Mango Sorbet",
        tag: "100% Fruit + Indian",
        reason: "India is the world's largest mango producer. Pure mango sorbet needs zero added sugar, zero dairy and zero palm oil.",
        recipe: {
          title: "🥭 Fresh Mango Sorbet",
          ingredients: ["3 ripe Alphonso mangoes", "1 tbsp lemon juice", "Pinch of salt"],
          steps: ["Peel and chop mangoes.", "Blend until smooth.", "Add lemon juice and salt.", "Freeze 4-6 hrs, scraping every hour. Serve!"]
        }
      }
    ]
  },
  {
    id: 6,
    cat: "Dessert",
    original: "Indian Sweets (Khoya based)",
    alternatives: [
      {
        alt: "Date-Nut Ladoo",
        tag: "No Refined Sugar",
        reason: "Dates provide natural sugar and fibre. No cooking needed. Ready in 10 minutes and healthier than any khoya sweet.",
        recipe: {
          title: "🟤 Date-Nut Ladoo",
          ingredients: ["1 cup dates (seedless)", "1/2 cup mixed nuts", "2 tbsp desiccated coconut", "1 tsp cardamom"],
          steps: ["Dry roast nuts 5 min.", "Blend dates and nuts in processor.", "Add cardamom, shape into balls.", "Roll in coconut. Done!"]
        }
      },
      {
        alt: "Coconut Jaggery Barfi",
        tag: "Traditional + Vegan",
        reason: "Made with fresh coconut and jaggery — both traditional Indian ingredients. Zero dairy, zero refined sugar, full flavour.",
        recipe: {
          title: "🥥 Coconut Jaggery Barfi",
          ingredients: ["2 cups grated fresh coconut", "1 cup jaggery (grated)", "1 tsp cardamom", "Ghee alternative — coconut oil"],
          steps: ["Heat coconut oil in pan.", "Add coconut and jaggery, mix well.", "Cook on low flame until mixture leaves sides.", "Pour into greased tray, cool, cut into pieces!"]
        }
      }
    ]
  },
  {
    id: 7,
    cat: "Staple",
    original: "Maida (Refined Flour)",
    alternatives: [
      {
        alt: "Jowar Flour",
        tag: "Gluten-free + Local",
        reason: "Traditional Indian grain, gluten-free, high in iron. Grown across Maharashtra, Karnataka. Much better for blood sugar.",
        recipe: {
          title: "🫓 Jowar Roti",
          ingredients: ["1 cup jowar flour", "Warm water as needed", "Pinch of salt"],
          steps: ["Mix salt into flour.", "Add warm water gradually, knead soft dough.", "Roll out carefully.", "Cook on tawa both sides. Apply coconut oil!"]
        }
      },
      {
        alt: "Bajra Flour",
        tag: "High Iron + Warming",
        reason: "Pearl millet — grown across Rajasthan and Gujarat. Rich in iron, magnesium. Especially great in winter months.",
        recipe: {
          title: "🌾 Bajra Roti",
          ingredients: ["1 cup bajra flour", "Warm water", "Pinch of salt"],
          steps: ["Mix flour and salt.", "Add warm water, knead into stiff dough.", "Pat into rotis with wet hands.", "Cook on hot tawa, apply groundnut oil!"]
        }
      },
      {
        alt: "Whole Wheat Flour",
        tag: "Easiest Switch",
        reason: "Easiest 1:1 replacement for maida. More fibre, more nutrients. Available everywhere in India at same price.",
        recipe: {
          title: "🌾 Whole Wheat Chapati",
          ingredients: ["1 cup whole wheat flour (atta)", "Water as needed", "Pinch of salt"],
          steps: ["Mix flour and salt.", "Add water gradually, knead soft dough.", "Rest 15 min.", "Roll and cook on tawa — same as regular chapati!"]
        }
      }
    ]
  },
  {
    id: 8,
    cat: "Protein",
    original: "Chicken / Eggs",
    alternatives: [
      {
        alt: "Raw Jackfruit (Kathal)",
        tag: "Most Meat-like Texture",
        reason: "Raw jackfruit has a texture almost identical to chicken when cooked. India is one of the largest jackfruit producers in the world.",
        recipe: {
          title: "🍖 Jackfruit Keema",
          ingredients: ["2 cups raw jackfruit (chopped)", "1 onion", "2 tomatoes", "Indian spices", "1 tsp coconut oil"],
          steps: ["Pressure cook jackfruit 3 whistles.", "Shred with fork — looks just like minced meat!", "Saute onion, tomato and spices.", "Add jackfruit, cook 5 min. Ready!"]
        }
      },
      {
        alt: "Chickpeas (Chana)",
        tag: "Highest Protein + Cheapest",
        reason: "Most affordable high-protein food in India. 15g protein per cup. Works in curries, salads, chaat — everything.",
        recipe: {
          title: "🫘 Spiced Chana (Egg curry alternative)",
          ingredients: ["1 cup chickpeas (soaked overnight)", "1 onion", "2 tomatoes", "Egg curry masala", "Coconut oil"],
          steps: ["Pressure cook chana 4 whistles.", "Saute onion and tomato in coconut oil.", "Add masala, cook 2 min.", "Add chana, simmer 10 min. Tastes like egg curry!"]
        }
      },
      {
        alt: "Mushrooms",
        tag: "Umami + Meaty",
        reason: "Mushrooms have the most meat-like umami flavour of all vegetables. Button and oyster mushrooms are widely available in Indian cities.",
        recipe: {
          title: "🍄 Mushroom Keema",
          ingredients: ["300g mushrooms (finely chopped)", "1 onion", "2 tomatoes", "Keema masala", "1 tsp coconut oil"],
          steps: ["Finely chop mushrooms — almost mince-like.", "Saute onion and tomato.", "Add mushrooms and masala.", "Cook until dry and fragrant. Serve with roti!"]
        }
      }
    ]
  }
  ,
  // ========== NUTRIENTS ==========

  // MACRONUTRIENTS
  {
    id: 9,
    cat: "Nutrients",
    original: "Protein",
    alternatives: [
      {
        alt: "Dal + Rice (Complete Protein)",
        tag: "Macronutrient • Cheapest",
        reason: "Dal and rice together form a complete protein with all essential amino acids — same as whey. Most affordable protein source in India.",
        tips: null,
        recipe: {
          title: "🫘 High Protein Dal Chawal",
          ingredients: ["1 cup masoor/moong dal", "1 cup brown rice", "Turmeric, cumin, salt", "1 tsp coconut oil"],
          steps: ["Pressure cook dal and rice separately.", "Temper dal with cumin and turmeric in coconut oil.", "Combine — this gives ~18g protein per serving.", "Add lemon juice for better iron absorption!"]
        }
      },
      {
        alt: "Soybean / Tofu",
        tag: "Macronutrient • Highest Plant Protein",
        reason: "Soy is the only plant food with complete protein profile. 100g tofu = 8-10g protein. Widely grown in India.",
        tips: null,
        recipe: {
          title: "🫘 Spiced Tofu Bhurji",
          ingredients: ["200g firm tofu", "1 onion", "1 tomato", "Turmeric, cumin, garam masala", "1 tsp coconut oil"],
          steps: ["Crumble tofu like paneer bhurji.", "Saute onion and tomato in coconut oil.", "Add spices and crumbled tofu.", "Cook 5 min. 20g protein per serving!"]
        }
      },
      {
        alt: "Chana (Chickpeas)",
        tag: "Macronutrient • High Protein + Fibre",
        reason: "1 cup cooked chickpeas = 15g protein + 12g fibre. One of the most affordable high-protein foods in India.",
        tips: null,
        recipe: {
          title: "🫘 Chana Chaat (High Protein)",
          ingredients: ["1 cup boiled chickpeas", "1 onion (chopped)", "1 tomato", "Chaat masala, lemon juice", "Fresh coriander"],
          steps: ["Boil chickpeas until soft.", "Mix with chopped onion and tomato.", "Add chaat masala and lemon juice.", "Top with coriander. 15g protein, zero cooking!"]
        }
      },
      {
        alt: "Moringa (Drumstick Leaves)",
        tag: "Macronutrient • Superfood",
        reason: "Moringa leaves have 9g protein per 100g — higher than most vegetables. Also rich in iron, calcium and Vitamin C. Grows across India.",
        tips: null,
        recipe: {
          title: "🌿 Moringa Dal",
          ingredients: ["1 cup toor dal", "1 cup moringa leaves", "Tomato, onion", "Mustard seeds, curry leaves", "Coconut oil"],
          steps: ["Cook toor dal until soft.", "Saute mustard seeds, onion, tomato.", "Add moringa leaves, cook 2 min.", "Mix into dal. Protein + iron + calcium in one bowl!"]
        }
      }
    ]
  },
  {
    id: 10,
    cat: "Nutrients",
    original: "Omega-3",
    alternatives: [
      {
        alt: "Chia Seeds",
        tag: "Healthy Fat • Richest Plant Source",
        reason: "1 tbsp chia seeds = 2.5g Omega-3. Highest plant-based source of ALA omega-3. Easy to add to any meal.",
        tips: null,
        recipe: {
          title: "🌱 Chia Seed Pudding",
          ingredients: ["3 tbsp chia seeds", "1 cup groundnut/oat milk", "1 tsp jaggery", "Cardamom"],
          steps: ["Mix chia seeds in milk.", "Add jaggery and cardamom.", "Refrigerate overnight.", "Top with fruit. Daily omega-3 sorted!"]
        }
      },
      {
        alt: "Flax Seeds (Alsi)",
        tag: "Healthy Fat • Most Affordable",
        reason: "Cheapest omega-3 source in India. Must be ground before eating — whole seeds pass through undigested. 1 tbsp ground = 1.8g omega-3.",
        tips: [
          "Always grind before eating — whole seeds don't get absorbed",
          "Store ground flax in fridge — goes rancid quickly",
          "Add to roti dough, dal, or smoothies",
          "1 tbsp ground flax daily is sufficient"
        ],
        recipe: null
      },
      {
        alt: "Walnuts (Akhrot)",
        tag: "Healthy Fat • Brain Health",
        reason: "Walnuts are the only nut significantly high in omega-3. 7 walnuts = 2.5g omega-3. Also great for brain health and heart.",
        tips: [
          "Eat 5-7 walnuts daily — ideally in the morning",
          "Soak overnight for better absorption",
          "Store in fridge to prevent rancidity",
          "Pairs well with dates as a snack"
        ],
        recipe: null
      }
    ]
  },

  // VITAMINS
  {
    id: 11,
    cat: "Nutrients",
    original: "Vitamin D",
    alternatives: [
      {
        alt: "Sunlight (15-20 min daily)",
        tag: "Vitamin • Free + Most Effective",
        reason: "Sunlight is the most effective source of Vitamin D. Indian skin produces Vitamin D efficiently in sunlight. Most Indians are deficient despite living in a sunny country — because we avoid sun!",
        tips: [
          "Best time: 11am - 1pm (when shadow is shorter than you)",
          "Expose arms and legs — not just face",
          "15-20 minutes is enough for most Indians",
          "Glass windows block UV rays — go outside",
          "Sunscreen blocks Vitamin D production — skip it for this short duration"
        ],
        recipe: null
      },
      {
        alt: "Sun-bathed Mushrooms",
        tag: "Vitamin • Best Food Source",
        reason: "Mushrooms are the only plant food that produces Vitamin D when exposed to sunlight — just like humans! Place them gills-up in sunlight for 1-2 hours.",
        tips: [
          "Place mushrooms gills-side up in direct sunlight",
          "1-2 hours of sun exposure is enough",
          "They retain Vitamin D even after cooking",
          "Button, oyster, or any variety works"
        ],
        recipe: {
          title: "🍄 Sun-bathed Mushroom Stir Fry",
          ingredients: ["200g mushrooms (sun-bathed 2 hrs)", "Garlic, ginger", "Soy sauce or tamari", "Black pepper", "Coconut oil"],
          steps: ["Sun-bathe mushrooms gills-up for 2 hours.", "Slice and stir fry in coconut oil.", "Add garlic, ginger, soy sauce.", "Cook 5 min. Best natural Vitamin D meal!"]
        }
      },
      {
        alt: "Fortified Foods",
        tag: "Vitamin • Easy Daily Option",
        reason: "Some Indian foods are now fortified with Vitamin D — fortified soy milk, oat milk, and some cereals. Check the label for 'Vitamin D' or 'Cholecalciferol'.",
        tips: [
          "Look for 'fortified with Vitamin D' on label",
          "Soy milk and oat milk often fortified",
          "Some Amul products are now fortified",
          "Combine with sunlight for best results"
        ],
        recipe: null
      }
    ]
  },
  {
    id: 12,
    cat: "Nutrients",
    original: "Vitamin B12",
    alternatives: [
      {
        alt: "Fermented Rice (Pakhala/Ambali)",
        tag: "Vitamin • Traditional Indian Source",
        reason: "Overnight fermented rice is a traditional source of B12 produced by bacteria during fermentation. Widely consumed in Odisha, Chhattisgarh and South India.",
        tips: [
          "Soak cooked rice in water overnight (8-12 hrs)",
          "Eat with onion, green chilli and salt",
          "The fermentation bacteria produce B12",
          "Most effective when fermented in clay pots"
        ],
        recipe: null
      },
      {
        alt: "Idli / Dosa Batter (Fermented)",
        tag: "Vitamin • Most Common Indian Source",
        reason: "Fermented idli/dosa batter contains B12 produced during fermentation. Regular consumption of idli and dosa is one reason South Indians historically had lower B12 deficiency.",
        tips: [
          "Ferment batter for minimum 8-12 hours",
          "Longer fermentation = more B12",
          "Eat idli/dosa 3-4 times per week",
          "Traditional stone-ground batter ferments better than instant mix"
        ],
        recipe: {
          title: "🫓 Properly Fermented Idli",
          ingredients: ["3 cups idli rice", "1 cup urad dal", "1 tsp fenugreek seeds", "Salt to taste"],
          steps: ["Soak rice and dal separately for 6 hours.", "Grind to smooth batter, mix together.", "Ferment in warm place for 12-14 hours.", "Steam in idli molds 10-12 min. B12-rich meal!"]
        }
      },
      {
        alt: "Homemade Dahi (Curd)",
        tag: "Vitamin • Daily Option",
        reason: "Homemade dahi made with active cultures contains some B12 from fermentation bacteria. More effective than store-bought pasteurized curd which kills bacteria.",
        tips: [
          "Use homemade dahi — not store-bought pasteurized",
          "Keep live culture active by saving 2 tbsp for next batch",
          "Eat 1 cup daily",
          "B12 content varies — not a sole source, combine with other fermented foods"
        ],
        recipe: null
      },
      {
        alt: "Tempeh",
        tag: "Vitamin • Highest Plant B12",
        reason: "Tempeh (fermented soybeans) is one of the highest plant-based sources of B12. Increasingly available in Indian cities. Easy to cook like paneer.",
        tips: null,
        recipe: {
          title: "🫘 Tempeh Stir Fry",
          ingredients: ["200g tempeh", "Soy sauce", "Garlic, ginger", "Indian spices", "Coconut oil"],
          steps: ["Cut tempeh into cubes.", "Marinate in soy sauce and spices 30 min.", "Pan fry in coconut oil until golden.", "Serve with rice or roti!"]
        }
      }
    ]
  },
  {
    id: 13,
    cat: "Nutrients",
    original: "Vitamin A",
    alternatives: [
      {
        alt: "Carrots (Gajar)",
        tag: "Vitamin • Easiest Source",
        reason: "One medium carrot provides 200% of daily Vitamin A need. Beta-carotene in carrots converts to Vitamin A in the body. Most affordable source in India.",
        tips: ["Eat with a little fat (coconut oil/ghee) — Vitamin A is fat-soluble", "Raw or cooked both work", "1 medium carrot daily is sufficient"],
        recipe: null
      },
      {
        alt: "Sweet Potato (Shakarkandi)",
        tag: "Vitamin • Highest Source",
        reason: "One medium sweet potato provides 400% of daily Vitamin A. Widely available across India, cheap and versatile.",
        tips: null,
        recipe: {
          title: "🍠 Roasted Sweet Potato",
          ingredients: ["2 medium sweet potatoes", "Coconut oil", "Cumin powder", "Salt and chilli"],
          steps: ["Cut sweet potatoes into cubes.", "Toss with coconut oil and spices.", "Roast at 200°C for 25 min.", "Eat with skin for extra fibre!"]
        }
      },
      {
        alt: "Moringa Leaves",
        tag: "Vitamin • Indian Superfood",
        reason: "Moringa leaves have 4x more Vitamin A than carrots. Grows across India, especially South and Central India. Also rich in iron and calcium.",
        tips: ["Add fresh leaves to dal or sabzi", "Dry and powder for year-round use", "1 tbsp moringa powder daily covers Vitamin A needs"],
        recipe: null
      }
    ]
  },
  {
    id: 14,
    cat: "Nutrients",
    original: "Vitamin C",
    alternatives: [
      {
        alt: "Amla (Indian Gooseberry)",
        tag: "Vitamin • 20x More Than Orange",
        reason: "Amla has the highest Vitamin C of any fruit — 600-700mg per 100g compared to orange's 50mg. India's own superfruit, available everywhere.",
        tips: ["Eat 1-2 fresh amla daily", "Amla powder in warm water every morning", "Vitamin C in amla is heat-stable unlike most fruits", "Excellent for immunity and skin"],
        recipe: null
      },
      {
        alt: "Guava (Amrud)",
        tag: "Vitamin • Cheapest Source",
        reason: "One guava provides 4x the daily Vitamin C requirement. One of the cheapest fruits in India and widely available year-round.",
        tips: ["Eat with skin — skin has more Vitamin C", "One guava daily is more than enough", "Available year-round across India"],
        recipe: null
      },
      {
        alt: "Fresh Lemon / Nimbu",
        tag: "Vitamin • Daily Kitchen Staple",
        reason: "Nimbu paani is one of the easiest ways to get daily Vitamin C. Already part of Indian diet — just make it a daily habit.",
        tips: ["Squeeze half lemon in warm water every morning", "Add to dal, sabzi, chaat daily", "Don't heat lemon — Vitamin C is destroyed by heat", "Nimbu paani with meals improves iron absorption too"],
        recipe: null
      }
    ]
  },
  {
    id: 15,
    cat: "Nutrients",
    original: "Vitamin E",
    alternatives: [
      {
        alt: "Sunflower Seeds",
        tag: "Vitamin • Richest Source",
        reason: "1 handful sunflower seeds = 100% daily Vitamin E. Cheapest and most available Vitamin E source in India.",
        tips: ["Eat 1 small handful daily", "Dry roast for better taste", "Add to salads, chaat or eat as snack", "Store in airtight container"],
        recipe: null
      },
      {
        alt: "Almonds (Badam)",
        tag: "Vitamin • Traditional Indian Choice",
        reason: "Already part of Indian diet. 8-10 soaked almonds daily provide significant Vitamin E. Also great for brain health.",
        tips: ["Soak overnight — better absorption", "Eat 8-10 daily in morning", "With skin has more nutrients", "Pairs well with dates"],
        recipe: null
      },
      {
        alt: "Sesame Seeds (Til)",
        tag: "Vitamin • Traditional + Versatile",
        reason: "Til is used in Indian cooking for centuries. Rich in Vitamin E, calcium and healthy fats. Til ki chikki is one of the healthiest Indian snacks.",
        tips: null,
        recipe: {
          title: "⬜ Til Chikki (Sesame Brittle)",
          ingredients: ["1 cup white sesame seeds", "1/2 cup jaggery", "1 tsp ghee alternative (coconut oil)"],
          steps: ["Dry roast sesame seeds until golden.", "Melt jaggery in pan until liquid.", "Mix in sesame seeds quickly.", "Spread on greased surface, cut while warm!"]
        }
      }
    ]
  },
  {
    id: 16,
    cat: "Nutrients",
    original: "Vitamin K",
    alternatives: [
      {
        alt: "Palak (Spinach)",
        tag: "Vitamin • Highest Source",
        reason: "Palak is the richest source of Vitamin K — 1 cup provides 1000% of daily requirement. Already widely eaten in India.",
        tips: ["1 cup palak daily is more than enough", "Cook lightly — don't overcook", "Palak sabzi, dal palak, palak paratha all work", "Eat with lemon for better iron absorption"],
        recipe: null
      },
      {
        alt: "Methi (Fenugreek Leaves)",
        tag: "Vitamin • Indian Kitchen Staple",
        reason: "Methi is extremely rich in Vitamin K and folate. Widely used in Indian cooking — methi paratha, methi dal, methi sabzi.",
        tips: ["Add fresh methi to dal or sabzi", "Methi paratha 2-3 times a week covers needs", "Dried kasuri methi also has some Vitamin K", "Excellent for blood sugar control too"],
        recipe: null
      }
    ]
  },

  // MINERALS
  {
    id: 17,
    cat: "Nutrients",
    original: "Calcium",
    alternatives: [
      {
        alt: "Ragi (Finger Millet)",
        tag: "Mineral • Highest Plant Calcium",
        reason: "Ragi has more calcium than milk — 344mg per 100g vs milk's 120mg. Traditional Indian grain, especially popular in Karnataka and Andhra.",
        tips: null,
        recipe: {
          title: "🌾 Ragi Mudde / Ragi Roti",
          ingredients: ["1 cup ragi flour", "Warm water", "Pinch of salt"],
          steps: ["Mix ragi flour with warm water.", "Knead into stiff dough.", "Make rotis or mudde (balls).", "Eat with dal — complete calcium-rich meal!"]
        }
      },
      {
        alt: "Sesame Seeds (Til)",
        tag: "Mineral • Concentrated Source",
        reason: "Til has 975mg calcium per 100g — nearly 3x more than milk. Just 2 tbsp of til daily covers significant calcium needs.",
        tips: ["Add to rotis, rice, salads", "Til chikki is an excellent daily snack", "White and black til both work", "Pair with Vitamin D (sunlight) for better absorption"],
        recipe: null
      },
      {
        alt: "Moringa Leaves",
        tag: "Mineral • Indian Superfood",
        reason: "Moringa has 4x more calcium than milk. Grows freely across India. One of the most calcium-rich plants available.",
        tips: ["Add fresh leaves to dal, sabzi, soup", "Moringa powder — 1 tbsp in warm water daily", "Drumstick vegetable (saijan ki phalli) also has calcium", "Widely available in South India markets"],
        recipe: null
      }
    ]
  },
  {
    id: 18,
    cat: "Nutrients",
    original: "Iron",
    alternatives: [
      {
        alt: "Moringa Leaves (Sahjan)",
        tag: "Mineral • Highest Plant Iron",
        reason: "Moringa has 3x more iron than spinach. Traditional remedy for anaemia in India. Also rich in Vitamin C which helps iron absorption.",
        tips: ["Add fresh leaves to dal daily", "Moringa powder — 1 tsp in warm water", "Combine with lemon/amla for better iron absorption", "Avoid with tea/coffee — reduces absorption"],
        recipe: null
      },
      {
        alt: "Horse Gram (Kulthi Dal)",
        tag: "Mineral • Most Iron-rich Dal",
        reason: "Horse gram has the highest iron content among all dals — 7mg per 100g. Traditional Indian dal, especially popular in South India and Maharashtra.",
        tips: null,
        recipe: {
          title: "🫘 Kulthi Dal (Horse Gram Dal)",
          ingredients: ["1 cup horse gram (soaked overnight)", "Onion, tomato, garlic", "Cumin, turmeric, coriander powder", "Coconut oil", "Lemon juice"],
          steps: ["Pressure cook soaked horse gram 5-6 whistles.", "Saute onion, tomato, garlic in coconut oil.", "Add spices, cook 2 min.", "Add dal, simmer 10 min. Add lemon before serving!"]
        }
      },
      {
        alt: "Sesame Seeds + Jaggery",
        tag: "Mineral • Traditional Combination",
        reason: "Both til and jaggery are rich in iron. This combination has been used in Indian tradition for centuries — til-gur ladoo is a traditional iron supplement!",
        tips: null,
        recipe: {
          title: "⬛ Til-Gur Ladoo",
          ingredients: ["1 cup black sesame seeds", "1/2 cup jaggery", "Cardamom powder"],
          steps: ["Dry roast black til until fragrant.", "Melt jaggery, mix in til and cardamom.", "Shape into small balls while warm.", "Eat 1-2 daily — traditional iron supplement!"]
        }
      }
    ]
  },
  {
    id: 19,
    cat: "Nutrients",
    original: "Magnesium",
    alternatives: [
      {
        alt: "Pumpkin Seeds (Kaddu ke Beej)",
        tag: "Mineral • Richest Source",
        reason: "Pumpkin seeds are the richest source of magnesium — 1 handful = 40% daily requirement. Also rich in zinc. Don't throw away kaddu ke beej!",
        tips: ["Dry roast and eat as snack", "Add to salads or chaat", "1 small handful daily", "Save seeds every time you cook kaddu"],
        recipe: null
      },
      {
        alt: "Dark Chocolate (70%+)",
        tag: "Mineral • Most Enjoyable Source",
        reason: "70%+ dark chocolate is surprisingly rich in magnesium — 2 squares = 15% daily requirement. Also rich in antioxidants and iron.",
        tips: ["Choose 70% or higher cocoa content", "2 squares (20g) daily is enough", "Lower sugar than milk chocolate", "Look for brands without palm oil"],
        recipe: null
      },
      {
        alt: "Banana",
        tag: "Mineral • Most Accessible",
        reason: "Most affordable and accessible magnesium source in India. 1 banana = 8% daily magnesium + potassium + Vitamin B6. Perfect daily snack.",
        tips: ["Eat 1-2 bananas daily", "Ripe bananas have more sugar — less ripe is better for blood sugar", "Pairs well with peanut butter for protein", "Great pre-workout snack"],
        recipe: null
      }
    ]
  },
  {
    id: 20,
    cat: "Nutrients",
    original: "Zinc",
    alternatives: [
      {
        alt: "Pumpkin Seeds",
        tag: "Mineral • Highest Plant Zinc",
        reason: "Pumpkin seeds are the richest plant source of zinc. 1 handful provides 20% daily zinc requirement. Also rich in magnesium and healthy fats.",
        tips: ["Dry roast and eat as daily snack", "Add to salads, dal or chaat", "Save every time you cook kaddu", "Combine with lemon — improves zinc absorption"],
        recipe: null
      },
      {
        alt: "Cashews (Kaju)",
        tag: "Mineral • Easy Daily Option",
        reason: "Cashews are rich in zinc, magnesium and copper. 10-12 cashews daily provide meaningful zinc. Already loved in Indian diet.",
        tips: ["Eat 10-12 cashews daily", "Raw or dry roasted — not fried", "Soak overnight for better absorption", "Avoid salted versions — too much sodium"],
        recipe: null
      },
      {
        alt: "Chickpeas (Chana)",
        tag: "Mineral • Most Affordable",
        reason: "Most affordable zinc source in India. 1 cup cooked chana = 2.5mg zinc (25% daily requirement). Also rich in protein, iron and folate.",
        tips: ["Soak and sprout for better zinc absorption", "Sprouting reduces phytic acid which blocks zinc", "Chana chaat, chana curry, hummus all work", "Combine with lemon for better absorption"],
        recipe: null
      }
    ]
  },
  {
    id: 21,
    cat: "Nutrients",
    original: "Folate / Folic Acid (B9)",
    alternatives: [
      {
        alt: "Methi Leaves (Fenugreek)",
        tag: "Vitamin • Richest Indian Source",
        reason: "Methi is one of the richest sources of folate in Indian cuisine. Critical for pregnant women and people with anaemia.",
        tips: ["Add fresh methi to dal, paratha, sabzi", "1 cup methi = 40% daily folate", "Especially important for women planning pregnancy", "Kasuri methi also has some folate"],
        recipe: null
      },
      {
        alt: "Palak (Spinach)",
        tag: "Vitamin • High Folate",
        reason: "Palak is extremely rich in folate — 1 cup provides 65% daily requirement. Also rich in iron and Vitamin K.",
        tips: null,
        recipe: {
          title: "🥬 Palak Dal (Folate + Iron Combo)",
          ingredients: ["1 cup moong dal", "2 cups fresh palak", "Garlic, cumin, turmeric", "Lemon juice", "Coconut oil"],
          steps: ["Cook moong dal until soft.", "Saute garlic and cumin in coconut oil.", "Add palak, cook 2 min until wilted.", "Mix into dal, add lemon. Iron + Folate meal!"]
        }
      },
      {
        alt: "Sprouted Moong / Chana",
        tag: "Vitamin • Sprouts Multiply Folate",
        reason: "Sprouting increases folate content by 3-4x compared to unsprouted dal. Easiest way to dramatically increase folate intake.",
        tips: ["Soak moong dal 8 hrs, drain, keep in muslin 24-36 hrs", "Rinse twice daily during sprouting", "Eat raw in chaat or lightly steamed", "Sprouted chana has even more folate than moong"],
        recipe: null
      }
    ]
  },
  {
    id: 22,
    cat: "Nutrients",
    original: "Potassium",
    alternatives: [
      {
        alt: "Coconut Water",
        tag: "Mineral • Natural Electrolyte",
        reason: "Fresh coconut water has more potassium than a banana and is the most natural electrolyte drink. Widely available across India.",
        tips: ["Drink fresh — not packaged (sugar added)", "1 coconut water daily after exercise", "Better than any sports drink", "Available year-round in most of India"],
        recipe: null
      },
      {
        alt: "Banana",
        tag: "Mineral • Most Accessible",
        reason: "Most recognized potassium source. 1 banana = 422mg potassium (9% daily need). Also gives magnesium and B6.",
        tips: ["1-2 bananas daily", "Especially important in summer to prevent cramps", "Great post-workout fruit", "Pairs with peanut butter for protein + potassium"],
        recipe: null
      },
      {
        alt: "Sweet Potato",
        tag: "Mineral • Highest Potassium",
        reason: "Sweet potato has more potassium than banana — 1 medium = 540mg. Also rich in Vitamin A and fibre.",
        tips: ["Roast or boil — both retain potassium", "Eat with skin for maximum nutrition", "Replace regular potato with sweet potato", "Available year-round across India"],
        recipe: null
      }
    ]
  },
  {
    id: 23,
    cat: "Nutrients",
    original: "Iodine",
    alternatives: [
      {
        alt: "Iodized Salt",
        tag: "Mineral • Easiest Solution",
        reason: "Simply using iodized salt in cooking solves iodine deficiency. Most Indian salt is iodized — just make sure yours is.",
        tips: ["Check label for 'iodized' or 'with iodine'", "Tata Salt, Catch Salt are commonly iodized", "Don't overheat iodized salt — iodine evaporates", "Add salt after cooking when possible"],
        recipe: null
      },
      {
        alt: "Seaweed / Kelp",
        tag: "Mineral • Richest Natural Source",
        reason: "Seaweed is the richest natural source of iodine. Increasingly available in Indian health stores and online.",
        tips: ["Available as nori sheets, kelp powder online", "1 small sheet of nori weekly is enough", "Don't overdo — too much iodine also harmful", "Add kelp powder to soups or smoothies"],
        recipe: null
      }
    ]
  },
  {
    id: 24,
    cat: "Nutrients",
    original: "Selenium",
    alternatives: [
      {
        alt: "Brazil Nuts",
        tag: "Mineral • One Nut = Full Daily Need",
        reason: "Just 1-2 Brazil nuts provides the entire daily selenium requirement. Most concentrated food source of selenium.",
        tips: ["Eat only 1-2 daily — more can cause toxicity", "Available in dry fruit shops in Indian cities", "Store in fridge to prevent rancidity", "Best eaten raw"],
        recipe: null
      },
      {
        alt: "Sunflower Seeds",
        tag: "Mineral • Affordable Source",
        reason: "Sunflower seeds are rich in selenium and Vitamin E. Widely available and affordable across India.",
        tips: ["1 small handful daily", "Dry roast for better taste", "Available in most kirana stores now", "Also rich in Vitamin E — double benefit"],
        recipe: null
      }
    ]
  },
  {
    id: 25,
    cat: "Nutrients",
    original: "Vitamin B1 (Thiamine)",
    alternatives: [
      {
        alt: "Brown Rice / Hand-pounded Rice",
        tag: "Vitamin • Easiest Switch",
        reason: "White rice has thiamine removed during polishing. Simply switching to brown or hand-pounded rice restores B1. This is why B1 deficiency (beriberi) increased when white rice became common.",
        tips: ["Switch white rice to brown or hand-pounded rice", "Hand-pounded rice available in South Indian stores", "Also higher in fibre and minerals", "Soaking brown rice 30 min before cooking helps"],
        recipe: null
      },
      {
        alt: "Sunflower Seeds + Peanuts",
        tag: "Vitamin • Snack Source",
        reason: "Both sunflower seeds and peanuts are excellent sources of B1. Easy daily snack that covers B1 needs.",
        tips: ["A handful of peanuts daily provides good B1", "Mix with sunflower seeds for variety", "Dry roasted, not fried in oil", "Also rich in other B vitamins"],
        recipe: null
      }
    ]
  },
  {
    id: 26,
    cat: "Nutrients",
    original: "Vitamin B6",
    alternatives: [
      {
        alt: "Banana",
        tag: "Vitamin • Most Accessible",
        reason: "Bananas are one of the best sources of B6 — 1 banana provides 25% of daily B6. Already widely eaten in India.",
        tips: ["1-2 bananas daily covers significant B6", "Less ripe bananas have slightly more B6", "Also gives potassium and magnesium", "Best pre or post workout"],
        recipe: null
      },
      {
        alt: "Chickpeas (Chana)",
        tag: "Vitamin • Highest B6 Food",
        reason: "Chickpeas are one of the richest sources of B6 — 1 cup cooked provides 55% daily B6 need. Also rich in protein, zinc and folate.",
        tips: ["1 cup chana daily covers B6 needs", "Sprouted chana has even more B6", "Chana curry, chaat, hummus all work", "Combine with brown rice for complete nutrition"],
        recipe: null
      }
    ]
  },
  {
    id: 27,
    cat: "Nutrients",
    original: "Biotin (Vitamin B7)",
    alternatives: [
      {
        alt: "Sweet Potato",
        tag: "Vitamin • Richest Plant Source",
        reason: "Sweet potato is the richest plant source of biotin. Important for hair, skin and nail health — which is why most biotin supplements are marketed for hair growth.",
        tips: ["1 medium sweet potato daily covers biotin needs", "Roast or boil — both retain biotin", "Eat with skin for maximum nutrition", "Also rich in Vitamin A and potassium"],
        recipe: null
      },
      {
        alt: "Peanuts (Mungfali)",
        tag: "Vitamin • Cheapest Source",
        reason: "Peanuts are excellent source of biotin — affordable and widely available across India. Also rich in protein and healthy fats.",
        tips: ["1 small handful peanuts daily", "Roasted or raw both work", "Peanut butter also works", "Most affordable biotin source in India"],
        recipe: null
      }
    ]
  },
  {
    id: 28,
    cat: "Nutrients",
    original: "Vitamin B2 (Riboflavin)",
    alternatives: [
      {
        alt: "Mushrooms",
        tag: "Vitamin • Best Plant Source",
        reason: "Mushrooms are the best plant source of B2 — 1 cup cooked = 25% daily requirement. Also rich in B12 (when sun-bathed) and Vitamin D.",
        tips: ["Button, oyster or shiitake all work", "Cook lightly — don't overcook", "Add to dal, sabzi or stir fry", "Available in most Indian cities now"],
        recipe: null
      },
      {
        alt: "Almonds (Badam)",
        tag: "Vitamin • Traditional Source",
        reason: "Almonds are a good source of B2. Already part of Indian diet. 10-12 almonds provide meaningful B2 along with Vitamin E and calcium.",
        tips: ["Soak overnight for better absorption", "Eat 10-12 daily in morning", "Also rich in Vitamin E and calcium", "With skin has more nutrients"],
        recipe: null
      }
    ]
  },
  {
    id: 29,
    cat: "Nutrients",
    original: "Vitamin B3 (Niacin)",
    alternatives: [
      {
        alt: "Peanuts (Mungfali)",
        tag: "Vitamin • Richest Plant Source",
        reason: "Peanuts are the richest plant source of niacin (B3). Widely available and affordable across India. 1 small handful covers 25% daily B3.",
        tips: ["Eat daily as snack", "Dry roasted without oil", "Peanut butter also works", "Also rich in protein and healthy fats"],
        recipe: null
      },
      {
        alt: "Brown Rice",
        tag: "Vitamin • Staple Switch",
        reason: "Brown rice has significantly more B3 than white rice. Simple switch from white to brown rice dramatically improves B3 intake.",
        tips: ["Switch white rice to brown rice", "Also higher in B1, fibre and minerals", "Soak 30 min before cooking", "Mix with white rice initially to adjust taste"],
        recipe: null
      }
    ]
  },
  {
    id: 30,
    cat: "Nutrients",
    original: "Vitamin B5 (Pantothenic Acid)",
    alternatives: [
      {
        alt: "Mushrooms",
        tag: "Vitamin • Richest Source",
        reason: "Mushrooms are the richest plant source of B5 — 1 cup provides 35% daily need. B5 deficiency is rare when eating a varied diet.",
        tips: ["Add mushrooms to dal or sabzi", "Any variety works", "Cook lightly", "Also gives B2 and Vitamin D"],
        recipe: null
      },
      {
        alt: "Avocado / Sweet Potato",
        tag: "Vitamin • Good Sources",
        reason: "Both avocado and sweet potato are good sources of B5. Sweet potato is more affordable and widely available in India.",
        tips: ["1 medium sweet potato daily", "Avocado available in cities", "B5 deficiency very rare — varied diet covers it", "Focus more on B12, D and iron"],
        recipe: null
      }
    ]
  },
  {
    id: 31,
    cat: "Nutrients",
    original: "Copper Supplement",
    alternatives: [
      {
        alt: "Sesame Seeds + Cashews",
        tag: "Mineral • Best Indian Sources",
        reason: "Both til and kaju are excellent sources of copper. Copper deficiency is rare in India — these common foods cover daily needs.",
        tips: ["Til in daily cooking covers copper needs", "10-12 cashews daily", "Dark chocolate also rich in copper", "Copper deficiency very rare — don't over-supplement"],
        recipe: null
      }
    ]
  },
  {
    id: 32,
    cat: "Nutrients",
    original: "Manganese",
    alternatives: [
      {
        alt: "Brown Rice + Chickpeas",
        tag: "Mineral • Staple Sources",
        reason: "Brown rice and chickpeas are excellent manganese sources. Manganese deficiency is extremely rare when eating a normal Indian diet.",
        tips: ["Brown rice daily covers manganese needs", "Chana also rich in manganese", "Deficiency very rare — no need to supplement if eating varied diet", "Also found in nuts, seeds and whole grains"],
        recipe: null
      }
    ]
  },
  {
    id: 33,
    cat: "Nutrients",
    original: "Chromium",
    alternatives: [
      {
        alt: "Whole Grains + Broccoli",
        tag: "Mineral • Food First",
        reason: "Chromium is found in whole grains, broccoli and green beans. Important for blood sugar regulation. Rarely deficient in people eating whole foods.",
        tips: ["Switch to whole grains — covers chromium needs", "Broccoli available in Indian cities", "Chromium deficiency rare with whole food diet", "Focus on avoiding refined foods rather than supplementing"],
        recipe: null
      }
    ]
  }
]