<template>
  <b-container fluid>
    <b-row>
      <b-col md="12" class="px-5 mx-auto">
        <b-row>
          <b-col md="10" class="mx-auto p-0">
            <b-row>
              <div>
                <b-navbar toggleable="lg" type="dark" variant="white">
                  <b-navbar-brand href="#" class="text-dark"
                    ><img src="../assets/images/header.jpg"
                  /></b-navbar-brand>

                  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                  <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                      <b-form-input
                        size="sm"
                        class="mr-sm-2 ml-4"
                        placeholder="Movie search..."
                      ></b-form-input>
                      <button
                        size="sm"
                        class="my-2 my-sm-0 text-dark img-fluid left-to-go rounded-circle text-weight-bold orange-color-change"
                        type="submit"
                      >
                        Go
                      </button>
                    </b-navbar-nav>
                    <div class="mx-auto p-0  mr-auto">
                      <b-navbar-nav
                        class="mx-auto font-weight-bold heading-title-font text-right"
                      >
                        <div href="#" class="p-2 text-dark">HOME</div>
                        <div href="#" class="p-2">MOVIE LAYOUT</div>
                        <div href="#" class="p-2">PAGE SINGLE</div>
                        <div href="#" class="p-2">SHOWTIME</div>
                        <div href="#" class="p-2 pr-0">TOP RATED</div>
                      </b-navbar-nav>
                    </div>
                  </b-collapse>
                </b-navbar>
              </div>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<style lang="scss">
@import "../assets/scss/mainnav.scss";
</style>
