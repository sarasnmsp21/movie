<template>
<b-container>
    <b-row>
        <b-col md="10" class="p-0 mx-auto">
<div >
  <b-navbar toggleable="lg" type="dark" variant="white" class="p-0">
    <b-navbar-brand href="#" class="text-dark">
        Moviak.com</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Movie search..."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 text-dark img-fluid rounded-circle  text-weight-bold orange-color-change" type="submit">Go</b-button>
      </b-navbar-nav>
      <b-navbar-nav class=" mx-auto p-2  font-weight-bold heading-title-font text-right">
          <b-nav-item href="#" class="p-2 ">HOME</b-nav-item>
          <b-nav-item href="#" class="p-2 ">MOVIE LAYOUT</b-nav-item>
          <b-nav-item href="#" class="p-2 ">PAGE SINGLE</b-nav-item>
          <b-nav-item href="#" class="p-2 ">SHOWTIME</b-nav-item>
          <b-nav-item href="#" class="p-2 ">TOP RATED</b-nav-item>
          </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</b-col>
</b-row>
</b-container>
</template>
<style lang="scss">
@import "../assets/scss/mainnav.scss";
</style>
