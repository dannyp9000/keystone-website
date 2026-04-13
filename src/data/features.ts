import {
  Brain,
  Users,
  ClipboardCheck,
  FileText,
  PenTool,
  DollarSign,
  HardHat,
  Camera,
  Phone,
  Shield,
  MapPin,
  BarChart3,
  Building2,
  Megaphone,
  Bell,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  category: string;
}

export const featureCategories = [
  "Get Paid Faster",
  "Run Your Field Ops",
  "Grow Your Business",
] as const;

export const features: Feature[] = [
  {
    icon: Users,
    title: "Customer Tracking",
    description:
      "Keep all your customer info, property details, and lead sources in one place. Know who called, what they need, and where the job is before you leave the office.",
    benefits: [
      "Full customer profiles with contact info and history",
      "Property details like roof type, age, and square footage",
      "See where your best leads come from",
      "Catches duplicate entries before they happen",
    ],
    category: "Get Paid Faster",
  },
  {
    icon: ClipboardCheck,
    title: "Job Pipeline",
    description:
      "See every job at a glance. Drag and drop between stages like New Lead, Estimate, Contract, Install, and Paid. You always know where things stand.",
    benefits: [
      "Drag-and-drop board, table, or card view",
      "Set up custom stages that match your workflow",
      "Track insurance jobs with adjuster info",
      "Get alerts when jobs sit too long",
    ],
    category: "Get Paid Faster",
  },
  {
    icon: FileText,
    title: "Estimates",
    description:
      "Build professional estimates with multiple options so customers can pick their package. Send a link, they view it on their phone, and can accept with a signature.",
    benefits: [
      "Give customers budget, standard, and premium options",
      "Customers view and sign right on their phone",
      "Roofing product catalog built in",
      "Auto-numbered and ready to export as PDF",
    ],
    category: "Get Paid Faster",
  },
  {
    icon: PenTool,
    title: "Digital Contracts",
    description:
      "Create contracts from your own templates or upload existing ones. Send by email. Customers sign on their phone. You get notified the second they sign.",
    benefits: [
      "Use your own templates or build new ones",
      "Secure signing page with tracking",
      "Records the signer IP and timestamp",
      "Auto-fills customer and job details",
    ],
    category: "Get Paid Faster",
  },
  {
    icon: DollarSign,
    title: "Invoicing and Payments",
    description:
      "Create invoices, track partial payments, and always know what is owed. Invoices update automatically as payments come in.",
    benefits: [
      "Accept multiple payments per invoice",
      "Status updates automatically as money comes in",
      "Track sales commissions for your reps",
      "Log job expenses with receipt photos",
    ],
    category: "Get Paid Faster",
  },
  {
    icon: ClipboardCheck,
    title: "Roof Inspections",
    description:
      "Walk through a checklist on every inspection. Record measurements, note damage, rate the roof condition. All that data flows right into your estimate.",
    benefits: [
      "Custom checklists you can adjust per job type",
      "Aerial measurement data from EagleView",
      "Damage photos and condition ratings",
      "Measurements auto-fill your estimate line items",
    ],
    category: "Get Paid Faster",
  },
  {
    icon: HardHat,
    title: "Crew Management",
    description:
      "Assign work orders to crews, track hours with GPS, and handle payroll. Crews get their own simple app to clock in, see assignments, and upload photos.",
    benefits: [
      "Work orders with priority and scheduling",
      "GPS clock-in so you know they were on site",
      "Overtime calculation and payroll reports",
      "Crew portal works on any phone",
    ],
    category: "Run Your Field Ops",
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    description:
      "Take job photos, organize them in folders, and share galleries with customers. This replaces CompanyCam and it is built right into your job records.",
    benefits: [
      "Folders with custom names and colors per job",
      "Share password-protected galleries",
      "GPS tags on every photo",
      "Migrate from CompanyCam with one click",
    ],
    category: "Run Your Field Ops",
  },
  {
    icon: Phone,
    title: "Calls and Texting",
    description:
      "Track calls, record conversations, get AI transcriptions, and send texts. Provision your own business phone numbers right inside the platform.",
    benefits: [
      "Call recording with AI transcription",
      "Send and receive text messages",
      "Auto-text when you miss a call",
      "Full call history linked to each customer",
    ],
    category: "Run Your Field Ops",
  },
  {
    icon: Shield,
    title: "Warranties and Service",
    description:
      "Keep track of every warranty you offer. When a customer calls back with an issue, the service ticket links to the original job so your team has full context.",
    benefits: [
      "Track manufacturer and workmanship warranties",
      "Get alerts before warranties expire",
      "Service tickets link back to the original job",
      "Priority levels keep urgent issues on top",
    ],
    category: "Run Your Field Ops",
  },
  {
    icon: MapPin,
    title: "Suppliers and Materials",
    description:
      "Manage your supplier contacts, track inventory levels, and create purchase orders. Includes the Conklin product catalog with specs and pricing.",
    benefits: [
      "Rate your suppliers and track price history",
      "Inventory alerts when stock is low",
      "Conklin catalog with real pricing",
      "Purchase orders with delivery tracking",
    ],
    category: "Run Your Field Ops",
  },
  {
    icon: Brain,
    title: "Knox AI Assistant",
    description:
      "Knox is built into every page. Just type what you need. Create jobs, check the weather, schedule crews, or get a quick report. No menus to dig through.",
    benefits: [
      "32 quick commands for everyday tasks",
      "Analyzes roof photos for damage and materials",
      "Alerts you about stalled jobs and deadlines",
      "Undo any action within a configurable window",
    ],
    category: "Grow Your Business",
  },
  {
    icon: Megaphone,
    title: "Email and Text Campaigns",
    description:
      "Build multi-step email and text campaigns to stay in touch with past customers and nurture new leads. See who opens, clicks, and replies.",
    benefits: [
      "Multi-step email and text sequences",
      "Target customers by job status or location",
      "Track opens, clicks, and replies",
      "Reusable templates save time",
    ],
    category: "Grow Your Business",
  },
  {
    icon: BarChart3,
    title: "Dashboards and Reports",
    description:
      "Your main screen shows you what matters. Job pipeline, revenue, crew schedules, and overdue items. Every role sees the numbers that are relevant to them.",
    benefits: [
      "18 widgets that adjust to your role",
      "Revenue charts and pipeline funnels",
      "Crew utilization at a glance",
      "Export reports as PDF",
    ],
    category: "Grow Your Business",
  },
  {
    icon: Building2,
    title: "Multi-Location View",
    description:
      "Running more than one office? The HQ portal shows you how every location is performing. Drill into any branch without switching accounts.",
    benefits: [
      "See totals across all your offices",
      "Drill into any single location",
      "Manage users and access from one place",
      "Works for franchises and multi-state companies",
    ],
    category: "Grow Your Business",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Get instant alerts when something important happens. A new lead comes in, a contract gets signed, a payment is received. Click the alert and go straight to it.",
    benefits: [
      "Alerts for new leads, signed contracts, and payments",
      "Click any notification to jump straight to the record",
      "Mark as read or clear in bulk",
      "Works automatically with no setup needed",
    ],
    category: "Grow Your Business",
  },
  {
    icon: Settings,
    title: "Customize Everything",
    description:
      "Make Keystone OS your own. Custom pipeline stages, your logo on documents, phone system setup, team permissions, and seven color themes to choose from.",
    benefits: [
      "Drag-and-drop pipeline stage builder",
      "Your logo and colors on estimates and invoices",
      "Seven themes including dark mode",
      "Each team member controls their own notification settings",
    ],
    category: "Grow Your Business",
  },
];
