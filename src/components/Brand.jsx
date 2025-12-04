import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";



export default function Brand() {
    return (
        <>
            <section className="py-4">
                <div className="container d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
                        <img src={logo1} className="img-fluid" style={{ height: "60px" }} />
                        <img src={logo2} className="img-fluid" style={{ height: "60px" }} />
                        <img src={logo3} className="img-fluid" style={{ height: "60px" }} />
                        <img src={logo4} className="img-fluid" style={{ height: "60px" }} />
                        <img src={logo5} className="img-fluid" style={{ height: "60px" }} />
                    </div>

                </div>

            </section>
        </>
    );
}