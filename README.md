# ENGR 103: Engineering Computation and Algorithmic Thinking

This repository contains the source code for the ENGR103 website.

## Instructor Checklist

This coming term:

- [ ] Add the Canvas assignments + rubrics to GitHub (OK for assignments 2, 3, 4, 5)

Every term:

- [x] Update professional development assignments, resources, and end-of-term survey
- [x] Update **Due Dates** in Canvas
- [x] Update **Due Times** for quizzes and exams
- [x] Update **Course Schedule** in Canvas
- [x] Update **Syllabus** in Canvas
- [x] Update the version of this repository if making changes (`package.json`)
- [x] Add TAs to Canvas
- [x] Create team **Bookings** page for assignment demo and set up slots
- [x] Update sections in Canvas
- [x] Update **TA Names** in Canvas
- [x] Update **Office Hours** in Canvas
- [x] Update **Booking Links** in Canvas
- [x] Create **GitHub Classroom** class
- [x] Add TAs to GitHub Organization and send Classroom invite link
- [x] Add assignments to GitHub Classroom
- [x] Update GitHub Classroom **links** in Canvas (assignments)
- [ ] Test all studios and assignments on the ENGR servers
- [ ] Add DAS accommodations for midterm and final exams

## Canvas

The `canvas/` directory contains assets for the Canvas LMS.

