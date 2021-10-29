module.exports = {
  "plugins": [
    {
      name: "removeDimensions",
      params: { active : true }
    },
    {
      name: "sortAttrs",
      params: { active : true }
    },
    {
      name: "removeAttrs",
      params: { "attrs": "fill" }
    },
    {
      name: "addAttributesToSVGElement",
      params: { attributes: [{ fill: "currentColor" }, { focusable: false }, { role: 'img' }]}
    }

  ]
}