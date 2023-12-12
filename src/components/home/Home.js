import styles from "./Home.module.css";

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <div className={styles.header}>
        <div className={styles.left}>
          <b className={styles.ohsm}>OHSM</b>
        </div>
        <div className={styles.buttonsGroup}>
          <div className={styles.menuItem}>
            <div className={styles.solutions}>Solutions</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.solutions}>Company</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.solutions}>Pricing</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.solutions}>Resources</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.solutions}>Contact Us</div>
          </div>
        </div>
        <div className={styles.buttonsGroup1}>
          <div className={styles.button}>
            <div className={styles.textContainer}>
              <div className={styles.solutions}>Log In</div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.textContainer}>
              <div className={styles.solutions}>Request a demo</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <b className={styles.caption}>Caption</b>
            <div className={styles.mainHeadline}>
              Building apps just got easier
            </div>
            <div className={styles.secondaryHeadline}>Expanding services</div>
          </div>
          <div className={styles.paragraph}>
            Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat
            congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi
            dui ac consequat risus pharetra odio pulvinar. Id pellentesque in
            tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet
            sit risus elementum scelerisque.
          </div>
          <div className={styles.buttonsGroup2}>
            <div className={styles.button2}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt="2"
                src={require(''+"../images/check.jpg")}
              />
              <div className={styles.textContainer2}>
                <b className={styles.buttonText}>Get Started</b>
              </div>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src={require(''+"../images/check.jpg")}
              />
            </div>
            <div className={styles.button21}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src={require(''+"../images/check.jpg")}
              />
              <div className={styles.textContainer}>
                <div className={styles.solutions}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL3}
                alt=""
                src={require(''+"../images/check.jpg")}
              />
            </div>
            <div className={styles.button3}>
              <img
                className={styles.iconJamIconsOutlineL4}
                alt=""
                src={require(''+"../images/check.jpg")}
              />
              <div className={styles.textContainer4}>
                <div className={styles.solutions}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL5}
                alt=""
                src={require(''+"../images/check.jpg")}
              />
              <div className={styles.badge}>
                <div className={styles.text}>9</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.plans}>
          <div className={styles.frameParent}>
            <div className={styles.chooseYourPlanParent}>
              <div className={styles.chooseYourPlanContainer}>
                <span>{`Choose Your `}</span>
                <span className={styles.plan}>Plan</span>
              </div>
              <div className={styles.switchOrCancel}>
                Switch or cancel* anytime.
              </div>
            </div>
            <div className={styles.plans1}>
              <div className={styles.duoBasicParent}>
                <div className={styles.duoBasic}>
                  <div className={styles.duoBasicInner}>
                    <div className={styles.featureParent}>
                      <div className={styles.feature}>Feature</div>
                      <div className={styles.list}>
                        <div className={styles.listItemWith}>
                          <div className={styles.text1}>Ideal for</div>
                        </div>
                        <div className={styles.listItemWith}>
                          <div className={styles.text1}>Features</div>
                        </div>
                        <div className={styles.listItemWith2}>
                          <div className={styles.text3}>
                            Number of properties
                          </div>
                        </div>
                        <div className={styles.listItemWith2}>
                          <div className={styles.text3}>
                            Channel management channels
                          </div>
                        </div>
                        <div className={styles.listItemWith2}>
                          <div className={styles.text3}>
                            Booking engine (customizable)
                          </div>
                        </div>
                        <div className={styles.listItemWith}>
                          <div className={styles.text1}>API access</div>
                        </div>
                        <div className={styles.listItemWith2}>
                          <div className={styles.text3}>
                            Dedicated account manager
                          </div>
                        </div>
                        <div className={styles.listItemWith2}>
                          <div className={styles.text3}>Priority support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.duoBasic1}>
                  <div className={styles.frameGroup}>
                    <div className={styles.featureParent}>
                      <div className={styles.starter}>Starter</div>
                      <div className={styles.list1}>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Small businesses</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Basic</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text11}>1</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Up to 10</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>No</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>No</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>No</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>No</div>
                        </div>
                        <div className={styles.listItemWith16}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text3}>
                            Starting at 19 points per month
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button4}>
                      <div className={styles.button5}>
                        <div className={styles.listItemWith}>
                          <div className={styles.solutions}>
                            Start a Free 14-day trial
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.duoBasic1}>
                  <div className={styles.frameGroup}>
                    <div className={styles.featureParent}>
                      <div className={styles.starter}>Pro</div>
                      <div className={styles.list1}>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Growing businesses</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Advanced</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text11}>Up to 10</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Up to 100</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Yes</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Yes</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>No</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Yes</div>
                        </div>
                        <div className={styles.listItemWith16}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text3}>
                            Starting at 49 points per month
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button4}>
                      <div className={styles.button7}>
                        <div className={styles.listItemWith}>
                          <div className={styles.solutions}>Talk to sales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.duoBasic1}>
                  <div className={styles.frameGroup}>
                    <div className={styles.featureParent}>
                      <div className={styles.starter}>Flex</div>
                      <div className={styles.list1}>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Large businesses</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Custom</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text11}>Unlimited</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>All channels</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Yes</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Yes</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Yes</div>
                        </div>
                        <div className={styles.listItemWith8}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text1}>Yes</div>
                        </div>
                        <div className={styles.listItemWith16}>
                          <img
                            className={styles.iconJamIconsOutlineL3}
                            alt=""
                            src={require(''+"../images/check.jpg")}
                          />
                          <div className={styles.text3}>
                            Starting at 99 points per month
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button4}>
                      <div className={styles.button7}>
                        <div className={styles.listItemWith}>
                          <div className={styles.solutions}>Talk to sales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.faqs}>
          <div className={styles.chooseYourPlanContainer}>
            Frequently Asked Questions
          </div>
          <div className={styles.questionParent}>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                What is ONE STOP Hospitality Management Solution?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                What are the benefits of using ONE STOP?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                Is ONE STOP right for my property?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                What features does ONE STOP offer?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                How much does ONE STOP cost?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                What kind of support does ONE STOP offer?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.columns}>
          <div className={styles.footerComponentscolumn}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.categories}>Categories</div>
            </div>
            <div className={styles.links}>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>User Interface</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>User Experience</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Digital Media</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Lifestyle</div>
              </div>
            </div>
          </div>
          <div className={styles.footerComponentscolumn}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.categories}>Product</div>
            </div>
            <div className={styles.links}>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Pricing</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Overview</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Browse</div>
              </div>
              <div className={styles.footerComponentslinkfooter9}>
                <div className={styles.text}>Accessibility</div>
                <div className={styles.badge1}>
                  <div className={styles.textContainer8}>
                    <div className={styles.text}>BETA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerComponentscolumn}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.categories}>Solutions</div>
            </div>
            <div className={styles.links}>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Brainstorming</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Ideation</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Wireframing</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Research</div>
              </div>
            </div>
          </div>
          <div className={styles.footerComponentscolumn}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.categories}>Resources</div>
            </div>
            <div className={styles.links}>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Help Center</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Blog</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Tutorials</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>FAQs</div>
              </div>
            </div>
          </div>
          <div className={styles.footerComponentscolumn}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.categories}>Support</div>
            </div>
            <div className={styles.links}>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Contact Us</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Developers</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Documentation</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Integrations</div>
              </div>
            </div>
          </div>
          <div className={styles.footerComponentscolumn}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.categories}>Company</div>
            </div>
            <div className={styles.links}>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>About</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Press</div>
              </div>
              <div className={styles.footerComponentslinkfooter}>
                <div className={styles.text}>Events</div>
              </div>
              <div className={styles.footerComponentslinkfooter9}>
                <div className={styles.text}>Request Demo</div>
                <img
                  className={styles.iconJamIconsOutlineL3}
                  alt=""
                  src={require(''+"../images/arrowright.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.text}>OHSM @ 2023</div>
          <div className={styles.footerComponentsverticalMen}>
            <div className={styles.footerComponentslinkfooter30}>
              <div className={styles.text}>Terms of Service</div>
            </div>
            <div className={styles.footerComponentslinkfooter30}>
              <div className={styles.text}>Privacy Policy</div>
            </div>
            <div className={styles.footerComponentslinkfooter30}>
              <div className={styles.text}>Manage Cookies</div>
            </div>
          </div>
          <div className={styles.buttonsGroup}>
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src={require(''+"../images/youtube.jpg")}
            />
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src={require(''+"../images/facebook.jpg")}
            />
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src={require(''+"../images/twitter.jpg")}
            />
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src={require(''+"../images/instagram.jpg")}
            />
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src={require(''+"../images/linkedin.jpg")}
            />
          </div>
          <div className={styles.appDownload}>
            <div className={styles.button10}>
              <img
                className={styles.appStoreFilled}
                alt=""
                src={require(''+"../images/app-store--filled.jpg")}
              />
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
