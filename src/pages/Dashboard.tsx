import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import userImage from  "../assets/userpic.png"

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />

      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImage} alt="" />
        </div>

        {/* {widget} */}
        <section className="widget-container">
          <WidgetItem
            heading="Revenue"
            value={4777}
            percent={-9}
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
            value={-2}
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

    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);

export default Dashboard;
