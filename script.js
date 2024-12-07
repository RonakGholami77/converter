new Vue({
  el: "#app",
  data: {
    gb: null,
    mb: null,
    mm: null,
    cm: null,
    m: null,
  },
  watch: {
    gb: function (newVal) {
      this.mb = newVal * 1024;
    },
    mb: function (newVal) {
      this.gb = newVal / 1024;
    },
    mm: function (newVal) {
      this.cm = newVal / 10;
      this.m = newVal / 1000;
    },
    cm: function (newVal) {
      this.mm = newVal * 10;
      this.m = newVal / 100;
    },
    m: function (newVal) {
      this.mm = newVal * 1000;
      this.cm = newVal * 100;
    },
  },
});
