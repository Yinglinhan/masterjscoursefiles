import Character from "./character.js";
import { Text } from "../../libs/pixijs.js";


export default class StartBtn extends Character {
  constructor(posInfo) {
    super(posInfo)
    this.element = new Text('Start', {
      fontFamily: 'retro gaming',
      fontSize: 48,
      fill: 0x183BF5,
      letterSpacing: 2,
      align: 'center',
      dropShadowColor: '#FF32C6',
      dropShadow: true,
      dropShadowDistance: 6
    })

    // 用于改颜色的定时器
    this.colorInterval = null

    this.init()
  }
  init() {
    this.superInit()


    this.element.eventMode = 'static'

    this.element.on('mouseover', () => {
      this.colorInterval = setInterval(() => {
        // 0xffffff
        this.element.style.fill = Math.floor(Math.random() * 16777215);
      }, 200);

      document.body.style.cursor = 'pointer';
    });

    this.element.on('mouseout', () => {
      clearInterval(this.colorInterval);
      this.element.style.fill = 0x183BF5;
      document.body.style.cursor = 'default';
    });
  }


}
