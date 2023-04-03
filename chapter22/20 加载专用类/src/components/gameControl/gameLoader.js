// 核心是实现两个场景资源的加载
// playScene场景资源加载进度 要与 加载进度条产生联动

import { Assets } from "../../libs/pixijs.js";

let abc = 123

export default class GameLoader {
  static data = {
    loadScene: {
      singles: [
        { name: 'RetroGaming', path: 'src/assets/fonts/RetroGaming.ttf' },
        { name: 'upheavtt', path: 'src/assets/fonts/upheavtt.ttf' },
        { name: 'rainbowStarSheetData', path: 'src/assets/raibowStarSheet/rainbowStar.json' },
      ],
    },
    playScene: {
      singles: [
        { name: 'gameBlockTextTexture', path: 'src/assets/titleTextures/blockText.png' },
        { name: 'rainBowColorTexture', path: 'src/assets/titleTextures/rainBowColor.png' },
        { name: 'chineseTextTexture', path: 'src/assets/titleTextures/dang.png' },
        { name: 'barTexture', path: 'src/assets/elements/barBlock.png' },
        { name: 'barCornerTexture', path: 'src/assets/elements/barCorner.png' },
        { name: 'goldenStarTexture', path: 'src/assets/elements/goldenStar.png' },
      ],
      bundles: [
        {
          name: 'shapesBundle',
          paths: {
            shape1: 'src/assets/shapes/shape1.png',
            shape2: 'src/assets/shapes/shape2.png',
            shape3: 'src/assets/shapes/shape3.png',
            shape4: 'src/assets/shapes/shape4.png',
            shape5: 'src/assets/shapes/shape5.png',
            shape6: 'src/assets/shapes/shape6.png',
            shape7: 'src/assets/shapes/shape7.png',
            shape8: 'src/assets/shapes/shape8.png'

          }
        }
      ]
    }
  }


  static allData = {}

  static async loadSceneAssetsLoad() {
    const sceneData = this.data['loadScene']
    const singlesData = sceneData.singles

    const assetsNames = []
    for (let single of singlesData) {
      Assets.add(single.name, single.path)
      assetsNames.push(single.name)
    }

    const data = await Assets.load(assetsNames)
    console.log(data)

    this.allData.loadScene = { ...data }

  }

  static async playSceneAssetsLoad() {
    const sceneData = this.data['playScene']
    const singlesData = sceneData.singles
    const bundlesData = sceneData.bundles

    const assetsNames = []
    for (let single of singlesData) {
      Assets.add(single.name, single.path)
      assetsNames.push(single.name)
    }

    // bundles

    const bundlesNames = []

    bundlesData.forEach((item) => {
      Assets.addBundle(item.name, item.paths)
      bundlesNames.push(item.name)
    })

    const singlesAssets = await Assets.load(assetsNames)
    const bundlesAssets = await Assets.loadBundle(bundlesNames)

    console.log(singlesAssets, bundlesAssets)

    this.allData.playScene = { ...singlesAssets, ...bundlesAssets }



  }




}