<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-2 mt-2">
        <div
          class="img-container card-sty shadow-sm p-3 border-0 rounded-circle"
          style="max-width: 12rem"
        >
          <img src="@/assets/images/eggs.png" alt="" />
        </div>
        <p class="text-center mt-2 fw-bold">Eggs</p>
      </div>
      <div class="col-sm-12 col-md-2 mt-2">
        <div
          class="img-container card-sty shadow-sm p-3 border-0 rounded-circle"
          style="max-width: 12rem"
        >
          <img src="@/assets/images/meat.png" alt="" />
        </div>
        <p class="text-center mt-2 fw-bold">Meat</p>
      </div>
      <div class="col-sm-12 col-md-2 mt-2">
        <div
          class="img-container card-sty shadow-sm p-3 border-0 rounded-circle"
          style="max-width: 12rem"
        >
          <img src="@/assets/images/wheat-grains.png" alt="" />
        </div>
        <p class="text-center mt-2 fw-bold">Grain</p>
      </div>
      <div class="col-sm-12 col-md-2 mt-2">
        <div
          class="img-container card-sty shadow-sm p-3 border-0 rounded-circle"
          style="max-width: 12rem"
        >
          <img src="@/assets/images/wheat-sack.png" alt="" />
        </div>
        <p class="text-center mt-2 fw-bold">Grain Flour</p>
      </div>
      <div class="col-sm-12 col-md-2 mt-2">
        <div
          class="img-container card-sty shadow-sm p-3 border-0 rounded-circle"
          style="max-width: 12rem"
        >
          <img src="@/assets/images/pineapple.png" alt="" />
        </div>
        <p class="text-center mt-2 fw-bold">Pineapples</p>
      </div>
      <div class="col-sm-12 col-md-2">
        <div
          class="
            img-container
            card-sty
            shadow-sm
            p-3
            border-0
            rounded-circle
            mt-2
          "
          style="max-width: 12rem"
        >
          <img src="@/assets/images/organic-food.png" alt="" />
        </div>
        <p class="text-center mt-2 fw-bold">Organic Food</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-sty {
  background-color: #ebf2ee;
}
.col-md-2 {
  color: #37784f;
}

@media screen and (min-width: 400px){

  .img-container{
    margin-left: 2%;
  }

}
</style>
