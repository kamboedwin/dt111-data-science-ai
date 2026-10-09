const settings = window.DT111_SETTINGS || {};
const submissionLink = document.getElementById("assignmentSubmissionLink");
if(submissionLink && settings.assignmentSubmissionUrl) submissionLink.href = settings.assignmentSubmissionUrl;
const dueDateEl = document.getElementById("assignment1DueDate");
if(dueDateEl && settings.assignment1DueDate) dueDateEl.textContent = settings.assignment1DueDate;

const submissionLink2 = document.getElementById("assignmentSubmissionLink2");
if(submissionLink2 && settings.assignmentSubmissionUrl) submissionLink2.href = settings.assignmentSubmissionUrl;
const dueDateEl2 = document.getElementById("assignment2DueDate");
if(dueDateEl2 && settings.assignment2DueDate) dueDateEl2.textContent = settings.assignment2DueDate;

const submissionLink3 = document.getElementById("assignmentSubmissionLink3");
if(submissionLink3 && settings.assignmentSubmissionUrl) submissionLink3.href = settings.assignmentSubmissionUrl;
const dueDateEl3 = document.getElementById("assignment3DueDate");
if(dueDateEl3 && settings.assignment3DueDate) dueDateEl3.textContent = settings.assignment3DueDate;

const submissionLink4 = document.getElementById("assignmentSubmissionLink4");
if(submissionLink4 && settings.assignmentSubmissionUrl) submissionLink4.href = settings.assignmentSubmissionUrl;
const dueDateEl4 = document.getElementById("assignment4DueDate");
if(dueDateEl4 && settings.assignment4DueDate) dueDateEl4.textContent = settings.assignment4DueDate;

const submissionLink5 = document.getElementById("assignmentSubmissionLink5");
if(submissionLink5 && settings.assignmentSubmissionUrl) submissionLink5.href = settings.assignmentSubmissionUrl;
const dueDateEl5 = document.getElementById("assignment5DueDate");
if(dueDateEl5 && settings.assignment5DueDate) dueDateEl5.textContent = settings.assignment5DueDate;

const submissionLink6 = document.getElementById("assignmentSubmissionLink6");
if(submissionLink6 && settings.assignmentSubmissionUrl) submissionLink6.href = settings.assignmentSubmissionUrl;
const dueDateEl6 = document.getElementById("assignment6DueDate");
if(dueDateEl6 && settings.assignment6DueDate) dueDateEl6.textContent = settings.assignment6DueDate;

const submissionLink7 = document.getElementById("assignmentSubmissionLink7");
if(submissionLink7 && settings.assignmentSubmissionUrl) submissionLink7.href = settings.assignmentSubmissionUrl;
const dueDateEl7 = document.getElementById("assignment7DueDate");
if(dueDateEl7 && settings.assignment7DueDate) dueDateEl7.textContent = settings.assignment7DueDate;

const submissionLink8 = document.getElementById("assignmentSubmissionLink8");
if(submissionLink8 && settings.assignmentSubmissionUrl) submissionLink8.href = settings.assignmentSubmissionUrl;
const dueDateEl8 = document.getElementById("assignment8DueDate");
if(dueDateEl8 && settings.assignment8DueDate) dueDateEl8.textContent = settings.assignment8DueDate;


const state = {
  slides: [],
  slideIndex: 0,
  quiz: [
    {
      q: "Which statement best describes Data Science?",
      options: [
        "A single programming language for AI",
        "An interdisciplinary field that uses data to generate insight and support decisions",
        "A hardware system for storing data",
        "A method used only for creating charts"
      ],
      a: 1,
      e: "Data Science combines data, computing, statistics and domain knowledge to generate understanding and support decisions."
    },
    {
      q: "Which statement about AI and Machine Learning is most accurate?",
      options: [
        "They are exactly the same",
        "Machine Learning is a major approach within AI",
        "AI is a small part of Machine Learning",
        "Machine Learning never uses data"
      ],
      a: 1,
      e: "Machine Learning is one important approach within the broader field of Artificial Intelligence."
    },
    {
      q: "Which step normally comes before modelling in a Data Science workflow?",
      options: [
        "Data preparation and exploration",
        "Publishing the final decision",
        "Ignoring missing values",
        "Replacing the original problem"
      ],
      a: 0,
      e: "Data are normally collected, cleaned, prepared and explored before a model is developed."
    },
    {
      q: "Which is the best example of a Data Science question?",
      options: [
        "What patterns in student attendance are associated with course performance?",
        "How do I replace a laptop battery?",
        "What is the keyboard shortcut for copy?",
        "How many ports are on a router?"
      ],
      a: 0,
      e: "The first question uses data to identify patterns and support understanding or decisions."
    },
    {
      q: "Which three forces have strongly contributed to the recent growth of modern AI?",
      options: [
        "Less data, weaker computers and fewer algorithms",
        "More data, more computing power and improved algorithms",
        "Paper records, typewriters and manual filing",
        "Removing statistics from computing"
      ],
      a: 1,
      e: "Modern AI has benefited from large data availability, increased computational power and algorithmic advances."
    },
    {
      q: "Which of the following is an AI application in agriculture?",
      options: [
        "Image-based crop disease recognition",
        "Manually writing a farm diary",
        "Printing a paper receipt",
        "Counting bags without recording the result"
      ],
      a: 0,
      e: "Image recognition can be used to classify crop conditions or diseases from photographs."
    },
    {
      q: "Which statement is correct?",
      options: [
        "Every Data Science task must use AI",
        "Every AI system is always correct",
        "Data Science can produce useful insight without Machine Learning",
        "Human judgement is unnecessary when AI is used"
      ],
      a: 2,
      e: "Descriptive statistics, data cleaning and visualisation can produce valuable insights without Machine Learning."
    },
    {
      q: "A model gives a prediction. What is the safest interpretation?",
      options: [
        "The prediction is automatically true",
        "The output is evidence that should be evaluated and interpreted in context",
        "The model cannot make errors",
        "The prediction should replace all human judgement"
      ],
      a: 1,
      e: "Models can make errors; outputs should be evaluated and interpreted using appropriate context and domain knowledge."
    },
    {
      q: "Which issue can arise when training data are systematically unrepresentative?",
      options: [
        "Bias and unfair outcomes",
        "Guaranteed perfect accuracy",
        "Automatic privacy protection",
        "Removal of uncertainty"
      ],
      a: 0,
      e: "Unrepresentative or biased data can contribute to biased model outputs and unfair outcomes."
    },
    {
      q: "Which statement best captures the purpose of Topic 1?",
      options: [
        "Master all advanced AI mathematics",
        "Develop a foundation for understanding what Data Science and AI are, how they evolved and where they are applied",
        "Learn only one software tool",
        "Replace later specialised courses"
      ],
      a: 1,
      e: "Topic 1 provides the conceptual foundation for the rest of the course and programme."
    }
  ]
};

const glossary = [
  ["Algorithm","A finite set of steps or rules used to solve a problem or perform a computation."],
  ["Artificial Intelligence (AI)","The broad field concerned with computer systems that perform tasks associated with intelligent behaviour."],
  ["Bias","A systematic tendency that can distort data, analysis or model outcomes."],
  ["Data","Recorded observations, measurements, facts or representations that can be processed or analysed."],
  ["Data Science","An interdisciplinary field that uses data, computing, statistics and domain knowledge to generate insights and support decisions."],
  ["Dataset","A collection of related data organised for analysis or processing."],
  ["Feature","An input characteristic or variable used in an analysis or model."],
  ["Machine Learning","An approach within AI in which models learn patterns from data."],
  ["Model","A simplified representation or learned relationship used to describe, explain or predict something."],
  ["Prediction","An estimated output produced from data or a model about an unknown or future value or class."],
  ["Preprocessing","Transforming or preparing data before analysis or modelling."],
  ["Regression","A statistical or machine-learning approach commonly used to model relationships and predict numerical values."],
  ["Supervised learning","Machine Learning using examples with known target labels or outcomes."],
  ["Unsupervised learning","Machine Learning that looks for structure or patterns in data without known target labels."],
  ["Data cleaning","The process of identifying and correcting errors, inconsistencies and other quality problems in data."],
  ["Data preprocessing","The broader process of preparing data for analysis or modelling, including cleaning, transformation, encoding and scaling."],
  ["Missing value","A field for which the expected data value is absent or unavailable."],
  ["Duplicate record","An observation that appears more than once in a dataset when only one occurrence should exist."],
  ["Outlier","An observation that lies unusually far from typical values and should be investigated in context."],
  ["Metadata","Information that describes data, such as field definitions, units, data types and allowed values."],
  ["Imputation","A method of estimating and inserting a replacement for a missing value."],
  ["Encoding","Representing categorical or other data in a form suitable for computation."],
  ["Scaling","Transforming numerical variables so their magnitudes or ranges are more comparable."],
  ["Exploratory Data Analysis (EDA)","The process of examining data using summaries and visualisations to understand characteristics, patterns and unusual observations."],
  ["Mean","The arithmetic average of numerical values."],
  ["Median","The middle value after numerical observations are ordered."],
  ["Mode","The most frequently occurring value or category."],
  ["Range","The difference between the maximum and minimum values."],
  ["Standard deviation","A measure describing how much numerical values vary around their mean."],
  ["Histogram","A chart showing the distribution of a numerical variable across value intervals."],
  ["Scatter plot","A chart showing paired numerical observations to examine relationships between two variables."],
  ["Distribution","The way observed values or probabilities are arranged or spread across possible outcomes."],
  ["Association","A pattern in which variables are related or tend to vary together, without automatically implying causation."],
  ["Anomaly","An observation that differs noticeably from the general pattern and deserves investigation."],
  ["Probability","A numerical measure of how likely an event is."],
  ["Event","An outcome or condition of interest in probability."],
  ["Random variable","A numerical representation of possible outcomes."],
  ["Expected value","A long-run average or central value suggested by a probability model."],
  ["Null hypothesis (H₀)","A default claim, often stating no difference or no effect."],
  ["Alternative hypothesis (H₁)","The competing claim, often stating that a difference or effect exists."],
  ["p-value","A measure of how unusual the observed result would be if the null hypothesis were true."],
  ["Slope","In simple linear regression, the expected change in the outcome for a one-unit increase in the predictor."],
  ["Residual","The difference between an observed value and the value predicted by a model."],
  ["Classification","A supervised-learning task in which the target is a category or class."],
  ["Clustering","An unsupervised-learning task that groups similar observations without predefined target labels."],
  ["Decision tree","A model that makes predictions by following a sequence of feature-based questions or splits."],
  ["K-means","A clustering algorithm that partitions observations into K groups around cluster centres."],
  ["Training data","Examples used by a Machine Learning algorithm to learn model parameters or patterns."],
  ["Test data","Held-out examples used to estimate model performance on unseen data."],
  ["Generalisation","The ability of a model to perform well on new data not used during training."],
  ["Overfitting","When a model learns training details too closely and performs poorly on new data."],
  ["Underfitting","When a model is too simple to capture important patterns."],
  ["Accuracy","The proportion of classification predictions that are correct."],
  ["Mean Absolute Error (MAE)","The average absolute difference between predicted and true numerical values."],
  ["Artificial Intelligence","The field concerned with computer systems that perform tasks associated with intelligent behaviour."],
  ["Agent","A system that perceives information about an environment and selects actions towards a goal."],
  ["State","A representation of a particular situation or configuration in a search problem."],
  ["State space","The collection of possible states that can be reached in a problem."],
  ["Breadth-First Search (BFS)","A search strategy that explores states level by level from the start."],
  ["Depth-First Search (DFS)","A search strategy that follows one branch deeply before backtracking."],
  ["Heuristic","An estimate used to guide a search toward states that appear promising relative to a goal."],
  ["A* search","A search method combining path cost with a heuristic estimate of remaining cost."],
  ["Fact","A statement treated as known within a symbolic reasoning system."],
  ["Rule","A statement connecting conditions to a conclusion or action, often expressed as IF-THEN."],
  ["Inference","The process of deriving a conclusion from available facts and rules."],
  ["Neural network","A Machine Learning model composed of connected nodes with weighted links arranged in layers."],
  ["Weight","A numerical value controlling the influence of a connection in a neural network."],
  ["Activation function","A function that transforms a node's combined input and helps neural networks model complex relationships."],
  ["Hidden layer","A neural-network layer between the input and output layers that transforms representations."],
  ["Data minimisation","The principle of collecting only personal data reasonably necessary for an intended purpose."],
  ["Purpose limitation","The principle that personal data should be collected and used for a clear and legitimate stated purpose."],
  ["Privacy","The appropriate collection, use, sharing, retention and protection of personal information."],
  ["Historical bias","Bias arising because past data reflect previous inequalities, practices or decisions."],
  ["Sampling bias","Bias arising when collected data do not adequately represent the intended population."],
  ["Measurement bias","Bias arising when a variable or measurement process represents some cases less accurately than others."],
  ["Label bias","Bias arising when target labels contain systematic errors, inconsistencies or subjective distortions."],
  ["Fairness","The consideration of whether benefits, harms, opportunities and error patterns are distributed appropriately across people or groups."],
  ["Transparency","Providing appropriate information about how an AI system is developed, used and limited."],
  ["Explainability","The ability to provide understandable reasons or factors behind an AI system's output."],
  ["Accountability","The responsibility of people or organisations for the design, use, monitoring and consequences of an AI system."],
  ["Human oversight","Human review, intervention or appeal mechanisms used to supervise important automated decisions."],
  ["Responsible AI","The development and use of AI with appropriate safeguards, evaluation, transparency, accountability and risk management across the lifecycle."],
  ["Assistive technology","A product or system that helps a person perform activities that may otherwise be difficult or impossible."],
  ["Speech-to-text","Technology that converts spoken language into written text."],
  ["Text-to-speech","Technology that converts written text into synthesised speech."],
  ["Personalised learning","Adapting learning content, pace, difficulty, feedback or format to support an individual learner's needs."],
  ["Accessible route","A route selected with accessibility requirements such as step-free access, surface conditions or accessible entrances in mind."],
  ["Co-design","A design process in which intended users participate directly in defining requirements, testing and improving a system."],
  ["Alternative interaction mode","A different way to access or control a system, such as text, audio, keyboard, touch or voice."],
  ["User control","The ability of a user to accept, reject, modify or override system recommendations where appropriate."],
  ["Escalation pathway","A defined route for moving a situation from automated support to appropriate human assistance when the system should not act alone."]
];

