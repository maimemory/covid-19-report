$(document).ready(function () {
  fetch("https://covid19.th-stat.com/json/covid19v2/getTodayCases.json")
    .then((result) => {
      console.log(result);
      return result.json();
    })
    .then((data) => {
      console.log(data);
      const newCases = JSON.stringify(data.NewConfirmed);
      const newDeaths = JSON.stringify(data.NewDeaths);
      const totalCases = JSON.stringify(data.Confirmed);
      const totalDeaths = JSON.stringify(data.Deaths);
      $("#newCase").text(newCases);
      $("#newDeath").text(newDeaths);
      $("#totalCase").text(totalCases);
      $("#totalDeath").text(totalDeaths);
      $("#updateDate").text(data.UpdateDate);
    });
});


let toggle = document.querySelector("#toggle");

const darkMode = () => {
  if(toggle.checked == true){
    $("p").css("color", "#ffffff");
    $("body").css("background-color", "rgb(32, 32, 32)");
  }
  else{
    $("p").css("color", "#000000");
    $("body").css("background-color", "#ffffff");
  }
};
