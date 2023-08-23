export default async function Page({ params: { id }, }) {
    const post = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`).then((res) => res.json());

    return typeof post.postDetails !== 'undefined' ? (
        post.postDetails ? (
            <section className="tm-section">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-12 col-xl-12">
                            <div class="tm-blog-post m-t-5">
                                <h3 class="tm-gold-text">{post.postDetails.title} </h3>
                                <p>{post.postDetails.title}</p>
                                <img src={post.postDetails.img} alt="Image" class="img-fluid tm-img-post" />
                                <p>{post.postDetails.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ) : (
            <section className="tm-section">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-12 col-xl-12">
                            <div class="tm-blog-post m-t-5 text-xs-center">
                                <h1>Post not found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    ) : null




}

