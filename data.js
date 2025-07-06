const games = [
  { id: "1", title: "The Last Adventure", platform: ["PC", "Xbox"] },
  { id: "2", title: "Sky Realms", platform: ["PS5", "PC"] },
  { id: "3", title: "Pixel Quest", platform: ["Switch"] },
  { id: "4", title: "Battle Arena", platform: ["PC"] },
];

const authors = [
  { id: "1", name: "Alice Smith", verified: true },
  { id: "2", name: "Bob Johnson", verified: false },
  { id: "3", name: "Charlie Lee", verified: true },
];

const reviews = [
  { id: "1", rating: 5, content: "Amazing game with stunning visuals!", author_id: "1", game_id: "1", },
  { id: "2", rating: 3, content: "Good, but could use more levels.", author_id: "2", game_id: "2", },
  { id: "3", rating: 4, content: "Solid gameplay and story.", author_id: "3", game_id: "3", },
  { id: "4", rating: 2, content: "Not as expected, too many bugs.", author_id: "1", game_id: "4", },
  { id: "5", rating: 5, content: "A masterpiece, loved every minute!", author_id: "2", game_id: "1", },
  { id: "6", rating: 1, content: "Terrible controls and crashes often.", author_id: "3", game_id: "2", },
  { id: "7", rating: 4, content: "Fun multiplayer mode.", author_id: "1", game_id: "3", },
  { id: "8", rating: 3, content: "Decent graphics, but repetitive.", author_id: "2", game_id: "4", },
  { id: "9", rating: 2, content: "Story is weak and characters boring.", author_id: "3", game_id: "2", },
  { id: "10", rating: 5, content: "Best game of the year!", author_id: "1", game_id: "3", },
];


export const db = {
    authors,
    games,
    reviews
}