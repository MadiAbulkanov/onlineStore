import {FC} from "react";

interface InfoPageLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const InfoPage: FC<InfoPageLayoutProps> = ({ title, className, children }) => {
  return (
    <div className={`info-page ${className}`}>
      <h1 className="info-page-title">{title}</h1>
      <div className="info-page-content">
        {children}
      </div>
    </div>
  )
};
