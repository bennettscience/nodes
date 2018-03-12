---
id: 3961
title: More Scripts to Make Life Easier
date: 2015-08-14T16:15:43+00:00
author: Brian Bennett
layout: post
guid: http://blog.ohheybrian.com/?p=3961
permalink: /2015/08/more-scripts-to-make-life-easier/
image: assets/img/wp-content/uploads/2015/03/15899278822_6972fbc99b_k.jpg
categories:
  - All
  - Projects
  - Technology
---
It&#8217;s been an intense week of teaching, church band practice, and Google Apps Scripting. I&#8217;m really focusing this year on using the computer to do what it does well so I can focus on doing my job better. In particular, I&#8217;m using the desktop to do repetitive, marginal jobs as efficiently as possible.

This week, I&#8217;ve got two new tools in my belt to help out.

## docTranslate

I happen to have a higher number of ESL students this year, some of whom are brand new to the country. Besides feeling more and more awkward about only speaking one language myself, I needed to find a way to help them with the language barrier.

After speaking with our ESL specialist, she gave the okay for me to print Spanish on the back of my English notes pages. (I was concerned about creating crutches, but she assured me that it would be more helpful than harmful in the long run. I need to learn Spanish.) Taking my notes, one by one, and putting them through Google Translate would have taken way too much time. So, I turned to a script.

<div id="wp-gistpenfile-doctranslate.gs">
  <h3 class="wp-gistpenfile-title">
    doctranslate.gs
  </h3>

  <pre class="gistpen line-numbers"><code class="language-javascript">// This function converts a document from English to Spanish quickly.
// The post from http://stackoverflow.com/questions/25509159/how-i-can-get-the-textwrap-image-in-google-doc/25509591#25509591
// was helpful for creating the logic to check for images in the document.

function translate() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // Add a page break for the translated material.
  body.appendPageBreak();

  // Get the number of elements in the document
  var elements = body.getNumChildren();

  // Use the number to loop through each element in the document.
  for( var i=0;i&lt;elements;i++) {
   var element = body.getChild(i).copy();
    var type = element.getType();

    // Test each type for a child element and run script based on the result
    // Images are nested in a paragraph as a child, so the second `if` makes
    // sure there is no image present before moving to the next paragraph.
    if( type == DocumentApp.ElementType.PARAGRAPH ){
      if(element.asParagraph().getNumChildren() !== 0 && element.asParagraph().getChild(0).getType() == DocumentApp.ElementType.INLINE_IMAGE) {
        var img = element.asParagraph().getChild(0).asInlineImage().getBlob();
        body.appendImage(img);
      } else if(element.asParagraph().getNumChildren() !== 0 && element.asParagraph().getChild(0).getType() == DocumentApp.ElementType.INLINE_DRAWING) {
        var drawing = element.asParagraph().copy();
        body.appendParagraph(drawing);
      } else {
        var text = element.asParagraph().getText();
        var spn = LanguageApp.translate(text, 'en', 'es');
        body.appendParagraph(spn);
      } // end the paragraph loop for child elements.

    // Tables are top-level, so they get their own statement outside the
    // paragraph loop above.
    } else if(type == DocumentApp.ElementType.TABLE) {
      element.asTable().copy();
      body.appendTable(element);
    } else if(type == DocumentApp.ElementType.LIST_ITEM) {
      var list = element.asListItem().getText();
      body.appendListItem(LanguageApp.translate(list, 'en', 'es'));
    }
  }
}

</code></pre>
</div>

This script is still a little incomplete, but it does the trick. You can read through the code to see what exactly each section does. I&#8217;m _probably_ going to turn this into a Doc Add-On in the future, but that&#8217;s a little fuzzy right now because I can&#8217;t imagine when I&#8217;ll have the time to do that at this point. Some things to pay attention to:

  1. All **images** and **drawings** have to be _inline_ for it to work. Googles Apps Scripts can&#8217;t see other types of images yet. It&#8217;s faster to make the copy and then reformat how you&#8217;d like.
  2. Formatting isn&#8217;t always carried perfectly. Again, it&#8217;s about the minimum-viable-product right now. Spot check the translation for format errors if that matters to your doc.
  3. This is document-specific&#8230;at the moment. You&#8217;ll need to recopy the script each time you want to use it.

I had a fluent Spanish reader check the grammar (Google Translate can be notorious for some weird translations at times) and he gave it a thumbs up, so take that how you will.

## driveBox

Whiteboarding is a big part of this year in class. I want students investigating, collecting information, manipulating it, and building an argument. A lot of times, class ends before they have a chance to get clean work on paper. I needed a way for them to send photos of their work in at the close of class.

Of course, email is out. I guess that makes me old now.

We&#8217;re _barely_ scratching the surface of Google Apps for Education at school &#8211; teachers are starting training this semester and student&#8217;s haven&#8217;t had their accounts opened up yet, so sharing back and forth isn&#8217;t really possible yet.

