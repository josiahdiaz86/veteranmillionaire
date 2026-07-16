"use client";

import { useState, type FormEvent } from "react";

/**
 * Simple mock contact form — no real backend yet. preventDefault +
 * local success state.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General question");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-vm">
        <p className="text-lg font-headline font-bold text-navy">Thanks, {name.split(" ")[0] || "there"}.</p>
        <p className="mt-2 text-sm text-charcoal-400">We'll get back to you at {email} as soon as we can.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cf-name" className="mb-1 block text-sm font-semibold text-charcoal">
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-1 block text-sm font-semibold text-charcoal">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="cf-topic" className="mb-1 block text-sm font-semibold text-charcoal">
          Topic
        </label>
        <select
          id="cf-topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        >
          <option>General question</option>
          <option>Discount correction</option>
          <option>Benefits question</option>
          <option>Accessibility issue</option>
          <option>Press inquiry</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1 block text-sm font-semibold text-charcoal">
          Message
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
