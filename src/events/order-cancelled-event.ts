import { Subjects } from "./subjects";

export interface OrderCancelledevent {
    subject: Subjects.OrderCancelled;
    data:{
        id: string;
        ticket: {
            id: string
        }
    }
}
