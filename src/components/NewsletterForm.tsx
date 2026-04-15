"use client";

import { useState } from "react";

interface NewsletterFormProps {
  variant?: "inline" | "hero" | "block";
  placeholder?: string;
  buttonText?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export function NewsletterForm({
  variant = "block",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  className = "",
  inputClassName = "",
  buttonClassName = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        alert(`Thanks for subscribing, ${email}! We'll be in touch.`);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Failed to subscribe. Please try again.");
    }
    setEmail("");
  };

  if (variant === "hero") {
    return (
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-3 rounded-xl bg-white p-1 shadow-2xl shadow-black/20 sm:flex-row ${className}`}
      >
        <input
          type="email"
          placeholder={placeholder}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 rounded-lg border-none bg-transparent px-4 py-3 text-base text-[#111110] focus:outline-none ${inputClassName}`}
        />
        <button
          type="submit"
          className={`rounded-lg bg-black px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-zinc-800 ${buttonClassName}`}
        >
          {buttonText}
        </button>
      </form>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col gap-2 ${className}`}>
        <input
          type="email"
          placeholder={placeholder}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm focus:border-[var(--brand)] focus:outline-none focus:ring-1 focus:ring-[var(--brand)] ${inputClassName}`}
        />
        <button
          type="submit"
          className={`rounded-md bg-[var(--brand)] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-hover)] ${buttonClassName}`}
        >
          {buttonText}
        </button>
      </form>
    );
  }

  // Default block variant (used in pillars and sidebar)
  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex max-w-md flex-col gap-3 sm:flex-row ${className}`}
    >
      <input
        type="email"
        placeholder={placeholder}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 rounded-full px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black ${inputClassName}`}
      />
      <button
        type="submit"
        className={`rounded-full bg-black px-8 py-4 font-bold text-white shadow-lg transition-transform hover:bg-gray-800 active:scale-95 ${buttonClassName}`}
      >
        {buttonText}
      </button>
    </form>
  );
}
