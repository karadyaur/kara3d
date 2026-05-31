"use client";

// Figma: node-id=10209:664 (desktop), 10209:935 (mobile)
// Mobile: form full width above, contact info stacked below
// Desktop: form left (flex-1), contact info right (flex-1)

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Select } from "@/components/ui/Select";

function UploadIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="size-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="24" height="16" rx="2" />
      <polyline points="4,8 16,18 28,8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="size-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 5h6l3 7-3.5 2.5a16 16 0 0 0 6 6L20 17l7 3v6a2 2 0 0 1-2 2C10 27 5 17 5 7a2 2 0 0 1 1-2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="size-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3C11.582 3 8 6.582 8 11c0 6.627 8 18 8 18s8-11.373 8-18c0-4.418-3.582-8-8-8z" />
      <circle cx="16" cy="11" r="3" />
    </svg>
  );
}

interface KontaktProps {
  tagline: string;
  title: string;
  description: string;
  privacyHref: string;
  formLabels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    stueckzahl: string;
    stueckzahlPlaceholder: string;
    stueckzahlOptions: string[];
    message: string;
    messagePlaceholder: string;
    upload: string;
    uploadHint: string;
    uploadButton: string;
    privacy: string;
    privacyLink: string;
    required: string;
    submit: string;
  };
  contacts: {
    email: { title: string; description: string; value: string; href: string };
    phone: { title: string; description: string; value: string; href: string };
    location: { title: string; value: string };
  };
}

