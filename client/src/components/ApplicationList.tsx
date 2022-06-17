import type { Application } from "./ApplicationListItem";
import ApplicationListItem from "./ApplicationListItem";

interface ApplicationListProps {
  group: string;
  applications: Application[];
}

function ApplicationList({ group, applications }: ApplicationListProps) {
  return (
    <div className="mb-6">
      <h3 className="mb-4">{group}</h3>
      <ul>
        {applications.map((a) => (
          <ApplicationListItem key={a.link} application={a} />
        ))}
      </ul>
    </div>
  );
}

export default ApplicationList;
