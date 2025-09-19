import React from "react";
import { Card } from "react-bootstrap";

const TeamMemberCard = ({ name, role, image }) => {
  return (
    <Card className="h-100 shadow-sm border-0 text-center">
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ borderRadius: "50%", width: "120px", height: "120px", margin: "20px auto" }}
      />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text className="text-muted">{role}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamMemberCard;
