import React from 'react';
import { Accordion } from 'react-bootstrap';
import { FaHandPointRight } from 'react-icons/fa';
import './Blogs.css'
const Blogs = () => {
    return (
        <section id="blogs">
            <div className='container'>
                <h2 className='section_title'>Questions</h2>
                <h4>Frequently asking question :</h4>
                <div className='blogs_content'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h5> <FaHandPointRight />  &nbsp; What is the Difference between Authentication and Authorization ?</h5> </Accordion.Header>
                            <Accordion.Body>
                                <small>
                                    Both the terms are often used in conjunction with each other in terms of security, especially when it comes to gaining access to the system. Both are very crucial topics often associated with the web as key pieces of its service infrastructure. However, both the terms are very different with totally different concepts. While it’s true that they are often used in the same context with the same tool, they are completely distinct from each other.
                                </small>
                                <p>
                                    Authentication & authorization :
                                    Authentication means confirming your own identity.Authorization means granting access to the system. In simple terms, authentication is the process of verifying who you are, while authorization is the process of verifying what you have access to.
                                </p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h5> <FaHandPointRight />  &nbsp; Why are you using firebase? What other options do you have to implement authentication?</h5></Accordion.Header>
                            <Accordion.Body>
                                <small>
                                    <h5>What is firebase? </h5>
                                    Google’s Firebase is a mobile platform that lets you develop mobile apps. It is especially geared towards business apps, with the intention of helping businesses grow their user bases and increase their profits through their mobile apps.
                                </small>
                                <small>
                                    <h5>Why are you using firebase?</h5>
                                    <h5>1. Incredibly Built-In Analytics</h5>
                                    One of the best features of Firebase is the Analytics dashboard that it comes equipped with.
                                    <h5>2. App Development Made Easy</h5>
                                    With Firebase, you can focus your time and attention on developing the best app(s) possible for your business.
                                    <h5>3. Growth and User Engagement</h5>

                                </small>
                                <h5>What other options do you have to implement authentication?</h5>
                                <small>
                                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints
                                </small>
                                <h5>1. Password-based authentication</h5>
                                <h5>2. Multi-factor authentication</h5>
                                <h5>3. Certificate-based authentication</h5>
                                <h5>4. Biometric authentication</h5>
                                <h5>5. Token-based authentication</h5>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h5> <FaHandPointRight />  &nbsp; What are different services that Firebase provide to use?</h5></Accordion.Header>
                            <Accordion.Body>

                                <h5>There are many services which Firebase provides, Most useful of them are: </h5>
                                <h5>1. Cloud Firestore.</h5>
                                <small>
                                    Everyone needs notifications in their mobile applications in one way or another, for enhanced engagement with their users.
                                </small>
                                <h5>2. Authentication.</h5>
                                <small>
                                    Let’s move on to the next service – Authentication. Firebase provides authentication services for almost every major platform, which includes Google, Facebook, Twitter, Apple, Github, Microsoft, and Yahoo.
                                </small>
                                <h5>3. Hosting.</h5>
                                <small>
                                    This service was called google URL shortener in the past, but now it is renamed as Dynamic Links. In addition to their name, a couple of new features have been added to this service by Firebase Team.
                                </small>
                                <h5>4. Cloud Storage.</h5>
                                <small>
                                    As the name suggests, this service helps you in making predictions about your product decisions. In my opinion, this service is important to increase your business and revenue.
                                </small>
                                <h5>5. Google Analytics.</h5>
                                <small>
                                    Yet another service that helps in growing and managing your business. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.
                                </small>
                                <h5>6. Predictions.</h5>
                                <small>
                                    The last service that we’ll go through is Remote Config. It helps in remotely changing your application UI and content, without publishing it again.
                                </small>
                                <h5>7. Cloud Messaging.</h5>
                                <small>
                                    The first step in GCM is that a third-party server (such as an email server) sends a request to Google's GCM server.
                                </small>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Blogs;