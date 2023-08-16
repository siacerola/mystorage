export class RandomGenerator {
  _nominal!: number
  // private gain!:number
  // private mode!: boolean

  constructor(nominalValue: number) {
    this._nominal = nominalValue
    // this.gain = gainValue
    // this.mode = modeValue
  }

  // get max() : number {
  //   return this._nominal
  // }


  // public get modeValue() : boolean {
  //   return this.mode
  // }


  /**
   * randomize
   */
  // private randomize(): number[] {
  //   let rand=[]
  //   rand[0] = Math.floor(Math.random() * this.nominal)
  //   // rand[1]=Math.floor(Math.random() * this.gain)
  //   return rand
  // }

  /**
   * formatNumber
   */
  // public formatNumber() {
  //   let random = this.randomize()
  //   let ret=[]
  //   let located = 'en-US'
  //   let option = {
  //     style: 'currency',
  //     currency:'USD'
  //   }
  //   true : currency format
  //   if (this.mode) {
  //     // nominal currency
  //     ret[0] = new Intl.NumberFormat(located, option).format(random[0])
  //     ret[1] = new Intl.NumberFormat(located, option).format(random[1])
  //     return ret
  //   } else {
  //     ret[0] = new Intl.NumberFormat().format(random[0])
  //     ret[1] = new Intl.NumberFormat().format(random[1])
  //     return ret
  //   }
  // }

}