const slides = window.DT111_TOPIC1_SLIDES || [
  {title:"Topic 1", body:"<p>Presentation content file could not be loaded. Check content/topic1_slides.js.</p>"}
];
state.slides = slides;

function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-link").forEach(n=>n.classList.toggle("active", n.dataset.view===id));
  const labels = {home:"Home",topic1:"Topic 1",topic2:"Topic 2",topic3:"Topic 3",topic4:"Topic 4",topic5:"Topic 5",topic6:"Topic 6",topic7:"Topic 7",topic8:"Topic 8",quiz:"Topic 1 Quiz",assignment:"Assignment 1",quiz2:"Topic 2 Quiz",assignment2:"Assignment 2",quiz3:"Topic 3 Quiz",assignment3:"Assignment 3",quiz4:"Topic 4 Quiz",assignment4:"Assignment 4",quiz5:"Topic 5 Quiz",assignment5:"Assignment 5",quiz6:"Topic 6 Quiz",assignment6:"Assignment 6",quiz7:"Topic 7 Quiz",assignment7:"Assignment 7",quiz8:"Topic 8 Quiz",assignment8:"Assignment 8",glossary:"Glossary",progress:"My Progress"};
  document.getElementById("crumb").textContent = `DT 111 / ${labels[id] || ""}`;
  window.scrollTo({top:0,behavior:"smooth"});
  document.getElementById("sidebar").classList.remove("open");
  if(id==="progress") renderProgress();
}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>{if(!b.classList.contains("disabled")) showView(b.dataset.view)}));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));

document.querySelectorAll(".tab").forEach(tab=>{
  tab.addEventListener("click",()=>{
    const view=tab.closest(".view");
    if(!view) return;
    view.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    view.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active"));
    tab.classList.add("active");
    const panel=view.querySelector(`#${tab.dataset.tab}`);
    if(panel) panel.classList.add("active");
  })
});

const completeBox = document.getElementById("topic1Complete");
completeBox.checked = localStorage.getItem("dt111_topic1_complete")==="1";
completeBox.addEventListener("change",()=>{
  localStorage.setItem("dt111_topic1_complete", completeBox.checked ? "1":"0");
});


const completeBox2 = document.getElementById("topic2Complete");
if(completeBox2){
  completeBox2.checked = localStorage.getItem("dt111_topic2_complete")==="1";
  completeBox2.addEventListener("change",()=>{
    localStorage.setItem("dt111_topic2_complete", completeBox2.checked ? "1":"0");
  });
}


const completeBox3 = document.getElementById("topic3Complete");
if(completeBox3){
  completeBox3.checked = localStorage.getItem("dt111_topic3_complete")==="1";
  completeBox3.addEventListener("change",()=>{
    localStorage.setItem("dt111_topic3_complete", completeBox3.checked ? "1":"0");
  });
}


const completeBox4 = document.getElementById("topic4Complete");
if(completeBox4){
  completeBox4.checked = localStorage.getItem("dt111_topic4_complete")==="1";
  completeBox4.addEventListener("change",()=>{
    localStorage.setItem("dt111_topic4_complete", completeBox4.checked ? "1":"0");
  });
}


const completeBox5 = document.getElementById("topic5Complete");
if(completeBox5){
  completeBox5.checked = localStorage.getItem("dt111_topic5_complete")==="1";
  completeBox5.addEventListener("change",()=>{
    localStorage.setItem("dt111_topic5_complete", completeBox5.checked ? "1":"0");
  });
}


const completeBox6 = document.getElementById("topic6Complete");
if(completeBox6){
  completeBox6.checked = localStorage.getItem("dt111_topic6_complete")==="1";
  completeBox6.addEventListener("change",()=>{
    localStorage.setItem("dt111_topic6_complete", completeBox6.checked ? "1":"0");
  });
}


const completeBox7 = document.getElementById("topic7Complete");
if(completeBox7){
  completeBox7.checked = localStorage.getItem("dt111_topic7_complete")==="1";
  completeBox7.addEventListener("change",()=>{
    localStorage.setItem("dt111_topic7_complete", completeBox7.checked ? "1":"0");
  });
}


const completeBox8 = document.getElementById("topic8Complete");
if(completeBox8){
  completeBox8.checked = localStorage.getItem("dt111_topic8_complete")==="1";
  completeBox8.addEventListener("change",()=>{
    localStorage.setItem("dt111_topic8_complete", completeBox8.checked ? "1":"0");
  });
}

document.querySelectorAll(".quick-check").forEach((card)=>{
  card.querySelector(".check-btn").addEventListener("click",()=>{
    const selected = card.querySelector("input:checked");
    const feedback = card.querySelector(".feedback");
    if(!selected){
      feedback.className="feedback bad";
      feedback.textContent="Select an answer first.";
      return;
    }
    const correct = selected.value===card.dataset.answer;
    feedback.className=`feedback ${correct?"good":"bad"}`;
    feedback.textContent = correct ? "✓ Correct." : "✗ Not quite. Review the relevant section and try again.";
  });
});

const scenarioData = {
  spam:`<strong>Spam email:</strong><br><b>Rule-based:</b> manually define rules such as blocking certain words or senders.<br><b>Learning-based:</b> train a model on examples of spam and non-spam email so it learns patterns.`,
  traffic:`<strong>Traffic-light scheduling:</strong><br><b>Rule-based:</b> use fixed timing rules.<br><b>Learning/data-driven:</b> use traffic data to adjust timing or predict congestion.`,
  marks:`<strong>Average of five marks:</strong><br>This does not require AI. A simple arithmetic algorithm is sufficient. This demonstrates that not every computational task needs Machine Learning or AI.`
};
const scenarioSelect = document.getElementById("scenarioSelect");
const scenarioOutput = document.getElementById("scenarioOutput");
function updateScenario(){scenarioOutput.innerHTML=scenarioData[scenarioSelect.value]}
scenarioSelect.addEventListener("change",updateScenario); updateScenario();

function renderQuiz(){
  const holder=document.getElementById("quizQuestions");
  holder.innerHTML = state.quiz.map((item,i)=>`
    <article class="quiz-question">
      <h3>${i+1}. ${item.q}</h3>
      ${item.options.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}
    </article>
  `).join("");
}
renderQuiz();

document.getElementById("quizForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  let score=0, review=[];
  state.quiz.forEach((item,i)=>{
    const selected=document.querySelector(`input[name="q${i}"]:checked`);
    const val=selected?Number(selected.value):-1;
    if(val===item.a) score++;
    review.push({ok:val===item.a, chosen:val, item});
  });
  localStorage.setItem("dt111_topic1_quiz_score", String(score));
  const pct=Math.round(score/state.quiz.length*100);
  const result=document.getElementById("quizResult");
  result.classList.remove("hidden");
  result.innerHTML=`
    <div class="result-score">${score}/${state.quiz.length} · ${pct}%</div>
    <p>${pct>=70 ? "Good work. Review any incorrect answers below." : "Review the explanations below, revisit the notes, and try the quiz again."}</p>
    ${review.map((r,i)=>`
      <div class="review-item">
        <strong>${i+1}. ${r.ok?"✓ Correct":"✗ Review"}</strong>
        <p>${r.item.e}</p>
      </div>`).join("")}
  `;
  result.scrollIntoView({behavior:"smooth",block:"start"});
});

document.getElementById("assignmentDoneBtn").addEventListener("click",(e)=>{
  localStorage.setItem("dt111_assignment1_complete","1");
  e.target.textContent="✓ Assignment marked as completed";
});


const quiz2 = [
  {q:"Which is an example of secondary data for a researcher?",options:["A survey collected specifically for the current project","Existing government census data","A sensor installed by the researcher","An experiment run for the current study"],a:1,e:"Secondary data already exist because they were collected previously for another purpose."},
  {q:"Which item is best treated as an identifier rather than a numerical measurement?",options:["Rainfall in millimetres","Age in years","Student registration number","Test score"],a:2,e:"A registration number identifies a record. Arithmetic operations on it are not meaningful."},
  {q:"Which is unstructured data?",options:["A relational database table","An Excel marks table","A photograph","A CSV file"],a:2,e:"Images do not naturally follow a fixed row-and-column structure."},
  {q:"What does completeness ask about a dataset?",options:["Whether important values are missing","Whether every value is large","Whether every field is numerical","Whether the file is compressed"],a:0,e:"Completeness concerns whether required or important values are present."},
  {q:"You find attendance = 105%. What is the best first response?",options:["Keep it because all collected data are correct","Investigate the source and validity rule","Delete the whole row immediately","Replace it with the class mean automatically"],a:1,e:"The value violates an expected range, so first verify the source and decide whether to correct, remove or mark it missing."},
  {q:"Which statement about outliers is correct?",options:["All outliers must be deleted","Outliers are always typing errors","Outliers should be investigated in context","Outliers only occur in images"],a:2,e:"An outlier may be an error or a genuine extreme observation; context is required."},
  {q:"Why should raw data be preserved?",options:["So cleaning can never be documented","To keep an unchanged reference and allow reproducibility","Because cleaned data are always wrong","Only to use more disk space"],a:1,e:"Keeping the raw version provides an auditable reference and lets cleaning steps be traced or reversed."},
  {q:"Which statement best describes preprocessing?",options:["Only deleting duplicate rows","A broader preparation process that may include cleaning, encoding, scaling and transformation","A task performed only after final reporting","Exactly the same as data collection"],a:1,e:"Preprocessing prepares data for analysis or modelling and includes several operations, with cleaning as one part."},
  {q:"Why might categorical data need encoding?",options:["Many computational methods need a suitable numerical representation","To guarantee perfect accuracy","To convert all categories into ordered quantities","Because categories cannot be stored"],a:0,e:"Encoding creates a usable representation for computational methods while preserving category meaning."},
  {q:"What is the strongest general principle from Topic 2?",options:["Use the most advanced model possible","Good analysis begins with understanding and preparing the data","Missing values should always become zero","More rows automatically mean representative data"],a:1,e:"Data source, meaning, quality and preprocessing strongly influence the reliability of later analysis."}
];

function renderQuiz2(){
  const holder=document.getElementById("quizQuestions2");
  if(!holder) return;
  holder.innerHTML=quiz2.map((item,i)=>`
    <article class="quiz-question">
      <h3>${i+1}. ${item.q}</h3>
      ${item.options.map((o,j)=>`<label><input type="radio" name="t2q${i}" value="${j}"> ${o}</label>`).join("")}
    </article>`).join("");
}
renderQuiz2();

const quizForm2=document.getElementById("quizForm2");
if(quizForm2) quizForm2.addEventListener("submit",(e)=>{
  e.preventDefault();
  let score=0, review=[];
  quiz2.forEach((item,i)=>{
    const selected=document.querySelector(`input[name="t2q${i}"]:checked`);
    const val=selected?Number(selected.value):-1;
    if(val===item.a) score++;
    review.push({ok:val===item.a,item});
  });
  localStorage.setItem("dt111_topic2_quiz_score",String(score));
  const pct=Math.round(score/quiz2.length*100);
  const result=document.getElementById("quizResult2");
  result.classList.remove("hidden");
  result.innerHTML=`<div class="result-score">${score}/${quiz2.length} · ${pct}%</div>
  <p>${pct>=70?"Good work. Review any incorrect answers below.":"Review the explanations, revisit Topic 2, and try again."}</p>
  ${review.map((r,i)=>`<div class="review-item"><strong>${i+1}. ${r.ok?"✓ Correct":"✗ Review"}</strong><p>${r.item.e}</p></div>`).join("")}`;
  result.scrollIntoView({behavior:"smooth",block:"start"});
});

const assignment2DoneBtn=document.getElementById("assignment2DoneBtn");
if(assignment2DoneBtn) assignment2DoneBtn.addEventListener("click",(e)=>{
  localStorage.setItem("dt111_assignment2_complete","1");
  e.target.textContent="✓ Assignment marked as completed";
});

// Topic 2 data-cleaning demonstration
const messyDemoRows = [
 ["DS001","Asha M.","20","Iringa","DSAI","78","92",[]],
 ["DS002","Baraka K.","21","Dar es salaam","DSAI","65","85",["region"]],
 ["DS003","Neema P.","","ARUSHA","DSAI","81","89",["age","region"]],
 ["DS004","John T.","22","Iringa","Data Science & AI","103","88",["programme","score"]],
 ["DS005","Rehema S.","twenty","Mbeya","DSAI","74","",["age","attendance"]],
 ["DS005","Rehema S.","twenty","Mbeya","DSAI","74","",["duplicate","age","attendance"]],
 ["DS006","Omari J.","19","Arusha ","DSAI","69","105",["region","attendance"]],
 ["DS007","Zawadi L.","20","-","DSAI","72","80",["region"]],
 ["DS008","Kelvin B.","21","Dar es Salaam","DSAI"," 67 ","83",["score"]],
 ["DS009","Fatma A.","20","Iringa","DSAI","N/A","91",["score"]],
 ["DS010","Musa R.","22","Mbeya","DSAI","76","87",[]]
];
const cleanDemoRows = [
 ["DS001","Asha M.","20","Iringa","DSAI","78","92"],
 ["DS002","Baraka K.","21","Dar es Salaam","DSAI","65","85"],
 ["DS003","Neema P.","","Arusha","DSAI","81","89"],
 ["DS004","John T.","22","Iringa","DSAI","","88"],
 ["DS005","Rehema S.","","Mbeya","DSAI","74",""],
 ["DS006","Omari J.","19","Arusha","DSAI","69",""],
 ["DS007","Zawadi L.","20","","DSAI","72","80"],
 ["DS008","Kelvin B.","21","Dar es Salaam","DSAI","67","83"],
 ["DS009","Fatma A.","20","Iringa","DSAI","","91"],
 ["DS010","Musa R.","22","Mbeya","DSAI","76","87"]
];
function renderDataDemo(mode="raw"){
  const body=document.getElementById("dataDemoBody");
  if(!body) return;
  const rows=mode==="clean"?cleanDemoRows:messyDemoRows;
  body.innerHTML=rows.map((r,ri)=>{
    const vals=mode==="clean"?r:r.slice(0,7);
    const issues=mode==="clean"?[]:r[7];
    return `<tr class="${issues.includes("duplicate")&&mode==="issues"?"issue-row":""}">${vals.map((v,ci)=>{
      const keys=["id","name","age","region","programme","score","attendance"];
      const bad=mode==="issues" && issues.includes(keys[ci]);
      return `<td class="${bad?"issue-cell":""}">${v===""?"<em>blank</em>":v}</td>`;
    }).join("")}</tr>`;
  }).join("");
}
renderDataDemo("raw");
const msg=document.getElementById("dataDemoMessage");
const showIssuesBtn=document.getElementById("showIssuesBtn");
if(showIssuesBtn) showIssuesBtn.addEventListener("click",()=>{renderDataDemo("issues");msg.innerHTML="<strong>Highlighted cells/rows need investigation.</strong> Notice that some problems can be corrected confidently, while others should remain missing until reliable information is available.";});
const showCleanBtn=document.getElementById("showCleanBtn");
if(showCleanBtn) showCleanBtn.addEventListener("click",()=>{renderDataDemo("clean");msg.innerHTML="<strong>Example cleaned version.</strong> Duplicates were removed, obvious format inconsistencies standardised, impossible values were left blank where the true value is unknown, and the raw file remains unchanged.";});
const resetDataDemoBtn=document.getElementById("resetDataDemoBtn");
if(resetDataDemoBtn) resetDataDemoBtn.addEventListener("click",()=>{renderDataDemo("raw");msg.textContent="Start by scanning the table. Which cells would you investigate?";});

