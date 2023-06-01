<template>
  <div class="d-flex flex-column position-relative  "  style="width: 100%;z-index: 2" >
<!--    <span class="img_container">-->
<!--          <span v-if="isLoading">-->
<!--            <Spinner></Spinner>-->
<!--          </span>-->
      <img :src="'https://image.tmdb.org/t/p/original'+image"  :style="styleObj" style="width: 100%;background-size: cover;border-radius: 12px;transition: transform 0.3s ease-in-out;" alt="">

<!--    </span>-->
    <i :class="{hidden : hiddenBt}" class="fa-sharp fa-solid fa-play fa-2xl vd_play"  style="color: #f4f6fb;"></i>
    <h4 class="title_name"> {{title}}</h4>
    <h4 class="title_actor" v-if="name!==undefined" >{{name}}</h4>
  </div>
</template>
<script>
import { Spinner } from 'vue-spinner/dist/vue-spinner.min.js';
export default {
  name: "Card",
  props: {
    isLoading:Boolean,
    image:String,
    title:String,
    name:String,
    styleObj:String,
    hiddenBt: true,
  },
  components:{
    Spinner
  },
  data(){
    return{

    }
  },
  mounted() {
    console.log(this.isLoading)
  }
}
</script>

<style scoped>


.title_name{
  text-decoration: none;
  color: white ;
  text-align: center;
  margin: 1rem 0;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px
}
.title_actor{
  color: white;
  text-align: center;
  margin-top: -10px;
  font-weight: 550;
  font-size: 16px;
}
.title_name:hover{
  color: #E85F54;
}

img{
  width: 100%;
}
img:hover{
  cursor: pointer;
}
.hidden{
  display: none !important;
}
.vd_play{
  position: absolute;
  top: 41%;
  left: 50%;
  cursor: pointer;
  transform: translate(-50%, -20%);
  display: none;
}
img:hover ~ .vd_play{
  display: block;
}

.img_container{
  position: relative;
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
