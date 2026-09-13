export const DAILY_LIFE_QUIZZES = [
  {
    id: "dl-math-1",
    subjectId: "maths",
    subjectName: "Mathematics",
    title: "Supermarket & Grocery Billing",
    tagline: "Fractions, Decimals & Money Math in Daily Shopping",
    iconName: "ShoppingCart",
    badge: "Everyday Math",
    realWorldScenario: "Calculating change, discounts, and weights while shopping at the local grocery market.",
    questionsCount: 4,
    estimatedMinutes: 6,
    difficulty: "Practical",
    lifeSkill: "Smart Budgeting & Quick Mental Math",
    questions: [
      {
        id: 1,
        scenario: "At the fruit vendor, apples cost ₹120 per kg. Your mother asks you to buy 3/4 kg of apples. How much money should you pay the vendor?",
        question: "How much will 3/4 kg of apples cost at ₹120/kg?",
        options: ["₹80", "₹90", "₹100", "₹75"],
        correct: 1,
        realLifeExplanation: "3/4 of ₹120 = (120 ÷ 4) × 3 = 30 × 3 = ₹90. When shopping, divide by 4 for quarter-kilos!",
        takeaway: "Knowing fractions helps verify bills instantly at grocery stalls."
      },
      {
        id: 2,
        scenario: "You purchase school notebooks worth ₹235.50 and give the shopkeeper a ₹500 currency note.",
        question: "How much exact balance change should you receive back?",
        options: ["₹264.50", "₹265.50", "₹274.50", "₹264.00"],
        correct: 0,
        realLifeExplanation: "₹500.00 - ₹235.50 = ₹264.50. Always double-check decimal coins/change!",
        takeaway: "Decimal subtraction prevents you from leaving money behind."
      },
      {
        id: 3,
        scenario: "A chocolate bar has 12 equal squares. You share 4 squares with your sister and 3 squares with your friend.",
        question: "What fraction of the chocolate bar remains for you?",
        options: ["5/12", "7/12", "1/2", "1/4"],
        correct: 0,
        realLifeExplanation: "Total eaten = 4 + 3 = 7 squares. Remaining = 12 - 7 = 5 squares out of 12 (5/12).",
        takeaway: "Fraction portions help share treats and snacks fairly with friends."
      },
      {
        id: 4,
        scenario: "A milk pouch contains 500 ml of milk. A recipe for family kheer requires 2.5 liters of milk.",
        question: "How many 500 ml pouches do you need to open?",
        options: ["4 pouches", "5 pouches", "6 pouches", "3 pouches"],
        correct: 1,
        realLifeExplanation: "1 liter = 1000 ml (2 pouches of 500ml). For 2.5 liters = 2.5 × 2 = 5 pouches.",
        takeaway: "Unit conversions between liters and milliliters happen daily in every kitchen."
      }
    ]
  },
  {
    id: "dl-sci-1",
    subjectId: "science",
    subjectName: "Science & EVS",
    title: "Kitchen Science & Home Machines",
    tagline: "States of Matter, Heat & Simple Machines in Your Home",
    iconName: "Utensils",
    badge: "Home Physics & Chemistry",
    realWorldScenario: "Why ice floats, how pressure cookers work, and identifying simple machines used in daily chores.",
    questionsCount: 4,
    estimatedMinutes: 6,
    difficulty: "Observation",
    lifeSkill: "Scientific Thinking in Household Life",
    questions: [
      {
        id: 1,
        scenario: "When you drop an ice cube into a tall glass of lemonade on a hot summer afternoon, the ice floats on top instead of sinking to the bottom.",
        question: "Why does solid ice float on liquid water?",
        options: [
          "Ice is heavier than water",
          "Ice is less dense than liquid water due to trapped molecular pockets",
          "The lemonade repels cold objects",
          "Ice contains carbon dioxide gas"
        ],
        correct: 1,
        realLifeExplanation: "When water freezes into ice, water molecules form a crystalline structure with empty spaces, making ice less dense than liquid water!",
        takeaway: "This unique property of water keeps lakes from freezing solid from bottom to top in winter, saving aquatic fish."
      },
      {
        id: 2,
        scenario: "Your father uses a pair of scissors to cut gift wrap, and you use a bottle opener to uncap a soda bottle.",
        question: "Which simple machine are scissors and bottle openers both examples of?",
        options: ["Pulleys", "Levers", "Inclined planes", "Screws"],
        correct: 1,
        realLifeExplanation: "Scissors are double Class-1 levers (pivot in middle) and bottle openers are Class-2 levers. Both reduce the physical effort needed.",
        takeaway: "Almost all tools in your toolbox and kitchen drawers are clever levers."
      },
      {
        id: 3,
        scenario: "When water boils in a kettle with the lid closed, you see tiny water droplets forming under the cold steel lid.",
        question: "Which natural scientific process causes steam to turn back into water droplets?",
        options: ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        correct: 1,
        realLifeExplanation: "When hot water vapor (gas) touches a cooler surface, it cools down and turns back into liquid droplets (condensation)—the same way clouds make rain!",
        takeaway: "Condensation explains morning dew on grass and droplets on cold juice bottles."
      },
      {
        id: 4,
        scenario: "Why are handles of cooking frying pans made of bakelite plastic or wood instead of bare steel or aluminum?",
        question: "Why are pan handles made of wood or plastic?",
        options: [
          "Plastic makes the pan look colorful",
          "Wood and plastic are bad conductors of heat (insulators), preventing burns",
          "Plastic absorbs food flavors",
          "Metal handles make the food cook too fast"
        ],
        correct: 1,
        realLifeExplanation: "Metals are good conductors of heat, while wood and plastic are thermal insulators that keep handles safe to touch while cooking.",
        takeaway: "Understanding conductors and insulators prevents kitchen burns and electrical accidents."
      }
    ]
  },
  {
    id: "dl-sst-1",
    subjectId: "sst",
    subjectName: "Social Studies & Civics",
    title: "Road Safety, Maps & Clean Communities",
    tagline: "Directions, Public Rules & Environmental Citizenship",
    iconName: "Navigation",
    badge: "Civic Life",
    realWorldScenario: "Using maps on a family trip, obeying traffic rules, and sorting domestic garbage responsibly.",
    questionsCount: 4,
    estimatedMinutes: 6,
    difficulty: "Practical",
    lifeSkill: "Responsible Citizenship & Navigation",
    questions: [
      {
        id: 1,
        scenario: "You are standing outside in an open playground early in the morning facing the rising Sun. Your friend asks you where South is located.",
        question: "If you face the rising Sun (East), which direction is directly to your right hand?",
        options: ["North", "South", "West", "North-East"],
        correct: 1,
        realLifeExplanation: "Facing the rising Sun (East): your back is to the West, your left hand points North, and your right hand points South!",
        takeaway: "You can always find cardinal directions anywhere in the world using the morning Sun."
      },
      {
        id: 2,
        scenario: "At home, your municipality provides two separate waste bins: a Green bin and a Blue bin.",
        question: "Where should leftover vegetable peels, eggshells, and fruit skins be deposited?",
        options: [
          "In the Blue bin (Dry non-biodegradable waste)",
          "In the Green bin (Wet biodegradable compostable waste)",
          "In the paper bin",
          "Thrown onto the street"
        ],
        correct: 1,
        realLifeExplanation: "Green bins are strictly for organic wet waste (fruit peels, food scraps) that decompose into garden compost. Blue bins are for dry recyclables.",
        takeaway: "Proper domestic waste segregation reduces landfill toxicity and protects stray animals."
      },
      {
        id: 3,
        scenario: "While walking to school, you reach a busy intersection without a footbridge. You want to cross safely.",
        question: "Where is the legally safe designated path for pedestrians to cross the road?",
        options: ["Anywhere between parked cars", "At the white Zebra Crossing", "Behind turning buses", "Running diagonally"],
        correct: 1,
        realLifeExplanation: "Zebra crossings are painted white strips where vehicles are mandated to yield to pedestrians.",
        takeaway: "Always make eye contact with approaching drivers before stepping onto a pedestrian zebra crossing."
      },
      {
        id: 4,
        scenario: "When looking at a road trip route on a mobile GPS navigation map, you notice a scale that says '1 cm = 10 km'.",
        question: "If the map route distance measures 4 cm, what is the actual road distance?",
        options: ["14 km", "40 km", "400 km", "4 km"],
        correct: 1,
        realLifeExplanation: "4 cm × 10 km/cm = 40 km. Map scales allow huge geographic distances to fit on phone screens!",
        takeaway: "Map scales help estimate travel times and fuel stops on family road trips."
      }
    ]
  },
  {
    id: "dl-eng-1",
    subjectId: "english",
    subjectName: "English in Real Life",
    title: "Everyday Signs, Labels & Polite Communication",
    tagline: "Reading Expiry Dates, Warning Signs & Writing Messages",
    iconName: "MessageSquare",
    badge: "Daily Communication",
    realWorldScenario: "Understanding food packaging warnings, sending respectful messages, and avoiding common confusions.",
    questionsCount: 4,
    estimatedMinutes: 5,
    difficulty: "Everyday Language",
    lifeSkill: "Clear, Polite & Safe Everyday Expression",
    questions: [
      {
        id: 1,
        scenario: "You pick up a carton of fruit yogurt from the refrigerator. You notice the stamp: 'BEST BEFORE: 05/09/2026'. Today's date is 13/09/2026.",
        question: "What is the safest action regarding the yogurt?",
        options: [
          "Drink it quickly before anyone notices",
          "Do not consume it, as it has passed its recommended freshness & safety date",
          "Put it in the freezer to reset the date",
          "Add sugar and eat it"
        ],
        correct: 1,
        realLifeExplanation: "'Best Before' or 'Expiry Date' warns consumers that bacterial spoilage or nutrient loss occurs after the stamped date.",
        takeaway: "Always check manufacturing and expiry labels on packaged foods and medicines."
      },
      {
        id: 2,
        scenario: "You accidentally step on someone's foot in a crowded school bus aisle.",
        question: "Which phrase is the most courteous and mature way to respond immediately?",
        options: [
          "\"You were standing in my way!\"",
          "\"I am so sorry, are you alright?\"",
          "\"Whatever.\"",
          "Remain completely silent and look away"
        ],
        correct: 1,
        realLifeExplanation: "Taking immediate ownership with a sincere apology defuses tension and shows civic respect.",
        takeaway: "Polite speech builds positive relationships everywhere in public life."
      },
      {
        id: 3,
        scenario: "You want to text your mother: 'The boys left ______ water bottles at the playground.'",
        question: "Which word correctly fills the blank to show possession by the boys?",
        options: ["there", "their", "they're", "thier"],
        correct: 1,
        realLifeExplanation: "'Their' shows ownership (belonging to them). 'There' refers to place, and 'They're' is short for 'they are'.",
        takeaway: "Using the right homophone keeps everyday messages clear and free of confusion."
      },
      {
        id: 4,
        scenario: "On a bottle of floor disinfectant or cleaning spray, you see a label with a skull and crossed bones symbol.",
        question: "What does this universal warning symbol alert you to?",
        options: [
          "The liquid is delicious and sweet",
          "The substance is poisonous / toxic and must not be swallowed or sprayed near eyes",
          "The bottle is made of ancient bone material",
          "It is a Halloween decoration"
        ],
        correct: 1,
        realLifeExplanation: "The skull and crossbones is the international hazard pictogram for poison and acute toxicity.",
        takeaway: "Recognizing hazard symbols at home keeps you and younger siblings safe from hazardous chemicals."
      }
    ]
  }
];
