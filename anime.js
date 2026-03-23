extensionManager.register({
  name: "Anime API",

  async getMovies() {
    try {
      let res = await fetch("https://api.jikan.moe/v4/anime");
      let json = await res.json();

      return json.data.slice(0, 20).map(a => ({
        id: a.mal_id,
        title: a.title,
        image: a.images.jpg.image_url
      }));
    } catch {
      // 🔥 FALLBACK (SI FALLA INTERNET)
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
        }
      ];
    }
  },

  async getManga() {
    try {
      let res = await fetch("https://api.jikan.moe/v4/manga");
      let json = await res.json();

      return json.data.slice(0, 20).map(a => ({
        id: a.mal_id,
        title: a.title,
        image: a.images.jpg.image_url
      }));
    } catch {
      return [
        {
          id: 3,
          title: "One Piece",
          image: "https://picsum.photos/300/400?3"
        }
      ];
    }
  },

  async getStreamUrl(id) {
    return "https://www.w3schools.com/html/mov_bbb.mp4";
  }
});