[Some Googling turned up a **great** alternative](http://www.labnol.org/internet/receive-files-in-google-drive/19697/), still using Google Apps, to create a public dropbox with scripts. In 20 minutes of finnagling, I had a working dropbox page which allowed students to submit things straight to my Drive with three taps. I&#8217;ve modified mine slightly from the blog post linked above. Unlike the translate function, this one requires two files.

<div id="wp-gistpenfile-form.html">
  <h3 class="wp-gistpenfile-title">
    form.html
  </h3>

  <pre class="gistpen line-numbers"><code class="language-markup"> &lt;!--
    This is based on the template shared by Amit Agarwal (@labnol) on
    the blog, Digital Inspiration. The original post with instructions:
    http://www.labnol.org/internet/receive-files-in-google-drive/19697/
    --&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;div id="wrapper"&gt;
  &lt;h1&gt;Student Work Submission&lt;/h1&gt;
  &lt;form id="myForm"&gt;
    &lt;input type="text" name="myName" placeholder="Your name.." /&gt;
    &lt;select name="classPer"&gt;
      &lt;option&gt;P1&lt;/option&gt;
      &lt;option&gt;P2&lt;/option&gt;
      &lt;option&gt;P3&lt;/option&gt;
      &lt;option&gt;P4&lt;/option&gt;
      &lt;option&gt;P6&lt;/option&gt;
      &lt;option&gt;P7&lt;/option&gt;
    &lt;/select&gt;
    &lt;input type="file" name="myFile" /&gt;
    &lt;input type="submit" value="Upload File"
           onclick="this.value='Uploading..';
                    google.script.run.withSuccessHandler(fileUploaded)
                    .uploadFiles(this.parentNode);
                    return false;" /&gt;
                    &lt;/form&gt;
  &lt;/div&gt;

  &lt;!-- Display the result of the upload. Success or Failure below. --&gt;
  &lt;div id="output"&gt;&lt;/div&gt;

  &lt;script&gt;
      // Make sure everythig is running correctly. Display an error if not.
      function fileUploaded(status) {
          document.getElementById('myForm').style.display = 'none';
          document.getElementById('output').innerHTML = status;
          }
  &lt;/script&gt;

  &lt;!-- Styled to make it super easy to use on a small screen --&gt;
  &lt;style&gt;
     h1 { font-family:Arial, Helvetica, sans-serif; }
     body { width:50%; margin: 0 auto; font-size:30px;}
     #wrapper { position: relative; width:100%; margin-top:50px;text-align:center; }
     input, button, text, file { width:100%; height:auto; padding:10px 0; }
     input { font-size:25px; }
     input { display:block; margin:20px; }
     select { width:100%; margin-left:20px;font-size:30px; }
     #output { font-family:Helvetica,Arial,sans-serif; }
  &lt;/style&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
</div>

<div id="wp-gistpenfile-server.gs">
  <h3 class="wp-gistpenfile-title">
    server.gs
  </h3>

  <pre class="gistpen line-numbers"><code class="language-javascript">/*
    This is based on the template shared by Amit Agarwal (@labnol) on
    the blog, Digital Inspiration. The original post with instructions:
    http://www.labnol.org/internet/receive-files-in-google-drive/19697/
*/

// Find the form that is collecting the information to upload.
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function uploadFiles(form) {

  // Check for a folder called "Student Files" in Drive. If it's not there,
  // create one.
  try {

    var dropbox = "Student Files";
    var folder, folders = DriveApp.getFoldersByName(dropbox);

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }

    // Once the folder is found, create the new file
    // The file is named by attaching the Period Number to the Student Name.
    var blob = form.myFile;    
    var file = folder.createFile(blob);
    file.setName(form.classPer + form.myName);

    // Display a success message to the user.    
    return "File uploaded successfully. You can now close this window.";

    // If it fails, display the error message.
  } catch (error) {

    return error.toString();
  }

}</code></pre>
</div>

Those blocks of code turn into this:

<img src="http://blog.ohheybrian.com/wp-content/uploads/2015/08/2015-08-14_16-17-18.png" alt="2015-08-14_16-17-18" width="726" height="494" class="aligncenter size-full wp-image-4003" srcset="https://blog.ohheybrian.com/wp-content/uploads/2015/08/2015-08-14_16-17-18.png 726w, https://blog.ohheybrian.com/wp-content/uploads/2015/08/2015-08-14_16-17-18-300x204.png 300w" sizes="(max-width: 726px) 100vw, 726px" />

Pretty easy to figure out what to do.

If you&#8217;re interested in using either of these scripts, let me know on Twitter &#8211; [@bennettscience](http://www.twitter.com/bennettscience) and I can help you get them set up. Like I already mentioned, I think the translate function would work well as an Add-On, and if I get there, I&#8217;ll write another post with instructions on how to get it.

_More on the scripting I&#8217;ve been doing lately&#8230;_

  * [Student Response System Template for Google Drive](http://blog.ohheybrian.com/updated-student-response-template/)
  * [Creating QR Codes in a Google Spreadsheet](http://blog.ohheybrian.com/qr-codes-everywhere/)
  * [Getting SMS Messages into Google Sheets](http://blog.ohheybrian.com/text-messages-google-form-responses/)
  * [Creating Endnotes from Footnotes in Google Docs](http://blog.ohheybrian.com/making-endnotes-from-footnotes/)
  * [Creating Sets of Google Docs Using Python](http://blog.ohheybrian.com/creating-docs-with-python/)
