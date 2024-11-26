import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js'; 
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const RamMandir = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Ram Mandir Ayodhya" />
        <meta name="keywords" content="Ayodhya, ramjanmbhoomi, Ram Mandir" />
        <meta name="author" content="GIG Ayodhya" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
        <title>Ram Mandir Ayodhya</title>
      </Head>

      <Navbar />

      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h1 className={styles.heading}>Ram Mandir</h1>
              <div className={`${styles.user} p-4 rounded`}>
                <div className="d-flex align-items-start">
                  <Image
                    src="https://thumbs.dreamstime.com/b/man-head-smile-as-facial-expression-vector-illustration-man-head-smile-as-facial-expression-vector-illustration-young-229260301.jpg"
                    className="img-fluid rounded-circle"
                    alt="ram mandir"
                    width={100}
                    height={100}
                    loading="lazy" // Explicit lazy loading
                  />
                  <div className="d-block">
                    <span className="d-block">by Ram Singh</span>
                    <span className="d-block text-muted">11th Aug. 2023</span>
                  </div>
                </div>
              </div>

              <div className={styles.blogSection}>
                <p>
                  India&apos;s cultural tapestry is woven with threads of history, spirituality, and architectural marvels
                  that reflect its diverse heritage. One such emblematic structure is the Ram Mandir, a place of worship
                  that holds profound historical significance and serves as a testament to the enduring faith of millions
                  of devotees. In this blog, we delve into the captivating history and enduring importance of the Ram Mandir.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F026e37da-89b9-4b8e-bdf8-8d3c3ba1ab0a?alt=media&token=47ed0118-b9bd-4496-a714-e805ec65df37"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="ram mandir"
                  width={900}
                  height={500}
                  loading="lazy"
                />

                <h2>The Controversy and Legal Resolution</h2>
                <p>
                  The Ram Mandir&apos;s history also carries the weight of a long-standing dispute between the Hindu and Muslim
                  communities regarding the ownership of the site. This dispute became a focal point of national attention
                  and raised questions about communal harmony and historical preservation. In 2019, the Indian Supreme Court
                  delivered a landmark judgment, settling the matter and paving the way for the construction of a new temple
                  at the site, along with provisions for a mosque in a separate area.
                </p>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F3fecc66b-7218-4668-bd29-faadf6f29581?alt=media&token=86888e51-d3be-41c1-82f6-349bfdf0e093"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="ram mandir"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Architectural Marvel: Fusion of Heritage and Innovation</h2>
                <p>
                  The architecture of the Ram Mandir is a testament to the exquisite craftsmanship that has defined Indian
                  temple art for centuries. The temple draws inspiration from the Nagara architectural style, characterized
                  by its towering spires (shikharas), intricate carvings, and ornate embellishments. The use of pink sandstone,
                  reminiscent of the original temple&apos;s material, creates a harmonious link between the past and the present.
                  Modern engineering techniques ensure the temple&apos;s structural stability, ensuring that it stands for generations
                  to come.
                </p>

                <Image
                  src="https://www.jagranimages.com/images/newimg/25102022/25_10_2022-shri_ram_janambhoomi_mandir__23161544.webp"
                  className={`${styles.bounceLittle} img-fluid`}
                  alt="ram mandir"
                  width={500}
                  height={300}
                  loading="lazy"
                />

                <h2>Spiritual Significance: Gateway to Divine Connection</h2>
                <p>
                  For millions of Hindus, the Ram Mandir holds deep spiritual significance. The belief in Lord Ram&apos;s divine
                  attributes—his righteousness, compassion, and unwavering devotion—finds expression in the devotion of the
                  temple&apos;s visitors. Pilgrims from across the country and the world journey to this sacred site to offer prayers,
                  seek blessings, and immerse themselves in the aura of divinity that envelopes the premises. The temple&apos;s
                  completion signifies the restoration of a holy space where faith can flourish unimpeded.
                </p>

                <div className="text-center w-100">
                  <a
                    href="https://www.google.com/maps/place/Ram+mandir/@27.1381927,80.8593041,7z/data=!4m10!1m2!2m1!1sram+mandir!3m6!1s0x399a07c4f58cb42d:0x88547653a4a8e8e1!8m2!3d26.7921511!4d82.1999039!15sCgpyYW0gbWFuZGlyWgwiCnJhbSBtYW5kaXKSAQxoaW5kdV90ZW1wbGWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTm9kblkzVlRsblJSQULgAQA!16s%2Fg%2F11h8d0y8yw?entry=ttu"
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

export default RamMandir;
