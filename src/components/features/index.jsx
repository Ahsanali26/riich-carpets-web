import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSection from "@/components/titleSection";

function Feature({ data, titleSectionData, classes, headingClasses }) {
  return (
    <>
      <div className={`ltn__feature-area pt-115 pb-90 ${classes}`}>
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                titleSectionData={titleSectionData}
                sectionClasses={titleSectionData.sectionClasses}
                headingClasses={headingClasses}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            {data.map((item, key) => {
              return (
                <Col
                  key={key}
                  xs={12}
                  sm={6}
                  lg={4}
                  style={{ display: "flex" }}
                >
                  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                    <div className="ltn__feature-info">
                      <h3>{item.title}</h3>
                      <p>{item.shortDescription}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature;
