<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-12 col-md-12"
        data-aos="fade-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <NavBar class="mt-5 ms-5" id="navbar" />
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-6"
        data-aos="fade-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <Story />
      </div>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/waterfall1.jpeg"
          alt=""
          class="image-down"
          height="670px"
        />
      </div>
    </div>
    <div class="row mt-5">
      <Footer class="mt-5" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Story from "@/components/Story.vue";
import Footer from "@/components/FootBar.vue";
export default {
  name: "OurStory",
  components: {
    NavBar,
    Story,
    Footer,
  },
};
</script>

<style scoped>
#navbar {
  float: left;
}
.image-down {
  margin-top: 15%;
}

@media screen and (min-width: 400px){
img{
  width:400px;
}
  
}
</style>
