import Link from "next/link"
async function getData() {
  const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <>
      <section className="tm-section">
        <div className="container-fluid">


          <div className="row">
            <section className="tm-section">
              <div className="container-fluid m-t-5">
                <h3 className="tm-gold-text tm-title text-xs-center">Three posts from API</h3>
                {data.slice(0, 3).map((post) => (
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="tm-content-box shadow">
                      <img src={post.img} alt="Image" className="img-fluid" />
                      <h4 className="tm-gold-text">{post.title}</h4>
                      <Link className="tm-btn text-uppercase" href={`/single-blog/${post.id}`}>
                        Detail
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>


          <div className="row tm-margin-t-big">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="tm-2-col-left">

                <h3 className="tm-gold-text tm-title">Pellentesque fermentum mauris et posuere</h3>
                <p className="tm-margin-b-30">Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien</p>
                <img src="https://templatemo.com/templates/templatemo_488_classic/img/tm-img-310x180-1.jpg" alt="Image" className="tm-margin-b-40 img-fluid" />
                <p>
                  Donec tempor lobortis tortor, in feugiat massa facilisis sed. Ut dignissim viverra pretium. In eu justo maximus turpis feugiat finibus scelerisque nec eros. Cras nec lectus tempor nibh vestibulum eleifend et ac elit.
                </p>
                <p>Morbi vel pharetra massa, non iaculis tortor. Nulla porttitor tincidunt felis et feugiat. Vivamus fermentum ligula justo, sit amet blandit nisl volutpat id. Fusce sagittis ultricies felis, non luctus mauris lacinia quis.</p>
                <p className="m-b-2"> Ut fringilla lacus ac tempor ullamcorper. Mauris iaculis placerat ex et mattis. Mauris id vulputate lectus, id fermentum sapien.
                </p>
                <a href="#" className="tm-btn text-uppercase">Read More</a>

              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">

              <div className="tm-2-col-right">

                <div className="tm-2-rows-md-swap">
                  <div className="tm-overflow-auto row tm-2-rows-md-down-2">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <h3 className="tm-gold-text tm-title">
                        Categories
                      </h3>
                      <nav>
                        <ul className="nav">
                          <li><a href="#" className="tm-text-link">Tincidunt non faucibus placerat</a></li>
                          <li><a href="#" className="tm-text-link">Vestibulum tempor ac lectus</a></li>
                          <li><a href="#" className="tm-text-link">Fusce non turpis euismod</a></li>
                          <li><a href="#" className="tm-text-link">Nam in augue consectetur</a></li>
                          <li><a href="#" className="tm-text-link">Text Link Color #006699</a></li>
                        </ul>
                      </nav>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 tm-xs-m-t">
                      <h3 className="tm-gold-text tm-title">
                        Useful Links
                      </h3>
                      <nav>
                        <ul className="nav">
                          <li><a href="#" className="tm-text-link">Suspendisse sed dui nulla</a></li>
                          <li><a href="#" className="tm-text-link">Lorem ipsum dolor sit</a></li>
                          <li><a href="#" className="tm-text-link">Duiss nec purus et eros</a></li>
                          <li><a href="#" className="tm-text-link">Etiam pulvinar et ligula sed</a></li>
                          <li><a href="#" className="tm-text-link">Proin egestas eu felis et iaculis</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="row tm-2-rows-md-down-1 tm-margin-t-mid">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="tm-gold-text tm-title tm-margin-b-30">Related Posts</h3>
                      <div className="media tm-related-post">
                        <div className="media-left media-middle">
                          <a href="#">
                            <img className="media-object" src="https://templatemo.com/templates/templatemo_488_classic/img/tm-img-310x180-1.jpg" alt="Generic placeholder image" />
                          </a>
                        </div>
                        <div className="media-body">
                          <a href="#"><h4 className="media-heading tm-gold-text tm-margin-b-15">Lorem ipsum dolor</h4></a>
                          <p className="tm-small-font tm-media-description">Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p>
                        </div>
                      </div>
                      <div className="media tm-related-post">
                        <div className="media-left media-middle">
                          <a href="#">
                            <img className="media-object" src="https://templatemo.com/templates/templatemo_488_classic/img/tm-img-310x180-1.jpg" alt="Generic placeholder image" />
                          </a>
                        </div>
                        <div className="media-body">
                          <a href="#"><h4 className="media-heading tm-gold-text tm-margin-b-15">Lorem ipsum dolor</h4></a>
                          <p className="tm-small-font tm-media-description">Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p>
                        </div>
                      </div>
                      <div className="media tm-related-post">
                        <div className="media-left media-middle">
                          <a href="#">
                            <img className="media-object" src="https://templatemo.com/templates/templatemo_488_classic/img/tm-img-310x180-1.jpg" alt="Generic placeholder image" />
                          </a>
                        </div>
                        <div className="media-body">
                          <a href="#"><h4 className="media-heading tm-gold-text tm-margin-b-15">Lorem ipsum dolor</h4></a>
                          <p className="tm-small-font tm-media-description">Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
