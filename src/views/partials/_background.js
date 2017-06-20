var backgroundElement = document.getElementById('js-bg');
var sizes = {
  0: [1024, 1920],
  //1: [1024, 1920, 3840, 4860]
};
var current = 0;
var selected = Math.floor(Math.random() * Object.keys(sizes).length);
sizes = sizes[selected];

function getDimensions () {
  return {
    w: typeof window.innerWidth === 'number' ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth,
    h: typeof window.innerHeight === 'number' ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight
  };
}

function handleViewportResize () {
  var d = getDimensions();

  if (d.w > current) {
    for (var i = 0; i < sizes.length; i++) {
      if (sizes[i] >= d.w) {
        current = sizes[i];
        break;
      }
    }

    var url = 'assets/img/background/' + selected + '_' + current + '.jpg';
    backgroundElement.src = url;
  }

  if ((d.w / d.h) < (backgroundElement.width / backgroundElement.height)) {
    backgroundElement.style.width = 'auto';
    backgroundElement.style.height = '100%';
  } else {
    backgroundElement.style.width = '100%';
    backgroundElement.style.height = 'auto';
  }
}

backgroundElement.onload = function () {
  var d = getDimensions();
  if ((d.w / d.h) < (backgroundElement.width / backgroundElement.height)) {
    backgroundElement.style.width = 'auto';
    backgroundElement.style.height = '100%';
  } else {
    backgroundElement.style.width = '100%';
    backgroundElement.style.height = 'auto';
  }
  backgroundElement.className = 'loaded';
}

if (window.addEventListener) window.addEventListener('resize', handleViewportResize, false);
else if (window.attachEvent) window.attachEvent('onresize', handleViewportResize);
else window.onresize = handleViewportResize;

handleViewportResize();
