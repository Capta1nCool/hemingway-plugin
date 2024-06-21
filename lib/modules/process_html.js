export default function processHtml(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const plainText = doc.body.textContent || '';
    const paragraphs = doc.getElementsByTagName('p');

    return { plainText, paragraphs };
}