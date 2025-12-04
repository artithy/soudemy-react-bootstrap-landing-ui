export default function CTASection() {
    return (
        <>
            <section
                className="py-5 text-center"
                style={{ backgroundColor: "#d5e4df" }}
            >
                <div className="container">

                    <p
                        className="text-muted mb-2"
                        style={{ letterSpacing: "1px", fontSize: "13px" }}
                    >
                        GRAB ARRAY FOR BEST PRICE TODAY
                    </p>

                    <h2
                        className="fw-semibold mb-4"
                        style={{ maxWidth: "750px", margin: "0 auto", lineHeight: "38px" }}
                    >
                        Start now and turn your online business into
                        <br /> a profitable route.
                    </h2>
                    <div style={{ maxWidth: "450px", margin: "0 auto" }}>
                        <input
                            type="email"
                            className="form-control mb-3 py-2"
                            placeholder="Enter Your Email Address"
                            style={{
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                height: "45px"
                            }}
                        />
                        <button
                            className="btn w-100 py-2"
                            style={{
                                backgroundColor: "#3a7e82",
                                color: "white",
                                borderRadius: "8px",
                                height: "45px"
                            }}
                        >
                            Sign Up Now
                        </button>

                        <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
                            14-day free trial and no credit card required.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="py-3" style={{ backgroundColor: "#d5e4df" }}>
                <div className="container d-flex justify-content-between align-items-center">

                    <p className="m-0 fw-semibold">Soudemy</p>

                    <p className="m-0 text-muted">All Rights Reserved</p>

                    <div className="text-muted d-flex gap-3">
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>Linkedin</span>
                    </div>

                </div>
            </footer>
        </>
    );
}
