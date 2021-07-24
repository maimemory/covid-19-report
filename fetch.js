$(document).ready(function () {
  fetch("https://covid19.th-stat.com/json/covid19v2/getTodayCases.json").then(
    (result) => {
      console.log(result);
    //   const text = JSON.stringify(result);
    //   $("#info").append(text);
    return result.json();
    }
  )
  .then((data) => {
      console.log(data);
      const newCases = JSON.stringify(data.NewConfirmed);
      const newDeaths = JSON.stringify(data.NewDeaths);
      $("#info").append(newCases, "<br>", newDeaths);
  })

});
