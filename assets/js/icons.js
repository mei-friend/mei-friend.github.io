let shiftKey = "&#8679;"; // SHIFT symbol
let altKey = "&#8997;"; // ALT symbol
let cmdKey = "&#8963;"; // CTRL symbol
let cmd2Key = "&#8997;"; // ALT symbol
let ctrlKey = "&#8963;"; // always CTRL symbol on all OS
shiftKey = "SHIFT"; // prefer text instead of symbols
altKey = "ALT";
cmdKey = "CTRL";
cmd2Key = "ALT";
ctrlKey = "CTRL";
if (navigator.platform.startsWith("Mac")) {
  cmdKey = "&#8984;"; // CMD symbol
  cmd2Key = "&#8963;"; // CTRL symbol
  cmdKey = "CMD"; // text instead of symbols
  cmd2Key = "CTRL";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cmdKey").forEach((e) => (e.innerHTML = cmdKey));
  document.querySelectorAll(".cmd2Key").forEach((e) => (e.innerHTML = cmd2Key));
  document.querySelectorAll(".ctrlKey").forEach((e) => (e.innerHTML = ctrlKey));
  document
    .querySelectorAll(".shiftKey")
    .forEach((e) => (e.innerHTML = shiftKey));
  document.querySelectorAll(".altKey").forEach((e) => (e.innerHTML = altKey));
});
