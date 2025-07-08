import ContactForm from "@/components/public/contact-form";
import { getSettings } from "@/services/settings";
import { Mail, Phone, MapPin } from "lucide-react";

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-4">
          Get in Touch
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/80 mb-12">
          Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
        </p>
      </section>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <div className="bg-card p-8 rounded-lg shadow-sm space-y-8">
            <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 text-accent-foreground p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href={`mailto:${settings.email}`} className="text-foreground/80 hover:text-primary transition-colors">
                    {settings.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 text-accent-foreground p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-foreground/80">{settings.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 text-accent-foreground p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-foreground/80">{settings.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
