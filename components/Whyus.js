import React from 'react';
import styles from '../styles/Whyus.module.css'; // Import CSS module

export default function Whyus() {
    return (
        <div>
            <div id="whyus" className={`d-flex justify-content-center flex-column align-items-center ${styles.whyuscontainer}`}>
                <h6 className="text-muted mt-3">Why People Choose Us?</h6>
                <h5 style={{textAlign:"center"}}>
                Because 
                with G<span style={{color:"orange"}}>I</span>G, <span style={{ color: 'red' }}>you're not just a tourist;</span> you're family
                </h5>
                <p style={{ fontSize: '2vmin' }}>
                    Discover the Reasons<strong> <span style={{ color: '#24BBEF' }}>to Embrace</span></strong> Our Distinctive
                    Services!
                </p>

                <div className={`my-1 ${styles.aboutcardcontainer}`}>
                    {/* Card 1 */}
                    <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard1}`}>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <i className={`fa fa-child bg-light p-1 ${styles.aboutcardlogo}`} style={{ fontSize: '50px', borderRadius: '50%' }} ></i>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mt-1">
                            <h6 className={styles.headingAbout}>More Than Just “Book & Bye”</h6>
                            <div className={`text-muted w-100 text-center ${styles.paraabout}`} >
                                We don’t just toss you a package and
                                disappear. From planning to execution,
                                GIG’s got your back every step of the way.
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard2}`}>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <i className={`fa fa-percent bg-light p-1 ${styles.aboutcardlogo}`} style={{ fontSize: '50px', borderRadius: '50%' }} ></i>

                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mt-1">
                            <h6 className={styles.headingAbout}>Local Discounts & Perks</h6>
                            <div className={`w-100 text-center ${styles.paraabout} text-muted`} >
                                Get exclusive cashback and discounts at
                                local shops and restaurants. Support local
                                businesses and save a few bucks? Win-win.
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard3}`}>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <i className={`fa fa-users bg-light p-1 ${styles.aboutcardlogo}`} style={{ fontSize: '50px', borderRadius: '50%' }} ></i>

                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mt-1">
                            <h6 className={styles.headingAbout}>Choices Galore</h6>
                            <div className={`w-100 text-center ${styles.paraabout} text-muted`} >
                                Dharmshalas or hotels, e-rickshaws or
                                taxis—we’ve got options for every budget.
                                No rigid packages, just the choices you
                                actually want.
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard4}`}>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <i className={`fa fa-umbrella bg-light p-1 ${styles.aboutcardlogo}`} style={{ fontSize: '50px', borderRadius: '50%' }} ></i>

                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mt-1">
                            <h6 className={styles.headingAbout}>All City Under One</h6>
                            <div className={`text-muted w-100 text-center ${styles.paraabout}`} >
                                GIG has it all—accommodations,
                                transport options, local guides, pooja
                                rituals, and unique local activities—all in
                                one place, customized to your needs ,
                                YOU JUST NEED US!
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard5}`}>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <i className={`fa fa-star bg-light p-1 ${styles.aboutcardlogo}`} style={{ fontSize: '50px', borderRadius: '50%' }} ></i>

                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mt-1">
                            <h6 className={styles.headingAbout}>Real Connections, Real Comfort</h6>
                            <div className={`text-muted w-100 text-center ${styles.paraabout}`} >
                                With GIG, you have your “local rishtedar”
                                (SPOC) guiding you, helping you
                                experience your destination like family,
                                not just another tourist with a map.
                            </div>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard6}`}>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <i className={`fa fa-bars bg-light p-1 ${styles.aboutcardlogo}`} style={{ fontSize: '50px', borderRadius: '50%' }} ></i>

                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mt-1">
                            <h6 className={styles.headingAbout}>Plan or No Plan</h6>
                            <div className={`text-muted w-100 text-center ${styles.paraabout}`}>
                                For the planners, Shravan Bot is here to
                                make you feel in control. For the rest of us,
                                we’ve got pre-set plans so you can just
                                show up and enjoy. Either way, we’ve got
                                you
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
