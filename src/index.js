function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let LosAngelesTime = moment().tz("America/Los_Angeles");
  let LADate = LosAngelesTime.format("dddd Do YYYY");
  losAngelesDateElement.innerHTML = LADate;
  let LATime = LosAngelesTime.format("h:m:ss [<small>]A[</small>]");
  losAngelesTimeElement.innerHTML = LATime;

  //sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  let SDate = sydneyTime.format("dddd Do YYYY");
  sydneyDateElement.innerHTML = SDate;
  let STime = sydneyTime.format("h:m:ss [<small>]A[</small>]");
  sydneyTimeElement.innerHTML = STime;
}

updateTime();
setInterval(updateTime, 1000);
