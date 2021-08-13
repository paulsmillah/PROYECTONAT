var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6240973289575642,
          "pitch": 0.26425852805998495,
          "rotation": 0,
          "target": "2-comedor"
        },
        {
          "yaw": 0.7430414415435713,
          "pitch": 0.5785703676427065,
          "rotation": 0,
          "target": "1-paso-pb"
        },
        {
          "yaw": 0.02260928342689006,
          "pitch": 0.15469425417832028,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": 2.4319684591530395,
          "pitch": 0.07291299518723449,
          "rotation": 0,
          "target": "4-paso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-paso-pb",
      "name": "PASO PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13681589321410037,
          "pitch": 0.3617222785201246,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": -3.128943013707122,
          "pitch": -0.18226091241135833,
          "rotation": 0,
          "target": "4-paso-pa"
        },
        {
          "yaw": -2.481233022858291,
          "pitch": 0.4838639107211602,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-comedor",
      "name": "COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9847396167549167,
          "pitch": 0.2933258705088253,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -0.7793241283748671,
          "pitch": 0.25075347004219495,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": 0.8112764725981219,
          "pitch": -0.17304383030441173,
          "rotation": 0,
          "target": "4-paso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.235377232206325,
          "pitch": 0.33843240429710697,
          "rotation": 0,
          "target": "2-comedor"
        },
        {
          "yaw": -1.4265765584321866,
          "pitch": 0.43235474668166596,
          "rotation": 0,
          "target": "1-paso-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-paso-pa",
      "name": "PASO PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5310021128959157,
          "pitch": 0.7342394202314431,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 0.386820744746462,
          "pitch": 0.1797109541542845,
          "rotation": 0,
          "target": "5-dormitorio-principal"
        },
        {
          "yaw": -0.19429047101300512,
          "pitch": 0.22607015915752982,
          "rotation": 0,
          "target": "6-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dormitorio-principal",
      "name": "DORMITORIO PRINCIPAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7379072252298045,
          "pitch": 0.40695532352133057,
          "rotation": 0,
          "target": "6-dormitorio-2"
        },
        {
          "yaw": 2.9203818094636436,
          "pitch": 0.5565569104730486,
          "rotation": 0,
          "target": "4-paso-pa"
        },
        {
          "yaw": 2.992842780272216,
          "pitch": -0.008483238558561368,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dormitorio-2",
      "name": "DORMITORIO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0790734535857194,
          "pitch": 0.3609897063722034,
          "rotation": 0,
          "target": "5-dormitorio-principal"
        },
        {
          "yaw": 2.8020940145769746,
          "pitch": 0.6350674661389881,
          "rotation": 0,
          "target": "4-paso-pa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
