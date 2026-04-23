"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PublicAuthResourceService } from "@/services/api";

const getAuthSchema = (isSignIn: boolean) => {
  const baseSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(6, "Passphrase must be at least 6 characters"),
    username: z.string().optional(),
    confirmPassword: z.string().optional(),
  });

  if (isSignIn) {
    return baseSchema;
  }

  return baseSchema
    .extend({
      username: z.string().min(3, "Alias must be at least 3 characters"),
      confirmPassword: z.string().min(6, "Please confirm your passphrase"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passphrases don't match",
      path: ["confirmPassword"],
    });
};

type AuthFormValues = {
  email: string;
  password: string;
  username?: string;
  confirmPassword?: string;
};

export default function LoginPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const [isSignIn, setIsSignIn] = useState(mode !== "signup");
  const [lastMode, setLastMode] = useState(mode);

  if (mode !== lastMode) {
    setLastMode(mode);
    setIsSignIn(mode !== "signup");
  }

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AuthFormValues>({
    resolver: zodResolver(getAuthSchema(isSignIn)),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
  });

  const handleModeToggle = (signInMode: boolean) => {
    setIsSignIn(signInMode);
    reset();
  };

  const onSubmit = async (data: AuthFormValues) => {
    setServerError("");
    try {
      if (isSignIn) {
        const response = await PublicAuthResourceService.login({
          username: data.email,
          password: data.password,
        });
        console.log("Login successful:", response);
        // Handle successful login (e.g., set token, redirect)
      } else {
        const response = await PublicAuthResourceService.registerAccount({
          login: data.username!,
          email: data.email,
          password: data.password,
        });
        console.log("Registration successful:", response);
        // On success, switch to sign in mode
        setIsSignIn(true);
        reset();
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      setServerError(
        error?.body?.title ||
          error?.body?.detail ||
          error?.message ||
          "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <main className="flex-1 w-full flex flex-col md:flex-row">
      {/* Left Side: Editorial Motif (Hidden on smaller screens) */}
      <section className="hidden md:flex w-1/2 relative overflow-hidden items-end p-12 bg-surface-container-lowest">
        {/* Structural Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACAVdaPYM_8C6YBSAdnPfP4IxmIi0gzKk7D14gbHmR2kkLB2IKCrPR_kRTRLUGUZOQbTDXFOLoMAfZa3B9dA1IxPMDfMm2_Bcgb2xH2XxDgC1_P4MH1SjbMuF_2rWtuSfVrc9altuEd9Jcg35Aa5f8rOds_eFlmzqACEjioaDq1V4QaR0D5z9EcBrwfqRT7jPYNFZN1E1XmT_ZCuhdi_iL52tX-itisgBHH9O-aMZJihlSrSz-eVWwFqC4PhQ5gU7hnmeS1r3ALO4F')",
          }}
        />
        {/* Gradient Overlay for Depth and Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>
        {/* High-tech accent glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        {/* Content Container */}
        <div className="relative z-10 max-w-lg pr-8">
          <h1 className="font-headline text-[3.5rem] font-black tracking-[-0.03em] text-on-surface mb-6 leading-[1.1]">
            Master the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">
              Algorithm.
            </span>
          </h1>
          <p className="text-on-surface-variant text-lg font-medium leading-relaxed max-w-md">
            Construct systems that scale. Deep work requires an environment
            devoid of noise, calibrated for focus.
          </p>
        </div>
      </section>

      {/* Right Side: Interaction Form */}
      <section className="w-full md:w-1/2 flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-surface relative overflow-y-auto min-h-screen md:min-h-0">
        <div className="w-full max-w-[420px] flex flex-col gap-8 md:gap-10 my-auto py-8">
          {/* Header & Branding */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start gap-3 mb-4 hover:opacity-80 transition-opacity w-min mx-auto md:mx-0 whitespace-nowrap"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shadow-[inset_0px_0px_10px_rgba(173,198,255,0.05)]">
                <span
                  className="material-symbols-outlined text-primary text-[24px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  architecture
                </span>
              </div>
              <span className="font-headline font-bold text-lg tracking-widest uppercase text-on-surface">
                Obsidian Architect
              </span>
            </Link>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
              {isSignIn ? "Access Terminal" : "Initialize Account"}
            </h2>
            <p className="text-on-surface-variant text-sm">
              {isSignIn
                ? "Authenticate to enter your personalized development environment."
                : "Register your developer profile to begin your progression."}
            </p>
          </div>

          {/* State Toggle (Sign In / Create Account) */}
          <div className="flex p-1 bg-surface-container-low rounded-lg relative">
            <button
              onClick={() => handleModeToggle(true)}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 relative z-10 ${
                isSignIn
                  ? "text-primary shadow-[0_2px_8px_rgba(0,0,0,0.2)] bg-surface-container-high"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/20"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => handleModeToggle(false)}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 relative z-10 ${
                !isSignIn
                  ? "text-primary shadow-[0_2px_8px_rgba(0,0,0,0.2)] bg-surface-container-high"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/20"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Auth Form */}
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {serverError && (
              <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg animate-in fade-in zoom-in-95 duration-200">
                {serverError}
              </div>
            )}
            <div className="flex flex-col gap-5">
              {/* Username Input Group (Only for Create Account) */}
              {!isSignIn && (
                <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label
                    className="text-sm font-medium text-on-surface-variant ml-1"
                    htmlFor="username"
                  >
                    Alias (Username)
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">
                        person
                      </span>
                    </div>
                    <input
                      className="w-full pl-11 pr-4 py-3.5 bg-surface-container-lowest text-on-surface font-body rounded-xl border border-outline-variant/15 outline-none transition-all duration-200 focus:border-primary focus:ring-[4px] focus:ring-primary/20 placeholder:text-outline-variant/50 hover:border-outline-variant/30"
                      id="username"
                      placeholder="dev_architect"
                      type="text"
                      {...register("username")}
                    />
                  </div>
                  {errors.username && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.username.message}
                    </span>
                  )}
                </div>
              )}

              {/* Email Input Group */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-on-surface-variant ml-1"
                  htmlFor="email"
                >
                  Secure Protocol (Email)
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">
                      alternate_email
                    </span>
                  </div>
                  <input
                    className="w-full pl-11 pr-4 py-3.5 bg-surface-container-lowest text-on-surface font-body rounded-xl border border-outline-variant/15 outline-none transition-all duration-200 focus:border-primary focus:ring-[4px] focus:ring-primary/20 placeholder:text-outline-variant/50 hover:border-outline-variant/30"
                    id="email"
                    placeholder="developer@obsidian.com"
                    type="email"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-xs ml-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password Input Group */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between ml-1 pr-1">
                  <label
                    className="text-sm font-medium text-on-surface-variant"
                    htmlFor="password"
                  >
                    Passphrase
                  </label>
                  {isSignIn && (
                    <Link
                      className="text-xs font-semibold text-primary hover:text-primary-container transition-colors duration-200"
                      href="#"
                    >
                      Recover Key
                    </Link>
                  )}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">
                      key
                    </span>
                  </div>
                  <input
                    className="w-full pl-11 pr-4 py-3.5 bg-surface-container-lowest text-on-surface font-body rounded-xl border border-outline-variant/15 outline-none transition-all duration-200 focus:border-primary focus:ring-[4px] focus:ring-primary/20 placeholder:text-outline-variant/50 hover:border-outline-variant/30"
                    id="password"
                    placeholder="••••••••••••"
                    type="password"
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 text-xs ml-1">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Confirm Password Input Group (Only for Create Account) */}
              {!isSignIn && (
                <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label
                    className="text-sm font-medium text-on-surface-variant ml-1"
                    htmlFor="confirm-password"
                  >
                    Verify Passphrase
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">
                        password
                      </span>
                    </div>
                    <input
                      className="w-full pl-11 pr-4 py-3.5 bg-surface-container-lowest text-on-surface font-body rounded-xl border border-outline-variant/15 outline-none transition-all duration-200 focus:border-primary focus:ring-[4px] focus:ring-primary/20 placeholder:text-outline-variant/50 hover:border-outline-variant/30"
                      id="confirm-password"
                      placeholder="••••••••••••"
                      type="password"
                      {...register("confirmPassword")}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Primary CTA */}
            <button
              className="w-full mt-2 py-3.5 px-6 bg-primary text-on-primary font-semibold text-sm rounded-xl hover:bg-primary-container transition-all duration-200 shadow-[0_0_24px_rgba(173,198,255,0.15)] hover:shadow-[0_0_32px_rgba(77,142,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:pointer-events-none"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Processing..."
                : isSignIn
                ? "Initialize Session"
                : "Create Developer Profile"}
            </button>
          </form>

          {/* Seamless Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-surface-container-highest"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-medium text-outline-variant uppercase tracking-wider">
              External Providers
            </span>
            <div className="flex-grow border-t border-surface-container-highest"></div>
          </div>

          {/* Social Authentication */}
          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex items-center justify-center gap-3 px-4 py-3.5 bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/10 hover:border-outline-variant/30 rounded-xl transition-all duration-200 text-on-surface text-sm font-medium hover:-translate-y-0.5"
              type="button"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-on-surface"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fillRule="evenodd"
                ></path>
              </svg>
              GitHub
            </button>
            <button
              className="flex items-center justify-center gap-3 px-4 py-3.5 bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/10 hover:border-outline-variant/30 rounded-xl transition-all duration-200 text-on-surface text-sm font-medium hover:-translate-y-0.5"
              type="button"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              Google
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
