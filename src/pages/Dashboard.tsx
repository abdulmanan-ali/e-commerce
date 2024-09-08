import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />

      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
        </div>

        {/* {widget} */}
        <section className="widget-container">
          <WidgetItem
            heading="Revenue"
            value={4777}
            percent={38}
            amount={true}
            color="rgb(0,115,255)"
          />
          <WidgetItem
            heading="Revenue"
            value={4777}
            percent={38}
            amount={true}
            color="rgb(0,115,255)"
          />
          <WidgetItem
            heading="Revenue"
            value={4777}
            percent={38}
            amount={true}
            color="rgb(0,115,255)"
          />
          <WidgetItem
            heading="Revenue"
            value={4777}
            percent={38}
            amount={true}
            color="rgb(0,115,255)"
          />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  amount?: boolean;
  color: string;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  amount,
  color,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      {amount ? `$${value}` : value}
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> {percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>
  </article>
);

export default Dashboard;
