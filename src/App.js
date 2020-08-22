import React from 'react';
import illusHead from './assets/img/illus-head.svg'
import client1 from './assets/img/client1.svg'
import client2 from './assets/img/client2.svg'
import client3 from './assets/img/client3.svg'
import client4 from './assets/img/client4.svg'
import client5 from './assets/img/client5.svg'
import service1 from './assets/img/service1.svg'
import service2 from './assets/img/service2.svg'
import service3 from './assets/img/service3.svg'
import service4 from './assets/img/service4.svg'
import portfolio1 from './assets/img/portfolio1.jpeg'
import portfolio2 from './assets/img/portfolio2.jpeg'
import portfolio3 from './assets/img/portfolio3.jpeg'
import portfolio4 from './assets/img/portfolio4.jpeg'
import portfolio5 from './assets/img/portfolio5.jpeg'
import portfolio6 from './assets/img/portfolio6.jpeg'
import experience1 from './assets/img/experience1.svg'
import experience2 from './assets/img/experience2.svg'
import experience3 from './assets/img/experience3.svg'
import './App.scss';

class App extends React.Component {
	state = {
		isTop: false,
		nav: false
	}
	navbar = () => {
		this.setState({
			nav: !this.state.nav
		})
	}
	componentDidMount() {
		document.addEventListener('scroll', ()=> {
			let isTop = window.scrollY > 100
			if(isTop !== this.state.isTop){
				this.setState({isTop})
			}
		})
	}
	render() {
		return (
			<>
				<header id="header" className={`fixed-top d-flex align-items-center ${this.state.isTop ? 'scrolling' : 'top'}`}>
					<div className="container-md-fluid d-flex align-items-center w-100">
						<nav className="nav">
							<div className="pl-sm-2">
								<h1 className="text-light">
									<a href="#">LoremIpsum</a>
								</h1>
							</div>
							<div onClick={this.navbar} className="d-md-none pr-2">
								<span>click</span>
							</div>
							<div className={`menu ${this.state.nav ? 'show' : 'hide' }`}>
								<ul>
									<li><a href="#">+62802919991</a></li>
									<li><a href="#">loremipsum@gmail.com</a></li>
								</ul>
							</div>
						</nav>
					</div>
				</header>

				<section id="firstSection" className="d-flex align-items-center">
					<div className="container">
						<div className="d-flex flex-wrap justify-content-between">
							<div className="sec-left">
								<h3>I'm Frontend Engineer</h3>
								<h2 className="name-headline">Hi, my name is <br /><span>Lorem.</span></h2>
								<p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								</p>
								<div className="wrapper-scroll-to">
									<a className="btn btn-scroll-to btn-primary" href="#about">My Work</a>
									<a className="btn btn-scroll-to btn-outline-primary" href="#about">My Work</a>
								</div>
							</div>
							<div>
								<img className="img-fluid" src={illusHead} />
							</div>
						</div>
					</div>
				</section>

				<section id="clients" className="clients">
					<div className="container">
						<h2 className="title">TRUSTED BY EXPERTS AT</h2>
						<div className="d-flex flex-wrap justify-content-center">
							<div>
								<img className="img-fluid" src={client1} />
							</div>
							<div>
								<img className="img-fluid" src={client2} />
							</div>
							<div>
								<img className="img-fluid" src={client3} />
							</div>
							<div>
								<img className="img-fluid" src={client4} />
							</div>
							<div>
								<img className="img-fluid" src={client5} />
							</div>
							<div>
								<img className="img-fluid" src={client1} />
							</div>
						</div>
					</div>
				</section>

				<section id="services" className="d-flex align-items-center">
					<div className="container relative">
						<div className="wrapper-title">
							<span className="font-weight-bold">SERVICES</span>
							<h2>What We Do</h2>
							<p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
						</div>
						<div className="d-flex wrapper-cards">
							<div className="card">
								<div className="icon">
									<img src={service1} />
								</div>
								<h4 className="title">
									<a href="">Research</a>
								</h4>
								<p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
								<a className="more" href="">Learn More</a>
							</div>
							<div className="card">
								<div className="icon">
									<img src={service2} />
								</div>
								<h4 className="title">
									<a href="">Develop</a>
								</h4>
								<p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
								<a className="more" href="">Learn More</a>
							</div>
							<div className="card">
								<div className="icon">
									<img src={service3} />
								</div>
								<h4 className="title">
									<a href="">Maintain</a>
								</h4>
								<p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
								<a className="more" href="">Learn More</a>
							</div>
							<div className="card">
								<div className="icon">
									<img src={service4} />
								</div>
								<h4 className="title">
									<a href="">Promote</a>
								</h4>
								<p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
								<a className="more" href="">Learn More</a>
							</div>
						</div>
					</div>
				</section>

				<section id="portfolio">
					<div className="container">
						<div className="d-flex flex-wrap">
							<div className="wrapper-title left">
								<h2>Portfolio</h2>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="">ALL</a>
									</li>
									<li className="breadcrumb-item">
										<a href="">APP</a>
									</li>
									<li className="breadcrumb-item">
										<a href="">WEB</a>
									</li>
								</ul>
								<p className="desc text-left">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
							</div>
							<div className="wrapper-portfolio-thumbnail">
								<div className="portfolio-thumbnail landscape">
									<img src={portfolio1} />
								</div>
								<div className="portfolio-thumbnail portrait">
									<img src={portfolio2} />
								</div>
								<div className="portfolio-thumbnail portrait">
									<img src={portfolio3} />
								</div>
								<div className="portfolio-thumbnail landscape">
									<img src={portfolio4} />
								</div>
								<div className="portfolio-thumbnail landscape">
									<img src={portfolio5} />
								</div>
								<div className="portfolio-thumbnail portrait">
									<img src={portfolio6} />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="experiences">
					<div className="container">
						<div className="d-flex flex-wrap justify-content-between">
							<div className="sec-left">
								<div className="wrapper-title left">
									<span className="font-weight-bold">WORKING WITH</span>
									<h2>Experience</h2>
									<p>Necessitatibus eius consequatur ex aliquid fuga eum quidem, It doesn’t matter how great your product or service is if your copy does not captivate your audience.</p>
									<a className="btn btn-primary" href="">Download Resume</a>
								</div>
							</div>
							<div className="sec-right">
								<div className="experience-item">
									<div className="sec-left d-flex">
										<img src={experience1} />
										<div>
											<span>PRESENT</span>
											<h4>Front End</h4>
										</div>
									</div>
									<div className="sec-right">
										<p>
											Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan.
										</p>
									</div>
								</div>
								<div className="experience-item">
									<div className="sec-left d-flex">
										<img src={experience2} />
										<div>
											<span>PRESENT</span>
											<h4>Front End</h4>
										</div>
									</div>
									<div className="sec-right">
										<p>
											Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan.
										</p>
									</div>
								</div>
								<div className="experience-item">
									<div className="sec-left d-flex">
										<img src={experience3} />
										<div>
											<span>PRESENT</span>
											<h4>Front End</h4>
										</div>
									</div>
									<div className="sec-right">
										<p>
											Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default App