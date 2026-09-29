/* Variables Section Parte I */

// MessageByLanguageSection
export const messages = [
  {
    id: "it",
    label: "Italiano",
    body: "Benvenuto",
    color: "success",
  },
  {
    id: "en",
    label: "Inglese",
    body: "Welcome",
    color: "info",
  },
  {
    id: "fr",
    label: "Francese",
    body: "Accueillir",
    color: "secondary",
  },
  {
    id: "de",
    label: "Tedesco",
    body: "Willkommen",
    color: "warning",
  },
  {
    id: "es",
    label: "Spagnolo",
    body: "Bienvenido",
    color: "danger",
  },
];

//ToDoListSection
export const initialActivities = [
  { id: 0, toDo: "Homework", completed: false },
  { id: 2, toDo: "Cooking", completed: false },
  { id: 3, toDo: "Shopping", completed: false },
  { id: 4, toDo: "Play Videogames", completed: false },
];

/* Variables Section Parte II */

//FilterByNameSection
export const names = ["mariarita", "antonio", "maria", "angelica"];

//TextStyleByCheckbox
export const styleOptions = [
  {
    label: "Grassetto",
    font: "fw-bold",
    isActive: false,
  },

  {
    label: "Sottolineato",
    font: "text-decoration-underline",
    isActive: false,
  },

  {
    label: "Corsivo",
    font: "fst-italic",
    isActive: false,
  },
  {
    label: "Evidenziato",
    font: "bg-warning",
    isActive: false,
  },
];

//FontSizeByRadioSection
export const fontSizeOptions = [
  {
    label: "Font 1",
    fontSize: 1,
  },
  {
    label: "Font 2",
    fontSize: 2,
  },
  {
    label: "Font 3",
    fontSize: 3,
  },
  {
    label: "Font 4",
    fontSize: 4,
  },
  {
    label: "Font 5",
    fontSize: 5,
  },
  {
    label: "Font 6",
    fontSize: 6,
  },
];

//ConvertPriceSection
export const prices = [
  {
    label: "euro",
    symbol: "€",
    conversionRate: 1,
  },
  {
    label: "sterline",
    symbol: "£",
    conversionRate: 0.86,
  },
  {
    label: "dollari",
    symbol: "$",
    conversionRate: 1.14,
  },
];
