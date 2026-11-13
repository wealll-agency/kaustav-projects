/* --- Source: https://www.vlccinstitute.com/promotion-page/js/scroll-animate/jquery.scrolly.min.js --- */
/* jquery.scrolly v1.0.0-dev | (c) n33 | n33.co @n33co | MIT */
(function(e){function u(s,o){var u,a,f;if((u=e(s))[t]==0)return n;a=u[i]()[r];switch(o.anchor){case"middle":f=a-(e(window).height()-u.outerHeight())/2;break;default:case r:f=Math.max(a,0)}return typeof o[i]=="function"?f-=o[i]():f-=o[i],f}var t="length",n=null,r="top",i="offset",s="click.scrolly",o=e(window);e.fn.scrolly=function(i){var o,a,f,l,c=e(this);if(this[t]==0)return c;if(this[t]>1){for(o=0;o<this[t];o++)e(this[o]).scrolly(i);return c}l=n,f=c.attr("href");if(f.charAt(0)!="#"||f[t]<2)return c;a=jQuery.extend({anchor:r,easing:"swing",offset:0,parent:e("body,html"),pollOnce:!1,speed:1e3},i),a.pollOnce&&(l=u(f,a)),c.off(s).on(s,function(e){var t=l!==n?l:u(f,a);t!==n&&(e.preventDefault(),a.parent.stop().animate({scrollTop:t},a.speed,a.easing))})}})(jQuery);

/* --- Source: https://www.vlccinstitute.com/promotion-page/new-landing-page/js/owl.carousel.min.js --- */
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

/* --- Source: js/custom3.js --- */
function Get_OTP(){
        
	document.getElementsByName("type_of_action")[0].value = "otp";
}
function sendOTP(){
         
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = email.value.trim();
	var charreg = /^[a-zA-Z\_ ]+$/g;
	var charregl = /^[a-zA-Z\_]+$/g;

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	}  
	   
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	}
	/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	} */
	else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray()
                
		$.ajax({
			type: "POST",
			url: "./api/save_all_data3.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
} 
		
function formCheck1() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}
		else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
				$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray() 
		$.ajax({
			type: "POST",
			url: "./api/save_all_data3.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
						document.myform.submit();
					}  
			}
		});
		}
}



		
function formCheck() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}
		/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		} */
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			var mobile1 = $("#phone").val();
			var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "./api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				});
				
		}
}


function formCheckNew() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}
		/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		} */
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			document.myform.submit();
			
			var mobile1 = $("#phone").val();
			var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "./api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						
						{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); 
				
		}
}




function formCheck2() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		
		
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		
		
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		
		/*else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}*/
		/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		} */
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			
			var mobile1 = $("#phone").val();
			var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "./api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						
						{
							document.myform.submit();
						
						}
						else{
								alert('Your OTP did not match. please retry again.');
						}
					}
				}); 
				
		}
}


function sendOTP3(){
         
	var fname = document.getElementById('name1');
	var qualification = document.getElementById('qualification1');
	var mobile = document.getElementById('phone1');
	var email = document.getElementById('email1');
	var gender = document.getElementById('gender1');
	var course = document.getElementById('course1');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location1');

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = email.value.trim();
	var charreg = /^[a-zA-Z\_ ]+$/g;
	var charregl = /^[a-zA-Z\_]+$/g;

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	}  
	   
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	/* else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	} */
	/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	} */
	else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion1").serializeArray()
                
		$.ajax({
			type: "POST",
			url: "./api/save_all_data3.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
} 

function formCheck3() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name1');
	var qualification = document.getElementById('qualification1');
	var mobile = document.getElementById('phone1');
	var email = document.getElementById('email1');
	var gender = document.getElementById('gender1');
	var course = document.getElementById('course1');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location1');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		
		
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		
		
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		
		/*else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}*/
		/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		} */
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			
			var mobile1 = $("#phone1").val();
			var otp = $("#otp1").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP3();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "./api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						
						{
							document.myform1.submit();
						
						}
						else{
								alert('Your OTP did not match. please retry again.');
						}
					}
				}); 
				
		}
}







function formCheck4() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
	
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		
		
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		
		
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		
		/*else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}*/
		/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		} */
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp1").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP3();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			$("#loader-btn").css("display", "");
				/* $.ajax({
					type: "POST",
					url: "./api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						
						{ */
							document.myform.submit();
						
/* 						}
						else{
								alert('Your OTP did not match. please retry again.');
						}
					}
				});  */
				
		}
}



function formCheck5() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name1');
	var qualification = document.getElementById('qualification1');
	var mobile = document.getElementById('phone1');
	var email = document.getElementById('email1');
	var gender = document.getElementById('gender1');
	var course = document.getElementById('course1');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location1');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		
		
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		
		
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		
		/*else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}*/
		/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		} */
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			
			var mobile1 = $("#phone1").val();
			//var otp = $("#otp1").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP3();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			$("#loader-btn").css("display", "");
				/* $.ajax({
					type: "POST",
					url: "./api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						
						{ */
							document.myform1.submit();
						
/* 						}
						else{
								alert('Your OTP did not match. please retry again.');
						}
					}
				});  */
				
		}
}



function formCheck6() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name1');
	var qualification = document.getElementById('qualification1');
	var mobile = document.getElementById('phone1');
	var email = document.getElementById('email1');
	var gender = document.getElementById('gender1');
	var course = document.getElementById('course1');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location1');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		
		
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		
		
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		
		/*else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}*/
		/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		} */
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			
			var mobile1 = $("#phone1").val();
			//var otp = $("#otp1").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP3();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			$("#loader-btn").css("display", "");
				/* $.ajax({
					type: "POST",
					url: "./api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						
						{ */
							document.myform1.submit();
						
/* 						}
						else{
								alert('Your OTP did not match. please retry again.');
						}
					}
				});  */
				
		}
}




function formCheck45() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		 else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		 else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} 
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}






function formCheckNewSide() {
	//alert('Yes');
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name_Q');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone_Q');
	var email = document.getElementById('email_Q');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location_Q');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		/* else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		} */
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		} */
		
		else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}else{
		
		
			document.sideform.submit();
			
			/* var mobile1 = $("#phone").val();
			var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "./api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						
						{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */ 
				
		}
}
		
		
		


function number_validation(txtbox1)
		{     
			var str=txtbox1.value;
			var str1="0123456789.";
			var i=0;
			for(i=0;i<str.length;i++)
			{          
			  if(str1.indexOf(str.substring(i,i+1))<0 || str1.indexOf(str.substring(i,i+1))>str1.length || str.indexOf(".")!=str.lastIndexOf("."))
			  {              
				 txtbox1.value=str.substring(0,str.length-1);
				 alert("Invalid Number...");
				 txtbox1.value="";
				 txtbox1.focus();
				 break; 
			  } 
			}
			
			
			//txtbox1.value=(Math.round((txtbox1)*100)/100).toFixed(2);
		}
		
		function count_wpclick(val,val1){
			$("#loader-btn").css("display", "");
			$.ajax({
					type: "POST",
					url: "./api/save_ajax.php",
					data: {page_name:val,name:val1},
					success: function(msg){
						var msg = $.parseJSON(msg);
								 $("#loader-btn").css("display", "none");
							
					}
				});
		}
		

/* --- Inline JS --- */

    (function() {
      var f = function() {
        EF.init({
          eventType: "transaction",
          transactionProperties: "ev_Ins_PV=1&ev_transid=",
          segment: "",
          searchSegment: "",
          sku: "",
          userid: "7801",
          pixelHost: "pixel.everesttech.net"

            ,
          allow3rdPartyPixels: 1
        });
        EF.main();
      };
      window.EF = window.EF || {};
      if (window.EF.main) {
        f();
        return;
      }
      window.EF.onloadCallbacks = window.EF.onloadCallbacks || [];
      window.EF.onloadCallbacks[window.EF.onloadCallbacks.length] = f;
      if (!window.EF.jsTagAdded) {
        var efjs = document.createElement('script');
        efjs.type = 'text/javascript';
        efjs.async = true;
        efjs.src = 'https://www.everestjs.net/static/st.v3.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(efjs, s);
        window.EF.jsTagAdded = 1;
      }
    })();
  

/* --- Inline JS --- */

    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TCQ6MCM');
  

/* --- Inline JS --- */

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'AW-843512713');
  

/* --- Inline JS --- */

function setCourseValue() {
    var courseValue = document.getElementById("selected_course").value;
	console.log(courseValue,'crsvalue');
    document.getElementById("course").value = courseValue;
}


/* --- Inline JS --- */

    $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        margin: 20,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      })

    });
  

/* --- Inline JS --- */

    /* <![CDATA[ */
    var google_conversion_id = 843512713;
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
    /* ]]> */
  

/* --- Source: https://www.vlccinstitute.com/promotion-page/makeupcourses/js/script.js --- */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
$(document).ready(function(){
  // $(document).on("scroll", onScroll);
  //smoothscroll
  $('.navigation a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $(this).parents('.navigation').removeClass('show');
      $('.navigation a').each(function () {
          $(this).removeClass('current');
      })
      $(this).addClass('current');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top-50
      }, 500);
  });
  $('.mobile-icon').click(function(){
    $(this).prev().addClass('show');
  });
  $('.navigation .close').click(function(){
    $(this).parent().removeClass('show');
  });
  $('.enquire-now-btn, .form-btn-cross').click(function(){
    $('.enquire-form').toggleClass('show');
    $('.layer-mask').toggleClass('hide');
  });
  $('.banner-slider').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true
  });
  $('.level-courses-slider ul').owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      
      479: {
        items: 2
      },
  
      1024: {
        items: 3
      }
    }
  });
  $('.faq-list .ques').click(function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    }
    else {
      $('.faq-list .answ').slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }
  });
  $('.testi ul').owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
  
      767: {
        items: 2
      },
  
      1024: {
        items: 3
      }
    }
  });
  
});
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".vlc-counting")) && !viewed) {
      viewed = true;
      $('.count-number span').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 1000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}


