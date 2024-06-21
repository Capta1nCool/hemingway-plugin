import * as cheerio from 'cheerio';
import { marked } from 'marked';


const plugin = {
  constants: {
  },

  noteOption: {
    "Analyze": {
      check: async function (app, noteUUID) {
        const noteContent = await app.getNoteContent({ uuid: noteUUID });

        const html = marked.parse(noteContent)

        const $ = cheerio.load(html);

        console.log($.text())
        
        return $.text();
      },
      run: async function (app, noteUUID) {
        await app.alert("You clicked the Baby's first Note Option command in a COOL note!");
        console.debug("Special message to the DevTools console");
      }
    }
  },
};
export default plugin;