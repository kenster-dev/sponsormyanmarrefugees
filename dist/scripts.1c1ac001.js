// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"scripts.js":[function(require,module,exports) {


$(document).ready(function () {
  var photosDiv = document.getElementById('photosDiv');

  // for each kid: create a figure element with a photo and personal info
  for (var i = 0; i < 73; i++) {

    // create the figure and figcaption elements
    var figure = document.createElement('figure');
    figure.classList.add('col-6', 'col-sm-4', 'col-md-3');
    var figcaption = document.createElement('figcaption');
    figcaption.classList.add('personalInfo');

    // construct the personal info for each child
    var content = '<h5> ' + data[i]['name'] + ' </h5>\n      <div> Age: ' + data[i]['age'] + ' <span></span> Grade: ' + data[i]['grade'] + '</div>\n      <div class="' + data[i]['status'] + '"> ' + data[i]['status'] + ' </div>\n      <div class=\'story\'> Story: ' + data[i]['story'] + ' </div>';
    if (data[i]['siblings']) {
      content += '<div>Siblings: ' + data[i]['siblings'] + '</div>';
    }

    // insantiate the personal info into the figcaption
    figcaption.innerHTML = content;

    // create an image element and set it's source
    var image = new Image();
    image.src = 'images/kids/' + i + '.jpg';

    // combine all the elements and data into a figure, add the figure element to the div
    figure.appendChild(image);
    figure.appendChild(figcaption);
    photosDiv.appendChild(figure);

    // here's an example of the finished product:
    // <figure class='col-6 col-sm-4 col-md-3'>
    //     <img>
    //     <figcaption class="personalInfo">
    //         <h5>Name</h5>
    //         <div>Age: <span></span> Grade:</div>
    //         <div class="unsponsored">unsponsored</div>
    //         <div class="story">Story</div>
    //         the siblings line is only inserted here if that property exists in the json
    //     </figcaption>
    // </figure>
  }
});

