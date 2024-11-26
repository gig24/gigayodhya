import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image';
import styles from '../../styles/Blog.module.css';
import Link from 'next/link.js';

const HanumanGadhi = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Hanuman Gadhi Ayodhya" />
        <meta name="keywords" content="Ayodhya, hanuman gadhi, ayodhya darshan, places to visit in ayodhya" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Hanuman Gadhi Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Hanuman Gadhi</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start">
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="hanuman gadhi"
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
                  In the enchanting town of Ayodhya, amidst the divine resonance of ancient legends, stands Hanuman Garhi—a place that encapsulates the essence of devotion and the awe-inspiring miracles associated with Lord Hanuman. This blog takes you on a journey through the history, significance, and extraordinary incidents that have made Hanuman Garhi a symbol of unwavering faith.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2Fdb99d622-6205-45af-889c-39512ec96104?alt=media&token=1185d350-5568-4efe-9d46-544de8ce6af9"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="hanuman gadhi"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>History and Significance</h2>
                <p>
                  Hanuman Garhi&apos;s origins trace back to centuries ago. It is believed that Lord Hanuman Himself chose this hill as a place of abode, imbuing it with His divine presence. The temple&apos;s foundation is attributed to the sage saint Neelkanth, who envisioned it as a shrine dedicated to the mighty Hanuman. Over time, the temple has undergone renovations and expansions, becoming a revered center of worship.
                </p>

                <h2>Spiritual Significance: A Hub of Devotion</h2>
                <p>
                  Hanuman Garhi holds immense spiritual significance for Hindus. Lord Hanuman, an embodiment of strength, loyalty, and devotion, is venerated here with unwavering reverence. Devotees flock to this sacred site to seek blessings, inner strength, and protection from adversities. The temple&apos;s atmosphere resonates with prayers, hymns, and the palpable presence of the deity, creating a serene environment for spiritual introspection.
                </p>

                <Image
                  src="https://images.news9live.com/wp-content/uploads/2023/05/New-Project-2023-05-30T195744.708.jpg?w=1200&enlarge=true"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="hanuman gadhi"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Extraordinary Incidents: Divine Intervention</h2>
                <p>
                  Over the years, Hanuman Garhi has witnessed miraculous events, reinforcing its significance as a divine abode. These incidents have inspired countless devotees who seek solace and blessings from Lord Hanuman. His divine presence at this site has been the subject of numerous stories passed down through generations.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F3f29ffee-9983-4fc7-809c-8170b7b43052?alt=media&token=672d2dbf-43e9-4b13-9db2-09a986c70f26"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="hanuman gadhi"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Architectural Marvel: Ascending to Devotion</h2>
                <p>
                  The temple&apos;s architecture is a reflection of Lord Hanuman&apos;s exalted presence. Hanuman Garhi is situated atop a hill, accessible via a flight of 76 steep stairs, symbolizing the journey of devotion and dedication. The red sandstone structure features an imposing facade, intricate carvings, and a towering statue of Lord Hanuman Himself. The temple&apos;s layout and design evoke a sense of grandeur and reverence.
                </p>

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/place/Shri+Hanuman+Garhi+Mandir/@26.7952876,82.2016429,17z/data=!3m1!4b1!4m6!3m5!1s0x399a0792dbf96a15:0x68c9050f72e31d9d!8m2!3d26.7952876!4d82.2016429!16s%2Fm%2F026s0j3?entry=ttu"
                    className="text-center w-100"
                  >
                    View On Map
                  </a>
                </div>
              </div>

              <hr />
              <div className={`${styles.share} text-center d-flex align-items-center justify-content-center flex-column`}>
                <div className="mr-3">
                  Didn&rsquo;t Plan?{' '}
                  <p className="text-muted m-0 text-center mb-2" style={{ fontSize: '2vmin' }}>
                    Plan Your Full Darshan With Us! You Should See What We Are <span style={{ color: 'green' }}>Offering!</span>
                    <span style={{ color: 'red' }}>
                      <br />
                      YOU DON&rsquo;T HAVE TO PAY!
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

      <Footer />
    </>
  );
};

export default HanumanGadhi;