document.querySelectorAll(".decision-select").forEach(sel=>sel.addEventListener("change",()=>{
  const fb=sel.parentElement.querySelector(".decision-feedback");
  if(!sel.value){fb.textContent="";return;}
  const ok=sel.value===sel.dataset.correct;
  fb.textContent=ok?"✓ Good first response.":"✗ Reconsider: investigate context before applying an automatic fix.";
  fb.className=`decision-feedback ${ok?"good":"bad"}`;
}));


const quiz3 = [
  {q:"What is the main purpose of Exploratory Data Analysis?",options:["Prove a preferred conclusion","Understand data characteristics and identify useful patterns/questions","Replace all later analysis","Convert every variable to text"],a:1,e:"EDA helps us understand structure, distributions, relationships, unusual observations and questions for further analysis."},
  {q:"Which measure is usually less influenced by a very large extreme value?",options:["Mean","Median","Range","Maximum"],a:1,e:"The median depends on the middle ordered position and is often more resistant to extreme values than the mean."},
  {q:"Which measure describes variability rather than centre?",options:["Median","Mode","Standard deviation","Mean"],a:2,e:"Standard deviation is a measure of spread or variability."},
  {q:"Which chart is most suitable for the distribution of a numerical variable such as final score?",options:["Histogram","Bar chart of names","Pie chart of student IDs","Line connecting alphabetical names"],a:0,e:"A histogram groups numerical values into intervals to show the shape of a distribution."},
  {q:"Which chart is most suitable for examining attendance versus final score?",options:["Scatter plot","Pie chart","Single-value card","Bar chart of IDs"],a:0,e:"A scatter plot shows paired numerical values and can reveal relationships, clusters and unusual observations."},
  {q:"What is a key difference between a bar chart and histogram?",options:["There is no difference","A bar chart compares categories while a histogram shows a numerical distribution","Histograms are only for text","Bar charts must always show time"],a:1,e:"Bar charts represent categorical comparisons; histograms represent numerical intervals."},
  {q:"Two variables show a positive association. What can be concluded immediately?",options:["One definitely causes the other","They tend to increase together, but causation is not established","The data must contain errors","The relationship applies to every individual"],a:1,e:"Association is evidence of a pattern, not proof of a causal mechanism."},
  {q:"Why compare both centre and spread?",options:["Because datasets with similar averages can have very different variability","Because spread replaces the need for a chart","Because centre is only for categorical data","Because range proves causation"],a:0,e:"Centre describes what is typical, while spread describes how variable the observations are."},
  {q:"What should happen when EDA reveals an unusual observation?",options:["Delete it automatically","Investigate the case and source before deciding","Replace it with zero","Ignore it"],a:1,e:"An unusual value may be an error or a meaningful extreme case, so it should be investigated."},
  {q:"What best describes a useful insight?",options:["Any colourful chart","A pattern interpreted in context with an explanation of why it matters or what to investigate next","A raw number without context","A claim that goes beyond the data"],a:1,e:"Insights connect observed evidence to context, relevance and useful next questions without overclaiming."}
];

function renderQuiz3(){
  const holder=document.getElementById("quizQuestions3");
  if(!holder) return;
  holder.innerHTML=quiz3.map((item,i)=>`
    <article class="quiz-question">
      <h3>${i+1}. ${item.q}</h3>
      ${item.options.map((o,j)=>`<label><input type="radio" name="t3q${i}" value="${j}"> ${o}</label>`).join("")}
    </article>`).join("");
}
renderQuiz3();

const quizForm3=document.getElementById("quizForm3");
if(quizForm3) quizForm3.addEventListener("submit",(e)=>{
  e.preventDefault();
  let score=0,review=[];
  quiz3.forEach((item,i)=>{
    const selected=document.querySelector(`input[name="t3q${i}"]:checked`);
    const val=selected?Number(selected.value):-1;
    if(val===item.a) score++;
    review.push({ok:val===item.a,item});
  });
  localStorage.setItem("dt111_topic3_quiz_score",String(score));
  const pct=Math.round(score/quiz3.length*100);
  const result=document.getElementById("quizResult3");
  result.classList.remove("hidden");
  result.innerHTML=`<div class="result-score">${score}/${quiz3.length} · ${pct}%</div>
  <p>${pct>=70?"Good work. Review any incorrect answers below.":"Review the explanations, revisit Topic 3, and try again."}</p>
  ${review.map((r,i)=>`<div class="review-item"><strong>${i+1}. ${r.ok?"✓ Correct":"✗ Review"}</strong><p>${r.item.e}</p></div>`).join("")}`;
  result.scrollIntoView({behavior:"smooth",block:"start"});
});

const assignment3DoneBtn=document.getElementById("assignment3DoneBtn");
if(assignment3DoneBtn) assignment3DoneBtn.addEventListener("click",(e)=>{
  localStorage.setItem("dt111_assignment3_complete","1");
  e.target.textContent="✓ Assignment marked as completed";
});

// ---------------- Topic 3 EDA Lab ----------------
const edaData = [
{id:"S001",region:"Iringa",study:4,attendance:68,quiz:52,final:55},
{id:"S002",region:"Iringa",study:6,attendance:74,quiz:61,final:64},
{id:"S003",region:"Iringa",study:8,attendance:81,quiz:67,final:70},
{id:"S004",region:"Iringa",study:10,attendance:88,quiz:75,final:78},
{id:"S005",region:"Iringa",study:12,attendance:94,quiz:84,final:86},
{id:"S006",region:"Arusha",study:5,attendance:70,quiz:57,final:59},
{id:"S007",region:"Arusha",study:7,attendance:78,quiz:65,final:68},
{id:"S008",region:"Arusha",study:9,attendance:84,quiz:72,final:74},
{id:"S009",region:"Arusha",study:11,attendance:90,quiz:79,final:81},
{id:"S010",region:"Arusha",study:13,attendance:96,quiz:88,final:90},
{id:"S011",region:"Mbeya",study:4,attendance:72,quiz:55,final:58},
{id:"S012",region:"Mbeya",study:6,attendance:76,quiz:60,final:63},
{id:"S013",region:"Mbeya",study:8,attendance:82,quiz:69,final:71},
{id:"S014",region:"Mbeya",study:10,attendance:87,quiz:76,final:79},
{id:"S015",region:"Mbeya",study:12,attendance:91,quiz:82,final:84},
{id:"S016",region:"Dar es Salaam",study:5,attendance:75,quiz:58,final:61},
{id:"S017",region:"Dar es Salaam",study:7,attendance:80,quiz:66,final:69},
{id:"S018",region:"Dar es Salaam",study:9,attendance:86,quiz:73,final:76},
{id:"S019",region:"Dar es Salaam",study:11,attendance:92,quiz:81,final:83},
{id:"S020",region:"Dar es Salaam",study:14,attendance:97,quiz:91,final:93},
{id:"S021",region:"Iringa",study:3,attendance:65,quiz:48,final:50},
{id:"S022",region:"Arusha",study:6,attendance:73,quiz:62,final:65},
{id:"S023",region:"Mbeya",study:9,attendance:85,quiz:71,final:75},
{id:"S024",region:"Dar es Salaam",study:12,attendance:93,quiz:85,final:87}
];

function edaMean(arr){return arr.length?arr.reduce((a,b)=>a+b,0)/arr.length:0}
function edaMedian(arr){
  if(!arr.length) return 0;
  const s=[...arr].sort((a,b)=>a-b),m=Math.floor(s.length/2);
  return s.length%2?s[m]:(s[m-1]+s[m])/2;
}
function svgWrap(w,h,body){return `<svg viewBox="0 0 ${w} ${h}" width="100%" role="img" aria-label="Interactive EDA chart">${body}</svg>`}

function drawHistogram(data){
  const el=document.getElementById("edaHistogram"); if(!el)return;
  const bins=[40,50,60,70,80,90,100],counts=[0,0,0,0,0,0];
  data.forEach(d=>{
    for(let i=0;i<bins.length-1;i++) if(d.final>=bins[i]&&d.final<bins[i+1]){counts[i]++;return;}
    if(d.final===100) counts[counts.length-1]++;
  });
  const W=560,H=280,left=48,bottom=42,top=20,right=18,plotW=W-left-right,plotH=H-top-bottom;
  const max=Math.max(1,...counts),bw=plotW/counts.length;
  let body=`<line x1="${left}" y1="${top}" x2="${left}" y2="${H-bottom}" stroke="#718096"/><line x1="${left}" y1="${H-bottom}" x2="${W-right}" y2="${H-bottom}" stroke="#718096"/>`;
  counts.forEach((c,i)=>{
    const h=plotH*c/max,x=left+i*bw+4,y=H-bottom-h,w=bw-8;
    body+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#6e91ca"/><text x="${x+w/2}" y="${y-5}" text-anchor="middle" font-size="12" fill="#43536b">${c}</text><text x="${x+w/2}" y="${H-bottom+18}" text-anchor="middle" font-size="11" fill="#667085">${bins[i]}–${bins[i+1]-1}</text>`;
  });
  body+=`<text x="${W/2}" y="${H-5}" text-anchor="middle" font-size="12" fill="#667085">Final score interval</text>`;
  el.innerHTML=svgWrap(W,H,body);
}

function drawScatter(data){
  const el=document.getElementById("edaScatter"); if(!el)return;
  const W=560,H=280,left=48,bottom=42,top=18,right=18,plotW=W-left-right,plotH=H-top-bottom;
  const xmin=60,xmax=100,ymin=45,ymax=100;
  const sx=x=>left+(x-xmin)/(xmax-xmin)*plotW, sy=y=>top+(ymax-y)/(ymax-ymin)*plotH;
  let body=`<line x1="${left}" y1="${top}" x2="${left}" y2="${H-bottom}" stroke="#718096"/><line x1="${left}" y1="${H-bottom}" x2="${W-right}" y2="${H-bottom}" stroke="#718096"/>`;
  [60,70,80,90,100].forEach(v=>body+=`<text x="${sx(v)}" y="${H-bottom+18}" text-anchor="middle" font-size="11" fill="#667085">${v}</text>`);
  [50,60,70,80,90,100].forEach(v=>body+=`<text x="${left-8}" y="${sy(v)+4}" text-anchor="end" font-size="11" fill="#667085">${v}</text>`);
  data.forEach(d=>body+=`<circle cx="${sx(d.attendance)}" cy="${sy(d.final)}" r="5.5" fill="#2f7a50" opacity=".82"><title>${d.id}: attendance ${d.attendance}%, final ${d.final}</title></circle>`);
  body+=`<text x="${W/2}" y="${H-5}" text-anchor="middle" font-size="12" fill="#667085">Attendance (%)</text><text x="14" y="${H/2}" text-anchor="middle" font-size="12" fill="#667085" transform="rotate(-90 14 ${H/2})">Final score</text>`;
  el.innerHTML=svgWrap(W,H,body);
}

