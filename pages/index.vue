<template >
  <div>
    <Carousel></Carousel>
    <div class="container" style="margin: auto;padding: 0 36px" >
      <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film up Coming</h2>
      <el-divider></el-divider>
      <Slide />


      <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film Top</h2>
      <el-divider></el-divider>
    </div>


  </div>
</template>

<script>
import Slide from "../components/Slide";
import Carousel from "../components/Carousel";
export default {
  name: 'IndexPage',
  components:{
    Carousel,Slide
  },
  data() {
    return {
      images: [
        'https://image.tmdb.org/t/p/original/5Y5pz0NX7SZS9036I733F7uNcwK.jpg',
        'https://image.tmdb.org/t/p/original/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg',
        'https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg'
      ],

      slider2Items: [
        {img:'https://image.tmdb.org/t/p/original/5Y5pz0NX7SZS9036I733F7uNcwK.jpg'},
        {img:'https://image.tmdb.org/t/p/original/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg'},
        {img:'https://image.tmdb.org/t/p/original/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg'},
        { img:'https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg'}
      ],
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



</style>
