import React from "react";
import { Container } from "reactstrap";
import { Timeline } from "antd"; // Assurez-vous que Timeline est importé depuis Ant Design
import "./styles/commonsection.css";

const CommonSection = ({ title, timelineItems }) => {
  return (
    <section className="common__section mb-5">
      <Container className="text-center">
        <h1 className="text-light">{title}</h1>
        {timelineItems && (
          <Timeline mode="alternate">
            <Timeline mode="alternate" items={timelineItems.map((item, index) => 
              ({ content: item.children, key: index }))} />
          </Timeline>
        )}
      </Container>
    </section>
  );
};

export default CommonSection;
