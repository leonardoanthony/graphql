const games = [
  { id: "1", title: "The Last Adventure", platform: ["PC", "Xbox"] },
  { id: "2", title: "Sky Realms", platform: ["PS5", "PC"] },
  { id: "3", title: "Pixel Quest", platform: ["Switch"] },
  { id: "4", title: "Battle Arena", platform: ["PC"] },
  { id: "5", title: "Mystic Legends", platform: ["PS5", "Xbox"] },
  { id: "6", title: "Dragon Slayer", platform: ["PC", "Switch"] },
  { id: "7", title: "Cyber Rush", platform: ["PC"] },
  { id: "8", title: "Ocean Odyssey", platform: ["PS5"] },
  { id: "9", title: "Space Runner", platform: ["Xbox", "Switch"] },
  { id: "10", title: "Hero’s Call", platform: ["PC", "PS5"] },
];

const reviews = [
  { id: "1", rating: 5, content: "Amazing game with stunning visuals!" },
  { id: "2", rating: 3, content: "Good, but could use more levels." },
  { id: "3", rating: 4, content: "Solid gameplay and story." },
  { id: "4", rating: 2, content: "Not as expected, too many bugs." },
  { id: "5", rating: 5, content: "A masterpiece, loved every minute!" },
  { id: "6", rating: 1, content: "Terrible controls and crashes often." },
  { id: "7", rating: 4, content: "Fun multiplayer mode." },
  { id: "8", rating: 3, content: "Decent graphics, but repetitive." },
  { id: "9", rating: 2, content: "Story is weak and characters boring." },
  { id: "10", rating: 5, content: "Best game of the year!" },
];

const authors = [
  { id: "1", name: "Alice Smith", verified: true },
  { id: "2", name: "Bob Johnson", verified: false },
  { id: "3", name: "Charlie Lee", verified: true },
];

export const db = {
    authors,
    games,
    reviews
}