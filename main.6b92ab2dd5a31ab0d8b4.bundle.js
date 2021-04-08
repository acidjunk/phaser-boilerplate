/*! For license information please see main.6b92ab2dd5a31ab0d8b4.bundle.js.LICENSE.txt */
(()=>{var e,s={197:(e,s,t)=>{"use strict";t(260);class a extends Phaser.Physics.Arcade.Sprite{constructor(e,s,t){super(e,s,t,"phaser-logo"),e.add.existing(this),e.physics.add.existing(this),this.setCollideWorldBounds(!0).setBounce(.6).setInteractive().on("pointerdown",(()=>{this.setVelocityY(-400)}))}}class r extends Phaser.GameObjects.Text{constructor(e){super(e,10,10,"",{color:"black",fontSize:"28px"}),e.add.existing(this),this.setOrigin(0)}update(){this.setText(`fps: ${Math.floor(this.scene.game.loop.actualFps)}`)}}let o,i,c,n=0;class h extends Phaser.Scene{constructor(){super({key:"MainScene"})}preload(){this.load.json("map","assets//iso/isometric-grass-and-water.json"),this.load.spritesheet("tiles","assets/iso/isometric-grass-and-water.png",{frameWidth:64,frameHeight:64}),this.load.spritesheet("skeleton","assets/img/skeleton.png",{frameWidth:128,frameHeight:128}),this.load.image("house","assets/img/house.png")}create(){new a(this,this.cameras.main.width/2,0),this.fpsText=new r(this),this.add.text(this.cameras.main.width-15,15,`Phaser v${Phaser.VERSION}`,{color:"#000000",fontSize:"24px"}).setOrigin(1,0),c=this,this.buildMap(),this.placeHouses()}buildMap(){const e=c.cache.json.get("map"),s=e.tilewidth,t=e.tileheight;o=s/2,i=t/2;const a=e.layers[0].data,r=e.layers[0].width,n=e.layers[0].height,h=r*o;let l=0;for(let e=0;e<n;e++)for(let s=0;s<r;s++){const t=a[l]-1,r=(s-e)*o,n=(s+e)*i;c.add.image(h+r,16+n,"tiles",t).depth=16+n,l++}}placeHouses(){const e=c.add.image(240,370,"house");e.depth=e.y+86;const s=c.add.image(1300,290,"house");s.depth=s.y+86}update(){this.fpsText.update(),n?(this.cameras.main.scrollX-=.5,this.cameras.main.scrollX<=0&&(n=0)):(this.cameras.main.scrollX+=.5,this.cameras.main.scrollX>=800&&(n=1))}}class l extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){this.load.image("phaser-logo","assets/img/phaser-logo.png")}create(){this.scene.start("MainScene")}}const d={type:Phaser.AUTO,backgroundColor:"#ffffff",scale:{parent:"phaser-game",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:1280,height:720},scene:[l,h],physics:{default:"arcade",arcade:{debug:!1,gravity:{y:400}}}};window.addEventListener("load",(()=>{new Phaser.Game(d)}))},204:()=>{console.log("%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template","background: #ff0000","background: #ffff00","background: #00ff00","background: #00ffff","color: #fff; background: #000000;","background: none")}},t={};function a(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={exports:{}};return s[e].call(o.exports,o,o.exports,a),o.exports}a.m=s,e=[],a.O=(s,t,r,o)=>{if(!t){var i=1/0;for(h=0;h<e.length;h++){for(var[t,r,o]=e[h],c=!0,n=0;n<t.length;n++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](t[n])))?t.splice(n--,1):(c=!1,o<i&&(i=o));c&&(e.splice(h--,1),s=r())}return s}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[t,r,o]},a.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={179:0};a.O.j=s=>0===e[s];var s=(s,t)=>{var r,o,[i,c,n]=t,h=0;for(r in c)a.o(c,r)&&(a.m[r]=c[r]);for(n&&n(a),s&&s(t);h<i.length;h++)o=i[h],a.o(e,o)&&e[o]&&e[o][0](),e[i[h]]=0;a.O()},t=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))})(),a.O(void 0,[216],(()=>a(197)));var r=a.O(void 0,[216],(()=>a(204)));r=a.O(r)})();