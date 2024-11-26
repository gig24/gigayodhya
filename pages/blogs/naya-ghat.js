import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js'; 
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles

const NayaGhat = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Naya Ghat Ayodhya" />
        <meta name="keywords" content="Ayodhya, naya ghat, ghat, saryu, bath, blog, tour in ayodhya, places to visit in ayodhya, darshan in ayodhya" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Naya Ghat Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Naya Ghat</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start" >
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="nayaghat"
                    width={100}
                    height={100}
                    loading="lazy" // Explicit lazy loading
                  />
                  <div className="d-block" >
                    <span className="d-block">by Ram Singh</span>
                    <span className="d-block text-muted">11th Aug. 2023</span>
                  </div>
                </div>
              </div>

              <div className={styles.blogSection}>
                <p>
                  Ayodhya, a city steeped in ancient history and spirituality, boasts numerous sites of significance. Among these, Naya Ghat stands out as a symbol of the city's rich heritage, spiritual devotion, and cultural celebrations. With a history that dates back centuries and a role in modern festivals, Naya Ghat is a place where the past and present intertwine seamlessly.
                </p>

                <Image
                  src="https://etimg.etb2bimg.com/photo/95049358.cms"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="nayaghat"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <p>
                  Naya Ghat is an age-old bathing ghat situated on the banks of the holy Sarayu River in Ayodhya, Uttar Pradesh, India. The word "naya" translates to "new," but the ghat's history is anything but recent. It has been witness to countless generations engaging in rituals, ceremonies, and acts of devotion. The ghat has stood as a silent observer of the city's evolution and its deep-rooted connection to spirituality.
                </p>

                <h2>Architectural Essence</h2>
                <p>
                  While Naya Ghat's architecture is simpler compared to grand palaces, its design is deeply meaningful. The ghat features a series of steps leading down to the river's edge, allowing pilgrims and devotees to easily access the sacred waters of the Sarayu. This simplicity is intentional, fostering a sense of humility and accessibility in the act of purification and devotion.
                </p>

                <Image
                  src="https://www.gotouttarakhand.com/wp-content/uploads/2022/10/Ayodhya-Deepotsav-2022-Laser-Show-1024x571.jpg"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="nayaghat"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Spiritual Significance and Pilgrimage</h2>
                <p>
                  Naya Ghat holds immense spiritual significance for devotees who visit Ayodhya. The Sarayu River is considered sacred in Hinduism, and taking a dip in its waters at Naya Ghat is believed to purify the soul and wash away sins. Pilgrims come from far and wide to partake in this ritual, seeking blessings, spiritual renewal, and a connection to their faith.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2Ff296f0d4-12cd-4a0f-bdf6-a81dddd4414b?alt=media&token=25026a61-4bd9-4a46-b034-025f730c7c98"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="nayaghat"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Depotsav Celebration</h2>
                <p>
                  Naya Ghat plays a significant role in the annual "Depotsav" or "Shravan Jhoola Mela" celebration in Ayodhya. This festival, held during the Hindu month of Shravan (July-August), commemorates Lord Rama's birth and childhood pastimes. The ghat becomes a focal point for celebrations, as beautifully adorned swings are set up for idols of Lord Rama and his brothers to reenact their playful activities.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F182b9ca2-26ab-4da2-a7ff-88702fcca83d?alt=media&token=455794f2-1cb5-4b83-ab69-9164f4faa918"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="nayaghat"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Brief</h2>
                <p>
                  Naya Ghat in Ayodhya stands as a bridge between the spiritual past and the vibrant present. Its humble architecture, deep spiritual significance, and involvement in celebratory festivals make it a place of reverence and joy. As devotees continue to gather at the ghat to connect with their faith and celebrate their heritage, Naya Ghat remains an enduring symbol of Ayodhya's spiritual and cultural tapestry.
                </p>

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/place/Nayaghat+ayodhya+Deeputsav/@26.8094303,82.2050507,17z/data=!3m1!4b1!4m6!3m5!1s0x399a0738ae504819:0xa4a3657ed5f990d0!8m2!3d26.8094303!4d82.2050507!16s%2Fg%2F11pd0lxkl5?entry=ttu"
                    className="text-center w-100"
                  >
                    View On Map
                  </a>
                </div>
              </div>

              <hr />
              <div className={`${styles.share} text-center d-flex align-items-center justify-content-center flex-column`}>
                <div className="mr-3">
                  Didn't Plan?{' '}
                  <p className="text-muted m-0 text-center mb-2" style={{ fontSize: '2vmin' }}>
                    Plan Your Full Darshan With Us! You Should See What We Are <span style={{ color: 'green' }}>Offering!</span>
                    <span style={{ color: 'red' }}>
                      <br />
                      YOU DON'T HAVE TO PAY!
                    </span>
                  </p>
                </div>
                <a href="/" className="btn btn-danger">
                  Plan Now!
                </a>
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

export default NayaGhat;
