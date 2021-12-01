<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link fw-bold" to="/">Home </router-link>
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
            <a class="nav-link fw-bold" href="#">Activities</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
