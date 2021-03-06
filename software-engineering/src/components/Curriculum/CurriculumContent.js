import React, { Component } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import './CurriculumContent.css'


class CurriculumContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        }
    };
    button1 = () => {
        this.setState({ toggle: {button1: true, button2: false, button3: false, button4: false, button5: false } })
    }
    button2 = () => {
        this.setState({ toggle: {button1: false, button2: true, button3: false, button4: false, button5: false } })
    }
    button3 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: true, button4: false, button5: false } })
    }
    button4 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: false, button4: true, button5: false } })
    }
    button5 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: false, button4: false, button5: true } })
    }
    scheduleButton1 = () => {
        this.setState({ toggle2:{scheduleButton1: true, scheduleButton2: false, scheduleButton3: false, scheduleButton4: false, scheduleButton5: false}})
    }
    scheduleButton2 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: true, scheduleButton3: false, scheduleButton4: false, scheduleButton5: false}})
    }
    scheduleButton3 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: false, scheduleButton3: true, scheduleButton4: false, scheduleButton5: false}})
    }
    scheduleButton4 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: false, scheduleButton3: false, scheduleButton4: true, scheduleButton5: false}})
    }
    scheduleButton5 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: false, scheduleButton3: false, scheduleButton4: false, scheduleButton5: true}})
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <h1>Full Stack Development</h1>
                    <p>A <b>web application</b> is an application program that is stored on a server in the cloud somewhere and delivered over the internet through a web browser interface like Google Chrome.  Web services are Web Apps by definition and many, although not all, websites contain Web Apps.</p>
                    <p>A <b>full stack developer</b> is an engineer who can handle all the work of databases, servers, systems engineering, and clients. Depending on the project, what customers need may be a mobile stack, a Web stack, or a native application stack.</p>
                    <p><b>Front-end development</b> manages everything that users visually see first in their browser or application. Front end developers are responsible for the look and feel of a site. Front end development is mostly focused on what some may say is the "client side" of development.</p>
                    <p><b>Back-end development</b> manages everything that users don’t see in their browser or application. Back end developers are responsible for the databases of a site. Back end development is mostly focused on what some may is the " server-side " of development.</p>
                    <p>Participants may know where they want to focus from a skills development coming into a program, or have no idea, the program will support the decision process as participants skills evolve.  No matter what path they decide to take or develop, all participants will understand how the two roles interact and the responsibilities of their role.</p>
                    <h3>AWS Certification:</h3>
                    <p>Our program is unique in that we integrate Amazon Web Services Cloud Practitioner Certification into our program.  We want to ensure our participants can differentiate themselves in applying to jobs post the program. The AWS Cloud Foundations course provides participants with an overall understanding of cloud computing concepts, independent of specific technical roles. It provides participants with a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support.</p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body>
                                        <Card.Title className="subtleButton" onClick={() => this.button1()}>Basics</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.button2()}>Advanced JavaScript</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.button3()}>React</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.button4()}>Certifications</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.button5()}>Job Placement</Card.Title>
                                    </Card.Body> 
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns">
                            {this.state.toggle.button1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Basics</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <p>This content is designed to take someone without any coding ability to an entry-level professional Software Engineer in 22 weeks. Many of the upcoming topics and names will be foreign to you but you'll be VERY comfortable with each one of them by the end of the program.</p>
                                                    <p>Coding Basics include things from creating a personalized coding environment to JavaScript basics, learning about data structures, and understanding how to save your work through Git & GitHub.</p>
                                                    <p>The goal of this course is to land our participants with high-level jobs, most of which require a technical conversation before hand. To address this we will always have informal conversations regarding a topic and then cover probable interview questions.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                        <Col>
                                        </Col><h1>Advanced JavaScript</h1>
                                        <Row>
                                                {/* <Col xs={1} md={3} style={{flexDirection: "column;", justifyContent: "space-around"}}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                    <div style={{height: "100px"}}></div>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                    <div style={{height: "100px"}}></div>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col>*/}
                                                <Col xs={10} md={12}>
                                                    <p>Advanced JavaScript contains topics including, but not limited to: functions, scope, debuggin, the basic accumilator pattern, & higher order functions.</p>
                                                    <p>These topics allow us to gain an understanding of how JavaScipt works which in turn enables us to build robust applications.</p>
                                                    <p>We will learn about HTML, CSS, DOM manipulation, event listeners, and how JavaScript can elevate your application. Once we have learned these previous topics we will deploy some static websites.</p>
                                                    <p>Every topic that is covered will be practiced in a project which will be accessible on GitHub and usually deployed as a website for potential employers to view.</p>
                                                    <p>Without a traditional Computer Science education we understand that projects are what set our participants apart from the crowd, specifically traditional students who dont have many deployed projects.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>React</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10} md={12}>
                                                    <p>React is a front-end web technology which enables us to create super complex websites. It stems from a technology that Facebook created and eventually evolved into React. One of the primary features of React is that it allows developers to create large applications which can change data without reloading the page.</p>
                                                    <p>To experience this go to Facebook and click around. Notice that the top bar rarely updates. This creates a more fluid web experience and allows us to create more powerful apps.</p>
                                                    <p>Once our participants have learned how to work with React they will immediately look to create multiple projects. The first of which will be portfolios which will link to previously created projects, bios, and resumes.</p>
                                                    <p>There are many ways to go from here but a participants projects can represent what they are interested in. We teach frontend, backend, and fullstack but if a participant is more inclined towards one of these three they are invited to focus on that.</p>
                                                    <p>The bottom lines are employment and payment, knowing React can land someone a high-paying job in a short amount of time.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Certifications</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10} md={12}>
                                                    <p>Aside from knowing powerful technologies we focus on certifications. Our instructors are AWS Certified and our institution is an AWS Academy which means we are capable of teaching students to AWS certifications.</p>
                                                    <p>Aligning our content with the AWS Cloud Practitioner exam is another way that our students get a step up above the competiton. AWS certifications are the most sought after in the technology fields today and put particiaptns on the right track to climbing up to higher paying jobs and more stimulating roles.</p>
                                                    <p>Once again this all comes down to jobs and payment, working with us makes particiapnts ready to pass the AWS Cloud Practitioner exam which leads to faster employment and higher pay.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Job Placement</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>Instead of only having our participants send out resumes, cover letters, and resumes, we have consistent local partners who are readily looking to hire our candidates.</p>
                                                <p>This partnership is a two-way street. The partners have trouble hiring motivated individuals with the skills that help in their work environment and we have a shortlist of local companies that are excited to hire our candidates.</p>
                                                <p>The clients give our participants tasks to do - build a new website, page, navbar, database, middleware, connections, etc... and this project is treated as the primary part of the interview process. This means that not only do our candidates see what the workforce looks like, but they are given an opportunity to impress the partner right from the start.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                    <Row>
                        <h1>Career Readiness</h1>
                        <p>We aim to get our candidates placed. Unlike institutions that aim to educate without directing individuals towards a job we primarly work on ensuring our candidates get hired. Beyond our partners and connections, both local and national, we aim to get our students certifications, pass assessments, and create projects that will help with the hiring process.</p>
                    </Row>
                    <Row className="sponsorsArea">
                        <Card id="partnersCard" className="bg-dark text-white curriculumBackImage1">
                            <Card.ImgOverlay className="partnersCardOpacity">
                                <Card.Title>Partners Page</Card.Title>
                                <Card.Text>
                                Nebula Academy is helping companies prepare for the future of work.  Let us help you with your recruitment needs, as we develop the talent to grow your business. Learn more about our Partner program and how your company can be a part of addressing the skills gap so you can scale your business.
                                </Card.Text>
                                <Button href="/partners" variant="primary">Partners Page</Button>
                            </Card.ImgOverlay>
                        </Card>
                        <Card id="speakersCard" className="bg-dark text-white curriculumBackImage2">
                            <Card.ImgOverlay className="sponsorsCardOpacity">
                                <Card.Title>Guest Speakers Page</Card.Title>
                                <Card.Text>
                                The information technology field is vast and offers opportunities that span every industry.  At Nebula Academy we offer our participants the opportunity to hear and speak to industry experts from diverse communities across industries.
                                </Card.Text>
                                <Button href="/guestspeakers" variant="primary">Guest Speakers Page</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Row>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton1()}>Schedule Overview</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton2()}>Daily Schedule</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton3()}>Practice Hours</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton4()}>Weekly Calendar</Card.Title>
                                        <hr/>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton5()}>Last Couple Weeks/Job Placement</Card.Title>
                                    </Card.Body> 
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns">
                            {this.state.toggle2.scheduleButton1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Schedule Overview</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <p>The Nebula Academy Software Engineering program is 22 weeks long.</p>
                                                    <p>We primarily work in 4-week sprints where we are learning, practicing, and implementing new and previously covered technologies. We finish the 4-week cycle by creating projects.</p>
                                                    <p>The following week is flexible where students are covering their weak areas, fixing old or current projects, or taking some time to recuperate.</p>
                                                    <p>We can't do anything with burnt-out participants, so we want to ensure that participants are pacing themselves for the long-haul: employment.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Daily Schedule</h1>
                                        <Card.Text>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <p>The daily schedule will vary but it will generally look like this:</p>
                                                    <p>9:00 AM: Stand-up</p>
                                                    <p style={{marginLeft:"20px"}}>Stand-up is a classic developer team start to the day where issues, thoughts, and schedules are shared.</p>
                                                    <p>10:00 AM: Code practice</p>
                                                    <p style={{marginLeft:"20px"}}>There are specific problems which can be practiced in order to build coding competency and interview ability. We practice them daily.</p>
                                                    <p>11:00 AM: New Subject Matter</p>
                                                    <p style={{marginLeft:"20px"}}>We will be learning our new topics at this time specifically in an introduction and coaching style.</p>
                                                    <p>12:30 PM: Lunch</p>
                                                    <p style={{marginLeft:"20px"}}>We provide lunch and snacks to all participants in our program. This is an immersive program and we need sharp brains that are fed and ready to learn. Whether you are paying for the program yourself, by your company, or have been granted a scholarship we create an inclusive learning environment that includes a healthy lunch and snacks each day. We do also have a fridge so participants can bring in meals if these choose to.</p>
                                                    <p>1:30 PM: Projects</p>
                                                    <p style={{marginLeft:"20px"}}>Project based learning. Here we will be continuing with the new subject specifically in a hands-on style.</p>
                                                    <p>3:00 PM: Content Review</p>
                                                    <p style={{marginLeft:"20px"}}>Old Material. At the end of the day we want to cover old topics that students feel they need to brush up on.</p>
                                                    <p>4:00 PM: End of day</p>
                                                    <p style={{marginLeft:"20px"}}>Participants frequently are working on an issue, new material, or a project and extend their day beyond 4:00 PM but this is the "official" end of day.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                        <h1>Practice Hours</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>Students will have to apply themselves both in and outside of the classroom. We recommend practicing around 2-4 additional hours each night and 4-6 hours on the weekend.</p>
                                                <p>We understand that this is intense and have built in planning to ensure that our students don't burn out. Firstly this additional practice time isn't required, secondly 5th weeks are weeks that can be used to rest, relax, and recuperate.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Weekly Calendar</h1>
                                        <Card.Text>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>As previously mentioned, we typically have four weeks of study and practice followed by one week of unspecified time.</p>
                                                <p>Depending upon where we are in the course this can vary for different students. Some will relax, some will work on previous projects, and others will study previous topics.</p>
                                                <p>We follow a <a href="https://www.redcort.com/us-federal-bank-holidays">National US Holiday Calendar</a> similar to this link and build our recuperation weeks around them.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                        <h1>Last Couple Weeks/Job Placement</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>In the last couple weeks of the course our daily schedule will not revolve around practice and learning but instead around applications, projects, interview preparation, mock interviews, studying and taking certification exams, meeting with career coaches to outline short list of employers, completing job applications, and creating a plan to ensure they land a job.</p>
                                                <p>This means our daily schedule will look more like this:</p>
                                                    <p>9:00 AM: Stand-up</p>
                                                    <p style={{marginLeft:"20px"}}>Stand-up becomes even more important as participant schedules will vary and so will topics covered. By doing this students will see similarities and be able to help one another with their problems.</p>
                                                    <p>10:00 AM: Code practice</p>
                                                    <p style={{marginLeft:"20px"}}>This is core interview practice and will be kept up throughout.</p>
                                                    <p>11:00 AM: Applying for jobs</p>
                                                    <p style={{marginLeft:"20px"}}>Every day our participants will be sending out new applications. We want to ensure participants are hitting both quality and quantity.</p>
                                                    <p>12:30 PM: Lunch</p>
                                                    <p style={{marginLeft:"20px"}}>Having a set time for lunch helps fight burnout and is still suggested as something the students should observe for the full hour.</p>
                                                    <p>1:30 PM: Projects</p>
                                                    <p style={{marginLeft:"20px"}}>Updating and fixing projects. Unless a participant has a new project that they are passionate about we don't suggest starting new projects at this time. However we definitely want our participants to dive in deeper on older projects.</p>
                                                    <p>3:00 PM: Interview Preparation</p>
                                                    <p style={{marginLeft:"20px"}}>Interview prep. This can take the form of Jeopardy games, white-boarding, or coding challenges.</p>
                                                    <p>4:00 PM: End of day</p>
                                                    <p style={{marginLeft:"20px"}}>We suggest taking the time to visit some hiring partners, local companies with job listings, & doing some "one-click" applications through application websites like LinkedIn, Microsoft, Google, Amazon, Company Partner Sites, ZipRecruiter, & Glassdoor.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default CurriculumContent;
