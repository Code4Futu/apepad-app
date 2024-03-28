import { createContext, ReactNode } from "react";

export interface PageProps {
  className?: string;
  name: string;
  title?: ReactNode;
  description?: ReactNode;
}

export const WizardContext: React.Context<
  Partial<{
    currentPage: string;
    goToPage: (page: string) => void;
    pages: PageProps[];
    doneText: ReactNode;
  }>
> = createContext({});
