const video = {
  title: "a-javascript",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title + ": " + tag);
    }, this);
  },
};
video.showTags();

console.log("\n");

const videoArrowFn = {
  title: "a-javascript",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title + ": " + tag);
    });
  },
};
videoArrowFn.showTags();
