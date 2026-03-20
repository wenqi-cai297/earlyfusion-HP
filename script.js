const button = document.getElementById('copy-citation');
const citation = document.getElementById('citation');

if (button && citation) {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      const original = button.textContent;
      button.textContent = 'Copied';
      setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch {
      button.textContent = 'Copy failed';
      setTimeout(() => {
        button.textContent = 'Copy BibTeX';
      }, 1400);
    }
  });
}
