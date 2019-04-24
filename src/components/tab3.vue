<template>
  <b-container>
    <b-col md="12">
      <b-row>
        <b-col md="6" class="" v-for="card in upcoming" v-bind:key="card.index">
          <b-card :img-src="card.img" img-left class="mb-4">
            <div class="d-flex">
              <span class="picname-head-font">{{ card.title }}</span>
              <span class="ml-auto">
                <div class="bg-orange sm-div-font">
                  {{ card.id }}
                </div>
              </span>
            </div>
            <div class="text-left timmer-color">
              <span class="timer-lineheight ">
                <!-- <span class="clock-fontsize">
                  <font-awesome-icon :icon="['far', 'clock']" />
                </span> -->
                <span>Popularity:-</span>
                {{ card.popularity }}
              </span>
            </div>

            <div class="d-flex contenthead-font-size mb-3">
              <span
                class="contenttext-border-right text-center movie-info-space pr-3 "
              >
                <div class=" movie-heading-font release-font-color">
                  <span>Release:</span>
                </div>
                <div class=" movie-text-font release-date-color">
                  {{ card.release_date }}
                </div>
              </span>
              <span
                class="contenttext-border-right text-center  movie-info-space pr-3 pl-3"
              >
                <div class="movie-heading-font  release-font-color">
                  <span>Genre:</span>
                </div>
                <div class=" movie-text-font release-font-color">
                  {{ card.id }}
                </div>
              </span>
              <span class="text-center  movie-info-space pl-3">
                <div class="movie-heading-font  release-font-color">
                  <span>Language:</span>
                </div>
                <div class=" movie-text-font release-date-color">
                  {{ card.original_language }}
                </div>
              </span>
            </div>
            <div class="contenttext-border-bottom"></div>

            <div class="d-flex mt-3">
              <span class="mr-2">
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star-half-alt']" />
                <div
                  class="votes-font votes-linehegiht  release-date-color text-left"
                >
                  {{ card.vote_count }} Votes
                </div>
              </span>
              <div
                class="margin-rating button-hover-outline rating-border review-point-font img-fluid rounded-circle bg-orange text-weight-bold"
              >
                {{ card.vote_average }}
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-container>
</template>
<script>
import images1 from "../assets/images/img1.jpg";
import images2 from "../assets/images/img2.jpg";
import images3 from "../assets/images/img3.jpg";
import images4 from "../assets/images/img4.jpg";
import images5 from "../assets/images/img5.jpg";
import images6 from "../assets/images/img6.jpg";
import images7 from "../assets/images/img7.jpg";
import images8 from "../assets/images/img8.jpg";
import axios from "axios";
export default {
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 1,
      cards: [
        {
          id: 1,
          img: images1,
          heading: "The Girl on The Train",
          timer: "02 hours 50 minutes",
          contenthead1: "Release:",
          contenttext1: "Aug31,2017",
          contenthead2: "Genre:",
          contenttext2: "Drama",
          contenthead3: "Language:",
          contenttext3: "English",
          rating: "4.4",
          ratingtop: "G"
        },
        {
          id: 2,
          img: images2,
          heading: "The Magnificent Seven",
          timer: "02 hours 50 minutes",
          contenthead1: "Release:",
          contenttext1: "Aug31,2017",
          contenthead2: "Genre:",
          contenttext2: "Drama",
          contenthead3: "Language:",
          contenttext3: "English",
          rating: "4.4",
          ratingtop: "G"
        },
        {
          id: 3,
          img: images3,
          heading: "Free State of Jones",
          timer: "02 hours 50 minutes",
          contenthead1: "Release:",
          contenttext1: "Aug31,2017",
          contenthead2: "Genre:",
          contenttext2: "Drama",
          contenthead3: "Language:",
          contenttext3: "English",
          rating: "4.4",
          ratingtop: "G"
        },
        {
          id: 4,
          img: images4,
          heading: "Sausage Party",
          timer: "02 hours 50 minutes",
          contenthead1: "Release:",
          contenttext1: "Aug31,2017",
          contenthead2: "Genre:",
          contenttext2: "Drama",
          contenthead3: "Language:",
          contenttext3: "English",
          rating: "4.4",
          ratingtop: "G"
        },
        {
          id: 5,
          img: images5,
          heading: "Kubo and the Two ",
          timer: "01 hours 20 minutes",
          contenthead1: "Release:",
          contenttext1: "Aug31,2017",
          contenthead2: "Genre:",
          contenttext2: "Drama",
          contenthead3: "Language:",
          contenttext3: "English",
          rating: "4.2",
          ratingtop: "PG"
        },
        {
          id: 6,
          img: images6,
          heading: "Bad Moms",
          timer: "02 hours 40 minutes",
          contenthead1: "Release:",
          contenttext1: "Aug31,2017",
          contenthead2: "Genre:",
          contenttext2: "Drama",
          contenthead3: "Language:",
          contenttext3: "English",
          rating: "4.5",
          ratingtop: "G"
        },
        {
          img: images7,
          heading: "The Sleeping Beauty - Australia",
          timer: "02 hours 00 minutes",
          contenthead1: "Release:",
          contenttext1: "Aug31,2017",
          contenthead2: "Genre:",
          contenttext2: "Drama",
          contenthead3: "Language:",
          contenttext3: "English",
          rating: "4.4",
          ratingtop: "PG"
        },
        {
          img: images8,
          heading: "The Girl With All The Gifts",
          timer: "02 hours 30 minutes",
          contenthead1: "Release:",
          contenttext1: "Aug31,2017",
          contenthead2: "Genre:",
          contenttext2: "Drama",
          contenthead3: "Language:",
          contenttext3: "English",
          rating: "4.2",
          ratingtop: "G"
        }
      ],
      upcoming: []
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=4ac5c40e76b9008b1d49d0644746d7bb"
      )
      .then(data => {
        console.log("movieapi", data);
        console.log("data.data", data.data);
        console.log("results", data.data.results);
        this.upcoming = data.data.results;
      });
  }
};
</script>
<style lang="scss">
@import "../assets/scss/tab.scss";
</style>
