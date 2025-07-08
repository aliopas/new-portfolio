import { PageHeader } from "@/components/admin/page-header";
import { getSettings } from "@/services/settings";
import { SettingsClient } from "./settings-client";

export default async function SettingsPage() {
    const settings = await getSettings();

    return (
        <>
            <PageHeader
                title="Settings"
                description="Update your personal information and skills."
            />
            <SettingsClient initialSettings={settings} />
        </>
    )
}