// personal info for each of the kids
var data = [{
  id: 0, name: "Char Li", age: 13, grade: 8, status: "unsponsored",
  story: "She lost her father and her home was damaged by bombs... She was with her mother in the refugee camp. She is at the home now."
}, {
  id: 1, name: "Cha Li Dwet", age: 14, grade: 8, status: "unsponsored",
  story: "She has parents, one of her younger brothers died as they were running from the fighting. Her parents live in the refugee camp."
}, {
  id: 2, name: " San San Aye", age: 13, grade: 7, status: "unsponsored",
  story: "She has both parents but they lost all family property in the war so they lived in the refugee camp. Now she came to the home."
}, {
  id: 3, name: "Dar Le Wo", age: 9, grade: 4, status: "unsponsored",
  story: "He has parents. Because of the war, they left everything behind and lived in the camp... and he came to the home."
}, {
  id: 4, name: "Jor Sar Wo", age: 12, grade: "?", status: "unsponsored",
  story: "Both parents are drug addicts and he has no hope and peace at home. The war made them hopeless and running away. The family is in the camp now, but he came to the home."
}, {
  id: 5, name: "B Sar", age: 9, grade: 5, status: "unsponsored",
  story: "Her parents are homeless people. No land or home belong to the family. They stay in the refugee camp."
}, {
  id: 6, name: "Yaw Aye Mee", age: 13, grade: 8, status: "unsponsored",
  story: "She was living with her grandmother. When she was 2 years old her parents left her... They had no more contact with her and she stayed in the refugee camp up until the time she came to the home."
}, {
  id: 7, name: "Ngwa Li Du", age: 13, grade: 8, status: "unsponsored",
  story: "She lost her father in the war... and she was with her mom  ...very poor."
}, {
  id: 8, name: "Du Du Lay", age: 12, grade: 7, status: "unsponsored",
  story: "She has parents but they are very poor... their home was damaged by bombs in the war."
}, {
  id: 9, name: " J Chit Oo", age: 8, grade: 3, status: "unsponsored",
  story: "He grew up in wars... always running place to place. He lost his parents. He has been hurt a lot by the war... emotionally. He said: 'When I grow up... I will fight back those people who killed my parents as revenge!'"
}, {
  id: 10, name: "Ah phu kyaw", age: 14, grade: 9, status: "unsponsored",
  story: "Both parents are dealers of drugs... hopeless conditions... depression due to the war. He was staying in the refugee camp."
}, {
  id: 11, name: "Je Jaime", age: 13, grade: 8, status: "sponsored",
  story: "He lost his father in the war... the family stays in the refugee camp. They have three other kids."
}, {
  id: 12, name: "Jay Si Pha", age: 12, grade: 7, status: "unsponsored",
  story: "He is an orphan... he lived with his grandmother who is too old, then stayed in the refugees camp. He is at the home now."
}, {
  id: 13, name: "Myo kyaw san", age: 7, grade: "?", status: "unsponsored",
  story: "His parents were killed by the jungle army... they were left over... they stayed in the refugee camp before they came to the home.",
  siblings: "Myo kyaw ko, Du Mar Sa"
}, {
  id: 14, name: "Myo kyaw ko", age: 7, grade: "?", status: "unsponsored",
  story: "His parents were killed by the jungle army... they were left over... they stayed in the refugee camp before they came to the home.",
  siblings: "Myo kyaw san, Du Mar Sa"
}, {
  id: 15, name: "Du Mar Sa", age: 5, grade: "?", status: "sponsored",
  story: "Her parents are killed by the jungle army.... they were left over... they stayed in the refugee camp before they came to the home.",
  siblings: "Myo kyaw ko, Myo kyaw san"
}, {
  id: 16, name: "Are Phuo Dor", age: 10, grade: 6, status: "unsponsored",
  story: "He and his younger sister stayed in the refugee camp before coming to the home. Their parents both died from the bombs.",
  siblings: "Mee San"
}, {
  id: 17, name: "Mee San", age: 8, grade: 4, status: "unsponsored",
  story: "She and her older brother stayed in the refugee camp before coming to the home.  Their parents both died from the bombs.",
  siblings: "Are Phuo Dor"
}, {
  id: 18, name: "Yae Li Say", age: 6, grade: 2, status: "unsponsored",
  story: "His family are refugees... the father is a drug addict.",
  siblings: "Dee Li Say"
}, {
  id: 19, name: "Dee Li Say", age: 8, grade: 4, status: "unsponsored",
  story: "His family are refugees... the father is a drug addict.",
  siblings: "Yae Li Say"
}, {
  id: 20, name: "Gwa Yet", age: 9, grade: 5, status: "unsponsored",
  story: "They are refugees... the father is a drug addict. Divorced mother has 5 children and she cannot take care of the kids anymore...no support from the government or the father.",
  siblings: "Nyi Nyi"
}, {
  id: 21, name: "Nyi Nyi", age: 8, grade: 3, status: "unsponsored",
  story: "They are refugees... the father is a drug addict. Divorced mother has 5 children and she cannot take care of the kids anymore...no support from the government or the father.",
  siblings: "Gwa Yet"
}, {
  id: 22, name: "Ngwa Mee Shew", age: 13, grade: 7, status: "unsponsored",
  story: "Her father is a drug dealer. The mother and the children were staying in the refugee camp. Now the children are here at the home.",
  siblings: "Ngwa Marry, Ngwa Li Dwe"
}, {
  id: 23, name: "Ngwa Marry", age: 10, grade: 5, status: "unsponsored",
  story: "Her father is a drug dealer. The mother and the children were staying in the refugee camp. Now the children are here at the home.",
  siblings: "Ngwa Mee Shaw, Ngwa Li Dwe"
}, {
  id: 24, name: "Ngwa Li Dwe", age: 8, grade: 3, status: "unsponsored",
  story: "His father is a drug dealer. The mother and the children were staying in the refugee camp. Now the children are here at the home.",
  siblings: "Ngwa Mee Shaw, Ngwa Marry"
}, {
  id: 25, name: "Naw Sar Dwe", age: 12, grade: 7, status: "unsponsored",
  story: "The family was divided because of the war... now he was running away from war. He came to live here at children's home."
}, {
  id: 26, name: "Say Nyi Dwe", age: 13, grade: 8, status: "unsponsored",
  story: "She lost both parents in the war. She had been staying at the refugee camp."
}, {
  id: 27, name: "Aung Moe Sa", age: 7, grade: 3, status: "unsponsored",
  story: "Due to the war, both father and mother left him alone... now he is a refugee boy."
}, {
  id: 28, name: "Dee Bo Sa", age: 11, grade: 4, status: "unsponsored",
  story: "he has parents, but the war made them homeless, and now the family is living in the refugee camp."
}, {
  id: 29, name: "Ngwa Che Pi", age: 8, grade: 4, status: "unsponsored",
  story: "He has parents and they live in the refugee camp... it's in the jungle and isn't safe from the fighting"
}, {
  id: 30, name: "Sa Li Dwet", age: 11, grade: 5, status: "unsponsored",
  story: "Parents died in the war, and he had been livng with his older sister in the refugee camp."
}, {
  id: 31, name: "Ngwa Grace", age: 10, grade: 5, status: "unsponsored",
  story: "He has parents, but because of the war, they ran away to the refugee camp.",
  siblings: "Ngwa Jn Ni"
}, {
  id: 32, name: "Ngwa Jn Ni", age: 7, grade: "?", status: "unsponsored",
  story: "He has parents, but because of the war, they ran away to the refugee camp.",
  siblings: "Ngwa Grace"
}, {
  id: 33, name: "Jay Phu", age: 14, grade: 7, status: "unsponsored",
  story: "His father died in the war and he had been with his mom in the refugee camp."
}, {
  id: 34, name: "Soloman", age: 8, grade: 3, status: "unsponsored",
  story: "His father died in the war and he was with his mom in the refugee camp."
}, {
  id: 35, name: "Phu Li Dwet", age: 13, grade: 9, status: "unsponsored",
  story: "He has parents... the war destroyed their village, and he lived in refugee camp for a while."
}, {
  id: 36, name: "Nar Li Sa", age: 11, grade: 6, status: "unsponsored",
  story: "She has parents... her family ran to the refugee camp when their home was damaged by the war."
}, {
  id: 37, name: "Naa Yet Sar", age: 10, grade: 3, status: "unsponsored",
  story: "She has parents. Their village was bombed so they lost every thing. She was in the refugee camp and now she came to the children house."
}, {
  id: 38, name: "Chi Mar Di", age: 12, grade: 7, status: "unsponsored",
  story: "She has parents. They lost their house and all they had in the war. She lived in the refugee camp for a while and then came to the home."
}, {
  id: 39, name: "Ngwa Che Du", age: 6, grade: 3, status: "unsponsored",
  story: "She has parents. The family is in refugee camp, and she came to the children's house."
}, {
  id: 40, name: "Phyun Pyhun Aye", age: 5, grade: 1, status: "unsponsored",
  story: "She has parents, but they lost everything in the war. She was living in the refugee camp, and then came to children house."
}, {
  id: 41, name: "David", age: 9, grade: 2, status: "unsponsored",
  story: "His Mother died in the war and his father is a drug addict..."
}, {
  id: 42, name: "Ku Mar Sar", age: 7, grade: 2, status: "unsponsored",
  story: "Her father is a drug addict and doesn't help the family... he is depressed because of the war... he is in the refugee camp now, but this girl came to the home",
  siblings: "Mee Nu Lay"
}, {
  id: 43, name: "Mee Nu Lay", age: 9, grade: 5, status: "unsponsored",
  story: "Her father is a drug addict and doesn't help the family... he is depressed because of the war... he is in the refugee camp now, but this girl came to the home",
  siblings: "Ku Mar Sar"
}, {
  id: 44, name: "Jar Aung", age: 5, grade: 1, status: "unsponsored",
  story: "Her Father is in prison... and her family is in the refugee camp."
}, {
  id: 45, name: "Bi S", age: 10, grade: 5, status: "unsponsored",
  story: "She has parents, but their village was bombed and burned down. She is at the home safely now."
}, {
  id: 46, name: "Naa Li Sar", age: 14, grade: 8, status: "unsponsored",
  story: "She has parents, but the war made them run for their lives... She came to the home."
}, {
  id: 47, name: "Naw Jor Li", age: 13, grade: 8, status: "unsponsored",
  story: "His father died in the war, and he found out his mother is in China, married to someone else. We don't know if she is there of her own accord or not."
}, {
  id: 48, name: "Yaw Li Say", age: 14, grade: 8, status: "unsponsored",
  story: "His father died in the war and his mother is in the refugee camp."
}, {
  id: 49, name: "Jay Bo Wo", age: 12, grade: 6, status: "unsponsored",
  story: "His father also died in the war, and his mother is in the refugee camp."
}, {
  id: 50, name: "Jay Nyi Dwet", age: 11, grade: 6, status: "unsponsored",
  story: "She has parents but their village was damaged in the war. She stayed at the refugee camp before coming to the home."
}, {
  id: 51, name: "Rebecca", age: 10, grade: 5, status: "unsponsored",
  story: "Her father died in the war and her mother is in the refugee camp, and now she is at the home."
}, {
  id: 52, name: "Lay Mel Sar", age: 5, grade: "?", status: "unsponsored",
  story: "His father died from drugs... he was depressed because of the war. Their village was bombed... now the family is staying at the refugee camp."
}, {
  id: 53, name: "Jay Zar PhiHe", age: 11, grade: 5, status: "unsponsored",
  story: "He has parents, Their village was bombed and they lost everything."
}, {
  id: 54, name: "Ngwa San Aung", age: 8, grade: 3, status: "unsponsored",
  story: "The family is in the refugee camp... the war made them run, leaving everything behind."
}, {
  id: 55, name: "Jar Toe", age: 12, grade: 5, status: "unsponsored",
  story: "He lost his father in the war and his mother is in the refugee camp."
}, {
  id: 56, name: "Khee Wo Sar", age: 13, grade: 6, status: "unsponsored",
  story: "His father got seriously injured in the war and is now staying at the refugee camp... His mother was looking after him. He is at the home now."
}, {
  id: 57, name: "Dee Dee", age: 12, grade: 4, status: "unsponsored",
  story: "He has parents, but the war made them run for their lives, and they are staying at the refugee camp now. The boy is here at the home."
}, {
  id: 58, name: "Yae Le", age: 12, grade: 5, status: "unsponsored",
  story: "His family is homeless because of the war, they're staying at the refugee camp."
}, {
  id: 59, name: "Jor Sa Phu", age: 7, grade: 3, status: "unsponsored",
  story: "He has parents, but they had to run from the war. The family was separated by the war... and the boy came to the home."
}, {
  id: 60, name: "Sa Fu Dwet", age: 11, grade: 5, status: "unsponsored",
  story: "He has parents, but their village was bombed and burned in the war."
}, {
  id: 61, name: "Ngwa Ti Ni", age: 12, grade: 7, status: "unsponsored",
  story: "His family ran to the refugee camp because their village was bombed and burned."
}, {
  id: 62, name: "Nyi Sa Het", age: 11, grade: 5, status: "unsponsored",
  story: "She had parents, but the war made them run to the refugee camp. And two of her sisters died. Now she is here at the home."
}, {
  id: 63, name: "Dar Mi Sar", age: 1, grade: 6, status: "unsponsored",
  story: "She has parents. Their village was burned, and they ran for their lives... one of her brothers died."
}, {
  id: 64, name: "Ngwa Mar Nu", age: 13, grade: 7, status: "unsponsored",
  story: "Her family ran to the refugee camp due to the fighting... and she came to the home."
}, {
  id: 65, name: "Jue Li Nar", age: 13, grade: 7, status: "unsponsored",
  story: "Her family ran to the refugee camp when their village was bombed and many of the villagers died. She also lost two of her brothers."
}, {
  id: 66, name: "Bor Sar Say", age: 11, grade: 5, status: "unsponsored",
  story: "One of her sisters was lost in the war, and now the family is in the refugee camp."
}, {
  id: 67, name: "Wo Mar Sar", age: 12, grade: 6, status: "unsponsored",
  story: "She has parents but her father is a drug addict, and doesn't take care of the family. Her mother is in the refugee camp."
}, {
  id: 68, name: "Bya Sar Mee", age: 13, grade: 8, status: "unsponsored",
  story: "Her family ran to the refugee camp due to the war. Their village was bombed and many of the villagers died."
}, {
  id: 69, name: "Char Mar Say", age: 11, grade: 7, status: "unsponsored",
  story: " Her father's legs were damaged in the war, and now the family is in the refugee camp."
}, {
  id: 70, name: "Mee Ko Naing", age: 10, grade: 5, status: "unsponsored",
  story: "His father and mother died in the war and he was living with his grandmother... now he came here to the children's home."
}, {
  id: 71, name: "C Mi Na", age: 16, grade: 10, status: "unsponsored",
  story: "These two sisters hope their family is safe in the refugee camp, but they don't really know. They were seperated during the war, and the camps aren't safe either.",
  siblings: "Gyi Li Ya"
}, {
  id: 72, name: "Gyi Li Ya", age: 12, grade: 7, status: "unsponsored",
  story: "These two sisters hope their family is safe in the refugee camp, but they don't really know. They were seperated during the war, and the camps aren't safe either.",
  siblings: "C Mi Na"
}];
},{}],"../../../.nvm/versions/node/v10.7.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52506' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.nvm/versions/node/v10.7.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts.js"], null)
//# sourceMappingURL=/scripts.1c1ac001.map