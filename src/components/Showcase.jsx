import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

export default function Showcase() {
    return (
        <>
            <section className="py-5">
                <div className="container text-center">

                    <h2 className="fw-semibold mb-3">Build Better Websites With Us</h2>

                    <p
                        className="text-muted fs-6 mb-5"
                        style={{
                            maxWidth: "650px",
                            margin: "0 auto",
                            lineHeight: "25px"
                        }}
                    >
                        When you get staright to the point the presentation looks attractive on your web pages.
                        Keep it simple and clean always.
                    </p>

                    <div className="row align-items-center g-0 mb-5">

                        <div className="col-md-6 p-0">
                            <img src={img1} className="img-fluid rounded-3" />
                        </div>

                        <div className="col-md-6 text-start ps-md-4 mt-4 mt-md-0">
                            <h4 className="fw-semibold">Website Number One</h4>
                            <p className="text-muted mt-2" style={{ maxWidth: "330px", lineHeight: "24px" }}>
                                When you get starlight to the point the presentation looks attractive on your web pages.
                            </p>
                        </div>

                    </div>

                    <div className="row align-items-center g-0 mb-5">

                        <div className="col-md-6 order-2 order-md-1 text-start ps-md-4 mt-4 mt-md-0">
                            <h4 className="fw-semibold">Website Number Two</h4>
                            <p className="text-muted mt-2" style={{ maxWidth: "330px", lineHeight: "24px" }}>
                                When you get starlight to the point the presentation looks attractive on your web pages.
                            </p>
                        </div>

                        <div className="col-md-6 order-1 order-md-2 p-0">
                            <img src={img2} className="img-fluid rounded-3" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}
