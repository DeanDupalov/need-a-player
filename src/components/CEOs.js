const CEOs = () => {
    return (
        <div className="page-section bg-light">
            <div className="container">

                <div className="owl-carousel wow fadeInUp" id="testimonials">
                    <div className="item">
                        <div className="row align-items-center">
                            <div className="col-md-6 py-3">
                                <div className="testi-image">
                                    <img src="../assets/img/person/person_1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 py-3">
                                <div className="testi-content">
                                    <p>Necessitatibus ipsum magni accusantium consequatur delectus a repudiandae nemo quisquam dolorum itaque, tenetur, esse optio eveniet beatae explicabo sapiente quo.</p>
                                    <div className="entry-footer">
                                        <strong>Melvin Platje</strong> &mdash; <span className="text-grey">CEO Slurin Group</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="row align-items-center">
                            <div className="col-md-6 py-3">
                                <div className="testi-image">
                                    <img src="../assets/img/person/person_2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 py-3">
                                <div className="testi-content">
                                    <p>Repudiandae vero assumenda sequi labore ipsum eos ducimus provident a nam vitae et, dolorum temporibus inventore quaerat consectetur quos! Animi, qui ratione?</p>
                                    <div className="entry-footer">
                                        <strong>George Burke</strong> &mdash; <span className="text-grey">CEO Letro</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CEOs;