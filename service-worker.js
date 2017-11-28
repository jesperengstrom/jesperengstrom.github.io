"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","7485cc7b185191bd9fc90640eac40c5c"],["/static/css/main.4790804e.css","c3cf87537ec61ffbb8a0457b6f264c69"],["/static/js/main.b2feba50.js","e723b9826fdda0da666f077750d06559"],["/static/media/Neuzeit S LT Book.3f81fb5f.ttf","3f81fb5f3e17701d3bed4ec9855fa638"],["/static/media/asap-dev.10c77c6e.jpg","10c77c6ecdf216c0a84eae5feb630617"],["/static/media/design-examples.cfa310f5.jpg","cfa310f5f00dfc0060f9a47247dd9df2"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/font-mfizz.19778cf9.ttf","19778cf9c33d0c98076aeffd7dd100aa"],["/static/media/font-mfizz.4d03e427.eot","4d03e427f13a893d5e9ce14ff5ed8287"],["/static/media/font-mfizz.5cd77363.svg","5cd7736320021318ac88ef393240125a"],["/static/media/font-mfizz.64c7cf6c.woff","64c7cf6cb98b1297cd522df93db3d0d2"],["/static/media/fontello.26fee2b2.woff2","26fee2b20faea72f0427f290de8b69a5"],["/static/media/fontello.42cfc858.ttf","42cfc8589ecac8b572fe08b91fcd28aa"],["/static/media/fontello.b038b3b4.woff","b038b3b492130964403335294b1bfc64"],["/static/media/fontello.b73710d3.eot","b73710d3cf91da77d526f3d6dc0c4d82"],["/static/media/fontello.bdb020a7.svg","bdb020a73285f6b792678f2948d95ae6"],["/static/media/front-end-blog.2a22847e.jpg","2a22847e098df454214c81875ffc598f"],["/static/media/iconfont.524781df.woff","524781dfef675a4af82dd14fd6f9e12f"],["/static/media/iconfont.a40b6b28.ttf","a40b6b285526376dbeb09b6cb766b932"],["/static/media/iconfont.da59b3e6.eot","da59b3e69b878c9490fb7d7bc65761b0"],["/static/media/iconfont.f876b6a3.svg","f876b6a3ea1f4a97d8e118654b4a8984"],["/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/jesper_grey.c64c9945.jpg","c64c9945c8c79e240f5ddac519cff7f3"],["/static/media/jmdb.c6d698db.jpg","c6d698db4721601fac133c0a4275f25a"],["/static/media/luffarschapp.cf408e10.jpg","cf408e10b4a136d09584be15dbdffe8f"],["/static/media/palmekartan.db297138.jpg","db297138fd118d27713453f0583d02cb"],["/static/media/sanka-skepp.c910a4b4.jpg","c910a4b45ad9ccc5f2b04c25e014e51d"],["/static/media/talartoppen.42e87961.jpg","42e87961d8841e80ab2581f6ad740eb1"],["/static/media/todo.44d83bab.jpg","44d83bab067c0e32c1b3b8d96a35a9ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});