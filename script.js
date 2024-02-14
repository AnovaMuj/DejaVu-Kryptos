const downloadFile = (file) => {
  const element = document.createElement("a");
  element.setAttribute("href", file);
  element.setAttribute("download", file);

  element.style.display = "none";

  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
};

downloadFile("video.mp4");

var myElement = document.body;
myElement.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
