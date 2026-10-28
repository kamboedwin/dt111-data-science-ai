DT 111 OFFLINE LEARNING PACKAGE — LECTURER EDITING GUIDE
Version 0.3

This folder contains the files you are most likely to change.
You do NOT need to rebuild the whole application for normal content corrections.

1. COURSE SETTINGS
File: course_settings.js
Use it to change:
- Assignment submission form link
- Assignment 1 due date
- Lecturer name/email if needed later
- Version label information

2. TOPIC 1 FULL NOTES
File: topic1_notes.html
You can open this file with Notepad, Notepad++, VS Code or another text editor.
The visible text is ordinary HTML. For small corrections, find the sentence you want and edit only the words between the HTML tags.

Example:
<p>Old sentence here.</p>
Change to:
<p>Corrected sentence here.</p>

Do not delete the opening/closing tags such as <p> and </p> unless you understand HTML.

3. TOPIC 1 REVIEW QUESTIONS
File: topic1_review_questions.html
This contains the 15 revision questions and suggested answers.
You may:
- change a question;
- add another question by copying an existing <div class="q">...</div> block;
- edit a suggested answer;
- remove a question.

4. TOPIC 1 PRESENTATION
File: topic1_slides.js
This contains the Presentation Mode slides.
Each slide has:
- title: "..."
- body: `...`

