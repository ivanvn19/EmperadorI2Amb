var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "HALL",
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
        "yaw": -1.2239166923260747,
        "pitch": -0.11561280427134335,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.328973754284064,
          "pitch": 0.07965103390730732,
          "rotation": 0,
          "target": "1-living--comedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.088954585256417,
          "pitch": -0.45437526229981273,
          "title": "Bienvenidos a Emperador I",
          "text": "<p>Presentamos un elegante edificio de ocho pisos con 24 unidades de alta categoría, que combina diseño clásico con comodidades modernas. Ubicado cerca de una popular zona gastronómica, ofrece fácil acceso a restaurantes, bancos y entretenimiento.</p><p>Las unidades, de dos y tres ambientes, destacan por sus pisos de porcelanato simil madera y aberturas con doble vidriado hermético (DVH) para un óptimo aislamiento. La calefacción por losa radiante y los balcones aterrazados con parrilla añaden lujo y confort. Este desarrollo redefine la vida urbana al integrar sofisticación europea con una ubicación céntrica.</p>"
        }
      ]
    },
    {
      "id": "1-living--comedor",
      "name": "LIVING / COMEDOR",
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
        "yaw": 0.045951768140595206,
        "pitch": 0.12268808374245666,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.5117805529047246,
          "pitch": -0.028996591417850937,
          "rotation": 3.141592653589793,
          "target": "0-hall"
        },
        {
          "yaw": 1.6171787638747048,
          "pitch": -0.1256191175329846,
          "rotation": 4.71238898038469,
          "target": "2-habitacin"
        },
        {
          "yaw": 1.740870236556944,
          "pitch": 0.0028997027954353882,
          "rotation": 7.853981633974483,
          "target": "3-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-habitacin",
      "name": "HABITACIÓN",
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
        "yaw": 2.278131822425637,
        "pitch": 0.07877355013427234,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.095335520855528,
          "pitch": 0.15079759546403082,
          "rotation": 0,
          "target": "1-living--comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao",
      "name": "BAÑO",
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
        "yaw": 1.9409979701482731,
        "pitch": 0.19344812130662348,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.9498204831483292,
          "pitch": 0.01504399697539327,
          "rotation": 0,
          "target": "1-living--comedor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EMPERADOR I - 2 AMBIENTES ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