function drawRegionBars(){
  const el=document.getElementById("edaRegionBars"); if(!el)return;
  const regs=["Iringa","Arusha","Mbeya","Dar es Salaam"];
  const vals=regs.map(r=>edaMean(edaData.filter(d=>d.region===r).map(d=>d.final)));
  const W=900,H=290,left=58,bottom=48,top=24,right=20,plotW=W-left-right,plotH=H-top-bottom,max=100,bw=plotW/regs.length;
  let body=`<line x1="${left}" y1="${top}" x2="${left}" y2="${H-bottom}" stroke="#718096"/><line x1="${left}" y1="${H-bottom}" x2="${W-right}" y2="${H-bottom}" stroke="#718096"/>`;
  [0,20,40,60,80,100].forEach(v=>{const y=top+(max-v)/max*plotH;body+=`<line x1="${left}" y1="${y}" x2="${W-right}" y2="${y}" stroke="#e7ebf1"/><text x="${left-8}" y="${y+4}" text-anchor="end" font-size="11" fill="#667085">${v}</text>`});
  vals.forEach((v,i)=>{const h=plotH*v/max,x=left+i*bw+bw*.2,y=H-bottom-h,w=bw*.6;body+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#7d68b5"/><text x="${x+w/2}" y="${y-7}" text-anchor="middle" font-size="13" font-weight="700" fill="#4e3e79">${v.toFixed(1)}</text><text x="${x+w/2}" y="${H-bottom+20}" text-anchor="middle" font-size="12" fill="#667085">${regs[i]}</text>`});
  body+=`<text x="16" y="${H/2}" text-anchor="middle" font-size="12" fill="#667085" transform="rotate(-90 16 ${H/2})">Average final score</text>`;
  el.innerHTML=svgWrap(W,H,body);
}

function renderEdaLab(){
  const filter=document.getElementById("edaRegionFilter"); if(!filter)return;
  const data=filter.value==="All"?edaData:edaData.filter(d=>d.region===filter.value);
  const scores=data.map(d=>d.final),attendance=data.map(d=>d.attendance);
  document.getElementById("edaCount").textContent=data.length;
  document.getElementById("edaMeanScore").textContent=edaMean(scores).toFixed(1);
  document.getElementById("edaMedianScore").textContent=edaMedian(scores).toFixed(1);
  document.getElementById("edaMeanAttendance").textContent=edaMean(attendance).toFixed(1)+"%";
  drawHistogram(data); drawScatter(data); drawRegionBars();
  const label=filter.value==="All"?"all regions":filter.value;
  document.getElementById("edaInsightBox").innerHTML=`<strong>Current view: ${label}.</strong> There are ${data.length} observations. Mean final score = ${edaMean(scores).toFixed(1)}, median = ${edaMedian(scores).toFixed(1)}. Now describe the shape of the score distribution and the attendance–score relationship in your own words.`;
}
const edaFilter=document.getElementById("edaRegionFilter");
if(edaFilter){edaFilter.addEventListener("change",renderEdaLab);renderEdaLab();}

document.querySelectorAll(".interpret-select").forEach(sel=>sel.addEventListener("change",()=>{
  const fb=sel.parentElement.querySelector(".decision-feedback");
  if(!sel.value){fb.textContent="";return;}
  const ok=sel.value===sel.dataset.correct;
  fb.textContent=ok?"✓ Good interpretation.":"✗ Be careful not to overstate what EDA alone can establish.";
  fb.className=`decision-feedback ${ok?"good":"bad"}`;
}));


const quiz4 = [
  {q:"What does probability mainly describe?",options:["How likely an event is","The exact future with certainty","Only large datasets","A number that can be above 1"],a:0,e:"Probability is a numerical way of expressing how likely an event is."},
  {q:"Which is a continuous variable?",options:["Number of students absent","Number of books","Time taken to finish a task","Number of correct answers"],a:2,e:"Time varies on a continuum and is commonly treated as a continuous variable."},
  {q:"What is the null hypothesis usually meant to represent?",options:["A default claim such as no difference or no effect","A claim known to be false","The most interesting story","The final conclusion"],a:0,e:"The null hypothesis is the default claim against which evidence is evaluated."},
  {q:"A small p-value is best interpreted as:",options:["Proof that the null hypothesis is false","Evidence that the observed data would be unusual if the null hypothesis were true","The probability that the null hypothesis is true","The size of the treatment effect"],a:1,e:"A p-value measures how unusual the observed result would be under the null model."},
  {q:"If p = 0.18 at the 0.05 significance level, what is the typical introductory decision?",options:["Reject H₀","Fail to reject H₀","Prove H₀ true","Ignore the study"],a:1,e:"At the 0.05 level, 0.18 is not small enough to reject the null hypothesis."},
  {q:"Why is statistical significance not the same as practical importance?",options:["Because statistics has no meaning","Because a result may be detectable yet too small to matter in practice","Because p-values measure money","Because practical importance is always zero"],a:1,e:"A result can be statistically detectable while still having little practical value or impact."},
  {q:"What does the slope in a simple linear regression describe?",options:["The direction and amount of change in the outcome for a one-unit increase in the predictor","The number of observations","The probability the model is true","The total variance of all variables"],a:0,e:"The slope summarises how the outcome tends to change when the predictor increases by one unit."},
  {q:"What is a residual?",options:["A missing value","The difference between an observed outcome and the model's predicted outcome","The same thing as a p-value","A type of histogram"],a:1,e:"Residuals show how far observed values differ from model predictions."},
  {q:"An upward regression slope usually suggests:",options:["A positive association between the variables","No relationship at all","Certain causation","A discrete distribution"],a:0,e:"An upward slope indicates that larger values of the predictor tend to be associated with larger values of the outcome."},
  {q:"What is the safest interpretation attitude for Topic 4?",options:["Use statistical tools as evidence but interpret carefully and in context","Assume every significant result is practically important","Treat regression as proof of causation","Ignore data quality"],a:0,e:"Statistical methods support reasoning, but responsible interpretation still matters."}
];

function renderQuiz4(){
  const holder=document.getElementById("quizQuestions4");
  if(!holder) return;
  holder.innerHTML=quiz4.map((item,i)=>`
    <article class="quiz-question">
      <h3>${i+1}. ${item.q}</h3>
      ${item.options.map((o,j)=>`<label><input type="radio" name="t4q${i}" value="${j}"> ${o}</label>`).join("")}
    </article>`).join("");
}
renderQuiz4();

const quizForm4=document.getElementById("quizForm4");
if(quizForm4) quizForm4.addEventListener("submit",(e)=>{
  e.preventDefault();
  let score=0, review=[];
  quiz4.forEach((item,i)=>{
    const selected=document.querySelector(`input[name="t4q${i}"]:checked`);
    const val=selected?Number(selected.value):-1;
    if(val===item.a) score++;
    review.push({ok:val===item.a,item});
  });
  localStorage.setItem("dt111_topic4_quiz_score",String(score));
  const pct=Math.round(score/quiz4.length*100);
  const result=document.getElementById("quizResult4");
  result.classList.remove("hidden");
  result.innerHTML=`<div class="result-score">${score}/${quiz4.length} · ${pct}%</div>
  <p>${pct>=70?"Good work. Review any incorrect answers below.":"Review the explanations, revisit Topic 4, and try again."}</p>
  ${review.map((r,i)=>`<div class="review-item"><strong>${i+1}. ${r.ok?"✓ Correct":"✗ Review"}</strong><p>${r.item.e}</p></div>`).join("")}`;
  result.scrollIntoView({behavior:"smooth",block:"start"});
});

const assignment4DoneBtn=document.getElementById("assignment4DoneBtn");
if(assignment4DoneBtn) assignment4DoneBtn.addEventListener("click",(e)=>{
  localStorage.setItem("dt111_assignment4_complete","1");
  e.target.textContent="✓ Assignment marked as completed";
});

// Topic 4 lab
const regData = [
  {hours:3,score:50},{hours:4,score:55},{hours:5,score:58},{hours:6,score:61},
  {hours:7,score:64},{hours:8,score:68},{hours:9,score:72},{hours:10,score:75},
  {hours:11,score:79},{hours:12,score:82},{hours:13,score:85},{hours:14,score:89}
];

function calcRegression(data){
  const n=data.length;
  const meanX=data.reduce((a,b)=>a+b.hours,0)/n;
  const meanY=data.reduce((a,b)=>a+b.score,0)/n;
  let num=0, den=0;
  data.forEach(d=>{num+=(d.hours-meanX)*(d.score-meanY); den+=(d.hours-meanX)**2;});
  const slope=num/den;
  const intercept=meanY-slope*meanX;
  return {slope, intercept};
}
function drawRegression(){
  const holder=document.getElementById("regressionChart"); if(!holder) return;
  const {slope, intercept}=calcRegression(regData);
  const W=900,H=320,left=55,bottom=45,top=20,right=20,plotW=W-left-right,plotH=H-top-bottom;
  const xmin=3,xmax=14,ymin=45,ymax=95;
  const sx=x=>left+(x-xmin)/(xmax-xmin)*plotW;
  const sy=y=>top+(ymax-y)/(ymax-ymin)*plotH;
  let body=`<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Regression explorer chart">`;
  body+=`<line x1="${left}" y1="${H-bottom}" x2="${W-right}" y2="${H-bottom}" stroke="#718096" stroke-width="3"/><line x1="${left}" y1="${top}" x2="${left}" y2="${H-bottom}" stroke="#718096" stroke-width="3"/>`;
  [3,5,7,9,11,13,14].forEach(v=>body+=`<text x="${sx(v)}" y="${H-bottom+18}" text-anchor="middle" font-size="12" fill="#667085">${v}</text>`);
  [50,60,70,80,90].forEach(v=>body+=`<text x="${left-8}" y="${sy(v)+4}" text-anchor="end" font-size="12" fill="#667085">${v}</text>`);
  regData.forEach(d=>body+=`<circle cx="${sx(d.hours)}" cy="${sy(d.score)}" r="6" fill="#234f9b"><title>${d.hours} hrs, score ${d.score}</title></circle>`);
  const y1=intercept+slope*xmin, y2=intercept+slope*xmax;
  body+=`<line x1="${sx(xmin)}" y1="${sy(y1)}" x2="${sx(xmax)}" y2="${sy(y2)}" stroke="#c14f4f" stroke-width="5"/>`;
  const slider=document.getElementById("studyHourSlider");
  const xPred=slider?Number(slider.value):8;
  const yPred=intercept+slope*xPred;
  body+=`<circle cx="${sx(xPred)}" cy="${sy(yPred)}" r="7.5" fill="#2f7a50"/><text x="${sx(xPred)+12}" y="${sy(yPred)-10}" font-size="12" font-weight="700" fill="#245d3c">Predicted ≈ ${yPred.toFixed(1)}</text>`;
  body+=`<text x="${W/2}" y="${H-7}" text-anchor="middle" font-size="12" fill="#667085">Study hours per week</text><text x="16" y="${H/2}" text-anchor="middle" font-size="12" fill="#667085" transform="rotate(-90 16 ${H/2})">Final score</text>`;
  body+=`</svg>`;
  holder.innerHTML=body;
  document.getElementById("regSlope").textContent=slope.toFixed(2);
  document.getElementById("regIntercept").textContent=intercept.toFixed(2);
  document.getElementById("regPrediction").textContent=yPred.toFixed(1);
  document.getElementById("regRough").textContent=slope>0 ? "Positive" : (slope<0 ? "Negative" : "Flat");
  document.getElementById("regInterpretation").innerHTML=`A fitted line suggests that each additional study hour is associated with about <strong>${slope.toFixed(2)}</strong> extra score points on average in this teaching dataset. For <strong>${xPred}</strong> study hours, the predicted score is about <strong>${yPred.toFixed(1)}</strong>.`;
}
const studyHourSlider=document.getElementById("studyHourSlider");
if(studyHourSlider){studyHourSlider.addEventListener("input", drawRegression); drawRegression();}

const probSlider=document.getElementById("probSlider");
function renderProbMeaning(){
  if(!probSlider) return;
  const p=Number(probSlider.value)/100;
  document.getElementById("probValue").textContent=p.toFixed(2);
  let msg="";
  if(p===0) msg="A probability of 0 represents an impossible event in the model.";
  else if(p<0.2) msg="This event is very unlikely in the model.";
  else if(p<0.4) msg="This event is somewhat unlikely.";
  else if(p<0.6) msg="This event is neither very unlikely nor very likely.";
  else if(p<0.8) msg="This event is fairly likely.";
  else if(p<1) msg="This event is very likely.";
  else msg="A probability of 1 represents certainty in the model.";
  document.getElementById("probMeaning").textContent=msg;
}
if(probSlider){probSlider.addEventListener("input", renderProbMeaning); renderProbMeaning();}

document.querySelectorAll("#t4lab .decision-select").forEach(sel=>sel.addEventListener("change",()=>{
  const fb=sel.parentElement.querySelector(".decision-feedback");
  if(!sel.value){fb.textContent="";return;}
  const ok=sel.value===sel.dataset.correct;
  fb.textContent=ok?"✓ Good interpretation.":"✗ Reconsider the meaning of the p-value and the decision rule.";
  fb.className=`decision-feedback ${ok?"good":"bad"}`;
}));


const quiz5 = [
  {q:"Which statement best describes supervised learning?",options:["The model learns from inputs with known targets or labels","The model receives no data","The model only creates clusters","The model cannot make predictions"],a:0,e:"Supervised learning uses labelled examples containing inputs and known targets."},
  {q:"Which task is classification?",options:["Predicting a numerical final score","Predicting Pass or Fail","Grouping customers without labels","Estimating the average"],a:1,e:"Classification predicts a category or class, such as Pass/Fail."},
  {q:"Which task is unsupervised learning?",options:["Predicting crop yield from labelled examples","Predicting disease class from labelled images","Grouping observations into clusters without target labels","Predicting final score"],a:2,e:"Unsupervised learning searches for structure without known target labels."},
  {q:"How can linear regression be used in Machine Learning?",options:["As a supervised algorithm that predicts a numerical target","Only as a clustering algorithm","Only for image classification","It cannot be used in ML"],a:0,e:"Linear regression can learn a relationship from labelled data and predict numerical values."},
  {q:"What is the basic idea of a decision tree?",options:["Randomly guess a class","Follow a sequence of feature-based questions to reach a prediction","Always fit a straight line","Group points around cluster centres"],a:1,e:"Decision trees use successive questions or splits about input features."},
  {q:"What does K represent in K-means?",options:["Number of features","Number of target classes already supplied","Number of clusters requested","Number of test examples"],a:2,e:"K is the number of clusters the algorithm is instructed to create."},
  {q:"Why is a test set useful?",options:["It provides unseen examples for evaluating generalisation","It helps the model memorise training data","It guarantees perfect accuracy","It replaces training data"],a:0,e:"A held-out test set provides evidence of how the trained model performs on new examples."},
  {q:"What is overfitting?",options:["The model is too simple to learn any pattern","The model learns training details too closely and performs poorly on new data","The model has no training data","The model always predicts the mean"],a:1,e:"Overfitting occurs when performance on training data is much better than performance on unseen data."},
  {q:"What is underfitting?",options:["The model is too simple to capture important patterns","The model memorises every training record","The test data are too large","The model has many clusters"],a:0,e:"Underfitting occurs when the model is too simple to capture important patterns even in training data."},
  {q:"What does generalisation mean?",options:["Performing well on new data not used for training","Memorising every training example","Using only one feature","Always using an 80/20 split"],a:0,e:"Generalisation is the ability to perform well on unseen examples."}
];

function renderQuiz5(){
  const holder=document.getElementById("quizQuestions5");
  if(!holder) return;
  holder.innerHTML=quiz5.map((item,i)=>`
    <article class="quiz-question">
      <h3>${i+1}. ${item.q}</h3>
      ${item.options.map((o,j)=>`<label><input type="radio" name="t5q${i}" value="${j}"> ${o}</label>`).join("")}
    </article>`).join("");
}
renderQuiz5();

const quizForm5=document.getElementById("quizForm5");
if(quizForm5) quizForm5.addEventListener("submit",(e)=>{
  e.preventDefault();
  let score=0, review=[];
  quiz5.forEach((item,i)=>{
    const selected=document.querySelector(`input[name="t5q${i}"]:checked`);
    const val=selected?Number(selected.value):-1;
    if(val===item.a) score++;
    review.push({ok:val===item.a,item});
  });
  localStorage.setItem("dt111_topic5_quiz_score",String(score));
  const pct=Math.round(score/quiz5.length*100);
  const result=document.getElementById("quizResult5");
  result.classList.remove("hidden");
  result.innerHTML=`<div class="result-score">${score}/${quiz5.length} · ${pct}%</div>
  <p>${pct>=70?"Good work. Review any incorrect answers below.":"Review the explanations, revisit Topic 5, and try again."}</p>
  ${review.map((r,i)=>`<div class="review-item"><strong>${i+1}. ${r.ok?"✓ Correct":"✗ Review"}</strong><p>${r.item.e}</p></div>`).join("")}`;
  result.scrollIntoView({behavior:"smooth",block:"start"});
});

const assignment5DoneBtn=document.getElementById("assignment5DoneBtn");
if(assignment5DoneBtn) assignment5DoneBtn.addEventListener("click",(e)=>{
  localStorage.setItem("dt111_assignment5_complete","1");
  e.target.textContent="✓ Assignment marked as completed";
});

// Topic 5 ML Lab: supervised vs unsupervised
const mlScenario=document.getElementById("mlScenario");
const mlScenarioAnswer=document.getElementById("mlScenarioAnswer");
const mlScenarioInfo={
  score:`<strong>Supervised learning — regression.</strong> Historical examples contain input features and a known numerical target: final score.`,
  spam:`<strong>Supervised learning — classification.</strong> The training examples already say which emails are spam and which are not.`,
  groups:`<strong>Unsupervised learning — clustering.</strong> No target group labels are supplied; the goal is to discover similar production profiles.`,
  customers:`<strong>Unsupervised learning — clustering.</strong> The algorithm looks for customer groups without predefined segment labels.`
};
function renderMlScenario(){if(mlScenario&&mlScenarioAnswer) mlScenarioAnswer.innerHTML=mlScenarioInfo[mlScenario.value];}
if(mlScenario){mlScenario.addEventListener("change",renderMlScenario);renderMlScenario();}

// Decision-tree explorer
const treeAttendance=document.getElementById("treeAttendance");
const treeAssignment=document.getElementById("treeAssignment");
function renderTreeExplorer(){
  if(!treeAttendance||!treeAssignment) return;
  const a=Number(treeAttendance.value), s=Number(treeAssignment.value);
  document.getElementById("treeAttendanceValue").textContent=a;
  document.getElementById("treeAssignmentValue").textContent=s;
  let pred,path;
  if(a>=80){pred="PASS";path=`Attendance ${a}% ≥ 80% → PASS`;}
  else if(s>=65){pred="PASS";path=`Attendance ${a}% < 80% → Assignment ${s} ≥ 65 → PASS`;}
  else{pred="FAIL";path=`Attendance ${a}% < 80% → Assignment ${s} < 65 → FAIL`;}
  const cls=pred==="PASS"?"tree-pass":"tree-fail";
  document.getElementById("treeResult").innerHTML=`<div class="${cls}">${pred}</div><p>${path}</p><small>This is a teaching rule, not a real university prediction model.</small>`;
}
if(treeAttendance&&treeAssignment){
  treeAttendance.addEventListener("input",renderTreeExplorer);
  treeAssignment.addEventListener("input",renderTreeExplorer);
  renderTreeExplorer();
}

// K-means explorer
const kmeansPoints=[
  [2.0,2.2],[2.5,2.8],[3.1,2.3],[3.5,3.0],[2.7,3.5],
  [6.0,6.4],[6.5,5.8],[7.2,6.6],[7.7,5.9],[6.8,7.2],
  [7.2,2.0],[7.8,2.7],[8.4,2.2],[8.7,3.1],[7.9,3.6],
  [4.5,4.4],[4.9,4.8],[5.2,4.2]
];
const clusterColours=["#2f7a50","#7d68b5","#c28b2f","#3f7eb5"];

function runKMeans(points,k,iterations=12){
  let centres=[];
  const seedIndices=k===2?[1,11]:k===3?[1,6,12]:[1,6,12,16];
  centres=seedIndices.slice(0,k).map(i=>[...points[i]]);
  let assigns=new Array(points.length).fill(0);
  for(let it=0;it<iterations;it++){
    assigns=points.map(p=>{
      let best=0,bestD=Infinity;
      centres.forEach((c,ci)=>{
        const d=(p[0]-c[0])**2+(p[1]-c[1])**2;
        if(d<bestD){bestD=d;best=ci;}
      });
      return best;
    });
    centres=centres.map((c,ci)=>{
      const group=points.filter((p,i)=>assigns[i]===ci);
      if(!group.length) return c;
      return [
        group.reduce((a,p)=>a+p[0],0)/group.length,
        group.reduce((a,p)=>a+p[1],0)/group.length
      ];
    });
  }
  return {assigns,centres};
}
function renderKMeans(){
  const el=document.getElementById("kmeansChart");
  const sel=document.getElementById("kmeansK");
  if(!el||!sel) return;
  const k=Number(sel.value),res=runKMeans(kmeansPoints,k);
  const W=900,H=340,left=55,bottom=42,top=20,right=20,plotW=W-left-right,plotH=H-top-bottom;
  const sx=x=>left+(x-1.5)/(9-1.5)*plotW;
  const sy=y=>top+(7.8-y)/(7.8-1.5)*plotH;
  let body=`<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="K-means clustering explorer">`;
  body+=`<line x1="${left}" y1="${H-bottom}" x2="${W-right}" y2="${H-bottom}" stroke="#718096"/><line x1="${left}" y1="${top}" x2="${left}" y2="${H-bottom}" stroke="#718096"/>`;
  kmeansPoints.forEach((p,i)=>body+=`<circle cx="${sx(p[0])}" cy="${sy(p[1])}" r="7" fill="${clusterColours[res.assigns[i]]}" opacity=".88"><title>Point ${i+1}, cluster ${res.assigns[i]+1}</title></circle>`);
  res.centres.forEach((c,i)=>body+=`<g transform="translate(${sx(c[0])},${sy(c[1])})"><line x1="-10" y1="0" x2="10" y2="0" stroke="${clusterColours[i]}" stroke-width="4"/><line x1="0" y1="-10" x2="0" y2="10" stroke="${clusterColours[i]}" stroke-width="4"/></g>`);
  body+=`<text x="${W/2}" y="${H-7}" text-anchor="middle" font-size="12" fill="#667085">Feature 1</text><text x="16" y="${H/2}" text-anchor="middle" font-size="12" fill="#667085" transform="rotate(-90 16 ${H/2})">Feature 2</text></svg>`;
  el.innerHTML=body;
  const counts=Array.from({length:k},(_,ci)=>res.assigns.filter(a=>a===ci).length);
  document.getElementById("kmeansMessage").innerHTML=`K = <strong>${k}</strong>. Cluster sizes: ${counts.map((n,i)=>`C${i+1}=${n}`).join(", ")}. Notice how changing K changes the grouping even though the data points themselves do not change.`;
}
const kmeansK=document.getElementById("kmeansK");
if(kmeansK){kmeansK.addEventListener("change",renderKMeans);renderKMeans();}

// Train/test split explorer using the Topic 5 regression-style data
const splitData=[
  {x:3,y:48},{x:4,y:54},{x:5,y:59},{x:6,y:63},{x:7,y:66},{x:8,y:69},
  {x:9,y:72},{x:10,y:76},{x:11,y:79},{x:12,y:83},{x:13,y:86},{x:14,y:90},
  {x:5,y:56},{x:6,y:61},{x:8,y:68},{x:10,y:75},{x:12,y:82},{x:4,y:50}
];
const splitOrder=[2,11,5,14,0,8,16,4,12,7,1,15,10,6,17,3,13,9];
function fitLine(data){
  const mx=data.reduce((a,d)=>a+d.x,0)/data.length;
  const my=data.reduce((a,d)=>a+d.y,0)/data.length;
  let num=0,den=0;
  data.forEach(d=>{num+=(d.x-mx)*(d.y-my);den+=(d.x-mx)**2;});
  const slope=den?num/den:0,intercept=my-slope*mx;
  return {slope,intercept};
}
function mae(data,model){
  if(!data.length) return 0;
  return data.reduce((a,d)=>a+Math.abs(d.y-(model.intercept+model.slope*d.x)),0)/data.length;
}
function renderSplitExplorer(){
  const slider=document.getElementById("splitSlider");
  if(!slider) return;
  const pct=Number(slider.value);
  const nTrain=Math.max(2,Math.round(splitData.length*pct/100));
  const trainIdx=new Set(splitOrder.slice(0,nTrain));
  const train=splitData.filter((d,i)=>trainIdx.has(i));
  const test=splitData.filter((d,i)=>!trainIdx.has(i));
  const model=fitLine(train);
  const trMae=mae(train,model),teMae=mae(test,model);
  document.getElementById("splitValue").textContent=pct;
  document.getElementById("trainCount").textContent=train.length;
  document.getElementById("testCount").textContent=test.length;
  document.getElementById("trainMAE").textContent=trMae.toFixed(1);
  document.getElementById("testMAE").textContent=test.length?teMae.toFixed(1):"–";
  document.getElementById("splitMessage").innerHTML=`With a <strong>${pct}/${100-pct}</strong> split, the model learns from ${train.length} examples and is evaluated on ${test.length} unseen examples. This single teaching split is illustrative; real validation should consider dataset size, representativeness and repeated/cross-validation strategies when appropriate.`;
}
const splitSlider=document.getElementById("splitSlider");
if(splitSlider){splitSlider.addEventListener("input",renderSplitExplorer);renderSplitExplorer();}


const quiz6 = [
  {q:"Which statement best describes Artificial Intelligence?",options:["Only systems that use neural networks","A broad field covering reasoning, search, learning, perception and other intelligent tasks","Only physical robots","A synonym for spreadsheets"],a:1,e:"AI is a broad field that includes multiple approaches such as search, logic, planning and Machine Learning."},
  {q:"What is a state space?",options:["The set of possible states reachable in a problem","Only the final answer","A training/test split","A neural-network layer"],a:0,e:"A state space contains the possible problem configurations that a search algorithm may explore."},
  {q:"How does Breadth-First Search explore?",options:["One branch as deeply as possible first","Level by level from the start","Randomly","Using cluster centres"],a:1,e:"BFS visits states in increasing depth from the start."},
  {q:"What is a heuristic in search?",options:["A guaranteed final answer","An estimate that helps guide search toward promising states","A type of target label","A neural-network weight"],a:1,e:"A heuristic estimates how promising or close a state is relative to the goal."},
  {q:"What does DFS normally do?",options:["Explore one branch deeply before backtracking","Always find the shortest path","Train a classifier","Apply IF-THEN rules"],a:0,e:"Depth-First Search follows one branch deeply before backtracking to try alternatives."},
  {q:"In rule-based AI, what is inference?",options:["Changing every fact","Deriving conclusions from facts and rules","Splitting training data","Clustering observations"],a:1,e:"Inference applies knowledge and rules to derive a conclusion."},
  {q:"Which is an example of a rule?",options:["Student_ID = 2026004","IF soil is dry AND rain is not expected THEN irrigation is needed","K = 3","Accuracy = 90%"],a:1,e:"A rule connects conditions to a conclusion or action."},
  {q:"What is the role of weights in a neural network?",options:["They determine the influence of connections between nodes","They are student registration numbers","They are search goals","They define K-means clusters directly"],a:0,e:"Weights control the influence passed through network connections and are adjusted during training."},
  {q:"What generally happens during neural-network training?",options:["Weights are adjusted to reduce prediction error","The input data are deleted","Every node becomes identical","The network stops using examples"],a:0,e:"Training repeatedly compares outputs with targets and adjusts weights to reduce error."},
  {q:"What is the best general principle for choosing an AI technique?",options:["Always use the most complex method","Match the method to the problem, data, knowledge and goals","Always use neural networks","Use search for every problem"],a:1,e:"Different AI techniques are suited to different problem structures; complexity alone is not a reason to choose a method."}
];

function renderQuiz6(){
  const holder=document.getElementById("quizQuestions6");
  if(!holder) return;
  holder.innerHTML=quiz6.map((item,i)=>`
    <article class="quiz-question">
      <h3>${i+1}. ${item.q}</h3>
      ${item.options.map((o,j)=>`<label><input type="radio" name="t6q${i}" value="${j}"> ${o}</label>`).join("")}
    </article>`).join("");
}
renderQuiz6();

const quizForm6=document.getElementById("quizForm6");
if(quizForm6) quizForm6.addEventListener("submit",(e)=>{
  e.preventDefault();
  let score=0,review=[];
  quiz6.forEach((item,i)=>{
    const selected=document.querySelector(`input[name="t6q${i}"]:checked`);
    const val=selected?Number(selected.value):-1;
    if(val===item.a) score++;
    review.push({ok:val===item.a,item});
  });
  localStorage.setItem("dt111_topic6_quiz_score",String(score));
  const pct=Math.round(score/quiz6.length*100);
  const result=document.getElementById("quizResult6");
  result.classList.remove("hidden");
  result.innerHTML=`<div class="result-score">${score}/${quiz6.length} · ${pct}%</div>
  <p>${pct>=70?"Good work. Review any incorrect answers below.":"Review the explanations, revisit Topic 6, and try again."}</p>
  ${review.map((r,i)=>`<div class="review-item"><strong>${i+1}. ${r.ok?"✓ Correct":"✗ Review"}</strong><p>${r.item.e}</p></div>`).join("")}`;
  result.scrollIntoView({behavior:"smooth",block:"start"});
});

const assignment6DoneBtn=document.getElementById("assignment6DoneBtn");
if(assignment6DoneBtn) assignment6DoneBtn.addEventListener("click",(e)=>{
  localStorage.setItem("dt111_assignment6_complete","1");
  e.target.textContent="✓ Assignment marked as completed";
});

// ---------- Topic 6 Search Explorer ----------
const searchRows=6, searchCols=6, searchStart=[0,0], searchGoal=[5,5];
const searchWalls=new Set(["0,2","1,2","2,2","3,4","4,1","4,2","4,4"]);
let searchTimer=null;
const searchDirs=[[0,1],[1,0],[0,-1],[-1,0]];
const searchKey=(r,c)=>`${r},${c}`;
const searchParse=k=>k.split(",").map(Number);
const searchValid=(r,c)=>r>=0&&r<searchRows&&c>=0&&c<searchCols&&!searchWalls.has(searchKey(r,c));

function buildSearchGrid(){
  const grid=document.getElementById("searchGrid"); if(!grid)return;
  grid.innerHTML="";
  for(let r=0;r<searchRows;r++){
    for(let c=0;c<searchCols;c++){
      const cell=document.createElement("div");
      cell.className="search-cell";
      cell.dataset.key=searchKey(r,c);
      if(r===searchStart[0]&&c===searchStart[1]){cell.classList.add("search-start");cell.textContent="S";}
      else if(r===searchGoal[0]&&c===searchGoal[1]){cell.classList.add("search-goal");cell.textContent="G";}
      else if(searchWalls.has(searchKey(r,c))){cell.classList.add("search-wall");}
      grid.appendChild(cell);
    }
  }
}
function searchCell(k){return document.querySelector(`#searchGrid .search-cell[data-key="${k}"]`);}
function reconstructSearchPath(parent,goalKey){
  const path=[]; let cur=goalKey;
  while(cur!==undefined&&cur!==null){path.push(cur);cur=parent[cur];}
  return path.reverse();
}
function runBFS(){
  const s=searchKey(...searchStart),g=searchKey(...searchGoal),q=[s],seen=new Set([s]),parent={},order=[];
  while(q.length){
    const cur=q.shift(); order.push(cur); if(cur===g)break;
    const [r,c]=searchParse(cur);
    for(const [dr,dc] of searchDirs){const nr=r+dr,nc=c+dc,k=searchKey(nr,nc);if(searchValid(nr,nc)&&!seen.has(k)){seen.add(k);parent[k]=cur;q.push(k);}}
  }
  return {order,path:reconstructSearchPath(parent,g)};
}
function runDFS(){
  const s=searchKey(...searchStart),g=searchKey(...searchGoal),stack=[s],seen=new Set(),parent={},order=[];
  while(stack.length){
    const cur=stack.pop(); if(seen.has(cur))continue; seen.add(cur);order.push(cur);if(cur===g)break;
    const [r,c]=searchParse(cur);
    const neighbours=[];
    for(const [dr,dc] of searchDirs){const nr=r+dr,nc=c+dc,k=searchKey(nr,nc);if(searchValid(nr,nc)&&!seen.has(k))neighbours.push(k);}
    for(let i=neighbours.length-1;i>=0;i--){const k=neighbours[i];if(parent[k]===undefined&&k!==s)parent[k]=cur;stack.push(k);}
  }
  return {order,path:reconstructSearchPath(parent,g)};
}
function runAStar(){
  const s=searchKey(...searchStart),g=searchKey(...searchGoal);
  const h=k=>{const [r,c]=searchParse(k);return Math.abs(r-searchGoal[0])+Math.abs(c-searchGoal[1]);};
  let open=[s]; const came={},gScore={[s]:0},closed=new Set(),order=[];
  while(open.length){
    open.sort((a,b)=>(gScore[a]+h(a))-(gScore[b]+h(b)));
    const cur=open.shift(); if(closed.has(cur))continue; closed.add(cur);order.push(cur);if(cur===g)break;
    const [r,c]=searchParse(cur);
    for(const [dr,dc] of searchDirs){
      const nr=r+dr,nc=c+dc,k=searchKey(nr,nc); if(!searchValid(nr,nc)||closed.has(k))continue;
      const tentative=gScore[cur]+1;
      if(gScore[k]===undefined||tentative<gScore[k]){came[k]=cur;gScore[k]=tentative;if(!open.includes(k))open.push(k);}
    }
  }
  return {order,path:reconstructSearchPath(came,g)};
}
function resetSearchVisual(){
  if(searchTimer){clearInterval(searchTimer);searchTimer=null;}
  buildSearchGrid();
  const v=document.getElementById("searchVisited"),p=document.getElementById("searchPathLength"),m=document.getElementById("searchMessage");
  if(v)v.textContent="–"; if(p)p.textContent="–"; if(m)m.textContent="Choose an algorithm and run the search.";
}
function animateSearch(result,label){
  if(searchTimer){clearInterval(searchTimer);searchTimer=null;}
  buildSearchGrid();
  let i=0;
  searchTimer=setInterval(()=>{
    if(i<result.order.length){
      const k=result.order[i++],cell=searchCell(k);
      if(cell&&!cell.classList.contains("search-start")&&!cell.classList.contains("search-goal"))cell.classList.add("search-visited");
    }else{
      clearInterval(searchTimer);searchTimer=null;
      result.path.forEach(k=>{const cell=searchCell(k);if(cell&&!cell.classList.contains("search-start")&&!cell.classList.contains("search-goal"))cell.classList.add("search-path");});
      document.getElementById("searchVisited").textContent=result.order.length;
      document.getElementById("searchPathLength").textContent=Math.max(0,result.path.length-1);
      document.getElementById("searchMessage").innerHTML=`<strong>${label}</strong> visited ${result.order.length} states and returned a path of ${Math.max(0,result.path.length-1)} steps. Compare this with another strategy.`;
    }
  },55);
}
buildSearchGrid();
const runSearchBtn=document.getElementById("runSearchBtn");
if(runSearchBtn)runSearchBtn.addEventListener("click",()=>{
  const alg=document.getElementById("searchAlgorithm").value;
  const result=alg==="bfs"?runBFS():alg==="dfs"?runDFS():runAStar();
  const label=alg==="bfs"?"Breadth-First Search":alg==="dfs"?"Depth-First Search":"A* Search";
  animateSearch(result,label);
});
const resetSearchBtn=document.getElementById("resetSearchBtn");
if(resetSearchBtn)resetSearchBtn.addEventListener("click",resetSearchVisual);

// ---------- Rule-based reasoning ----------
function renderLogic(){
  const dry=document.getElementById("factDry"),noRain=document.getElementById("factNoRain"),water=document.getElementById("factWater"),out=document.getElementById("logicOutput");
  if(!dry||!noRain||!water||!out)return;
  const irrigation=dry.checked&&noRain.checked;
  const irrigateNow=irrigation&&water.checked;
  const conclusions=[];
  if(irrigation) conclusions.push("Rule 1 fires → irrigation is needed.");
  else conclusions.push("Rule 1 does not fire → irrigation need cannot be inferred from these facts.");
  if(irrigateNow) conclusions.push("Rule 2 fires → irrigate now.");
  else conclusions.push("Rule 2 does not fire.");
  out.innerHTML=conclusions.map(x=>`<div>${x}</div>`).join("");
}
["factDry","factNoRain","factWater"].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener("change",renderLogic);});
renderLogic();

