<template>
  <div class="container " style="margin:68px auto 0;max-width: 1164px" >
    <div class="row">
      <div class="col-md-8 d-flex flex-column">
            <div style="height: 100%" >
              <iframe  width="100%" height="400" :src="src_youtube"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <h1 class="watch_title text-white" style="font-weight: bold;margin: 16px 0">
              {{detail_watch.title}}
            </h1>
            <div class="d-flex mb-4">
            <a href="#"><i class="fa-brands fa-facebook-f fa fa-facebook" style="margin: 5px 5px 5px 0"></i></a>
            <a href="#"><i class="fa-brands fa-twitter fa "></i></a>
<!--            <a  class="icon1" style="width: 50px;height: 50px"><i class=" fa-brands fa-instagram fa  "></i></a>-->
            <a href="#"><i class="fa-brands fa-youtube fa fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin fa fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-skype fa fa-skype"></i></a>
            </div>
            <div>
              <h5 class="text-white">Vote Rate:</h5>
            </div>
            <div style="width: 30%;" class="d-flex mb-3">
              <b-form-rating class="rcm_rating"   size="sm" id="rating-inline" color="yellow" stars="10" style="background-color: transparent;border: none;padding: 0" ></b-form-rating>
            </div>

            <b-btn data-href="https://www.facebook.com/NetflixVietnam" style="width: 14%;padding: 0;background: #3B5998;" data-size="">
              <i class="fa-brands fa-facebook-f fa fa-facebook p-0 mx-0" ></i>
              <a target="_blank" style="text-decoration: none;"  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FNetflixVietnam&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore text-white mx-1">Chia sẻ
              </a>
            </b-btn>


      </div>
      <div class="col-md-4">
        <div class="d-flex flex-column">
          <div>
            <h3 class="text-white" style="font-size: 18px;font-weight: bold">Recommended</h3>
          </div>
          <div v-for="(rcm_film,index) in recommends_film" class="rcm_item row  b-sidebar-right align-items-center"   >
            <SideBarItem :id="rcm_film.id" :name="rcm_film.title" :star-value="Round_half(parseInt(rcm_film.vote_average))" :img_src="rcm_film.poster_path" ></SideBarItem>
          </div>
        </div>

      </div>
    </div>

    <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film Top</h2>
    <el-divider></el-divider>
    <Slide :slides="topfilms" />
    <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Now Playing</h2>
    <el-divider></el-divider>
    <Slide :slides="nowplayingfilms"/>
  </div>
</template>

<script>
import SideBarItem from "../../../../components/SideBarItem";
import Slide from "../../../../components/Slide";
import {mapState} from "vuex";
export default {
  name: "_watch",
  components:{
    SideBarItem,Slide
  },
  data(){
    return{
      film_id:null,
      detail_watch:{},
      genres:[],
      actors:{},
      recommends_film:[],
      src_youtube:'',
    }
  },
  computed: {
    ...mapState({
      topfilms: state => state.topfilms,
      nowplayingfilms: state => state.nowplayingfilms
    }),
    starFix(){
      return this.Round_half(parseInt(this.detail_watch.vote_average))
    },
  },
  created() {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchNowPlayingData')
  },

  mounted(){
    this.film_id = this.$route.params.id;
    console.log('film id trong watch ', this.film_id)
    this.fetchFilmData(this.film_id)
    this.fetchRecommendData(this.film_id)
  },
  methods:{
    fetchFilmData(id){
      this.$axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`)
        .then(response => {
          this.detail_watch = response.data
          this.genres = this.detail_watch.genres
          this.src_youtube = 'https://www.youtube.com/embed/'+this.detail_watch.videos.results[0].key
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
  },
}
</script>

<style scoped>
.fa {
  padding: 10px;
  font-size: 20px;
  /*width: 50px;*/
  text-align: center;
  text-decoration: none;
  margin: 5px 5px;
  border-radius: 8px;
}
.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-twitter {
  background: #55ACEE;
  color: white;
}
.icon1{
  font-size: 30px!important;

  text-align: center;
  background-image: linear-gradient(155deg, #4C57A2 8%, #87439A 50%, #e02870 85%);
  position: relative;
  color: #fff;
}

.icon1:after{
   content: '';
   display: block;
   top: 30%;
   left: -60%;
   background: radial-gradient(rgba(246, 221, 132,1) 15%,
   rgba(255, 45, 45, 0.65) 50%,
   rgba(0, 0, 0, 0) 70%);
 }

.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-linkedin {
  background: #007bb5;
  color: white;
}
.fa-skype {
  background: #00aff0;
  color: white;
}
</style>
