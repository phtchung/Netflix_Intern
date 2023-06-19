<template >
  <div>
    <Carousel :carousels="lists_nowplaying"></Carousel>
    <div class="container" style="margin: auto;padding: 0 36px" >
      <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film up Coming</h2>
      <el-divider></el-divider>
      <Slide :slides="lists_upcoming" />
      <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film Top</h2>
      <el-divider></el-divider>
      <Slide :slides="lists_top" />
      <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film Popular</h2>
      <el-divider></el-divider>
      <div class="row position-relative " style="margin-bottom: 90px" >

        <div v-for="(slide, index) in paginatedFilms" :key="index" class="d-flex col-md-3 " id="film_popular" >
          <nuxt-link :to="`/films/${slide.id}`" style="text-decoration: none;">
          <Card :isLoading="isLoading" :image="'https://image.tmdb.org/t/p/original'+slide.backdrop_path" :title="slide.title" ></Card>
        <!--        <img :src=slide.image style="width: 100%;background-size: cover;border-radius: 12px;transition: transform 0.3s ease-in-out; " alt="">-->
          </nuxt-link>
        </div>
        <b-pagination
          v-model="currentPage"
          :total-rows="lists_nowplaying.length"
          :per-page="perPage"
          align="center"
          aria-controls="film_popular"
          class="mt-4"
          size="lg"
        ></b-pagination>
      </div>

    </div>

  </div>
</template>

<script>
import Slide from "../components/Slide";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import { Spinner } from 'vue-spinner/dist/vue-spinner.min.js';
export default {
  name: 'IndexPage',
  components:{
    Carousel,Slide,Card,Spinner,
  },
  data() {
    return {
      isLoading:true,
      perPage:8,
      currentPage:1,
      images: [
        'https://image.tmdb.org/t/p/original/5Y5pz0NX7SZS9036I733F7uNcwK.jpg',
        'https://image.tmdb.org/t/p/original/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg',
        'https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg'
      ],
      lists_upcoming:[],
      lists_nowplaying:[],
      lists_top:[],
    }
  },
  computed:{
    paginatedFilms() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.lists_nowplaying.slice(start, end);
    },
  },
  created() {
    this.isLoading  = true
    this.$axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
      .then(response => {
        this.lists_nowplaying = response.data.results.slice(0,19)
        // console.log(response.data.results);
        this.isLoading = false
      })
      .catch(error => {
        console.log(error);
        this.isLoading = false
      });
    this.$axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
      .then(response => {
        this.lists_upcoming = response.data.results
        // console.log(response.data.results);
        this.isLoading = false

      })
      .catch(error => {
        console.log(error);
      });
    this.$axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
      .then(response => {
        this.lists_top = response.data.results
        this.isLoading = false

        // console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });

  }
}
</script>

<style scoped>
  .el-divider{
    background-color: #333;
    margin-top: 12px;
    margin-bottom: 40px;
  }
  @media (min-width: 768px) {
    .carousel-inner {
      display: flex;
    }
    .carousel-item {
      margin-right: 0;
      flex: 0 0 33.333333%;
      display: block;
    }
  }
  .carousel-inner{
    padding: 1em;
  }
  .card{
    margin: 0 .5em;
    box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
    border: none;
  }
  .carousel-control-prev, .carousel-control-next{
    background-color: #e1e1e1;
    width: 6vh;
    height: 6vh;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  .pagination_cen{
    position: absolute;
    top: 100%;

  }

  .b-pagination >>> .page-link {
    background-color: rgb(51, 51, 51); /* Màu nền của nút button */
    color: white; /* Màu chữ của nút button */
    border-color: transparent; /* Màu viền của nút button */
    padding: 5px 12px 6px;
    font-size: 20px;
  }
</style>
