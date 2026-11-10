/*
DT 111 — Course settings
*/
window.DT111_SETTINGS = {
  version: "1.1",
  assignmentSubmissionUrl: "https://forms.gle/dPQ6LJMzWzwyntaw8",
  assignment1DueDate: "To be announced by the lecturer",
  assignment2DueDate: "To be announced by the lecturer",
  assignment3DueDate: "To be announced by the lecturer",
  assignment4DueDate: "To be announced by the lecturer",
  assignment5DueDate: "To be announced by the lecturer",
  assignment6DueDate: "To be announced by the lecturer",
  assignment7DueDate: "To be announced by the lecturer",
  assignment8DueDate: "To be announced by the lecturer",
  lecturerName: "",
  lecturerEmail: ""
};

/* Load the student teaching enhancement layer for the online edition. */
(function(){
  if(!document.querySelector('link[href="assets/teaching-enhancements.css"]')){
    const css=document.createElement("link");
    css.rel="stylesheet";
    css.href="assets/teaching-enhancements.css";
    document.head.appendChild(css);
  }

  function loadPolish(){
    if(document.querySelector('script[src="assets/teaching-polish.js"]')) return;
    const p=document.createElement("script");
    p.src="assets/teaching-polish.js";
    document.head.appendChild(p);
  }

  if(document.querySelector('script[src="assets/teaching-enhancements.js"]')){
    loadPolish();
    return;
  }
  const s=document.createElement("script");
  s.src="assets/teaching-enhancements.js";
  s.onload=loadPolish;
  document.head.appendChild(s);
})();
