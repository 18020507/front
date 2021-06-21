<template>
  <div class="container">
    <h1>Nội dung phim</h1>
    <hr class="title" />
    <div class="row">
      <div class="col-sm-2"><img src="../assets/bantaydietquy.png" /></div>
      <div class="col-sm-9">
        <!-- <h1>BÀN TAY DIỆT QUỶ</h1> -->
        <h1>{{ movie_info[0].movieName }}</h1>
        <hr />
        <!-- <div><b>Đạo diễn: </b>Kim Joo Hwan</div> -->
        <div><b>Đạo diễn: </b>{{movie_info[0].producer}}</div>
        <!-- <div>
          <b>Diễn viên: </b>Park Seo Joon, Ahn Sung Ki, Woo Do Hwan, Choi Woo
          Sik…
        </div> -->
        <!-- <div><b>Thể loại: </b>Hành Động, Kinh Dị</div> -->
        <div><b>Thể loại: </b>Hành Động, Kinh Dị</div>
        <!-- <div><b>Thời lương: </b>128 phút</div> -->
        <div><b>Thời lượng: </b>{{movie_info[0].movieTime}} phút</div>
        <!-- <div><b>Khởi chiếu: </b>09/04/2021</div> -->
        <div><b>Khởi chiếu: </b>{{movie_info[0].dayRelease | moment("DD-MM-YYYY")}}</div>
        <!-- <div><b>Ngôn ngữ: </b>Tiếng Hàn - Phụ đề tiếng Việt</div> -->
        <div><b>Ngôn ngữ: </b>{{movie_info[0].movieLanguage}}</div>
        <!-- <a class="btn btn-danger" href="/buyticket" role="button"><b>Mua vé</b></a> -->

        <div>
          <b-button v-b-modal.modal-1><b>Mua vé</b></b-button>

          <b-modal id="modal-1" title="BootstrapVue" hide-footer>
            <p class="my-4">Chọn suất chiếu!</p>
            <FunctionalCalendar
              v-model="calendarData"
              v-on:changedMonth="changedMonth"
              v-on:changedYear="changedYear"
              :sundayStart="true"
              :date-format="'dd/mm/yyyy'"
              :is-date-range="true"
              :is-date-picker="true"
            ></FunctionalCalendar>

            <div class="slot">
              <p>Rạp 2D</p>
              <div class="film-slot">
                <button class="film-slot-item">15:00 PM</button>
                <button class="film-slot-item">17:30 PM</button>
                <button class="film-slot-item">19:00 PM</button>
                <button class="film-slot-item">15:00 PM</button>
                <button class="film-slot-item">17:30 PM</button>
                <button class="film-slot-item">19:00 PM</button>
                <button class="film-slot-item">15:00 PM</button>
                <button class="film-slot-item">17:30 PM</button>
                <button class="film-slot-item">19:00 PM</button>
                <button class="film-slot-item">15:00 PM</button>
                <button class="film-slot-item">17:30 PM</button>
                <button class="film-slot-item">19:00 PM</button>
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </div>
    <div class="shortInfo">
      <h3>Giới thiệu phim</h3>
      <p>
        {{movie_info[0].shortDescription}}
      </p>
    </div>
    <hr class="title" />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
import { FunctionalCalendar } from "vue-functional-calendar";
export default {
  components: {
    FunctionalCalendar,
  },
  data() {
    return {
      calendarData: {},
      movie_info: undefined,
    };
  },
  mounted() {
    function getIDfromURL() {
      return window.location.pathname.split("/")[2];
    }
    var id = getIDfromURL();
    id = parseInt(id);

    Vue.axios
    .get("/api/movieid", {
      params: { 
        id 
      },
    })
    .then((response) => {
      this.movie_info = response.data;
      console.warn(this.movie_info);
    })
    // .catch((err) => console.warn(err));
  },
};
</script>

<style scoped>
.slot {
  margin-top: 20px;
}
hr.title {
  border: 2px solid red;
}

.film-slot {
  display: grid;
  justify-content: space-around;
  grid-template-columns: auto auto auto auto;
  grid-row-gap: 50px;
}
</style>