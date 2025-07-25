"use client";

import { useActionState } from "react";
import { DatePicker } from "@/components/date-picker";
import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma";
import { fromCent } from "@/utils/currency";
import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
    ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [actionState, action] = useActionState(upsertTicket.bind(null, ticket?.id), EMPTY_ACTION_STATE);

    return (
        <Form
            action={action}
            actionState={actionState}
        >
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" defaultValue={
                (actionState.payload?.get('title') as string) ?? ticket?.title} />
            <FieldError actionState={actionState} name="title" />

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" defaultValue={
                (actionState.payload?.get('content') as string) ?? ticket?.content
            } />
            <FieldError actionState={actionState} name="content" />

            <div className="flex gap-x-2 mb-1">
                <div className="w-1/2">
                    <Label className="mb-1" htmlFor="deadline">Deadline</Label>
                    <DatePicker
                        id="deadline"
                        name="deadline"
                        defaultValue={
                            (actionState.payload?.get("deadline") as string) ??
                            ticket?.deadline
                        }
                    />
                    <FieldError actionState={actionState} name="deadline" />
                </div>
                <div className="w-1/2">
                    <Label className="mb-1" htmlFor="bounty">Bounty ($)</Label>
                    <Input
                        id="bounty"
                        name="bounty"
                        type="number"
                        step=".01"
                        defaultValue={
                            (actionState.payload?.get("bounty") as string) ??
                            (ticket?.bounty ? fromCent(ticket?.bounty) : "")
                        }
                    />
                    <FieldError actionState={actionState} name="bounty" />
                </div>
            </div>


            <SubmitButton label={ticket ? "Edit" : "Create"} />
        </Form>
    );
};

export { TicketUpsertForm };
