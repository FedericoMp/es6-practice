import { Subject } from 'rxjs';

// subject > tipo especial de observable; permite difundir valores a multiples obresrvers | Multicast
export const subject$ = new Subject();
