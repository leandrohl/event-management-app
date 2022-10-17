export interface IEvent {
  id: string,
  name: string,
  local: string,
  date: string,
  price: string,
  imageUrl: string,
  organization: string,
  description: string
}

export interface ITicket {
  id: string,
  dateBuy: string,
  event: IEvent
}

export class IAuth {
  email: string = ''
  password: string = ''
}