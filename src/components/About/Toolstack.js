import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiHeroku,
  SiNetlify,
  SiVercel,
  
  SiFirebase,
  SiVim,
  SiPostman
} from "react-icons/si";
import {
  FaBitbucket,
  FaFontAwesomeFlag
} from "react-icons/fa";
import {
  AiFillGitlab,
  AiOutlineGithub
} from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGitlab/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBitbucket/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVim/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFontAwesomeFlag/>
      </Col>
    </Row>
  );
}

export default Toolstack;
