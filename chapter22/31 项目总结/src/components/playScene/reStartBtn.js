import Character from "./character.js";
import { Text } from "../../libs/pixijs.js";
import Control from "../gameControl/control.js";

export default class reStartBtn extends Character {
  constructor(posInfo) {
    super(posInfo)
    this.element = new Text('Restart', {
      fontFamily: 'retro gaming',
      fontSize: 48,
      fill: 0x641CFC,
      // 设置投影
      dropShadow: true,
      dropShadowColor: '#FF50E3',
      // 投影距离
      dropShadowDistance: 4,
    })
    this.colorVariation = null

    this.init()
  }

  init() {
    // 鼠标悬停时，让字体颜色不同的变化
    this.element.eventMode = 'static'
    this.element.on('mouseover', () => {
      this.colorVariation = setInterval(() => {
        this.element.style.fill = Math.floor(Math.random() * 16777215);
      }, 200);
      document.body.style.cursor = 'pointer';
    });
    // 鼠标从文字上移开后，文字回复初始颜色
    this.element.on('mouseout', () => {
      clearInterval(this.colorVariation);
      this.element.style.fill = 0x641CFC;
      document.body.style.cursor = 'default';
    });


    this.element.on('pointerdown', () => {
      Control.gameStart()
    })
    this.superInit()
  }
}
