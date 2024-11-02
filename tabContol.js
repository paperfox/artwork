export function openTab(evt, tabName) {
  const tabContent = document.getElementsByClassName("tab-content");
  const tabLinks = document.getElementsByClassName("tab-links");

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].className = tabContent[i].className.replace(" active", "");
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    // tabLinks[i].classList.toggle("active");
  }

  document.getElementById(tabName).className += " active";
  evt.currentTarget.className += " active";
}
