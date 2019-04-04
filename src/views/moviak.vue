
<template>
  <div class="home">
    <moviak-heading></moviak-heading>
    <moviakmainnav></moviakmainnav>
    <moviaksection></moviaksection>
    <moviaktabp></moviaktabp>
   <footersection></footersection>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import moviakHeading from "@/components/Header.vue";
import moviakmainnav from "@/components/mainnav.vue";
import moviaksection from "@/components/section.vue";
import moviaktabp from "@/components/tabp.vue";
import footersection from "@/components/footer.vue";



export default {
  components: {
    moviakHeading,
    moviakmainnav,
    moviaksection,
    moviaktabp,
    footersection
  
  }
};
</script>
<style lang="scss">
.nav-tabs {
    border-bottom: none;
}
.nav-tabs .nav-link {
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>

