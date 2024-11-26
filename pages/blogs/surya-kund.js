import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js'; 
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles

const SurajKund = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Suraj Kund Ayodhya" />
        <meta name="keywords" content="Ayodhya, surajkund, bharaat kund, laser show, saryu, bath, blog, tour in ayodhya, places to visit in ayodhya, darshan in ayodhya" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Suraj Kund Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Suraj Kund</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start" >
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="surajkund"
                    width={100}
                    height={100}
                    loading="lazy" // Explicit lazy loading
                  />
                  <div className="d-block" >
                    <span className="d-block">by Harsh Singh</span>
                    <span className="d-block text-muted">8th Aug. 2023</span>
                  </div>
                </div>
              </div>

              <div className={styles.blogSection}>
                <p>
                  Ayodhya, a city renowned for its spiritual heritage, is home to a hidden gem known as Suraj Kund. This ancient
                  reservoir, steeped in history and mythological significance, offers a tranquil escape from the bustling world and
                  provides a space for both reflection and devotion.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F1ec8df40-7464-4b4b-b8ed-4b85154a9ae4?alt=media&token=75b7596f-8069-42f0-8985-350a637157e1"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="surajkund"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>History and Mythological Significance</h2>
                <p>
                  Suraj Kund, which translates to the "Pool of the Sun," is believed to have been built during the reign of King
                  Dashrath, the father of Lord Rama, in the Treta Yuga. According to local legends, it is said that Lord Rama used
                  to take a dip in the waters of Suraj Kund during his time in Ayodhya.
                </p>

                <h2>Architectural Essence</h2>
                <p>
                  The architectural design of Suraj Kund showcases a blend of ancient and traditional styles. The reservoir is
                  surrounded by stone steps and ghats, providing easy access for devotees to perform religious rituals and take
                  holy dips.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F8bb72f77-bb08-4f6d-abfd-b747f38830c9?alt=media&token=86116896-d686-405e-a007-a91a94c47b8e"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="surajkund"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Devotional Practices</h2>
                <p>
                  Devotees from various parts of India and abroad visit Suraj Kund to seek blessings and perform religious ceremonies.
                  The tranquil setting of Suraj Kund invites contemplation, meditation, and the chance to experience a sense of peace
                  amidst the bustling city.
                </p>

                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7SHmfMyhvGSeD1HbrC8PadCpF91j2QklwQmTRvWAsdwSaTlqmWCdiBPausyUngpTCy8&usqp=CAU"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="surajkund"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Laser Light Show</h2>
                <p>
                  Adding a modern touch to its historical and spiritual significance, Suraj Kund hosts a captivating laser light
                  and sound show. The show beautifully narrates the tales of Lord Rama's life, taking spectators on a visual journey
                  through his adventures and teachings.
                </p>

                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hww9WPFdWFHfB_GiIPU-k_hog57dAIEiFYw_BO53-cIhwvOmcOOc82mlDM0AqCzGoQY&usqp=CAU"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="surajkund"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/search/suraj+kund+ayodhya/@26.7523396,82.208452,17z/data=!3m1!4b1?entry=ttu"
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

export default SurajKund;
