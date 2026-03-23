extensionManager.register({
  name: "Anime API",

  async getMovies() {
    try {
      let res = await fetch("https://api.jikan.moe/v4/anime");
      let json = await res.json();

      return json.data.slice(0,20).map(a => ({
        id: a.mal_id,
        title: a.title,
        image: a.images.jpg.image_url
      }));
    } catch {
      return [];
    }
  },

  async getManga() {
    try {
      let res = await fetch("https://api.jikan.moe/v4/manga");
      let json = await res.json();

      return json.data.slice(0,20).map(a => ({
        id: a.mal_id,
        title: a.title,
        image: a.images.jpg.image_url
      }));
    } catch {
      return [];
    }
  },

  async getStreamUrl(id) {
    return "https://www.w3schools.com/html/mov_bbb.mp4";
  }
});
