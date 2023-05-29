export enum AutomationKeys {
  NATIONAL_HISTORY_MUSEUM = "national-history-museum",
  TOO_GOOD_TO_GO = "too-good-to-go",
  SKY_GARDEN_FREE_VISIT = "sky-garden-free-visit",
}
// Add automation keys here

export const AutomationList = [
  {
    key: AutomationKeys.NATIONAL_HISTORY_MUSEUM,
    title: "National Histiory Museum",
    content: "Be ready when new visits are available",
  },
  {
    key: AutomationKeys.TOO_GOOD_TO_GO,
    title: "Too Good To Go",
    content: "Check whenever your favourite shop has leftover food",
  },
  {
    key: AutomationKeys.SKY_GARDEN_FREE_VISIT,
    title: "Sky garden Free Visit",
    content: "Get notified when your favourite skyscraper is available",
  },
  // { key: 3, title: "Card 3", content: "This is the content for Card 3." },
  // { key: 4, title: "Card 4", content: "This is the content for Card 4." },
  // { key: 5, title: "Card 5", content: "This is the content for Card 5." },
  // { key: 6, title: "Card 6", content: "This is the content for Card 6." },
  // Add more card data as needed
];
