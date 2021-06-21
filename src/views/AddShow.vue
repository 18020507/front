<template>
  <div class="container">
    <div class="header">
      <h1>Đăng ký xuất chiếu</h1>
    </div>
    <br />

    <div class="form-container">
      <form class="form-header" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="">Chọn rạp phim</label>
          <select class="form-cinema" v-model="selected">
            <option
              v-for="item in list_cinema"
              v-bind:key="item.id"
              v-bind:value="{ id: item.id }"
            >
              {{ item.cinemaName }}
            </option>
          </select>
          <button
            type="submit"
            class="btn btn-primary text-center"
            id="submit-cinema"
          >
            Chọn
          </button>
        </div>
      </form>
    </div>

    <div class="form-container">
      <form @submit.prevent="onSubmitForm">
        <div class="form-group">
          <label for="start">Giờ Bắt Đầu</label>
          <input
            type="time"
            class="form-control"
            id="start"
            placeholder="Nhập giờ bắt đầu"
            v-model="start"
          />
        </div>
        <h1>{{ start }}</h1>
        <div class="form-group">
          <label for="end">Giờ Kết Thúc</label>
          <input type="time" class="form-control" id="end" v-model="end" />
        </div>
        <h1>{{ end }}</h1>
        <div class="form-group">
          <label for="day_release">Ngày chiếu</label>
          <input
            type="date"
            class="form-control"
            id="day_release"
            v-model="day_release"
          />
        </div>
        <h1>{{ day_release }}</h1>
        <div class="form-group">
          <label for="">Chọn Phim</label>
          <select class="form-movie" v-model="movie_selected">
            <option v-for="item in list_movie" v-bind:key="item.id">
              {{ item.movieName }}
            </option>
          </select>
        </div>
        <h1>{{ movie_selected }}</h1>
        <div class="form-group">
          <label for="">Chọn phòng chiếu</label>
          <select class="form-room" v-model="movie_room">
            <option v-for="item in list_room" v-bind:key="item.id" v-bind:value="item.id">
              {{ item.movieName }}
            </option>
          </select>
        </div>
        <h1>{{ movie_room }}</h1>
        <div class="form-group">
          <label for="movie_type">Định dạng phim</label>
          <input
            type="text"
            class="form-control"
            id="movie_type"
            placeholder="Nhập định dạng phim"
            v-model="movie_format"
          />
        </div>
        <h1>{{ movie_format }}</h1>
        <div class="text-center">
          <button type="submit" class="btn btn-primary text-center">
            Submit
          </button>
        </div>
      </form>
    </div>
    <hr class="footer" />
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      list_cinema: undefined,
      list_movie: undefined,
      selected: "",
      list_room: undefined,
      start: "",
      end: "",
      day_release: "",
      movie_format: "",
      movie_selected: "",
      movie_room: "",
    };
  },
  methods: {
    onSubmit() {
      var movieName = this.selected;
      var str = Object.keys(movieName).map((key) => [
        Number(key),
        movieName[key],
      ]);
      var data = str[0][1];
      console.log(data);
      Vue.axios
        .get("/api/movieSelected", {
          params: {
            data,
          },
        })
        // .then((response) => response.status)
        .then((response) => {
          this.list_room = response.data;
        })
        .catch((err) => console.warn(err));
    },
    onSubmitForm() {
      var start = this.start;
      var end = this.end;
      var day_release = this.day_release;
      var movie_selected = this.movie_selected;
      var movie_room = this.movie_room;
      var movie_format = this.movie_format;
      Vue.axios
        .post("/api/createShow", {
          start,
          end,
          day_release,
          movie_selected,
          movie_room,
          movie_format,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    Vue.axios.get("/api/cinema").then((response) => {
      this.list_cinema = response.data;
      console.warn(this.list_cinema);
    });
    Vue.axios.get("/api/movieManager").then((response) => {
      this.list_movie = response.data;
      console.warn(this.list_movie);
    });
  },
};
</script>

<style scoped>
.header > h1 {
  text-align: center;
}
#submit-cinema {
  margin-left: 5px;
}
.form-container {
  width: 400px;
  margin-left: 450px;
  border: 1px solid;
  padding: 10px;
  background: linear-gradient(to right, #00aaff, #00ff6c);
}
.form-cinema {
  margin-left: 10px;
  width: 190px;
}
.form-movie {
  margin-left: 10px;
  width: 290px;
}
.form-room {
  margin-left: 10px;
  width: 237px;
}
.footer {
  border: 2px solid red;
}
</style>