export default function Hero() {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center">

                <section className="text-center mt-5 pt-5">
                    <div
                        className="d-flex flex-column align-items-center mx-auto"
                        style={{ maxWidth: "800px" }}
                    >
                        <img
                            src="/header.png"
                            className="img-fluid mb-4 mx-auto d-block"
                            style={{ maxHeight: "380px" }}
                        />

                        <h1 className="fw-semibold fs-4 ml-2">
                            Everything You Need All In One Place
                        </h1>

                        <p
                            className="text-muted mt-3 text-center text-nowrap"
                            style={{
                                maxWidth: "400px",
                                fontSize: "14px",
                                lineHeight: "28px",
                                margin: "0 auto"
                            }}
                        >
                            Software and analytics services will render your chunks into meaningful data.
                        </p>



                        <button
                            className="btn px-5 py-2 rounded-pill mt-3 text-white"
                            style={{ backgroundColor: "#0E8388", borderColor: "#0E8388" }}
                        >
                            Register Now
                        </button>

                    </div>
                </section>

            </div>
        </>
    );
}
