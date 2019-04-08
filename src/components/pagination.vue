<template>
  <div class="overflow-auto">
    <p class="mt-3">Current Page: {{ currentPage }}</p>
       <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>

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
  
  }
};
</script>