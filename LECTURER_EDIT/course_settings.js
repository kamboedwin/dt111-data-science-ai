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
  function loadOnce(src){
    if(document.querySelector(`script[src="${src}"]`)) return;
    const s=document.createElement("script");
    s.src=src;
    document.head.appendChild(s);
  }
  loadOnce("assets/teaching-enhancements.js");
  loadOnce("assets/teaching-polish.js");
})();
