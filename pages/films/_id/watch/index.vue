<template>
  <div class="container " style="margin:68px auto 0;max-width: 1164px" >
    <div class="row">
      <div class="col-md-8 d-flex flex-column">
            <div style="height: 100%" >
              <iframe  width="100%" height="400" src="https://www.youtube.com/embed/7JPTlqRRf1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <h1 class="watch_title text-white" style="font-weight: bold;margin: 16px 0">
              Die Hard
            </h1>
            <div class="d-flex mb-4">
            <a href="#"><i class="fa-brands fa-facebook-f fa fa-facebook" style="margin: 5px 5px 5px 0"></i></a>
            <a href="#"><i class="fa-brands fa-twitter fa "></i></a>
<!--            <a  class="icon1" style="width: 50px;height: 50px"><i class=" fa-brands fa-instagram fa  "></i></a>-->
            <a href="#"><i class="fa-brands fa-youtube fa fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin fa fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-skype fa fa-skype"></i></a>
            </div>
            <div>
              <h5 class="text-white">Vote Rate:</h5>
            </div>
            <div style="width: 30%;" class="d-flex mb-3">
              <b-form-rating class="rcm_rating"   size="sm" id="rating-inline" color="yellow" stars="10" style="background-color: transparent;border: none;padding: 0" ></b-form-rating>
            </div>

            <b-btn data-href="https://www.facebook.com/NetflixVietnam" style="width: 14%;padding: 0;background: #3B5998;" data-size="">
              <i class="fa-brands fa-facebook-f fa fa-facebook p-0 mx-0" ></i>
              <a target="_blank" style="text-decoration: none;"  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FNetflixVietnam&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore text-white mx-1">Chia sẻ
              </a>
            </b-btn>


      </div>
      <div class="col-md-4">
        <div class="d-flex flex-column">
          <div>
            <h3 class="text-white" style="font-size: 18px;font-weight: bold">Recommended</h3>
          </div>
          <SideBarItem></SideBarItem>
<!--          component ở đây -->
        </div>

      </div>
    </div>

    <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Film Top</h2>
    <el-divider></el-divider>

    <h2 style="margin-top: 40px;font-weight: 550;color: white;font-size: 60px">Now Playing</h2>
    <el-divider></el-divider>
  </div>
</template>

<script>
import SideBarItem from "../../../../components/SideBarItem";
export default {
  name: "_watch",
  components:{
    SideBarItem,
  },
}
</script>

<style scoped>
.fa {
  padding: 10px;
  font-size: 20px;
  /*width: 50px;*/
  text-align: center;
  text-decoration: none;
  margin: 5px 5px;
  border-radius: 8px;
}
.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-twitter {
  background: #55ACEE;
  color: white;
}
.icon1{
  font-size: 30px!important;

  text-align: center;
  background-image: linear-gradient(155deg, #4C57A2 8%, #87439A 50%, #e02870 85%);
  position: relative;
  color: #fff;
}

.icon1:after{
   content: '';
   display: block;
   top: 30%;
   left: -60%;
   background: radial-gradient(rgba(246, 221, 132,1) 15%,
   rgba(255, 45, 45, 0.65) 50%,
   rgba(0, 0, 0, 0) 70%);
 }

.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-linkedin {
  background: #007bb5;
  color: white;
}
.fa-skype {
  background: #00aff0;
  color: white;
}
</style>
