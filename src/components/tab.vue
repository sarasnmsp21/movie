 <template>
  <b-container>
    <b-row>
      <b-col md="12" class="px-5">
        <b-row>
          <b-col>
            <b-row>
              <b-col  v-model="currentPage"
      :total-rows="10"
      :per-page="4"
      aria-controls="movie-card"
                md="6"
                varient="secondary"
                class="p-0 m-0"
                v-for="card in cards"
                v-bind:key="card.index"
              >
                <div class="px-2">
                  <b-card :img-src="card.img" img-alt="Card image" img-left class="mb-3">
                    <b-card-text class="text-left font-weight-bold">
                      <div>{{card.heading}}</div>
                      <button
                        size="sm"
                        class="my-2 my-sm-0 square-button button-hover-outline text-dark img-fluid orange-color-change text-weight-bold"
                        type="submit"
                      >{{card.ratingtop}}</button>
                    </b-card-text>
                    <b-card-text class="text-left timmer-color">
                      <div>
                        <font-awesome-icon :icon="['far','clock']"/>
                        {{card.timer}}
                      </div>
                    </b-card-text>
                    <b-card-text class="text-left">
                      <b-row>
                        <b-col md="12" class="contenthead-font-size">
                          <b-col md="8">
                            <b-row>
                              <b-col
                                md="4"
                                class="contenttext-border-right p-0 text-center release-font-color"
                              >{{card.contenthead1}}</b-col>
                              <b-col
                                md="4"
                                class="contenttext-border-right p-0 text-center release-font-color"
                              >{{card.contenthead2}}</b-col>
                              <b-col
                                md="4"
                                class="text-center p-0 release-font-color"
                              >{{card.contenthead3}}</b-col>
                            </b-row>
                          </b-col>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col md="12" class="contenthead-font-size">
                          <b-col md="8">
                            <b-row>
                              <b-col
                                md="4"
                                class="contenttext-border-right p-0 text-center release-date-color"
                              >{{card.contenttext1}}</b-col>
                              <b-col
                                md="4"
                                class="contenttext-border-right p-0 text-center release-font-color"
                              >{{card.contenttext2}}</b-col>
                              <b-col
                                md="4"
                                class="text-center p-0 release-date-color"
                              >{{card.contenttext3}}</b-col>
                            </b-row>
                          </b-col>
                        </b-col>
                      </b-row>
                    </b-card-text>
                    <div class="contenttext-border-bottom pl-0"></div>
                    <div>
                      <b-row>
                        <b-col md="3">
                          <div>
                            <font-awesome-icon :icon="['fas','star']"/>
                            <font-awesome-icon :icon="['fas','star']"/>
                            <font-awesome-icon :icon="['fas','star']"/>
                            <font-awesome-icon :icon="['fas','star']"/>
                          </div>
                          <div class="votes-font  release-date-color">76 Votes</div>
                        </b-col>
                        <b-col md="3">
                          <div>
                            <button
                              size="sm"
                              class="my-2 my-sm-0 margin-rating button-hover-outline rating-border text-dark img-fluid rounded-circle orange-color-change text-weight-bold"
                              type="submit"
                            >{{card.rating}}</button>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </b-card>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <div class="px-auto mx-auto">
         <b-pagination
      v-model="currentPage"
      :total-rows="10"
      :per-page="4"
      aria-controls="movie-card"
    ></b-pagination>
      </div>
    </b-row>
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
export default {
  data() {
    return {
      rows: 100,
       perPage: 1,
      currentPage: 1,
      cards: [
        {id:1,
          img: images1,
          heading: "The Girl on Train",
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
        {id:2,
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
        {id:3,
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
        {id:4,
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
        {id:5,
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
        {id:6,
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
        },



         {id:2,
          img: images1,
          heading: "The Girl on Train",
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


        {id:3,
          img: images1,
          heading: "The Girl on Train",
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



        {id:4,
          img: images1,
          heading: "The Girl on Train",
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
       



        {id:5,
          img: images1,
          heading: "The Girl on Train",
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
       
      ]
    };
    // return {
    //     rows: 100,
    //     perPage: 6,
    //     currentPage: 1
    //   }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/tab.scss";

</style>

