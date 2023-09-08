<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-12 col-md-12"
        data-aos="fade-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <NavBar class="mt-5 ms-5 navbarposition" />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-sm-12 col-md-12">
        <AP />
      </div>
    </div>
    <HR />
    <div class="row">
      <div class="col-sm-12">
        <OF />
      </div>
    </div>
    <HR class="mt-3" />
    <div class="row">
      <div class="col-md-12">
        <ACC />
      </div>
    </div>
    <HR class="mt-3" />
    <div class="row" id="product">
      <div class="col-md-12">
        <TA />
        <Food class="mt-5" />
      </div>
      <div class="row">
        <div class="col-md-12">
          <TP class="mt-5" />
        </div>
      </div>
    </div>
    <div class="row">
      <Footer class="mt-5" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AP from "@/components/ActivitiesParagragh.vue";
import HR from "@/components/HorizontalLine.vue";
import OF from "@/components/OurOffers.vue";
import ACC from "@/components/Accommodation.vue";
import TA from "@/components/TouristActivities.vue";
import Food from "@/components/Food.vue";
import TP from "@/components/Transportation.vue";
import Footer from "@/components/FootBar.vue";
export default {
  name: "Activity",
  components: {
    NavBar,
    AP,
    HR,
    OF,
    ACC,
    TA,
    Food,
    TP,
    Footer,
  },
};
</script>

<style scoped>
/* div {
  border: 1px solid blue;
} */

/* .rotate {
  background-color: transparent; 
  transform: rotate(330deg);
} */
#product {
  margin-left: 15%;
}

 .navbarposition {
  float: right;
} 
</style>