// ---------- Neural-network activation explorer ----------
const nnSigmoid=x=>1/(1+Math.exp(-x));
function renderNN(){
  const hEl=document.getElementById("nnHours"),aEl=document.getElementById("nnAttendance");if(!hEl||!aEl)return;
  const hours=Number(hEl.value),attendance=Number(aEl.value);
  const x1=hours/14,x2=(attendance-50)/50;
  const h1=nnSigmoid(2.0*x1+1.0*x2-1.0);
  const h2=nnSigmoid(-1.0*x1+2.5*x2-0.8);
  const h3=nnSigmoid(1.5*x1+1.5*x2-1.2);
  const out=nnSigmoid(1.2*h1+1.0*h2+0.8*h3-1.2);
  document.getElementById("nnHoursValue").textContent=hours;
  document.getElementById("nnAttendanceValue").textContent=attendance;
  const setAct=(id,val)=>{const n=document.getElementById(id);if(n){n.style.opacity=(0.28+0.72*val).toFixed(2);n.title=`Activation: ${val.toFixed(2)}`;}};
  setAct("nnInput1",x1);setAct("nnInput2",x2);setAct("nnH1",h1);setAct("nnH2",h2);setAct("nnH3",h3);setAct("nnOutputNode",out);
  document.getElementById("nnOutputValue").textContent=out.toFixed(2);
  document.getElementById("nnOutputText").innerHTML=`Illustrative output activation = <strong>${out.toFixed(2)}</strong>. Changing an input changes hidden-node activations and therefore the final output. This demonstrates a forward pass only; the network is not trained on real student data.`;
}
["nnHours","nnAttendance"].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener("input",renderNN);});
renderNN();


