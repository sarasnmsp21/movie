
<template>
  <div class="home">
    <moviak-heading></moviak-heading>
    <moviakmainnav></moviakmainnav>
    <moviaksection></moviaksection>
    <moviaktab></moviaktab>
    <moviaktabp></moviaktabp>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import moviakHeading from "@/components/Header.vue";
import moviakmainnav from "@/components/mainnav.vue";
import moviaksection from "@/components/section.vue";
import moviaktab from "@/components/tab.vue";
import moviaktabp from "@/components/tabp.vue";


export default {
  components: {
    moviakHeading,
    moviakmainnav,
    moviaksection,
    moviaktab,
    moviaktabp
  
  }
};
</script>
