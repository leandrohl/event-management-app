export interface IEvent {
  id: number,
  name: string,
  local: string,
  date: string,
  price: string,
  imageUrl: string,
  organization: string,
  description: string
}

export class IAuth {
  email: string = ''
  password: string = ''
}
