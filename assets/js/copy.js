const textBlocks = document.querySelectorAll('.copy-text');
const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach((copyButton, index) => {
  const text = textBlocks[index].innerText;

  copyButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(text);
    copyButton.classList.add('copied');

    setTimeout(() => {
      copyButton.classList.remove('copied');
    }, 2000);
  });
});