const quiz7 = [
  {q:"Why should ethics be considered throughout the Data Science and AI lifecycle?",options:["Because only deployment can create harm","Because choices at problem definition, data collection, modelling and deployment can all affect people","Because ethics replaces technical evaluation","Because privacy matters only after a model is released"],a:1,e:"Ethical consequences can arise at every stage, from defining the problem to monitoring the deployed system."},
  {q:"What does data minimisation mean?",options:["Collect all available data","Collect only data reasonably necessary for the intended purpose","Never collect any data","Store data forever"],a:1,e:"Data minimisation reduces unnecessary collection and therefore reduces privacy and misuse risk."},
  {q:"Which statement best distinguishes privacy and security?",options:["They mean exactly the same thing","Privacy concerns appropriate collection/use; security concerns protection against unauthorised access or loss","Security decides whether data should be collected","Privacy only concerns passwords"],a:1,e:"Privacy and security overlap, but they address different questions."},
  {q:"Which is an example of sampling bias?",options:["Historical labels reflect past discrimination","A dataset mostly represents one region while the model is used nationally","A sensor measures one group less accurately","A password is weak"],a:1,e:"Sampling bias occurs when the collected sample does not adequately represent the target population."},
  {q:"What is label bias?",options:["Training labels reflect inconsistent or systematically distorted judgement","The file name is incorrect","The dataset has too many rows","The model uses a label encoder"],a:0,e:"Label bias arises when target labels themselves contain systematic errors or distortions."},
  {q:"Why can overall accuracy hide a fairness problem?",options:["Accuracy cannot be computed","Groups may experience different error rates even when overall performance looks good","Fairness only concerns model speed","Accuracy always proves fairness"],a:1,e:"Aggregate performance can conceal subgroup differences in false positives, false negatives or other outcomes."},
  {q:"What does accountability mean in responsible AI?",options:["Nobody is responsible because the algorithm decided","People and organisations remain responsible for how AI is designed, used and corrected","Only users are responsible","Only model accuracy matters"],a:1,e:"Human and organisational responsibility remains even when AI supports or automates a decision."},
  {q:"Why can human oversight be important?",options:["It can provide review, correction, context and appeal for important decisions","It guarantees every decision is perfect","It removes the need to evaluate the model","It makes privacy irrelevant"],a:0,e:"Human oversight can help manage exceptions, errors and high-stakes consequences."},
  {q:"Which is a possible societal risk of AI?",options:["Improved assistive technology","Faster scientific analysis","Unequal access and unfair exclusion","Better route planning"],a:2,e:"AI may create unequal access, exclusion, misinformation, privacy risks and other societal harms if not responsibly governed."},
  {q:"Which statement best describes responsible AI?",options:["A disclaimer placed below the model output","A lifecycle approach combining technical evaluation, safeguards, transparency, oversight and monitoring","Using the newest AI model","Achieving the highest accuracy regardless of impact"],a:1,e:"Responsible AI is an ongoing process involving both technical and organisational safeguards."}
];

function renderQuiz7(){
  const holder=document.getElementById("quizQuestions7");
  if(!holder) return;
  holder.innerHTML=quiz7.map((item,i)=>`
    <article class="quiz-question">
      <h3>${i+1}. ${item.q}</h3>
      ${item.options.map((o,j)=>`<label><input type="radio" name="t7q${i}" value="${j}"> ${o}</label>`).join("")}
    </article>`).join("");
}
renderQuiz7();

const quizForm7=document.getElementById("quizForm7");
if(quizForm7) quizForm7.addEventListener("submit",(e)=>{
  e.preventDefault();
  let score=0,review=[];
  quiz7.forEach((item,i)=>{
    const selected=document.querySelector(`input[name="t7q${i}"]:checked`);
    const val=selected?Number(selected.value):-1;
    if(val===item.a) score++;
    review.push({ok:val===item.a,item});
  });
  localStorage.setItem("dt111_topic7_quiz_score",String(score));
  const pct=Math.round(score/quiz7.length*100);
  const result=document.getElementById("quizResult7");
  result.classList.remove("hidden");
  result.innerHTML=`<div class="result-score">${score}/${quiz7.length} · ${pct}%</div>
  <p>${pct>=70?"Good work. Review any incorrect answers below.":"Review the explanations, revisit Topic 7, and try again."}</p>
  ${review.map((r,i)=>`<div class="review-item"><strong>${i+1}. ${r.ok?"✓ Correct":"✗ Review"}</strong><p>${r.item.e}</p></div>`).join("")}`;
  result.scrollIntoView({behavior:"smooth",block:"start"});
});

const assignment7DoneBtn=document.getElementById("assignment7DoneBtn");
if(assignment7DoneBtn) assignment7DoneBtn.addEventListener("click",(e)=>{
  localStorage.setItem("dt111_assignment7_complete","1");
  e.target.textContent="✓ Assignment marked as completed";
});

// Topic 7 data-minimisation challenge.
const checkMinDataBtn=document.getElementById("checkMinDataBtn");
if(checkMinDataBtn) checkMinDataBtn.addEventListener("click",()=>{
  const selected=[...document.querySelectorAll(".min-data:checked")].map(x=>x.value);
  const needed=["location","route"];
  const unnecessary=["religion","politics","health","contacts"];
  const missing=needed.filter(x=>!selected.includes(x));
  const extra=unnecessary.filter(x=>selected.includes(x));
  const out=document.getElementById("minDataFeedback");
  if(!missing.length&&!extra.length){
    out.innerHTML="<strong>Good.</strong> Current location and route/destination are relevant to the stated purpose. The other fields are not reasonably needed for estimating shuttle arrival.";
  }else{
    const parts=[];
    if(missing.length) parts.push(`Consider whether ${missing.join(" and ")} is needed for the stated service.`);
    if(extra.length) parts.push(`Reconsider unnecessary personal data: ${extra.join(", ")}.`);
    out.innerHTML="<strong>Review your selection.</strong> "+parts.join(" ");
  }
});

