<template>
  <div class="">
    <!-- Use text in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        perPage: 8,
        currentPage: 1
      }
    }
  }
</script>