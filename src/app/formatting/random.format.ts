export class RandomGenerator {
  private _nominal!: number
  private _gain!: number
  private _mode!:boolean

  constructor(response: any) {
    this._nominal = response.nominal
    this._gain = response.gain
    this._mode = response.mode

  }

  // public get getNominal() : number {
  //   return this._nominal
  // }

}
