import { Subjects } from "./subjects";

export interface TicketUpdatedvent {
    subject: Subjects.TicketUpdated;
    data:{
        id: string;
        title: string;
        price: number;
        userId: string;
    }
}