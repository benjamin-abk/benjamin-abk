var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama5",
      "name": "Panorama5",
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
        "yaw": 0.016894892933194683,
        "pitch": -0.1010581088573872,
        "fov": 1.5477621658068674
      },
      "linkHotspots": [
        {
          "yaw": 1.2465538896193245,
          "pitch": 0.06580817698880281,
          "rotation": 0,
          "target": "1-panorama4_000"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.11143940134731,
          "pitch": -0.10228630733612931,
          "title": "Blick durch Rahmen<br>",
          "text": "Dies ist ein Beispieltext.<br>"
        }
      ]
    },
    {
      "id": "1-panorama4_000",
      "name": "Panorama4_000",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
