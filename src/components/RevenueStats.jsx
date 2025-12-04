export default function RevenueStats() {
    return (
        <>
            <section className="py-5" style={{ backgroundColor: "#0E8388", color: "white" }}>
                <div className="container text-center">
                    <h2 className="fw-semibold mb-2">
                        Boost Your Revenue & Cut Work Hours
                    </h2>

                    <p className="mb-5" style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        fontSize: "16px",
                        opacity: 0.9
                    }}>
                        Organized workflow and predictive patterns to boost your revenue.

                    </p>

                    <div className="row text-center justify-content-center mb-4">
                        <div className="col-md-4 mb-4">
                            <h1 style={{ fontSize: "90px", fontWeight: "600" }}>47%</h1>
                            <p style={{ opacity: 0.9, marginTop: "-10px" }}>
                                Lesser backlogs
                            </p>

                        </div>

                        <div className="col-md-4 mb-4">
                            <h1 style={{ fontSize: "90px", fontWeight: "600" }}>33%</h1>
                            <p style={{ opacity: 0.9, marginTop: "-10px" }}>
                                Higher Profits
                            </p>

                        </div>

                        <div className="col-md-4 mb-4">
                            <h1 style={{ fontSize: "90px", fontWeight: "600" }}>33%</h1>
                            <p style={{ opacity: 0.9, marginTop: "-10px" }}>
                                Higher Profits
                            </p>

                        </div>

                    </div>

                    < a href="#" className="text-white" style={{ textDecoration: "underline", opacity: 0.9 }}>
                        Know More About Our Company
                    </a>
                </div>

            </section>

        </>
    );
}