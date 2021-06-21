<template>
  <div class="container">
    <div class="header">
      <h2 style="color: white">Thanh Toán</h2>
    </div>
    <div class="content">
      <div class="paymentInfo">
        <div>Tên phim:</div>
        <div>Rạp</div>
        <div>Vị trí ghế:</div>
        <div>Suát chiếu:</div>
        <div>Tổng số tiền thanh toán:</div>
      </div>
    </div>
    <div class="footer">
      <h2 style="color: white">Hình thức thanh toán</h2>
    </div>
    <div class="content">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
        />
        <img src="../assets/visa (1).png" class="img-selection" />
        <label class="form-check-label" for="exampleRadios1"> ATM card </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        />
        <img src="../assets/visa (1).png" class="img-selection" />
        <label class="form-check-label" for="exampleRadios2">
          Thẻ quốc tế (Visa, Master, Amex, JCB)
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
        />
        <img src="../assets/visa (1).png" class="img-selection" />
        <label class="form-check-label" for="exampleRadios3"> Ví MoMo </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios4"
          value="option4"
        />
        <img src="../assets/visa (1).png" class="img-selection" />
        <label class="form-check-label" for="exampleRadios4"> ZaloPay </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios5"
          value="option5"
        />
        <img src="../assets/visa (1).png" class="img-selection" />
        <label class="form-check-label" for="exampleRadios5">
          ViettelPay
        </label>
      </div>
    </div>
    <div class="countdown">
      <h2 style="color: white">CountDown Clock</h2>
    </div>
    <div class="countdownClock">
      <circular-count-down-timer
        :initial-value="300"
        :size="200"
        :show-hour="false"
        :seconds-fill-color="'#00ffff66'"
        :minutes-fill-color="'#00ff0066'"
        :show-negatives="false"
        :seconds-stroke-color="'#f00'"
        :minutes-stroke-color="'#0ff'"
        
        class="item"
      ></circular-count-down-timer>
    </div>
    <hr>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  padding-top: 20px;
}
.header {
  background-color: black;
  text-align: center;
  height: 40px;
  margin-bottom: 10px;
}
.content {
  background-color: cornsilk;
}
.footer {
  background: black;
  text-align: center;
  height: 40pxs;
}
.img-selection {
  padding-right: 10px;
}
.countdown {
  background-color: black;
  text-align: center;
  height: 40px;
  margin-bottom: 10px;
}
.item {
  text-align: center;
  background-color: cornsilk;
}
</style>