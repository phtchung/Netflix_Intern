<template>
  <el-carousel :interval="5000" arrow="always" height="750px" >
    <el-carousel-item v-for="(carousel,index) in carousels" :key="index">
      <div class="item">

        <div class="banner" style="position: absolute; top: 50%; left: 25%; transform: translate(-50%, -50%); color: white; text-shadow: 1px 1px black;">
            <h2 class="banner-header">The Godfather Part II</h2>
            <p style="margin: 0" >In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.</p>
            <div style="margin-top: 30px">
              <el-button type="success" size="medium">WATCH NOW
                <i class="el-icon-caret-right"></i>

              </el-button>
              <el-button type="danger" size="medium">WATCH TRAILER
                <i  class="el-icon-video-play"></i>
              </el-button>

            </div>
        </div>
        <img style="background-size: cover;width: 100%" :src=carousel.url alt="" />
      </div>
<!--      <h2 :style="`backgroundImage: url('${carousel.url}')`" >-->
<!--          <span class="banner">-->
<!--              <span style="color: #FFFFFF;line-height: 50px;font-size: 48px;font-weight: bold;max-width: 50%"  >-->
<!--                <span >The Godfather Part II</span>-->
<!--                <span style="color: #FFFFFF;font-weight: 400;font-size: 16px;display: block">In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.</span>-->
<!--              </span>-->
<!--&lt;!&ndash;              <h1 class="banner-text"></h1>&ndash;&gt;-->
<!--          </span>-->

<!--      </h2>-->
<!--      <img style="width: 100%;height:auto;margin-top: 50px;padding: 0 -20px" :src=carousel.url alt="">-->
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// import Card from "./Card";
export default {
  name: "Carousel.vue",
  components: {

  },

  data(){
    return{
      carousels:[
        {url:"https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"},
        // {url:"https://image.tmdb.org/t/p/original/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg"},
        // {url:"https://image.tmdb.org/t/p/original/kGzFbGhp99zva6oZODW5atUtnqi.jpg"}
      ],
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