// Bias-source challenges.
document.querySelectorAll(".bias-select").forEach(sel=>sel.addEventListener("change",()=>{
  const fb=sel.parentElement.querySelector(".decision-feedback");
  if(!sel.value){fb.textContent="";return;}
  const ok=sel.value===sel.dataset.correct;
  fb.textContent=ok?"✓ Good diagnosis.":"✗ Reconsider where the distortion first enters the system.";
  fb.className=`decision-feedback ${ok?"good":"bad"}`;
}));

// Fairness audit explorer.
const fairnessCases={
  baseline:{
    A:{tp:45,fn:5,fp:5,tn:45},
    B:{tp:35,fn:15,fp:5,tn:45},
    text:"The baseline model has a much higher false-negative rate for Group B. Overall accuracy alone would not describe this disparity."
  },
  adjusted:{
    A:{tp:43,fn:7,fp:7,tn:43},
    B:{tp:42,fn:8,fp:8,tn:42},
    text:"The adjusted example reduces the false-negative-rate gap, but it changes other error rates too. Fairness choices can involve trade-offs, so the relevant harm and context matter."
  }
};
function rate(num,den){return den?100*num/den:0}
function groupMetrics(c){
  const total=c.tp+c.fn+c.fp+c.tn;
  return {
    accuracy:rate(c.tp+c.tn,total),
    fnr:rate(c.fn,c.tp+c.fn),
    fpr:rate(c.fp,c.fp+c.tn)
  };
}
function renderFairness(){
  const sel=document.getElementById("fairnessVersion"); if(!sel)return;
  const d=fairnessCases[sel.value],a=groupMetrics(d.A),b=groupMetrics(d.B);
  document.getElementById("fairAAccuracy").textContent=a.accuracy.toFixed(0)+"%";
  document.getElementById("fairAFNR").textContent=a.fnr.toFixed(0)+"%";
  document.getElementById("fairAFPR").textContent=a.fpr.toFixed(0)+"%";
  document.getElementById("fairBAccuracy").textContent=b.accuracy.toFixed(0)+"%";
  document.getElementById("fairBFNR").textContent=b.fnr.toFixed(0)+"%";
  document.getElementById("fairBFPR").textContent=b.fpr.toFixed(0)+"%";
  document.getElementById("fairnessMessage").innerHTML=d.text;
}
const fairnessVersion=document.getElementById("fairnessVersion");
if(fairnessVersion){fairnessVersion.addEventListener("change",renderFairness);renderFairness();}

// Responsible-AI checklist.
function renderRAIChecklist(){
  const boxes=[...document.querySelectorAll(".rai-check")];
  if(!boxes.length)return;
  const count=boxes.filter(b=>b.checked).length;
  const out=document.getElementById("raiChecklistOutput");
  out.innerHTML=`<strong>${count} of ${boxes.length}</strong> responsible-AI safeguards selected.`+
    (count===boxes.length?" This is a stronger starting point, although real projects still require context-specific evidence and governance.":" Consider which omitted safeguard could allow harm to go unnoticed or uncorrected.");
}
document.querySelectorAll(".rai-check").forEach(b=>b.addEventListener("change",renderRAIChecklist));
renderRAIChecklist();


const quiz8 = [
  {q:"Which is an example of AI-powered assistive communication?",options:["Real-time speech-to-text captions","Removing keyboard access","Disabling text resizing","Requiring audio only"],a:0,e:"Speech-to-text can make spoken content accessible to people who cannot reliably use audio."},
  {q:"What is a strong principle for assistive-AI design?",options:["Design with intended users and test with diverse users","Assume one interface fits everyone","Collect as much sensitive data as possible","Remove user control"],a:0,e:"Inclusive design benefits from participation by intended users and real-world accessibility testing."},
  {q:"Which is an example of personalised learning support?",options:["Offering the same inaccessible format to every student","Adapting format, pace or practice while preserving learner choice","Locking every student into one AI-chosen difficulty","Removing teacher review"],a:1,e:"Personalisation should adapt support without removing learner or teacher control."},
  {q:"Why can personalised learning create privacy concerns?",options:["It may collect sensitive performance or disability-related information","It never uses data","Privacy only applies to banking","Accessible formats are private by definition"],a:0,e:"Personalised systems may use sensitive learner data and should minimise and protect that information."},
  {q:"Why is the shortest route not always the most accessible?",options:["Short routes never use maps","A short route may include stairs, rough surfaces or unavailable lifts","Accessible routes must always be longest","GPS cannot represent accessibility"],a:1,e:"Accessibility depends on barriers, facilities and user needs, not distance alone."},
  {q:"What should an accessibility-aware route planner allow?",options:["Only one fixed route criterion","User preferences such as step-free access or lower physical effort","No local data","Only car routes"],a:1,e:"Users have different mobility needs and should be able to express relevant preferences."},
  {q:"Which is an appropriate low-risk use of AI for emotional well-being?",options:["Autonomous psychiatric diagnosis","General check-ins and links to human support services","Prescribing treatment without a clinician","Acting as the only emergency responder"],a:1,e:"General support, reflection and service navigation can be appropriate when limitations and human support are clear."},
  {q:"What should a well-being AI do when a situation exceeds its safe scope?",options:["Pretend to be a clinician","Communicate limitations and connect the user to appropriate qualified human support","Make a diagnosis anyway","Hide uncertainty"],a:1,e:"Escalation and referral are important safeguards when the system should not act alone."},
  {q:"What does providing alternative interaction modes mean?",options:["Making every user rely on speech","Offering suitable alternatives such as text, audio, keyboard, touch or voice","Removing accessibility settings","Using only the newest interface"],a:1,e:"Alternative modes reduce dependence on one sensory or physical interaction channel."},
  {q:"What is the central principle of Topic 8?",options:["AI is valuable only when it is novel","AI should expand access, autonomy and participation while managing risk","Every accessibility problem requires a neural network","Human support should always be removed"],a:1,e:"The curriculum applications are most valuable when technology meaningfully reduces barriers while preserving choice and safety."}
];

function renderQuiz8(){
  const holder=document.getElementById("quizQuestions8");
  if(!holder) return;
  holder.innerHTML=quiz8.map((item,i)=>`
    <article class="quiz-question">
      <h3>${i+1}. ${item.q}</h3>
      ${item.options.map((o,j)=>`<label><input type="radio" name="t8q${i}" value="${j}"> ${o}</label>`).join("")}
    </article>`).join("");
}
renderQuiz8();

const quizForm8=document.getElementById("quizForm8");
if(quizForm8) quizForm8.addEventListener("submit",(e)=>{
  e.preventDefault();
  let score=0,review=[];
  quiz8.forEach((item,i)=>{
    const selected=document.querySelector(`input[name="t8q${i}"]:checked`);
    const val=selected?Number(selected.value):-1;
    if(val===item.a) score++;
    review.push({ok:val===item.a,item});
  });
  localStorage.setItem("dt111_topic8_quiz_score",String(score));
  const pct=Math.round(score/quiz8.length*100);
  const result=document.getElementById("quizResult8");
  result.classList.remove("hidden");
  result.innerHTML=`<div class="result-score">${score}/${quiz8.length} · ${pct}%</div>
  <p>${pct>=70?"Good work. Review any incorrect answers below.":"Review the explanations, revisit Topic 8, and try again."}</p>
  ${review.map((r,i)=>`<div class="review-item"><strong>${i+1}. ${r.ok?"✓ Correct":"✗ Review"}</strong><p>${r.item.e}</p></div>`).join("")}`;
  result.scrollIntoView({behavior:"smooth",block:"start"});
});

const assignment8DoneBtn=document.getElementById("assignment8DoneBtn");
if(assignment8DoneBtn) assignment8DoneBtn.addEventListener("click",(e)=>{
  localStorage.setItem("dt111_assignment8_complete","1");
  e.target.textContent="✓ Assignment marked as completed";
});

// Topic 8 assistive technology matcher.
const assistiveNeed=document.getElementById("assistiveNeed");
const assistiveMatch=document.getElementById("assistiveMatch");
const assistiveMap={
  hearing:`<strong>Useful options:</strong> real-time speech-to-text captions, transcripts and visual alerts. The user should be able to correct caption errors or access the original content.`,
  vision:`<strong>Useful options:</strong> text recognition, text-to-speech, object/scene description and audio navigation. Accuracy and user control are especially important in safety-relevant contexts.`,
  physical:`<strong>Useful options:</strong> voice control, switch access, predictive input or another adaptive interface. Avoid making one input method mandatory.`,
  cognitive:`<strong>Useful options:</strong> simplified instructions, reminders, step-by-step prompts and adjustable pacing. Support should remain configurable by the user.`
};
function renderAssistiveMatch(){if(assistiveNeed&&assistiveMatch)assistiveMatch.innerHTML=assistiveMap[assistiveNeed.value];}
if(assistiveNeed){assistiveNeed.addEventListener("change",renderAssistiveMatch);renderAssistiveMatch();}

// Personalised learning design.
const checkLearningDesignBtn=document.getElementById("checkLearningDesignBtn");
if(checkLearningDesignBtn)checkLearningDesignBtn.addEventListener("click",()=>{
  const selected=[...document.querySelectorAll(".learn-adapt:checked")].map(x=>x.value);
  const positive=["format","pace","teacher","choice"];
  const risky=["lock","secret"];
  const good=positive.filter(x=>selected.includes(x)).length;
  const problems=risky.filter(x=>selected.includes(x));
  let msg=`You selected <strong>${good} of 4</strong> supportive design features.`;
  if(problems.length) msg+=` Reconsider ${problems.length} risky choice${problems.length>1?"s":""}: permanent AI lock-in and unexplained sensitive-data collection reduce learner control or privacy.`;
  else if(good===4) msg+=` This design preserves multiple formats, pacing, teacher review and learner choice.`;
  else msg+=` Consider whether more learner choice, alternative formats or human review should be added.`;
  document.getElementById("learningDesignFeedback").innerHTML=msg;
});

// Accessible route explorer.
const routeRows=5,routeCols=7;
const routeStart="4,0",routeGoal="0,6";
const routeCells={
  "4,0":"start","0,6":"goal",
  "3,1":"stairs","2,1":"stairs","1,1":"stairs",
  "3,3":"rough","2,3":"rough",
  "1,4":"lift","0,4":"lift",
  "4,4":"ramp","3,4":"ramp","2,4":"ramp",
  "1,5":"ramp"
};
const routePaths={
  shortest:["4,0","3,0","3,1","2,1","1,1","0,1","0,2","0,3","0,4","0,5","0,6"],
  stepfree:["4,0","4,1","4,2","4,3","4,4","3,4","2,4","1,4","0,4","0,5","0,6"],
  loweffort:["4,0","4,1","4,2","4,3","4,4","3,4","2,4","2,5","1,5","0,5","0,6"]
};
function buildRouteGrid(){
  const grid=document.getElementById("routeGrid");if(!grid)return;
  grid.innerHTML="";
  for(let r=0;r<routeRows;r++){
    for(let c=0;c<routeCols;c++){
      const k=`${r},${c}`,cell=document.createElement("div");
      cell.className="route-cell";cell.dataset.key=k;
      const type=routeCells[k];
      if(type)cell.classList.add(`route-${type}`);
      if(type==="start")cell.textContent="S";
      else if(type==="goal")cell.textContent="G";
      else if(type==="stairs")cell.textContent="⇅";
      else if(type==="rough")cell.textContent="≈";
      else if(type==="lift")cell.textContent="L";
      else if(type==="ramp")cell.textContent="R";
      grid.appendChild(cell);
    }
  }
}
function renderRoute(){
  buildRouteGrid();
  const sel=document.getElementById("routePriority");if(!sel)return;
  const path=routePaths[sel.value];
  path.forEach(k=>{
    const cell=document.querySelector(`#routeGrid .route-cell[data-key="${k}"]`);
    if(cell&&!cell.classList.contains("route-start")&&!cell.classList.contains("route-goal"))cell.classList.add("route-selected");
  });
  const messages={
    shortest:`<strong>Shortest-distance route:</strong> ${path.length-1} steps, but it uses stairs. It may be unsuitable for a user requiring step-free access.`,
    stepfree:`<strong>Step-free route:</strong> ${path.length-1} steps using the ramp/lift corridor and avoiding the stairs.`,
    loweffort:`<strong>Lower-effort example:</strong> ${path.length-1} steps using accessible facilities and avoiding the rough-surface section.`
  };
  document.getElementById("routeMessage").innerHTML=messages[sel.value];
}
const routePriority=document.getElementById("routePriority");
if(routePriority){routePriority.addEventListener("change",renderRoute);renderRoute();}

// Emotional well-being support boundaries.
document.querySelectorAll(".wellbeing-select").forEach(sel=>sel.addEventListener("change",()=>{
  const fb=sel.parentElement.querySelector(".decision-feedback");
  if(!sel.value){fb.textContent="";return;}
  const ok=sel.value===sel.dataset.correct;
  fb.textContent=ok?"✓ Good boundary judgement.":"✗ Reconsider whether this function can safely be handled by a general AI system alone.";
  fb.className=`decision-feedback ${ok?"good":"bad"}`;
}));

function renderGlossary(filter=""){
  const f=filter.trim().toLowerCase();
  const items=glossary.filter(([t,d])=>(t+" "+d).toLowerCase().includes(f));
  document.getElementById("glossaryList").innerHTML=items.map(([t,d])=>`<div class="glossary-item"><strong>${t}</strong><p>${d}</p></div>`).join("");
}
renderGlossary();
document.getElementById("glossarySearch").addEventListener("input",(e)=>renderGlossary(e.target.value));

