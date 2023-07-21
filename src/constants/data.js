import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const desserts = [
  {
    title: "Tropical Coconut Pie",
    price: "$9.90",
    tags: "Pineapple| Coconut | WHipped Cream | Marshmallow",
  },
  {
    title: "Sunny Citrus Cheesecake",
    price: "$7.89",
    tags: "Orange| Lemon | Slice of lime",
  },
  {
    title: "Mango Marshmallow",
    price: "$11",
    tags: "Mango| Coconut | Marshmallow",
  },
  {
    title: "Hawaiian Dream Cookies",
    price: "$12",
    tags: "Pineapple| Lemon | Icing sugar",
  },
  {
    title: "Tropical Cranberry Cobbler",
    price: "$10.50",
    tags: "Cranberry| Coconut | Pineapple | Orange",
  },
];

const meals = [
  {
    title: "Avocado and Shrimp",
    price: "$45",
    tags: "Homemade Guacamole| Grilled Shrimp | Onions| Red pepper",
  },
  {
    title: "Filet Mignon",
    price: "$70",
    tags: "Sterling Silver Beef | aged 21 days | barbecue sauce",
  },
  {
    title: "Salmon Filet",
    price: "$60",
    tags: "Atlantic Salmon | White butter sauce | Jasmine Rice",
  },
  {
    title: "Fish N Ships",
    price: "$35",
    tags: "Savage Cod | Sliced pickles | Fries",
  },
  {
    title: "Baby Back Ribs",
    price: "$50",
    tags: "Ribs | Homemade Barbecue Sauce | Fries",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, desserts, meals, awards };
