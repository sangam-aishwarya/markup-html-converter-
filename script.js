function convertMarkdown() {
  const input = document.getElementById("markdown-input").value;

  let html = input;

  // HEADINGS FIRST (IMPORTANT ORDER FIX)
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // IMAGES (before links!)
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // LINKS
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // BOLD
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");

  // ITALIC
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/_(.+?)_/g, "<em>$1</em>");

  // BLOCKQUOTE (fix regex + multiline)
  html = html.replace(/^>\s+(.+)$/gm, "<blockquote>$1</blockquote>");

  document.getElementById("html-output").textContent = html;
  document.getElementById("preview").innerHTML = html;

  return html;
}

// FIX EVENT TYPE (IMPORTANT)
document.getElementById("markdown-input").addEventListener("input", () => {
  convertMarkdown();
});