document.addEventListener("DOMContentLoaded", () => {
  const newDate = new Date();
  const copyright = document.getElementById("copyright");
  copyright.textContent += newDate.getFullYear() + "LaslesVPN";
  console.log(copyright.textContent);
});
