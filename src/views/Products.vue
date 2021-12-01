<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img
          src="@/assets/images/kala-logo.png"
          width="229"
          height="159"
          class="me-5 p-2"
        />
      </div>
      <div class="col-md-8">
        <NavBar class="mt-5 ms-5" id="navbar" />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6">
        <PH />
      </div>
      <div class="col-md-6 mt-5">
        <img
          src="@/assets/images/productz.jpg"
          width="500"
          height="200"
          class="mt-5 rotate imgcss"
        />
      </div>
    </div>
    <div class="row">
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
  margin-left: 15%;
}
</style>
