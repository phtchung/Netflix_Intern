<template>
  <div>
    <div class="row" style="position: relative">
      <div  v-for="(slide, index) in displayedBoxes" :key="index" class="box_wrapper col-md-3 " >
        <nuxt-link :to="`/films/${slide.id}`" style="text-decoration: none">
        <Card :image="slide.backdrop_path" :title="slide.title"  ></Card>
        </nuxt-link>
      </div>
      <div class="next_remove">
        <b-btn :disabled="currentPage === 0" style="background-color: transparent;border: 0;margin-left: -40px">
          <i @click="prevPage" :class="{ 'dark-color': currentPage === 0, 'bright-color': currentPage !== 0 }"  style="cursor: pointer;color: #ffffff" class="fa-solid fa-chevron-left fa-2xl"></i>
        </b-btn>

        <b-btn :disabled="(currentPage + 4 ) >= slides.length" style="background-color: transparent;border: 0;margin-right: -40px">
          <i @click="nextPage" :class="{ 'dark-color': currentPage === 0, 'bright-color': currentPage !== 0 }"  style="cursor: pointer;color: #ffffff" class="fa-solid fa-chevron-right fa-2xl"></i>
        </b-btn>
      </div>
    </div>


  </div>
</template>

<script>
import Card from "./Card";
export default {
  components: { Card },
  props:{
    slides:Array
  },
  data() {
    return {
      currentPage: 0,
      boxesPerPage: 4,
      defaultStyles: {
        color: '#636060',
      },
      activeStyles: {
        color: '#ffffff',
      }
    };
  },
  computed: {
    displayedBoxes() {
      const start = this.currentPage * this.boxesPerPage/4;
      return this.slides.slice(start, start + this.boxesPerPage);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage + 2 < this.slides.length) {
        this.currentPage++;
        console.log(this.currentPage)
      }
    },
  },
};

</script>

<style scoped>

box_wrapper{
  display: flex;
  height: 250px;
  overflow: hidden;

}
.bright-color {
  color: #413e3e;
}

.dark-color {
  color: #fff;
}

.next_remove{
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
}
.slider__track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slider__controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.slider__prev,
.slider__next {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  outline: none;
}

</style>
