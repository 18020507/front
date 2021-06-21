<template>
  <div class="container">
    <div class="header">
      <h2 style="color: white">BOOKING ONLINE</h2>
    </div>
    <div class="info">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        illo aut aliquid aperiam, praesentium tenetur voluptatum molestias ex,
        itaque mollitia minus maxime, id quod culpa fugit quibusdam in soluta.
        Suscipit!
      </p>
    </div>
    <br />
    <div class="info-down"><h2>Người/Ghế</h2></div>
    <div class="ticketbox">
      <div class="screen"></div>
      <div class="row"></div>
    </div>
    <div class="ticketbox-notice">
      <div class="iconlist">
        <div class="icon checked">Checked</div>
        <div class="icon occupied">Đã chọn</div>
        <div class="icon unavailable">Không thể chọn</div>
      </div>
      <div class="iconlist">
        <div class="icon zone-standard">Thường</div>
        <div class="icon zone-vipprime">VIP</div>
      </div>
    </div>
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
}
.info {
  background-color: #fff1ce;
}
.info-down {
  background-color: #bcbdc0;
  text-align: center;
  font-size: 20px;
}
.ticketbox {
  overflow-x: auto;
  text-align: center;
}
.screen {
  width: 100%;
  height: 45px;
  margin: 20px auto 40px;
  text-align: center;
  background: url(../assets/screen.png) no-repeat top center transparent;
  background-size: 100% auto;
}
.ticketbox-notice {
  overflow: hidden;
  text-align: center;
}
.iconlist {
  display: inline-block;
  min-width: 25%;
  vertical-align: top;
}
.icon {
  text-align: left;
  margin: 5px 0;
}
.icon.checked:before {
    background: #b11500;
}
.icon.occupied:before {
    background: #bbb;
}
.icon.unavailable:before {
    background: #bbb;
    content: "X";
    text-align: center;
    color: #fff;
}
.icon:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    margin: 0 5px 0 0;
}
.icon.zone-standard:before {
    border: 1px solid #01c73c;
}
.icon.zone-vipprime:before {
    border: 1px solid #f71708;
}
</style>