You can edit ordinary text inside these areas.
Keep quotation marks, backticks (`) and commas in place.

5. GRAPHICS / ILLUSTRATIONS
Folder: media/topic1/

Current files:
- relationship_ds_ai_ml.svg
- workflow_problem_data_action.svg
- evolution_timeline.svg
- applications_overview.svg

These are SVG vector graphics, so they remain sharp on projectors.

EASIEST WAY TO REPLACE A GRAPHIC
If you create a corrected/new graphic:
A. Save it using the SAME filename and replace the old file.
OR
B. Save a new file and update the matching filename in topic1_notes.html and/or topic1_slides.js.

PNG, JPG and SVG files can all be used, but SVG is preferred for diagrams because it scales cleanly.

6. STYLES
Files:
- notes.css — styling for full notes
- review.css — styling for review questions
Main application styling is outside this folder at assets/styles.css.

You normally do not need to edit CSS to correct teaching content.

7. IMPORTANT BACKUP PRACTICE
Before large changes, make a copy of the whole DT111 folder.
If a change breaks a page, restore the previous file from the backup.

8. HOW TO CHECK A CHANGE
- Save the edited file.
- Return to the browser.
- Press Ctrl+R / Refresh.
- The updated local content should appear immediately.

9. INTERNET REQUIREMENTS
The main teaching package works offline.
Internet is only required for:
- optional external Further Reading links;
- submitting assignments through the online form.

10. PRESENTATION MODE
Version 0.3 automatically fits slides to the available projector/laptop window and allows internal scrolling if a slide ever contains more content than can fit on screen. The editable presentation is in topic1_slides.js.

Recommended editor on Windows:
- Notepad for very small edits
- Notepad++ or VS Code for easier editing and line highlighting


TOPIC 2 FILES (VERSION 0.4)
- topic2_notes.html — full Topic 2 notes
- topic2_review_questions.html — 18 review questions and suggested answers
- topic2_slides.js — Topic 2 Presentation Mode
- media/topic2/ — Topic 2 vector diagrams
- course_settings.js — now also contains Assignment 2 due date

TOPIC 2 DATASETS
The teaching CSV files are in the main package folder:
datasets/topic2_messy_student_data.csv
datasets/topic2_cleaned_student_data_example.csv

If you replace a Topic 2 diagram using the same filename, the notes and presentation will update automatically after browser refresh.


TOPIC 3 FILES (VERSION 0.5)
- topic3_notes.html — full Topic 3 notes
- topic3_review_questions.html — 20 review questions and suggested answers
- topic3_slides.js — Topic 3 Presentation Mode
- media/topic3/ — Topic 3 vector diagrams
- course_settings.js — now also contains Assignment 3 due date

TOPIC 3 DATASET
datasets/topic3_student_learning_data.csv

The Topic 3 EDA Lab uses the same teaching values embedded in the application so that students can explore them offline. If you later replace the CSV with different values, the interactive EDA Lab will not automatically change; its sample values are kept in assets/app.js. The CSV itself can still be replaced for assignments. Ask ChatGPT to synchronise the lab if you want to change the teaching dataset substantially.


TOPIC 4 FILES (VERSION 0.6)
- topic4_notes.html — full Topic 4 notes
- topic4_review_questions.html — 20 review questions and suggested answers
- topic4_slides.js — Topic 4 Presentation Mode
- media/topic4/ — Topic 4 vector diagrams
- course_settings.js — now also contains Assignment 4 due date

TOPIC 4 DATASET
datasets/topic4_regression_learning_data.csv

NOTES DOWNLOAD BUTTONS
A Print / Save as PDF button has now been added to all Topic 1–4 notes pages, so students can print or save the notes directly from the Notes tab iframe.


TOPIC 5 FILES (VERSION 0.7)
- topic5_notes.html — full Topic 5 notes
- topic5_review_questions.html — 20 review questions and suggested answers
- topic5_slides.js — Topic 5 Presentation Mode
- media/topic5/ — Topic 5 vector diagrams
- course_settings.js — now also contains Assignment 5 due date

TOPIC 5 DATASET
datasets/topic5_machine_learning_student_data.csv

TOPIC 5 INTERACTIVE LAB
The supervised/unsupervised scenarios, decision-tree explorer, K-means explorer and train/test split explorer are coded in assets/app.js.
If the teaching dataset or demo logic is changed substantially, update the corresponding JavaScript values so the interactive lab stays synchronised.


TOPIC 6 FILES (VERSION 0.8)
- topic6_notes.html — full Topic 6 notes
- topic6_review_questions.html — 20 review questions and suggested answers
- topic6_slides.js — Topic 6 Presentation Mode
- media/topic6/ — Topic 6 vector diagrams
- course_settings.js — now also contains Assignment 6 due date

TOPIC 6 SCENARIO DATA
datasets/topic6_ai_problem_scenarios.csv

TOPIC 6 INTERACTIVE LAB
The Search Explorer, Rule-Based Reasoning Explorer and Neural-Network Activation Explorer are coded in assets/app.js.
The search maze is deliberately fixed so students can compare BFS, DFS and A* on the same problem.
The neural-network output is illustrative only and is explicitly not a trained student-performance model.


TOPIC 7 FILES (VERSION 0.9)
- topic7_notes.html — full Topic 7 notes
- topic7_review_questions.html — 20 review questions and suggested answers
- topic7_slides.js — Topic 7 Presentation Mode
- media/topic7/ — Topic 7 vector diagrams
- course_settings.js — now also contains Assignment 7 due date

TOPIC 7 DATASET
datasets/topic7_responsible_ai_cases.csv

TOPIC 7 INTERACTIVE LAB
The data-minimisation challenge, bias-source challenge, fairness audit explorer and responsible-AI checklist are coded in assets/app.js.

TOPIC 6 GRAPHIC FIX
Version 0.9 retains the corrected ai_scope.svg file from Topic 6.


TOPIC 8 FILES (VERSION 1.0)
- topic8_notes.html — full Topic 8 notes
- topic8_review_questions.html — 20 review questions and suggested answers
- topic8_slides.js — Topic 8 Presentation Mode
- media/topic8/ — Topic 8 vector diagrams
- course_settings.js — now also contains Assignment 8 due date

TOPIC 8 DATASET
datasets/topic8_accessible_ai_scenarios.csv

TOPIC 8 INTERACTIVE LAB
The assistive-technology matcher, personalised-learning designer, accessible-route explorer and emotional-well-being support-boundary activities are coded in assets/app.js.

COURSE COMPLETION
Version 1.0 contains all eight DT 111 curriculum topics. Topics 1–8 retain lecturer-editable notes, presentation content and review-question files.
