import bell from "../assets/bell.png";

export default function Products() {
    return (
        <>
            <section className="py-5" style={{ backgroundColor: "#d5e4df" }}>
                <div className="container text-center">
                    <h2 className="fw-semibold mb-3">Our Products</h2>
                    <p className="text-muted fs-6 mb-5" style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "26px" }}>
                        We’ll Deliver the best stories and ideas on the topics you care about most straight to
                        your homepage, app, or inbox.

                    </p>

                    <div className="row g-4 justify-content-center">

                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div className="col-md-4 justify-content-center">
                                <div className="p-4 bg-white rounded-4 text-center h-100 shadow-sm">
                                    <div className="d-flex justify-content-center mb-3 align-items-center mx-auto rounded-circle"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#eeeeee"
                                        }}>

                                        <img
                                            src={bell}
                                            style={{ height: "40px", opacity: 0.6 }}
                                        />
                                    </div>
                                    <h5 className="">
                                        {`products ${num === 1 ? "One" :
                                            num === 2 ? "Two" :
                                                num === 3 ? "Three" :
                                                    num === 4 ? "Four" :
                                                        num === 5 ? "Five" : "Sex"
                                            }`}

                                    </h5>

                                    <p className=" text-muted mt-2" style={{ maxWidth: "250px", margin: "0 auto", lineHeight: "24px" }}>
                                        Deliver the best stories<br />
                                        and ideas on the topics<br />
                                        you care about most<br />
                                        straight to you.

                                    </p>


                                </div>


                            </div>

                        ))}



                    </div>

                </div>

            </section>
        </>
    );
}
