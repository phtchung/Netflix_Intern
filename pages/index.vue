<template >
  <div>
    <Carousel></Carousel>
    <div class="container" style="margin: auto;padding: 0 36px" >
      <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film up Coming</h2>
      <el-divider></el-divider>
      <Slide :slides="slides" />
      <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film Top</h2>
      <el-divider></el-divider>
      <Slide :slides="slides" />
      <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film Popular</h2>
      <el-divider></el-divider>
      <div class="row position-relative " style="margin-bottom: 90px" >
        <div v-for="(slide, index) in slides" :key="index" class="d-flex col-md-3 "  >
          <Card :image="slide.backdrop_path" :title="slide.title" ></Card>
        <!--        <img :src=slide.image style="width: 100%;background-size: cover;border-radius: 12px;transition: transform 0.3s ease-in-out; " alt="">-->
        </div>
      </div>


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
      listfilms:[],
      slides:
        [
          // {image:'https://image.tmdb.org/t/p/original/5Y5pz0NX7SZS9036I733F7uNcwK.jpg'},
          // {image:'https://image.tmdb.org/t/p/original/5Y5pz0NX7SZS9036I733F7uNcwK.jpg'},
          // {image:'https://image.tmdb.org/t/p/original/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg'},
          // {image:'https://image.tmdb.org/t/p/original/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg'},
          // {image:'https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg'},
          // {image:'https://image.tmdb.org/t/p/original/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg'},
          {
            poster_path: "/pEFRzXtLmxYNjGd0XqJDHPDFKB2.jpg",
            adult: false,
            overview:
              "A lighthouse keeper and his wife living off the coast of Western Australia raise a baby they rescue from an adrift rowboat.",
            release_date: "2016-09-02",
            genre_ids: [18],
            id: 283552,
            original_title: "The Light Between Oceans",
            original_language: "en",
            title: "The Light Between Oceans",
            backdrop_path: "https://image.tmdb.org/t/p/original/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
            popularity: 4.546151,
            vote_count: 11,
            video: false,
            vote_average: 4.41,
          },
          {
            poster_path: "/udU6t5xPNDLlRTxhjXqgWFFYlvO.jpg",
            adult: false,
            overview:
              "Friends hatch a plot to retrieve a stolen cat by posing as drug dealers for a street gang.",
            release_date: "2016-09-14",
            genre_ids: [28, 35],
            id: 342521,
            original_title: "Keanu",
            original_language: "en",
            title: "Keanu",
            backdrop_path: "https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
            popularity: 3.51555,
            vote_count: 97,
            video: false,
            vote_average: 6.04,
          },
          {
            poster_path: "/1BdD1kMK1phbANQHmddADzoeKgr.jpg",
            adult: false,
            overview:
              'On January 15, 2009, the world witnessed the "Miracle on the Hudson" when Captain "Sully" Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all 155 aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and his career.',
            release_date: "2016-09-08",
            genre_ids: [36, 18],
            id: 363676,
            original_title: "Sully",
            original_language: "en",
            title: "Sully",
            backdrop_path: "https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
            popularity: 3.254896,
            vote_count: 8,
            video: false,
            vote_average: 4.88,
          },
          {
            poster_path: "/2gd30NS4RD6XOnDlxp7nXYiCtT1.jpg",
            adult: false,
            overview:
              "The fates of Henry - an American correspondent - and Teresa, one of the Republic's censors during the Spanish Civil War.",
            release_date: "2016-09-09",
            genre_ids: [18, 10752, 10749],
            id: 363841,
            original_title: "Guernika",
            original_language: "en",
            title: "Guernica",
            backdrop_path: "https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
            popularity: 3.218451,
            vote_count: 9,
            video: false,
            vote_average: 4.61,
          },
          {
            poster_path: "/ag6NsqD8tpDGgAcs4CnfdI3miSD.jpg",
            adult: false,
            overview:
              "Louis, a terminally ill writer, returns home after a long absence to tell his family that he is dying.",
            release_date: "2016-09-01",
            genre_ids: [18],
            id: 338189,
            original_title: "Juste la fin du monde",
            original_language: "fr",
            title: "It's Only the End of the World",
            backdrop_path: "https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
            popularity: 2.995961,
            vote_count: 11,
            video: false,
            vote_average: 5.23,
          },
        ],
    }
  },
  created() {

  },
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


</style>
