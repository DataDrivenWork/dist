document.addEventListener('DOMContentLoaded', () => {
    const articleText = `
    Zombie Leadership
    So you think goldfish have a 3 second memory? Think again!
    Research has in fact shown that goldfish are actually quite capable of remembering things for several months and can even learn some complex tasks, such as pressing a lever to receive food.
    Despite these research findings, this myth of the 3 second memory still persists today. Now fortunately, the persistence of this myth is fairly inconsequential, at least for those of us who don’t own goldfish. However, it raises the question
    What myths and misconceptions exist in our world today that have no supporting evidence of basis in reality?
    `;
  
    const formatArticleText = (text) => {
      const lines = text.split('\n').filter(line => line.trim() !== '');
      let html = '';
  
      lines.forEach(line => {
        if (line.trim().length === 0) return;
  
        if (line.match(/^[A-Z]/)) {
          // Consider this a heading
          html += `<h2>${line.trim()}</h2>`;
        } else {
          // Consider this a paragraph
          html += `<p>${line.trim()}</p>`;
        }
      });
  
      return html;
    };
  
    const formattedArticle = formatArticleText(articleText);
    const articleContainer = document.getElementById('article-container');
  
    if (articleContainer) {
      articleContainer.innerHTML = formattedArticle;
    } else {
      console.error('article-container element not found');
    }
  });
  
  