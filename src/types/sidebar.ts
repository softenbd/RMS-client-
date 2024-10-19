import { ElementType, ReactNode } from 'react';

export type TRoute = {
  path?: string;
  index?: boolean;
  element: React.ReactNode;
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
} | undefined;


export type TSidebarPath = {
  name: string;
  index?:boolean;
  path?: string;
  icon?: ElementType; 
  element?: ReactNode;
  children?: TSidebarPath[];
};
