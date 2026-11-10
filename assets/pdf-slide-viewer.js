/* DT 111 PDF lecture-slide integration. Replaces browser-rendered Presentation Mode with fixed-layout PDF decks. */
(function(){
  "use strict";
  if(window.__DT111_PDF_SLIDES__) return;
  window.__DT111_PDF_SLIDES__=true;

  const pageCounts={1:17,2:19,3:23,4:21,5:23,6:20,7:18,8:24};

  function installStyles(){
    if(document.getElementById("dt111-pdf-slide-styles")) return;
    const style=document.createElement("style");
    style.id="dt111-pdf-slide-styles";
    style.textContent=`
      .dt111-slide-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end;align-items:center}
      .dt111-slide-actions .btn{white-space:nowrap}
      .dt111-slide-note{font-size:.86rem;color:#667085;margin-top:.35rem;text-align:right}
      @media(max-width:820px){.dt111-slide-actions{justify-content:flex-start;width:100%}.dt111-slide-note{text-align:left}}
    `;
    document.head.appendChild(style);
  }

  function replacePresentationButtons(){
    installStyles();
    for(let n=1;n<=8;n++){
      const id=n===1?"presentationBtn":`presentationBtn${n}`;
      const old=document.getElementById(id);
      if(!old || old.dataset.pdfReplaced==="1") continue;
      const num=String(n).padStart(2,"0");
      const group=document.createElement("div");
      group.className="dt111-slide-actions";
      group.innerHTML=`
        <a class="btn primary link-btn" href="slides/index.html?topic=${n}" aria-label="View Topic ${n} lecture slides">📽 View Lecture Slides</a>
        <a class="btn secondary link-btn" href="downloads/slides/DT111_Topic_${num}_Slides.pdf" download aria-label="Download Topic ${n} lecture slides as PDF">↓ Download PDF</a>
      `;
      old.dataset.pdfReplaced="1";
      old.replaceWith(group);
    }

    const footer=document.querySelector(".course-footer small");
    if(footer) footer.textContent="Online Edition · Student learning site with notes, downloadable lecture slides, practicals, quizzes and assignments.";

    document.querySelectorAll(".page-head").forEach(head=>{
      const slideActions=head.querySelector(".dt111-slide-actions");
      if(!slideActions || head.querySelector(".dt111-slide-note")) return;
      const note=document.createElement("div");
      note.className="dt111-slide-note";
      const view=head.closest(".view");
      const match=view ? view.id.match(/\d+/) : null;
      const topic=match ? match[0] : null;
      if(topic && pageCounts[Number(topic)]) note.textContent=`Fixed-layout lecture presentation · ${pageCounts[Number(topic)]} pages`;
      slideActions.insertAdjacentElement("afterend",note);
    });
  }

  if(document.readyState==="complete") replacePresentationButtons();
  else window.addEventListener("load",replacePresentationButtons,{once:true});
})();
