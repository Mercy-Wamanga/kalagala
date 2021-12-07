<template>
  <div class="container">
    <div class="row mt-5" id="row-cards">
      <h1 class="mt-5">Kalagala's Finest Delicacies</h1>
      <p class="mt-3">
        Enjoy the best of uganda's finest meals. We offer breakfast ,lunch and
        dinner
      </p>
      <Hr />
      <div class="col-sm-12 col-md-4">
        <div class="card mt-3 p-2" style="width: 16rem">
          <img
            src="@/assets/images/breakfast.jpg"
            class="card-img-top"
            height="250"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Breakfast</h5>
            <p class="card-text">Tasty morning breakfast</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card mt-3 p-2" style="width: 16rem">
          <img
            src="@/assets/images/lunch.jpg"
            class="card-img-top"
            height="250"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Lunch</h5>
            <p class="card-text">Rich lunch menu.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card mt-3 p-2" style="width: 16rem">
          <img
            src="@/assets/images/dinner.jpg"
            class="card-img-top"
            height="250"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Dinner</h5>
            <p class="card-text">Affordable dinner combo</p>
          </div>
        </div>
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
