import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js'; 
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const MilitaryMandir = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Military Mandir Ayodhya" />
        <meta name="keywords" content="Ayodhya, Military Mandir, temples in Ayodhya, Lord Hanuman, blog, darshan in Ayodhya, places to visit in Ayodhya" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Military Mandir Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Military Mandir</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start">
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="militarymandir"
                    width={100}
                    height={100}
                    loading="lazy" // Explicit lazy loading
                  />
                  <div className="d-block">
                    <span className="d-block">by Harsh Singh</span>
                    <span className="d-block text-muted">23rd Nov. 2024</span>
                  </div>
                </div>
              </div>

              <div className={styles.blogSection}>
                <p>
                  The city of Ayodhya, steeped in spiritual and cultural heritage, houses many unique and sacred temples. Among these is the Military Mandir, a lesser-known gem that commands reverence and admiration. Dedicated to Lord Hanuman, the temple embodies the spirit of strength, courage, and devotion, making it a must-visit destination for devotees and tourists alike.
                </p>

                <Image
                  src="https://www.taxiyatri.com/blog/wp-content/uploads/2024/03/military-temple.jpg"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="militarymandir"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>Historical Significance</h2>
                <p>
                  The Military Mandir is said to be a tribute to the valor and strength of Lord Hanuman. Its name, &quot;Military Mandir,&quot; is a nod to the unwavering discipline and might associated with both the deity and the armed forces. Legend has it that the temple was established by a group of soldiers who found solace and inspiration in the divine energy of Lord Hanuman during a critical period.
                </p>

                <h2>Architectural Beauty</h2>
                <p>
                  The temple is modest in structure but rich in symbolism. The idol of Lord Hanuman, depicted in a warrior stance, inspires devotees to face life&apos;s challenges with resilience. The temple premises exude a serene and disciplined aura, reminding visitors of the divine connection between spirituality and strength.
                </p>

                <Image
                  src="https://content3.jdmagicbox.com/comp/faizabad/f9/9999px527.x527.141221114031.l3f9/catalogue/military-temple-faizabad-railway-station-faizabad-temples-vhb98uxgc2.jpg"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="militarymandir"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Devotional Practices</h2>
                <p>
                  Devotees throng the Military Mandir to offer prayers and seek Lord Hanuman&apos;s blessings for courage and strength. The temple also hosts special rituals on Tuesdays and Saturdays, considered auspicious days for Hanuman worship. The chants of &quot;Jai Hanuman&quot; reverberate through the premises, filling the air with a divine and uplifting energy.
                </p>

                <div className="text-center w-100">
                  <a
                    href="https://maps.app.goo.gl/6j4ss9BErx7wFSKKA"
                    className="text-center w-100"
                  >
                    View On Map
                  </a>
                </div>
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

      <Footer />
    </>
  );
};

export default MilitaryMandir;
