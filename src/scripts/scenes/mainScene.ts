import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'


var directions = {
  west: { offset: 0, x: -2, y: 0, opposite: 'east' },
  northWest: { offset: 32, x: -2, y: -1, opposite: 'southEast' },
  north: { offset: 64, x: 0, y: -2, opposite: 'south' },
  northEast: { offset: 96, x: 2, y: -1, opposite: 'southWest' },
  east: { offset: 128, x: 2, y: 0, opposite: 'west' },
  southEast: { offset: 160, x: 2, y: 1, opposite: 'northWest' },
  south: { offset: 192, x: 0, y: 2, opposite: 'north' },
  southWest: { offset: 224, x: -2, y: 1, opposite: 'northEast' }
};

var anims = {
  idle: {
    startFrame: 0,
    endFrame: 4,
    speed: 0.2
  },
  walk: {
    startFrame: 4,
    endFrame: 12,
    speed: 0.15
  },
  attack: {
    startFrame: 12,
    endFrame: 20,
    speed: 0.11
  },
  die: {
    startFrame: 20,
    endFrame: 28,
    speed: 0.2
  },
  shoot: {
    startFrame: 28,
    endFrame: 32,
    speed: 0.1
  }
};
const skeletons = [];

let tileWidthHalf;
let tileHeightHalf;

let d = 0;

let scene;

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  preload ()
  {
    this.load.json('map', 'assets//iso/isometric-grass-and-water.json');
    this.load.spritesheet('tiles', 'assets/iso/isometric-grass-and-water.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('skeleton', 'assets/img/skeleton.png', { frameWidth: 128, frameHeight: 128 });
    this.load.image('house', 'assets/img/house.png');
  }

  create() {
    new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)

    // LOAD MAP
    scene = this;

    this.buildMap();
    this.placeHouses();

    // TODO: make it a real typescript gameobject (only src needed: sprites are available in assets)
    // skeletons.push(this.add.existing(new Skeleton(this, 240, 290, 'walk', 'southEast', 100)));
    // skeletons.push(this.add.existing(new Skeleton(this, 100, 380, 'walk', 'southEast', 230)));
    // skeletons.push(this.add.existing(new Skeleton(this, 620, 140, 'walk', 'south', 380)));
    // skeletons.push(this.add.existing(new Skeleton(this, 460, 180, 'idle', 'south', 0)));
    //
    // skeletons.push(this.add.existing(new Skeleton(this, 760, 100, 'attack', 'southEast', 0)));
    // skeletons.push(this.add.existing(new Skeleton(this, 800, 140, 'attack', 'northWest', 0)));
    //
    // skeletons.push(this.add.existing(new Skeleton(this, 750, 480, 'walk', 'east', 200)));
    //
    // skeletons.push(this.add.existing(new Skeleton(this, 1030, 300, 'die', 'west', 0)));
    //
    // skeletons.push(this.add.existing(new Skeleton(this, 1180, 340, 'attack', 'northEast', 0)));
    //
    // skeletons.push(this.add.existing(new Skeleton(this, 1180, 180, 'walk', 'southEast', 160)));
    //
    // skeletons.push(this.add.existing(new Skeleton(this, 1450, 320, 'walk', 'southWest', 320)));
    // skeletons.push(this.add.existing(new Skeleton(this, 1500, 340, 'walk', 'southWest', 340)));
    // skeletons.push(this.add.existing(new Skeleton(this, 1550, 360, 'walk', 'southWest', 330)));

    // Todo: not sure if we actually need this.
    // this.cameras.main.setSize(1600, 600);
  }

  buildMap ()
  {
    //  Parse the data out of the map
    const data = scene.cache.json.get('map');

    const tilewidth = data.tilewidth;
    const tileheight = data.tileheight;

    tileWidthHalf = tilewidth / 2;
    tileHeightHalf = tileheight / 2;

    const layer = data.layers[0].data;

    const mapwidth = data.layers[0].width;
    const mapheight = data.layers[0].height;

    const centerX = mapwidth * tileWidthHalf;
    const centerY = 16;

    let i = 0;

    for (let y = 0; y < mapheight; y++)
    {
      for (let x = 0; x < mapwidth; x++)
      {
        const id = layer[i] - 1;

        const tx = (x - y) * tileWidthHalf;
        const ty = (x + y) * tileHeightHalf;

        const tile = scene.add.image(centerX + tx, centerY + ty, 'tiles', id);

        tile.depth = centerY + ty;

        i++;
      }
    }
  }

  placeHouses ()
  {
    const house_1 = scene.add.image(240, 370, 'house');
    house_1.depth = house_1.y + 86;

    const house_2 = scene.add.image(1300, 290, 'house');
    house_2.depth = house_2.y + 86;
  }





  update() {
    this.fpsText.update()


    // skeletons.forEach(function (skeleton) {
    //   skeleton.update();
    // });

    if (d)
    {
      this.cameras.main.scrollX -= 0.5;

      if (this.cameras.main.scrollX <= 0)
      {
        d = 0;
      }
    }
    else
    {
      this.cameras.main.scrollX += 0.5;

      if (this.cameras.main.scrollX >= 800)
      {
        d = 1;
      }
    }



  }
}
