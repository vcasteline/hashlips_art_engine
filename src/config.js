const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    //TJ
    growEditionSizeTo: 190,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
    ],
  },
  {
    //TJx
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
      { name: "Extras" },

    ],
  },
  {  //HXhW
    growEditionSizeTo: 245,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
    ],
  },
  {
    //HXhWx
    growEditionSizeTo: 250,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
      { name: "Extras" },
    ],
  }, 
  {
    //H
    growEditionSizeTo: 400,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
    ],
  },
  {
    //Hc
    growEditionSizeTo: 450,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Chains" },

    ],
  },
  {
    //TJXhW
    growEditionSizeTo: 480,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
      { name: "Face Extras" },
      { name: "Horns" },
    ],
  },
  {
    //TJXhW
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
      { name: "Face Extras" },
      { name: "Horns" },
      { name: "Chains" },
      
    ],
  },
  {
    //TJ
    growEditionSizeTo: 680,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
    ],
  },
  {
    //TJc
    growEditionSizeTo: 700,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
      { name: "Chains" },

    ],
  },
  {
     //T
     growEditionSizeTo: 780,
     layersOrder: [
       { name: "Backgrounds" },
       { name: "Skins" },
       { name: "Eyes" },
       { name: "Hair" },
       { name: "Tshirts" },
     ],

  },
  {
    //Tx
    growEditionSizeTo: 790,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Extras" },

    ],

  },
  {
    //Txc
    growEditionSizeTo: 800,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Extras" },
      { name: "Chains" },

    ],

  },
  {
    //Ice
    growEditionSizeTo: 805,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Ice Skins" },
      { name: "Eyewear" },
      { name: "Hair" },
      { name: "Headwear" },
      { name: "Hoodies" },
      { name: "Face Extras" },
    ],

  },
  {
    //HXhW
    growEditionSizeTo: 855,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
    ],

  },
  {
    //CT
    growEditionSizeTo: 955,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Headwear" },
      { name: "Tshirts" },
    ],

  },
  {
    //CTc
    growEditionSizeTo: 1055,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Headwear" },
      { name: "Tshirts" },
      { name: "Chains" },

    ],

  },
  { 
    //UXhW
    growEditionSizeTo: 1205,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "UpHoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
    ],

  },
  {//UXhW
    growEditionSizeTo: 1255,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "UpHoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
      { name: "Chains" },

    ],

  },
  { //UXx
    growEditionSizeTo: 1355,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "UpHoodies" },
      { name: "Face Extras" },
      { name: "Extras" },

    ],

  },
  {//Demon
    growEditionSizeTo: 1360,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Demon Skins" },
      { name: "Demon Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
    ],

  },
  {//Demon 2
    growEditionSizeTo: 1365,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Demon Skins" },
      { name: "Demon Eyes" },
      { name: "Hair" },
      { name: "Headwear" },
      { name: "Tshirts" },
      { name: "Horns" },
    ],

  },
  {//ECTXhW
    growEditionSizeTo: 1400,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Tshirts" },
      { name: "Face Extras" },
      { name: "Horns" },
     
    ],

  },
  { //ECHX
    growEditionSizeTo: 1500,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Hoodies" },
      { name: "Face Extras" },
    ],

  },
  {//ECHXc
    growEditionSizeTo: 1530,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Chains" },

    ],

  },
  {//ECTXW
    growEditionSizeTo: 1600,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Tshirts" },
      { name: "Face Extras" },
      
    ],

  },
  { //ECTXh
    growEditionSizeTo: 1650,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Tshirts" },
      { name: "Face Extras" },
      { name: "Horns" },
    ],

  },
  {
    //TJhW
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
      { name: "Horns" },
     
      
    ],

  },
  {//TJhWc
    growEditionSizeTo: 2050,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
      { name: "Horns" },
      { name: "Chains" },

    ],

  },
  {//HX
    growEditionSizeTo: 2400,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Face Extras" },
    ],

  },
  {//HXx
    growEditionSizeTo: 2430,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Chains" },
    ],

  },
  { //HXx
    growEditionSizeTo: 2450,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Chains" },
      { name: "Extras" },

    ],

  },
  {//HhW
    growEditionSizeTo: 2600,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Horns" },
      
    ],

  },
  {//HW
    growEditionSizeTo: 2800,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
    
    ],

  },
  {//HWx
    growEditionSizeTo: 2823,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Extras" },

    ],

  },
  {
    //Hh
    growEditionSizeTo: 2923,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Horns" },
    ],


  },
  {//TJXhW
    growEditionSizeTo: 3123,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
      { name: "Face Extras" },
      { name: "Horns" },
    
    ],

  },
  {//IcehW
    growEditionSizeTo: 3133,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Ice Skins" },
      { name: "Eyewear" },
      { name: "Hair" },
      { name: "Headwear" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
    
    ],

  },
  {//TJXW
    growEditionSizeTo: 3283,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
      { name: "Face Extras" },
    
    ],

  },
  { //T
    growEditionSizeTo: 3683,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
    ],

  },
  {//BothW
    growEditionSizeTo: 3693,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Black Robot Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
    
    ],

  },
  {
     //CThW
     growEditionSizeTo: 3893,
     layersOrder: [
       { name: "Backgrounds" },
       { name: "Wings" },
       { name: "Skins" },
       { name: "Eyes" },
       { name: "Hair" },
       { name: "Headwear" },
       { name: "Tshirts" },
       { name: "Horns" },
      
     ],
  },
  {
    //UX
    growEditionSizeTo: 4143,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "UpHoodies" },
      { name: "Face Extras" },
    ],
  },
  {
    //
    growEditionSizeTo: 4153,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Dino" },
      { name: "Face Extras" },
    ],
  },
  {
    //
    growEditionSizeTo: 4163,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Dino" },
    ],
  },
  {
    //UXW
    growEditionSizeTo: 4243,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Headwear" },
      { name: "Face Extras" },
    
    ],
  },
  {
     //ECTX
     growEditionSizeTo: 4543,
     layersOrder: [
       { name: "Backgrounds" },
       { name: "Skins" },
       { name: "Eyes" },
       { name: "Hair" },
       { name: "Eyewear" },
       { name: "Headwear" },
       { name: "Tshirts" },
       { name: "Face Extras" },
     ],
  },
  {
    //ECTXH
    growEditionSizeTo: 4598,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Tshirts" },
      { name: "Face Extras" },
      { name: "Horns" },
    ],
  },
  {
    //ECHXhW
    growEditionSizeTo: 4678,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
    
    ],
  },
  {
    //ECHXhW
    growEditionSizeTo: 4698,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Wings" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Hoodies" },
      { name: "Face Extras" },
      { name: "Horns" },
      { name: "Chains" },

    ],
  },
  {
    //Bot
    growEditionSizeTo: 4703,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Black Robot Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Eyewear" },
      { name: "Headwear" },
      { name: "Hoodies" },
      { name: "Face Extras" },
    ],
  },
  {
     //Hh
     growEditionSizeTo: 4803,
     layersOrder: [
       { name: "Backgrounds" },
       { name: "Skins" },
       { name: "Eyes" },
       { name: "Hair" },
       { name: "Hoodies" },
       { name: "Horns" },
     ],
  },
  {
    //Hh
    growEditionSizeTo: 4853,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Hoodies" },
      { name: "Horns" },
      { name: "Extras" },

    ],
  },
  {
     //ECTXhW
     growEditionSizeTo: 4953,
     layersOrder: [
       { name: "Backgrounds" },
       { name: "Wings" },
       { name: "Skins" },
       { name: "Eyes" },
       { name: "Hair" },
       { name: "Eyewear" },
       { name: "Headwear" },
       { name: "Tshirts" },
       { name: "Face Extras" },
       { name: "Horns" },
      
     ],
  },
  {
     //ECTXW
     growEditionSizeTo: 5003,
     layersOrder: [
       { name: "Backgrounds" },
       { name: "Wings" },
       { name: "Skins" },
       { name: "Eyes" },
       { name: "Hair" },
       { name: "Eyewear" },
       { name: "Headwear" },
       { name: "Tshirts" },
       { name: "Face Extras" },
       
     ],
  },
  {
    //TJ
    growEditionSizeTo: 5153,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Skins" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Tshirts" },
      { name: "Jackets" },
    ],
  },
  {
     //H
     growEditionSizeTo: 5353,
     layersOrder: [
       { name: "Backgrounds" },
       { name: "Skins" },
       { name: "Eyes" },
       { name: "Hair" },
       { name: "Hoodies" },
     ],
  },
  
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2000,
  height: 2000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
