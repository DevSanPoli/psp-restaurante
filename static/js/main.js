document
  .getElementById("revervation")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const date = event.target.elements["date"].value;
    const time = event.target.elements["time"].value;
    const people = event.target.elements["people"].value;
    const name = event.target.elements["name"].value;
    const number = event.target.elements["number"].value;
    const observations = event.target.elements["observations"].value;

    document.getElementById("customer-name").textContent = name;
    document.getElementById("body-customer-name").textContent = name;
    document.getElementById("body-date").textContent = date;
    document.getElementById("body-time").textContent = time;
    document.getElementById("body-people").textContent = people;
    document.getElementById("body-number").textContent = number;
    document.getElementById("body-observations").textContent = observations;

    document.getElementById("modal").style.display = "block";
  });

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};
