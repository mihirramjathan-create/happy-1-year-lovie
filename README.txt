MI & CHERVEL — COMMENTED ANNIVERSARY WEBSITE ❤️

WHAT'S INCLUDED
- index.html: all website text, section layout, replaceable photo placeholders, and video source.
- style.css: colours, fonts, spacing, responsive layout, and mobile menu styling.
- script.js: anniversary countdown, mobile menu, reasons button, and floating hearts.
- images/: SVG placeholders for every photo slot, plus a video poster placeholder.
- videos/: put your video file in this folder.

HOW TO OPEN
1. Extract this ZIP.
2. Keep all files and folders together.
3. Open index.html in Chrome, Safari, Edge, or Firefox.

HOW TO REPLACE A PHOTO
1. Put your photo in the images folder.
2. Open index.html in a text editor.
3. Find an image line such as:
   <img class="memory-photo" src="images/placeholder-first-kiss.svg" ...>
4. Change only the src path to your own file, for example:
   src="images/our-first-kiss.jpg"
5. Save index.html and refresh your browser.
You can keep the placeholder files as backups. Supported common formats include JPG, PNG, WebP and GIF.

HOW TO ADD YOUR VIDEO
1. Put your video in the videos folder, for example: future-kids-message.mp4
2. In index.html, find the VIDEO SOURCE PLACEHOLDER line:
   <source src="videos/REPLACE-WITH-YOUR-VIDEO.mp4" type="video/mp4">
3. Change the path to your file:
   <source src="videos/future-kids-message.mp4" type="video/mp4">
4. Save and refresh. MP4 with H.264 video and AAC audio usually works best across devices.
5. To replace the still image shown before the video plays, change the poster path:
   poster="images/placeholder-video-poster.svg"
   to your own image, e.g. poster="images/video-thumbnail.jpg"

EDITING THE WEBSITE
- Edit text directly in index.html.
- Change colours at the top of style.css under :root.
- Change the anniversary date near the top of script.js. JavaScript months start at 0 (January=0, October=9).
- Add or edit the messages in the reasons array in script.js.
- Keep index.html, style.css, script.js, images/ and videos/ in the same folder.
- Google Fonts requires internet; fallback fonts work offline.

SHARING IT ONLINE
To let Chervel open the site with a link, publish the whole folder with a static hosting service such as GitHub Pages or Netlify. The video file must also be hosted with the site, or embedded from a supported video host, if you want it to play for her online.
