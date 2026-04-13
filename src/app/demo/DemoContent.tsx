"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle2, ArrowRight, Clock, Monitor, Users } from "lucide-react";

interface DemoForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  crewSize: string;
  message: string;
}

const demoItems = [
  "How to track a job from first call to final payment",
  "Knox AI creating jobs and scheduling inspections live",
  "Building estimates with multiple options for customers",
  "Sending contracts and getting signatures on the spot",
  "Crew portal with GPS time tracking on any phone",
  "Photo management and shareable customer galleries",
  "Dashboard that shows you what needs attention today",
  "Multi-location view for companies with more than one office",
];

export function DemoContent() {
  const { register, handleSubmit, formState: { errors } } = useForm<DemoForm>();
  const onSubmit = (data: DemoForm) => {
    console.log("Demo form:", data);
    alert("Thank you. We will reach out within 24 hours to schedule your demo.");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                Free Demo
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                See Keystone OS in action
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                Get a walkthrough from someone who understands roofing. We will
                show you how the platform works for your specific situation.
                No pressure. No commitment.
              </p>
            </div>
          </AnimateIn>

          <div className="flex flex-wrap gap-4 mt-10">
            {[
              { icon: Clock, label: "30 minutes" },
              { icon: Monitor, label: "Live walkthrough" },
              { icon: Users, label: "Tailored to your role" },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={0.2 + i * 0.1}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                  <item.icon className="h-4 w-4 text-amber-400" />
                  <span className="text-sm text-white font-medium">{item.label}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form and checklist */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateIn direction="left">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 md:p-10">
                <h2 className="text-xl font-bold mb-6">Request your demo</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input id="d-name" label="Your Name" placeholder="John Smith"
                      error={errors.name?.message}
                      {...register("name", { required: "Required" })} />
                    <Input id="d-email" type="email" label="Email" placeholder="john@company.com"
                      error={errors.email?.message}
                      {...register("email", {
                        required: "Required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                      })} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input id="d-company" label="Company" placeholder="Your Roofing Company"
                      error={errors.company?.message}
                      {...register("company", { required: "Required" })} />
                    <Input id="d-phone" type="tel" label="Phone" placeholder="(555) 123-4567"
                      {...register("phone")} />
                  </div>
                  <Input id="d-crew" label="Team Size" placeholder="How many people on your team?"
                    {...register("crewSize")} />
                  <Textarea id="d-msg" label="What would you like to see?"
                    placeholder="Tell us about how you run things today..."
                    {...register("message")} />
                  <motion.button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-full shadow-lg shadow-amber-500/20 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Demo
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </form>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div>
                <h2 className="text-2xl font-bold mb-8">What we will show you</h2>
                <StaggerContainer className="space-y-4" staggerDelay={0.06}>
                  {demoItems.map((item) => (
                    <StaggerItem key={item}>
                      <motion.div
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <AnimateIn delay={0.6}>
                  <div className="mt-10 relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                      alt="Beautiful home with new roof"
                      width={800}
                      height={500}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                </AnimateIn>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
