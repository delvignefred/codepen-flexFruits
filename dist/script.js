const frame = document.querySelector("main");

// flex-direction
const btnRow = document.querySelector(".nav__btn__fd-row");
const btnRowReverse = document.querySelector(".nav__btn__fd-row-reverse");
const btnColumn = document.querySelector(".nav__btn__fd-column");
const btnColumnReverse = document.querySelector(".nav__btn__fd-column-reverse");

btnRow.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnRowReverse, btnColumn, btnColumnReverse]) {
    btn.classList.remove("btn--active");
  }
  btnRow.classList.add("btn--active");

  frame.classList.remove("fd-row-reverse", "fd-column", "fd-column-reverse");
  frame.classList.add("fd-row");
});

btnRowReverse.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnRow, btnColumn, btnColumnReverse]) {
    btn.classList.remove("btn--active");
  }
  btnRowReverse.classList.add("btn--active");

  frame.classList.remove("fd-row", "fd-column", "fd-column-reverse");
  frame.classList.add("fd-row-reverse");
});

btnColumn.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnRowReverse, btnRow, btnColumnReverse]) {
    btn.classList.remove("btn--active");
  }
  btnColumn.classList.add("btn--active");

  frame.classList.remove("fd-row", "fd-row-reverse", "fd-column-reverse");
  frame.classList.add("fd-column");
});

btnColumnReverse.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnRowReverse, btnColumn, btnRow]) {
    btn.classList.remove("btn--active");
  }
  btnColumnReverse.classList.add("btn--active");

  frame.classList.remove("fd-row", "fd-row-reverse", "fd-column");
  frame.classList.add("fd-column-reverse");
});

// gap
const btnGap = document.querySelector(".nav__btn__gap-on");
const btnNoGap = document.querySelector(".nav__btn__gap-off");
const btnRowGap = document.querySelector(".nav__btn__gap-row");
const btnColumnGap = document.querySelector(".nav__btn__gap-column");

btnColumnGap.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnNoGap, btnGap, btnRowGap]) {
    btn.classList.remove("btn--active");
  }
  btnColumnGap.classList.add("btn--active");

  frame.classList.remove("gap-on", "gap-row");
  frame.classList.add("gap-column");
});

btnRowGap.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnColumnGap, btnGap, btnNoGap]) {
    btn.classList.remove("btn--active");
  }
  btnRowGap.classList.add("btn--active");

  frame.classList.remove("gap-on", "gap-column");
  frame.classList.add("gap-row");
});

btnGap.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnColumnGap, btnRowGap, btnNoGap]) {
    btn.classList.remove("btn--active");
  }
  btnGap.classList.add("btn--active");

  frame.classList.remove("gap-row", "gap-column");
  frame.classList.add("gap-on");
});

btnNoGap.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnColumnGap, btnGap, btnRowGap]) {
    btn.classList.remove("btn--active");
  }
  btnNoGap.classList.add("btn--active");

  frame.classList.remove("gap-on", "gap-row", "gap-column"); // ✑ remove gap
});

// align-content
const btnAcStart = document.querySelector(".nav__btn__ac-start");
const btnAcCenter = document.querySelector(".nav__btn__ac-center");
const btnAcEnd = document.querySelector(".nav__btn__ac-end");
const btnAcBetween = document.querySelector(".nav__btn__ac-between");
const btnAcAround = document.querySelector(".nav__btn__ac-around");

btnAcStart.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnAcCenter, btnAcEnd, btnAcBetween, btnAcAround]) {
    btn.classList.remove("btn--active");
  }
  btnAcStart.classList.add("btn--active");

  frame.classList.remove("ac-center", "ac-end", "ac-between", "ac-around");
  frame.classList.add("ac-start");
});

btnAcCenter.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnAcStart, btnAcEnd, btnAcBetween, btnAcAround]) {
    btn.classList.remove("btn--active");
  }
  btnAcCenter.classList.add("btn--active");

  frame.classList.remove("ac-start", "ac-end", "ac-between", "ac-around");
  frame.classList.add("ac-center");
});

