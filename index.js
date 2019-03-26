import { Dimensions, PixelRatio } from 'react-native'

class Units {
  constructor() {
    this.scale = 1

    this.grid = {
      cols: 3,
      padding: 10,
      spacing: 10
    }

    this.update()
  }

  update = () => {
    this.window = Dimensions.get('window')
    this.pixelRatio = PixelRatio.get()
    this.setGrid()
  }

  setScale = (scale) => {
    this.scale = scale
  }

  setGrid = (o) => {
    this.grid = {
      ...this.grid, ...o
    }

    const w = this.window.width - (this.grid.padding*2) + this.grid.spacing
    this.grid.colWidth = (w/this.grid.cols) 
  }

  px = (x=1) => {
    return x/this.pixelRatio
  }

  su = (x=1) => {
    return x*this.scale
  }

  vh = (x=1) => {
    return x*this.window.height*0.01
  }

  vw = (x=1) => {
    return x*this.window.width*0.01
  }

  gr = (x=1) => {
    return (x*this.grid.colWidth)-this.grid.spacing
  }

  gs = (x=1) => {
    return x*this.grid.spacing
  }

  gp = (x=1) => {
    return x*this.grid.padding
  }
}

const units = new Units()

module.exports = units;

['vw', 'vh', 'px', 'su', 'gr', 'gs', 'gp', 'update', 'setScale', 'setGrid'].forEach(o => {
  module.exports[o] = units[o];
})
