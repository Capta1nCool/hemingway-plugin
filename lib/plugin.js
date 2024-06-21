import { marked } from 'marked';

const plugin = {
  constants: {
  },

  noteOption: {
    "Analyze": {
      check: async function (app, noteUUID) {
        const noteContent = await app.getNoteContent({ uuid: noteUUID });

        const html = marked.parse(noteContent)

        return html
      },
      run: async function (app, noteUUID) {
        await app.alert("Hemingway analyzer");
        console.debug("Special message to the DevTools console");
      }
    }
  },
};
export default plugin;