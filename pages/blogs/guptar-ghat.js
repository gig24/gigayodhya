import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js'; 
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const GuptarGhat = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Guptar Ghat Ayodhya" />
        <meta name="keywords" content="Ayodhya, Guptar Ghat, Saryu, Lord Ram, holy dip, evening rituals, blog, tour in Ayodhya, spiritual experience, places to visit in Ayodhya, darshan in Ayodhya" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Guptar Ghat Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Guptar Ghat</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start" >
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="Guptar Ghat"
                    width={100}
                    height={100}
                    loading="lazy" // Explicit lazy loading
                  />
                  <div className="d-block" >
                    <span className="d-block">by Harsh Singh</span>
                    <span className="d-block text-muted">1st Dec. 2024</span>
                  </div>
                </div>
              </div>

              <div className={styles.blogSection}>
                <p>
                  Located on the serene banks of the Saryu River, Guptar Ghat in Ayodhya is a historically and spiritually significant site. Known for its peaceful ambiance and stunning sunsets, it is believed to be the place where Lord Ram took Jal Samadhi, marking his departure from the earthly realm.
                </p>

                <Image
                  src="https://rishikeshdaytour.com/blog/wp-content/uploads/2023/09/Guptar-Ghat-Ayodhya-India.jpg"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="Guptar Ghat"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>Historical Significance</h2>
                <p>
                  Guptar Ghat is deeply connected to the Ramayana. Devotees and history enthusiasts visit this ghat to pay their respects and reflect on its association with Lord Ram’s final moments on earth. The ghat is adorned with beautiful temples, including the Gupta Harji Mandir, which adds to its spiritual allure.
                </p>

                <h2>A Divine Experience</h2>
                <p>
                  Visitors often describe Guptar Ghat as a sanctuary of peace. The tranquil waters of the Saryu and the rhythmic sound of temple bells create a meditative atmosphere. Many pilgrims take a holy dip in the river, believing it to be a step toward spiritual purification.
                </p>

                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC77xhSVYdU_C7zbXUnlnTZrOUFII9YvneAg&s"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="Temples at Guptar Ghat"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Best Time to Visit</h2>
                <p>
                  While the ghat is a beautiful destination year-round, the early mornings and evenings offer the most serene experiences. The sunrise over the Saryu River and the evening Arti performed at the temples are not to be missed.
                </p>

                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJd__tvLMdSY4jPHTbwSZp-1gto9c22k88ZQ&s"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="Sunrise at Guptar Ghat"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>A Spiritual Retreat</h2>
                <p>
                  Guptar Ghat is not just a place of historical significance but also a retreat for the soul. Whether you seek spiritual enlightenment, a moment of peace, or simply a connection to history, this ghat offers it all.
                </p>

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/place/Guptar+Ghat+Ayodhya/"
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

export default GuptarGhat;
