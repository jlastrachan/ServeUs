(function(){var k=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return n.apply(null,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ea=Date.now||function(){return+new Date};var p=(new Date).getTime();var t=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},fa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ga=function(a,b){if(!a)return b;var c=a.match(fa);return c?c[0]:b};var ha=t("0.15"),ia=t("0.01"),ja=t("0.001"),ka=t("0.0"),la=t("0.001"),ma=t("0.2"),na=t("0.001");var oa=/^true$/.test("false")?!0:!1,pa=/^true$/.test("true")?!0:!1;var qa=function(){return ga("","pagead2.googlesyndication.com")};var ra=/&/g,sa=/</g,ta=/>/g,ua=/"/g,wa=/'/g,u={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},v={"'":"\\'"};var x=document,y=window,B,xa=null,D=x.getElementsByTagName("script");D&&D.length&&(xa=D[D.length-1]);B=xa;var E=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},F=function(a){return!!a&&"function"==typeof a&&!!a.call},ya=function(a,b){if(!(2>arguments.length))for(var c=1,e=arguments.length;c<e;++c)a.push(arguments[c])};function za(a,b){G(a,"load",b)}
var G=function(a,b,c,e){return a.addEventListener?(a.addEventListener(b,c,e||!1),!0):a.attachEvent?(a.attachEvent("on"+b,c),!0):!1},H=function(a,b,c,e){c=n(e,c);return G(a,b,c,void 0)?c:null},I=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},Aa=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,za(a,function(){a.google_onload_fired=!0}))},J=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var e=new Uint16Array(1);
window.crypto.getRandomValues(e);c=e[0]/65536}catch(d){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},K=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},L=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,e=0;e<b;e++)c^=(c<<5)+(c>>2)+a.charCodeAt(e)&4294967295;return 0<c?c:4294967296+c},Ba=function(a){for(var b=[],c=0;a&&25>c;++c){var e=9!=a.nodeType&&a.id,e=e?"/"+e:"",d;o:{var f=a.parentElement;d=a.nodeName.toLowerCase();if(f)for(var f=f.childNodes,g=0,
m=0;m<f.length;++m){var h=f[m];if(h.nodeName&&h.nodeName.toLowerCase()==d){if(a==h){d="."+g;break o}++g}}d=""}b.push((a.nodeName&&a.nodeName.toLowerCase())+e+d);a=a.parentElement}return b.join()},Ca=function(a){var b=[];if(a)try{for(var c=a.parent,e=0;c&&c!=a&&25>e;++e){for(var d=c.frames,f=0;f<d.length;++f)if(a==d[f]){b.push(f);break}a=c;c=a.parent}}catch(g){}return b.join()},Da=function(a,b,c,e){c=[c.google_ad_slot,c.google_ad_format,c.google_ad_type,c.google_ad_width,c.google_ad_height];if(e){a=
[];for(e=0;b&&25>e;b=b.parentNode,++e)a.push(9!=b.nodeType&&b.id||"");(b=a.join())&&c.push(b)}else c.push(Ba(b)),c.push(Ca(a));return L(c.join(":")).toString()},M=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return!1}};var Ea=!!window.google_async_iframe_id,Fa=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,Ga=/Android/;var N=null,Ha=function(){if(!N){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,M(a))b=a;else break;N=b}return N};var O=function(a,b,c){c||(c=pa?"https":"http");return[c,"://",a,b].join("")};var Ia=function(){},P=function(a,b,c){switch(typeof b){case "string":Ja(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var e=b.length;c.push("[");for(var d="",f=0;f<e;f++)c.push(d),P(a,b[f],c),d=",";c.push("]");break}c.push("{");e="";for(d in b)b.hasOwnProperty(d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ja(d,c),c.push(":"),P(a,f,c),e=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Q={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ka=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ja=function(a,b){b.push('"');b.push(a.replace(Ka,function(a){if(a in Q)return Q[a];var b=a.charCodeAt(0),d="\\u";16>b?d+="000":256>b?d+="00":4096>b&&(d+="0");return Q[a]=d+b.toString(16)}));b.push('"')};var R="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_override google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_unit_key_3 google_ad_unit_key_css google_ad_unit_key_dom google_ad_unit_key_var google_ad_unit_key_win google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_bid google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_previous_watch google_previous_searches google_referrer_url google_region google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_video_url_to_fetch google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
La={google_analytics_domain_name:!0,google_analytics_uacct:!0},Ma=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];E(a,function(a,e){if(null!=a){var d;try{var f=[];P(new Ia,a,f);d=f.join("")}catch(g){}d&&ya(b,e,"=",d,";")}});return b.join("")};var S=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:n(this.o,this)});this.m=a.google_iframe_oncopy},Na;var T="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[&<>"']/.test(T)&&(-1!=T.indexOf("&")&&(T=T.replace(ra,"&amp;")),-1!=T.indexOf("<")&&(T=T.replace(sa,"&lt;")),-1!=T.indexOf(">")&&(T=T.replace(ta,"&gt;")),-1!=T.indexOf('"')&&(T=T.replace(ua,"&quot;")),-1!=T.indexOf("'")&&(T=T.replace(wa,"&#39;")));Na=T;S.prototype.set=function(a,b){this.m.handlers[a]=b;this.b.addEventListener&&this.b.addEventListener("load",n(this.n,this,a),!1)};
S.prototype.n=function(a){a=this.b.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};S.prototype.o=function(a,b){var c=Oa("rx",a),e;o:{if(a&&(e=a.match("dt=([^&]+)"))&&2==e.length){e=e[1];break o}e=""}e=(new Date).getTime()-e;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>e?e+"":"M"));this.set(b,c);return c};var Oa=function(a,b){var c=RegExp("\\b"+a+"=(\\d+)"),e=c.exec(b);e&&(b=b.replace(c,a+"="+(+e[1]+1||1)));return b};var U;o:{var Pa=k.navigator;if(Pa){var Qa=Pa.userAgent;if(Qa){U=Qa;break o}}U=""};var Ra=-1!=U.indexOf("Opera")||-1!=U.indexOf("OPR"),Sa=-1!=U.indexOf("Trident")||-1!=U.indexOf("MSIE"),Ta=-1!=U.indexOf("Gecko")&&-1==U.toLowerCase().indexOf("webkit")&&!(-1!=U.indexOf("Trident")||-1!=U.indexOf("MSIE")),Ua=-1!=U.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ra&&k.opera)return a=k.opera.version,"function"==aa(a)?a():a;Ta?b=/rv\:([^\);]+)(\)|;)/:Sa?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Ua&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(U))?a[1]:"");return Sa&&(b=(b=k.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var V=!0,Va={},Xa=function(a,b,c,e){var d,f=V;try{d=c()}catch(g){try{var m,h=g.toString();g.name&&-1==h.indexOf(g.name)&&(h+=": "+g.name);g.message&&-1==h.indexOf(g.message)&&(h+=": "+g.message);if(g.stack){var l=g.stack;c=h;try{-1==l.indexOf(c)&&(l=c+"\n"+l);for(var q;l!=q;)q=l,l=l.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");h=l.replace(/\n */g,"\n")}catch(Z){h=c}}m=h;h="";g.fileName&&(h=g.fileName);l=-1;g.lineNumber&&(l=g.lineNumber);var A;o:{try{A=e?e():"";break o}catch(va){}A=""}f=
b(a,m,h,l,A)}catch(z){Wa({context:"protectAndRun",msg:z.toString()+"\n"+(z.stack||"")})}if(!f)throw g;}return d},Za=function(a,b,c,e,d,f){a={context:a,msg:b.substring(0,512),eid:d&&d.substring(0,40),file:c,line:e.toString(),url:x.URL.substring(0,512),ref:x.referrer.substring(0,512)};Ya(a);Wa(a,f);return V},Wa=function(a,b){if(Math.random()<(b||0.01)){var c="/pagead/gen_204?id=jserror"+$a(a),c="http"+("https:"==y.location.protocol?"s":"")+"://pagead2.googlesyndication.com"+c,c=c.substring(0,2E3);y.google_image_requests||
(y.google_image_requests=[]);var e=y.document.createElement("img");e.src=c;y.google_image_requests.push(e)}},Ya=function(a){var b=a||{};E(Va,function(a,e){b[e]=y[a]})},W=function(a,b){return da(Xa,a,Za,b,void 0)},$a=function(a){var b="";E(a,function(a,e){if(0===a||a)b+="&"+e+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};var X,Y=function(a){this.c=[];this.b=a||window;this.a=0;this.d=null;this.e=0},ab=function(a,b){this.l=a;this.win=b};Y.prototype.q=function(a,b){0!=this.a||0!=this.c.length||b&&b!=window?this.h(a,b):(this.a=2,this.g(new ab(a,window)))};Y.prototype.h=function(a,b){this.c.push(new ab(a,b||this.b));bb(this)};Y.prototype.r=function(a){this.a=1;if(a){var b=W("sjr::timeout",n(this.f,this,!0));this.d=this.b.setTimeout(b,a)}};
Y.prototype.f=function(a){a&&++this.e;1==this.a&&(null!=this.d&&(this.b.clearTimeout(this.d),this.d=null),this.a=0);bb(this)};Y.prototype.s=function(){return!(!window||!Array)};Y.prototype.t=function(){return this.e};Y.prototype.nq=Y.prototype.q;Y.prototype.nqa=Y.prototype.h;Y.prototype.al=Y.prototype.r;Y.prototype.rl=Y.prototype.f;Y.prototype.sz=Y.prototype.s;Y.prototype.tc=Y.prototype.t;var bb=function(a){var b=W("sjr::tryrun",n(a.p,a));a.b.setTimeout(b,0)};
Y.prototype.p=function(){if(0==this.a&&this.c.length){var a=this.c.shift();this.a=2;var b=W("sjr::run",n(this.g,this,a));a.win.setTimeout(b,0);bb(this)}};Y.prototype.g=function(a){this.a=0;a.l()};
var cb=function(a){try{return a.sz()}catch(b){return!1}},db=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&cb(a)&&F(a.nq)&&F(a.nqa)&&F(a.al)&&F(a.rl)},eb=function(){if(X&&cb(X))return X;var a=Ha(),b=a.google_jobrunner;return db(b)?X=b:a.google_jobrunner=X=new Y(a)},fb=function(a,b){eb().nq(a,b)},gb=function(a,b){eb().nqa(a,b)};var hb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0},ib=function(){var a="script";return["<",a,' src="',O(qa(),"/pagead/js/r20140401/r20140311/show_ads_impl.js",""),'"></',a,">"].join("")},jb=function(a,b,c,e){return function(){var d=!1;e&&eb().al(3E4);var f=a.document.getElementById(b);f&&!M(f.contentWindow)&&3==a.google_top_js_status&&
(a.google_top_js_status=6);try{if(M(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,m=g.document;m.body&&m.body.firstChild||(m.open(),g.google_async_iframe_close=!0,m.write(c))}else{var h=a.document.getElementById(b).contentWindow,l;f=c;f=String(f);if(f.quote)l=f.quote();else{g=['"'];for(m=0;m<f.length;m++){var q=f.charAt(m),Z=q.charCodeAt(0),A=g,va=m+1,z;if(!(z=u[q])){var C;if(31<Z&&127>Z)C=q;else{var s=q;if(s in v)C=v[s];else if(s in u)C=v[s]=u[s];else{var r=
s,w=s.charCodeAt(0);if(31<w&&127>w)r=s;else{if(256>w){if(r="\\x",16>w||256<w)r+="0"}else r="\\u",4096>w&&(r+="0");r+=w.toString(16).toUpperCase()}C=v[s]=r}}z=C}A[va]=z}g.push('"');l=g.join("")}h.location.replace("javascript:"+l)}d=!0}catch(tb){h=Ha().google_jobrunner,db(h)&&h.rl()}d&&(d=Oa("google_async_rrc",c),(new S(a)).set(b,jb(a,b,d,!1)))}},kb=function(a){var b=["<iframe"];E(a,function(a,e){null!=a&&b.push(" "+e+'="'+a+'"')});b.push("></iframe>");return b.join("")},lb=function(a,b,c,e){e=e?'"':
"";var d=e+"0"+e;a.width=e+b+e;a.height=e+c+e;a.frameborder=d;a.marginwidth=d;a.marginheight=d;a.vspace=d;a.hspace=d;a.allowtransparency=e+"true"+e;a.scrolling=e+"no"+e},mb=function(a,b,c){var e=b.google_ad_output,d=b.google_ad_format;d||"html"!=e&&null!=e||(d=b.google_ad_width+"x"+b.google_ad_height,c&&(d+="_as"));c=!b.google_ad_slot||b.google_override_format||!hb[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d=d&&c?d.toLowerCase():"";b.google_ad_format=d;b.google_ad_unit_key=
Da(null,B.parentElement,b,!0);d=a.google_adk2_experiment=a.google_adk2_experiment||J(["C","E"],la)||"N";"E"==d?(b.google_ad_unit_key_2=Da(a,B,b),d=[b.google_ad_slot,b.google_ad_type],b.google_ad_unit_key_var=L(d.join()),a=Ca(a),d.push(a),b.google_ad_unit_key_win=L(a),a=Ba(B),d.push(a),b.google_ad_unit_key_dom=L(a),b.google_ad_unit_key_3=L(d.join(":"))):"C"==d&&(b.google_ad_unit_key_2="ctrl")},nb=Math.floor(1E6*Math.random()),ob=function(a){for(var b=a.data.split("\n"),c={},e=0;e<b.length;e++){var d=
b[e].indexOf("=");-1!=d&&(c[b[e].substr(0,d)]=b[e].substr(d+1))}b=c[3];if(c[1]==nb&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=c,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}};var pb=function(a,b,c){this.x=a;this.y=b;this.z=c},qb=function(a,b,c){this.beta=a;this.gamma=b;this.alpha=c},rb=function(a,b){this.deviceAccelerationWithGravity=this.deviceAccelerationWithoutGravity=null;this.deviceMotionEventCallbacks=[];this.deviceOrientation=null;this.deviceOrientationEventCallbacks=[];this.isDeviceOrientationEventListenerRegistered=this.isDeviceMotionEventListenerRegistered=this.didDeviceOrientationCallbacksTimeoutExpire=this.didDeviceMotionCallbacksTimeoutExpire=!1;this.registeredMozOrientationEventListener=
this.registeredDeviceOrientationEventListener=this.registeredDeviceMotionEventListener=null;this.sensorsExperiment=b;this.stopTimeStamp=this.startTimeStamp=null;this.win=a},$=function(a){this.a=a;this.a.win.DeviceOrientationEvent?(this.a.registeredDeviceOrientationEventListener=H(this.a.win,"deviceorientation",this,this.j),this.a.isDeviceOrientationEventListenerRegistered=!0):this.a.win.OrientationEvent&&(this.a.registeredMozOrientationEventListener=H(this.a.win,"MozOrientation",this,this.k),this.a.isDeviceOrientationEventListenerRegistered=
!0);this.a.win.DeviceMotionEvent&&(this.a.registeredDeviceMotionEventListener=H(this.a.win,"devicemotion",this,this.i),this.a.isDeviceMotionEventListenerRegistered=!0)};
$.prototype.i=function(a){a.acceleration&&(this.a.deviceAccelerationWithoutGravity=new pb(a.acceleration.x,a.acceleration.y,a.acceleration.z));a.accelerationIncludingGravity&&(this.a.deviceAccelerationWithGravity=new pb(a.accelerationIncludingGravity.x,a.accelerationIncludingGravity.y,a.accelerationIncludingGravity.z));sb(this.a.deviceMotionEventCallbacks);I(this.a.win,"devicemotion",this.a.registeredDeviceMotionEventListener)};
$.prototype.j=function(a){this.a.deviceOrientation=new qb(a.beta,a.gamma,a.alpha);sb(this.a.deviceOrientationEventCallbacks);I(this.a.win,"deviceorientation",this.a.registeredDeviceOrientationEventListener)};$.prototype.k=function(a){this.a.deviceOrientation=new qb(-90*a.y,90*a.x,null);sb(this.a.deviceOrientationEventCallbacks);I(this.a.win,"MozOrientation",this.a.registeredMozOrientationEventListener)};var sb=function(a){for(var b=0;b<a.length;++b)a[b]();a.length=0};V=!oa;Va={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",zrtm:"google_ad_handling_mode",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment"};Xa("sa::main",Za,function(){var a=window;Aa(a);if(!window.google_top_experiment&&!window.google_top_js_status){var b=window;if(2!==(b.top==b?0:M(b.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var c;try{c=y.top.frames.google_top_static_frame?!0:!1}catch(e){c=!1}if(c){if(window.google_top_experiment=J(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],ha),"jp_c"!==window.google_top_experiment){G(window,"message",ob);window.google_top_js_status=3;b={0:"google_loc_request",1:nb};c=[];for(var d in b)c.push(d+
"="+b[d]);top.postMessage(c.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}var f;f=f||window;d=!1;f&&f.navigator&&f.navigator.userAgent&&(f=f.navigator.userAgent,d=0!=f.indexOf("Opera")&&-1!=f.indexOf("WebKit")&&-1!=f.indexOf("Mobile"));!d||/Android/.test(a.navigator.userAgent)||0!=K(a)||a.google_sensors||(f=null,a.google_top_experiment&&"jp_c"!=a.google_top_experiment||(f=J(["ds_c","ds_zl","ds_wfea"],ka)),f&&(a.google_sensors=new rb(a,f),"ds_c"!=f&&new $(a.google_sensors)));
f=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||f&&"html"!=f||(window.google_always_use_delayed_impressions_experiment=J(["C","E"],ja));if(Ea?1==K(a):!K(a))o:if(f=a.google_ad_client,d=navigator,a&&f&&d){try{var g=L([f,d.plugins&&d.plugins.length,a.screen&&a.screen.height,(new Date).getTimezoneOffset(),d.userAgent].join())}catch(m){break o}g/=4294967296;g<na&&(d=["1h","12h","24h"],d=d[Math.floor(g/na*d.length)],a.google_per_pub_requested=ea(),a.google_per_pub_branch=
d,b=a.document,g=b.createElement("script"),g.src=O(qa(),"/pagead/js/per_pub_"+d+".js?client="+f),f=b.getElementsByTagName("script")[0],f.parentNode.insertBefore(g,f))}(g=!1===window.google_enable_async)||(g=navigator.userAgent,Fa.test(g)?g=!1:(void 0!==window.google_async_for_oa_experiment||!Ga.test(navigator.userAgent)||Fa.test(navigator.userAgent)||(window.google_async_for_oa_experiment=J(["E","C"],ia)),g=Ga.test(g)?"E"===window.google_async_for_oa_experiment:!0),g=!g||window.google_container_id||
window.google_ad_output&&"html"!=window.google_ad_output);if(g)a.google_loader_used="sb",a.google_start_time=p,mb(a,a),document.write(ib());else{a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;g={};f=0;for(d=R.length;f<d;f++)b=R[f],null!=a[b]&&(g[b]=a[b]);g.google_loader_used="sa";f=0;for(d=R.length;f<d;f++)b=R[f],La[b]||(a[b]=null);f={};lb(f,g.google_ad_width,g.google_ad_height,!0);f.onload='"'+Na+'"';var h;d=a.document;b=f.id;for(c=0;!b||d.getElementById(b);)b="aswift_"+c++;f.id=b;
f.name=b;c=g.google_ad_width;var l=g.google_ad_height,b=["<iframe"];for(h in f)f.hasOwnProperty(h)&&ya(b,h+"="+f[h]);b.push('style="left:0;position:absolute;top:0;"');b.push("></iframe>");h="border:none;height:"+l+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+c+"px;background-color:transparent";d.write(['<ins style="display:inline-table;',h,'"><ins id="',f.id+"_anchor",'" style="display:block;',h,'">',b.join(" "),"</ins></ins>"].join(""));h=f.id;f=g.google_override_format||!hb[g.google_ad_width+
"x"+g.google_ad_height]&&"aa"==g.google_loader_used?J(["c","e"],ma):null;mb(a,g,"e"==f);g=Ma(g);1==a.google_unique_id?(d={},lb(d,0,0,!1),d.style="display:none",d.id="google_esf",d.name="google_esf",b=O(ga("","googleads.g.doubleclick.net"),"/pagead/html/r20140401/r20140311/zrt_lookup.html"),d.src=b,d=kb(d)):d=null;b=(new Date).getTime();c=a.google_top_experiment;var l=a.google_async_for_oa_experiment,
q=a.google_always_use_delayed_impressions_experiment,g=["<!doctype html><html><body>",d,"<script>",g,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',h,'";google_start_time=',p,";",c?'google_top_experiment="'+c+'";':"",l?'google_async_for_oa_experiment="'+l+'";':"",q?'google_always_use_delayed_impressions_experiment="'+q+'";':"",f?'google_append_as_for_format_override="'+f+'";':"","google_bpp=",b>p?b-p:1,";google_async_rrc=0;\x3c/script>",ib(),"</body></html>"].join("");
(a.document.getElementById(h)?fb:gb)(jb(a,h,g,!0))}});})();
