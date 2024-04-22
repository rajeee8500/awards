import React from "react";
import "./AwardsList.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const awardsList = [
  {
    id: 1,
    name: "Arjuna Award",
    department: "Department of Sports",
  },
  {
    id: 2,
    name: "Dronacharya Award",
    department: "Department of Sports",
  },
  {
    id: 3,
    name: "Digital India Awards",
    department: "Ministry of Electronics and Information Technology",
  },
  {
    id: 4,
    name: "Gallantry Medal - PMG/GM",
    department: "Ministry of Home Affairs",
  },
  {
    id: 5,
    name: "Gallantry Medals - PPMG/PMG",
    department: "Ministry of Home Affairs",
  },
  {
    id: 6,
    name: "Jeevan Raksha Padak Series of Awards",
    department: "Ministry of Home Affairs",
  },
  {
    id: 7,
    name: "Kaushalacharya Award",
    department: "Ministry of Skill Development and Entrepreneurship",
  },
  {
    id: 8,
    name: "Major Dhyan Chand Khel Ratna Award",
    department: "Department of Sports",
  },
  {
    id: 9,
    name: "Maulana Abul Kalam Azad Trophy",
    department: "Department of Sports",
  },
  {
    id: 10,
    name: "Medal for Meritorious Service",
    department: "Ministry of Home Affairs",
  },
  {
    id: 11,
    name: "Nari Shakti Puraskar",
    department: "Ministry of Women and Child Development",
  },
  {
    id: 12,
    name: "National Award for Excellence in Forestry",
    department: "Ministry of Environment, Forest and Climate Change",
  },
  {
    id: 13,
    name: "National Award for Individual Excellence",
    department:
      "Department of Empowerment of Persons with Disabilities (Divyangjan)",
  },
  {
    id: 14,
    name: "National Award for Senior Citizens- Vayoshreshtha Samman",
    department: "Department of Social Justice and Empowerment",
  },
  {
    id: 15,
    name: "National Awards for e-Governance",
    department: "Department of Administrative Reforms and Public Grievances",
  },
  {
    id: 16,
    name: "National Awards for Institutions engaged in empowering persons with Disabilities",
    department:
      "Department of Empowerment of Persons with Disabilities (Divyangjan)",
  },
  {
    id: 17,
    name: "National Awards for Outstanding Services in the Field of Prevention of Alcoholism and Substance Abuse",
    department: "Department of Social Justice and Empowerment",
  },
  {
    id: 18,
    name: "National Awards for Science and Technology Communication",
    department: "Department of Science and Technology",
  },
];

const AwardCard = ({ name, department }) => (
  <div className="award-card">
    <h3>{name}</h3>
    <p>{department}</p>
    <a href="/details" className="details-link">
      Helpdesk View Details →
    </a>
  </div>
);

const AwardsGrid = () => {
  return (
    <div>
      <Navbar />
      <h1>Awardspedia</h1>
      <div className="awards-grid-container">
        {awardsList.map((award) => (
          <AwardCard key={award.id} {...award} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AwardsGrid;
