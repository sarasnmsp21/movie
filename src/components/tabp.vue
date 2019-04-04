<template>
  <div class="pt-5">
    <b-container>
        <b-row>
            <b-col >
      <b-tabs class="tab-font ">
        <b-tab title="Comming Soon  /" active>
          <moviaktab></moviaktab>
        </b-tab>
        <b-tab title="Now Playing   /">
          <b-card-text>
            <moviaktab></moviaktab>
          </b-card-text>
        </b-tab>
        <b-tab title="Opening this Week">
          <b-card-text>
            <moviaktab></moviaktab>
          </b-card-text>
        </b-tab>
      </b-tabs>
      </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import moviaktab from "@/components/tab.vue";

export default {
  components: {
    moviaktab
  }
};
</script>
<style lang="scss">
.tab-font {
  font-size: 20px;
  color: black;
}
</style>

