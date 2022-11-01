import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@bu.ticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
