import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
} from "react-icons/di";
import { 
  SiMysql,
  SiHtml5,
  SiCss3,
  SiLatex,
  SiMaterialui,
  SiRedux,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex />
      </Col>
    </Row>
  );
}

export default Techstack;
