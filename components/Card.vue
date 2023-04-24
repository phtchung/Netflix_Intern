<template>
  <div class="d-flex flex-column" >
    <img :src=image style="width: 100%;background-size: cover;border-radius: 12px;transition: transform 0.3s ease-in-out; " alt="">
    <h4 class="title_name"> {{title}}</h4>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    image:String,
    title:String,
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

.title_name{
  color: white ;
  text-align: center;
  margin: 1rem 0;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px
}
.title_name:hover{
  color: #E85F54;
}

img:hover{
  cursor: pointer;
}
</style>
