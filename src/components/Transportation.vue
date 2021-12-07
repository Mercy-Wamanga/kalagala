<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-12 col-md-7">
        <h1 class="mt-5">Transportation Services</h1>
        <p class="mt-3">
          We offer transportation like tour vans and cars for hire throughout
          your trip.
        </p>
        <Hr class="mt-5" />
      </div>
      <div class="col-sm-12 col-md-5">
        <img
          src="@/assets/images/tour_transport.jpg"
          width="280px"
          class="mb-2"
        /><br />
        <img src="@/assets/images/tour_transportation_2.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Hr from "@/components/HrSmall.vue";
export default {
  components: {
    Hr,
  },
};
</script>

<style></style>
