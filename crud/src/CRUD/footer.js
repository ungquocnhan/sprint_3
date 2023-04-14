import {Link} from "react-router-dom";

export function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start text-white" style={{background: "#455075"}}>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <Link to="#" className="me-4 link-dark">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#" className="me-4 link-dark">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="#" className="me-4 link-dark">
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link to="#" className="me-4 link-dark">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#" className="me-4 link-dark">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link to="#" className="me-4 link-dark">
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>

                </section>
                <section className="text-white" style={{background: "#3858C2"}}>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-4 col-lg-5 col-xl-5 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-dark"></i>Hướng Dẫn Di Chuyển
                                </h6>
                                <p>
                                    Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong những điểm đến hấp dẫn
                                    nhất
                                    Châu Á. Chỉ cách Đà Nẵng một quãng lái xe ngắn là bốn Di sản Văn hóa Thế giới được
                                    UNESCO
                                    công nhận:
                                </p>
                                <p>
                                    Địa Điểm
                                </p>
                                <ol>
                                    <li>Cố đô Huế 2 tiếng</li>
                                    <li>Phố cổ Hội An 30 phút</li>
                                    <li>Thánh địa Mỹ Sơn 90 phút</li>
                                    <li>Động Phong Nha 3 tiếng</li>
                                </ol>
                            </div>

                            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                                <p>
                                    <Link to="#" className="text-reset">Giá Công Bố</Link>
                                </p>
                                <p>
                                    <Link to="#" className="text-reset">Lifestyle Blog</Link>
                                </p>
                                <p>
                                    <Link to="#" className="text-reset">Tuyển Dụng</Link>
                                </p>
                                <p>
                                    <Link to="#" className="text-reset">Liên Hệ</Link>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-5 col-xl-5 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home text-dark"></i>Address: 103 - 105 Vo Nguyen Giap Street,
                                    Khue
                                    My Ward, Ngu Hanh Son District, Danang City, Vietnam</p>
                                <p>
                                    <i className="fas fa-envelope text-dark"></i>
                                    Email: reservation@furamavietnam.com
                                </p>
                                <p><i className="fas fa-phone text-dark"></i>Tel.: 84-236-3847 333/888</p>
                                <p><i className="fas fa-print text-dark"></i>Fax: 84-236-3847 666</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{backgroundColor: "#455075"}}>
                    © 2022 Copyright:
                    <Link className="text-reset fw-bold" to="#">www.furamavietnam.com</Link>
                </div>
            </footer>
        </div>
    )
}
