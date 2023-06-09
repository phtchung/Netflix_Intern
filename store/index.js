import Vuex from 'vuex'
const store = () => {
  return new Vuex.Store({
    state: {
      topfilms: [],
      nowplayingfilms:[],
    },
    mutations: {
      setTopFilm(state, topfilms) {
        state.topfilms = topfilms
      },
      setNowplayingFilm(state ,nowplayingfilms ){
        state.nowplayingfilms = nowplayingfilms
      }
    },
    actions: {
      async fetchData({ commit }) {
        const response = await this.$axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
        commit('setTopFilm', response.data.results)
        console.log(response.data.results)
      },
      async fetchNowPlayingData({ commit }) {
        const response = await this.$axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
        commit('setNowplayingFilm', response.data.results)
        console.log(response.data.results)
      },
    },
    getters: {

    },
  })
}

export default store

