// src/data/menu-data.ts

export type MenuItem = {
  id: number;
  name: string;
  category: string; // The main tab filter (Starters, Mains, etc.)
  subCategory: string; // Your specific sub-headers (Antipasti, Handhelds)
  price: number;
  description: string;
  image: string;
};

export const MENU_ITEMS: MenuItem[] = [
  // --- FROM CUCINA RUSTICA ---
  {
    id: 401,
    name: "Grilled Halloumi Caprese",
    category: "Starters",
    subCategory: "Antipasti",
    description:
      "Seared Halloumi cheese served with heirloom tomatoes and olives.",
    price: 11000,
    image: "/dishes/food_4.png",
  },
  {
    id: 402,
    name: "Radicchio & Walnut Salad",
    category: "Starters",
    subCategory: "Antipasti",
    description:
      "Bitter greens balanced with sweet walnuts and gorgonzola cheese.",
    price: 12000,
    image: "/dishes/food_3.png",
  },
  {
    id: 501,
    name: "Tuscan Creamy Chicken",
    category: "Mains",
    subCategory: "Primi Piatti",
    description:
      "Linguine in a sun-dried tomato cream sauce with spinach and grilled chicken.",
    price: 19000,
    image: "/dishes/food_28.png",
  },
  {
    id: 504,
    name: "Burrata & Prosciutto",
    category: "Mains",
    subCategory: "Primi Piatti",
    description:
      "Spaghetti nest topped with a whole fresh burrata cheese and cured ham.",
    price: 22000,
    image: "/dishes/food_29.png",
  },
  {
    id: 601,
    name: "Strawberry Jelly Cheesecake",
    category: "Desserts",
    subCategory: "Dolce",
    description: "New York style cheesecake with a strawberry gelatin layer.",
    price: 8500,
    image: "/dishes/food_18.png",
  },

  // --- FROM DAILY GRIND ---
  {
    id: 701,
    name: "Heirloom Caesar Salad",
    category: "Starters",
    subCategory: "Fresh Greens",
    description:
      "Romaine hearts, artisan croutons, and yellow cherry tomatoes with caesar dressing.",
    price: 13000,
    image: "/dishes/food_23.png",
  },
  {
    id: 801,
    name: "Roast Beef Deluxe",
    category: "Mains",
    subCategory: "Sandwiches",
    description:
      "Thinly sliced roast beef with horseradish mayo on toasted sourdough.",
    price: 15000,
    image: "/dishes/food_13.png",
  },
  {
    id: 903,
    name: "The Sprinkle Bowl",
    category: "Desserts",
    subCategory: "Sweets",
    description:
      "Vanilla ice cream served in an edible white chocolate and sprinkle bowl.",
    price: 7500,
    image: "/dishes/food_12.png",
  },

  // --- FROM STREET EATS ---
  {
    id: 1001,
    name: "The Saigon Banh Mi",
    category: "Mains",
    subCategory: "Handhelds",
    description:
      "Crusty baguette with pork pâté, cold cuts, pickled daikon, and cilantro.",
    price: 9500,
    image: "/dishes/food_16.png",
  },
  {
    id: 1002,
    name: "Bombay Chicken Roll",
    category: "Starters",
    subCategory: "Handhelds",
    description:
      "Roasted chicken and onions wrapped in a flaky paratha flatbread.",
    price: 8000,
    image: "/dishes/food_6.png",
  },
  {
    id: 1102,
    name: "Spaghetti Pomodoro",
    category: "Mains",
    subCategory: "Comfort Bowls",
    description:
      "Classic spaghetti noodles tossed in a simple, fresh tomato sauce.",
    price: 9000,
    image: "/dishes/food_30.png",
  },

  // --- FROM URBAN BISTRO ---
  {
    id: 102,
    name: "Asparagus & Cured Yolk",
    category: "Starters",
    subCategory: "Bistro Starters",
    description:
      "Fresh green asparagus with salt-cured egg yolk and vinaigrette.",
    price: 14500,
    image: "/dishes/food_1.png",
  },
  {
    id: 201,
    name: "Hanoi Pork Noodle Soup",
    category: "Mains",
    subCategory: "Bistro Mains",
    description:
      "Traditional broth with rice vermicelli, tender pork, and fresh herbs.",
    price: 18000,
    image: "/dishes/food_32.png",
  },
  {
    id: 301,
    name: "Mango Passion Cheesecake",
    category: "Desserts",
    subCategory: "Bistro Desserts",
    description: "Creamy cheesecake topped with a tropical mango glaze.",
    price: 9000,
    image: "/dishes/food_20.png",
  },
];

// Automatically generate the Categories list for your Tabs
export const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];
