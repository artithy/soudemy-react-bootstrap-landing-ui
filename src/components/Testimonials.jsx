import user from "../assets/user.png";

export default function Testimonials() {
    return (
        <>
            <section className="py-5">
                <div className="container text-center">
                    <h2 className=" mb-3">
                        Customers Say Nice Things
                    </h2>
                    <p className="text-muted fs-6 mb-5" style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        lineHeight: "24px"
                    }}>
                        We have very fair pricing policy that would benefit you and us at the same time.
                        Get the free plan & if you need more – pay.
                    </p>

                    <div className="mx-auto p-5 rounded-4" style={{ maxWidth: "800px", backgroundColor: "#D5E4DF" }}>
                        <img
                            src={user}
                            className="rounded-circle mb-3"
                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />
                        <h6 className="fw-semibold mb-3">Melissa Vanbergh</h6>

                        <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "24px" }}>
                            "We have very fair pricing policy that would benefit you and us at the same time.
                            Choose what price you're willing to pay. Get the free plan & if you need more – pay."
                        </p>

                    </div>

                </div>
            </section>
        </>
    );
}