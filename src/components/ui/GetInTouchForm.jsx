import { SectionHeader } from "@/components/ui/SectionHeader";

export function GetInTouchForm() {
  const header = {
    title: "Get in Touch",
    subtitle: "You can reach us anytime.",
  };

  const content = {
    firstNameLabel: "First Name",
    lastNameLabel: "Last Name",
    phoneLabel: "Phone",
    emailLabel: "Email",
    messageLabel: "Message",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    phonePlaceholder: "Your Phone Number",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "How can we help you?",
    clearLabel: "Clear",
    submitLabel: "Submit",
  };

  const {
    firstNameLabel,
    lastNameLabel,
    phoneLabel,
    emailLabel,
    messageLabel,
    firstNamePlaceholder,
    lastNamePlaceholder,
    phonePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    clearLabel,
    submitLabel,
  } = content;

  return (
    <>
      <SectionHeader
        title={header.title}
        subtitle={header.subtitle}
        align="left"
        titleClassName="text-3xl md:text-3xl lg:text-4xl"
      />
      <form className="mt-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-foreground">
            {firstNameLabel}
          </label>
          <input
            type="text"
            placeholder={firstNamePlaceholder}
            className="mt-2 w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-foreground">
            {lastNameLabel}
          </label>
          <input
            type="text"
            placeholder={lastNamePlaceholder}
            className="mt-2 w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground">
          {phoneLabel}
        </label>
        <input
          type="tel"
          placeholder={phonePlaceholder}
          className="mt-2 w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground">
          {emailLabel}
        </label>
        <input
          type="email"
          placeholder={emailPlaceholder}
          className="mt-2 w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground">
          {messageLabel}
        </label>
        <textarea
          rows="4"
          placeholder={messagePlaceholder}
          className="mt-2 w-full rounded-md border border-input px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-blue"
        ></textarea>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="reset"
          className="flex-1 border border-border rounded-md py-2 text-sm font-semibold text-foreground hover:border-navy"
        >
          {clearLabel}
        </button>
        <button
          type="submit"
          className="flex-1 rounded-md py-2 text-sm font-semibold bg-navy text-white hover:bg-navy/90"
        >
          {submitLabel}
        </button>
      </div>
      </form>
    </>
  );
}
