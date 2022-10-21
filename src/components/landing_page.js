import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./Landing.css";
import LogoUMN from "../images/logoUMN.png";

const LandingPage = ({ imageSrc }) => {
    return (
        <div className="landing">
            <div className="form-authentication">
                <div className="mb-3">
                    <div className="login-grid">
                        <button type="submit" className="btn btn-link">
                            <Link to="/sign-in" class="btn btn-primary">
                                Login
                            </Link>
                        </button>
                    </div>
                    <div className="register-grid">
                        <button type="submit" className="btn btn-link">
                            <Link to="/sign-up" class="btn btn-primary">
                                Register
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <h1>Pengembangan Web App sebagai Media Dashboard untuk Pemantauan Sistem Tumbuh Tanaman Memanfaatkan IoT</h1>
            <img src={LogoUMN} className="landing_image" />
            <div className="visi_misi">
                <h1 className="visi">
                    Visi UMN:
                    <p>
                        Universitas Multimedia Nusantara menjadi perguruan tinggi unggul di bidang ICT, baik di tingkat nasional maupun international, yang menghasilkan lulusan berwawasan international yang berkompetisi tinggi di bidangnya (berkeahlian) yang disertai jiwa wirausaha serta berbudi pekerti luhur.
                    </p>
                </h1>
                <h1 className="misi">
                    Misi UMN:
                    <p>
                        Turut serta mencerdaskan kehidupan bangsa dan memajukan kesejahteraan bangsa melalui upaya penyelenggaraan pendidikan tinggi dengan melaksanakan Tridarma Perguruan Tinggi (Pendidikan, Penelitian, dan Pengabdian Pada Masyarakat), untuk meningkatkan kualitas sumber daya manusia Indonesia.
                    </p>
                </h1>
            </div>
            <br />
            <div className="contact">
                <h1>Contact Us</h1>
                <span>
                    {/* <span class="fab fa-phone">Phone: 5422 0808</span>
                    <span class="fab fa-envelope-o">Email: umn.ac.id</span> */}
                    <li>
                        <a class="fab fa-phone">Phone: 5422 0808</a>
                    </li>
                    <li>
                        <a class="fab fa-envelope-o">Email: umn.ac.id</a>
                    </li>
                    <li>
                        <a class="fab fa-facebook-f">Facebook: Universitas Multimedia Nusantara</a>
                    </li>
                </span>
            </div>
            
            {/* <h1>
                <img src="../images/travel1.png" className="lahan_pertanian" />
            </h1> */}
        </div>
    );
}

export default LandingPage;

// export default class LandingPage extends Component {
//     render() {
//         return(
//             <form onSubmit={this.onSubmit}>
//                 {/* <img src="logoUMN.png" /> */}
//                 <h3>Landing Page</h3>
                // <div className="mb-3">
                //     <div className="d-grid">
                //         <button type="submit" className="btn btn-link">
                //             <Link to="/sign-in" class="btn btn-primary">
                //                 Login
                //             </Link>
                //         </button>
                //     </div>
                //     <div className="d-grid">
                //         <button type="submit" className="btn btn-link">
                //             <Link to="/sign-up" class="btn btn-primary">
                //                 Register
                //             </Link>
                //         </button>
                //     </div>
                // </div>
//             </form>
//         );
//     }
// }
