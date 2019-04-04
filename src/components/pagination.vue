<template>
  <div class="overflow-auto">
    <moviaktab></moviaktab>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</template>

<script>
import moviaktab from "@/components/tab.vue";
export default {
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 1
    };
  },
  components: {
    moviaktab
  }
};
</script>