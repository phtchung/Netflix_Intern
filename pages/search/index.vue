<template>
  <div class="search_container container">
    <h3 class="text-font ">Kết quả tìm kiếm cho : {{search_key}}</h3>
    <el-divider></el-divider>

    <div class="row position-relative " style="margin-bottom: 90px" >
      <div v-for="(slide, index) in list_film" :key="index" class="d-flex col-md-3 "  >
        <nuxt-link :to="`/films/${slide.id}`" style="text-decoration: none;">
          <Card :image='slide.url' :title="slide.title" ></Card>
          <!--        <img :src=slide.image style="width: 100%;background-size: cover;border-radius: 12px;transition: transform 0.3s ease-in-out; " alt="">-->
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card";
export default {
  name: "index.vue",
  components:{
    Card,
  },
  data(){
    return{
      search_key:"",
      list_search:[],
      list_id:[],
      list_film:[],
      img_temp:"",
      img_url:"",
    }
  },
  computed:{
  },
  watch:{
    img_url(id){
      this.fetchImgfilm(id)
      console.log('alo',id)
      return 'https://image.tmdb.org/t/p/original'+this.img_temp
    }
  },
  mounted() {
    this.search_key = this.$route.query.q
    console.log(this.search_key)
    this.fetchDataSearch(this.search_key)
  },
  methods:{
    fetchDataSearch(key){
      this.$axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=e9e9d8da18ae29fc430845952232787c&page=1&query=${key}`)
        .then(response => {
          this.list_search = response.data.results
          this.list_id = this.list_search.map(obj => obj.id)
          console.log(this.list_id)
          for(var i = 0 ; i < this.list_id.length;i++){
            this.fetchImgfilm(this.list_id[i])
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchImgfilm(id){
      console.log(id)
      this.$axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`)
        .then(response => {
          const film = {title : response.data.title , url:'https://image.tmdb.org/t/p/original'+response.data.backdrop_path}
          console.log(film)
          this.list_film = [...this.list_film , film]
        })
        .catch(error => {
          console.log(error);
        });
    }

  }
}
</script>

<style scoped>
.search_container{
  margin: 80px auto 100px;
}
.text-font{
  color: white;
  font-size: 2.5rem;
  margin: 60px 40px 60px;
}
</style>
