// const checkId = window.setInterval(main, 100);

// function main() {
//     const contents = $("#contents");
//     if (!contents.length) return;

//     window.clearInterval(checkId);
//     // contents = $('#contents');

//     const contentsParent = contents.parent();
//     contentsParent.removeChild(contents);
// }

const wordNodes = document.querySelectorAll('p');
wordNodes.forEach((e) => e.remove());
