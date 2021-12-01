<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-4"
        data-aos="fade-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/kala-logo.png"
          width="229"
          height="159"
          class="me-5 p-2"
        />
      </div>
      <div
        class="col-md-8"
        data-aos="fade-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <NavBar class="mt-5 ms-5" id="navbar" />
      </div>
    </div>
    <div class="row mt-5">
      <div
        class="col-md-6"
        data-aos="fade-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <PS />
      </div>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/services.jpg"
          width="548"
          height="314"
          class="mb-5"
        />
      </div>
    </div>
    <HR class="mt-5 mb-5" />
    <div class="row">
      <SL id="product" />
    </div>
    <div class="row mt-5">
      <Footer class="mt-5" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PS from "@/components/ServicesParagragh.vue";
import HR from "@/components/HorizontalLine.vue";
import SL from "@/components/OurServices.vue";
import Footer from "@/components/FootBar.vue";
export default {
  name: "OurStory",
  components: {
    NavBar,
    PS,
    HR,
    SL,
    Footer,
    // fade-up-right
  },
};
</script>

<style scoped>
/* div {
  border: 1px solid blue;
} */
#navbar {
  float: right;
}
/* .rotate {
  background-color: transparent; 
  transform: rotate(330deg);
} */
#product {
  margin-left: 15%;
}
</style>
