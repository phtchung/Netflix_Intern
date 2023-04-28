<template>
  <el-carousel :interval="5000" arrow="always" height="750px" >
    <el-carousel-item v-for="(carousel,index) in carousels" :key="index">
      <div class="item">

        <div class="banner" style="position: absolute; top: 50%; left: 25%; transform: translate(-50%, -50%); color: white; text-shadow: 1px 1px black;">
            <h2 class="banner-header">{{carousel.title}}</h2>
            <p style="margin: 0" >{{carousel.overview}}</p>
            <div style="margin-top: 30px">
              <nuxt-link :to="`/films/${carousel.id}`">
                <b-button variant="success" style="margin-right: 16px">WATCH NOW
                  <i class="fa-sharp fa-solid fa-circle-chevron-down fa-rotate-270"></i>
                </b-button>
              </nuxt-link>

              <nuxt-link :to="`/films/${carousel.id}`">
                <b-button variant="danger">WATCH TRAILER
                  <i class="fa-solid fa-circle-play fa-sm"></i>
                </b-button>
              </nuxt-link>


            </div>
        </div>
        <img style="background-size: cover;width: 100%" :src="'https://image.tmdb.org/t/p/original'+carousel.backdrop_path" alt="" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// import Card from "./Card";
export default {
  name: "Carousel.vue",
  components: {
  },
  props:{
    carousels:Array,
  },
  data(){
    return{

    }
    },

  }
</script>

<style scoped>
.el-carousel__item .carousel__image{
  /*color: #475669;*/
  font-size: 18px;
  /*opacity: 0.75;*/
  line-height: 750px;
  margin: 0;
  background-size: cover;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.banner-header{
  line-height: 72px;
  margin: 0;
  font-size: 50px;
  font-weight: bold
}
.banner{
  color: white;
  font-family: "Roboto",sans-serif;
  max-width: 45%;
  margin-left: 100px;
}
</style>
