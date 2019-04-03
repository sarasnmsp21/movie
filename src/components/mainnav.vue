<template>
<b-container>
    <b-row>
        <b-col md="12" class="p-0 px-5">
<div >
  <b-navbar toggleable="lg" type="dark" variant="white" class="p-0">
    <b-navbar-brand href="#" class="text-dark">
        Moviak.com</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Movie search..."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 text-dark img-fluid rounded-circle btn-secondary text-weight-bold" type="submit">Go</b-button>
      </b-navbar-nav>
      <b-navbar-nav class=" mx-auto p-2 font-weight-bold heading-title-font text-right">
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
.form-control-sm {
    border-radius: 1.2rem;
}
.navbar-dark .navbar-nav .nav-link  {
    color: #020202;
}
.btn-secondary {
    color: #fff !important;
    background-color: #f58008;
    border: none;
}
.form-control-sm{
border: 2px solid #ced4da;
}
.heading-title-font
{
        font-size: 12px;
}

</style>
