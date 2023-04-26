<template>
  <div class="b-sidebar-right">
    <div class="sidebar-right-item mt-3">
      <img
        style="max-width: 40px;background-size: contain"
        height="55px"
        src="https://image.tmdb.org/t/p/original/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg"
      />
<!--        lazy-src="/images/loadingImage.gif"-->

      <div class="d-flex flex-column ">
        <h6 class="film-name m-0 ">tên phim</h6>
        <div>
          <b-form-rating class="rcm_rating" readonly  size="sm" id="rating-inline" color="yellow" stars="10" style="background-color: transparent;border: none;padding: 0"  inline value="4.5"></b-form-rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  components: {  },
  computed: {

  },
  methods: {
    // handleWatch(id) {
    //   this.$router.push(`/films/${id}`);
    // },
  },
};
</script>

<style scoped>
.sidebar-right-item {
  display: flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
}
.sidebar-right-item:hover .film-name {
  color: #e85f54;
}
.sidebar-right-item :deep(.film-name) {
  color: #ffffff;
}

.rcm_rating :deep(.b-rating-star) {
  padding: 0 1px !important;
}
/*.character {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  align-items: center;*/
/*}*/
/*.image-character {*/
/*  height: 200px;*/
/*  border-radius: 10px;*/
/*}*/
</style>
