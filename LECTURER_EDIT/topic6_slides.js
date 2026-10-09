/*
DT 111 — Topic 6 Presentation Content
LECTURER EDIT FILE
*/
window.DT111_TOPIC6_SLIDES = [
{title:"DT 111 · Topic 6",body:`<p class="big-line">Artificial Intelligence Basics</p><p>Definition and scope · Search algorithms · Logic and reasoning · Neural networks</p><p class="slide-note">Goal: see AI as a collection of problem-solving approaches, not as a single technology.</p>`},
{title:"What is Artificial Intelligence?",body:`<p>AI is the field concerned with systems that perform tasks associated with intelligent behaviour.</p><div class="slide-grid"><div class="slide-box"><h2>Reason</h2><p>Apply knowledge and rules.</p></div><div class="slide-box"><h2>Plan</h2><p>Choose actions to reach goals.</p></div><div class="slide-box"><h2>Learn</h2><p>Identify patterns from data.</p></div></div>`},
{title:"AI is broader than Machine Learning",body:`<img class="slide-figure" src="LECTURER_EDIT/media/topic6/ai_scope.svg" alt="Scope of AI">`},
{title:"AI as problem solving",body:`<p>Many AI systems can be described using:</p><ul><li>a current state or observation;</li><li>possible actions;</li><li>a goal;</li><li>a method for choosing what to do next.</li></ul>`},
{title:"Search algorithms",body:`<img class="slide-figure" src="LECTURER_EDIT/media/topic6/search_algorithms.svg" alt="Search algorithms">`},
{title:"BFS, DFS and A*",body:`<div class="slide-grid"><div class="slide-box"><h2>BFS</h2><p>Explore level by level.</p></div><div class="slide-box"><h2>DFS</h2><p>Follow one branch deeply.</p></div><div class="slide-box"><h2>A*</h2><p>Use cost plus heuristic guidance.</p></div></div>`},
{title:"What is a heuristic?",body:`<p class="big-line">A useful estimate of how promising a state is relative to the goal.</p><p>Example: straight-line distance can guide route search toward a destination.</p><p class="slide-note">A heuristic guides search; it does not replace the actual problem rules or path cost.</p>`},
{title:"Logic and reasoning",body:`<img class="slide-figure" src="LECTURER_EDIT/media/topic6/logic_reasoning.svg" alt="Logic and reasoning">`},
{title:"Facts, rules and inference",body:`<div class="slide-grid"><div class="slide-box"><h2>Fact</h2><p>Known statement.</p></div><div class="slide-box"><h2>Rule</h2><p>IF conditions THEN conclusion.</p></div><div class="slide-box"><h2>Inference</h2><p>Derive a conclusion from the knowledge.</p></div></div>`},
{title:"Logic and learning can work together",body:`<p>A practical AI system may combine:</p><ul><li>a learned model for perception or prediction;</li><li>explicit rules for domain knowledge, safety or policy;</li><li>search/planning for choosing actions.</li></ul>`},
{title:"Introduction to neural networks",body:`<img class="slide-figure" src="LECTURER_EDIT/media/topic6/neural_network.svg" alt="Simple neural network">`},
{title:"What happens inside a neural network?",body:`<ol><li>Inputs enter the network.</li><li>Weighted connections combine information.</li><li>Hidden nodes transform the signals.</li><li>The output layer produces a prediction.</li><li>Training adjusts weights to reduce error.</li></ol>`},
{title:"Choosing an AI method",body:`<div class="slide-grid"><div class="slide-box"><h2>Route / puzzle</h2><p>Search</p></div><div class="slide-box"><h2>Explicit expert rules</h2><p>Logic and reasoning</p></div><div class="slide-box"><h2>Complex patterns from examples</h2><p>Machine Learning / neural networks</p></div></div>`},
{title:"Topic 6 takeaway",body:`<p class="big-line">AI is a toolbox for representing problems, searching possibilities, reasoning with knowledge and learning from data.</p><p>Choose the approach that fits the problem.</p>`}
];