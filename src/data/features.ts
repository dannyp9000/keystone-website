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
  "Revenue Engine",
  "Field Operations",
  "Intelligence & Growth",
] as const;

export const features: Feature[] = [
  {
    icon: Users,
    title: "CRM & Customer Management",
    description:
      "Track every customer, property, and lead source from first contact through repeat business. Full property profiles with roof specs, GPS coordinates, and aerial measurements give your team the context they need before they ever leave the office.",
    benefits: [
      "Complete customer lifecycle tracking",
      "Property profiles with roof type, age, pitch, and square footage",
      "Lead source attribution for marketing ROI",
      "Duplicate detection to keep your database clean",
    ],
    category: "Revenue Engine",
  },
  {
    icon: ClipboardCheck,
    title: "10-Stage Jobs Pipeline",
    description:
      "Visualize every job from lead to closed in a drag-and-drop Kanban board, sortable table, or card view. Custom pipelines let you build the workflow that matches how your company actually operates — not how some software company thinks you should.",
    benefits: [
      "Drag-and-drop Kanban, table, and card views",
      "Custom pipeline stages with target days and color coding",
      "Insurance workflow with adjuster tracking",
      "Stalled job detection flags bottlenecks automatically",
    ],
    category: "Revenue Engine",
  },
  {
    icon: FileText,
    title: "Multi-Option Estimates",
    description:
      "Build professional estimates with material and labor line items, waste factors, and tax calculations. Send multi-option proposals so customers can compare budget vs. premium packages — and accept with a single click and e-signature.",
    benefits: [
      "Multi-option proposals (budget, standard, premium)",
      "Public proposal page with e-signature acceptance",
      "Conklin product catalog integration with live pricing",
      "Automatic sequential numbering and PDF export",
    ],
    category: "Revenue Engine",
  },
  {
    icon: PenTool,
    title: "E-Signature Contracts",
    description:
      "Generate contracts from templates or upload existing DOCX files, send them for signing via email, and capture legally binding e-signatures — all without leaving the platform. Token-based security with IP capture and expiration tracking.",
    benefits: [
      "Generate from templates or upload existing contracts",
      "Secure public signing page with token expiration",
      "IP address and signing attempt audit trail",
      "Auto-populate from job, customer, and estimate data",
    ],
    category: "Revenue Engine",
  },
  {
    icon: DollarSign,
    title: "Invoicing & Payments",
    description:
      "Create invoices, track partial payments, and monitor cash flow in real time. Automatic status updates move invoices from sent to partial to paid. Sales commission tracking and expense logging give you true job profitability.",
    benefits: [
      "Multiple partial payments per invoice",
      "Automatic balance and status calculations",
      "Sales commission tracking with approval workflow",
      "Job-level expense tracking with receipt uploads",
    ],
    category: "Revenue Engine",
  },
  {
    icon: ClipboardCheck,
    title: "Field Inspections",
    description:
      "Structured inspection checklists, roof measurements, damage documentation, and condition ratings. Inspection data flows directly into estimates — measurements auto-populate line item quantities. EagleView aerial measurement integration included.",
    benefits: [
      "Customizable checklists with completion tracking",
      "Aerial measurements from EagleView integration",
      "Damage findings and condition ratings",
      "Measurements auto-feed into estimate line items",
    ],
    category: "Revenue Engine",
  },
  {
    icon: HardHat,
    title: "Production & Crew Management",
    description:
      "Assign work orders to crews, track GPS-verified timesheets, and process payroll — all from one screen. Your crew members get their own mobile-first portal to clock in, view assignments, and upload job photos from the field.",
    benefits: [
      "Work orders with priority, scheduling, and cost tracking",
      "GPS-verified clock-in/out with location comparison",
      "Overtime calculation and payroll processing",
      "Dedicated Crew Portal for field workers",
    ],
    category: "Field Operations",
  },
  {
    icon: Camera,
    title: "Key Cam Photo Documentation",
    description:
      "A complete CompanyCam replacement built into the platform. Organize photos by job with folder hierarchies, share public galleries with password protection, and migrate your existing CompanyCam library with one click.",
    benefits: [
      "Job-organized folders with custom icons and colors",
      "Public galleries with password protection",
      "GPS tagging, favorites, tags, and bulk download",
      "One-click CompanyCam migration",
    ],
    category: "Field Operations",
  },
  {
    icon: Phone,
    title: "Twilio Communications",
    description:
      "Professional phone system with call tracking, automatic recording, AI transcription, and SMS messaging. Provision local and toll-free numbers, set up missed-call auto-textback, and maintain a complete communication history per customer.",
    benefits: [
      "Call recording and AI-powered transcription",
      "SMS messaging with opt-out compliance",
      "Missed call auto-textback templates",
      "Full call history linked to customers and jobs",
    ],
    category: "Field Operations",
  },
  {
    icon: Shield,
    title: "Warranties & Service Tickets",
    description:
      "Track manufacturer, workmanship, and extended warranties with expiration alerts. When a customer calls back with an issue, service tickets link directly to the original job and warranty — giving your team full context before the truck rolls.",
    benefits: [
      "Warranty tracking with expiration dashboard alerts",
      "Service tickets linked to jobs and warranties",
      "Priority-based ticket management",
      "Transferable warranty support",
    ],
    category: "Field Operations",
  },
  {
    icon: MapPin,
    title: "Suppliers & Inventory",
    description:
      "Manage supplier relationships, track inventory levels with automatic reorder alerts, and create purchase orders. Includes dedicated Conklin product catalog with specs and pricing, plus EagleView aerial measurement ordering hub.",
    benefits: [
      "Supplier ratings and price history tracking",
      "Inventory with reorder points and transaction logging",
      "Conklin product catalog with live pricing",
      "EagleView aerial measurement hub",
    ],
    category: "Field Operations",
  },
  {
    icon: Brain,
    title: "Knox AI Assistant",
    description:
      "Your AI-powered co-pilot available on every page. Knox understands your business data and can create jobs, update statuses, analyze photos, check weather, and surface proactive insights — all through natural language or 32 slash commands.",
    benefits: [
      "32 slash commands for job, scheduling, and financial management",
      "Photo analysis for damage assessment and material identification",
      "Proactive insights for stalled jobs and upcoming deadlines",
      "Configurable action tiers with undo support",
    ],
    category: "Intelligence & Growth",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description:
      "Build multi-step email and SMS campaigns with audience segmentation. Automate follow-up sequences that nurture leads and drive repeat business — with engagement tracking that shows exactly which messages move the needle.",
    benefits: [
      "Multi-step email and SMS campaign sequences",
      "Audience segmentation by customer attributes",
      "Engagement tracking (opens, clicks, replies)",
      "Reusable templates with variable placeholders",
    ],
    category: "Intelligence & Growth",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Reports",
    description:
      "Role-aware dashboards with 18 widgets show each team member exactly what matters to them. Pipeline funnels, revenue breakdowns, crew utilization, and financial health — all visualized in real time with no manual spreadsheet work.",
    benefits: [
      "18 role-aware dashboard widgets",
      "Pipeline funnel and revenue breakdown charts",
      "Crew utilization and timesheet visibility",
      "PDF export for board meetings and reviews",
    ],
    category: "Intelligence & Growth",
  },
  {
    icon: Building2,
    title: "Multi-Location HQ Portal",
    description:
      "Franchise and multi-office operators get a dedicated HQ portal with cross-branch analytics, centralized user management, and the ability to drill into any office's data. Scale from one truck to fifty locations without outgrowing the platform.",
    benefits: [
      "Aggregate metrics across all branch offices",
      "Drill-down into individual office performance",
      "Cross-branch user and access management",
      "HQ-level settings and configuration",
    ],
    category: "Intelligence & Growth",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Automatic alerts for the events that matter: new leads, signed contracts, received payments, completed inspections, expiring warranties. Deep links take you straight to the source. Never miss a critical update again.",
    benefits: [
      "10 notification types covering every key event",
      "Deep links to source records",
      "Mark as read individually or in bulk",
      "Database trigger-powered — zero manual setup",
    ],
    category: "Intelligence & Growth",
  },
  {
    icon: Settings,
    title: "Full Customization",
    description:
      "Make Keystone OS yours: custom pipeline stages, document branding with your logo and colors, 7 theme variants, phone system configuration, team permissions, and tax defaults. Every setting is company-scoped for multi-tenant isolation.",
    benefits: [
      "Custom pipelines with drag-and-drop stage ordering",
      "Document branding (logo, colors, headers, footers)",
      "7 theme variants including multiple dark modes",
      "Per-user notification preferences",
    ],
    category: "Intelligence & Growth",
  },
];
