export const PLAN_LIST = [
  {
    id: "master",
    title: "Master Layout",
    imageSrc: "master-layout",
  },
  {
    id: "a",
    title: "Plan A",
    size: "411 Sq ft.",
    street_plot: [
      ["NCA", "12"],
      ["NCA", "14"],
      ["NCA", "15"],
      ["G19", "12"],
      ["G19", "14"],
      ["G21", "18"],
      ["G21", "19"],
      ["G21", "16"],
    ],
    imageSrc: ["1", "2"],
    isoSrc:
      "https://www.vectary.com/viewer/v1/?model=a4e2a8d8-b8fe-458f-b3f6-997e8f7c9ad4&env=studio3",
  },
  {
    id: "b",
    title: "Plan B",
    size: "380 Sq ft.",
    street_plot: [["B12", "5"]],
    imageSrc: ["1", "2"],
    isoSrc: `${process.env.PUBLIC_URL}/images/iso/380.png`,
  },

  {
    id: "c",
    title: "Plan C",
    size: "392 Sq ft.",
    street_plot: [["G17", "19"]],
    imageSrc: ["1", "2", "3", "4"],
    isoSrc: `${process.env.PUBLIC_URL}/images/iso/392.png`,
  },
  {
    id: "d",
    title: "Plan D",
    size: "418 Sq ft.",
    street_plot: [["G16", "21"]],
    imageSrc: ["1", "2"],
    isoSrc:
      "https://www.vectary.com/viewer/v1/?model=438c708c-f343-4adf-8c72-2e36d2cdc791&env=studio3",
  },
  {
    id: "e",
    title: "Plan E",
    size: "323 Sq ft.",
    street_plot: [["G8", "8"]],
    imageSrc: ["1", "2"],
    isoSrc:
      "https://www.vectary.com/viewer/v1/?model=d655aad7-09bc-4fd4-9342-907634039007&env=studio3",
  },
  {
    id: "f",
    title: "Plan F",
    size: "503 Sq ft.",
    street_plot: [["SA", "IG"]],
    imageSrc: ["1"],
    isoSrc:
      "https://www.vectary.com/viewer/v1/?model=86399949-a7b2-46e3-bd7b-e565278d8519&env=studio3",
  },
];

export const BUTTONS = [
  { text: "ELEVATION", id: "elevation" },
  { text: "ISO", id: "iso" },
];
