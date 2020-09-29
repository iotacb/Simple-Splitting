const defaultDelay = 50;
const defaultTargetClass = "ss-opacity";

const splittingTargets = document.querySelectorAll("*[ss-target]");

for (let i = 0; i < splittingTargets.length; i++) {
  const splitTarget = splittingTargets[i];
  const defaultClass = getAttribute(splitTarget, "ss-default") == false ? "ss-transparent" : getAttribute(splitTarget, "ss-default");
  const splitType = getSplit(splitTarget);
  const targetSplits = splitTarget.textContent.split(splitType);
  splitTarget.textContent = "";

  for (let j = 0; j < targetSplits.length; j++) {
    const split = targetSplits[j];
    splitTarget.innerHTML += `<span>${split}</span>`;
    const span = splitTarget.querySelectorAll("span")[j];
    span.classList.add(defaultClass);

    if (splitType == " ") {
        const tempNext = targetSplits[j + 1];
        if (tempNext != undefined && tempNext != null) {
            span.outerHTML += `<whitespace></whitespace>`;
            const whitespace = splitTarget.querySelectorAll("whitespace")[j];
            whitespace.style.padding = "0 " + window.getComputedStyle(splitTarget, null).getPropertyValue("font-size").slice(0, -2) / 10 + "px";
        }
    }
  }

  let splitIndex = 0;
  const delayAttr = getAttribute(splitTarget, "ss-delay");
  const timer = setInterval(
    onTick,
    delayAttr == false ? defaultDelay : delayAttr
  );

  function onTick() {
    const span = splitTarget.querySelectorAll("span")[splitIndex];
    let targetClassAttr = getAttribute(splitTarget, "ss-class");
    if (targetClassAttr == false) {
      targetClassAttr = defaultTargetClass;
    }
    span.classList.add(targetClassAttr);
    if (span.classList.contains(defaultClass))
      span.classList.remove(defaultClass);

    splitIndex++;
    if (splitIndex === targetSplits.length) {
      clearInterval(timer);
    }
  }
}

function getAttribute(target, attr) {
  const attribute = target.getAttribute(attr);
  if (attribute == undefined || attribute == null) return false;
  return attribute;
}

function getSplit(target) {
    let attribute = getAttribute(target, "ss-type");
    if (attribute == false) return "";
    switch (attribute) {
        case "letter": return "";
        case "word": return " ";
        default: return attribute;
    }
}