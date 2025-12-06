import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

export default function Showcase() {
    return (
        <section className="py-5">
            <div className="container-fluid px-md-5">
                <div className="text-center mb-5">
                    <h2 className="fw-semibold">Build Better Websites With Us</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
                        When you get straight to the point the presentation looks attractive on your web pages.
                    </p>
                </div>

                <div className="row justify-content-end mb-5">
                    <div className="col-md-10">
                        <div className="row align-items-center g-0">

                            <div className="col-md-6 p-0">
                                <img src={img1} className="img-fluid rounded-3" />
                            </div>

                            <div className="col-md-6 text-start ps-md-4">
                                <h4 className="fw-semibold">Website Number One</h4>
                                <p className="text-muted" style={{ maxWidth: "330px" }}>
                                    When you get starlight to the point the presentation looks attractive on your web pages.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row justify-content-end mb-5">
                    <div className="col-md-10">
                        <div className="row align-items-center g-0">
                            <div className="col-md-6 text-start pe-md-4">
                                <h4 className="fw-semibold">Website Number Two</h4>
                                <p className="text-muted" style={{ maxWidth: "330px" }}>
                                    When you get starlight to the point the presentation looks attractive on your web pages.
                                </p>
                            </div>

                            <div className="col-md-6 p-0">
                                <img src={img2} className="img-fluid rounded-3" />
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}
