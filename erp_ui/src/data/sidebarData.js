// Central navigation model.
// Each module maps to a sidebar section; each item maps to a route + page.
// `path` values are relative to the module's base path (see App.jsx).

import {
  LuLayoutDashboard,
  LuUsers,
  LuBuilding2,
  LuBadgeCheck,
  LuCalendarClock,
  LuPlaneTakeoff,
  LuWallet,
  LuUserSearch,
  LuListChecks,
  LuTrendingUp,
  LuLifeBuoy,
  LuSettings,
  LuCalendarDays,
  LuGlobe,
  LuPackage
} from "react-icons/lu";

const sidebarData = [
  {
    id: "home",
    label: "Home / About",
    icon: LuGlobe,
    basePath: "/",
    items: [],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LuLayoutDashboard,
    basePath: "/dashboard",
    items: [
      { id: "overview", label: "Overview", path: "overview" },
      { id: "analytics", label: "Analytics", path: "analytics" },
      { id: "activity", label: "Activity", path: "activity" },
    ],
  },
  {
    id: "employee",
    label: "Employee Management",
    icon: LuUsers,
    basePath: "/employees",
    items: [
      { id: "employee-master", label: "Employee Master", path: "master" },
      { id: "employee-directory", label: "Employee Directory", path: "directory" },
      { id: "employee-documents", label: "Employee Documents", path: "documents" },
      { id: "employee-profile", label: "Employee Profile", path: "profile" },
    ],
  },
  {
    id: "department",
    label: "Department Management",
    icon: LuBuilding2,
    basePath: "/departments",
    items: [
      { id: "department-master", label: "Department Master", path: "master" },
      { id: "department-list", label: "Department List", path: "list" },
    ],
  },
  {
    id: "designation",
    label: "Designation Management",
    icon: LuBadgeCheck,
    basePath: "/designations",
    items: [
      { id: "designation-master", label: "Designation Master", path: "master" },
      { id: "job-roles", label: "Job Roles", path: "job-roles" },
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: LuCalendarClock,
    basePath: "/attendance",
    items: [
      { id: "daily-attendance", label: "Daily Attendance", path: "daily" },
      { id: "monthly-attendance", label: "Monthly Attendance", path: "monthly" },
      { id: "shift-management", label: "Shift Management", path: "shifts" },
    ],
  },
  {
    id: "leave",
    label: "Leave Management",
    icon: LuPlaneTakeoff,
    basePath: "/leave",
    items: [
      { id: "leave-requests", label: "Leave Requests", path: "requests" },
      { id: "leave-balance", label: "Leave Balance", path: "balance" },
      { id: "leave-calendar", label: "Leave Calendar", path: "calendar" },
    ],
  },

  {
  id: "assets",
  label: "Asset Management",
  icon: LuPackage,
  basePath: "/assets",
  items: [
    {
      id: "my-assets",
      label: "My Assigned Assets",
      path: "my-assets",
    },
    {
      id: "request-asset",
      label: "Request New Asset",
      path: "request",
    },
    {
      id: "report-issue",
      label: "Report Issue / Return",
      path: "report",
    },
    {
      id: "asset-history",
      label: "Asset History",
      path: "history",
    },
  ],
},
  {
    id: "payroll",
    label: "Payroll",
    icon: LuWallet,
    basePath: "/payroll",
    items: [
      { id: "salary", label: "Salary", path: "salary" },
      { id: "payslips", label: "Payslips", path: "payslips" },
      { id: "tax", label: "Tax", path: "tax" },
      { id: "bonuses", label: "Bonuses", path: "bonuses" },
    ],
  },
  {
    id: "recruitment",
    label: "Recruitment",
    icon: LuUserSearch,
    basePath: "/recruitment",
    items: [
      { id: "job-openings", label: "Job Openings", path: "openings" },
      { id: "candidates", label: "Candidates", path: "candidates" },
      { id: "interview-schedule", label: "Interview Schedule", path: "interviews" },
      { id: "hiring-pipeline", label: "Hiring Pipeline", path: "pipeline" },
    ],
  },
  {
    id: "tasks",
    label: "Tasks & Projects",
    icon: LuListChecks,
    basePath: "/tasks",
    items: [
      { id: "my-tasks", label: "My Tasks", path: "my-tasks" },
      { id: "team-tasks", label: "Team Tasks", path: "team-tasks" },
      { id: "projects", label: "Projects", path: "projects" },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    icon: LuTrendingUp,
    basePath: "/performance",
    items: [
      { id: "performance-review", label: "Performance Review", path: "review" },
      { id: "goals", label: "Goals", path: "goals" },
      { id: "feedback", label: "Feedback", path: "feedback" },
    ],
  },
  {
    id: "helpdesk",
    label: "Help Desk",
    icon: LuLifeBuoy,
    basePath: "/help-desk",
    items: [
      { id: "support-tickets", label: "Support Tickets", path: "tickets" },
      { id: "faq", label: "FAQ", path: "faq" },
      { id: "contact-hr", label: "Contact HR", path: "contact" },
    ],
  },
  {
    id: "events",
    label: "Events & Calendar",
    icon: LuCalendarDays,
    basePath: "/events",
    items: [
      { id: "event-calendar", label: "Calendar View", path: "calendar" },
      { id: "event-list",     label: "Event List",    path: "list" },
      { id: "event-manage",  label: "Add / Edit Event", path: "manage" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: LuSettings,
    basePath: "/settings",
    items: [
      { id: "company-settings", label: "Company Settings", path: "company" },
      { id: "user-settings", label: "User Settings", path: "user" },
      { id: "permissions", label: "Permissions", path: "permissions" },
    ],
  },
];

export default sidebarData;
