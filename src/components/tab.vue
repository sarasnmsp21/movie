 <template>
  <b-container>
    <b-row>
      <b-col md="12" class="px-5">
        <b-row>
          <b-col>
            <b-row>
              <b-col
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
                      <b-button
                        size="sm"
                        class="my-2 my-sm-0 square-button text-dark img-fluid orange-color-change text-weight-bold"
                        type="submit"
                      >{{card.ratingtop}}</b-button>
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
                          <div class="votes-font release-date-color">76 Votes</div>
                        </b-col>
                        <b-col md="3">
                          <div>
                            <b-button
                              size="sm"
                              class="my-2 my-sm-0 margin-rating rating-border text-dark img-fluid rounded-circle orange-color-change text-weight-bold"
                              type="submit"
                            >{{card.rating}}</b-button>
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
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" class="mt-4">
          <span class="text-warning" slot="next-text">Next</span>

          <div slot="ellipsis-text">
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
          </div>
          <span slot="page" slot-scope="{ page, active }">
            <b v-if="active">{{ page }}</b>
            <i v-else>{{ page }}</i>
          </span>
        </b-pagination>
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
      currentPage: 3,
      cards: [
        {
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
        {
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
.contenthead-font-size {
  font-size: 10px;
}
.contenttext-border-right {
  border-right: 1px solid #80808029;
}
.contenttext-border-bottom {
  border-bottom: 1px solid #80808029;
  margin-left: -21px;
}
.square-button {
  float: right;
  margin-right: -20px;
  margin-top: -24px !important;
}
.card-body {
  background-color: #8080803b;
      padding-bottom: 7px;
}
.card-img-left {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.card {
  border-radius: 0;
}
.btn-sm,
.btn-group-sm > .btn {
  border-radius: 0;
}
.margin-rating {
  margin-top: 10px !important;
  font-size: 21px;
}
.timmer-color {
  font-size: 14px;
  color: #f57f09;
}
.svg-inline--fa.fa-w-18 {
  width: 0.6em;
  color: orange;
}
.votes-font {
  font-size: 13px;
}

.release-font-color {
  color: #808080;
}
.release-date-color {
  color: #000000b3;
}
.rating-border
{
  border: 2px solid white;
}
</style>

