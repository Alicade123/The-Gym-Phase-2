const umbrellaObject = () => {
  var umbrella = {
    color: "Pink",
    isOpen: false,
    open: function () {
      if (umbrella.isOpen === true) {
        return "The umbrella is already open";
      } else {
        umbrella.isOpen = true;
        return "The umbrella is opened by Alicade!";
      }
    },
    close: function () {
      if (umbrella.isOpen === false) {
        return "The umbrella is already closed!";
      } else {
        umbrella.isOpen = false;
        return "Alicade closed the umbrella!";
      }
    },
  };
  return umbrella.close();
};

console.log(umbrellaObject());
