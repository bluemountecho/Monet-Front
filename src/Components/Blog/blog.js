import React from 'react';

class postid_1 extends React.Component {
    render() {
      return (
        <div className="content">
          <div class="main container">
            <h5>Desing</h5>
            <h1>Lorem ipsum dolor sit amet, consectet</h1>
            <a href="www.ahmetaksungur.com" class="authorlink">
              Ahmet Aksungur
            </a>
            <figure>
              <img src="https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png" />
            </figure>
            <div class="pl-0 col-md-12 pt-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                egestas tempor euismod. Suspendisse ac ex diam. Maecenas vitae
                volutpat ex. Proin blandit ante at nisi fringilla, et porttitor
                neque fermentum. Mauris posuere sem non faucibus vestibulum.
                Suspendisse id quam massa. Ut sit amet neque nec nibh faucibus
                pellentesque a quis lorem. Sed varius nisi pretium, luctus magna
                vel, molestie nisl. Suspendisse blandit, ipsum in elementum
                commodo, dui sapien blandit arcu, sit amet volutpat sapien quam
                non urna. Morbi dapibus nisl sit amet orci facilisis mollis.
                Mauris fringilla interdum elementum.
              </p>
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>
                Pellentesque at mauris lacinia erat viverra porttitor. Cras magna
                metus, euismod at finibus et, egestas ac erat. Mauris in ipsum sed
                turpis varius porttitor ac vitae erat. Nullam eget condimentum
                metus, nec mollis ex. Nam mollis orci sit amet viverra iaculis. Ut
                facilisis, turpis at ornare ullamcorper, urna mi scelerisque arcu,
                eget tincidunt ante felis et metus. Quisque gravida ipsum id ex
                vehicula, feugiat feugiat ligula tempor. Duis non tellus eros.
                Vivamus sollicitudin, mauris ut facilisis mollis, odio augue
                pellentesque tellus, eget facilisis sem purus auctor diam. Ut at
                feugiat nulla. Praesent congue tincidunt dolor a ornare.
              </p>
              <h2>Lorem ipsum dolor sit amet</h2>
  
              <p>
                Aliquam accumsan purus lobortis facilisis ullamcorper. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Nulla pharetra, nisl in placerat ultricies, sapien
                odio placerat leo, vitae pellentesque purus purus eu leo. Proin
                dapibus sapien leo. Duis viverra faucibus sapien, quis interdum
                erat lacinia vitae. Suspendisse non viverra urna. Sed elit erat,
                vulputate id ex eget, faucibus varius urna. Etiam viverra aliquet
                orci, non viverra ipsum pulvinar eget. Pellentesque vitae egestas
                ligula. Pellentesque accumsan interdum felis eu aliquam.
              </p>
  
              <p>
                Mauris mollis efficitur odio sed congue. In pulvinar fermentum
                malesuada. Integer blandit ipsum in lorem egestas, et fermentum
                nunc porta. Pellentesque pellentesque faucibus ligula sed
                bibendum. Nullam ut felis magna. Ut eget sollicitudin turpis.
                Donec ultrices aliquet ante sed tincidunt. Aliquam purus massa,
                auctor a maximus nec, finibus et nunc. Sed erat mi, sagittis eu
                lectus a, accumsan scelerisque sem.
              </p>
  
              <p>
                Sed est ex, ultricies sed ornare non, aliquet sed lorem. Sed
                vulputate tortor eget augue scelerisque, ut sagittis enim
                interdum. Donec nisi lectus, lobortis ut justo sit amet,
                pellentesque gravida nibh. Donec eget ante tincidunt, sagittis
                sapien vestibulum, vestibulum metus. Nullam ultrices lectus at
                tincidunt rhoncus. Nullam sed faucibus risus. Praesent id arcu
                dictum, bibendum urna at, egestas neque.
              </p>
            </div>
          </div>
        </div>
      );
    }
}

class Blog extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-body" style={{background: 'var(--color-green8)'}}>
                <div className="content">
                    <div className="pb-20">
                        <article className="best-post">
                            <div
                                className="best-post-image"
                                style={{
                                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png")`
                                }}
                            ></div>
                            <div className="best-post-content">
                                {/* <div className="best-post-content-cat">videograper</div> */}
                                <div className="best-post-content-title">
                                Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <div className="best-post-content-sub">
                                Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                                kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                                oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                                bloğunu doldurmak için kullanılır.
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="pb-20">
                        <article className="best-post">
                            <div
                                className="best-post-image"
                                style={{
                                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png")`
                                }}
                            ></div>
                            <div className="best-post-content">
                                {/* <div className="best-post-content-cat">videograper</div> */}
                                <div className="best-post-content-title">
                                Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <div className="best-post-content-sub">
                                Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                                kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                                oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                                bloğunu doldurmak için kullanılır.
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="pb-20">
                        <article className="best-post">
                            <div
                                className="best-post-image"
                                style={{
                                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png")`
                                }}
                            ></div>
                            <div className="best-post-content">
                                {/* <div className="best-post-content-cat">videograper</div> */}
                                <div className="best-post-content-title">
                                Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <div className="best-post-content-sub">
                                Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                                kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                                oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                                bloğunu doldurmak için kullanılır.
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="pb-20">
                        <article className="best-post">
                            <div
                                className="best-post-image"
                                style={{
                                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png")`
                                }}
                            ></div>
                            <div className="best-post-content">
                                {/* <div className="best-post-content-cat">videograper</div> */}
                                <div className="best-post-content-title">
                                Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <div className="best-post-content-sub">
                                Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                                kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                                oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                                bloğunu doldurmak için kullanılır.
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="pb-20">
                        <article className="best-post">
                            <div
                                className="best-post-image"
                                style={{
                                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png")`
                                }}
                            ></div>
                            <div className="best-post-content">
                                {/* <div className="best-post-content-cat">videograper</div> */}
                                <div className="best-post-content-title">
                                Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <div className="best-post-content-sub">
                                Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                                kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                                oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                                bloğunu doldurmak için kullanılır.
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog;