export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 bg-white fixed-top">
                <div className="container-fluid px-5">
                    <a className="navbar-brand fs-3" href="#">
                        Soudemy
                    </a>

                    <buttton className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </buttton>

                    <div className="collpase navbar-collapse" id="navMenu">
                        <ul className="navbar-nav ms-auto align-items-center gap-4">
                            <li><a className="nav-link" href="#">Products</a></li>
                            <li><a className="nav-link" href="#">Features</a></li>
                            <li><a className="nav-link" href="#">Reviews</a></li>
                            <li><a className="nav-link" href="#">Pricing</a></li>
                            <li>
                                <a
                                    className="btn px-4 rounded-pill text-white"
                                    style={{ backgroundColor: "#0E8388", borderColor: "#0E8388" }}
                                    href="#"
                                >
                                    Sign up
                                </a>
                            </li>



                        </ul>
                    </div>
                </div>

            </nav >

        </>
    )
}