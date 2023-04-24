<template>
    <div class="container" style="margin:80px auto 0;max-width: 1164px">
      <div>
        <div class="row">
          <div class="col-md-9">
            <div class="row">
                <div class="col-md-4">
                  <img src="https://image.tmdb.org/t/p/original/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg" alt="" style="width: 100%;background-size: cover">
                </div>
                <div class="col-md-8 d-flex flex-column">
                  <div>
                    <h2 class="text-white" style="font-weight: bold">Name</h2>
                  </div>
                  <div class="d-flex align-items-center my-3" >
                    <h5 class="text-font " style="margin-right: 0.5rem" >Genres:</h5>
                    <div class="text-center "  style="background-color: #2196f3;border-radius: 16px;margin-right: 4px;height: 28px">
                      <b-badge variant="primary" class="mb-1">Primary</b-badge>
                    </div>
                  </div>
                  <div>
                    <h5 class="text-font " style="margin:0 0.5rem 1rem 0" >Release date:</h5>
                  </div>
                  <div>
                    <h5 class="text-font " style="margin:0 0.5rem 1rem 0" >Runtime:</h5>
                  </div>
                  <div>
                    <h5 class="text-font " style="margin:0 0.5rem 0.5rem 0" >A man is imprisoned for a crime he didn't commit. When his wife is murdered and his son kidnapped and taken to Mexico, he devises an elaborate and dangerous plan to rescue his son and avenge the murder.</h5>
                  </div>
                  <div>
                    <b-form-rating size="lg" id="rating-inline" color="yellow" stars="10" style="background-color: transparent;border: none;padding: 0"  inline value="4.5"></b-form-rating>
                  </div>
                  <div>
                    <h5 class="text-font " style="margin:0 0.5rem 1rem 0" >( 5.6 / 112 )</h5>
                  </div>
                </div>
            </div>
          </div>
          <div class="col-md-3"></div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "_film.vue"
}
</script>

<style scoped>
.text-font{
  color: white;
  font-size: 16px;
}

</style>
