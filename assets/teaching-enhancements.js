/*
DT 111 course-wide beginner teaching enhancements.
Loaded after the base topic slide files. Existing knowledge is preserved; this layer adds worked examples,
foundational concepts, richer presentation flow and visible note extensions.
*/
(function(){
  "use strict";
  if(window.__DT111_TEACHING_ENHANCEMENTS__) return;
  window.__DT111_TEACHING_ENHANCEMENTS__ = true;

  function addStyles(){
    if(document.querySelector('link[href="assets/teaching-enhancements.css"]')) return;
    const link=document.createElement("link");
    link.rel="stylesheet";
    link.href="assets/teaching-enhancements.css";
    document.head.appendChild(link);
  }

  function slidesFor(n){ return window[`DT111_TOPIC${n}_SLIDES`] || []; }
  function findTitle(n,title){ return slidesFor(n).findIndex(s=>s.title===title); }
  function insertAfter(n,title,newSlides){
    const arr=slidesFor(n);
    if(!arr.length || newSlides.some(ns=>arr.some(s=>s.title===ns.title))) return;
    const i=findTitle(n,title);
    if(i>=0) arr.splice(i+1,0,...newSlides);
  }
  function replaceBody(n,title,body){
    const arr=slidesFor(n); const i=findTitle(n,title);
    if(i>=0) arr[i].body=body;
  }

  function enhanceTopic1(){
    insertAfter(1,"What is Data Science?",[
      {title:"From raw data to a useful decision",body:`<p>Suppose a lecturer sees five marks: <strong>45, 62, 81, 39, 73</strong>.</p><div class="foundation-flow"><div><strong>Data</strong>45, 62, 81, 39, 73</div><div><strong>Information</strong>Mean = 60</div><div><strong>Insight</strong>Two students are struggling</div><div><strong>Question</strong>Is attendance or coursework related?</div><div><strong>Action</strong>Investigate and support</div></div><div class="question-strip">Data Science is valuable because it connects evidence to a meaningful question and decision.</div>`}
    ]);
    insertAfter(1,"Data Science, AI and Machine Learning",[
      {title:"AI is not the same as ordinary automation",body:`<div class="slide-two-col"><div class="visual-card"><h2>Automation</h2><p>Follows predetermined steps.</p><p><strong>Example:</strong> calculate the total of five marks.</p></div><div class="visual-card"><h2>AI</h2><p>Performs tasks involving learning, reasoning, perception, language or complex decision support.</p><p><strong>Example:</strong> classify a crop-leaf image.</p></div></div><p class="slide-note">Some automated systems use AI; many do not. Do not call every computerised process “AI”.</p>`},
      {title:"Four useful questions data analysis can answer",body:`<div class="slide-grid"><div class="slide-box"><h2>Descriptive</h2><p><strong>What happened?</strong><br>Average score, attendance rate, number of cases.</p></div><div class="slide-box"><h2>Diagnostic</h2><p><strong>Why might it have happened?</strong><br>Compare groups and relationships.</p></div><div class="slide-box"><h2>Predictive</h2><p><strong>What may happen next?</strong><br>Estimate an outcome using patterns.</p></div></div><div class="visual-card"><h2>Prescriptive</h2><p><strong>What action should we consider?</strong> Combine evidence, constraints and human judgement to support decisions.</p></div>`}
    ]);
    insertAfter(1,"A simple Data Science workflow",[
      {title:"What is a model?",body:`<div class="slide-two-col"><div><p>A <strong>model</strong> is a simplified representation of a pattern or process. It may be a mathematical equation, a decision tree, a set of rules, or a learned neural network.</p><p>Models deliberately simplify reality so they can help us describe, explain or predict.</p></div><div class="visual-card"><h2>Example</h2><p><strong>Score ≈ 35 + 4 × StudyHours</strong></p><p>This does not describe every student perfectly. It summarises a relationship that may be useful for prediction or discussion.</p></div></div><div class="question-strip">A model is useful when its assumptions, accuracy and limitations fit the decision being made.</div>`}
    ]);
  }

  function enhanceTopic2(){
    insertAfter(2,"Where can data come from?",[
      {title:"Population, sample and census",body:`<div class="slide-grid"><div class="slide-box"><h2>Population</h2><p>All cases we want to understand.</p><p>Example: all first-year DT students.</p></div><div class="slide-box"><h2>Sample</h2><p>A subset observed to learn about the population.</p><p>Example: 80 selected students.</p></div><div class="slide-box"><h2>Census</h2><p>Collect data from every member of the population.</p></div></div><p class="slide-note">A large sample can still mislead if it is not representative.</p>`},
      {title:"Sampling can introduce bias before analysis begins",body:`<p>Suppose we want to understand internet access among all students but collect responses only from students in a computer laboratory.</p><div class="foundation-flow"><div><strong>Target</strong>All students</div><div><strong>Collected from</strong>Computer-lab users</div><div><strong>Problem</strong>Some students are more likely to be included</div><div><strong>Risk</strong>Internet access may be overestimated</div></div><div class="question-strip">Data quality begins with how observations enter the dataset, not only with cleaning afterward.</div>`}
    ]);
    insertAfter(2,"Common forms of data",[
      {title:"Variable types guide analysis",body:`<table class="slide-data-table"><thead><tr><th>Variable type</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td><strong>Nominal</strong></td><td>Categories with no natural order</td><td>Region, programme</td></tr><tr><td><strong>Ordinal</strong></td><td>Ordered categories</td><td>Low / Medium / High</td></tr><tr><td><strong>Discrete numerical</strong></td><td>Countable values</td><td>Number of courses</td></tr><tr><td><strong>Continuous numerical</strong></td><td>Measured values on a scale</td><td>Height, temperature</td></tr></tbody></table><p class="slide-note">The variable type affects which summaries, charts and models make sense.</p>`}
    ]);
    insertAfter(2,"A practical cleaning cycle",[
      {title:"Worked cleaning example",body:`<table class="slide-data-table"><thead><tr><th>ID</th><th>Region</th><th>Age</th><th>Score</th></tr></thead><tbody><tr><td>DS014</td><td>iringa</td><td>21</td><td>78</td></tr><tr><td>DS015</td><td>Iringa</td><td>230</td><td>65</td></tr><tr><td>DS016</td><td>Mbeya</td><td>20</td><td>—</td></tr><tr><td>DS016</td><td>Mbeya</td><td>20</td><td>—</td></tr></tbody></table><div class="foundation-flow"><div><strong>Standardise</strong>iringa → Iringa</div><div><strong>Validate</strong>Age 230 needs investigation</div><div><strong>Missing</strong>Do not blindly replace score</div><div><strong>Duplicate</strong>Check whether DS016 is repeated</div></div>`}
    ]);
    insertAfter(2,"Common preprocessing operations",[
      {title:"Why scaling may matter",body:`<p>Two features can have very different numerical ranges:</p><div class="slide-two-col"><div class="visual-card"><h2>Before scaling</h2><p>Age: <strong>18–25</strong></p><p>Annual income: <strong>500,000–25,000,000</strong></p><p>The large numbers can dominate distance-based methods.</p></div><div class="visual-card success"><h2>After scaling</h2><p>Both variables are transformed to comparable ranges while preserving their relative information.</p><p><strong>Important:</strong> scaling changes representation, not the underlying person.</p></div></div>`}
    ]);
  }

  function enhanceTopic4(){
    insertAfter(4,"Why do we need statistical methods?",[
      {title:"Population, sample, parameter and statistic",body:`<div class="slide-two-col"><div class="visual-card"><h2>Population</h2><p>All cases of interest.</p><p><strong>Parameter:</strong> a numerical characteristic of the population, usually unknown.</p></div><div class="visual-card"><h2>Sample</h2><p>The observed subset.</p><p><strong>Statistic:</strong> a numerical summary calculated from the sample.</p></div></div><div class="question-strip">Statistical inference uses sample evidence to reason cautiously about a wider population.</div>`}
    ]);
    insertAfter(4,"Core probability ideas",[
      {title:"Worked probability example",body:`<p>A class has <strong>40</strong> students. <strong>10</strong> are absent today.</p><div class="slide-grid"><div class="slide-box"><h2>P(absent)</h2><p class="result-number">10 / 40 = 0.25</p></div><div class="slide-box"><h2>P(present)</h2><p class="result-number">30 / 40 = 0.75</p></div><div class="slide-box"><h2>Complement</h2><p>P(present) = 1 − P(absent)</p></div></div>`},
      {title:"Conditional probability asks a more specific question",body:`<p>Suppose 12 students are from Region A, and 3 of those 12 are absent.</p><div class="visual-card"><h2>P(absent | Region A)</h2><p class="result-number">3 / 12 = 0.25</p><p>Read this as: “probability of being absent <strong>given</strong> that the student is from Region A.”</p></div><p class="slide-note">Conditional probability is important because many Data Science questions involve outcomes within particular groups or conditions.</p>`}
    ]);
    insertAfter(4,"Discrete vs continuous",[
      {title:"Common probability distributions — intuition first",body:`<div class="slide-grid"><div class="slide-box"><h2>Bernoulli</h2><p>One trial with two outcomes.</p><p>Pass / Fail</p></div><div class="slide-box"><h2>Binomial</h2><p>Number of successes in repeated independent Bernoulli trials.</p><p>Heads in 10 tosses</p></div><div class="slide-box"><h2>Normal</h2><p>Continuous bell-shaped model used for many approximate measurement patterns.</p></div></div><p class="slide-note">A distribution is a model for how possible values and their probabilities are arranged.</p>`}
    ]);
    insertAfter(4,"Null and alternative hypotheses",[
      {title:"Worked hypothesis-testing story",body:`<p>A lecturer compares a new teaching method with the existing method.</p><div class="foundation-flow"><div><strong>Question</strong>Did average score change?</div><div><strong>H₀</strong>No population mean difference</div><div><strong>H₁</strong>A population mean difference exists</div><div><strong>Sample evidence</strong>Observed means differ</div><div><strong>Test</strong>Is that difference unusually large under H₀?</div></div><div class="question-strip">Hypothesis testing is about evidence against a default model, not proving a claim with certainty.</div>`}
    ]);
    insertAfter(4,"What does a p-value try to express?",[
      {title:"Confidence intervals add useful information",body:`<p>A p-value helps assess evidence against a null model, but it does not show the likely size of an effect.</p><div class="visual-card"><h2>Example</h2><p>Estimated improvement: <strong>5 marks</strong></p><p>95% confidence interval: <strong>2 to 8 marks</strong></p><p>The interval communicates both an estimate and its uncertainty.</p></div><p class="slide-note">For beginners: interpret the interval as a plausible range for the effect under the method's assumptions, not as a guarantee about one particular sample.</p>`}
    ]);
    insertAfter(4,"Regression analysis",[
      {title:"Read a regression equation in plain language",body:`<p>Suppose a fitted model is:</p><div class="visual-card"><p class="big-line">Predicted Score = 35 + 4 × StudyHours</p></div><div class="slide-two-col"><div><h2>Intercept = 35</h2><p>Predicted score when StudyHours = 0.</p></div><div><h2>Slope = 4</h2><p>Each additional study hour is associated with about 4 more predicted marks in this fitted model.</p></div></div><div class="question-strip">For 5 study hours: 35 + 4×5 = <strong>55</strong>.</div>`},
      {title:"Residuals and R² answer different questions",body:`<div class="slide-two-col"><div class="visual-card"><h2>Residual</h2><p>Observed − predicted.</p><p>If observed = 60 and predicted = 55, residual = <strong>5</strong>.</p></div><div class="visual-card"><h2>R²</h2><p>Describes how much variation in the outcome is accounted for by the fitted regression model.</p><p>It does <strong>not</strong> prove causation or model correctness.</p></div></div>`}
    ]);
  }

  function enhanceTopic5(){
    insertAfter(5,"Where Machine Learning fits",[
      {title:"Features and target: the basic ML vocabulary",body:`<table class="slide-data-table"><thead><tr><th>Attendance</th><th>Study hours</th><th>Assignment score</th><th>Final score</th><th>Pass/Fail</th></tr></thead><tbody><tr><td>92%</td><td>8</td><td>78</td><td>82</td><td>Pass</td></tr><tr><td>55%</td><td>2</td><td>45</td><td>48</td><td>Fail</td></tr><tr><td>80%</td><td>6</td><td>70</td><td>74</td><td>Pass</td></tr></tbody></table><p><strong>Features</strong> are input variables used by a model. The <strong>target</strong> is the outcome we want to predict in supervised learning.</p>`}
    ]);
    insertAfter(5,"Supervised vs unsupervised learning",[
      {title:"One dataset can support different ML tasks",body:`<div class="slide-grid"><div class="slide-box"><h2>Regression</h2><p>Predict <strong>Final score</strong>.</p><p>Target is numerical.</p></div><div class="slide-box"><h2>Classification</h2><p>Predict <strong>Pass/Fail</strong>.</p><p>Target is categorical.</p></div><div class="slide-box"><h2>Clustering</h2><p>Discover groups of students.</p><p>No known target label.</p></div></div><div class="question-strip">The same columns do not automatically define the problem. The question determines the learning task.</div>`}
    ]);
    insertAfter(5,"Three task types to remember",[
      {title:"What happens during training?",body:`<div class="concept-ribbon"><span>Training examples</span><b>→</b><span>Model makes predictions</span><b>→</b><span>Measure error</span><b>→</b><span>Adjust model</span><b>→</b><span>Repeat</span></div><p>Different algorithms adjust themselves differently, but the general purpose is the same: learn a pattern that performs well on new data.</p><div class="question-strip">Training performance is not the final goal. <strong>Generalisation</strong> is.</div>`}
    ]);
    insertAfter(5,"Why decision trees are intuitive",[
      {title:"Walk through a classification tree",body:`<div class="foundation-flow"><div><strong>Start</strong>Attendance ≥ 80%?</div><div><strong>No</strong>Assignment ≥ 65?</div><div><strong>Yes</strong>Predict Pass</div><div><strong>No</strong>Predict Fail</div></div><p>Each internal node asks a question, each branch represents an answer, and each leaf produces a prediction.</p><p class="slide-note">A tree can be easy to explain, but a very deep tree may overfit training data.</p>`}
    ]);
    insertAfter(5,"K-means in four steps",[
      {title:"A single K-means iteration",body:`<svg class="inline-chart" viewBox="0 0 720 300" role="img" aria-label="K means illustration"><line x1="50" y1="250" x2="680" y2="250" class="axis"/><line x1="50" y1="35" x2="50" y2="250" class="axis"/><g class="chart-dots"><circle cx="120" cy="205" r="8"/><circle cx="150" cy="185" r="8"/><circle cx="185" cy="215" r="8"/><circle cx="480" cy="95" r="8"/><circle cx="520" cy="115" r="8"/><circle cx="555" cy="75" r="8"/></g><text x="170" y="145" font-size="34" fill="#b42318">×</text><text x="500" y="170" font-size="34" fill="#157347">×</text></svg><div class="foundation-flow"><div><strong>1</strong>Choose K centres</div><div><strong>2</strong>Assign each point to nearest centre</div><div><strong>3</strong>Move centres to group averages</div><div><strong>4</strong>Repeat</div></div><p class="slide-note">Clusters are mathematical groups. Human interpretation is needed to decide whether they have useful real-world meaning.</p>`}
    ]);
    insertAfter(5,"Training is not evaluation",[
      {title:"Train, validation and test sets have different jobs",body:`<div class="foundation-flow"><div><strong>Training</strong>Learn model parameters</div><div><strong>Validation</strong>Compare settings/models during development</div><div><strong>Test</strong>Final check on unseen data</div></div><div class="question-strip">Repeatedly checking the test set during development turns it into part of the development process and weakens its role as an independent final check.</div>`}
    ]);
    insertAfter(5,"Generalisation",[
      {title:"Underfitting, useful fit and overfitting",body:`<div class="slide-grid"><div class="visual-card warning"><h2>Underfitting</h2><p>Too simple to capture important patterns.</p><p>Training: poor<br>New data: poor</p></div><div class="visual-card success"><h2>Useful fit</h2><p>Captures signal without memorising noise.</p><p>Training: good<br>New data: good</p></div><div class="visual-card danger"><h2>Overfitting</h2><p>Fits training details too closely.</p><p>Training: excellent<br>New data: weak</p></div></div>`}
    ]);
    insertAfter(5,"Evaluation depends on the task",[
      {title:"Confusion matrix: look beyond overall accuracy",body:`<div class="confusion"><div class="head"></div><div class="head">Predicted Pass</div><div class="head">Predicted Fail</div><div class="head">Actually Pass</div><div class="good">40<br><strong>True Positive</strong></div><div class="bad">5<br><strong>False Negative</strong></div><div class="head">Actually Fail</div><div class="bad">10<br><strong>False Positive</strong></div><div class="good">45<br><strong>True Negative</strong></div></div><p><strong>Precision</strong> asks: when the model predicts a class, how often is it right? <strong>Recall</strong> asks: of the real cases in that class, how many did the model find?</p><div class="question-strip">Which error matters most depends on the real decision.</div>`}
    ]);
  }

  function enhanceTopic6(){
    insertAfter(6,"What is Artificial Intelligence?",[
      {title:"AI, Machine Learning, Deep Learning and Generative AI",body:`<div class="foundation-flow"><div><strong>AI</strong>Broad field of intelligent computer behaviour</div><div><strong>Machine Learning</strong>Learn patterns from data</div><div><strong>Deep Learning</strong>ML using multi-layer neural networks</div><div><strong>Generative AI</strong>Systems that generate new content such as text, images, audio or code</div></div><p class="slide-note">These terms overlap, but they are not interchangeable.</p>`}
    ]);
    insertAfter(6,"AI as problem solving",[
      {title:"A state-space example: finding a route",body:`<svg class="inline-chart" viewBox="0 0 720 280" role="img" aria-label="Simple search graph"><g stroke="#9fb2cc" stroke-width="4"><line x1="90" y1="140" x2="245" y2="70"/><line x1="90" y1="140" x2="245" y2="210"/><line x1="245" y1="70" x2="430" y2="80"/><line x1="245" y1="210" x2="430" y2="190"/><line x1="430" y1="80" x2="610" y2="140"/><line x1="430" y1="190" x2="610" y2="140"/></g><g fill="#eef4ff" stroke="#234f9b" stroke-width="3"><circle cx="90" cy="140" r="34"/><circle cx="245" cy="70" r="34"/><circle cx="245" cy="210" r="34"/><circle cx="430" cy="80" r="34"/><circle cx="430" cy="190" r="34"/><circle cx="610" cy="140" r="34"/></g><g text-anchor="middle" font-size="18" font-weight="800" fill="#294a7f"><text x="90" y="146">Start</text><text x="245" y="76">A</text><text x="245" y="216">B</text><text x="430" y="86">C</text><text x="430" y="196">D</text><text x="610" y="146">Goal</text></g></svg><p>A <strong>state</strong> is one situation, an <strong>action</strong> moves to another state, and the <strong>state space</strong> contains the possible situations the search may explore.</p>`}
    ]);
    insertAfter(6,"BFS, DFS and A*",[
      {title:"The same search space can be explored differently",body:`<table class="slide-data-table"><thead><tr><th>Method</th><th>Main idea</th><th>Useful intuition</th></tr></thead><tbody><tr><td><strong>BFS</strong></td><td>Explore level by level</td><td>Useful when fewest unweighted steps matter</td></tr><tr><td><strong>DFS</strong></td><td>Follow one branch deeply</td><td>Useful for deep exploration/backtracking</td></tr><tr><td><strong>A*</strong></td><td>Combine path cost with heuristic guidance</td><td>Focus search toward promising routes</td></tr></tbody></table><div class="question-strip">Search strategy changes <em>which states are explored first</em>, not the underlying problem definition.</div>`}
    ]);
    insertAfter(6,"What is a heuristic?",[
      {title:"A heuristic guides — it does not guarantee truth",body:`<div class="slide-two-col"><div class="visual-card"><h2>Route example</h2><p>Straight-line distance to the destination can estimate which location looks promising.</p></div><div class="visual-card warning"><h2>But</h2><p>The apparently closest location may have blocked roads, traffic or expensive edges.</p></div></div><p>A good heuristic reduces unnecessary exploration while preserving the properties required by the search algorithm.</p>`}
    ]);
    insertAfter(6,"Facts, rules and inference",[
      {title:"Worked rule-based reasoning example",body:`<div class="foundation-flow"><div><strong>Fact 1</strong>Soil is dry</div><div><strong>Fact 2</strong>Rain is not expected</div><div><strong>Rule</strong>IF dry AND no rain → irrigation needed</div><div><strong>Inference</strong>Irrigation is needed</div></div><p class="slide-note">Symbolic AI makes knowledge explicit. Its strength is clarity; its limitation is that rules and knowledge must be represented and maintained.</p>`}
    ]);
    insertAfter(6,"What happens inside a neural network?",[
      {title:"One artificial neuron — conceptual view",body:`<div class="concept-ribbon"><span>Attendance × weight</span><b>+</b><span>Coursework × weight</span><b>+</b><span>bias</span><b>→</b><span>activation</span><b>→</b><span>output</span></div><p>Weights control how strongly inputs influence a node. During training, a network adjusts many weights to reduce prediction error.</p><div class="question-strip">A neural network is a mathematical model. It is only loosely inspired by biological neurons.</div>`}
    ]);
    insertAfter(6,"Choosing an AI method",[
      {title:"Bridge to modern generative AI",body:`<p>Large language models and other generative systems are built using Machine Learning—often deep neural networks—trained on very large datasets.</p><div class="foundation-flow"><div><strong>Input</strong>Prompt / image / audio</div><div><strong>Model</strong>Learned statistical patterns</div><div><strong>Output</strong>Generated text, image, audio or code</div></div><p class="slide-note">Topic 8 returns to these systems and focuses on their opportunities, limitations and contemporary issues.</p>`}
    ]);
  }

  function enhanceTopic7(){
    insertAfter(7,"Ethics begins before modelling",[
      {title:"Case study: an AI scholarship-screening system",body:`<p>A university uses historical data to rank applicants for scholarships.</p><div class="foundation-flow"><div><strong>Purpose</strong>Prioritise limited support</div><div><strong>Data</strong>Past academic and socioeconomic records</div><div><strong>Decision</strong>Who receives funding</div><div><strong>Risk</strong>Historical inequalities may be reproduced</div></div><div class="question-strip">Who benefits? Who may be harmed? Which data are appropriate? Can a student challenge a decision?</div>`}
    ]);
    insertAfter(7,"Privacy and responsible data use",[
      {title:"Privacy, security and governance are related but different",body:`<div class="slide-grid"><div class="slide-box"><h2>Privacy</h2><p>Should these personal data be collected or used this way?</p></div><div class="slide-box"><h2>Security</h2><p>How are data and systems protected against unauthorised access or attack?</p></div><div class="slide-box"><h2>Governance</h2><p>Who sets rules, responsibilities, controls, documentation and oversight?</p></div></div>`}
    ]);
    insertAfter(7,"Where can bias enter?",[
      {title:"Bias can accumulate across the lifecycle",body:`<div class="concept-ribbon"><span>Problem framing</span><b>→</b><span>Sampling</span><b>→</b><span>Measurement</span><b>→</b><span>Labels</span><b>→</b><span>Model</span><b>→</b><span>Deployment</span></div><p>A model can inherit bias from earlier stages even when the algorithm itself is mathematically implemented correctly.</p><div class="question-strip">Do not ask only “Is the model biased?” Ask “Where can unfairness enter the whole system?”</div>`}
    ]);
    insertAfter(7,"Fairness needs more than overall accuracy",[
      {title:"The same accuracy can hide different harms",body:`<div class="slide-two-col"><div class="visual-card"><h2>Group A</h2><p>90% overall accuracy</p><p>Most errors are harmless false alarms.</p></div><div class="visual-card warning"><h2>Group B</h2><p>90% overall accuracy</p><p>Most errors wrongly deny eligible people.</p></div></div><p>Overall accuracy is identical, but the consequences are not. Fairness requires examining error types, context and affected groups.</p>`}
    ]);
    insertAfter(7,"Human oversight",[
      {title:"Trustworthy systems also need robustness, safety and security",body:`<div class="slide-grid"><div class="slide-box"><h2>Robustness</h2><p>Does performance remain acceptable when inputs or conditions change?</p></div><div class="slide-box"><h2>Safety</h2><p>Can foreseeable failures cause unreasonable harm?</p></div><div class="slide-box"><h2>Security</h2><p>Can attackers manipulate data, prompts, models or outputs?</p></div></div><p class="slide-note">Responsible AI combines social, technical and organisational safeguards.</p>`}
    ]);
    insertAfter(7,"Responsible AI",[
      {title:"Risk management is continuous",body:`<div class="risk-matrix"><div class="head">Impact ↓ / Likelihood →</div><div class="head">Low</div><div class="head">Medium</div><div class="head">High</div><div class="head">High</div><div class="risk-mid">Review</div><div class="risk-high">Strong controls</div><div class="risk-high">Avoid / redesign</div><div class="head">Medium</div><div class="risk-low">Monitor</div><div class="risk-mid">Mitigate</div><div class="risk-high">Strong controls</div><div class="head">Low</div><div class="risk-low">Accept/monitor</div><div class="risk-low">Monitor</div><div class="risk-mid">Mitigate</div></div><p>After deployment, monitor performance, incidents, changing populations and user feedback. Risk management does not end when the model is launched.</p>`}
    ]);
  }

  function enhanceTopic8(){
    insertAfter(8,"DT 111 · Topic 8",[
      {title:"Why contemporary AI deserves a separate topic",body:`<p>AI capabilities and uses are changing quickly. The goal is not to memorise every new tool, but to develop a framework for judging new systems.</p><div class="foundation-flow"><div><strong>Capability</strong>What can it do?</div><div><strong>Evidence</strong>How reliable is it?</div><div><strong>Impact</strong>Who benefits or may be harmed?</div><div><strong>Governance</strong>What rules and oversight are needed?</div></div>`},
      {title:"Generative AI",body:`<p><strong>Generative AI</strong> creates new content—such as text, images, audio, video or software code—based on patterns learned from training data.</p><div class="concept-ribbon"><span>Prompt / input</span><b>→</b><span>Generative model</span><b>→</b><span>New output</span><b>→</b><span>Human verification</span></div><p class="slide-note">Fluent output is not the same as verified truth.</p>`},
      {title:"Large language models: beginner mental model",body:`<p>A large language model processes text as smaller units called <strong>tokens</strong> and predicts likely continuations based on learned statistical patterns and the current context.</p><div class="token-flow"><span>Data</span><span>Science</span><span>can</span><span>help</span><span>us</span><b>→</b><span>?</span></div><p>Modern systems can do far more than simple next-word guessing, but this probability-based view helps explain both their power and some limitations.</p>`},
      {title:"Prompt, context and output",body:`<div class="slide-grid"><div class="slide-box"><h2>Prompt</h2><p>Your instruction, question and constraints.</p></div><div class="slide-box"><h2>Context</h2><p>Information available to the model for the current task.</p></div><div class="slide-box"><h2>Output</h2><p>A generated response that still requires evaluation.</p></div></div><div class="question-strip">Better prompts can improve usefulness, but prompting cannot guarantee factual correctness.</div>`},
      {title:"Hallucination: confident output can still be wrong",body:`<div class="slide-two-col"><div class="visual-card danger"><h2>Risk</h2><p>A generative model may produce invented facts, citations, numbers or explanations that sound plausible.</p></div><div class="visual-card success"><h2>Response</h2><p>Verify important claims against trustworthy sources, especially in academic, medical, legal, financial or safety-related work.</p></div></div><p class="slide-note">Use AI output as a draft or aid—not automatic evidence.</p>`},
      {title:"Multimodal AI",body:`<p>Modern systems may work across several forms of information rather than text alone.</p><div class="foundation-flow"><div><strong>Text</strong>summarise / generate</div><div><strong>Image</strong>describe / analyse / create</div><div><strong>Audio</strong>speech / transcription</div><div><strong>Video</strong>understand / generate</div><div><strong>Code</strong>write / explain / debug</div></div><p>This creates powerful applications—but also new verification, privacy and misuse challenges.</p>`},
      {title:"Synthetic media and deepfakes",body:`<div class="slide-two-col"><div class="visual-card"><h2>Useful possibilities</h2><p>Creative media, localisation, accessibility, simulation and education.</p></div><div class="visual-card warning"><h2>Risks</h2><p>Impersonation, fraud, non-consensual imagery, misinformation and loss of trust in authentic media.</p></div></div><div class="question-strip">A critical digital skill is asking: who created this, what evidence supports it, and can it be independently verified?</div>`},
      {title:"Generative AI in education",body:`<div class="slide-two-col"><div class="visual-card success"><h2>Appropriate support</h2><p>Brainstorming, explanations, feedback, practice questions, coding support, language assistance.</p></div><div class="visual-card warning"><h2>Risks</h2><p>Fabricated sources, privacy leakage, over-reliance, unequal access, reduced learning, undisclosed work.</p></div></div><p>Responsible academic use should follow course/institution rules, preserve the student's own learning, and verify information.</p>`},
      {title:"AI agents and tool-using systems",body:`<p>Some modern AI systems can do more than generate one response: they can plan several steps, call tools, search information, run code or interact with software.</p><div class="concept-ribbon"><span>Goal</span><b>→</b><span>Plan</span><b>→</b><span>Use tool</span><b>→</b><span>Observe result</span><b>→</b><span>Continue / stop</span></div><p class="slide-note">More autonomy increases usefulness but also increases the importance of permissions, monitoring, security and human control.</p>`},
      {title:"AI and the future of work",body:`<p>AI can automate some tasks, augment others and create new tasks. Exposure to AI is not the same as a whole occupation disappearing.</p><div class="foundation-flow"><div><strong>Automate</strong>Routine parts of work</div><div><strong>Augment</strong>Help people work faster or better</div><div><strong>Create</strong>New tasks and roles</div><div><strong>Adapt</strong>Need new skills and judgement</div></div><div class="question-strip">Foundational skills, critical thinking, communication and domain knowledge become more—not less—important when AI tools are widely available.</div>`},
      {title:"AI governance is becoming more important",body:`<p>Governments, standards bodies, institutions and organisations are developing rules for transparency, safety, privacy, intellectual property, accountability and high-risk uses.</p><div class="foundation-flow"><div><strong>Law</strong>What is legally permitted?</div><div><strong>Policy</strong>What does an institution allow?</div><div><strong>Standards</strong>What practices support trustworthiness?</div><div><strong>Human rights</strong>Whose interests and freedoms must be protected?</div></div><p class="slide-note">Specific laws differ by jurisdiction and continue to evolve.</p>`},
      {title:"Environmental and cybersecurity considerations",body:`<div class="slide-two-col"><div class="visual-card"><h2>Environmental cost</h2><p>Training and operating large AI systems can require substantial computing infrastructure, electricity and cooling resources.</p></div><div class="visual-card warning"><h2>Cybersecurity misuse</h2><p>AI can help defenders, but can also support phishing, social engineering, malicious code generation or automated deception.</p></div></div><p>Contemporary AI should be evaluated across technical, social, economic and environmental dimensions.</p>`},
      {title:"Now consider AI for inclusion",body:`<p>After examining broad contemporary issues, we turn to a major positive application area already developed in this topic: <strong>AI that reduces barriers to participation</strong>.</p><div class="concept-ribbon"><span>Communication</span><span>Vision</span><span>Learning</span><span>Mobility</span><span>Well-being</span></div><p class="slide-note">Inclusive design is not an optional extra; it is one way to judge whether technology creates meaningful human value.</p>`}
    ]);
  }

  const noteExtensions={
    1:`<section class="foundation-extension"><h2>Foundation extension: how beginners should think about Data Science and AI</h2><h3>Four levels of analytical questions</h3><table><tr><th>Type</th><th>Main question</th><th>Example</th></tr><tr><td>Descriptive</td><td>What happened?</td><td>What was the average class score?</td></tr><tr><td>Diagnostic</td><td>What may explain the pattern?</td><td>How do scores differ by attendance group?</td></tr><tr><td>Predictive</td><td>What may happen next?</td><td>Which students may need support?</td></tr><tr><td>Prescriptive</td><td>What action should be considered?</td><td>Which support intervention is appropriate?</td></tr></table><h3>AI versus ordinary automation</h3><p>Automation means using a computer or machine to perform a process automatically. AI is a subset of computing approaches concerned with tasks such as learning, reasoning, perception, language or complex decision support. A spreadsheet formula that adds marks is automated computation, but it is not normally called AI.</p><h3>What is a model?</h3><p>A model is a simplified representation of a relationship or process. Models can be equations, rules, trees, probability models or learned neural networks. A useful model does not need to reproduce reality perfectly; it needs to be sufficiently reliable and appropriate for the question and decision.</p></section>`,
    2:`<section class="foundation-extension"><h2>Foundation extension: sampling and variable types</h2><h3>Population, sample and census</h3><p>The <strong>population</strong> is the full group we want to understand. A <strong>sample</strong> is the subset actually observed. A <strong>census</strong> attempts to observe every member of the population. Good sampling tries to make the observed data informative about the target population.</p><div class="caution"><strong>Sampling bias:</strong> a very large dataset can still mislead if some cases are systematically more or less likely to appear.</div><h3>Useful variable classifications</h3><table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr><tr><td>Nominal</td><td>Categories without natural order</td><td>Region</td></tr><tr><td>Ordinal</td><td>Ordered categories</td><td>Low / Medium / High</td></tr><tr><td>Discrete numerical</td><td>Countable values</td><td>Number of courses</td></tr><tr><td>Continuous numerical</td><td>Measured values on a continuum</td><td>Temperature</td></tr></table><p>Variable type affects appropriate summaries, visualisations and later modelling choices.</p></section>`,
    3:`<section class="foundation-extension"><h2>Foundation extension: spread, quartiles, box plots and correlation</h2><h3>Quartiles and interquartile range</h3><p>Quartiles divide ordered numerical data into four parts. Q1 marks the lower quarter, the median is Q2, and Q3 marks the upper quarter. The <strong>interquartile range (IQR) = Q3 − Q1</strong> describes the spread of the middle 50% of observations and is less affected by extreme values than the full range.</p><h3>Box plots</h3><p>A box plot visualises the median, quartiles and overall spread. It is especially useful when comparing distributions across groups. Potential outliers may be marked separately, but they should still be investigated rather than automatically deleted.</p><h3>Correlation</h3><p>A correlation coefficient summarises the direction and strength of a <em>linear</em> relationship between two numerical variables, commonly on a scale from −1 to +1. Correlation does not establish causation, and a correlation near zero does not rule out a non-linear relationship.</p><div class="worked"><strong>Mini EDA example:</strong> inspect the student-learning dataset, calculate centre and spread for final_score, visualise its distribution, compare regions, explore attendance versus score, identify unusual cases, then write observations separately from explanations that still need investigation.</div></section>`,
    4:`<section class="foundation-extension"><h2>Foundation extension: inference and uncertainty</h2><h3>Population and sample</h3><p>A <strong>parameter</strong> describes a population; a <strong>statistic</strong> is calculated from a sample. Statistical inference uses sample information to reason about population quantities while acknowledging uncertainty.</p><h3>Conditional probability</h3><p>Conditional probability asks about the probability of an event given that another condition is known, written conceptually as P(A | B). This is important when comparing outcomes within subgroups.</p><h3>Confidence intervals</h3><p>A confidence interval reports an estimate together with uncertainty. It complements a hypothesis test because it helps show the plausible size and direction of an effect rather than only whether the result crosses a significance threshold.</p><h3>Regression fit</h3><p>Residuals show individual prediction errors. R² summarises how much variation in an outcome is accounted for by a fitted regression model. Neither a high R² nor a statistically significant slope proves causation.</p></section>`,
    5:`<section class="foundation-extension"><h2>Foundation extension: the minimum vocabulary for Machine Learning</h2><p><strong>Features</strong> are inputs used by the model. A <strong>target</strong> is the outcome to be learned in supervised learning. Training means learning model parameters from examples; prediction means applying the learned model to new inputs.</p><h3>Train, validation and test data</h3><p>Training data fit the model, validation data can help compare models/settings during development, and test data provide a final estimate on unseen examples. These roles should remain separated as much as practical.</p><h3>Classification evaluation</h3><p>A confusion matrix separates correct and incorrect predictions by class. <strong>Precision</strong> asks how many predicted positives are truly positive. <strong>Recall</strong> asks how many real positives were found. Which metric matters most depends on the application and cost of different errors.</p><div class="caution"><strong>Generalisation:</strong> an impressive training score is not enough. The model must perform usefully on new data.</div></section>`,
    6:`<section class="foundation-extension"><h2>Foundation extension: AI is a toolbox, not one method</h2><p><strong>Artificial Intelligence</strong> is the broad field. <strong>Machine Learning</strong> is one family of AI methods that learns patterns from data. <strong>Deep Learning</strong> uses multi-layer neural networks. <strong>Generative AI</strong> describes systems designed to generate new content and is commonly built using modern Machine Learning and deep-learning methods.</p><h3>Search versus learning</h3><p>Search algorithms explore possible states and actions; rule-based systems reason from explicit knowledge; learning-based systems infer patterns from examples. Real systems may combine these approaches.</p><h3>A neuron as a weighted computation</h3><p>An artificial neuron combines input values using weights and a bias, then applies an activation function. Networks contain many such computations arranged in layers, and training adjusts weights to reduce error.</p></section>`,
    7:`<section class="foundation-extension"><h2>Foundation extension: trustworthy AI includes technical risk management</h2><p>Ethics and fairness are essential, but responsible AI also considers <strong>robustness, safety and security</strong>. A system should perform acceptably under changing conditions, avoid unreasonable harm in foreseeable use and misuse, and resist attacks or manipulation.</p><h3>Governance and monitoring</h3><p>AI governance assigns responsibilities, documentation, approval processes, access controls and oversight. After deployment, organisations should continue monitoring performance, incidents, changes in users/data and unintended consequences.</p><div class="worked"><strong>Useful question:</strong> If this system fails, who notices, who can stop it, who investigates, who communicates with affected people, and how is the system corrected?</div></section>`,
    8:`<section class="foundation-extension"><h2>Foundation extension: contemporary AI beyond accessibility</h2><h3>Generative AI and large language models</h3><p>Generative AI produces new content such as text, images, audio, video and code. Large language models process language as tokens and generate outputs using patterns learned from large datasets and the current context.</p><h3>Hallucinations and information integrity</h3><p>Generated content can be fluent while containing incorrect or invented facts, references or reasoning. Important claims should be verified using reliable sources. Synthetic media and deepfakes also create challenges for fraud, misinformation and trust.</p><h3>AI agents</h3><p>Some systems can plan multi-step tasks and use external tools. Greater autonomy can improve productivity but also increases the need for permission controls, monitoring, security and human oversight.</p><h3>Education, work and society</h3><p>AI can support learning and productivity, but it also raises questions about academic integrity, skills, unequal access, job redesign, privacy and over-reliance. AI may automate some tasks while augmenting or creating others.</p><h3>Governance, environmental cost and cybersecurity</h3><p>AI governance is developing through laws, institutional policies, standards and risk-management frameworks. Large-scale AI also has computing and energy costs, while the same capabilities can support both cybersecurity defence and malicious activity.</p><h3>Recommended further reading</h3><ul><li><a href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" target="_blank" rel="noopener">UNESCO — Guidance for generative AI in education and research</a></li><li><a href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" target="_blank" rel="noopener">NIST — Generative AI Profile for the AI Risk Management Framework</a></li><li><a href="https://www.oecd.org/en/topics/ai-principles.html" target="_blank" rel="noopener">OECD — AI Principles</a></li></ul></section>`
  };

  function injectNoteExtension(frame,n){
    try{
      const doc=frame.contentDocument;
      if(!doc || !doc.body || doc.getElementById("dt111-foundation-extension")) return;
      const wrap=doc.createElement("div");
      wrap.id="dt111-foundation-extension";
      wrap.innerHTML=noteExtensions[n]||"";
      const checklist=[...doc.querySelectorAll("h2")].find(h=>/checklist|topic summary/i.test(h.textContent));
      if(checklist) checklist.parentNode.insertBefore(wrap,checklist); else doc.body.appendChild(wrap);
      const style=doc.createElement("link"); style.rel="stylesheet"; style.href="../assets/teaching-enhancements.css"; doc.head.appendChild(style);
    }catch(e){ console.warn("DT111 note enhancement skipped",e); }
  }

  function enhanceNotes(){
    for(let n=1;n<=8;n++){
      const frame=document.querySelector(`iframe[src*="topic${n}_notes.html"]`);
      if(!frame) continue;
      frame.addEventListener("load",()=>injectNoteExtension(frame,n));
      if(frame.contentDocument && frame.contentDocument.readyState==="complete") injectNoteExtension(frame,n);
    }
  }

  function cleanupStudentFacingText(){
    document.querySelectorAll(".editable-note").forEach(box=>{
      box.innerHTML='<span>Full student notes</span><small>Read online or use the print button in the notes to save as PDF.</small>';
    });
    const footer=document.querySelector(".sidebar-footer small"); if(footer) footer.textContent="Student learning site · Topics 1–8";
    const meta=document.querySelector('meta[name="description"]'); if(meta) meta.content="DT 111 Introduction to Data Science and AI — student learning site with notes, presentations, practicals, quizzes and assignments.";
  }

  function addOutcome(topic,text){
    const list=document.querySelector(`#topic${topic} .learning-outcomes ul`);
    if(!list || [...list.children].some(li=>li.textContent.trim()===text)) return;
    const li=document.createElement("li"); li.textContent=text; list.appendChild(li);
  }

  function enhanceOutcomes(){
    addOutcome(2,"distinguish populations, samples and common variable types, and recognise sampling bias;");
    addOutcome(3,"interpret range, quartiles, IQR, box plots and simple correlation alongside centre and visual patterns;");
    addOutcome(4,"explain population versus sample, conditional probability, confidence intervals and regression interpretation at a beginner level;");
    addOutcome(5,"identify features and targets and interpret train/validation/test splits and basic classification metrics;");
    addOutcome(6,"distinguish AI, Machine Learning, Deep Learning and Generative AI and explain why different AI problems require different approaches;");
    addOutcome(7,"recognise robustness, safety, security, governance and monitoring as parts of responsible AI;");
    addOutcome(8,"explain major contemporary issues including generative AI, hallucinations, synthetic media, AI agents, work, governance and responsible use.");
  }

  function init(){
    addStyles();
    enhanceTopic1(); enhanceTopic2(); enhanceTopic4(); enhanceTopic5(); enhanceTopic6(); enhanceTopic7(); enhanceTopic8();
    enhanceNotes(); cleanupStudentFacingText(); enhanceOutcomes();
  }

  if(document.readyState==="complete") setTimeout(init,0); else window.addEventListener("load",init,{once:true});
})();
