(() => {
  // lib/plugin.js
  var plugin = {
    constants: {},
    noteOption: {
      "Analyze": {
        check: async function(app, noteUUID) {
          const noteContent = await app.getNoteContent({ uuid: noteUUID });
          await this._loadScript("https://cdnjs.cloudflare.com/ajax/libs/marked/13.0.0/marked.min.js");
          await this._loadScript("https://cdnjs.cloudflare.com/ajax/libs/cheerio/0.22.0/index.min.js");
          const html = marked.parse(noteContent);
          const $ = cheerio.load(html);
          console.log($.text());
          return $.text();
        },
        run: async function(app, noteUUID) {
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
      });
    }
  };
  var plugin_default = plugin;
})();