btnAcEnd.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnAcCenter, btnAcStart, btnAcBetween, btnAcAround]) {
    btn.classList.remove("btn--active");
  }
  btnAcEnd.classList.add("btn--active");

  frame.classList.remove("ac-start", "ac-center", "ac-between", "ac-around");
  frame.classList.add("ac-end");
});

btnAcBetween.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnAcCenter, btnAcEnd, btnAcStart, btnAcAround]) {
    btn.classList.remove("btn--active");
  }
  btnAcBetween.classList.add("btn--active");

  frame.classList.remove("ac-start", "ac-center", "ac-end", "ac-around");
  frame.classList.add("ac-between");
});

btnAcAround.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnAcCenter, btnAcEnd, btnAcBetween, btnAcStart]) {
    btn.classList.remove("btn--active");
  }
  btnAcAround.classList.add("btn--active");

  frame.classList.remove("ac-start", "ac-center", "ac-end", "ac-between");
  frame.classList.add("ac-around");
});

// justify-content
const btnJcStart = document.querySelector(".nav__btn__jc-start");
const btnJcCenter = document.querySelector(".nav__btn__jc-center");
const btnJcEnd = document.querySelector(".nav__btn__jc-end");
const btnJcBetween = document.querySelector(".nav__btn__jc-between");
const btnJcAround = document.querySelector(".nav__btn__jc-around");
const btnJcEvenly = document.querySelector(".nav__btn__jc-evenly");

btnJcStart.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnJcCenter, btnJcEnd, btnJcBetween, btnJcAround, btnJcEvenly]) {
    btn.classList.remove("btn--active");
  }
  btnJcStart.classList.add("btn--active");

  frame.classList.remove("jc-center", "jc-end", "jc-between", "jc-around", "jc-evenly");
  frame.classList.add("jc-start");
});

btnJcCenter.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnJcStart, btnJcEnd, btnJcBetween, btnJcAround, btnJcEvenly]) {
    btn.classList.remove("btn--active");
  }
  btnJcCenter.classList.add("btn--active");

  frame.classList.remove("jc-start", "jc-end", "jc-between", "jc-around", "jc-evenly");
  frame.classList.add("jc-center");
});

btnJcEnd.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnJcCenter, btnJcStart, btnJcBetween, btnJcAround, btnJcEvenly]) {
    btn.classList.remove("btn--active");
  }
  btnJcEnd.classList.add("btn--active");

  frame.classList.remove("jc-start", "jc-center", "jc-between", "jc-around", "jc-evenly");
  frame.classList.add("jc-end");
});

btnJcBetween.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnJcCenter, btnJcEnd, btnJcStart, btnJcAround, btnJcEvenly]) {
    btn.classList.remove("btn--active");
  }
  btnJcBetween.classList.add("btn--active");

  frame.classList.remove("jc-start", "jc-center", "jc-end", "jc-around", "jc-evenly");
  frame.classList.add("jc-between");
});

btnJcAround.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnJcCenter, btnJcEnd, btnJcBetween, btnJcStart, btnJcEvenly]) {
    btn.classList.remove("btn--active");
  }
  btnJcAround.classList.add("btn--active");

  frame.classList.remove("jc-start", "jc-center", "jc-end", "jc-between", "jc-evenly");
  frame.classList.add("jc-around");
});

btnJcEvenly.addEventListener("click", (event) => {
  event.preventDefault();
  for (const btn of [btnJcCenter, btnJcEnd, btnJcBetween, btnJcAround, btnJcStart]) {
    btn.classList.remove("btn--active");
  }
  btnJcEvenly.classList.add("btn--active");

  frame.classList.remove("jc-start", "jc-center", "jc-end", "jc-between", "jc-around");
  frame.classList.add("jc-evenly");
});
