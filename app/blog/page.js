import Link from "next/link"
export default async function Page() {
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest').then((res) => res.json());
    return (
        <>
            <div className="row">
                <section className="tm-section">
                    <div className="container-fluid m-t-5">
                        {res.map((post) => (
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div className="tm-content-box blogshadow">
                                    <img src={post.img} alt="Image" className="img-fluid" />
                                    <h4 className="tm-gold-text">{post.title}</h4>
                                    <p class="">{post.short}</p>
                                    <Link className="tm-btn text-uppercase" href={`/single-blog/${post.id}`}>
                                        Detail
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </>
    )
}