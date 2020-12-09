const API_KEY = '0cbad98882962931e244c2cc93535043';

const app = new Vue ({

  el: '#root',

  data: {

    apiKey: API_KEY,
    searchMovie: [],
    searchInput: '',
    rating: 5,
    posterUri: 'https://image.tmdb.org/t/p/w342/',
    currentPage: 1,
    totalPages: 1

  },

  methods: {

    search () {
      axios
        .get ('https://api.themoviedb.org/3/search/multi', {
          params: {'api_key': this.apiKey,
          query: this.searchInput,
          page: this.currentPage,
        }})
        .then ((got) => {this.searchMovie = got.data.results;
          this.totalPages = got.data.total_pages;
        });
    },

    stars (rate) {
      return Math.ceil (rate / 2)
    },

  },

  mounted () {

    axios
      .get ('https://api.themoviedb.org/3/movie/popular', {
        params: {'api_key': this.apiKey,
        page: this.currentPage,
      }})
      .then (got => {this.searchMovie = got.data.results;
        this.totalPages = got.data.total_pages;
      })

  }

})
