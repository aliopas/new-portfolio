import { PageHeader } from "@/components/admin/page-header";
import { getMessages } from "@/services/messages";
import { MessagesClient } from "./messages-client";

export default async function MessagesPage() {
    const messages = await getMessages();

    return (
        <>
            <PageHeader
                title="Messages"
                description="Here are the messages from your contact form."
            />
            <MessagesClient messages={messages} />
        </>
    )
}
