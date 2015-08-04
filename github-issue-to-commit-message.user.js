// ==UserScript==
// @match http://github.com/*
// @match https://github.com/*
// @match http://github.com/*
// @match https://github.com/*
(function () {
  function copyToClipboard(text){
    var copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);
  }

  // check if it's issue page
  if (!document.getElementsByClassName("js-comment-edit-button").length)
    return;

  var target = document.getElementsByClassName("flex-table-item-primary")[0];
  var btn = document.createElement("a");
  var text = document.createTextNode("Copy commit message");

  btn.appendChild(text);
  btn.className = "button minibutton";
  btn.href = "#";
  btn.addEventListener('click', function(){
    var issueTitle = document.getElementsByClassName("js-issue-title")[0].innerText;
    //var issueLink = 'Issue link: ' + window.location.toString();
    //var issueBody = document.getElementsByClassName("comment-body")[0].textContent
    var x = location.pathname.split('/');
    var issueNumber = x[1]+'/'+x[2]+'#'+x[4];
    var commitMessage = "git commit -m \""+issueTitle.replace(/"/img, "'")+". Close "+issueNumber+".\"";
    copyToClipboard(commitMessage)
    return false;
  });
  btn.style["margin-right"] = "10px";

  target.insertBefore(btn, target.childNodes[0]);
})();// ==/UserScript==
