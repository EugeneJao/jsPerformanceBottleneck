function demo(msgArr) {
  var container = document.createDocumentFragment();
  msgArr = msgArr || [];
  var demoEl = document.querySelector('.exe-result');
  for (var i = 0; i < msgArr.length; i++) {
    var pEl = document.createElement('p');
    pEl.textContent = msgArr[i];
    container.appendChild(pEl);
  }
  if (!demoEl) {
    demoEl = document.createElement('div');
    demoEl.classList.add('exe-result');
    document.body.appendChild(demoEl);
  }
  demoEl.appendChild(container);
}