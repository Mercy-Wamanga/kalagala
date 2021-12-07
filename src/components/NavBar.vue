<template>
  <div class="container">
    <div class="col-sm-12 col-md-12">
      <div class="navbar">
        <nav class="navbar navbar-expand-sm navbar-light bg-transparent">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="@/assets/images/kala-logo.png"
                alt=""
                width="200"
                height="150"
                class="d-inline-block align-text-top"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse mt-5 w-75"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ml-auto mt-5 menu">
                <li class="nav-item active">
                  <router-link class="nav-link fw-bold" to="/"
                    >Home
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link fw-bold" to="/story"
                    >Story
                  </router-link>
                  <!-- <a class="nav-link fw-bold" href="#">Story</a> -->
                </li>
                <li class="nav-item">
                  <router-link class="nav-link fw-bold" to="/services"
                    >Services</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link fw-bold" to="/products"
                    >Agribusiness</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link fw-bold" to="/activities"
                    >Activities</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a> 
  </div>
</nav> -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.menu {
  float: right;
}
</style>
