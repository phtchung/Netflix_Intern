<template>
  <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">
      {{'List item ' + o }}
    </div>
  </el-card>
</template>
<script>
export default {
  name: "Card"
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

</style>
