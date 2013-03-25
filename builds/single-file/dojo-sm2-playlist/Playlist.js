//>>built
define("dojo-sm2-playlist/Playlist",["dojo/_base/declare","dojo/_base/lang","dojo/Evented"],function(b,f,g){var h=b([g],{id:null,constructor:function(a,d){var b=this,c=0,e="onbufferchange onconnect ondataerror onfinish onload onpause onplay onresume onsuspend onstop onid3 whileloading whileplaying".split(" ");f.mixin(this,a);for(c=0;c<e.length;c+=1)d[e[c]]=function(a){return function(){b.emit(a,{track:b})}}(e[c]);this.id=d.id;soundManager.createSound(d)}});return b([],{tracks:[],index:-1,onready:function(){soundManager.onready.apply(soundManager,
arguments)},addTrack:function(a,b){this.tracks.push(new h(a,b));this.index=0>this.index?0:this.index},getTrack:function(a){return this.tracks[a]},getTracks:function(){return this.tracks},play:function(){this.tracks.length&&this.getCurrentSound().play()},previous:function(){this.tracks.length&&(this.getCurrentSound().stop(),this.index=0===this.index?this.tracks.length-1:this.index-1,this.getCurrentSound().play())},next:function(){this.tracks.length&&(this.getCurrentSound().stop(),this.index=this.index===
this.tracks.length-1?0:this.index+1,this.getCurrentSound().play())},pause:function(){this.tracks.length&&this.getCurrentSound().pause()},isPlaying:function(){var a=this.getCurrentSound();return a?a.playState&&!a.paused:!1},getCurrentSound:function(){if(this.tracks.length)return soundManager.getSoundById(this.getCurrentTrack().id)},getCurrentTrack:function(){if(this.tracks.length)return this.getTrack(this.index)},getCurrentPosition:function(){if(this.tracks.length)return this.index+1}})});