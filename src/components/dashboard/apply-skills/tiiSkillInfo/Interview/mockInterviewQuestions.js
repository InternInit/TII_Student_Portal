const mockInterviewQuestions = `
<html>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
    <style type="text/css">
      ol.lst-kix_71o7agljs4ra-3.start {
        counter-reset: lst-ctn-kix_71o7agljs4ra-3 0;
      }
      ol.lst-kix_71o7agljs4ra-8.start {
        counter-reset: lst-ctn-kix_71o7agljs4ra-8 0;
      }
      .lst-kix_71o7agljs4ra-2 > li {
        counter-increment: lst-ctn-kix_71o7agljs4ra-2;
      }
      .lst-kix_71o7agljs4ra-0 > li:before {
        content: "" counter(lst-ctn-kix_71o7agljs4ra-0, decimal) ". ";
      }
      .lst-kix_71o7agljs4ra-4 > li {
        counter-increment: lst-ctn-kix_71o7agljs4ra-4;
      }
      .lst-kix_71o7agljs4ra-7 > li {
        counter-increment: lst-ctn-kix_71o7agljs4ra-7;
      }
      ol.lst-kix_71o7agljs4ra-0 {
        list-style-type: none;
      }
      ol.lst-kix_71o7agljs4ra-2 {
        list-style-type: none;
      }
      ol.lst-kix_71o7agljs4ra-0.start {
        counter-reset: lst-ctn-kix_71o7agljs4ra-0 0;
      }
      ol.lst-kix_71o7agljs4ra-1 {
        list-style-type: none;
      }
      ol.lst-kix_71o7agljs4ra-4 {
        list-style-type: none;
      }
      ol.lst-kix_71o7agljs4ra-3 {
        list-style-type: none;
      }
      .lst-kix_71o7agljs4ra-4 > li:before {
        content: "" counter(lst-ctn-kix_71o7agljs4ra-4, lower-latin) ". ";
      }
      .lst-kix_71o7agljs4ra-6 > li:before {
        content: "" counter(lst-ctn-kix_71o7agljs4ra-6, decimal) ". ";
      }
      ol.lst-kix_71o7agljs4ra-6 {
        list-style-type: none;
      }
      ol.lst-kix_71o7agljs4ra-5 {
        list-style-type: none;
      }
      .lst-kix_71o7agljs4ra-1 > li {
        counter-increment: lst-ctn-kix_71o7agljs4ra-1;
      }
      ol.lst-kix_71o7agljs4ra-8 {
        list-style-type: none;
      }
      .lst-kix_71o7agljs4ra-1 > li:before {
        content: "" counter(lst-ctn-kix_71o7agljs4ra-1, lower-latin) ". ";
      }
      .lst-kix_71o7agljs4ra-5 > li:before {
        content: "" counter(lst-ctn-kix_71o7agljs4ra-5, lower-roman) ". ";
      }
      ol.lst-kix_71o7agljs4ra-7 {
        list-style-type: none;
      }
      ol.lst-kix_71o7agljs4ra-7.start {
        counter-reset: lst-ctn-kix_71o7agljs4ra-7 0;
      }
      ol.lst-kix_71o7agljs4ra-5.start {
        counter-reset: lst-ctn-kix_71o7agljs4ra-5 0;
      }
      .lst-kix_71o7agljs4ra-5 > li {
        counter-increment: lst-ctn-kix_71o7agljs4ra-5;
      }
      .lst-kix_71o7agljs4ra-2 > li:before {
        content: "" counter(lst-ctn-kix_71o7agljs4ra-2, lower-roman) ". ";
      }
      ol.lst-kix_71o7agljs4ra-2.start {
        counter-reset: lst-ctn-kix_71o7agljs4ra-2 0;
      }
      .lst-kix_71o7agljs4ra-8 > li {
        counter-increment: lst-ctn-kix_71o7agljs4ra-8;
      }
      .lst-kix_71o7agljs4ra-3 > li:before {
        content: "" counter(lst-ctn-kix_71o7agljs4ra-3, decimal) ". ";
      }
      .lst-kix_71o7agljs4ra-6 > li {
        counter-increment: lst-ctn-kix_71o7agljs4ra-6;
      }
      .lst-kix_71o7agljs4ra-8 > li:before {
        content: "" counter(lst-ctn-kix_71o7agljs4ra-8, lower-roman) ". ";
      }
      ol.lst-kix_71o7agljs4ra-4.start {
        counter-reset: lst-ctn-kix_71o7agljs4ra-4 0;
      }
      .lst-kix_71o7agljs4ra-7 > li:before {
        content: "" counter(lst-ctn-kix_71o7agljs4ra-7, lower-latin) ". ";
      }
      .lst-kix_71o7agljs4ra-0 > li {
        counter-increment: lst-ctn-kix_71o7agljs4ra-0;
      }
      ol.lst-kix_71o7agljs4ra-1.start {
        counter-reset: lst-ctn-kix_71o7agljs4ra-1 0;
      }
      .lst-kix_71o7agljs4ra-3 > li {
        counter-increment: lst-ctn-kix_71o7agljs4ra-3;
      }
      ol.lst-kix_71o7agljs4ra-6.start {
        counter-reset: lst-ctn-kix_71o7agljs4ra-6 0;
      }
      ol {
        margin: 0;
        padding: 0;
      }
      table td,
      table th {
        padding: 0;
      }
      .c2 {
        margin-left: 36pt;
        padding-top: 0pt;
        padding-left: 0pt;
        padding-bottom: 0pt;
        line-height: 2;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .c0 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 2;
        orphans: 2;
        widows: 2;
        text-align: center;
        height: 11pt;
      }
      .c10 {
        color: #000000;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 26pt;
        font-family: "Arial";
        font-style: normal;
      }
      .c9 {
        padding-top: 0pt;
        padding-bottom: 3pt;
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: center;
      }
      .c1 {
        color: #000000;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 11pt;
        font-family: "Arial";
        font-style: normal;
      }
      .c5 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1.15;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .c4 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 2;
        orphans: 2;
        widows: 2;
        text-align: center;
      }
      .c8 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1.15;
        orphans: 2;
        widows: 2;
        text-align: center;
      }
      .c3 {
        background-color: #ffffff;
        max-width: 468pt;
        padding: 72pt 72pt 72pt 72pt;
      }
      .c7 {
        padding: 0;
        margin: 0;
      }
      .c6 {
        height: 11pt;
      }
      .title {
        padding-top: 0pt;
        color: #000000;
        font-size: 26pt;
        padding-bottom: 3pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .subtitle {
        padding-top: 0pt;
        color: #666666;
        font-size: 15pt;
        padding-bottom: 16pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      li {
        color: #000000;
        font-size: 11pt;
        font-family: "Arial";
      }
      p {
        margin: 0;
        color: #000000;
        font-size: 11pt;
        font-family: "Arial";
      }
      h1 {
        padding-top: 20pt;
        color: #000000;
        font-size: 20pt;
        padding-bottom: 6pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h2 {
        padding-top: 18pt;
        color: #000000;
        font-size: 16pt;
        padding-bottom: 6pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h3 {
        padding-top: 16pt;
        color: #434343;
        font-size: 14pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h4 {
        padding-top: 14pt;
        color: #666666;
        font-size: 12pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h5 {
        padding-top: 12pt;
        color: #666666;
        font-size: 11pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h6 {
        padding-top: 12pt;
        color: #666666;
        font-size: 11pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.15;
        page-break-after: avoid;
        font-style: italic;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
    </style>
  </head>
  <body class="c3">
    <p class="c9 title" id="h.vjhsq0odjx04"><span class="c10">Mock Interview Questions</span></p>
    <p class="c5 c6"><span class="c1"></span></p>
    <p class="c5">
      <span class="c1">
        Provided are some mock questions for an interview. Make sure you are practicing what you say and how you say it. Sit down as if this is a real interview. Obviously, you do not need to get dressed up for this as long as you do get
        dressed up for the real thing. Hopefully, you can get a family member to ask you these questions, but if not, you can ask them to yourself.
      </span>
    </p>
    <p class="c5 c6"><span class="c1"></span></p>
    <p class="c8"><span class="c1">Good luck!</span></p>
    <p class="c5 c6"><span class="c1"></span></p>
    <p class="c5 c6"><span class="c1"></span></p>
    <p class="c5 c6"><span class="c1"></span></p>
    <ol class="c7 lst-kix_71o7agljs4ra-0 start" start="1">
      <li class="c2"><span class="c1">Do you think you would make a good fit for this company?</span></li>
      <li class="c2"><span class="c1">Do you think this company would make a good fit for you?</span></li>
      <li class="c2"><span class="c1">What is your best quality that would prepare you as an intern here.</span></li>
      <li class="c2"><span class="c1">What do you think is your worst quality?</span></li>
      <li class="c2"><span class="c1">What does our company do? (They may ask you this to see if you are educated on the company)</span></li>
      <li class="c2"><span class="c1">How does being a high schooler better prepare you for this job?</span></li>
      <li class="c2"><span class="c1">Why would you want to work here?</span></li>
      <li class="c2"><span class="c1">What previous work experience do you have?</span></li>
      <li class="c2"><span class="c1">What are your interests?</span></li>
      <li class="c2"><span class="c1">How would you go about dealing with a difficult client?</span></li>
      <li class="c2"><span class="c1">How would you go about dealing with a difficult coworker?</span></li>
      <li class="c2"><span class="c1">How do you deal with stressful situations?</span></li>
    </ol>
    <p class="c0"><span class="c1"></span></p>
    <p class="c4"><span class="c1">If you need more questions, there are many online that you can find.</span></p>
  </body>
</html>

`
export default mockInterviewQuestions;