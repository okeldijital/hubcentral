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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing, ${email}! We'll be in touch. For direct enquiries, email okeldijital@gmail.com`);
    setEmail("");
  };

  if (variant === "hero") {
    return (
      <form 
        onSubmit={handleSubmit}
        className={`flex flex-col gap-3 sm:flex-row shadow-2xl shadow-black/20 rounded-xl bg-white p-1 ${className}`}
      >
        <input
          type="email"
          placeholder={placeholder}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 rounded-lg border-none bg-transparent px-4 py-3 text-base focus:outline-none text-[#111110] ${inputClassName}`}
        />
        <button
          type="submit"
          className={`rounded-lg bg-black px-6 py-3.5 text-base font-semibold text-white hover:bg-zinc-800 transition-colors ${buttonClassName}`}
        >
          {buttonText}
        </button>
      </form>
    );
  }

  if (variant === "inline") {
    return (
      <form 
        onSubmit={handleSubmit}
        className={`flex flex-col gap-2 ${className}`}
      >
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
          className={`rounded-md bg-[var(--brand)] px-3 py-2 text-sm font-medium text-white hover:bg-[var(--brand-hover)] transition-colors ${buttonClassName}`}
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
      className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${className}`}
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
        className={`rounded-full bg-black px-8 py-4 font-bold text-white hover:bg-gray-800 transition-transform active:scale-95 shadow-lg ${buttonClassName}`}
      >
        {buttonText}
      </button>
    </form>
  );
}
