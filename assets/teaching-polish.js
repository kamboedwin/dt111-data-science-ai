/* Small student-experience polish for the DT111 enhanced edition. */
(function(){
  "use strict";
  if(window.__DT111_TEACHING_POLISH__) return;
  window.__DT111_TEACHING_POLISH__=true;

  function showTopic(n){
    const b=document.querySelector(`.nav-link[data-view="topic${n}"]`);
    if(b) b.click();
  }

  function addNoteNavigation(frame,n){
    try{
      const doc=frame.contentDocument;
      if(!doc || !doc.body || doc.getElementById("dt111-note-navigation")) return;
      const nav=doc.createElement("div");
      nav.id="dt111-note-navigation";
      nav.style.cssText="margin:2.8rem 0 .5rem;padding-top:1.2rem;border-top:2px solid #dbe3ef;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap";
      const prev=doc.createElement("button");
      prev.type="button"; prev.className="print-btn"; prev.style.background="#eef3fa"; prev.style.color="#173a75";
      prev.textContent=n===1?"← Course Home":"← Previous Topic";
      prev.onclick=()=>{ if(n===1){ const h=document.querySelector('.nav-link[data-view="home"]'); if(h) h.click(); } else showTopic(n-1); };
      const next=doc.createElement("button");
      next.type="button"; next.className="print-btn"; next.textContent=n===8?"Course Home →":"Next Topic →";
      next.onclick=()=>{ if(n===8){ const h=document.querySelector('.nav-link[data-view="home"]'); if(h) h.click(); } else showTopic(n+1); };
      nav.append(prev,next); doc.body.appendChild(nav);
      const style=doc.createElement("style"); style.textContent="@media print{#dt111-note-navigation{display:none!important}}"; doc.head.appendChild(style);
    }catch(e){}
  }

  function polish(){
    const footer=document.querySelector(".course-footer small");
    if(footer) footer.textContent="Online Edition · Student learning site with notes, enriched presentations, practicals, quizzes and assignments.";

    const t8=document.querySelector("#topic8 .page-head p");
    if(t8) t8.textContent="Generative AI · Synthetic media · AI agents · Accessibility · Learning · Work · Governance · Responsible use";

    const t8Summary=document.querySelector("#t8summary .summary-list");
    if(t8Summary && !t8Summary.querySelector('[data-enhanced="1"]')){
      [
        "Generative AI can create text, images, audio, video and code, but fluent output still requires verification.",
        "Hallucinations, deepfakes and synthetic media make information verification and digital literacy increasingly important.",
        "AI agents can plan multi-step tasks and use tools, increasing both capability and the need for permissions, security and oversight.",
        "Contemporary AI affects education, work, governance, cybersecurity, environmental resources and accessibility."
      ].forEach((txt,i)=>{const li=document.createElement("li");li.textContent=txt;if(i===0)li.dataset.enhanced="1";t8Summary.prepend(li);});
    }

    const t8Read=document.getElementById("t8reading");
    if(t8Read && !document.getElementById("t8-current-guidance")){
      const card=document.createElement("article"); card.className="card"; card.id="t8-current-guidance";
      card.innerHTML=`<span class="eyebrow">Current guidance</span><h2>Generative AI and trustworthy AI resources</h2><p>Use these official sources to extend the contemporary-AI discussion beyond particular commercial tools.</p><div class="resource-list"><a class="resource-card" href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" target="_blank" rel="noopener"><span>UNESCO</span><strong>Guidance for generative AI in education and research</strong><span class="resource-action">Open resource ↗</span></a><a class="resource-card" href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" target="_blank" rel="noopener"><span>NIST</span><strong>Generative AI Profile for the AI Risk Management Framework</strong><span class="resource-action">Open resource ↗</span></a><a class="resource-card" href="https://www.oecd.org/en/topics/ai-principles.html" target="_blank" rel="noopener"><span>OECD</span><strong>AI Principles</strong><span class="resource-action">Open resource ↗</span></a></div>`;
      t8Read.appendChild(card);
    }

    const checkAdditions={
      3:["Why can the median describe a skewed dataset better than the mean?","What does the IQR describe?","Why can correlation not establish causation?"],
      4:["What is the difference between a population parameter and a sample statistic?","What extra information can a confidence interval provide beyond a p-value?","How would you interpret a regression slope of 4?"],
      5:["What is the difference between a feature and a target?","Why should test data remain separate from training?","When might recall matter more than accuracy?"],
      8:["Why must important generative-AI claims be verified?","What new risk appears when an AI system can use external tools autonomously?","How can AI support accessibility while preserving user control?"]
    };
    Object.entries(checkAdditions).forEach(([n,qs])=>{
      const panel=document.getElementById(`t${n}checks`);
      if(!panel || panel.querySelector(".foundation-self-check")) return;
      const card=document.createElement("article"); card.className="card foundation-self-check";
      card.innerHTML=`<span class="eyebrow">Foundation self-check</span><h2>Can you explain these without looking at the notes?</h2>${qs.map(q=>`<details style="margin:.7rem 0"><summary><strong>${q}</strong></summary><p class="muted">Explain it aloud or in writing, then compare your explanation with the enriched notes and presentation.</p></details>`).join("")}`;
      panel.appendChild(card);
    });

    for(let n=1;n<=8;n++){
      const frame=document.querySelector(`iframe[src*="topic${n}_notes.html"]`);
      if(!frame) continue;
      frame.addEventListener("load",()=>addNoteNavigation(frame,n));
      if(frame.contentDocument && frame.contentDocument.readyState==="complete") addNoteNavigation(frame,n);
    }
  }

  if(document.readyState==="complete") setTimeout(polish,0); else window.addEventListener("load",polish,{once:true});
})();
