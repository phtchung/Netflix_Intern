<template>
  <div>
    <h3>Kết quả tìm kiếm cho :</h3>
    <el-divider></el-divider>
    <h3>Kết quả tìm kiếm cho :</h3>
    <h3>Kết quả tìm kiếm cho :</h3>

    <div class="row position-relative " style="margin-bottom: 90px" >
      <div v-for="(slide, index) in lists_nowplaying" :key="_q" class="d-flex col-md-3 "  >
        <nuxt-link :to="`/films/${slide.id}`" style="text-decoration: none;">
          <Card :image="'https://image.tmdb.org/t/p/original'+slide.backdrop_path" :title="slide.title" ></Card>
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
  }
}
</script>

<style scoped>

</style>
