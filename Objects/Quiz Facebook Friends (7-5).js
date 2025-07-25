let facebookProfile = {
  name: "Alicade",
  friends: 5000,
  messages: [
    "Create an object called facebookProfile. The object should have 3 properties:",
    "Alicade is the sophsicated boy",
    "Alicade's hobby is movie",
  ],
  postMessage: function (message) {
    this.messages.push(message);
    return this.messages;
  },
  deleteMessage: function (index) {
    this.messages.splice(index, 1);
    return this.messages;
  },
  addFriend: function () {
    return (this.friends += 1);
  },

  removeFriend: function () {
    return (this.friends -= 1);
  },
};
console.log(facebookProfile.postMessage("Alicade is the member of the Gym"));
console.log(facebookProfile.deleteMessage(0));
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());
