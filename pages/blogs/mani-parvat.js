import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js'; 
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ManiParvat = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Mani Parvat Ayodhya" />
        <meta name="keywords" content="Ayodhya, mani parvat, mountain in ayodhya, hill in ayodhya, blog, darshan in ayodhya, places to visit in ayodhya" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Mani Parvat Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Mani Parvat</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start" >
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="maniparvat"
                    width={100}
                    height={100}
                    loading="lazy" // Explicit lazy loading
                  />
                  <div className="d-block">
                    <span className="d-block">by Harsh Singh</span>
                    <span className="d-block text-muted">8th Aug. 2023</span>
                  </div>
                </div>
              </div>

              <div className={styles.blogSection}>
                <p>
                  In the ancient city of Ayodhya, where every stone resonates with the essence of spirituality, Mani Parvat stands as a sacred pinnacle. With its rich history, spiritual significance, and the contemporary allure of its laser show, Mani Parvat offers a unique blend of tradition and modernity, drawing pilgrims and seekers alike.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F64830f08-fc2b-43b3-893e-f3f799243953?alt=media&token=857c11a2-7260-4fac-9485-15c5cd5a2221"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="maniparvat"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>History and Mythological Significance</h2>
                <p>
                  Mani Parvat, often referred to as &quot;Jewel Hill,&quot; is a hillock in Ayodhya that holds a special place in Hindu mythology. It is believed that Lord Rama, accompanied by his beloved wife Sita and loyal brother Lakshman, stayed on this hill during their exile in the forest. The hill&apos;s serene surroundings and natural beauty provided solace to the royal family during their challenging times. The presence of the trio imbued Mani Parvat with an aura of divinity and devotion.
                </p>

                <h2>Architectural Essence</h2>
                <p>
                  Though Mani Parvat itself might not be adorned with grand structures, its historical and spiritual importance is immeasurable. Pilgrims and devotees flock to the hill to connect with the energy of Lord Rama&apos;s stay and seek blessings. The hill offers breathtaking panoramic views of Ayodhya, creating a serene atmosphere for introspection and meditation.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F2b1bf1f8-a852-4a70-ad7c-95ff0993ef0d?alt=media&token=b75b6251-c186-4ab7-8f4e-85c23f35f523"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="maniparvat"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Devotional Practices and Contemplation</h2>
                <p>
                  Mani Parvat offers a peaceful setting for devotees to engage in devotional practices. Many choose to meditate, offer prayers, and perform rituals at the hill&apos;s serene surroundings. The spiritual energy of the site enhances the connection between the devotee and the divine, allowing for moments of introspection and self-discovery.
                </p>

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/place/Mani+Parvat+Temple,+Kami+Ganj,+Ayodhya,+Uttar+Pradesh+224123/@26.7823888,82.2002925,17z/data=!3m1!4b1!4m6!3m5!1s0x399a07ef63d2aa55:0xd23c1be1a615c4b2!8m2!3d26.7823424!4d82.2002932!16s%2Fg%2F11b8tcvxbr?entry=ttu"
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

export default ManiParvat;
