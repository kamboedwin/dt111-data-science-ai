/*
DT 111 — Topic 1 Presentation Content
LECTURER EDIT FILE

You may edit slide titles and text below.
To replace a graphic, replace the SVG file in:
LECTURER_EDIT/media/topic1/

Keep the surrounding JavaScript punctuation intact.
*/
window.DT111_TOPIC1_SLIDES = [
  {
    title: "DT 111 · Topic 1",
    body: `<p class="big-line">Introduction to Data Science and Artificial Intelligence</p>
           <p>Overview · History and evolution · Applications and impact</p>
           <p class="slide-note">Goal: build a clear map of the field before studying individual techniques.</p>`
  },
  {
    title: "What is Data Science?",
    body: `<p>Data Science is an interdisciplinary field for turning data into <strong>understanding, evidence and decisions</strong>.</p>
           <div class="slide-grid">
             <div class="slide-box"><h2>Data</h2><p>Observations, measurements and records.</p></div>
             <div class="slide-box"><h2>Methods</h2><p>Statistics, computing and algorithms.</p></div>
             <div class="slide-box"><h2>Context</h2><p>Knowledge of the real-world problem.</p></div>
           </div>
           <p class="slide-note">Data Science is not only about software: interpretation and communication are part of the work.</p>`
  },
  {
    title: "What is Artificial Intelligence?",
    body: `<p>Artificial Intelligence focuses on computer systems that perform tasks associated with intelligent behaviour.</p>
           <div class="slide-two-col">
             <ul>
               <li>Reasoning and problem solving</li>
               <li>Learning from examples</li>
               <li>Recognising images, speech or patterns</li>
             </ul>
             <ul>
               <li>Understanding and generating language</li>
               <li>Planning and search</li>
               <li>Prediction and decision support</li>
             </ul>
           </div>`
  },
  {
    title: "Data Science, AI and Machine Learning",
    body: `<img class="slide-figure" src="LECTURER_EDIT/media/topic1/relationship_ds_ai_ml.svg" alt="Relationship between Data Science, AI and Machine Learning">
           <p class="slide-caption">Machine Learning is a major approach within AI. Data Science overlaps with AI/ML but also includes non-AI analysis.</p>`
  },
  {
    title: "From a problem to a decision",
    body: `<img class="slide-figure" src="LECTURER_EDIT/media/topic1/workflow_problem_data_action.svg" alt="Problem, data, insight or model, action workflow">
           <p class="slide-note"><strong>Teaching point:</strong> a model is only useful when it helps answer a meaningful problem.</p>`
  },
  {
    title: "A simple Data Science workflow",
    body: `<ol class="workflow-list">
             <li><strong>Define</strong> the problem</li>
             <li><strong>Collect</strong> relevant data</li>
             <li><strong>Clean and prepare</strong> the data</li>
             <li><strong>Explore and analyse</strong> patterns</li>
             <li><strong>Model</strong> when needed</li>
             <li><strong>Evaluate</strong> the result</li>
             <li><strong>Communicate</strong> findings and support action</li>
           </ol>`
  },
  {
    title: "Not every problem needs AI",
    body: `<div class="slide-grid">
             <div class="slide-box"><h2>Simple calculation</h2><p>Average five marks → arithmetic is enough.</p></div>
             <div class="slide-box"><h2>Data analysis</h2><p>Compare attendance and performance → statistics and visualisation may be enough.</p></div>
             <div class="slide-box"><h2>AI / ML task</h2><p>Recognise crop disease from images → a learned model may be useful.</p></div>
           </div>
           <p class="slide-note">Choose a method because it fits the problem—not because it sounds advanced.</p>`
  },
  {
    title: "How did the field evolve?",
    body: `<img class="slide-figure" src="LECTURER_EDIT/media/topic1/evolution_timeline.svg" alt="Timeline of Data Science and AI">
           <p class="slide-caption">Focus on the trend: more digital data, greater computing power and improved algorithms.</p>`
  },
  {
    title: "Applications across sectors",
    body: `<img class="slide-figure" src="LECTURER_EDIT/media/topic1/applications_overview.svg" alt="Applications of Data Science and AI">
           <p class="slide-caption">Ask students to add one Tanzanian example for any two sectors.</p>`
  },
  {
    title: "Local example: crop disease support",
    body: `<div class="flow-graphic">
             <div class="fbox"><span>📷</span><strong>Leaf image</strong></div>
             <div class="fbox"><span>🧠</span><strong>AI model</strong></div>
             <div class="fbox"><span>🏷️</span><strong>Prediction</strong></div>
             <div class="fbox"><span>👩🏾‍🌾</span><strong>Decision support</strong></div>
           </div>
           <p class="discussion-prompt"><strong>Class question:</strong> Where can errors enter this pipeline? What information should accompany the prediction?</p>`
  },
  {
    title: "Benefits, limitations and human judgement",
    body: `<div class="slide-grid">
             <div class="slide-box"><h2>Benefits</h2><p>Scale, pattern discovery, prediction, automation and decision support.</p></div>
             <div class="slide-box"><h2>Limitations</h2><p>Errors, poor data quality, bias, privacy risks and uncertainty.</p></div>
             <div class="slide-box"><h2>Human role</h2><p>Context, judgement, responsibility and domain expertise remain essential.</p></div>
           </div>`
  },
  {
    title: "Topic 1 takeaway",
    body: `<p class="big-line">Data Science asks how data can produce useful understanding.</p>
           <p class="big-line">AI asks how machines can perform intelligent tasks.</p>
           <p class="slide-note">Good technology begins with a meaningful problem, appropriate data and careful interpretation.</p>`
  }
];