export function Kontakt({
  tagline,
  title,
  description,
  privacyHref,
  formLabels,
  contacts,
}: KontaktProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stueckzahl, setStueckzahl] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ALLOWED_EXT = [".stl", ".step", ".stp", ".pdf"];
  const handleFile = (picked: File | undefined) => {
    if (!picked) return;
    const ext = "." + picked.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) {
      setFileError(true);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setFileError(false);
    setFile(picked);
  };

  const canSubmit =
    name.trim() && email.trim() && stueckzahl.trim() && accepted && submitStatus !== "loading";

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSubmitStatus("loading");

    const fd = new FormData();
    fd.append("name", name.trim());
    fd.append("email", email.trim());
    fd.append("stueckzahl", stueckzahl);
    if (message.trim()) fd.append("message", message.trim());
    if (file) fd.append("file", file);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      if (res.ok) {
        setSubmitStatus("success");
        setName(""); setEmail(""); setStueckzahl(""); setMessage("");
        setFile(null); setAccepted(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const inputClass =
    "w-full h-12 bg-neutral-darkest-5 rounded-xl px-4 font-sans font-normal text-regular text-neutral-darkest leading-[1.5] outline-none placeholder:text-neutral-darkest/40 focus:ring-2 focus:ring-malachite/40 transition";

  // Required field label helper
  const Req = () => (
    <span className="text-malachite-dark font-sans text-regular ml-0.5" aria-label={formLabels.required}>*</span>
  );

  return (
    <section className="bg-white py-section-lg">
      <Container className="flex flex-col gap-12">
          {/* Section title */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col gap-4 max-w-[768px]">
            <p className="font-sans font-semibold text-tagline text-neutral-darkest">
              {tagline}
            </p>
            <div className="flex flex-col gap-6 text-neutral-darkest">
              <h2 className="font-display font-semibold text-h2 leading-[1.2] tracking-[-0.01em]">
                {title}
              </h2>
              <p className="font-sans font-normal text-medium-body leading-[1.5]">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Two-column content — mobile: stacked, desktop: side by side */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="flex flex-col gap-12 md:flex-row md:gap-20 items-start">

            {/* Form */}
            <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-5">

              {/* Name* + Email* — side by side on desktop */}
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-sans font-medium text-small text-neutral-darkest leading-[1.5]">
                    {formLabels.name}<Req />
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={formLabels.namePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-sans font-medium text-small text-neutral-darkest leading-[1.5]">
                    {formLabels.email}<Req />
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={formLabels.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Stückzahl* — dropdown with ranges */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans font-medium text-small text-neutral-darkest leading-[1.5]">
                  {formLabels.stueckzahl}<Req />
                </label>
                <Select
                  value={stueckzahl}
                  onChange={(e) => setStueckzahl(e.target.value)}
                  className="text-neutral-darkest"
                >
                  <option value="" disabled>{formLabels.stueckzahlPlaceholder}</option>
                  {formLabels.stueckzahlOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </Select>
              </div>

              {/* Nachricht */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans font-medium text-small text-neutral-darkest leading-[1.5]">
                  {formLabels.message}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={formLabels.messagePlaceholder}
                  rows={5}
                  className={`${inputClass} h-[140px] py-3 resize-none`}
                />
              </div>

              {/* Datei-Upload */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans font-medium text-small text-neutral-darkest leading-[1.5]">
                  {formLabels.upload}
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full flex items-center gap-3 px-4 h-12 bg-neutral-darkest-5 rounded-xl border border-dashed transition-colors cursor-pointer text-left ${fileError ? "border-red-400" : "border-neutral-darkest/20 hover:border-malachite/50"}`}
                >
                  <span className="text-neutral-darkest/50"><UploadIcon /></span>
                  <span className="flex-1 font-sans font-normal text-regular leading-[1.5] truncate">
                    {file
                      ? <span className="text-neutral-darkest">{file.name}</span>
                      : <span className="text-neutral-darkest/40">{formLabels.uploadButton}</span>
                    }
                  </span>
                  <span className="font-sans font-normal text-tiny text-neutral-darkest/40 whitespace-nowrap shrink-0">
                    {formLabels.uploadHint}
                  </span>
                </button>
                {fileError && (
                  <p className="font-sans font-normal text-tiny text-red-500 leading-[1.5]">
                    Nur STL, STEP, STP oder PDF erlaubt.
                  </p>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".stl,.step,.stp,.pdf,model/stl,application/pdf"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                />
              </div>

              {/* Datenschutz* */}
              <div className="flex gap-3 items-start pt-1">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="size-[18px] rounded shrink-0 accent-malachite-dark cursor-pointer mt-0.5"
                />
                <label
                  htmlFor="privacy"
                  className="font-sans font-normal text-small text-neutral-darkest leading-[1.5] cursor-pointer"
                >
                  {formLabels.privacy}{" "}
                  <Link href={privacyHref} className="underline hover:opacity-70 transition-opacity">
                    {formLabels.privacyLink}
                  </Link>
                  <Req />
                </label>
              </div>

              {/* Hint + Submit */}
              <div className="flex flex-col gap-4 pt-1">
                <p className="font-sans font-normal text-tiny text-neutral-darkest/50 leading-[1.5]">
                  <span className="text-malachite-dark">*</span> {formLabels.required}
                </p>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="self-start inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-malachite-dark border border-malachite text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  disabled={!canSubmit}
                >
                  {submitStatus === "loading" ? "Wird gesendet…" : formLabels.submit}
                </button>
                {submitStatus === "success" && (
                  <p className="font-sans font-normal text-small text-malachite-dark leading-[1.5]">
                    Ihre Anfrage wurde gesendet. Wir melden uns bald!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="font-sans font-normal text-small text-red-500 leading-[1.5]">
                    Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
                  </p>
                )}
              </div>

            </motion.div>

            {/* Contact info */}
            <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-10">
              <div className="flex flex-col gap-6 md:flex-row md:gap-6 items-start">
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  <span className="text-neutral-darkest"><MailIcon /></span>
                  <div className="flex flex-col gap-2 text-neutral-darkest">
                    <h6 className="font-display font-semibold text-h6 leading-[1.4] tracking-[-0.01em]">{contacts.email.title}</h6>
                    <p className="font-sans font-normal text-regular leading-[1.5]">{contacts.email.description}</p>
                    <a href={contacts.email.href} className="font-sans font-normal text-regular leading-[1.5] underline hover:opacity-70 transition-opacity">
                      {contacts.email.value}
                    </a>
                  </div>
                </div>

                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  <span className="text-neutral-darkest"><PhoneIcon /></span>
                  <div className="flex flex-col gap-2 text-neutral-darkest">
                    <h6 className="font-display font-semibold text-h6 leading-[1.4] tracking-[-0.01em]">{contacts.phone.title}</h6>
                    <p className="font-sans font-normal text-regular leading-[1.5]">{contacts.phone.description}</p>
                    <a href={contacts.phone.href} className="font-sans font-normal text-regular leading-[1.5] underline hover:opacity-70 transition-opacity">
                      {contacts.phone.value}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-neutral-darkest"><LocationIcon /></span>
                <div className="flex flex-col gap-2 text-neutral-darkest">
                  <h6 className="font-display font-semibold text-h6 leading-[1.4] tracking-[-0.01em]">{contacts.location.title}</h6>
                  <p className="font-sans font-normal text-regular leading-[1.5]">{contacts.location.value}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

      </Container>
    </section>
  );
}
