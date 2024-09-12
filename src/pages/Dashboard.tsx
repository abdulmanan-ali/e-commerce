import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/userpic.png";
import data from "../assets/CategoryData.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";

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

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>

          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4},${i.value}%,50%)`}
                />
              ))}
            </div> 
          </div>
        </section>
        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p><BiMaleFemale /></p>
          </div>
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
    <div className="widget-info">
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

interface categoryItemProps {
  heading: string;
  value: number;
  color: string;
}

const CategoryItem = ({ heading, value, color }: categoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
