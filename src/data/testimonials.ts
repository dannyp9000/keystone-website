export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We were juggling AccuLynx for CRM, CompanyCam for photos, and spreadsheets for everything else. Keystone OS replaced all of it in one weekend. Our office manager nearly cried tears of joy.",
    name: "Marcus Rivera",
    title: "Owner",
    company: "Summit Roofing & Exteriors",
  },
  {
    quote:
      "Knox AI alone is worth the subscription. My sales reps just type '/newjob' and it handles the rest. We went from 45 minutes of data entry per job to about 3.",
    name: "Danielle Okafor",
    title: "Operations Manager",
    company: "Apex Commercial Roofing",
  },
  {
    quote:
      "The crew portal changed how we run our field ops. GPS time tracking, work orders on their phones, photo uploads from the roof. No more 'I forgot to log my hours' excuses.",
    name: "Travis McBride",
    title: "Production Manager",
    company: "Iron Shield Contracting",
  },
  {
    quote:
      "We manage 12 offices across 3 states. Before Keystone, I had zero visibility into branch performance. The HQ portal gives me everything at a glance.",
    name: "Kathleen Nguyen",
    title: "CEO",
    company: "National Roof Partners",
  },
  {
    quote:
      "The e-signature contracts and multi-option estimates are a game changer. Customers pick their package, sign on their phone, and we're scheduling the job before they hang up.",
    name: "Derek Hollowell",
    title: "Sales Director",
    company: "StormGuard Roofing",
  },
  {
    quote:
      "I was paying $300/month for CompanyCam alone. Key Cam does everything it does, plus it's connected to my jobs, estimates, and inspections. It just makes sense.",
    name: "Brenda Castellano",
    title: "Owner",
    company: "Castellano Roofing Co.",
  },
];

export const stats = [
  { value: "89", label: "Database Tables" },
  { value: "310", label: "Security Policies" },
  { value: "21", label: "Edge Functions" },
  { value: "11", label: "User Roles" },
  { value: "32", label: "AI Commands" },
  { value: "18", label: "Dashboard Widgets" },
];
