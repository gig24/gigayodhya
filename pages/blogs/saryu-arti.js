import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js'; 
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const SaryuArti = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Saryu Arti Ayodhya" />
        <meta name="keywords" content="Ayodhya, Saryu, Arti, river, holy dip, evening rituals, blog, tour in Ayodhya, spiritual experience, places to visit in Ayodhya, darshan in Ayodhya" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Saryu Arti Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Saryu Arti</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start" >
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="saryu arti"
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
                  Ayodhya, a city of immense religious and historical significance, is home to the iconic Saryu Arti. Performed on the banks of the holy Saryu River, this evening ritual is a sight to behold and an essential part of the spiritual experience in Ayodhya.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F1ec8df40-7464-4b4b-b8ed-4b85154a9ae4?alt=media&token=75b7596f-8069-42f0-8985-350a637157e1"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="saryu arti"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>Significance of Saryu Arti</h2>
                <p>
                  The Saryu Arti is a revered evening ritual that takes place on the ghats of the Saryu River, where devotees gather to offer prayers, chant mantras, and watch the mesmerizing light and flame show. It is believed that witnessing the Saryu Arti brings spiritual peace and blessings, cleansing the soul and enhancing devotion.
                </p>

                <h2>The Ritual</h2>
                <p>
                  As the sun sets, the ghats are illuminated with hundreds of lamps, and priests perform the Arti with synchronized chants. Devotees stand by the river, offering their prayers and lighting diyas (oil lamps) in reverence. The atmosphere is filled with spiritual energy, and the rhythmic chants reverberate across the river, creating an unforgettable experience.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F8bb72f77-bb08-4f6d-abfd-b747f38830c9?alt=media&token=86116896-d686-405e-a007-a91a94c47b8e"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="saryu arti"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Spiritual Experience</h2>
                <p>
                  The Saryu Arti offers more than just a visual spectacle; it is a spiritual journey that connects devotees with the divine. As the prayers and chants echo in the evening breeze, the peaceful setting by the river provides a perfect backdrop for contemplation, devotion, and a deep sense of connection with the divine.
                </p>

                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7SHmfMyhvGSeD1HbrC8PadCpF91j2QklwQmTRvWAsdwSaTlqmWCdiBPausyUngpTCy8&usqp=CAU"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="saryu arti"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>A Must-See Attraction</h2>
                <p>
                  If you are visiting Ayodhya, attending the Saryu Arti is a must. It is one of the most spiritually enriching experiences you can have in this sacred city. The Arti takes place every evening, and the serene atmosphere makes it an ideal place to reflect on life, seek blessings, and embrace peace.
                </p>

                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hww9WPFdWFHfB_GiIPU-k_hog57dAIEiFYw_BO53-cIhwvOmcOOc82mlDM0AqCzGoQY&usqp=CAU"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="saryu arti"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/search/saryu+arti+ayodhya/@26.7523396,82.208452,17z/data=!3m1!4b1?entry=ttu"
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

export default SaryuArti;
