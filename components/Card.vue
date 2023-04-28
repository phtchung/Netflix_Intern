<template>
  <div class="d-flex flex-column  " style="width: 100%" >
    <img :src="'https://image.tmdb.org/t/p/original'+image"  :style="styleObj" style="width: 100%;background-size: cover;border-radius: 12px;transition: transform 0.3s ease-in-out;" alt="">
    <h4 class="title_name"> {{title}}</h4>
    <h4 class="title_actor" v-if="name!==undefined" >{{name}}</h4>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    image:String,
    title:String,
    name:String,
    styleObj:String,
  },
  data(){
    return{

    }
  },
  mounted() {
    console.log(this.name)
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
</style>
