function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let LosAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = LosAngelesTime.format("dddd Do YYYY");

    losAngelesTimeElement.innerHTML = LosAngelesTime.format(
      "h:m:ss [<small>]A[</small>]"
    );
  }

  //sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("dddd Do YYYY");

    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:m:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function showTime(event) {
  let selectCity = event.target.value;
  let cityName = selectCity.split("/")[1].replace("_", " ");

  let cityTime = moment().tz(selectCity);
  let showcityTime = document.querySelector("#cities");
  showcityTime.innerHTML = `<div class="city" >
      <div>
        <h2> ${cityName}
          
        </h2>
        <div class="date">${cityTime.format("dddd Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:m:ss")} <small>${cityTime.format("A")}</small>
      </div>
    </div>`;
}

let citySelect = document.querySelector("#countries");
citySelect.addEventListener("change", showTime);
