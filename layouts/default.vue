<template>
  <div>
    <Header style="position: fixed;z-index: 100;width: 100%;top: 0"></Header>
<!--    <el-menu-->
<!--      :default-active="activeIndex2"-->
<!--      mode="horizontal"-->
<!--      class="el-menu-demo menu"-->
<!--      @select="handleSelect"-->
<!--      background-color="#000000"-->
<!--      text-color="#fff"-->
<!--      active-text-color="#ffd04b">-->
<!--      <el-menu-item index="1">Home</el-menu-item>-->
<!--      <el-menu-item>-->
<!--      <el-avatar  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
<!--      </el-menu-item>-->
<!--    </el-menu>-->
    <Nuxt/>
    <Footer></Footer>
  </div>

</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  components:{
    Footer,Header
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
}
.el-menu.el-menu--horizontal{
  border-bottom: 1px solid black;
}
</style>
