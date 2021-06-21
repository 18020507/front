<template>
  <div class="container">
    <div class="row">
      <div class="column1">
        <h1><b>Phim Đang Chiếu</b></h1>
      </div>
      <div class="column2">
        <!-- <div class="dropdown">
          <form method="post" @submit.prevent="onSubmit" class="form-cinema">
            <select aria-label="Default select example">
              <option>Tất cả rạp</option>
              <option v-for="item in list_cinema" v-bind:key="item.id">
                {{ item.cinemaName }}
              </option>
            </select>
            <button type="submit" value=item.cinemaName>Chọn</button>
          </form>
        </div> -->
      </div>
    </div>

    <hr class="title" />

    <div class="row">
      <div
        class="col-md-3 col-sm-6"
        v-for="item in list_film"
        v-bind:key="item.id"
      >
        <div class="product-grid">
          <div class="product-image">
            <img src="../assets/bantaydietquy.png" />
          </div>
          <div class="product-content">
            <h5 class="title">
              <router-link
                :to="{ name: 'movieinfo', params: { id: item.id } }"
                style="text-decoration: none"
              >
                {{ item.movieName }}
              </router-link>
            </h5>
            <div class="info"><b>Thể loại: </b>{{ item.movieType }}</div>
            <div class="info"><b>Thời lượng: </b>{{ item.movieTime }} phút</div>
            <div class="info">
              <b>Khởi chiếu: </b>{{ item.dayRelease | moment("DD-MM-YYYY") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="title" />
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      list_film: undefined,
      list_cinema: undefined,
    };
  },
  // methods: {
  //   onSubmit() {
  //     axios.post("http://localhost:3030/api/movieSelected", {
  //       headers: {
  //         "Content-type": "application/x-www-form-urlencoded",
  //       },
        
  //     });
  //   },
  // },
  mounted() {
    Vue.axios.get("/api/movie").then((response) => {
      this.list_film = response.data;
      console.warn(this.list_film);
    });

    // Vue.axios.get("/api/cinema").then((response) => {
    //   this.list_cinema = response.data;
    //   console.warn(this.list_cinema);
    // });
  },
};
</script>

<style scoped>
table,
td,
th {
  border: 1px solid black;
}
.column1 {
  width: 75%;
}
.column2 {
  width: 20%;
  margin-top: 10px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.form-cinema {
  display: flex;
}
.form-cinema > button {
  margin-left: 10px;
}
hr.title {
  border: 2px solid red;
}
.product-grid {
  font-family: "Roboto", sans-serif;
  position: relative;
}
.product-grid .product-image {
  overflow: hidden;
  position: relative;
}
.product-grid .product-image img {
  width: 90%;
  height: auto;
}
.product-grid .product-content {
  padding: 12px 0;
}
.product-grid .info span {
  color: #333;
  text-decoration: line-through;
  margin-right: 3px;
}
</style>