import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js'; 
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const SaryuGhat = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Saryu Ghat Ayodhya" />
        <meta name="keywords" content="Ayodhya, Saryu Ghat, Lord Ram, holy dip, evening rituals, blog, tour in Ayodhya, spiritual experience, places to visit in Ayodhya, darshan in Ayodhya" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Saryu Ghat Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Saryu Ghat</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start">
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="Saryu Ghat"
                    width={100}
                    height={100}
                    loading="lazy" // Explicit lazy loading
                  />
                  <div className="d-block">
                    <span className="d-block">by Harsh Singh</span>
                    <span className="d-block text-muted">1st Dec. 2024</span>
                  </div>
                </div>
              </div>

              <div className={styles.blogSection}>
                <p>
                  Situated on the banks of the revered Saryu River in Ayodhya, Saryu Ghat is a sacred spot for pilgrims and tourists alike. Known for its spiritual vibes and breathtaking scenery, it is a place where the essence of Ayodhya comes alive.
                </p>

                <Image
                  src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/05/753b44e8435f5875b4936a368faf9a4a_1000x1000.jpg"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="Saryu Ghat"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>Spiritual Significance</h2>
                <p>
                  Saryu Ghat holds immense religious importance for Hindus. It is believed that taking a holy dip in the Saryu River washes away sins and brings spiritual enlightenment. The ghat is especially crowded during festivals like Ram Navami and Kartik Purnima.
                </p>

                <h2>Evening Rituals</h2>
                <p>
                  The evening Arti at Saryu Ghat is a mesmerizing experience. The sight of diyas floating on the river, combined with the rhythmic chants and temple bells, creates an atmosphere of divine serenity.
                </p>

                <Image
                  src="https://feeds.abplive.com/onecms/images/uploaded-images/2023/07/24/6d5cc64d344bf54c17874b8d03ef66181690175179443211_original.jpg?impolicy=abp_cdn&imwidth=1200"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="Evening rituals at Saryu Ghat"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Best Time to Visit</h2>
                <p>
                  The best time to visit Saryu Ghat is during sunrise or sunset. The view of the sun reflecting off the calm waters of the Saryu is a sight to behold.
                </p>

                <Image
                  src="https://images.tv9hindi.com/wp-content/uploads/2024/01/saryu-nadi.jpg"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="Sunset at Saryu Ghat"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Experience the Tranquility</h2>
                <p>
                  Saryu Ghat offers a perfect blend of spirituality, history, and natural beauty. Whether you are on a spiritual journey or simply seeking peace, this ghat is a must-visit destination.
                </p>

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/place/Saryu+Ghat+Ayodhya/"
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

export default SaryuGhat;
