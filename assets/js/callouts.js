(function () {
  var TYPES = ["NOTE", "TIP", "IMPORTANT", "WARNING", "CAUTION"];
  var ICONS = {
    NOTE: "\u{1F4DD}",
    TIP: "\u{1F4A1}",
    IMPORTANT: "!",
    WARNING: "⚠️",
    CAUTION: "\u{1F6D1}",
  };

  document.querySelectorAll(".post-content blockquote").forEach(function (bq) {
    var firstP = bq.querySelector("p");
    if (!firstP) return;

    var match = firstP.innerHTML.match(/^\s*\[!([A-Za-z]+)\]\s*(?:<br\s*\/?>\s*)?/i);
    if (!match) return;

    var type = match[1].toUpperCase();
    if (TYPES.indexOf(type) === -1) return;

    firstP.innerHTML = firstP.innerHTML.slice(match[0].length);

    var title = document.createElement("div");
    title.className = "callout-title";
    title.innerHTML =
      '<span class="callout-icon">' + (ICONS[type] || "") + "</span>" +
      '<span>' + type.charAt(0) + type.slice(1).toLowerCase() + "</span>";

    bq.classList.add("callout", "callout-" + type.toLowerCase());
    bq.insertBefore(title, bq.firstChild);
  });
})();
