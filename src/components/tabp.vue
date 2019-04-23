<template>
  <div class="pt-5 div-outline">
    <b-container>
      <b-tabs class="tab-font font-weight-bold ">
        <b-tab title="Comming Soon  /" active>
          <moviaktab></moviaktab>
        </b-tab>
        <b-tab title="Now Playing   /">
          <b-card-text>
            <moviaktab2></moviaktab2>
          </b-card-text>
        </b-tab>
        <b-tab title="Opening this week">
          <b-card-text>
            <moviaktab3></moviaktab3>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import moviaktab from "@/components/tab.vue";
import moviaktab2 from "@/components/tab2.vue";
import moviaktab3 from "@/components/tab3.vue";

export default {
  components: {
    moviaktab,
    moviaktab2,
    moviaktab3
  }
};
</script>
<style lang="scss">
.tab-font {
  font-size: 20px;
  color: black;
}
.nav-tabs {
  border-bottom: none;
  margin-left: 24px;
  font-size: 23px;
}
.nav-link.active {
  color: #fe7900 !important;
}
.nav-link {
  color: gray !important;
}
.div-outline {
  outline: none;
}
.tab-content > .active {
  display: block;
  outline: none !important;
}
.nav-link {
  display: block;
  padding: 0.3rem 1.2rem 1.3rem 0rem;
}
</style>
