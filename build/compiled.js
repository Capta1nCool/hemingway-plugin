(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });

  // lib/plugin.js
  var import_marked = __require("marked");
  var plugin = {
    constants: {},
    noteOption: {
      "Analyze": {
        check: async function(app, noteUUID) {
          const noteContent = await app.getNoteContent({ uuid: noteUUID });
          console.log(import_marked.marked);
          return noteContent;
        },
        run: async function(app, noteUUID) {
          await app.alert("Hemingway analyzer");
          console.debug("Special message to the DevTools console");
        }
      }
    }
  };
  var plugin_default = plugin;
})();
