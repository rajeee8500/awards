import React from "react";
import "./AwardsGrid.css";
const awardsData = [
  {
    name: "Tenzing Norgay National Adventure Award 2023",
    department: "Department of Youth Affairs",
    openDate: "15/04/2024",
    closeDate: "14/05/2024",
  },
  {
    name: "Medal for Meritorious Service 2024 ID",
    department: "Ministry of Home Affairs",
    openDate: "04/04/2024",
    closeDate: "15/05/2024",
  },
  {
    name: "President's Medal for Distinguished Service 2024 ID",
    department: "Ministry of Home Affairs",
    openDate: "15/04/2024",
    closeDate: "14/05/2024",
  },
  {
    name: "National Geoscience Awards 2023",
    department: "Department for Promotion of Industry and Internal Trade",
    openDate: "15/04/2024",
    closeDate: "14/05/2024",
  },
  {
    name: "One District One Product (ODOP) Awards 2024",
    department: "Department of Youth Affairs",
    openDate: "15/04/2024",
    closeDate: "14/05/2024",
  },
  {
    name: "Pradhan Mantri Rashtriya Bal Puraskar 2025",
    department: "Ministry of Women and Child Development",
    openDate: "15/04/2024",
    closeDate: "14/05/2024",
  },
  {
    name: "Gallantry Medal - PMG/GM 2024",
    department: "Ministry of Home Affairs",
    openDate: "15/04/2024",
    closeDate: "14/05/2024",
  },
  {
    name: "Geoscience Awards",
    department: "Ministry of Home Affairs",
    openDate: "15/04/2024",
    closeDate: "14/05/2024",
  },
  {
    name: "One Product (ODOP) Awards",
    department: "Ministry of Home Affairs",
    openDate: "15/04/2024",
    closeDate: "14/05/2024",
  },
];

const AwardCard = ({ award }) => (
  <div className="award-card">
    <h3>{award.name}</h3>
    <p>{award.department}</p>
    <p>
      Open From: {award.openDate} To {award.closeDate}
    </p>
    <a href="/details" className="details-link">
      Helpdesk View Details →
    </a>
  </div>
);

const AwardsGrid = () => {
  return (
    <div className="awards-container">
      <h1 className="text1">Nominations For Ongoing Awards</h1>
      <div className="awards-grid">
        {awardsData.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default AwardsGrid;
