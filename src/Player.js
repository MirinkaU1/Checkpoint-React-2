import React from 'react';
import { Card } from 'react-bootstrap';
import './index.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-text">
          <strong>Équipe :</strong> {team}<br />
          <strong>Nationalité :</strong> {nationality}<br />
          <strong>Numéro :</strong> {jerseyNumber}<br />
          <strong>Âge :</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;