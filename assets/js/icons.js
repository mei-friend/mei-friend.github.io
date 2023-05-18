/**
 * Dynamically adds specific content to display OS-dependent modifier key icons.
 *
 * E.g., <span class="keyIcon cmd2Key"></span> will convert
 * to a CTRL key icon under MacOS, or an ALT key icon on other operating systems,
 * nicely enclosed in a rounded recangle (class keyIcon).
 *
 * To activate on a given page, use:
 * <script src="{{ site.baseurl }}/assets/js/icons.js">></script>
 */

let shiftKey = "&#8679;"; // SHIFT symbol
let altKey = "&#8997;"; // ALT symbol
let ctrlKey = "&#8963;"; // always CTRL symbol on all OS
let cmdKey = "&#8963;"; // CTRL symbol on WIN/LINUX; CMD on Mac
let cmd2Key = "&#8997;"; // ALT symbol on WIN/Linux; CTRL on Mac

// Here we use text instead of symbols
shiftKey = "SHIFT"; // prefer text instead of symbols
altKey = "ALT";
ctrlKey = "CTRL";
cmdKey = "CTRL";
cmd2Key = "ALT";

const platform = (
  navigator?.userAgentData?.platform ||
  navigator?.platform ||
  "unknown"
).toLowerCase();

// change on MacOS
if (platform.startsWith("mac")) {
  cmdKey = "&#8984;"; // CMD symbol
  cmd2Key = "&#8963;"; // CTRL symbol
  cmdKey = "CMD"; // text instead of symbols
  cmd2Key = "CTRL";
}

// upon content loaded, change element contents
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cmdKey").forEach((e) => (e.innerHTML = cmdKey));
  document.querySelectorAll(".cmd2Key").forEach((e) => (e.innerHTML = cmd2Key));
  document.querySelectorAll(".ctrlKey").forEach((e) => (e.innerHTML = ctrlKey));
  document
    .querySelectorAll(".shiftKey")
    .forEach((e) => (e.innerHTML = shiftKey));
  document.querySelectorAll(".altKey").forEach((e) => (e.innerHTML = altKey));
});
