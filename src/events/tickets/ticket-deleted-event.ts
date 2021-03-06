import { Subjects } from "../subjects/subjects";

export interface TicketDeletedEvent {
  subject: Subjects.TicketDeleted;
  data: {
    id: string;
    version: number;
    userId: string;
  };
}
