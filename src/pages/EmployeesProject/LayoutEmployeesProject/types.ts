import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface Employee {
  id?: string
  name: string ;
  surName: string ;
  age:  string ;
  jobPosition?: string ;
}
export enum PagesNavigation {
  HOME = "/",
  CREATE_EMPLOYEES = "/create",
  EMPLOYEES = "/employees",
}
