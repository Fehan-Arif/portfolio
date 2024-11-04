// Global constants
const topCloud = document.getElementsByClassName("topCloud")[0];
const bottomCloud = document.getElementsByClassName("bottomCloud")[0];

// Move Cloud Animation
function moveCloud() {
  topCloud.classList.add("horizTranslate");
  bottomCloud.classList.add("horizTranslate");
}

window.onload = function() {
  setTimeout(moveCloud, 1500);
};

// Day Night Background Color
function isDaytime() {
  const now = new Date(); // Get the current date and time
  const hours = now.getHours(); // Get the current hour (0-23)

  // Determine if it's daytime (6 AM to 6 PM) or nighttime
  const daytime = hours >= 6 && hours < 18;

  // Get the topContainer element
  const topContainer = document.getElementById("top-container");
  const bottomContainer = document.getElementById("bottom-container");

  // Change background color based on the time of day
  if (!daytime) {
    topContainer.style.backgroundColor = "#000022"; // Change to dark
    bottomContainer.style.backgroundColor = "#000022"; // Change to dark
  }

  return daytime;
}

// Example usage
const daytimeStatus = isDaytime();
console.log(daytimeStatus ? "It's daytime" : "It's nighttime");
