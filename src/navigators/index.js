import * as screen from "../screens"
import {Navigate, useRoutes} from "react-router-dom"
import DashboardApp from "../screens/dashboard-menu/DashboardApp";
import { CustomerRegistration, CustomerApproval } from '../screens/dashboard-menu/customer'
import ActiveLoanRequested from "../screens/dashboard-app/ActiveLoanRequested";
import RemainingLoan from "../screens/dashboard-app/RemainingLoan";
import * as route from './path';
import { LoanRequest, LoanTransaction } from "../screens/dashboard-menu/loan";
import PersonalDetails from "../screens/dashboard-menu/customer/PersonalDetail";
import DashboardBox from "../screens/dashboard-app";
import { ACTIVE_LOAN, ACTIVE_LOAN_REQUESTED, REMAINING_LOAN } from "../utils/constants";

export default function Router() {

  return useRoutes ([
    {
      path: route.PATH_DEFAULT,
      element: <screen.Login />
    },
    {
      path: route.PATH_DASHBOARD,
      element: <screen.Dashboard />,
      children: [
        { element: <Navigate to={route.PATH_DASHBOARD_APP} replace /> },
        { path: 'app', element: <DashboardApp /> },
        // { path: 'customer', element: <Customer /> },
        
        //dashboard app
        { path: route.PATH_DASHBOARD_ACTIVE_LOAN, element: <DashboardBox type={ACTIVE_LOAN} />},
        { path: route.PATH_DASHBOARD_LOAN_REQUESTED, element: <DashboardBox type={REMAINING_LOAN} />},
        { path: route.PATH_DASHBOARD_REMAINING_LOAN, element: <DashboardBox type={ACTIVE_LOAN_REQUESTED} />},

        //dashboard customer
        { path: route.PATH_DASHBOARD_CUSTOMER_REGISTRATION, element: <CustomerRegistration />},
        { path: route.PATH_DASHBOARD_CUSTOMER_APPROVAL, element: <CustomerApproval />},
        { path: route.PATH_DASHBOARD_CUSTOMER_PERSONAL_DETAIL, element: <PersonalDetails />},

        //dashboard loan
        { path: route.PATH_DASHBOARD_LOAN_REQUEST, element: <LoanRequest />},
        { path: route.PATH_DASHBOARD_LOAN_TRANSACTION, element: <LoanTransaction />},
      ]
    },
  ]);
  
}
