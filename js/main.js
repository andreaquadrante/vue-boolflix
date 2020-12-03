const API_KEY = "0cbad98882962931e244c2cc93535043"

const app = new Vue ({

  el: '#root',

  data: {
    movies: [],
    searchInput: ''
  },

  mounted: function () {

    axios
      .get ("https://api.themoviedb.org/3/search/movie?", {
        params: {
          'api_key': API_KEY,
          query: this.searchInput
        }
      })
      .then (got => {
        this.movies = got.data;
        this.searchMovie = '';
      })

  },

});
