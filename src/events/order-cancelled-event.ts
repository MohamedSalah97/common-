import { Subjects } from "./subjects";

export interface OrderCancelledevent {
    subject: Subjects.OrderCancelled;
    data:{
        id: string;
        version: number ;
        ticket: {
            id: string
        }
    }
}
