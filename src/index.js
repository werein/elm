const Elm = require('./main.elm');
const mountNode = document.getElementById('elm');

Elm.embed(Elm.Main, mountNode);
