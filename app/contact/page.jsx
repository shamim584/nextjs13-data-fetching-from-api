export default function Contact() {
    return (
        <>
            <div className="tm-about-img-container">
                <div className="page-title">Contact</div>
            </div>
            <section className="tm-section m-tb-5">
                <div className="container-fluid">
                    <div className="row tm-margin-t-mid">
                        <div className="col-xs-12">
                            <section>
                                <form action="" method="post" className="tm-contact-form">
                                    <div className="form-group">
                                        <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name"
                                            required="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email"
                                            required="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" id="contact_subject" name="contact_subject" className="form-control"
                                            placeholder="Website" required="" />
                                    </div>
                                    <div className="form-group">
                                        <textarea id="contact_message" name="contact_message" className="form-control" rows="6"
                                            placeholder="Message" required=""></textarea>
                                    </div>
                                    <button type="submit" className="tm-btn">Submit</button>
                                </form>
                            </section>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}