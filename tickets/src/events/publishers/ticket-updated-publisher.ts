import { Publisher, Subjects, TicketUpdatedEvent } from '@finfotek/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}