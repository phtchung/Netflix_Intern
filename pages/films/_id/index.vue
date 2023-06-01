<template>
    <div class="container" style="margin:80px auto 100px;max-width: 1164px">
      <div>
        <div class="row">
          <div class="col-md-9">
            <div class="row">
                <div class="col-md-4">
                  <img :src="'https://image.tmdb.org/t/p/original'+detail_film.poster_path" alt="" style="width: 100%;background-size: cover">
                </div>
                <div class="col-md-8 d-flex flex-column">
                  <div>
                    <h2 class="text-white" style="font-weight: bold">{{detail_film.original_title}}</h2>
                  </div>
                  <div class="d-flex align-items-center my-3" >
                    <h5 class="text-font " style="margin-right: 0.5rem" >Genres:</h5>
                    <div v-for="(genre,index) in genres" :key="index" class="text-center "  style="background-color: #2196f3;border-radius: 16px;margin-right: 4px;height: 28px">
                      <b-badge variant="primary" class="mb-1">{{genre.name}}</b-badge>
                    </div>
                  </div>
                  <div>
                    <h5 class="text-font " style="margin:0 0.5rem 1rem 0" >Release date: {{detail_film.release_date}}</h5>
                  </div>
                  <div>
                    <h5 class="text-font " style="margin:0 0.5rem 1rem 0" >Runtime: {{detail_film.runtime}} minutes</h5>
                  </div>
                  <div>
                    <h5 class="text-font " style="margin:0 0.5rem 0.5rem 0" >{{detail_film.overview}}</h5>
                  </div>
                  <div>
                    <b-form-rating readonly size="lg" id="rating-inline" color="yellow" stars="10" style="background-color: transparent;border: none;padding: 0"  inline :value="starFix"></b-form-rating>
                  </div>
                  <div>
                    <h5 class="text-font " style="margin:0 0.5rem 1rem 0" >( {{ starFix }}
                      <i class="fa-solid fa-star" style="color: #f7f01d;"></i>
                      / {{detail_film.vote_count}} )</h5>
                  </div>
                  <div>
                    <b-button @click="directToWatch(film_id)" variant="success" style="margin-right: 16px">WATCH NOW
                      <nuxt-link to="watch"></nuxt-link>
                      <i class="fa-sharp fa-solid fa-circle-chevron-down fa-rotate-270"></i>
                    </b-button>
                    <b-button @click="directToWatch(film_id)" variant="danger">WATCH TRAILER
                      <i class="fa-solid fa-circle-play fa-sm"></i>
                    </b-button>

                  </div>
                </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="flex-column">
              <div>
                <h3 class="text-white m-0" style="font-size: 18px;font-weight: bold;">Recommended</h3>
              </div>

              <div v-for="(rcm_film,index) in recommends_film" class="rcm_item row  b-sidebar-right align-items-center"   >
                <SideBarItem :id="rcm_film.id" :name="rcm_film.title" :star-value="Round_half(parseInt(rcm_film.vote_average))" :img_src="rcm_film.poster_path"></SideBarItem>
              </div>
            </div>

          </div>

        </div>
        <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Main Actor</h2>
        <el-divider></el-divider>
        <div class="row " >
          <div v-for="(actor,index) in actors" :key="index" class="d-flex col-md-2 col-lg-2 col-sm-4  "  >
            <Card :image="'https://image.tmdb.org/t/p/original'+actor.profile_path" :title="actor.name" :name="actor.character" :style-obj="fixheight" ></Card>
            <!--        <img :src=slide.image style="width: 100%;background-size: cover;border-radius: 12px;transition: transform 0.3s ease-in-out; " alt="">-->
          </div>
        </div>
        <h2 style="margin-top: 20px;font-weight: 550;color: white;font-size: 60px">Films Top</h2>
        <el-divider></el-divider>
        <Slide :slides="topfilms" />
      </div>
    </div>
</template>

<script>
import SideBarItem from "../../../components/SideBarItem";
import Card from "../../../components/Card";
import Slide from "../../../components/Slide";

import { mapState } from 'vuex'
export default{
  name: "_film.vue",
  components: { SideBarItem ,Card , Slide },
  data(){
    return{
      film_id:null,
      is_loading:true,
      detail_film:{},
      genres:[],
      actors:{},
      recommends_film:[],
      fixheight:{
        height : '200px!important',
        top: '0',
        left: '0',
        objectFit: 'cover'
      }
    }
  },
  computed: {
    ...mapState({
      topfilms: state => state.topfilms
    }),
    starFix(){
      return this.Round_half(parseInt(this.detail_film.vote_average))
    }
    // topfilms() {
    //   return this.$store.state.topfilms;
    // }
  },
  created() {
    this.$store.dispatch('fetchData')
  },
  mounted() {
    this.film_id = this.$route.params.id;
    console.log('film id ' + this.film_id)
    this.fetchFilmData(this.film_id)
    this.fetchActorData(this.film_id)
    this.fetchRecommendData(this.film_id)
  },
  methods:{
    fetchFilmData(id){

      this.$axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`)
        .then(response => {
          this.detail_film = response.data
          this.genres = this.detail_film.genres
        })
        .catch(error => {
          console.log(error);
        });

    },
    fetchActorData(id){
        this.$axios.get(`http://api.themoviedb.org/3/movie/${id}/casts?api_key=e9e9d8da18ae29fc430845952232787c`)
          .then(response => {
            this.actors = response.data.cast.slice(0,6)
          })
          .catch(error => {
            console.log(error);
          });
    },
    fetchRecommendData(id){
        this.$axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`)
          .then(response => {
            this.recommends_film = response.data.results.slice(0,8)
            console.log(this.recommends_film)
          })
          .catch(error => {
            console.log(error);
          });
    },
    Round_half(num){
          var integer_part = Math.floor(num)
          var decimal_part = num - integer_part
          var rounded_decimal
      if (decimal_part < 0.25){
           rounded_decimal = 0
      }else if(decimal_part < 0.75){
        rounded_decimal = 0.5
      }else {
        rounded_decimal = 1
      }
      return integer_part + rounded_decimal
    },

    directToWatch(id){
        this.$router.push({path:`/films/${id}/watch`})
    }
  }

}
</script>

<style scoped>
.el-divider{
  background-color: #333;
  margin-top: 12px;
  margin-bottom: 40px;
}
.text-font{
  color: white;
  font-size: 16px;
}

.rcm_item :deep(.b-rating-star) {
  padding: 0 1px !important;
}
</style>
