const plugin = {
  constants: {
  },

  noteOption: {
    "Analyze": {
      check: async function (app, noteUUID) {
        const noteContent = await app.getNoteContent({ uuid: noteUUID });

        await this._loadScript('https://cdnjs.cloudflare.com/ajax/libs/marked/13.0.0/marked.min.js')

        const html = marked.parse(noteContent)

        const parser = new DOMParser();

        // Parse the HTML
        const doc = parser.parseFromString(html, 'text/html');

        console.log(doc.body.textContent)

        // Extract text content
        return doc.body.textContent || "";
      },
      run: async function (app, noteUUID) {
        await app.alert("Hemingway analyzer");
        console.debug("Special message to the DevTools console");
      }
    }
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