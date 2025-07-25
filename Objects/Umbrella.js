const umbrellaObject = () => {
  var umbrella = {
    color: "Pink",
    isOpen: true,
    open: function () {
      if (umbrella.isOpen === true) {
        return "The umbrella is already open";
      } else {
        umbrella.isOpen = true;
        return "The umbrella is opened by Alicade!";
      }
    },
  };
  return umbrella.open();
};

console.log(umbrellaObject());