function renderProgress(){
  const topic=localStorage.getItem("dt111_topic1_complete")==="1";
  const score=localStorage.getItem("dt111_topic1_quiz_score");
  const assignment=localStorage.getItem("dt111_assignment1_complete")==="1";
  document.getElementById("topicProgressText").textContent=topic?"Completed":"Not completed";
  document.getElementById("topicProgressBar").style.width=topic?"100%":"0%";
  document.getElementById("quizProgressText").textContent=score===null?"Not attempted":`${score}/10`;
  document.getElementById("quizProgressBar").style.width=score===null?"0%":`${Number(score)*10}%`;
  document.getElementById("assignmentProgressText").textContent=assignment?"Completed":"Not completed";
  document.getElementById("assignmentProgressBar").style.width=assignment?"100%":"0%";

  const topic2=localStorage.getItem("dt111_topic2_complete")==="1";
  const score2=localStorage.getItem("dt111_topic2_quiz_score");
  const assignment2=localStorage.getItem("dt111_assignment2_complete")==="1";
  const t2t=document.getElementById("topic2ProgressText"), t2b=document.getElementById("topic2ProgressBar");
  const q2t=document.getElementById("quiz2ProgressText"), q2b=document.getElementById("quiz2ProgressBar");
  const a2t=document.getElementById("assignment2ProgressText"), a2b=document.getElementById("assignment2ProgressBar");
  if(t2t){t2t.textContent=topic2?"Completed":"Not completed";t2b.style.width=topic2?"100%":"0%";}
  if(q2t){q2t.textContent=score2===null?"Not attempted":`${score2}/10`;q2b.style.width=score2===null?"0%":`${Number(score2)*10}%`;}
  if(a2t){a2t.textContent=assignment2?"Completed":"Not completed";a2b.style.width=assignment2?"100%":"0%";}

  const topic3=localStorage.getItem("dt111_topic3_complete")==="1";
  const score3=localStorage.getItem("dt111_topic3_quiz_score");
  const assignment3=localStorage.getItem("dt111_assignment3_complete")==="1";
  const t3t=document.getElementById("topic3ProgressText"), t3b=document.getElementById("topic3ProgressBar");
  const q3t=document.getElementById("quiz3ProgressText"), q3b=document.getElementById("quiz3ProgressBar");
  const a3t=document.getElementById("assignment3ProgressText"), a3b=document.getElementById("assignment3ProgressBar");
  if(t3t){t3t.textContent=topic3?"Completed":"Not completed";t3b.style.width=topic3?"100%":"0%";}
  if(q3t){q3t.textContent=score3===null?"Not attempted":`${score3}/10`;q3b.style.width=score3===null?"0%":`${Number(score3)*10}%`;}
  if(a3t){a3t.textContent=assignment3?"Completed":"Not completed";a3b.style.width=assignment3?"100%":"0%";}

  const topic4=localStorage.getItem("dt111_topic4_complete")==="1";
  const score4=localStorage.getItem("dt111_topic4_quiz_score");
  const assignment4=localStorage.getItem("dt111_assignment4_complete")==="1";
  const t4t=document.getElementById("topic4ProgressText"), t4b=document.getElementById("topic4ProgressBar");
  const q4t=document.getElementById("quiz4ProgressText"), q4b=document.getElementById("quiz4ProgressBar");
  const a4t=document.getElementById("assignment4ProgressText"), a4b=document.getElementById("assignment4ProgressBar");
  if(t4t){t4t.textContent=topic4?"Completed":"Not completed";t4b.style.width=topic4?"100%":"0%";}
  if(q4t){q4t.textContent=score4===null?"Not attempted":`${score4}/10`;q4b.style.width=score4===null?"0%":`${Number(score4)*10}%`;}
  if(a4t){a4t.textContent=assignment4?"Completed":"Not completed";a4b.style.width=assignment4?"100%":"0%";}

  const topic5=localStorage.getItem("dt111_topic5_complete")==="1";
  const score5=localStorage.getItem("dt111_topic5_quiz_score");
  const assignment5=localStorage.getItem("dt111_assignment5_complete")==="1";
  const t5t=document.getElementById("topic5ProgressText"), t5b=document.getElementById("topic5ProgressBar");
  const q5t=document.getElementById("quiz5ProgressText"), q5b=document.getElementById("quiz5ProgressBar");
  const a5t=document.getElementById("assignment5ProgressText"), a5b=document.getElementById("assignment5ProgressBar");
  if(t5t){t5t.textContent=topic5?"Completed":"Not completed";t5b.style.width=topic5?"100%":"0%";}
  if(q5t){q5t.textContent=score5===null?"Not attempted":`${score5}/10`;q5b.style.width=score5===null?"0%":`${Number(score5)*10}%`;}
  if(a5t){a5t.textContent=assignment5?"Completed":"Not completed";a5b.style.width=assignment5?"100%":"0%";}

  const topic6=localStorage.getItem("dt111_topic6_complete")==="1";
  const score6=localStorage.getItem("dt111_topic6_quiz_score");
  const assignment6=localStorage.getItem("dt111_assignment6_complete")==="1";
  const t6t=document.getElementById("topic6ProgressText"), t6b=document.getElementById("topic6ProgressBar");
  const q6t=document.getElementById("quiz6ProgressText"), q6b=document.getElementById("quiz6ProgressBar");
  const a6t=document.getElementById("assignment6ProgressText"), a6b=document.getElementById("assignment6ProgressBar");
  if(t6t){t6t.textContent=topic6?"Completed":"Not completed";t6b.style.width=topic6?"100%":"0%";}
  if(q6t){q6t.textContent=score6===null?"Not attempted":`${score6}/10`;q6b.style.width=score6===null?"0%":`${Number(score6)*10}%`;}
  if(a6t){a6t.textContent=assignment6?"Completed":"Not completed";a6b.style.width=assignment6?"100%":"0%";}

  const topic7=localStorage.getItem("dt111_topic7_complete")==="1";
  const score7=localStorage.getItem("dt111_topic7_quiz_score");
  const assignment7=localStorage.getItem("dt111_assignment7_complete")==="1";
  const t7t=document.getElementById("topic7ProgressText"), t7b=document.getElementById("topic7ProgressBar");
  const q7t=document.getElementById("quiz7ProgressText"), q7b=document.getElementById("quiz7ProgressBar");
  const a7t=document.getElementById("assignment7ProgressText"), a7b=document.getElementById("assignment7ProgressBar");
  if(t7t){t7t.textContent=topic7?"Completed":"Not completed";t7b.style.width=topic7?"100%":"0%";}
  if(q7t){q7t.textContent=score7===null?"Not attempted":`${score7}/10`;q7b.style.width=score7===null?"0%":`${Number(score7)*10}%`;}
  if(a7t){a7t.textContent=assignment7?"Completed":"Not completed";a7b.style.width=assignment7?"100%":"0%";}

  const topic8=localStorage.getItem("dt111_topic8_complete")==="1";
  const score8=localStorage.getItem("dt111_topic8_quiz_score");
  const assignment8=localStorage.getItem("dt111_assignment8_complete")==="1";
  const t8t=document.getElementById("topic8ProgressText"), t8b=document.getElementById("topic8ProgressBar");
  const q8t=document.getElementById("quiz8ProgressText"), q8b=document.getElementById("quiz8ProgressBar");
  const a8t=document.getElementById("assignment8ProgressText"), a8b=document.getElementById("assignment8ProgressBar");
  if(t8t){t8t.textContent=topic8?"Completed":"Not completed";t8b.style.width=topic8?"100%":"0%";}
  if(q8t){q8t.textContent=score8===null?"Not attempted":`${score8}/10`;q8b.style.width=score8===null?"0%":`${Number(score8)*10}%`;}
  if(a8t){a8t.textContent=assignment8?"Completed":"Not completed";a8b.style.width=assignment8?"100%":"0%";}
}
renderProgress();

document.getElementById("resetProgressBtn").addEventListener("click",()=>{
  if(confirm("Reset all locally saved DT 111 progress on this browser?")){
    ["dt111_topic1_complete","dt111_topic1_quiz_score","dt111_assignment1_complete","dt111_topic2_complete","dt111_topic2_quiz_score","dt111_assignment2_complete","dt111_topic3_complete","dt111_topic3_quiz_score","dt111_assignment3_complete","dt111_topic4_complete","dt111_topic4_quiz_score","dt111_assignment4_complete","dt111_topic5_complete","dt111_topic5_quiz_score","dt111_assignment5_complete","dt111_topic6_complete","dt111_topic6_quiz_score","dt111_assignment6_complete","dt111_topic7_complete","dt111_topic7_quiz_score","dt111_assignment7_complete","dt111_topic8_complete","dt111_topic8_quiz_score","dt111_assignment8_complete"].forEach(k=>localStorage.removeItem(k));
    completeBox.checked=false;
    if(completeBox2) completeBox2.checked=false;
    if(completeBox3) completeBox3.checked=false;
    if(completeBox4) completeBox4.checked=false;
    if(completeBox5) completeBox5.checked=false;
    if(completeBox6) completeBox6.checked=false;
    if(completeBox7) completeBox7.checked=false;
    if(completeBox8) completeBox8.checked=false;
    renderProgress();
    document.getElementById("quizResult").classList.add("hidden");
    const qr2=document.getElementById("quizResult2"); if(qr2) qr2.classList.add("hidden");
    const qr3=document.getElementById("quizResult3"); if(qr3) qr3.classList.add("hidden");
    const qr4=document.getElementById("quizResult4"); if(qr4) qr4.classList.add("hidden");
    const qr5=document.getElementById("quizResult5"); if(qr5) qr5.classList.add("hidden");
    const qr6=document.getElementById("quizResult6"); if(qr6) qr6.classList.add("hidden");
    const qr7=document.getElementById("quizResult7"); if(qr7) qr7.classList.add("hidden");
    const qr8=document.getElementById("quizResult8"); if(qr8) qr8.classList.add("hidden");
    document.getElementById("assignmentDoneBtn").textContent="Mark assignment as completed on this device";
    if(assignment2DoneBtn) assignment2DoneBtn.textContent="Mark assignment as completed on this device";
    if(assignment3DoneBtn) assignment3DoneBtn.textContent="Mark assignment as completed on this device";
    if(assignment4DoneBtn) assignment4DoneBtn.textContent="Mark assignment as completed on this device";
    if(assignment5DoneBtn) assignment5DoneBtn.textContent="Mark assignment as completed on this device";
    if(assignment6DoneBtn) assignment6DoneBtn.textContent="Mark assignment as completed on this device";
    if(assignment7DoneBtn) assignment7DoneBtn.textContent="Mark assignment as completed on this device";
    if(assignment8DoneBtn) assignment8DoneBtn.textContent="Mark assignment as completed on this device";
  }
});

const overlay=document.getElementById("presentationOverlay");
function renderSlide(){
  const s=state.slides[state.slideIndex];
  const compact = window.innerHeight < 760 ? " compact" : "";
  document.getElementById("slideStage").innerHTML=`<article class="slide${compact}"><h1>${s.title}</h1><div class="slide-body">${s.body}</div></article>`;
  document.getElementById("slideCounter").textContent=`${state.slideIndex+1} / ${state.slides.length}`;
  document.getElementById("prevSlide").disabled=state.slideIndex===0;
  document.getElementById("nextSlide").textContent=state.slideIndex===state.slides.length-1?"Finish":"Next →";
}
document.getElementById("presentationBtn").addEventListener("click",()=>{state.slides=window.DT111_TOPIC1_SLIDES||slides;state.slideIndex=0;overlay.classList.remove("hidden");renderSlide()});
const presentationBtn2=document.getElementById("presentationBtn2");
if(presentationBtn2) presentationBtn2.addEventListener("click",()=>{state.slides=window.DT111_TOPIC2_SLIDES||[];state.slideIndex=0;overlay.classList.remove("hidden");renderSlide()});
const presentationBtn3=document.getElementById("presentationBtn3");
if(presentationBtn3) presentationBtn3.addEventListener("click",()=>{state.slides=window.DT111_TOPIC3_SLIDES||[];state.slideIndex=0;overlay.classList.remove("hidden");renderSlide()});
const presentationBtn4=document.getElementById("presentationBtn4");
if(presentationBtn4) presentationBtn4.addEventListener("click",()=>{state.slides=window.DT111_TOPIC4_SLIDES||[];state.slideIndex=0;overlay.classList.remove("hidden");renderSlide()});
const presentationBtn5=document.getElementById("presentationBtn5");
if(presentationBtn5) presentationBtn5.addEventListener("click",()=>{state.slides=window.DT111_TOPIC5_SLIDES||[];state.slideIndex=0;overlay.classList.remove("hidden");renderSlide()});
const presentationBtn6=document.getElementById("presentationBtn6");
if(presentationBtn6) presentationBtn6.addEventListener("click",()=>{state.slides=window.DT111_TOPIC6_SLIDES||[];state.slideIndex=0;overlay.classList.remove("hidden");renderSlide()});
const presentationBtn7=document.getElementById("presentationBtn7");
if(presentationBtn7) presentationBtn7.addEventListener("click",()=>{state.slides=window.DT111_TOPIC7_SLIDES||[];state.slideIndex=0;overlay.classList.remove("hidden");renderSlide()});
const presentationBtn8=document.getElementById("presentationBtn8");
if(presentationBtn8) presentationBtn8.addEventListener("click",()=>{state.slides=window.DT111_TOPIC8_SLIDES||[];state.slideIndex=0;overlay.classList.remove("hidden");renderSlide()});
document.getElementById("closePresentation").addEventListener("click",()=>overlay.classList.add("hidden"));
document.getElementById("prevSlide").addEventListener("click",()=>{if(state.slideIndex>0){state.slideIndex--;renderSlide()}});
document.getElementById("nextSlide").addEventListener("click",()=>{
  if(state.slideIndex<state.slides.length-1){state.slideIndex++;renderSlide()} else overlay.classList.add("hidden");
});
document.addEventListener("keydown",(e)=>{
  if(overlay.classList.contains("hidden")) return;
  if(e.key==="ArrowRight"){document.getElementById("nextSlide").click()}
  if(e.key==="ArrowLeft"){document.getElementById("prevSlide").click()}
  if(e.key==="Escape"){overlay.classList.add("hidden")}
});
window.addEventListener("resize",()=>{
  if(!overlay.classList.contains("hidden")) renderSlide();
});
