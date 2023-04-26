<template>
  <div >
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
      class="el-menu-demo menu"
      @select="handleSelect"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item>
      <el-avatar  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </el-menu-item>

<!--      <el-menu-item :span="18">-->
<!--        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->

<!--      </el-menu-item>-->

<!--      <el-submenu index="2">-->
<!--        <template slot="title">Workspace</template>-->
<!--        <el-menu-item index="2-1">item one</el-menu-item>-->
<!--        <el-menu-item index="2-2">item two</el-menu-item>-->
<!--        <el-menu-item index="2-3">item three</el-menu-item>-->
<!--        <el-submenu index="2-4">-->
<!--          <template slot="title">item four</template>-->
<!--          <el-menu-item index="2-4-1">item one</el-menu-item>-->
<!--          <el-menu-item index="2-4-2">item two</el-menu-item>-->
<!--          <el-menu-item index="2-4-3">item three</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="3" disabled>Info</el-menu-item>-->
<!--      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>-->
    </el-menu>
    <Nuxt  />
    <Footer></Footer>
  </div>

</template>

<script>
import Footer from "./Footer";
export default {
  components:{
    Footer
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
