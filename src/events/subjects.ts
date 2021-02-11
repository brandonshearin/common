// a subject is a name of a channel in the NATS world

export enum Subjects {
  TicketCreated = "ticket:created",
  TicketUpdated = "ticket:updated",
  OrderCreated = "order:created",
  OrderCancelled = "order:cancelled",
}
