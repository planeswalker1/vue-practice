// make a button
// alternate the text from E TO A


let app = new Vue({
  el: '.app',
  data: {
    message: 'E',
    letters: ["E","A"],
    count: 0
  },

  methods: {
    alternateText: function () {
      if (this.count >= 1) {
        this.count = 0;
      } else {
        this.count += 1;
      }
      this.message = this.letters[this.count];
    }
  }
});
