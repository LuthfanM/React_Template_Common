import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import clipboardFill from "@iconify/icons-eva/clipboard-fill";
import personDoneFill from "@iconify/icons-eva/person-done-fill";
import { PATH_DASHBOARD_CUSTOMER_APPROVAL, PATH_DASHBOARD_CUSTOMER_REGISTRATION, PATH_DASHBOARD_LOAN_REQUEST, PATH_DASHBOARD_LOAN_TRANSACTION } from "../../navigators/path";

const iconStyle = { color: "common.white" };
const getIcon = (name) => (
  <Icon icon={name} width={22} height={22} style={iconStyle} />
);

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "Customer",
    path: "/dashboard/master",
    icon: getIcon(clipboardFill),
    children: [
      {
        title: "Customer Registration",
        path: PATH_DASHBOARD_CUSTOMER_REGISTRATION,
      },
      {
        title: "Registration Approval",
        path: PATH_DASHBOARD_CUSTOMER_APPROVAL,
      }
    ],
  },
  {
    title: "Loan",
    path: "/dashboard/loan",
    icon: getIcon(personDoneFill),
    children: [
      {
        title: "Loan Request",
        path: PATH_DASHBOARD_LOAN_REQUEST,
      },
      {
        title: "Loan Transaction",
        path: PATH_DASHBOARD_LOAN_TRANSACTION,
      },
    ],
  },
];

export default sidebarConfig;
