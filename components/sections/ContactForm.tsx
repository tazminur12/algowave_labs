"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

const fieldClasses =
  "mt-2 w-full rounded-xl border border-border-light bg-white px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base";

function resolveServiceParam(value: string | null) {
  if (!value) return "";
  if (value.toLowerCase() === "other / not sure") {
    return "Other / Not sure";
  }
  const match = services.find(
    (service) =>
      service.title.toLowerCase() === value.toLowerCase() ||
      service.slug === value.toLowerCase(),
  );
  return match?.title ?? "";
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const serviceFromUrl = resolveServiceParam(searchParams.get("service"));
  const [form, setForm] = useState<FormState>({
    ...initialState,
    service: serviceFromUrl,
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [startedAt] = useState(() => Date.now());

  useEffect(() => {
    if (serviceFromUrl) {
      setForm((prev) => ({ ...prev, service: serviceFromUrl }));
    }
  }, [serviceFromUrl]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          website: form.website,
          startedAt,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      setForm({
        ...initialState,
        service: serviceFromUrl,
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <Card className="flex h-full flex-col items-start justify-center p-7 sm:p-9">
        <div className="flex size-14 items-center justify-center rounded-full bg-emerald-50 text-success">
          <CheckCircle2 aria-hidden="true" className="size-7" />
        </div>
        <h2 className="font-heading mt-5 text-2xl font-bold text-text-primary md:text-3xl">
          Message sent successfully
        </h2>
        <p className="mt-3 max-w-md text-base leading-7 text-text-secondary">
          Thanks for reaching out. Our team will review your inquiry and get
          back to you shortly.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="relative h-full overflow-hidden p-7 sm:p-9">
      <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
        Send us a message
      </h2>
      <p className="mt-2 text-sm leading-6 text-text-secondary sm:text-base">
        Tell us about your project and we will respond within one business day.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="full-name"
            className="text-sm font-semibold text-text-primary"
          >
            Full Name
          </label>
          <input
            id="full-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            disabled={status === "loading"}
            onChange={(event) => updateField("name", event.target.value)}
            className={fieldClasses}
            placeholder="Jane Cooper"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold text-text-primary"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              disabled={status === "loading"}
              onChange={(event) => updateField("email", event.target.value)}
              className={fieldClasses}
              placeholder="jane@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-text-primary"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              disabled={status === "loading"}
              onChange={(event) => updateField("phone", event.target.value)}
              className={fieldClasses}
              placeholder="01540288718"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="text-sm font-semibold text-text-primary"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            disabled={status === "loading"}
            onChange={(event) => updateField("service", event.target.value)}
            className={cn(fieldClasses, "appearance-none bg-white")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-sm font-semibold text-text-primary"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            disabled={status === "loading"}
            onChange={(event) => updateField("message", event.target.value)}
            className={cn(fieldClasses, "resize-y")}
            placeholder="Share a bit about your goals, timeline, and what success looks like."
          />
        </div>

        {status === "error" ? (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {errorMessage}
          </p>
        ) : null}

        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <LoaderCircle
                aria-hidden="true"
                className="size-4 animate-spin"
              />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Card>
  );
}
