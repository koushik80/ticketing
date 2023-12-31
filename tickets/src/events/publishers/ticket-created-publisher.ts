import { Publisher, Subjects, TicketCreatedEvent } from '@finfotek/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}