Rubrics are stored in a `.tsv` format, which can be imported directly into Canvas using the [Canvas LMS Mods (Basic) Extension](https://chromewebstore.google.com/detail/bnpdolbpbjiniodlbahddbnkollgojon?utm_source=item-share-cb). Go to your Canvas course Rubrics tab, click "Add Rubric", then click "Import Details". A template of the expected format can be found in `canvas/_template/template_rubric_details_name.tsv`.

Assignments are stored in HTML format. When editing a Canvas assignment, click the `</>` icon in the rich text editor to switch to HTML mode, then copy and paste the contents of the corresponding HTML file from the `canvas/` directory. The HTML assignments are not full-fledged HTML pages but rather snippets that work for Canvas assignments. CSS styles are included inline in the HTML snippets.

## PDFs

The `scripts/generate-pdfs.sh` helper will retrieve and generate individual PDFs for all lectures, studios, assignments, and practicalities from the live deployment. It will then generate a combined version of all files. To run it, use:

```bash
cd scripts
chmod +x ./generate-pdfs.sh
./generate-pdfs.sh
```

You can change the `BASE` variable in the script to point to a different deployment if needed.

To generate slides from `marp`, use:

```bash
cd slides
bun x @marp-team/marp-cli@latest web-graphics.md --pdf --allow-local-files
```

Change `web-graphics.md` to the desired slide deck.

## To Dos

### Course Design

- [ ] Add more content on proper design (including testing and coming up with good test cases)
- [ ] Completely re-evalute assessment in this class, assuming that everyone has access to strong GenAI tools (i.e., tools that can reason, write code, and explain code -- basically tackle any of the fundamental concepts they should be learning). Here are some ideas:
  - How do we define the goal underlying engineering studies? Here's a possible answer: reliably judge under uncertainty in safety-critical, economically consequential systems.
  - Could we do more in-person live oral (vivas) assessments in addition to the written exams? We already do live demos but many students still use GenAI to write their code.
  - Could we have vivas where students have to think through a problem on a whiteboard? They would not know the problem in advance, and this would be similar to "live" coding interviews that are common in industry. Instead of 70+ unique problems, we could have afew with variations in values. we don't have to grade everyone every week or every assignment, but at least grade students twice every term in a viva format. This would require coming up with good rubric items to make it easy for TAs to conduct these sessions and give consistent feedback.
  - Studios/recitations have very simple problems to help students practice fundamentals. If they use GenAI or other resources to "give" them the answers, they are not learning those fundamentals. Is that a problem? Will it be a problem? How can we make those studios useful? SHould we re-design the problems or the format/assessment?
  - Add constraints to entry-level assignments, forbidding the use of advanced features of the language (no references, pointers, arrays, strings, or new libraries in early assignments, for example).
  - Separate an "auto-graded" outcome part from the "process" and "understanding" part of the grade. Provide a function that accepts required inputs and outputs for the auto-graded part, for each assignment.
  - Force process through mutli-commits in their repository history. Require a certain number of commits, and require that they include messages that indicate their process (e.g., "initial commit", "added function to calculate factorial", "added test cases for edge cases", etc.). This would make it easier for TAs to grade the process and understanding part of the grade, even if the code itself is generated by GenAI.
  - Ask students to submit a hand-drawn explanation of the memory before/after lines are executed, or the call stack for a function, or the flow of data through their program.
  - The design part should have a hand-drawn workflow diagram, or a hand-drawn sketch of the program structure, or a hand-drawn sketch of the memory layout, etc.
  - Midterm/final => 50% of the grade
  - Viva component => 25% of the grade
  - Studios/assignments/participation => 25% of the grade
  - Randomize in-person instructor interview on larger assignments -- could this reduce incentive to use GenAI for the entire assignment, since they won't know which part will be discussed in the interview?
  - Reward understanding over output (output could be lower grade, auto-graded, and understanding would count for much more). Need to have TAs trained to handle this grading, including adequate rubrics and training sessions to ensure consistency across TAs.
  - Rubrics should include submitting all AI prompts and responses as part of the assignment, and grading the quality of the prompts and the understanding of the responses. This would encourage students to use GenAI as a learning tool rather than a shortcut to get answers.
  - Don't ban AI tools, but focus on process and verification?
- [ ] Itemize rubrics for "subjective" demo grading
- [ ] Add learning objectives to each lecture, optionally studios and assignments as well
- [ ] Improve the "secondary" learning outcomes for the class (to be more programming specific)

### Contents

- [ ] Consider additional explanations about static vs dynamic array allocations, the STL (resizable and dynamic) and automatic vs dynamic storage duration (bonus)
- [ ] Consider additional object-oriented programming contents, including examples of class declaration and usage, and the design of classes (bonus)
- [ ] Illustrate base address and references (when discussing arrays and references) - done for references, not for arrays yet
- [ ] Provide larger code examples/programs the students can play with

### Housekeeping

- [ ] Create a Question? component that uses details/summary for better UX (ie in studio to challenge students)
- [ ] Update Svelte components to Svelte 5.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```text
.
├── canvas/
├── public/
├── scripts/
├── slides/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

Important directories and files include:

- `canvas/`: assets for Canvas LMS (TSV rubrics, HTML assignments)
- `scripts/`: helper scripts for generating PDFs, etc.
- `slides/`: slide decks for lectures in Marp Markdown format
- `src/content/docs/`: all lecture notes, studios, assignments, practicalities, and other documentation, in `mdx` format
- `src/components/`: reusable components for assignments and lectures, inlcuding a Latex component, and reactive Svelte components for assignments
- `astro.config.mjs`: Astro configuration file, update sidebar entries here

## 🧞 Commands

All commands are run from the root of the project, from a terminal.

This project uses `bun` instead of `npm`. Feel free to use `npm`, `pnpm`, or `yarn` if you prefer.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `<h2 style="border-bottom: 2px solid #dc4405; font-size: 18pt; margin-top: 12px; margin-bottom: 12px;">Introduction</h2>
<p><span>The purpose of the ENGR+ Professional Development Assignments is to give you a jumpstart on preparing for your future career. To maintain long-term success in your chosen field, ongoing effort must be spent on professional development. As a student, getting involved in additional opportunities at OSU is a great way to develop your technical and professional edge. Professional Development includes career, personal, and professional topics which help advance you as a person and engineer.</span></p>
<p><span>You are expected to participate in <strong>five</strong> professional development activities, <strong>each worth 5 pts (all together 10% of your total grade)</strong>. There are a wide range of possibilities:</span></p>
<ul>
    <li><span><strong>Required Event:<span>&nbsp;</span></strong>Engineering+ Spring Senior Sessions - Week 4 (in-person and asynchronous options)</span></li>
    <li><span>Club meetings or events</span></li>
    <li><span>Industry events, conferences or workshops</span></li>
    <li><span>Webinars or trainings</span></li>
    <li><span>STEM outreach activities</span></li>
    <li><span>Seminars or thesis defenses</span></li>
</ul>
<p>Some of these events are in-person, and others are virtual. While all of these can be attended live, some of each type will have recordings available afterwards. So, check the event options if your schedule conflicts.&nbsp;</p>
<p><span>How to find options:</span></p>
<ol style="list-style-type: decimal;">
    <li><span>Find events on <a class="inline_disabled" href="https://osu-honors-backend.web.app/" target="_blank" rel="noopener">the OSU Events App</a> marked with the ENGR+ tag, and <a class="inline_disabled" href="https://www.instagram.com/engrstudentlifeosu/" target="_blank" rel="noopener">follow us on Instagram</a> to receive timely updates and information.</span>
        <ul style="list-style-type: circle;">
            <li><span>If you don't have a cell phone, you can use the website version, but it lacks significant functionality.&nbsp;</span></li>
            <li><span>Hint: Filter by the ENGR+ tag, and click on events to see all tags, and learn more.</span></li>
        </ul>
    </li>
    <li aria-level="1">Attend and participate in a club on campus (Some options for clubs can be found at the<span>&nbsp;</span><a class="inline_disabled" href="https://groups.engr.oregonstate.edu/esc/college-engineering-clubs" target="_blank" rel="noopener">College of Engineering Student Council webpaage of student clubs</a>).<span>&nbsp;</span><a class="inline_disabled external" href="https://oregonstate.app.box.com/s/njtrpeka64z4s3ky97qleiqhj23bsl88" target="_blank" rel="noopener"><span>Some clubs have posted introductory videos here</span></a>. You can find other clubs through your own research.
        <ul data-listchain="__List_Chain_503">
            <li aria-level="1"><span>Attend a conference or webinar.&nbsp;</span></li>
            <li><span>Attend an<span>&nbsp;</span><a class="inline_disabled" href="https://clubs.oregonstate.edu/" target="_blank" rel="noopener">OSU club</a><span>&nbsp;</span>meeting or activity; these can be engineering specific or not. If it fits your interest and potentially helps you find your passion and community on campus, it counts!</span>
                <ul data-listchain="__List_Chain_503">
                    <li><span><a class="inline_disabled" href="https://groups.engr.oregonstate.edu/esc/college-engineering-clubs" target="_blank" rel="noopener">College of Engineering Student Council webpage of student clubs</a></span></li>
                    <li><span><span class="ally-file-link-holder link_holder"><span class="instructure_file_holder link_holder instructure_file_link_holder ally-file-link-holder"><a class="inline_disabled preview_in_overlay" title="Active Engineering Clubs .pdf" href="/courses/2042959/files/117524733?wrap=1" target="_blank" rel="noopener" data-canvas-previewable="false" data-id="116801717"><span>Here is a file with a COE club overview</span></a></span></span></span></li>
                    <li><span><a class="inline_disabled external" title="Link" href="https://oregonstate.app.box.com/s/njtrpeka64z4s3ky97qleiqhj23bsl88" target="_blank" rel="noopener"><span>A folder of introductory videos by COE clubs</span></a><span>&nbsp;</span>(check back for updates).</span></li>
                </ul>
            </li>
            <li aria-level="1"><span>Attend and participate in an opportunity advertised to you by your instructor.</span></li>
            <li><em>To determine if your event fulfills this assignment, you can always check with your instructor</em></li>
        </ul>
    </li>
    <li><span>Attend a COE or OSU event that fulfills the intent of this assignment; examples are listed above. <em>Not sure? Ask your Instructor or TA.</em></span></li>
    <li><span>An opportunity shared with you by your instructor.</span></li>
</ol>
<h2 style="border-bottom: 2px solid #dc4405; font-size: 18pt; margin-top: 12px; margin-bottom: 12px;">What you must do</h2>
<ol start="1" data-listchain="__List_Chain_503">
    <li><span>Choose any one of the possibilities that fits with your schedule from the options above, and that you can complete by the assignment due date.</span></li>
    <li><span>Participate in the event or activity.&nbsp;</span></li>
    <li><span>Return to this assignment and answer the questions for attendance credit.<em><span>&nbsp;</span><strong>Answer all questions and make your answers sufficient enough to warrant full credit.<span>&nbsp;</span><em>A good rule of thumb is 2-3 sentences per question.</em></strong></em></span></li>
    <li><span>(Optional) Look ahead to see upcoming events that you might want to try attend when they occur (in-person or virtually) before the Professional Development Assignments are due.</span></li>
</ol>
<div>
    <h2 style="border-bottom: 2px solid #dc4405; font-size: 18pt; margin-top: 12px; margin-bottom: 12px;">My expectations</h2>
    <p><span style="font-family: inherit; font-size: 1rem;">1. Spend approximately 45 min - 1 hour on this assignment. For example, 5 minutes is not sufficient and 2 hours is more than need. Answering the assignment questions are part of the time commitment.</span></p>
    <p><span style="font-family: inherit; font-size: 1rem;">2.&nbsp;</span><span style="font-family: inherit; font-size: 1rem;">Answer all questions and make your answers sufficient to warrant full credit. A good rule of thumb is 2-3 sentences per question.</span></p>
    <p>&nbsp;</p>
</div>`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## Resources

- [Starlight Getting Started](https://starlight.astro.build/getting-started/) -- Astro template
- [TailwindCSS](https://tailwindcss.com/) -- for styling
- [Svelte](https://svelte.dev/docs/svelte/overview) -- for reactive components
- [Starlight Page Actions](https://github.com/dlcastillop/starlight-page-actions), or alternatively [Starlight Contextual Menu](https://github.com/corsfix/starlight-contextual-menu)
- [Starlight Links Validator](https://github.com/HiDeoo/starlight-links-validator)
- [How to create an Astro LaTeX component](https://danidiaztech.com/create-astro-latex-component/) -- LaTeX component
- [KaTeX: The fastest math typesetting library for the web.](https://katex.org/) -- LaTeX component
- [Mermaid User Guide](https://mermaid.js.org/intro/getting-started.html) -- Mermaid component

## Notes

### Markdown Slides to PDF

I tried Quarto + Reveal.js to generate slides instead of Marp but it was difficult to automate the PDF generation. Marp seems to work well enough for now. Reveal.js is very feature-rich, tough, and would be a good option if we wanted to make more complex slides in the future.

A better option seem to be [Slidev](https://sli.dev/), which is also Markdown-based, is feature-rich, flexible, AND can export to PDF easily. To be tested in the future, maybe in a separate repository.

### Multi-Code Version (C++, Python, etc.)

One option is to use [Internationalization](https://starlight.astro.build/guides/i18n/) to have multiple version of the course for different terms or different languages. We would need to change the icon for the language dropdown (code instead of translation) so that it is clear what the purpose is.

Here's an example of the change to be made to `astro.config.mjs` to enable different versions:

```js
defaultLocale: 'root',
locales: {
  root: {
    label: 'C++',
    lang: 'cpp', 
  },
  'py': {
    label: 'Python',
    lang: 'py',
  },
},
```

I don't think this will be necessary. When I change the programming language to Rust or Python, I might:

- Fork or cretae a new repository for the new language, or
- Replace the content in this repository entirely, or
- Keep the C++ contents in the repository but in another directory.

### VS Code

In the future, have vim and the ENGR servers as optional dev environments, and focus more on VS Code since it's more common nowadays. Find a stack (C++ or Rust or Python) that is easy to install and set up on different OSes and VS Code. Don't rely on OS-specific dependencies.

## Acknowledgments

The original content for the first iteration of this textbook (C++) was provided by Alexander Guyer under CC-BY. This includes lectures notes, studios, assignments, practicalities, and other content. The ENGR 103 course was originally developed by Jennifer Parham-Mocello and Natasha Mallette. They developed the contents in their capacity of faculty at Oregon State University.
