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
    <div class="row mt-5">
      <div
        class="col-sm-12 col-md-6"
        data-aos="fade-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <PH />
      </div>
      <div
        class="col-sm-12 col-md-6 mt-5"
        data-aos="fade-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/products.png"
          width="500"
          height="200"
          class="mt-5 rotate imgcss"
        />
      </div>
    </div>
    <div
      class="row"
      data-aos="fade-down"
      data-aos-ease="ease"
      data-aos-duration="1000"
    >
      <PL id="product" />
    </div>
    <div class="row mt-5">
      <Footer class="mt-5" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PH from "@/components/ProductsParagragh.vue";
import PL from "@/components/OurProducts.vue";
import Footer from "@/components/FootBar.vue";
export default {
  name: "OurStory",
  components: {
    NavBar,
    PH,
    PL,
    Footer,
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
.rotate {
  /* background-color: transparent; */
  transform: rotate(330deg);
}
#product {
  margin-left: 5%;
}
</style>
