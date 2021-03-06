// ==UserScript==
// @match http://github.com/*
// @match https://github.com/*
// @match http://github.com/*
// @match https://github.com/*
(function () {
  // check if it's issue page
  if (!document.getElementsByClassName("js-comment-edit-button").length)
    return;

  var issueTitle = document.getElementsByClassName("js-issue-title")[0].innerText;
  var issueLink = 'Issue link: ' + window.location.toString();
  var issueBody = document.getElementsByClassName("comment-body")[0].textContent
  var x = location.pathname.split('/');
  var issueNumber = x[1]+'/'+x[2]+'#'+x[4];
  issueTitle += " ("+issueNumber+")";
  var thingsURL = 'things:add?notes=' + encodeURIComponent(issueLink + issueBody) + '&title=' + encodeURIComponent(issueTitle);

  var target = document.getElementsByClassName("flex-table-item-primary")[0];
  var btn = document.createElement("a");
  var text = document.createTextNode("Add to Things");

  btn.appendChild(text);
  btn.className = "btn btn-sm";
  btn.href = thingsURL;
  btn.style["margin-right"] = "6px";

  target.insertBefore(btn, target.childNodes[0]);
})();// ==/UserScript==
