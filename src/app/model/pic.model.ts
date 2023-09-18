export class PicModel {
  id!: number;
  picName!: string;
  role!: string;
  division!: string;
  phone!: string;
  status!: string;

  constructor(
    id: number,
    name: string,
    role: string,
    division: string,
    phone: string,
    status: string
  ) {
    this.id = id
    this.picName = name
    this.role=role
    this.division=division
    this.phone=phone
    this.status=status
  }
}
