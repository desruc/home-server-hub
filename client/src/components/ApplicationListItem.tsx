export interface Application {
  group: string;
  icon: string;
  title: string;
  link: string;
}

interface ApplicationListItemProps {
  application: Application;
}

function ApplicationListItem({ application }: ApplicationListItemProps) {
  const { link, icon, title } = application;
  return (
    <li className="mb-4">
      <a
        href={link}
        className="group inline-block"
        title="Go to app"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex">
          <img
            src={icon || "/placeholder-icon.png"}
            alt="app-icon"
            className="h-14 w-14 rounded-md"
          />
          <div className="ml-4">
            <h4 className="text-heading group-hover:text-primary transition-colors break-words">
              {title}
            </h4>
            <p className="text-xs font-bold">{link}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default ApplicationListItem;