/* --- Source: //www.googleadservices.com/pagead/conversion.js --- */
(function(){var n,aa,ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");} 
var ea=da(this),fa=typeof Symbol==="function"&&typeof Symbol("x")==="symbol",q={},ha={};function r(a,b,c){if(!c||a!=null){c=ha[b];if(c==null)return a[b];c=a[c];return c!==void 0?c:a[b]}} 
function t(a,b,c){if(b)a:{var d=a.split(".");a=d.length===1;var e=d[0],f;!a&&e in q?f=q:f=ea;for(e=0;e<d.length-1;e++){var g=d[e];if(!(g in f))break a;f=f[g]}d=d[d.length-1];c=fa&&c==="es6"?f[d]:null;b=b(c);b!=null&&(a?ba(q,d,{configurable:!0,writable:!0,value:b}):b!==c&&(ha[d]===void 0&&(a=Math.random()*1E9>>>0,ha[d]=fa?ea.Symbol(d):"$jscp$"+a+"$"+d),ba(f,ha[d],{configurable:!0,writable:!0,value:b})))}}function ia(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}} 
function v(a){var b=typeof q.Symbol!="undefined"&&r(q.Symbol,"iterator")&&a[r(q.Symbol,"iterator")];if(b)return b.call(a);if(typeof a.length=="number")return{next:ia(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function ka(a){return la(a,a)}function la(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)} 
var ma=fa&&typeof r(Object,"assign")=="function"?r(Object,"assign"):function(a,b){if(a==null)throw new TypeError("No nullish arg");a=Object(a);for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};t("Object.assign",function(a){return a||ma},"es6");function oa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}t("globalThis",function(a){return a||ea},"es_2020"); 
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}function c(f,g){this.v=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.v};var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b},"es6"); 
t("Symbol.iterator",function(a){if(a)return a;a=(0,q.Symbol)("Symbol.iterator");ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(ia(this))}});return a},"es6");function pa(a){a={next:a};a[r(q.Symbol,"iterator")]=function(){return this};return a} 
t("WeakMap",function(a){function b(g){this.v=(f+=Math.random()+1).toString();if(g){g=v(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function d(g){var h=typeof g;return h==="object"&&g!==null||h==="function"}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),h=Object.seal({}),k=new a([[g,2],[h,3]]);if(k.get(g)!=2||k.get(h)!=3)return!1;k.delete(g);k.set(h,4);return!k.has(g)&&k.get(h)==4}catch(l){return!1}}())return a;var e="$jscomp_hidden_"+Math.random(), 
f=0;b.prototype.set=function(g,h){if(!d(g))throw Error("Invalid WeakMap key");if(!A(g,e)){var k=new c;ba(g,e,{value:k})}if(!A(g,e))throw Error("WeakMap key fail: "+g);g[e][this.v]=h;return this};b.prototype.get=function(g){return d(g)&&A(g,e)?g[e][this.v]:void 0};b.prototype.has=function(g){return d(g)&&A(g,e)&&A(g[e],this.v)};b.prototype.delete=function(g){return d(g)&&A(g,e)&&A(g[e],this.v)?delete g[e][this.v]:!1};return b},"es6"); 
t("Map",function(a){function b(){var h={};return h.G=h.next=h.head=h}function c(h,k){var l=h[1];return pa(function(){if(l){for(;l.head!=h[1];)l=l.G;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&A(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l, 
list:m,index:-1,entry:void 0}}function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||typeof a!="function"||!r(a.prototype,"entries")||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=r(k,"entries").call(k),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done|| 
m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(p){return!1}}())return a;var f=new q.WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],G:this[1].G,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].G.next=l.entry,this[1].G=l.entry,this.size++);return this};e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id], 
h.entry.G.next=h.entry.next,h.entry.next.G=h.entry.G,h.entry.head=null,this.size--,!0):!1};e.prototype.clear=function(){this[0]={};this[1]=this[1].G=b();this.size=0};e.prototype.has=function(h){return!!d(this,h).entry};e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};e.prototype.keys=function(){return c(this,function(h){return h.key})};e.prototype.values=function(){return c(this,function(h){return h.value})}; 
e.prototype.forEach=function(h,k){for(var l=r(this,"entries").call(this),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};e.prototype[r(q.Symbol,"iterator")]=r(e.prototype,"entries");var g=0;return e},"es6");function qa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[r(q.Symbol,"iterator")]=function(){return e};return e} 
t("Array.prototype.entries",function(a){return a?a:function(){return qa(this,function(b,c){return[b,c]})}},"es6");t("Array.prototype.keys",function(a){return a?a:function(){return qa(this,function(b){return b})}},"es6");function ta(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""} 
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ta(this,b,"endsWith");c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}},"es6");t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}},"es8");t("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}},"es6"); 
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||r(Object,"is").call(Object,f,b))return!0}return!1}},"es7");t("String.prototype.includes",function(a){return a?a:function(b,c){return ta(this,b,"includes").indexOf(b,c||0)!==-1}},"es6");t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push(b[d]);return c}},"es8"); 
t("Array.prototype.values",function(a){return a?a:function(){return qa(this,function(b,c){return c})}},"es8");t("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}},"es6");/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var ua=this||self;function va(a){a=parseFloat(a);return isNaN(a)||a>1||a<0?0:a};function wa(a){wa[" "](a);return a}wa[" "]=function(){};function xa(a){try{var b;if(b=!!a&&a.location.href!=null)a:{try{wa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}};function ya(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};function za(){var a=ua.navigator;return a&&(a=a.userAgent)?a:""};/* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var Aa=q.globalThis.trustedTypes,Ba;function Ca(){var a=null;if(!Aa)return a;try{var b=function(c){return c};a=Aa.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}function Da(){Ba===void 0&&(Ba=Ca());return Ba};function Ea(a){this.v=a}Ea.prototype.toString=function(){return this.v+""};function Ha(a){var b=Da();a=b?b.createScriptURL(a):a;return new Ea(a)}function Ia(a){if(a instanceof Ea)return a.v;throw Error("");};var Ja=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function Ka(a){this.v=a}Ka.prototype.toString=function(){return this.v+""};function La(a){var b=Da();a=b?b.createHTML(a):a;return new Ka(a)}function Ma(a){if(a instanceof Ka)return a.v;throw Error("");};function Na(a,b){a.src=Ia(b);var c;b=a.ownerDocument;b=b===void 0?document:b;var d;b=(d=(c=b).querySelector)==null?void 0:d.call(c,"script[nonce]");(c=b==null?"":b.nonce||b.getAttribute("nonce")||"")&&a.setAttribute("nonce",c)};var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function Pa(a,b){a.write(Ma(b))};var Qa=ya(function(){return za().indexOf("MSIE")!=-1});function Ra(a){return za().indexOf(a)!=-1}var Sa=ya(function(){var a=Math.random;return["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"].some(Ra)||a()<1E-4});function Ta(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};function Ua(){if(!q.globalThis.crypto)return Math.random();try{var a=new Uint32Array(1);q.globalThis.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}};function Va(a){return a instanceof Ka?a:La(String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"))}function Wa(a){return Xa(a)}function Xa(a){var b=Va("");return La(a.map(function(c){return Ma(Va(c))}).join(Ma(b).toString()))} 
var Ya=/^[a-z][a-z\d-]*$/i,ab="APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" "),cb="AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),db=["action","formaction","href"]; 
function eb(a){var b;if(!Ya.test("span"))throw Error("");if(ab.indexOf("SPAN")!==-1)throw Error("");var c="<span";a&&(c+=fb(a));Array.isArray(b)||(b=b===void 0?[]:[b]);cb.indexOf("SPAN")!==-1?c+=">":(a=Wa(b.map(function(d){return d instanceof Ka?d:Va(String(d))})),c+=">"+a.toString()+"</span>");return La(c)} 
function fb(a){for(var b="",c=r(Object,"keys").call(Object,a),d=0;d<c.length;d++){var e=c[d],f=a[e];if(!Ya.test(e))throw Error("");if(f!==void 0&&f!==null){if(/^on./i.test(e))throw Error("");db.indexOf(e.toLowerCase())!==-1&&(f=String(f),f=Ja.test(f)?f:void 0,f=f||"about:invalid#zClosurez");e=e+'="'+Va(String(f))+'"';b+=" "+e}}return b};function gb(a){var b=oa.apply(1,arguments);if(b.length===0)return Ha(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Ha(c)}function hb(a,b,c,d){function e(g,h){g!=null&&(Array.isArray(g)?g.forEach(function(k){return e(k,h)}):(b+=f+encodeURIComponent(h)+"="+encodeURIComponent(g),f="&"))}var f=b.length?"&":"?";d.constructor===Object&&(d=r(Object,"entries").call(Object,d));Array.isArray(d)?d.forEach(function(g){return e(g[1],g[0])}):d.forEach(e);return Ha(a+b+c)};function ib(a){return/^true$/.test(a)}function jb(a,b){if(!a||!b.head)return null;var c=kb("META");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c}function kb(a,b){b=b===void 0?document:b;return b.createElement(String(a).toLowerCase())};var lb=va("0.20"),mb=va("0.002"),nb=va("1.0"),ob=va("1.0"),pb=va("1.0"),qb=va("0.00"),rb=va("0.00"),sb=ib("false"),tb=ib("true"),ub=ib("true"),vb=ib("true"),wb=ib("true"),xb=ib("true");var yb=null;function zb(a){a=a===void 0?window:a;if(yb===null){yb="";try{var b="";try{b=a.top.location.hash}catch(d){b=a.location.hash}if(b){var c=b.match(/\bdeid=([\d,]+)/);yb=c?c[1]:""}}catch(d){}}return yb} 
function D(a,b,c){var d=E;if(c?d.v.hasOwnProperty(c)&&d.v[c]==="":1){var e=e===void 0?ua:e;e=(e=zb(e))?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!Qa()&&!Sa()&&(e=Math.random(),e<b)){e=Ua();a=a[Math.floor(e*a.length)];break a}a=null}a&&a!==""&&(c?d.v.hasOwnProperty(c)&&(d.v[c]=a):d.Z[a]=!0)}}function H(a){var b=E;return b.v.hasOwnProperty(a)?b.v[a]:""} 
function Ab(){var a=E,b=[];Ta(a.Z,function(c,d){b.push(d)});Ta(a.v,function(c){c!==""&&b.push(c)});return b};var Bb={ya:2,Fa:13,Ea:14,Ba:16,Aa:17,za:18,xa:19,Ha:20,Ga:21,wa:22,sa:23},E=null;function Cb(){return!!E&&(H(20)=="466465926"||H(20)=="466465925")}function Db(){return!!E&&H(16)=="592230571"}function Eb(){return!!E&&(H(22)=="512247839"||H(22)=="512247838")};function Fb(a){var b=b===void 0?ua:b;var c,d;return((c=b.performance)==null?void 0:(d=c.timing)==null?void 0:d[a])||0};function Gb(){var a=Ib,b="S";if(a.S&&a.hasOwnProperty(b))return a.S;b=new a;return a.S=b};var Jb={Ca:0,ta:1,Da:2,va:3,ua:4};function Ib(){this.v={}}function Kb(a,b,c){typeof c==="number"&&c>0&&(a.v[b]=Math.round(c))}function Lb(a){var b=Gb();var c=c===void 0?ua:c;c=c.performance;Kb(b,a,c&&c.now?c.now():null)}function Mb(){function a(){return Kb(b,0,Fb("loadEventStart")-Fb("navigationStart"))}var b=Gb();Fb("loadEventStart")!=0?a():window.addEventListener("load",a)}function Ob(){var a=Gb();return r(Object,"values").call(Object,Jb).map(function(b){return[b,a.v[b]||0]})};var Pb=ib("false");function Qb(a){return typeof a==="function"}function Rb(a){return typeof a==="string"}function Sb(a,b){if(a&&Array.isArray(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]}function Tb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function I(){return(new Date(Date.now())).getTime()}function Ub(a,b){return a.length>=b.length&&a.substring(a.length-b.length,a.length)===b} 
function Vb(a){for(var b=0;b<3;++b)try{var c=decodeURIComponent(a).replace(/\+/g," ");if(c===a)break;a=c}catch(d){return""}return a};var Wb={};function L(a){var b=Wb.TAGGING;b||(b=Wb.TAGGING=[]);b[a]=!0};function Xb(a){a=Yb(a);return La(a)}function Yb(a){return a===null?"null":a===void 0?"undefined":a};var M=window,O=document,Zb=navigator,$b={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},ac={height:1,onload:1,src:1,style:1,width:1};function bc(a,b,c){b&&Tb(b,function(d,e){d=d.toLowerCase();c.hasOwnProperty(d)||a.setAttribute(d,e)})}function cc(a,b,c,d,e){var f=O.createElement("script");bc(f,d,$b);f.type="text/javascript";f.async=d&&d.async===!1?!1:!0;a=Ha(Yb(a));Na(f,a);b&&(f.onload=b);c&&(f.onerror=c);e?e.appendChild(f):dc.na(f)} 
function ec(a,b,c){var d=!1;d=d===void 0?!0:d;var e=!1;c||(c=O.createElement("iframe"),e=!0);bc(c,void 0,ac);d&&(c.height="0",c.width="0",c.style.display="none",c.style.visibility="hidden");a!==void 0&&(c.src=a);e&&(a=O.body&&O.body.lastChild||O.body||O.head,a.parentNode.insertBefore(c,a));b&&(c.onload=b)}function fc(){var a=dc.fa,b=a.apply;var c=oa.apply(0,arguments);c=c instanceof Array?c:ja(v(c));b.call(a,dc,c)} 
var hc={cache:"no-store",credentials:"include",keepalive:!0,method:"POST",mode:"no-cors",redirect:"follow"};function ic(a){if(Qb(M.fetch)){var b=r(Object,"assign").call(Object,{},hc);try{var c=M.fetch(a,b);if(c)return c.then(function(){}).catch(function(){}),!0}catch(d){}}dc.ra(a,void 0,void 0);return!0} 
function jc(){var a=M.performance;if(a&&a.getEntriesByType)try{var b=a.getEntriesByType("navigation");if(b&&b.length>0)var c=b[0].type}catch(d){return"e"}if(!c)return"u";switch(c){case "navigate":return"n";case "back_forward":return"h";case "reload":return"r";case "prerender":return"p";default:return"x"}} 
var dc={fa:function(a,b,c,d){var e=new Image(1,1);bc(e,d,{});e.onload=function(){e.onload=null;b&&b()};e.onerror=function(){e.onerror=null;c&&c()};e.src=a;return e},na:function(a){var b=O.getElementsByTagName("script")[0]||O.body||O.head;b.parentNode.insertBefore(a,b)},ra:function(a,b,c){try{var d=Zb.sendBeacon&&Zb.sendBeacon(a)}catch(e){L(15)}d?b==null||b():fc(a,b,c)}};function kc(){var a={};var b=M.google_tag_data;M.google_tag_data=b===void 0?a:b;a=M.google_tag_data;return a.ics=a.ics||new lc}function lc(){this.entries={};this.waitPeriodTimedOut=this.wasSetLate=this.accessedAny=this.accessedDefault=this.usedImplicit=this.usedUpdate=this.usedDefault=this.usedDeclare=this.active=!1;this.v=[]}n=lc.prototype; 
n.default=function(a,b,c,d,e,f,g){this.usedDefault||this.usedDeclare||!this.accessedDefault&&!this.accessedAny||(this.wasSetLate=!0);this.usedDefault=this.active=!0;L(19);b==null?L(18):mc(this,a,b==="granted",c,d,e,f,g)};n.waitForUpdate=function(a,b,c){for(var d=0;d<a.length;d++)mc(this,a[d],void 0,void 0,"","",b,c)}; 
function mc(a,b,c,d,e,f,g,h){var k=r(a,"entries"),l=k[b]||{},m=l.region;d=d&&Rb(d)?d.toUpperCase():void 0;e=e.toUpperCase();f=f.toUpperCase();if(e===""||d===f||(d===e?m!==f:!d&&!m)){f=!!(g&&g>0&&l.update===void 0);var p={region:d,declare_region:l.declare_region,implicit:l.implicit,default:c!==void 0?c:l.default,declare:l.declare,update:l.update,quiet:f};if(e!==""||l.default!==!1)k[b]=p;f&&M.setTimeout(function(){k[b]===p&&p.quiet&&(L(2),a.waitPeriodTimedOut=!0,a.clearTimeout(b,void 0,h),a.notifyListeners())}, 
g)}}n.clearTimeout=function(a,b,c){var d=[a],e=c.delegatedConsentTypes,f;for(f in e)e.hasOwnProperty(f)&&e[f]===a&&d.push(f);e=r(this,"entries")[a]||{};a=this.getConsentState(a,c);if(e.quiet)for(e.quiet=!1,b=v(d),d=b.next();!d.done;d=b.next())nc(this,d.value);else if(b!==void 0&&a!==b)for(b=v(d),d=b.next();!d.done;d=b.next())nc(this,d.value)}; 
n.update=function(a,b,c){this.usedDefault||this.usedDeclare||this.usedUpdate||!this.accessedAny||(this.wasSetLate=!0);this.usedUpdate=this.active=!0;if(b!=null){var d=this.getConsentState(a,c),e=r(this,"entries");(e[a]=e[a]||{}).update=b==="granted";this.clearTimeout(a,d,c)}}; 
n.declare=function(a,b,c,d,e){this.usedDeclare=this.active=!0;var f=r(this,"entries"),g=f[a]||{},h=g.declare_region;c=c&&Rb(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(d===""||c===e||(c===d?h!==e:!c&&!h))if(b={region:g.region,declare_region:c,declare:b==="granted",implicit:g.implicit,default:g.default,update:g.update,quiet:g.quiet},d!==""||g.declare!==!1)f[a]=b}; 
n.implicit=function(a,b){this.usedImplicit=!0;var c=r(this,"entries");a=c[a]=c[a]||{};a.implicit!==!1&&(a.implicit=b==="granted")}; 
n.getConsentState=function(a,b){var c=r(this,"entries"),d=c[a]||{},e=d.update;if(e!==void 0)return e?1:2;if(b.usedContainerScopedDefaults){e=b.containerScopedDefaults[a];if(e===3)return 1;if(e===2)return 2}else if(e=d.default,e!==void 0)return e?1:2;if(b==null?0:b.delegatedConsentTypes.hasOwnProperty(a)){a=b.delegatedConsentTypes[a];c=c[a]||{};e=c.update;if(e!==void 0)return e?1:2;if(b.usedContainerScopedDefaults){b=b.containerScopedDefaults[a];if(b===3)return 1;if(b===2)return 2}else if(e=c.default, 
e!==void 0)return e?1:2}e=d.declare;if(e!==void 0)return e?1:2;e=d.implicit;return e!==void 0?e?3:4:0};n.addListener=function(a,b){this.v.push({consentTypes:a,ia:b})};function nc(a,b){for(var c=0;c<a.v.length;++c){var d=a.v[c];Array.isArray(d.consentTypes)&&d.consentTypes.indexOf(b)!==-1&&(d.ca=!0)}}n.notifyListeners=function(a,b){for(var c=0;c<this.v.length;++c){var d=this.v[c];if(d.ca){d.ca=!1;try{d.ia({consentEventId:a,consentPriorityId:b})}catch(e){}}}};var oc=[],pc={};function P(a){return oc[a]===void 0?!1:oc[a]};var qc={},rc={delegatedConsentTypes:{},corePlatformServices:{},usedCorePlatformServices:!1,selectedAllCorePlatformServices:!1,containerScopedDefaults:(qc.ad_storage=1,qc.analytics_storage=1,qc.ad_user_data=1,qc.ad_personalization=1,qc),usedContainerScopedDefaults:!1};function R(a){var b=kc();b.accessedAny=!0;return(Rb(a)?[a]:a).every(function(c){switch(b.getConsentState(c,rc)){case 1:case 3:return!0;case 2:case 4:return!1;default:return!0}})} 
function sc(a){var b=kc();b.accessedAny=!0;return!(r(b,"entries")[a]||{}).quiet}function tc(a,b){kc().addListener(a,b)}function uc(a,b){if(b.every(sc))a({});else{var c=!1;tc(b,function(d){!c&&b.every(sc)&&(c=!0,a(d))})}} 
function vc(a,b){function c(){return d.filter(function(g){return R(g)&&!e[g]})}var d=Rb(b)?[b]:b,e={};b=c();if(b.length!==d.length){var f=function(g){g=v(g);for(var h=g.next();!h.done;h=g.next())e[h.value]=!0};f(b);tc(d,function(g){function h(m){m.length!==0&&(f(m),g.consentTypes=m,a(g))}var k=c();if(k.length!==0){var l=r(Object,"keys").call(Object,e).length;k.length+l>=d.length?h(k):M.setTimeout(function(){h(c())},500)}})}};var wc=/:[0-9]+$/,xc=/^\d+\.fls\.doubleclick\.net$/;function yc(a,b){var c={};a=v(a.split("&"));for(var d=a.next();!d.done;d=a.next()){var e=v(d.value.split("="));d=e.next().value;e=ja(e);d=decodeURIComponent(d.replace(/\+/g," "));if(b===void 0||d===b)e=e.join("="),c[d]||(c[d]=[]),c[d].push(decodeURIComponent(e.replace(/\+/g," ")))}var f;return(f=c[b])==null?void 0:f[0]} 
function zc(a,b,c,d,e){b&&(b=String(b).toLowerCase());if(b==="protocol"||b==="port")a.protocol=Ac(a.protocol)||Ac(M.location.protocol);b==="port"?a.port=String(Number(a.hostname?a.port:M.location.port)||(a.protocol==="http"?80:a.protocol==="https"?443:"")):b==="host"&&(a.hostname=(a.hostname||M.location.hostname).replace(wc,"").toLowerCase());var f=Ac(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":d="";a&&a.href&&(d=a.href.indexOf("#"),d=d<0?a.href:a.href.substring(0, 
d));a=d;break;case "protocol":a=f;break;case "host":a=a.hostname.replace(wc,"").toLowerCase();c&&(d=/^www\d*\./.exec(a))&&d[0]&&(a=a.substring(d[0].length));break;case "port":a=String(Number(a.port)||(f==="http"?80:f==="https"?443:""));break;case "path":a.pathname||a.hostname||L(1);a=a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname;a=a.split("/");(d||[]).indexOf(a[a.length-1])>=0&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?","");e&&(a=yc(a,e));break;case "extension":a= 
a.pathname.split(".");a=a.length>1?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#","");break;default:a=a&&a.href}return a}function Ac(a){return a?a.replace(":","").toLowerCase():""}var Bc={},Cc=0; 
function Dc(a){var b=Bc[a];if(!b){b=O.createElement("a");a&&(b.href=a);var c=b.pathname;c[0]!=="/"&&(a||L(1),c="/"+c);var d=b.hostname.replace(wc,"");b={href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port};Cc<5&&(Bc[a]=b,Cc++)}return b};function Ec(a,b,c,d){var e,f=Number(a.U!=null?a.U:void 0);f!==0&&(e=new Date((b||I())+1E3*(f||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:e,K:d}};var Fc=["ad_storage","ad_user_data"];function Gc(a,b){if(a)if(b===null||b===void 0||b==="")L(33);else{var c=Hc(!1);c.error!==0?L(34):c.value?(c.value[a]=b,Ic(c)!==0&&L(36)):L(35)}else L(32)}function Jc(a){if(!a)return L(27),{error:10};var b=Hc();if(b.error!==0)return L(29),b;if(!b.value)return L(30),{error:2};if(!(a in b.value))return L(31),{value:void 0,error:15};a=b.value[a];return a===null||a===void 0||a===""?(L(28),{value:void 0,error:11}):{value:a,error:0}} 
function Kc(a){if(a){var b=Hc(!1);b.error!==0?L(38):b.value?a in b.value?(delete b.value[a],Ic(b)!==0&&L(41)):L(40):L(39)}else L(37)} 
function Hc(a){a=a===void 0?!0:a;if(!R(Fc))return L(43),{error:3};try{if(!M.localStorage)return L(44),{error:1}}catch(f){return L(45),{error:14}}var b={schema:"gcl",version:1},c=void 0;try{c=M.localStorage.getItem("_gcl_ls")}catch(f){return L(46),{error:13}}try{if(c){var d=JSON.parse(c);if(d&&typeof d==="object")b=d;else return L(47),{error:12}}}catch(f){return L(48),{error:8}}if(b.schema!=="gcl")return L(49),{error:4};if(b.version!==1)return L(50),{error:5};try{var e=Lc(b);a&&e&&Ic({value:b,error:0})}catch(f){return L(48), 
{error:8}}return{value:b,error:0}}function Lc(a){if(!a||typeof a!=="object")return!1;if("expires"in a&&"value"in a){var b;typeof a.expires==="number"?b=a.expires:b=typeof a.expires==="string"?Number(a.expires):NaN;if(isNaN(b)||!(Date.now()<=b))return a.value=null,a.error=9,L(54),!0}else{b=!1;for(var c=v(r(Object,"keys").call(Object,a)),d=c.next();!d.done;d=c.next())b=Lc(a[d.value])||b;return b}return!1} 
function Ic(a){if(a.error)return a.error;if(!a.value)return L(42),2;a=a.value;try{var b=JSON.stringify(a)}catch(c){return L(52),6}try{M.localStorage.setItem("_gcl_ls",b)}catch(c){return L(53),7}return 0};var Mc={M:"value",F:"conversionCount",V:1},Nc=[Mc,{M:"timeouts",F:"timeouts",V:0},{M:"errors",F:"errors",V:0},{M:"eopCount",F:"endOfPageCount",V:0}];function Oc(a){return R(["ad_storage","ad_user_data"])?!a.qa||P(a.qa):!1}function Pc(a){return R(["ad_storage","ad_user_data"])?!a.ma||P(a.ma):!1};function Qc(){return R(["ad_storage","ad_user_data"])&&P(9)};function Rc(a,b,c,d){var e;return(e=Sc(function(f){return f===a},b,c,d)[a])!=null?e:[]}function Sc(a,b,c,d){if(Tc(d)){d={};b=String(b||Uc()).split(";");for(var e=0;e<b.length;e++){var f=b[e].split("="),g=f[0].trim();if(g&&a(g)){(f=f.slice(1).join("=").trim())&&c&&(f=decodeURIComponent(f));var h=void 0,k=void 0;((h=d)[k=g]||(h[k]=[])).push(f)}}a=d}else a={};return a} 
function Vc(a,b,c){var d=Wc,e=["ad_storage","ad_user_data"];if(Tc(e)){a=Xc(a,d,e);if(a.length===1)return a[0];if(a.length!==0){a=Yc(a,function(f){return f.ga},b);if(a.length===1)return a[0];a=Yc(a,function(f){return f.pa},c);return a[0]}}}function Zc(a,b,c,d){var e=Uc();M.origin!=="null"&&(M.document.cookie=a);a=Uc();return e!==a||c!==void 0&&Rc(b,a,!1,d).indexOf(c)>=0} 
function $c(a,b,c){function d(p,u,w){if(w==null)return delete g[u],p;g[u]=w;return p+"; "+u+"="+w}function e(p,u){if(u==null)return p;g[u]=!0;return p+"; "+u}if(Tc(c.K)){if(b==null)var f=a+"=deleted; expires="+(new Date(0)).toUTCString();else c.encode&&(b=encodeURIComponent(b)),b=ad(b),f=a+"="+b;var g={};f=d(f,"path",c.path);if(c.expires instanceof Date)var h=c.expires.toUTCString();else c.expires!=null&&(h=c.expires);f=d(f,"expires",h);f=d(f,"max-age",c.Ja);f=d(f,"samesite",c.Ka);c.secure&&(f=e(f, 
"secure"));if((h=c.domain)&&h.toLowerCase()==="auto"){h=bd();for(var k=0;k<h.length;++k){var l=h[k]!=="none"?h[k]:void 0,m=d(f,"domain",l);m=e(m,c.flags);if(!cd(l,c.path)&&Zc(m,a,b,c.K))break}}else h&&h.toLowerCase()!=="none"&&(f=d(f,"domain",h)),f=e(f,c.flags),cd(h,c.path)||Zc(f,a,b,c.K)}}function dd(a,b,c){c.path==null&&(c.path="/");c.domain||(c.domain="auto");$c(a,b,c)} 
function Yc(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],k=b(h);k===c?d.push(h):f===void 0||k<f?(e=[h],f=k):k===f&&e.push(h)}return d.length>0?d:e}function Xc(a,b,c){var d=[];a=Rc(a,void 0,void 0,c);for(c=0;c<a.length;c++){var e=a[c].split("."),f=e.shift();if(!b||!f||b.indexOf(f)!==-1)if(f=e.shift())f=f.split("-"),d.push({Ia:a[c],ea:e.join("."),ga:Number(f[0])||1,pa:Number(f[1])||1})}return d}function ad(a){a&&a.length>1200&&(a=a.substring(0,1200));return a} 
var ed=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,fd=/(^|\.)doubleclick\.net$/i;function cd(a,b){return a!==void 0&&(fd.test(M.document.location.hostname)||b==="/"&&ed.test(a))}function gd(a){if(!a)return 1;var b=a;P(4)&&a==="none"&&(b=M.document.location.hostname);b=b.indexOf(".")===0?b.substring(1):b;return b.split(".").length}function hd(a){if(!a||a==="/")return 1;a[0]!=="/"&&(a="/"+a);a[a.length-1]!=="/"&&(a+="/");return a.split("/").length-1} 
function id(a,b){a=""+gd(a);b=hd(b);b>1&&(a+="-"+b);return a}function Uc(){return M.origin!=="null"?M.document.cookie:""}function Tc(a){return a&&P(5)?(Array.isArray(a)?a:[a]).every(function(b){return sc(b)&&R(b)}):!0}function bd(){var a=[],b=M.document.location.hostname.split(".");if(b.length===4){var c=b[b.length-1];if(Number(c).toString()===c)return["none"]}for(c=b.length-2;c>=0;c--)a.push(b.slice(c).join("."));b=M.document.location.hostname;fd.test(b)||ed.test(b)||a.push("none");return a};var Wc=["1"],jd={},kd={}; 
function ld(a,b){(b===void 0?0:b)&&Oc(Mc)&&Kc("gcl_ctr");if(b=Pc(Mc)){var c=[Mc];b:{b=Jc("gcl_ctr");if(b.error===0&&b.value&&typeof b.value==="object"){b=b.value;try{var d="value"in b&&typeof b.value==="object"?b.value:void 0;break b}catch(h){}}d=void 0}b={};c=v(c);for(var e=c.next();!e.done;e=c.next())if(e=e.value,d&&Oc(e)){var f=d[e.M];f===void 0||r(Number,"isNaN").call(Number,f)?b[e.F]=-1:b[e.F]=Number(f)}else b[e.F]=-1;b=b[Mc.F]===-1}if(b){d={};d=(d[Mc.F]=0,d);b=v(Nc);for(c=b.next();!c.done;c= 
b.next())c=c.value,c!==Mc&&Pc(c)&&(d[c.F]=0);b=I();a=Ec(a||{},b,!0);c={};e=v(Nc);for(f=e.next();!f.done;f=e.next()){f=f.value;var g=d[f.F];g!==void 0&&g!==-1&&(c[f.M]=g)}c.creationTimeMs=b;Gc("gcl_ctr",{value:c,expires:Number(a.expires)})}} 
function md(a,b){(b===void 0?0:b)&&Qc()&&Kc("last_convs");if(!(b=!(R(["ad_storage","ad_user_data"])&&P(10))))a:{if(Qc()&&(b=Jc("last_convs"),b.error===0&&b.value&&typeof b.value==="object"&&(b=b.value,b.value&&Array.isArray(b.value)))){var c=b.value;if(!(c.length>1)){b=[];c=v(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;if(typeof d!=="object"||d===null||typeof d.random!=="number"||typeof d.label!=="string"||d.label.length>200){b=void 0;break a}b.push({random:d.random,label:d.label})}break a}}b= 
void 0}b||(b=[],!Qc()||b.length>1||b.length===1&&b[0].label.length>200||(a=a||{},Gc("last_convs",{value:b,expires:Number(Ec(a).expires)})))}function nd(a,b,c,d){b=["1",id(c.domain,c.path),b].join(".");c=Ec(c,d);c.K=["ad_storage","ad_user_data"];dd(a,b,c)} 
function od(a,b,c){var d;b=(d=Vc(a,gd(b),hd(c)))==null?void 0:d.ea;if(!b)return!1;c=b.split(".");c.length===3?kd[a]={sessionId:c[0]+"."+c[1],J:Number(c[2])||0,P:0}:c.length>=2&&(jd[a]=c[0]+"."+c[1],c.shift(),c.shift(),c.length>=3&&(d={sessionId:c[0]==="-"?void 0:c[0]+"."+c[1],J:Number(c[2])||0,P:0},P(16)&&c.length>=6&&(b=c[3]+"."+c[4],c=Number(c[5])||0,b&&c!==0&&(d.ba=b,d.P=c)),kd[a]=d));return!0}function pd(a){return(a||"_gcl")+"_au"};function qd(a,b,c){a=rd(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0}function rd(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};var sd={},td=null; 
function ud(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);e>255&&(b[c++]=e&255,e>>=8);b[c++]=e}a=4;a===void 0&&(a=0);if(!td)for(td={},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));sd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];td[h]===void 0&&(td[h]=g)}}a=sd[a];c=Array(Math.floor(b.length/3));d=a[64]||"";for(e=f=0;f<b.length-2;f+=3){var k=b[f],l=b[f+1];h=b[f+2];g=a[k>>2];k=a[(k& 
3)<<4|l>>4];l=a[(l&15)<<2|h>>6];h=a[h&63];c[e++]=g+k+l+h}g=0;h=d;switch(b.length-f){case 2:g=b[f+1],h=a[(g&15)<<2]||d;case 1:b=b[f],c[e]=a[b>>2]+a[(b&3)<<4|g>>4]+h+d}return c.join("")};var vd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wd(a){var b=a.match(vd);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}function xd(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}var yd=/#|$/; 
function zd(a,b){var c=a.search(yd),d=xd(a,0,b,c);if(d<0)return null;var e=a.indexOf("&",d);if(e<0||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,e!==-1?e:0).replace(/\+/g," "))}var Ad=/[?&]($|#)/; 
function Bd(a,b,c){for(var d=a.search(yd),e=0,f,g=[];(f=xd(a,e,b,d))>=0;)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.slice(e));a=g.join("").replace(Ad,"$1");c=c!=null?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),c<0&&(c=a.length),d=a.indexOf("?"),d<0||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.slice(0,d),e,a.slice(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};function Cd(a,b,c,d,e,f){var g=zd(c,"fmt");if(d){var h=zd(c,"random"),k=zd(c,"label")||"";if(!h)return;h=ud(decodeURIComponent(k.replace(/\+/g," "))+":"+decodeURIComponent(h.replace(/\+/g," ")));if(!qd(a,h,d))return}g&&Number(g)!==4?(c=Bd(c,"rfmt",g),c=Bd(c,"fmt",4)):g||(c=Bd(c,"fmt",4));cc(c,function(){a.google_noFurtherRedirects&&d&&(a.google_noFurtherRedirects=null,d())},function(){e==null||e()},f,b.getElementsByTagName("script")[0].parentElement||void 0);return c};var S={},Dd=(S.k={D:/^[\w-]+$/},S.b={D:/^[\w-]+$/,W:!0},S.i={D:/^[1-9]\d*$/},S.h={D:/^\d+$/},S.t={D:/^[1-9]\d*$/},S.d={D:/^[A-Za-z0-9_-]+$/},S.j={D:/^\d+$/},S.u={D:/^[1-9]\d*$/},S.l={D:/^[01]$/},S.o={D:/^[1-9]\d*$/},S.g={D:/^[01]$/},S.s={D:/^.+$/},S.m={D:/^[01]$/},S);var Ed={},Id=(Ed[5]={Y:{2:Fd},T:"2",N:["k","i","b","u"]},Ed[4]={Y:{2:Fd,GCL:Gd},T:"2",N:["k","i","b","m"]},Ed[2]={Y:{GS2:Fd,GS1:Hd},T:"GS2",N:"sogtjlhd".split("")},Ed); 
function Fd(a,b){a=a.split(".");if(a.length===3){var c=a[2];if(c.indexOf("$")===-1&&c.indexOf("%24")!==-1)try{c=decodeURIComponent(c)}catch(h){}a={};if(b=Id[b]){b=b.N;c=v(c.split("$"));for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=d[0];if(b.indexOf(e)!==-1)try{var f=decodeURIComponent(d.substring(1)),g=Dd[e];g&&(g.W?(a[e]=a[e]||[],a[e].push(f)):a[e]=f)}catch(h){}}return a}}}function Gd(a){a=a.split(".");a.shift();var b=a.shift(),c=a.shift(),d={};return d.k=c,d.i=b,d.b=a,d} 
function Hd(a){a=a.split(".").slice(2);if(!(a.length<5||a.length>7)){var b={};return b.s=a[0],b.o=a[1],b.g=a[2],b.t=a[3],b.j=a[4],b.l=a[5],b.h=a[6],b}};var Jd=new q.Map([[5,"ad_storage"],[4,["ad_storage","ad_user_data"]],[2,"analytics_storage"]]);function Kd(a,b){if(Id[b]){var c=[];a=Rc(a,void 0,void 0,Jd.get(b));a=v(a);for(var d=a.next();!d.done;d=a.next()){a:{d=d.value;var e=b,f=Id[e];if(f){var g=d.split(".")[0];if(g&&(f=f.Y[g])){d=f(d,e);break a}}d=void 0}d&&c.push(Ld(d))}return c}} 
function Md(a,b,c,d){c=c||{};var e=Id[5];if(e){e=e.T;var f=id(c.domain,c.path)||"1";var g=Id[5];if(g){var h=[];g=v(g.N);for(var k=g.next();!k.done;k=g.next()){k=k.value;var l=Dd[k];if(l){var m=b[k];if(m!==void 0)if(l.W&&Array.isArray(m))for(l=v(m),m=l.next();!m.done;m=l.next())h.push(encodeURIComponent(k+m.value));else h.push(encodeURIComponent(k+m))}}b=h.join("$")}else b=void 0;b=[e,f,b].join(".")}else b=void 0;b&&(c=Ec(c,d,void 0,Jd.get(5)),dd(a,b,c))} 
function Nd(a,b){b=b.D;return typeof b==="function"?b(a):b.test(a)}function Ld(a){for(var b=v(r(Object,"keys").call(Object,a)),c=b.next(),d={};!c.done;d={L:void 0},c=b.next()){c=c.value;var e=a[c];d.L=Dd[c];d.L?d.L.W?a[c]=Array.isArray(e)?e.filter(function(f){return function(g){return Nd(g,f.L)}}(d)):void 0:typeof e==="string"&&Nd(e,d.L)||(a[c]=void 0):a[c]=void 0}return a};function T(a){this.value=0;this.value=a===void 0?0:a}T.prototype.set=function(a){return this.value|=1<<a};function Od(a,b){b<=0||(a.value|=1<<b-1)}T.prototype.get=function(){return this.value};function Pd(a){var b=[],c=O.cookie.split(";");a=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push({X:e[1],value:e[2],timestamp:Number(e[2].split(".")[1])||0})}b.sort(function(f,g){return g.timestamp-f.timestamp});return b} 
function Qd(a,b){a=Pd(a);var c={};if(!a||!a.length)return c;for(var d=0;d<a.length;d++){var e=a[d].value.split(".");if(!(e[0]!=="1"||b&&e.length<3||!b&&e.length!==3)&&Number(e[1])){c[a[d].X]||(c[a[d].X]=[]);var f={version:e[0],timestamp:Number(e[1])*1E3,A:e[2]};b&&e.length>3&&(f.labels=e.slice(3));c[a[d].X].push(f)}}return c};var Rd=/^\w+$/,Sd=/^[\w-]+$/,Td={},Ud=(Td.aw="FPGCLAW",Td),U={},Vd=(U.ag="_ag",U.gb="_gb",U.aw="_aw",U.dc="_dc",U.gf="_gf",U.ha="_ha",U.gp="_gp",U.gs="_gs",U);function V(){return["ad_storage","ad_user_data"]}function Y(a){return!P(5)||R(a)}function Wd(a){function b(){var d=Y(c);d&&a();return d}var c=V();uc(function(){b()||vc(b,c)},c)}function Xd(a){return Yd(a).map(function(b){return b.A})} 
function Zd(a,b){function c(e){return function(f){f.aa=e;return f}}b=b===void 0?!1:b;var d=$d(a.prefix);a=ae("gb",d);d=ae("ag",d);if(!d||!a)return[];b=Yd(a,b).map(c("gb"));a=be(d).map(c("ag"));return b.concat(a).sort(function(e,f){return f.timestamp-e.timestamp})}function ce(a,b,c,d,e){var f=Sb(a,function(g){return g.A===b});f?(f.timestamp<c&&(f.timestamp=c,f.I=e),f.labels=de(f.labels||[],d||[])):a.push({version:"2",A:b,timestamp:c,labels:d,I:e})} 
function ee(a){var b=Kd(a,5)||[];a=[];b=v(b);for(var c=b.next();!c.done;c=b.next()){var d=c=c.value,e=c?(Number(c.i)||0)*1E3:0;e&&ce(a,d.k,e,d.b||[],c.u)}return a.sort(function(f,g){return g.timestamp-f.timestamp})}function Yd(a,b){b=b===void 0?!1:b;var c=[];fe(c,a,1);if(b)if(Ub(a,"_aw")){if(a=ge())a.I=void 0,a.B=a.B||[2],he(c,a);fe(c,"gcl_aw",2)}else Ub(a,"_gb")&&fe(c,"gcl_gb",2);c.sort(function(d,e){return e.timestamp-d.timestamp});return ie(c)} 
function je(a,b){var c=[];a=v(a);for(var d=a.next();!d.done;d=a.next())d=d.value,r(c,"includes").call(c,d)||c.push(d);b=v(b);for(a=b.next();!a.done;a=b.next())a=a.value,r(c,"includes").call(c,a)||c.push(a);return c} 
function he(a,b,c){c=c===void 0?!1:c;for(var d,e,f=v(a),g=f.next();!g.done;g=f.next()){g=g.value;if(g.A===b.A){d=g;break}g.C&&b.C&&g.C.value===b.C.value&&(e=g)}if(d){var h,k;a=(h=d.C)!=null?h:new T;h=(k=b.C)!=null?k:new T;a.value|=h.value;d.C=a;d.timestamp<b.timestamp&&(d.timestamp=b.timestamp,d.I=b.I);d.labels=je(d.labels||[],b.labels||[]);d.B=je(d.B||[],b.B||[])}else c&&e?r(Object,"assign").call(Object,e,b):a.push(b)} 
function ge(){var a=Jc("gclid");if(!a||a.error||!a.value||typeof a.value!=="object")return null;a=a.value;try{if(!("value"in a&&a.value)||typeof a.value!=="object")return null;var b=a.value,c=b.value;if(!c||!c.match(Sd))return null;var d=b.linkDecorationSource,e=b.linkDecorationSources,f=new T;if(typeof d==="number")if(d){var g=new T;d===1?(Od(g,2),Od(g,3)):Od(g,d);f=g}else f=new T;else typeof e==="number"&&(f.value=e);return{version:"",A:c,timestamp:Number(b.creationTimeMs)||0,labels:[],C:f,B:[2]}}catch(h){return null}} 
function ke(a){a=Jc(a);if(a.error!==0)return null;try{return a.value.reduce(function(b,c){if(!c.value||typeof c.value!=="object")return b;var d=c.value,e=d.value;if(!e||!e.match(Sd))return b;var f=new T,g=d.linkDecorationSources;typeof g==="number"&&(f.value=g);var h;b.push({version:"",A:e,timestamp:Number(d.creationTimeMs)||0,expires:Number(c.expires)||0,labels:(h=d.labels)!=null?h:[],C:f,B:[2]});return b},[])}catch(b){return null}} 
function fe(a,b,c){if(c===1){b=Rc(b,O.cookie,void 0,V());b=v(b);for(var d=b.next();!d.done;d=b.next())d=le(d.value.split(".")),d=d.length===0?null:{version:d[0],A:d[2],timestamp:(Number(d[1])||0)*1E3,labels:d.slice(3)},d!=null&&(d.I=void 0,d.C=new T,d.B=[c],he(a,d))}else if(c===2&&(c=ke(b)))for(c=v(c),b=c.next();!b.done;b=c.next())b=b.value,b.I=void 0,b.B=b.B,he(a,b)}function be(a){return ee(a).map(function(b){b.C=new T;b.B=[1];return b})} 
function de(a,b){if(!a.length)return b;if(!b.length)return a;var c={};return a.concat(b).filter(function(d){return c.hasOwnProperty(d)?!1:c[d]=!0})}function $d(a){return a&&typeof a==="string"&&a.match(Rd)?a:"_gcl"} 
function me(a,b){var c=Dc(a);a=zc(c,"query",!1,void 0,"gclid");var d=zc(c,"query",!1,void 0,"gclsrc"),e=zc(c,"query",!1,void 0,"wbraid");if(e){var f=e;try{f=decodeURIComponent(e)}catch(k){}f=f.split(",");e=f.length===2&&f[0]===f[1]?f[0]:e}f=zc(c,"query",!1,void 0,"gbraid");var g=zc(c,"query",!1,void 0,"gad_source"),h=zc(c,"query",!1,void 0,"dclid");!b||a&&d&&e&&f||(b=c.hash.replace("#",""),a=a||yc(b,"gclid"),d=d||yc(b,"gclsrc"),e=e||yc(b,"wbraid"),f=f||yc(b,"gbraid"),g=g||yc(b,"gad_source"));return ne(a, 
d,h,e,f,g)} 
function ne(a,b,c,d,e,f){function g(k,l){h[l]||(h[l]=[]);h[l].push(k)}var h={};h.gclid=a;h.gclsrc=b;h.dclid=c;if(a!==void 0&&a.match(Sd))switch(b){case void 0:g(a,"aw");break;case "aw.ds":g(a,"aw");g(a,"dc");break;case "aw.dv":P(7)&&(g(a,"aw"),g(a,"dc"));break;case "ds":g(a,"dc");break;case "3p.ds":g(a,"dc");break;case "gf":g(a,"gf");break;case "ha":g(a,"ha")}c&&g(c,"dc");d!==void 0&&Sd.test(d)&&(h.wbraid=d,g(d,"gb"));e!==void 0&&Sd.test(e)&&(h.gbraid=e,g(e,"ag"));f!==void 0&&Sd.test(f)&&(h.gad_source= 
f,g(f,"gs"));return h} 
function oe(a,b){function c(){if(Y(d)&&a.length>0){var e=ke("gcl_gb")||[];a.forEach(function(f){var g=Ec(b,f.timestamp,!0);g.expires!==void 0&&he(e,{version:"",A:f.A,timestamp:f.timestamp,expires:Number(g.expires),C:f.C,labels:f.labels},!0)});e.length&&Gc("gcl_gb",e.map(function(f){var g={value:f.A,creationTimeMs:f.timestamp,linkDecorationSources:f.C?f.C.get():0},h;if((h=f.labels)==null?0:h.length)g.labels=f.labels;return{value:g,expires:Number(f.expires)}}))}}b=b||{};var d=V();uc(function(){Y(d)? 
c():vc(c,d)},d)} 
function pe(a,b,c,d,e){function f(){if(Y(l)){var w=Ec(c,h,!0);w.K=l;for(var F=function(B,Hb){var Za=ae(B,g);Za&&(dd(Za,Hb,w),B!=="gb"&&(m=!0))},Q=function(B){B=["GCL",k,B];e.length>0&&B.push(e.join("."));return B.join(".")},ra=v(["aw","dc","gf","ha","gp"]),W=ra.next();!W.done;W=ra.next())W=W.value,a[W]&&F(W,Q(a[W][0]));if((!m||u)&&a.gb){var $a=a.gb[0];ra=ae("gb",g);!b&&Yd(ra).some(function(B){return B.A===$a&&B.labels&&B.labels.length>0})||F("gb",Q($a))}}if(!p&&a.gbraid&&Y("ad_storage")&&(p=!0,!m|| 
u)){var G=a.gbraid;F=ae("ag",g);if(b||!be(F).some(function(B){return B.A===G&&B.labels&&B.labels.length>0}))Q={},Q=(Q.k=G,Q.i=""+k,Q.b=e,Q),Md(F,Q,c,h)}qe(a,g,h,c)}c=c||{};e=e||[];var g=$d(c.prefix),h=d||I(),k=Math.round(h/1E3),l=V(),m=!1,p=!1,u=P(8);uc(function(){f();Y(l)||vc(f,l)},l)} 
function qe(a,b,c,d){if(a.gad_source!==void 0&&Y("ad_storage")){var e=jc();if(e!=="r"&&e!=="h"&&(b=ae("gs",b))){e=(e=M.performance)&&Qb(e.now)?e.now():void 0;e=Math.floor((I()-(e||0))/1E3);var f=M.location.hostname;var g=M.location.pathname;f=Vb(f);f.split(".").length>2&&(f=f.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./,""));g=Vb(g);g=g.split(";")[0];g=g.replace(/\/(ar|slp|web|index)?\/?$/,"");g=(f+g).toLowerCase();f=1;var h;if(g)for(f=0,h=g.length-1;h>=0;h--){var k=g.charCodeAt(h);f= 
(f<<6&268435455)+k+(k<<14);k=f&266338304;f=k!==0?f^k>>21:f}g=String(f);f={};a=(f.k=a.gad_source,f.i=""+e,f.u=g,f);Md(b,a,d,c)}}}function ae(a,b){a=Vd[a];if(a!==void 0)return b+a}function re(a){return le(a.split(".")).length!==0?(Number(a.split(".")[1])||0)*1E3:0}function le(a){return a.length<3||a[0]!=="GCL"&&a[0]!=="1"||!/^\d+$/.test(a[1])||!Sd.test(a[2])?[]:a}function ie(a){return a.filter(function(b){return Sd.test(b.A)})} 
function se(){var a=["aw"],b={};if(M.origin!=="null"){for(var c=$d(b.prefix),d={},e=0;e<a.length;e++)Vd[a[e]]&&(d[a[e]]=Vd[a[e]]);Wd(function(){Tb(d,function(f,g){g=Rc(c+g,O.cookie,void 0,V());g.sort(function(m,p){return re(p)-re(m)});if(g.length){var h=g[0];g=re(h);var k=le(h.split(".")).length!==0?h.split(".").slice(3):[],l={};h=le(h.split(".")).length!==0?h.split(".")[2]:void 0;l[f]=[h];pe(l,!0,b,g,k)}})})}} 
function te(a,b,c,d,e){e=e===void 0?!1:e;var f=[];c=c||{};if(!Y(V()))return f;var g=Yd(a,e);var h=[];if(g.length!==0)for(var k={},l=0;l<g.length;l++){var m=g[l],p=m.aa?m.aa:"gcl";if((m.labels||[]).indexOf(b)===-1){f.push(0);var u=!1,w=void 0;if((w=m.B)==null?0:r(w,"includes").call(w,2))u=!0;w=void 0;((w=m.B)==null?0:r(w,"includes").call(w,1))&&!k[p]&&(u=!0,k[p]=!0);u&&h.push(m)}else if(f.push(1),u=void 0,(u=m.B)==null?0:r(u,"includes").call(u,1))k[p]=!0}if(h.length&&!d){d=[];g=!1;h=v(h);for(k=h.next();!k.done;k= 
h.next()){m=k=k.value;u=m.version;w=m.A;p=m.timestamp;l=m.B;m=(m.labels||[]).concat([b]);var F=void 0;((F=l)==null?0:r(F,"includes").call(F,1))&&!g&&(g=[u,Math.round(p/1E3),w].concat(m).join("."),p=Ec(c,p,!0),p.K=V(),dd(a,g,p),g=!0);p=void 0;e&&((p=l)==null?0:r(p,"includes").call(p,2))&&d.push(r(Object,"assign").call(Object,{},k,{labels:m}))}d.length&&oe(d,c)}return f} 
function ue(a,b){b=$d(b);b=ae(a,b);if(!b)return 0;a=a==="ag"?be(b):Yd(b);for(var c=b=0;c<a.length;c++)b=Math.max(b,a[c].timestamp);return b}function ve(a){for(var b=0,c=v(r(Object,"keys").call(Object,a)),d=c.next();!d.done;d=c.next()){d=a[d.value];for(var e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp))}return b};var we=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),xe=/^~?[\w-]+(?:\.~?[\w-]+)*$/,ye=/^\d+\.fls\.doubleclick\.net$/,ze=/;gac=([^;?]+)/,Ae=/;gacgb=([^;?]+)/; 
function Be(a,b,c){if(ye.test(a.location.host)){if((b=a.location.href.match(c))&&b.length===2&&b[1].match(we)){a:{try{var d=decodeURIComponent(b[1]);break a}catch(h){}d=void 0}b=d||""}else b="";return b}d=[];a=v(r(Object,"keys").call(Object,b));for(c=a.next();!c.done;c=a.next()){c=c.value;for(var e=[],f=b[c],g=0;g<f.length;g++)e.push(f[g].A);d.push(c+":"+e.join(","))}return d.length>0?d.join(";"):""} 
function Ce(a,b,c,d){for(var e=Y(V())?Qd("_gac_gb",!0):{},f=[],g=!1,h=v(r(Object,"keys").call(Object,e)),k=h.next();!k.done;k=h.next()){k=k.value;var l=te("_gac_gb_"+k,b,c,d);g=g||l.length!==0&&l.some(function(m){return m===1});f.push(k+":"+l.join(","))}return{la:g?f.join(";"):"",ka:Be(a,e,Ae)}}function De(a,b){return(a=a.location.href.match(new RegExp(";"+b+"=([^;?]+)")))&&a.length===2&&a[1].match(xe)?a[1]:void 0} 
function Ee(a,b){a=a.split(".");b=b?b.split("."):[];var c=b.length===a.length?b:void 0;return a.map(function(d,e){d={A:d};if(c&&(e=c[e].split("_"),e.length===2)){d.C=new T(Number(e[0]));e=Number(e[1]);if(e===0)e=[0];else{var f=[];e&1&&f.push(1);e&2&&f.push(2);e&4&&f.push(3);e&8&&f.push(4);e&16&&f.push(5);e=f}d.B=e}return d})} 
function Fe(a,b,c,d){var e=e===void 0?!1:e;if(ye.test(a.location.host)){if(b=De(a,d)){if(P(15))return a=De(a,d+"_src"),Ee(b,a);if(e){var f=new T;Od(f,2);Od(f,3);return b.split(".").map(function(g){return{A:g,C:f,B:[1]}})}return b.split(".").map(function(g){return{A:g,C:new T,B:[1]}})}}else{if(c==="gclid"){a=Yd((b||"_gcl")+"_aw",e);d=Number(pc[4]===void 0?0:pc[4]);e=v(Ge());for(b=e.next();!b.done;b=e.next())b=b.value,b.timestamp>d&&he(a,b);return a}if(c==="wbraid")return Yd((b||"_gcl")+"_gb",e);if(c=== 
"braids")return Zd({prefix:b},e)}return[]}function Ge(){return(Kd(Ud.aw,4)||[]).filter(function(a){return a.m==="1"}).map(function(a){return{A:a.k,timestamp:Number(a.i),version:"",B:[5]}})}function He(a,b){return Fe(a,b,"gclid","gclaw").map(function(c){return c.A}).join(".")}function Ie(a,b){return Fe(a,b,"wbraid","gclgb").map(function(c){return c.A}).join(".")} 
function Je(a){if(Xd("_gcl_aw").length===0&&(!a||Xd(a+"_aw").length===0)){a=me(M.location.href,!0);for(var b=!0,c=v(r(Object,"keys").call(Object,a)),d=c.next();!d.done;d=c.next())if(a[d.value]!==void 0){b=!1;break}b&&(a=me(M.document.referrer,!1),a.gad_source=void 0);pe(a,!1,{});se()}}function Ke(a,b,c){a=te((b&&b.prefix||"_gcl")+"_gb",a,b,c,!1);return a.length===0||a.every(function(d){return d===0})?"":a.join(".")};function Le(){var a=M.__uspapi;if(Qb(a)){var b="";try{a("getUSPData",1,function(c,d){d&&c&&(c=c.uspString)&&RegExp("^[\\da-zA-Z-]{1,20}$").test(c)&&(b=c)})}catch(c){}return b}};function Me(){var a=a===void 0?document:a;var b;return!((b=a.featurePolicy)==null||!(aa=b.allowedFeatures(),r(aa,"includes")).call(aa,"attribution-reporting"))};var Ne="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Oe(a){var b;return(b=a.google_tag_data)!=null?b:a.google_tag_data={}}function Pe(a){a=a.google_tag_data;if(a!=null&&a.uach){a=a.uach;var b=r(Object,"assign").call(Object,{},a);a.fullVersionList&&(b.fullVersionList=a.fullVersionList.slice(0));a=b}else a=null;return a} 
function Qe(a){var b,c;return typeof((b=a.navigator)==null?void 0:(c=b.userAgentData)==null?void 0:c.getHighEntropyValues)==="function"}function Re(){var a=window;if(Qe(a)){var b=Oe(a);b.uach_promise||(a=a.navigator.userAgentData.getHighEntropyValues(Ne).then(function(c){b.uach!=null||(b.uach=c);return c}),b.uach_promise=a)}};var Se=/^[a-zA-Z0-9_]+$/,Te=!1,Ue="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "), 
Ve=["google_conversion_first_time","google_conversion_snippets"];function We(a){return a!=null?encodeURIComponent(String(a)):""}function Xe(a){if(a!=null){a=String(a).substring(0,512);var b=a.indexOf("#");return b==-1?a:a.substring(0,b)}return""}function Z(a,b){b=We(b);return b!=""&&(a=We(a),a!="")?"&".concat(a,"=",b):""}function Ye(a){var b=typeof a;return a==null||b=="object"||b=="function"?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")} 
function Ze(a){if(!a||typeof a!="object"||typeof a.join=="function")return"";var b=[],c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(d&&typeof d.join==="function"){for(var e=[],f=0;f<d.length;++f){var g=Ye(d[f]);g!=null&&e.push(g)}d=e.length==0?null:e.join(",")}else d=Ye(d);(e=Ye(c))&&d!=null&&b.push(e+"="+d)}return b.join(";")}function $e(a){return typeof a!="number"&&typeof a!="string"?"":We(a.toString())} 
function af(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain&&(!b.google_gcl_cookie_prefix||!/^_ycl/.test(b.google_gcl_cookie_prefix)))return"";var c="",d=bf(b),e={};b.google_gcl_cookie_domain&&(e.domain=b.google_gcl_cookie_domain);b.google_gcl_cookie_flags&&(e.flags=b.google_gcl_cookie_flags);b.google_gcl_cookie_max_age_seconds!=null&&(e.U=b.google_gcl_cookie_max_age_seconds);b.google_gcl_cookie_path&&(e.path=b.google_gcl_cookie_path);d&&(e.prefix=d); 
if(cf(b)&&b.R)var f=b.O===void 0;else ye.test(a.location.host)?f=!(De(a,"gclaw")||De(a,"gac")):(f=Math.max(ue("aw",d),ve(Y(V())?Qd():{})),f=Math.max(ue("gb",d),ve(Y(V())?Qd("_gac_gb",!0):{}))>f);if(f){if(b.O!==void 0)return b.O;c=Ie(a,d||void 0);f=b.google_conversion_label;var g=Ke(f,e,b.R);c=Z("gclgb",c)+(g?Z("mcov",g):"");if(d)return b.O=c;d=Ce(a,f,e,b.R);a=d.ka;d=d.la;c+=(a?Z("gacgb",a):"")+(d?Z("gacmcov",d):"");return b.O=c}if(d)return b=He(a,d),Z("gclaw",b);(b=He(a))&&(c=Z("gclaw",b));b=Be(a, 
Y(V())?Qd():{},ze);return c+(b?Z("gac",b):"")}function df(a){function b(d){try{return decodeURIComponent(d),!0}catch(e){return!1}}a=a?a.title:"";if(a==void 0||a=="")return"";a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)} 
function ef(a,b,c,d){var e="https://",f=c.google_conversion_type==="landing"?"/extclk":"/";switch(d){default:return"";case 2:case 3:var g="googleads.g.doubleclick.net/";var h="pagead/viewthroughconversion/";break;case 1:g="www.google.com/";h="pagead/1p-conversion/";break;case 6:g="www.google.com/";h="ccm/conversion/";break;case 0:g=c.google_conversion_domain||"www.googleadservices.com/";h="pagead/conversion/";break;case 5:g=c.google_conversion_domain||"www.googleadservices.com/";h="ccm/conversion/"; 
break;case 4:g=(g=c.google_gtm_experiments)&&g.apcm?"www.google.com":g&&g.capiorig?c.google_conversion_id+".privacysandbox.googleadservices.com":"www.google.com/",h="pagead/privacysandbox/conversion/"}sb&&c.google_transport_url&&(g=c.google_transport_url);g[g.length-1]!=="/"&&(g+="/");if(g.indexOf("http://")===0||g.indexOf("https://")===0)e="";e=[e,g,h,We(c.google_conversion_id),f,"?random=",We(c.google_conversion_time)].join("");f=Z("cv",c.google_conversion_js_version);g=Z("fst",c.google_conversion_first_time); 
h=Z("num",c.google_conversion_snippets);var k=Z("fmt",c.google_conversion_format),l=c.google_remarketing_only?Z("userId",c.google_user_id):"";var m=c.google_tag_for_child_directed_treatment;m=m==null||m!==0&&m!==1?"":Z("tfcd",m);var p=c.google_tag_for_under_age_of_consent;p=p==null||p!==0&&p!==1?"":Z("tfua",p);var u=c.google_allow_ad_personalization_signals;u=u===!1?Z("npa",1):u===!0?Z("npa",0):"";var w=c.google_restricted_data_processing;w=ub?w===!0?Z("rdp",1):w===!1?Z("rdp",0):"":"";var F=Z("value", 
c.google_conversion_value),Q=Z("currency_code",c.google_conversion_currency),ra=Z("label",c.google_conversion_label),W=Z("oid",c.google_conversion_order_id),$a=Z("bg",c.google_conversion_color);a:{var G=c.google_conversion_language;if(G!=null){G=G.toString();if(2==G.length){G=Z("hl",G);break a}if(5==G.length){G=Z("hl",G.substring(0,2))+Z("gl",G.substring(3,5));break a}}G=""}var B=Z("guid","ON"),Hb=!c.google_conversion_domain&&"GooglemKTybQhCsO"in ua&&typeof ua.GooglemKTybQhCsO=="function"?Z("resp", 
"GooglemKTybQhCsO"):"",Za=Z("disvt",c.google_disable_viewthrough),tf=Z("eid",Ab().join());var Fa=[];if(a){var Ga=a.screen;Ga&&(Fa.push(Z("u_h",Ga.height)),Fa.push(Z("u_w",Ga.width)))}Fa=Fa.join("");Ga=ff();var vf=Z("ig",/googleadservices\.com/.test("www.googleadservices.com")?1:0);var na=Ze(c.google_custom_params);var bb=Ze();na=na.concat(na.length>0&&bb.length>0?";":"",bb);na=na==""?"":"&".concat("data=",encodeURIComponent(na));bb=af(b,c);if(!E||H(23)!="658953496"&&H(23)!="658953495"||c.google_read_gcl_cookie_opt_out|| 
c.google_conversion_domain||c.google_remarketing_only)var ca="";else{ca=bf(c);var x={};c.google_gcl_cookie_domain&&(x.domain=c.google_gcl_cookie_domain);c.google_gcl_cookie_flags&&(x.flags=c.google_gcl_cookie_flags);c.google_gcl_cookie_max_age_seconds!=null&&(x.U=c.google_gcl_cookie_max_age_seconds);c.google_gcl_cookie_path&&(x.path=c.google_gcl_cookie_path);ca&&(x.prefix=ca);var J=!1;J=J===void 0?!0:J;var y=pd(x.prefix);if(jd[y])ld(x),md(x);else if(od(y,x.path,x.domain)){y=kd[pd(x.prefix)]||{id:void 0, 
J:void 0};if(J){J=pd(x.prefix);var z=jd[J];if(z){var X=z.split(".");if(X.length===2&&(X=Number(X[1])||0)){var C=z;P(16)&&y.ba?C=z+"."+(y.sessionId||"-.-")+"."+(y.J?y.J:Math.floor(I()/1E3))+"."+y.ba+"."+(y.P?y.P:Math.floor(I()/1E3)):y.sessionId&&(C=z+"."+y.sessionId+"."+(y.J?y.J:Math.floor(I()/1E3)));nd(J,C,x,X*1E3)}}}ld(x);md(x)}else{b:{z=Dc(M.location.href);if((X=zc(z,"host",!1))&&X.match(xc)&&(z=zc(z,"path"))&&(z=z.split("auiddc="),z.length>1)){z=z[1].split(";")[0].split("?")[0];break b}z=void 0}z? 
(L(17),jd[y]=z):J&&(nd(pd(x.prefix),[String(Math.round(Math.random()*2147483647)),Math.round(I()/1E3)].join("."),x),od(y,x.path,x.domain),ld(x,!0),md(x,!0))}ca=(ca=jd[pd(ca)])?Z("auid",ca):""}z=c.google_conversion_page_url;x=c.google_conversion_referrer_url;J="";if(b){y=a.top==a?0:(y=a.location.ancestorOrigins)?y[y.length-1]==a.location.origin?1:2:xa(a.top)?1:2;z=z?z:y==1?a.top.location.href:a.location.href;X="";E&&D(["509562772","509562773"],ob,21);if(E&&(H(21)=="509562773"||H(21)=="509562772")){for(var K, 
sa=C=a;C&&C!==C.parent;)C=C.parent,xa(C)&&(sa=C);K=sa;C=K.location.href;if(K===K.top)var N={url:C,oa:!0};else{sa=!1;var Nb=K.document;Nb&&Nb.referrer&&(C=Nb.referrer,K.parent===K.top&&(sa=!0));(K=K.location.ancestorOrigins)&&(K=K[K.length-1])&&((N=C)==null?void 0:N.indexOf(K))===-1&&(sa=!1,C=K);N={url:C,oa:sa}}N.url&&z!==N.url&&(X=N.url)}J+=Z("frm",y);J+=Z("url",Xe(z));J+=Z("ref",Xe(x||b.referrer));J+=Z("top",Xe(X))}a=[f,g,h,k,l,m,p,u,w,F,Q,ra,W,$a,G,B,Hb,Za,tf,Fa,Ga,vf,na,bb,ca,J,df(b),gf(c.google_additional_params), 
gf(c.google_remarketing_only?{}:c.google_additional_conversion_params),"&hn="+We("www.googleadservices.com"),hf(a),jf(a)].join("");b=zb();a+=b.length>0?"&debug_experiment_id="+b:"";if(!c.google_remarketing_only&&!c.google_conversion_domain){b=[Z("mid",c.google_conversion_merchant_id),Z("fcntr",c.google_basket_feed_country),Z("flng",c.google_basket_feed_language),Z("dscnt",c.google_basket_discount),Z("bttype",c.google_basket_transaction_type)].join("");if(c)if(N=c.google_conversion_items){f=[];g=0;for(h=N.length;g< 
h;g++)k=N[g],l=[],k&&(l.push($e(k.value)),l.push($e(k.quantity)),l.push($e(k.item_id)),l.push($e(k.start_date)),l.push($e(k.end_date)),f.push("("+l.join("*")+")"));N=f.length>0?"&item="+f.join(""):""}else N="";else N="";b=[a,b,N].join("");a=b.length>4E3?[a,Z("item","elngth")].join(""):b}e+=a;d===1||d===6?e+=[Z("gcp",1),Z("sscte",1),Z("ct_cookie_present",1)].join(""):d==3&&(e+=Z("gcp",1),e+=Z("ct_cookie_present",1));tb&&(d=Le(),d!==void 0&&(e+=Z("us_privacy",d||"error")));cf(c)&&(e=c.R?e+Z("gbcov", 
1):e+Z("gbcov",0));return e}function kf(a,b,c,d,e,f,g){return'<iframe name="'+a+'"'+(g?' id="'+g+'"':"")+' title="'+b+'" width="'+d+'" height="'+e+'"'+(c?' src="'+c+'"':"")+' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"'+(f?' style="display:none"':"")+' scrolling="no"></iframe>'} 
function lf(a){return{ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"} 
function mf(a,b,c){function d(h,k,l,m,p){m=m?' style="display:none"':"";return"<img "+(p&&Eb()?"attributionsrc ":"")+'height="'+l+'" width="'+k+'" border="0" alt="" src="'+h+'"'+m+" />"}Db()&&Lb(2);var e="";c.google_remarketing_only&&c.google_enable_display_cookie_match&&!Pb&&(E&&D(["376635470","376635471"],lb,2),e=c.google_remarketing_only&&c.google_enable_display_cookie_match&&!Pb&&E&&H(2)=="376635471"?kf("google_cookie_match_frame","Google cookie match frame","https://bid.g.doubleclick.net/xbbe/pixel?d=KAE", 
1,1,!0,null):"");c.google_remarketing_only&&!c.google_conversion_domain&&E&&D(["759238990","759238991"],rb,13);!c.google_remarketing_only||c.google_conversion_domain||E&&(H(14)=="759248991"||H(14)=="759248990")||E&&D(["759248990","759248991"],qb,14);c.google_conversion_linker!==!1&&Je(c.google_gcl_cookie_prefix);var f=ef(a,b,c,c.google_remarketing_only?2:0);if(c.google_conversion_format==0&&c.google_conversion_domain==null)return'<a href="https://services.google.com/sitestats/'+(lf(c.google_conversion_language)+ 
"?cid="+We(c.google_conversion_id))+'" target="_blank">'+d(f,135,27,!1,!1)+"</a>"+e;if(c.google_conversion_snippets!==void 0&&c.google_conversion_snippets>1||c.google_conversion_format==3){var g=f;c.google_conversion_domain==null&&(g=c.google_conversion_format==3?f:Bd(f,"fmt",3));f=void 0;Eb()&&!c.google_remarketing_only&&(f={attributionsrc:""});return nf(a,b,c,g,f)?e:d(g,1,1,!0,!c.google_remarketing_only)+e}g=null;!c.google_conversion_domain&&nf(a,b,c,f)&&(g="goog_conv_iframe",f="");return kf("google_conversion_frame", 
"Google conversion frame",f,c.google_conversion_format==2?200:300,c.google_conversion_format==2?26:13,!1,g)+e}function nf(a,b,c,d,e){if(c.google_conversion_domain)return!1;try{return!!Cd(a,b,d,null,void 0,e)}catch(f){return!1}} 
function of(a){if(a.google_conversion_type==="landing"||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets=typeof a.google_conversion_snippets==="number"&&a.google_conversion_snippets>0?a.google_conversion_snippets+1:1;a.google_conversion_first_time===void 0&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version= 
"9";a.google_conversion_format!=0&&a.google_conversion_format!=1&&a.google_conversion_format!=2&&a.google_conversion_format!=3&&(a.google_conversion_format=3);a.google_enable_display_cookie_match!==!1&&(a.google_enable_display_cookie_match=!0);return!0}function pf(a){for(var b=0;b<Ue.length;b++)a[Ue[b]]=null}function qf(a){for(var b={},c=0;c<Ue.length;c++)b[Ue[c]]=a[Ue[c]];for(c=0;c<Ve.length;c++)b[Ve[c]]=a[Ve[c]];return b} 
function ff(){var a="";Db()&&(a=Ob().map(function(b){return b.join("-")}).join("_"));return Z("li",a)}function hf(a){if(!vb||!a.__gsaExp||!a.__gsaExp.id)return"";a=a.__gsaExp.id;if(!Qb(a))return"";try{var b=Number(a());return isNaN(b)?"":Z("gsaexp",b)}catch(c){return""}} 
function jf(a){function b(d,e){e!=null&&c.push(d+"="+encodeURIComponent(e))}if(!Cb())return"";a=Pe(a);if(!a)return"";var c=[];b("&uaa",a.architecture);b("&uab",a.bitness);b("&uam",a.model);b("&uap",a.platform);b("&uapv",a.platformVersion);a.wow64!=null&&b("&uaw",a.wow64?"1":"0");a.fullVersionList&&b("&uafvl",a.fullVersionList.map(function(d){return encodeURIComponent(d.brand||"")+";"+encodeURIComponent(d.version||"")}).join("|"));return c.join("")} 
function gf(a){if(!a)return"";var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=Z(c,a[c]));return b}function cf(a){return(a=a.google_gtm_experiments)&&a.gbcov?!0:!1}function bf(a){return a.google_gcl_cookie_prefix&&a.google_gcl_cookie_prefix!=="_gcl"&&Se.test(a.google_gcl_cookie_prefix)?a.google_gcl_cookie_prefix:""} 
function rf(a,b){var c;if(c=!b.google_remarketing_only)if(b.google_transport_url||!E||H(19)!="375603261"&&H(19)!="375603260")c=!1;else{b:{if(!Te){jb("AzMBwcG8UIaKM1GV43UaxMDFsS7hsiLx0FXw9ULTOHJRGxkUVw+UPCxlzz5CudOm+WnidygXLcAHmad6rC6C9QEAAACUeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJBdHRyaWJ1dGlvblJlcG9ydGluZ0Nyb3NzQXBwV2ViIiwiZXhwaXJ5IjoxNzE0NTIxNTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d",a);if(!Me()&&!jb(r("www.googleadservices.com","endsWith").call("www.googleadservices.com","google.com")?"":"A2kc5o2ErHAbqJvF2MHSdYtnc2Bp3n6Jn2kNeko6SgHH6zXBHn0+4BbAW2No9ylVJMkzJAPwMqCVHqXm+IF1DgQAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2OTUxNjc5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",a)){a=!1;break b}Te=!0}a=Me()}c=a}c&&(a=b.google_additional_conversion_params||{},c=b.google_gtm_experiments,a.capi=c&&c.apcm?"2":"1",b.google_additional_conversion_params= 
a)};var sf=ka(["https://www.googletagmanager.com/debug/bootstrap"]),uf=!1,wf=document.currentScript&&document.currentScript.src||""; 
function xf(a,b,c){try{if(!uf&&(uf=!0,!c.google_gtm)){var d=void 0,e=void 0,f=zd(a.location.href,"gtm_debug");yf(f)&&(d=2);d||b.referrer.indexOf("https://tagassistant.google.com/")!==0||(d=3);!d&&Oa(b.cookie.split("; "),"__TAG_ASSISTANT=x")>=0&&(d=4);d||(e=b.documentElement.getAttribute("data-tag-assistant-present"),yf(e)&&(d=5));if(d){var g="AW-"+(c.google_conversion_id||"");if(!a["google.tagmanager.debugui2.queue"]){a["google.tagmanager.debugui2.queue"]=[];var h=gb(sf),k=new q.Map([["id",g],["src", 
"LEGACY"],["cond",d]]),l=Ia(h).toString(),m=l.split(/[?#]/),p=/[?]/.test(l)?"?"+m[1]:"";var u=hb(m[0],p,/[#]/.test(l)?"#"+(p?m[2]:m[1]):"",k);var w=kb("SCRIPT",b);Na(w,u);var F=b.getElementsByTagName("script")[0];F&&F.parentNode&&F.parentNode.insertBefore(w,F)}a["google.tagmanager.debugui2.queue"].push({messageType:"LEGACY_CONTAINER_STARTING",data:{id:g,scriptSource:wf}})}}}catch(Q){}}function yf(a){if(a==null||a.length===0)return!1;a=Number(a);var b=Date.now();return a<b+3E5&&a>b-9E5};function zf(a){if(a.prerendering)return 3;var b;return(b={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""])!=null?b:0}function Af(a){var b;a.visibilityState?b="visibilitychange":a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState&&(b="webkitvisibilitychange");return b}function Bf(a,b){if(zf(b)===3)return!1;a();return!0} 
function Cf(a,b){function c(){!f&&Bf(a,b)&&(f=!0,typeof b.removeEventListener==="function"&&b.removeEventListener(g,c,!1))}var d=d===void 0?!1:d;if(!Bf(a,b))if(d){var e=function(){typeof b.removeEventListener==="function"&&b.removeEventListener("prerenderingchange",e,!1);a()};typeof b.addEventListener==="function"&&b.addEventListener("prerenderingchange",e,!1)}else{var f=!1,g=Af(b);g&&typeof b.addEventListener==="function"&&b.addEventListener(g,c,!1)}};function Df(a){var b=r(Object,"assign").call(Object,{},a);a=a.id;b=(delete b.id,b);if(r(Object,"keys").call(Object,b).length)throw Error("Invalid attribute(s): "+r(Object,"keys").call(Object,b));return eb({id:a})};E=new function(){var a=[];var b=0,c;for(c in Bb)a[b++]=Bb[c];a=a===void 0?[]:a;this.Z={};this.v={};for(b=0;b<a.length;++b)this.v[a[b]]=""};D(["466465925","466465926"],nb,20);Cb()&&Re();E&&D(["592230570","592230571"],mb,16);Db()&&(Lb(1),Mb()); 
function Ef(a,b,c,d){function e(m,p,u){u=u===void 0?function(){}:u;var w=new Image;w.onload=m;w.onerror=u;w.src=p}function f(){--g;if(g<=0){var m=rd(a,!1),p=m[b];p&&(delete m[b],m=p[0],typeof m==="function"&&m())}}d=d===void 0?[]:d;var g=c.length+1;if(c.length===2){var h=c[0],k=c[1];xd(h,0,"rmt_tld",h.search(yd))>=0&&xd(h,0,"ipr",h.search(yd))>=0&&!k.match(vd)[6]&&(k+=wd(h),c[1]=Bd(k,"rmt_tld","1"))}for(h={H:0};h.H<c.length;h={H:h.H},h.H++){k=c[h.H];var l=zd(k,"fmt");switch(Number(l)){case 1:case 2:(l= 
a.document.getElementById("goog_conv_iframe"))&&!l.src?ec(k,f,l):e(f,k);break;case 4:Cd(a,a.document,k,f);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(k,"")){f();break}else k=Bd(k,"sendb",2);k=Bd(k,"fmt",3);e(f,k);break;default:l=void 0,d&&d[h.H]&&(l=function(m){return function(){ic(d[m.H])&&f()}}(h)),e(f,k,l)}}f()} 
for(var Ff=["GooglemKTybQhCsO"],Gf=ua,Hf;Ff.length&&(Hf=Ff.shift());)Ff.length||Ef===void 0?Gf[Hf]&&Gf[Hf]!==Object.prototype[Hf]?Gf=Gf[Hf]:Gf=Gf[Hf]={}:Gf[Hf]=Ef; 
(function(a,b,c){if(a){xf(a,c,a);try{if(of(a)){var d=qf(a);E&&D(["375603260","375603261"],wb?1:0,19);E&&D(["512247838","512247839"],xb?1:0,22);E&&D(["658953495","658953496"],pb,23);if(zf(c)==3){var e="google_conversion_"+Math.floor(Math.random()*1E9);Pa(c,Df({id:e}));Cf(function(){try{rf(c,d);var f=c.getElementById(e);if(f){var g=Xb(mf(a,c,d));if(f.nodeType===1&&/^(script|style)$/i.test(f.tagName))throw Error("");f.innerHTML=Ma(g)}}catch(h){}},c)}else rf(c,d),Pa(c,Xb(mf(a,c,d)))}}catch(f){}pf(a)}})(window, 
navigator,document);}).call(this);


/* --- Inline JS --- */

    ! function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1060982203926494');
    fbq('track', 'PageView');
  

/* --- Inline JS --- */

    WEBFORM.init(["myform", 531]);
    WEBFORM.loadForm();
  

/* --- Inline JS --- */

    function getParam(p) {
      var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    function getExpiryRecord(value) {
      var expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 day expiry in milliseconds

      var expiryDate = new Date().getTime() + expiryPeriod;
      return {
        value: value,
        expiryDate: expiryDate
      };
    }

    function addGclid() {
      var gclidParam = getParam('gclid');
      var gclidFormFields = ['gclid_field', 'gclid_field1']; // all possible gclid form field ids here
      var gclidRecord = null;
      var currGclidFormField;

      var gclsrcParam = getParam('gclsrc');
      var isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1;

      gclidFormFields.forEach(function(field) {
        if (document.getElementById(field)) {
          currGclidFormField = document.getElementById(field);
        }
      });

      if (gclidParam && isGclsrcValid) {
        gclidRecord = getExpiryRecord(gclidParam);
        localStorage.setItem('gclid', JSON.stringify(gclidRecord));
      }

      var gclid = gclidRecord || JSON.parse(localStorage.getItem('gclid'));
      var isGclidValid = gclid && new Date().getTime() < gclid.expiryDate;

      if (currGclidFormField && isGclidValid) {
        currGclidFormField.value = gclid.value;
      }
    }

    window.addEventListener('load', addGclid);
  

/* --- Inline JS --- */

    const cookieBox = document.querySelector(".wrapper"),
      buttons = document.querySelectorAll(".button");

    const executeCodes = () => {
      //if cookie contains codinglab it will be returned and below of this code will not run
      if (document.cookie.includes("codinglab")) return;
      cookieBox.classList.add("show");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          cookieBox.classList.remove("show");

          //if button has acceptBtn id
          if (button.id == "acceptBtn") {
            //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
            document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
          }
        });
      });
    };

    //executeCodes function will be called on webpage load
    window.addEventListener("load", executeCodes);
  

/* --- Inline JS --- */

    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal__overlay');
    const closeBtn = document.querySelector('.modal__close-btn');
    const discountBtn = document.querySelector('.modal__button');
    // ---- ---- cookies ---- ---- //
    const createCookie = () => {
      let maxAge = ';max-age=10';
      let path = ';path=/';
      document.cookie = 'modalpopup=displayed' + maxAge + path;
    };

    // ---- ---- add active and cookie ---- ---- //
    const displayModal = () => {
      if (document.cookie.indexOf('modalpopup') == -1) {
        modal.classList.add('active');
        modalOverlay.classList.add('active');
        createCookie();
      }
    };

    setTimeout(() => {
      displayModal();
    }, 3000);

    // ---- ---- remove active ---- ---- //
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      modalOverlay.classList.remove('active');
    });
    discountBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      modalOverlay.classList.remove('active');
    });
  

