import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

import Overview from "./pages/Dashboard/DashboardPages/Overview";
import Analytics from "./pages/Dashboard/DashboardPages/Analytics";
import Activity from "./pages/Dashboard/DashboardPages/Activity";

import EmployeeMaster from "./pages/Employee/EmployeeMaster";
import EmployeeDirectory from "./pages/Employee/EmployeeDirectory";
import EmployeeDocuments from "./pages/Employee/EmployeeDocuments";
import EmployeeProfile from "./pages/Employee/EmployeeProfile";

import DepartmentMaster from "./pages/Departments/DepartmentMaster";
import DepartmentList from "./pages/Departments/DepartmentList";

import DesignationMaster from "./pages/Designations/DesignationMaster";
import JobRoles from "./pages/Designations/JobRoles";

import DailyAttendance from "./pages/Attendance/DailyAttendance";
import MonthlyAttendance from "./pages/Attendance/MonthlyAttendance";
import ShiftManagement from "./pages/Attendance/ShiftManagement";

import LeaveRequests from "./pages/Leave/LeaveRequests";
import LeaveBalance from "./pages/Leave/LeaveBalance";
import LeaveCalendar from "./pages/Leave/LeaveCalendar";

import Salary from "./pages/Payroll/Salary";
import Payslips from "./pages/Payroll/Payslips";
import Tax from "./pages/Payroll/Tax";
import Bonuses from "./pages/Payroll/Bonuses";

import JobOpenings from "./pages/Recruitment/JobOpenings";
import Candidates from "./pages/Recruitment/Candidates";
import InterviewSchedule from "./pages/Recruitment/InterviewSchedule";
import HiringPipeline from "./pages/Recruitment/HiringPipeline";

import MyTasks from "./pages/Tasks/MyTasks";
import TeamTasks from "./pages/Tasks/TeamTasks";
import Projects from "./pages/Tasks/Projects";

import PerformanceReview from "./pages/Performance/PerformanceReview";
import Goals from "./pages/Performance/Goals";
import Feedback from "./pages/Performance/Feedback";

import SupportTickets from "./pages/HelpDesk/SupportTickets";
import FAQ from "./pages/HelpDesk/FAQ";
import ContactHR from "./pages/HelpDesk/ContactHR";

import CompanySettings from "./pages/Settings/CompanySettings";
import UserSettings from "./pages/Settings/UserSettings";
import Permissions from "./pages/Settings/Permissions";

import NotFound from "./pages/NotFound";

import EventCalendar from "./pages/Events/EventCalendar";
import EventList from "./pages/Events/EventList";
import EventForm from "./pages/Events/EventForm";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Navigate to="/dashboard/overview" replace />} />

        <Route element={<DashboardLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/activity" element={<Activity />} />

          <Route path="/employees/master" element={<EmployeeMaster />} />
          <Route path="/employees/directory" element={<EmployeeDirectory />} />
          <Route path="/employees/documents" element={<EmployeeDocuments />} />
          <Route path="/employees/profile" element={<EmployeeProfile />} />

          <Route path="/departments/master" element={<DepartmentMaster />} />
          <Route path="/departments/list" element={<DepartmentList />} />

          <Route path="/designations/master" element={<DesignationMaster />} />
          <Route path="/designations/job-roles" element={<JobRoles />} />

          <Route path="/attendance/daily" element={<DailyAttendance />} />
          <Route path="/attendance/monthly" element={<MonthlyAttendance />} />
          <Route path="/attendance/shifts" element={<ShiftManagement />} />

          <Route path="/leave/requests" element={<LeaveRequests />} />
          <Route path="/leave/balance" element={<LeaveBalance />} />
          <Route path="/leave/calendar" element={<LeaveCalendar />} />

          <Route path="/payroll/salary" element={<Salary />} />
          <Route path="/payroll/payslips" element={<Payslips />} />
          <Route path="/payroll/tax" element={<Tax />} />
          <Route path="/payroll/bonuses" element={<Bonuses />} />

          <Route path="/recruitment/openings" element={<JobOpenings />} />
          <Route path="/recruitment/candidates" element={<Candidates />} />
          <Route path="/recruitment/interviews" element={<InterviewSchedule />} />
          <Route path="/recruitment/pipeline" element={<HiringPipeline />} />

          <Route path="/tasks/my-tasks" element={<MyTasks />} />
          <Route path="/tasks/team-tasks" element={<TeamTasks />} />
          <Route path="/tasks/projects" element={<Projects />} />

          <Route path="/performance/review" element={<PerformanceReview />} />
          <Route path="/performance/goals" element={<Goals />} />
          <Route path="/performance/feedback" element={<Feedback />} />

          <Route path="/help-desk/tickets" element={<SupportTickets />} />
          <Route path="/help-desk/faq" element={<FAQ />} />
          <Route path="/help-desk/contact" element={<ContactHR />} />

          <Route path="/settings/company" element={<CompanySettings />} />
          <Route path="/settings/user" element={<UserSettings />} />
          <Route path="/settings/permissions" element={<Permissions />} />

          <Route path="/events/calendar" element={<EventCalendar />} />
          <Route path="/events/list" element={<EventList />} />
          <Route path="/events/manage" element={<EventForm />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
