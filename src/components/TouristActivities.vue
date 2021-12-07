<template>
  <div class="container">
    <div class="row mt-5" id="row-cards">
      <h1 class="mt-5">Tourist Activities</h1>
      <p class="mt-3">
        Kalagala has a number of exciting activities for tourists. <br />These
        include hiking, water rafting,bird watching and many more others
      </p>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-up-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <h4 class="mt-5">Water Rafting</h4>
        <p>
          Enjoy our exciting water rafting activity with family and friends.
        </p>
        <Hr />
      </div>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-up-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <div class="img-1 mt-5">
          <img src="@/assets/images/water_rafting.jpg" alt="" />
        </div>
      </div>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-up-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <div class="img-1">
          <img src="@/assets/images/bird_watching.jpg" alt="" />
        </div>
      </div>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-up-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <h4>Bird Watching</h4>
        <p>
          Enjoy Ugandan's pride. Beautiful birds like the crested crane,bee
          eater ,Trogon and many more others
        </p>
        <Hr />
      </div>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-up-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <h4>Hiking</h4>
        <p>
          Take vigorous hikes at the kalagala estates. Enjoy the view and fresh
          air of the beautiful hills of Kalagala.
        </p>
        <Hr />
      </div>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-up-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <div class="img-1">
          <img src="@/assets/images/hiking.jpg" alt="" />
        </div>
      </div>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-up-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <div class="img-1">
          <img src="@/assets/images/farm-tour.jpg" alt="" />
        </div>
      </div>
      <div
        class="col-md-6 mt-5"
        data-aos="fade-up-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <h4 class="mt-5">Farm Tour</h4>
        <p>
          Take a stroll through the kalagala farm. Learn more about organic
          farming processes and best practices.
        </p>
        <Hr />
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

<style scoped>
#row-cards {
  max-width: 75%;
}
/* div {
  border: 1px solid blue;
} */
/* 
.img-1 {
  width: 368px;
  height: 260px;
} */
</style>
