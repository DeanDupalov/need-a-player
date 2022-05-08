const PlayerCardHome = () => {
    return (
        <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
            <div className="card-blog">
                <div className="header">
                    <div className="avatar">
                        <img src="../assets/img/person/person_3.jpg" alt="" />
                    </div>
                    <div className="entry-footer">
                        <div className="post-author">Sam Newman</div>
                        <a href="#" className="post-date">23 Apr 2020</a>
                    </div>
                </div>
                <div className="body">
                    <div className="post-title"><a href="blog-single.html">What is Business Management?</a></div>
                    <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="footer">
                    <a href="blog-single.html">Read More <span className="mai-chevron-forward text-sm"></span></a>
                </div>
            </div>
        </div>
    );
}

export default PlayerCardHome;