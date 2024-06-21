import processHtml from "./modules/process_html";

const plugin = {
 
  noteOption: {
    "Analyze": {
      check: async function (app, noteUUID) {
        const noteContent = await app.getNoteContent({ uuid: noteUUID });

        await this._loadScript('https://cdnjs.cloudflare.com/ajax/libs/marked/13.0.0/marked.min.js')

        // Parse the HTML
        const html = marked.parse(noteContent)
        
        this.data = processHtml(html)

        return true;
      },
      run: async function (app, noteUUID) {
        await app.alert("Hemingway analyzer");
        console.debug("Special message to the DevTools console");
      }
    }
  },

  calculateLevel(letters, words, sentences) {
    if (words === 0 || sentences === 0) {
      return 0;
    }
    let level = Math.round(
      4.71 * (letters / words) + 0.5 * words / sentences - 21.43
    );
    return level <= 0 ? 0 : level;
  },

  async _loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    })
  },
};
export default plugin;