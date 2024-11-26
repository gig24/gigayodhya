import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js'; 
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const KanakBhawan = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Kanak Bhawan Ayodhya" />
        <meta name="keywords" content="Ayodhya, kanak bhawan, blog, tour in ayodhya, places to visit in ayodhya" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Kanak Bhawan Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Kanak Bhawan</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start">
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="kanakbhawan"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                  <div className="d-block">
                    <span className="d-block">by Ram Singh</span>
                    <span className="d-block text-muted">11th Aug. 2023</span>
                  </div>
                </div>
              </div>

              <div className={styles.blogSection}>
                <p>
                  Nestled in the sacred city of Ayodhya, Kanak Bhawan stands as a testament to the profound devotion and cultural heritage that define India. This magnificent abode of Lord Ram and Goddess Sita weaves together a tapestry of history, spirituality, and architectural brilliance. In this blog, we embark on a journey to explore the history, significance, and enduring spiritual essence of Kanak Bhawan.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2Fb62ef1d4-647f-4a31-a5ed-c1d50387c868?alt=media&token=92e6e67c-0ea5-4e6d-a3ef-b804ef5c8230"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="kanakbhawan"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>History and Significance</h2>
                <p>
                  Kanak Bhawan&apos;s history is closely intertwined with the legendary narrative of Lord Ram and Goddess Sita. According to popular belief, it was gifted to Sita by her mother after her marriage to Lord Ram. The name &quot;Kanak Bhawan&quot; itself translates to &quot;Golden House,&quot; a nod to its opulent architecture and the abundance of gold and precious metals used in its adornments. Over the centuries, the bhawan underwent various renovations, with each ruler and patron adding their unique touch to this sacred space.
                </p>

                <h2>Architectural Marvel: Blend of Styles and Symbolism</h2>
                <p>
                  Kanak Bhawan&apos;s architecture is a splendid fusion of various styles that span centuries. The design elements draw inspiration from both North Indian and South Indian architectural traditions, resulting in an aesthetic that is both intricate and harmonious. The grand entrance, elaborate frescoes, intricate carvings, and elegant domes create a mesmerizing visual spectacle. The temple&apos;s aesthetic reflects the confluence of art, devotion, and cultural heritage.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F28c75973-3fa0-4376-979e-6194fbf55aaa?alt=media&token=b2902e17-78a4-4253-ae8b-cf447b9671ba"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="kanakbhawan"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Significance in Hinduism: A Portal to Divine Love</h2>
                <p>
                  For Hindus, Kanak Bhawan holds profound spiritual significance. It is believed to be a place where Lord Ram and Goddess Sita resided after their marriage. Devotees visit to seek blessings and feel the divine presence of the revered deities. The temple serves as a bridge between the earthly and the divine, making it an essential pilgrimage site.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F2265cc41-4c0b-4c65-bdfe-efb2d622aab9?alt=media&token=76e204f5-d7b9-4285-a4e6-ebb711a5acb2"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="kanakbhawan"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Cultural Legacy: Preserving Heritage and Devotion</h2>
                <p>
                  Kanak Bhawan is not only a place of worship but also a repository of cultural heritage. Its walls resonate with stories of devotion, sacrifice, and timeless love. The temple&apos;s architecture reflects the skill and creativity of artisans from different eras, showcasing the evolution of craftsmanship. By preserving and venerating this historic site, we honor the values that have shaped India&apos;s cultural fabric.
                </p>

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/place/Kanak+Bhawan/@26.7980174,82.1992155,17z/data=!3m1!4b1!4m6!3m5!1s0x399a07b9c7d40cc1:0x9491c1265f1c6a15!8m2!3d26.7980174!4d82.1992155!16s%2Fg%2F11gtc7h87m?entry=ttu"
                    className="text-center w-100"
                  >
                    View On Map
                  </a>
                </div>

                <hr />
                <div className={`${styles.share} text-center d-flex align-items-center justify-content-center flex-column`}>
                  <div className="mr-3">
                    Didn&apos;t Plan?{' '}
                    <p className="text-muted m-0 text-center mb-2" style={{ fontSize: '2vmin' }}>
                      Plan Your Full Darshan With Us! You Should See What We Are <span style={{ color: 'green' }}>Offering!</span>
                      <span style={{ color: 'red' }}>
                        <br />
                        YOU DON&apos;T HAVE TO PAY!
                      </span>
                    </p>
                  </div>
                  <Link href="/" className="btn btn-danger">
                    Plan Now!
                  </Link>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default KanakBhawan;
