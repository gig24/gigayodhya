import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ValmikiRamayanMandir = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Valmiki Ramayan Mandir Ayodhya" />
        <meta name="keywords" content="Ayodhya, Valmiki Ramayan Mandir, Ramayan, Lord Rama, India tourism" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/favicon.ico" type="image/gif" />
        <title>Valmiki Ramayan Mandir Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Valmiki Ramayan Mandir</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start">
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="valmiki ramayan mandir"
                    width={100}
                    height={100}
                    loading="lazy" // Explicit lazy loading
                  />
                  <div className="d-block">
                    <span className="d-block">by Harsh Singh</span>
                    <span className="d-block text-muted">11th Aug. 2023</span>
                  </div>
                </div>
              </div>

              <div className={styles.blogSection}>
                <p>
                  The Valmiki Ramayan Mandir in Ayodhya is a monumental testament to the epic Ramayana, one of the oldest
                  texts in human history. This temple holds a deep spiritual connection to the ancient sage Valmiki, who
                  is believed to have written the Ramayana. It is a key pilgrimage site for Hindus, and a place of reverence
                  for devotees of Lord Rama.
                </p>

                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEprvJjizwa5i4F_bvPdVudG0Jj35u3kIg&s"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="valmiki ramayan mandir"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>The Legacy of Valmiki Ramayan Mandir</h2>
                <p>
                  The temple is deeply tied to the ancient tradition of the Ramayana. As the place where the sage Valmiki
                  is believed to have composed the Ramayana, it stands as a symbol of devotion, literature, and spiritual
                  wisdom. Visitors are drawn not only by its historical significance but also by its deep connection to
                  the divine narrative of Lord Rama.
                </p>

                <h2>Cultural and Religious Importance</h2>
                <p>
                  The Valmiki Ramayan Mandir holds immense cultural and religious value, both as a place of worship and
                  as a site of immense scholarly importance. The temple’s walls are adorned with verses from the Ramayana,
                  and its presence in Ayodhya ties it directly to the epic’s setting—making it an indispensable site for
                  those wishing to deepen their understanding of Lord Rama’s journey.
                </p>

                <Image
                  src="https://www.mappls.com/place/85116E_1659595304840_0.png"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="valmiki ramayan mandir"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Spiritual Journey and Pilgrimage</h2>
                <p>
                  For millions of Hindus, a visit to the Valmiki Ramayan Mandir is not just a physical journey but a
                  spiritual one. It offers a space for reflection on the divine teachings of Lord Rama, devotion, and
                  righteousness. Pilgrims come to seek peace, pray for blessings, and find a deeper connection to the
                  Ramayana’s eternal wisdom.
                </p>

                <Image
                  src="https://shanthiraju.wordpress.com/wp-content/uploads/2020/06/ayodhya-valmiki-bhavan.jpg"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="valmiki ramayan mandir"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/place/Valmiki+Ramayan+Mandir/@27.1342315,80.8394589,17z/data=!3m1!4b1!4m6!3m5!1s0x399a07c8c3a7c78f:0x4c0d93c2049cf28b!8m2!3d27.1342315!4d80.8394589!16s%2Fg%2F11h_5wn8mw"
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

export default ValmikiRamayanMandir;
