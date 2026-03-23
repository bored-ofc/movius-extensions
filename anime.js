extensionManager.register({
  name: "Anime Demo",

  async getMovies() {
    return [
      {
        id: 1,
        title: "Demon Slayer",
        image: "https://picsum.photos/300/400?1"
      },
      {
        id: 2,
        title: "Jujutsu Kaisen",
        image: "https://picsum.photos/300/400?2"
      },
      {
        id: 3,
        title: "Attack on Titan",
        image: "https://picsum.photos/300/400?3"
      }
    ];
  },

  async getManga() {
    return [
      {
        id: 4,
        title: "One Piece",
        image: "https://picsum.photos/300/400?4"
      }
    ];
  },

  async getStreamUrl(id) {
    return "https://www.w3schools.com/html/mov_bbb.mp4";
  }
});
