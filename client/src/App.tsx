import { groupBy } from "lodash";
import useSWR from "swr";
import ApplicationList from "./components/ApplicationList";
import { Application } from "./components/ApplicationListItem";
import Layout from "./components/Layout";

function App() {
  const { data } = useSWR<Application[]>(
    `${import.meta.env.VITE_API_BASE_ROUTE}/apps`
  );

  const groupedApps = groupBy(data, (a) => a.group);

  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.keys(groupedApps).map((g) => (
          <ApplicationList group={g} applications={groupedApps[g]} />
        ))}
      </section>
    </Layout>
  );
}

export default App;
