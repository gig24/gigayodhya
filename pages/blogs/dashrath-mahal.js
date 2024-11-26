import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles

const DashrathMahal = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Dashrath Mahal Ayodhya" />
        <meta name="keywords" content="Ayodhya, Dashrath Mahal, historical places, Lord Rama, India tourism" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Dashrath Mahal Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Dashrath Mahal</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start">
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="dashrath mahal"
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
                  Ayodhya, a city rich in mythology, is home to Dashrath Mahal, a historic palace tied deeply to the
                  legacy of Lord Rama's father, King Dashrath. The palace stands as a testament to the royal past of the
                  city and the timeless connection to the Ramayana.
                </p>

                <Image
                  src="https://cdn1.prayagsamagam.com/media/2021/11/13145957/rtboqaz-1024x576.webp"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="dashrath mahal"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>The Legacy of Dashrath Mahal</h2>
                <p>
                  Built during the 19th century, Dashrath Mahal reflects the grandeur of the Ayodhya kingdom. Named after
                  King Dashrath, the palace is said to have been a place of royal importance and cultural significance.
                  The architectural beauty and historical aura of the palace make it a must-visit site for pilgrims and
                  tourists alike.
                </p>

                <h2>Cultural and Religious Significance</h2>
                <p>
                  Dashrath Mahal is more than just a monument; it is an emblem of faith and devotion. Situated in the
                  heart of Ayodhya, the palace holds a revered place in Hindu mythology, being linked to Lord Rama’s
                  birthplace and his father King Dashrath. It continues to attract pilgrims from all over India.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F3e914480-489b-41cc-b222-717bf916effc?alt=media&token=55fa514c-42b2-44a1-a649-69c974ad1c51"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="dashrath mahal"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Symbol of Devotion and Pilgrimage</h2>
                <p>
                  Dashrath Mahal is considered a vital pilgrimage destination for Hindus who come to seek blessings from
                  Lord Rama. The sacred atmosphere surrounding the palace, filled with chants and prayers, makes it a
                  spiritually enriching experience for visitors.
                </p>

                <Image
                  src="https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Ayodhya_Dashrath_mahal_2_l_480_640.jpg"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="dashrath mahal"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/place/Dashrath+Mahal+Ayodhya/@26.7965267,82.2000688,17z/data=!3m1!4b1!4m6!3m5!1s0x399a0794ecbb53d7:0x4ca3f51aa252a248!8m2!3d26.7965267!4d82.2000688!16s%2Fg%2F1tk6yxj0?entry=ttu"
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

export default DashrathMahal;
