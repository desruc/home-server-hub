import type { Application } from "./ApplicationListItem";
import ApplicationListItem from "./ApplicationListItem";

interface ApplicationListProps {
  group: string;
  applications: Application[];
}

function ApplicationList({ group, applications }: ApplicationListProps) {
  return (
    <div className="mb-6">
      <p className="text-sm mb-4 text-paragraph uppercase font-bold">{group}</p>
      <ul>
        {applications.map((a) => (
          <ApplicationListItem key={a.link} application={a} />
        ))}
      </ul>
    </div>
  );
}

export default ApplicationList;
