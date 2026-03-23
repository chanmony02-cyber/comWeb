// src/pages/About/components/TeamSection.jsx

function LinkedinIcon() {
  return (
    <svg
      className="w-5 h-5 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 9.75V17.25M6.75 6.75h.008v.008H6.75V6.75Zm4.5 10.5V9.75m0 7.5v-4.125a2.625 2.625 0 0 1 5.25 0V17.25"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-5 h-5 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 7.5h16.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75A1.5 1.5 0 0 1 2.25 16.5V9a1.5 1.5 0 0 1 1.5-1.5Zm0 0 8.25 5.25L20.25 7.5"
      />
    </svg>
  );
}

export function TeamSection({ eyebrow, title, subtitle, members }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-accent/40 text-primary-blue text-md font-semibold mb-4 font-sans">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-display mb-3">
            {title}
          </h2>
          <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-52 h-52 rounded-full border-4 border-sky-accent/60 p-1 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-primary-blue/60">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-navy font-display">
                  {member.name}
                </h3>
                <p className="text-md text-muted-foreground font-sans">
                  {member.role}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={member.linkedin}
                  className="w-10 h-10 rounded-full bg-sky-accent/40 flex items-center justify-center hover:bg-primary-blue/20 transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <LinkedinIcon />
                </a>
                <a
                  href={member.email}
                  className="w-10 h-10 rounded-full bg-sky-accent/40 flex items-center justify-center hover:bg-primary-blue/20 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
