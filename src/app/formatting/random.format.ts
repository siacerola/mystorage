export class RandomGenerator {
  icon!: number
  title!: string
  nominal!: number
  gain!: number
  currency!: boolean

  constructor(response: any) {
    this.icon = response.icon
    this.title = response.title
    this.nominal = response.nominal
    this.gain = response.gain
    this.currency = response.currency

  }

  // public get getNominal() : number {
  //   return this._nominal
  // }

}
