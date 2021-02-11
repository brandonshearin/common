import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;
    data: {
      ticket: {
          id: string;
          price: number;
      }
      userId: string;
      orderId: string;
      expiresAt: string;
      status: OrderStatus;
    };
  }