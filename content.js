function copyComputedStyles(src, dest) {
    var computedStyle = getComputedStyle(src);
    for (var key of computedStyle) {
      dest.style[key] = computedStyle[key];
    }
  
    for (var i = 0; i < src.children.length; i++) {
      copyComputedStyles(src.children[i], dest.children[i]);
    }
  }
  
  var tagSelector = 'div.flex.flex-col.text-sm.dark\\:bg-gray-800';
  
  var tag = document.querySelector(tagSelector);
  if (tag && tag.offsetHeight >= 250) {
    var clonedTag = tag.cloneNode(true);
    copyComputedStyles(tag, clonedTag);
  
    var tagHtml = `
      <html>
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          ${clonedTag.outerHTML}
        </body>
      </html>
    `;
  
    // Create an iframe, set the content, and print

    var printWindow = window.open('', '_blank');
    printWindow.document.write(tagHtml);
    printWindow.document.close();


    printWindow.addEventListener('afterprint', () => {
       printWindow.close();
    });

    printWindow.print();



  }
  
