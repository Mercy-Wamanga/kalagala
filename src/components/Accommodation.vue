<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-12 col-md-7">
        <h1 class="mt-5">Accommodation</h1>
        <p class="mt-3">
          Kalagala Offers both Cottages and Tents.Our cottages come in double or
          single. We also provide tents for camping. <br />
        </p>
        <Hr class="mt-5" />
      </div>
      <div class="col-sm-12 col-md-5">
        <img
          src="@/assets/images/cottages.jpg"
          width="280px"
          class="mb-2"
        /><br />
        <img src="@/assets/images/camping.jpg" />
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
