<template>
  <div class="story">
    <span class="leaf-up"
      ><img src="@/assets/images/leaf.png" alt="" srcset="" class="rotate"
    /></span>
    <h1>Our Story ....</h1>

    <br />
    <Hr />
    <p class="text-start mt-5">
      In 1977 Idi Amin Dada's hench men arrested Frank Geofrey Nkuyahaga at
      Ripons falls hotel, a hotel he run with a business partner. False
      accusations were fabricated against this Oil Sales man.
    </p>
    <Hr />
    <p class="text-start mt-5">
      But God delivered him from the death messenger as the Embassy of France in
      Uganda acting on behalf of the United States of America lobbied for his
      release. The American Embassy had closed in Uganda because of the regime
      and since Mister Frank worked for a US oil company Exxon oil trading as
      Esso Standard limited, pressure was put on the regime for Frank's release.
    </p>
    <Hr />
    <p class="text-start mt-5">
      The regime succumd something very rare for a blood thirty regime clearly
      showing the Hand of God on this man and his family. To everyone's supprise
      Mister Frank, His wife and young family did not flee to exile but fled
      further into rural Uganda to Kalagala in Kayunga District by the River
      Nile. A place that became a santuary, refuge and fortress prepared by the
      LORD Himself for this young Family.
    </p>
    <Hr />
    <p class="text-start mt-5">
      The Young oil man bought a piece of land by the Nile near Kalagala falls
      and Kalagala Estates limited was birthed. A sysmbol of ressurection,
      safety, deliverance.....
    </p>
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
.leaf-up {
  margin-right: 35%;
}
.leaf-down {
  margin-left: 40%;
}

.rotate {
  /* background-color: transparent; */
  transform: rotate(90deg);
}

@media screen and (min-width: 400px){
  p{
    padding:15px;
  }
  
}
</style>
