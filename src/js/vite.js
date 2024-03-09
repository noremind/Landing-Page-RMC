

document.querySelector('#app').innerHTML = `
	<header class="header">
		<div class="header__wrapper">
			<div class="container--header container">

				<nav class="header__nav nav">

					<div class="nav__logo">
						<a href="#!" class="logo">RMC</a>
					</div>

					<ul class="nav-list">
						<li class="nav-list__item">
							<a href="#!" class="nav-list__link">The Studio</a>
						</li>

						<li class="nav-list__item">
							<a href="#!" class="nav-list__link">Projects</a>
						</li>

						<li class="nav-list__item">
							<a href="#!" class="nav-list__link">Architecture</a>
						</li>

						<li class="nav-list__item">
							<a href="#!" class="nav-list__link">Blog</a>
						</li>
					</ul>

					<div class="header__btn">
						<button class="btn">
							Contact
						</button>
					</div>

					<button id="open-mobile-nav" class="nav__btn">
						<img src="images/icons/menu.svg" alt="menu">
					</button>
				</nav>


				<div class="header__content">
					<p class="header__overtitle overtitle">Architecture design</p>
					<h1 class="header__title">Professional
						Interior Design</h1>
					<p class="header__text">
						Design for now with the awareness of yesterday and unknown tomorrow. Because small details make the perfect
						design.
						Helping you choose between good and best.
					</p>

					<button class="btn">Let's Work Together</button>
				</div>


				<img class="header__bg-icon " src="images/icons/stars.svg" alt="stars">

				<img class="header__bg-line " src="images/rectangle/line.svg" alt="line">
			</div>

			<img class="header__bg-img " src="images/header/header-bg.jpeg" alt="header-bg">
			<p class="header__bg-text decor-text">Interior</p>

		</div>
	</header>

	<div id="mobile-nav" class="mobile-nav-wrapper">

		<div class="mobile-nav-header">

			<button id="close-mobile-nav" class="mobile-nav-btn-close">
				<img src="images/icons/close.svg">
			</button>
		</div>

		<ul class="mobile-nav">
			<li class="mobile-nav__item">
				<a href="#" class="mobile-nav__link mobile-nav__link--dropdown">THE STUDIO</a>

				<!-- <ul class="mobile-sub-nav">
          <li class="mobile-sub-nav__item">
            <a href="#!" class="mobile-sub-nav__link">Home</a>
          </li>

          <li class="mobile-sub-nav__item">
            <a href="#!" class="mobile-sub-nav__link">Office</a>
          </li>

          <li class="mobile-sub-nav__item">
            <a href="#!" class="mobile-sub-nav__link">Institution</a>
          </li>

          <li class="mobile-sub-nav__item">
            <a href="#!" class="mobile-sub-nav__link">Other</a>
          </li>
        </ul> -->

			</li>

			<li class="mobile-nav__item">
				<a href="#" class="mobile-nav__link">Projects</a>
			</li>

			<li class="mobile-nav__item">
				<a href="#" class="mobile-nav__link">Architecture</a>
			</li>
			<li class="mobile-nav__item">
				<a href="#" class="mobile-nav__link">Blog</a>
			</li>

			<li class="mobile-nav__item">
				<a href="#" class="btn mobile-nav__link mobile-nav__link--margin">Contact</a>
			</li>
		</ul>

	</div>

	<main class="main">

		<section class="specializations">
			<div class="container container--xl">
				<div class="specializations__wrapper">
					<p class="specializations__text overtitle">Top Services</p>
					<div class="specializations__cards">
						<h1 class="specializations__title title">Our Specializations</h1>
						<div class="specializations__card specializations__card--first">
							<div class="interior-card">
								<img class="interior-card__img" src="images/architecture/arch-1.jpg" alt="architecture" />
								<div class="interior-card__box">
									<h3 class="interior-card__title">Floor plan</h3>
									<p class="interior-card__text">Tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>

						<div class="specializations__card specializations__card--second">
							<div class="interior-card">
								<img class="interior-card__img" src="images/architecture/arch-2.jpg" alt="architecture" />
								<div class="interior-card__box">
									<h3 class="interior-card__title">Interior Design</h3>
									<p class="interior-card__text">T empor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
								</div>
							</div>
						</div>

						<div class="specializations__card specializations__card--third">
							<div class="interior-card">
								<img class="interior-card__img" src="images/architecture/arch-3.jpg" alt="architecture" />
								<div class="interior-card__box">
									<h3 class="interior-card__title">Architecture Design</h3>
									<p class="interior-card__text">Tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div class="specializations__card specializations__card--four">
							<div class="interior-card">
								<img class="interior-card__img" src="images/architecture/arch-4.jpg" alt="architecture" />
								<div class="interior-card__box">
									<h3 class="interior-card__title">Construction</h3>
									<p class="interior-card__text">Tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
					</div>
					<p class="specializations__bg-text decor-text">Design</p>
				</div>
			</div>
		</section>

		<<section class="specializations-mobile specializations-mobile--none">
			<!-- Swiper -->
			<div class="swiper mySwiper">
				<div class="swiper-wrapper specializations-mobile__wrapper">
					<div class="swiper-slide">
						<div class="specializations-mobile__slider interior-card">
							<img class="interior-card__img" src="images/architecture/arch-1.jpg" alt="architecture" />
							<div class="interior-card__box">
								<h3 class="interior-card__title">Floor plan</h3>
								<p class="interior-card__text">Tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="interior-card specializations-mobile__slider">
							<img class="interior-card__img" src="images/architecture/arch-2.jpg" alt="architecture" />
							<div class="interior-card__box">
								<h3 class="interior-card__title">Floor plan</h3>
								<p class="interior-card__text">Tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="interior-card specializations-mobile__slider">
							<img class="interior-card__img" src="images/architecture/arch-3.jpg" alt="architecture" />
							<div class="interior-card__box">
								<h3 class="interior-card__title">Floor plan</h3>
								<p class="interior-card__text">Tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="interior-card specializations-mobile__slider">
							<img class="interior-card__img" src="images/architecture/arch-4.jpg" alt="architecture" />
							<div class="interior-card__box">
								<h3 class="interior-card__title">Floor plan</h3>
								<p class="interior-card__text">Tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="interior-card specializations-mobile__slider">
							<img class="interior-card__img" src="images/architecture/arch-5.jpg" alt="architecture" />
							<div class="interior-card__box">
								<h3 class="interior-card__title">Floor plan</h3>
								<p class="interior-card__text">Tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			</section>

			<section class="about-us">
				<div class="container container--xl">
					<div class="about-us__wrapper">
						<div class="about-us__content">
							<h2 class="title about-us__title">About Us</h2>
							<p class="about-us__subtitle">
								As development continues, engineers may visit building destinations to guarantee that temporary workers
								pursue
								the plan, keep to the timetable, utilize the predefined materials, and meet
								work-quality models.
							</p>
							<div class="about-us__percent--xl">
								<div class="about-us__box">
									<p class="about-us__number">85</p>
									<div class="about-us__text">Satisfied Clients</div>
								</div>
								<img src="images/architecture/arch-12.jpg" class="about-us__content-img" alt="architecture" />
							</div>
						</div>
						<div class="about-us__percent--md">
							<div class="about-us__box">
								<p class="about-us__number">85</p>
								<div class="about-us__text">Satisfied Clients</div>
							</div>
							<img src="images/architecture/arch-12.jpg" class="about-us__content-img" alt="architecture" />
						</div>
						<div class="about-us__photo">
							<img src="images/architecture/arch-6.jpg" class="about-us__img about-us__img--low-down" />
							<img src="images/architecture/arch-5.jpg" class="about-us__img" />
						</div>

						<img class="about-us__line-img" src="images/rectangle/line.svg" alt="Line" />
						<img class="about-us__star" src="images/icons/white-star.svg" alt="Star" />
					</div>
				</div>
			</section>

			<section class="digital none">
				<div class="digital__wrapper">
					<div class="container container--xl">
						<div class="digital__inner">
							<img class="digital__schema" src="images/architecture/home-project.png" alt="Schema home">
							<div class="digital__content">
								<h1 class="digital__title title">We Create Digital Experience</h1>
								<div class="digital__percent">
									<div class="digital__percent-box">
										<p class="digital__percent-number">75</p>
										<p class="digital__percent-text">Architecture</p>
									</div>
									<div class="digital__percent-box">
										<p class="digital__percent-number">85</p>
										<p class="digital__percent-text">Construction</p>
									</div>
									<div class="digital__percent-box">
										<p class="digital__percent-number">65</p>
										<p class="digital__percent-text">Interior Design</p>
									</div>
								</div>
								<a href="#" class="digital__btn btn">Lets Work Together</a>
							</div>
							<div class="digital__bg-text">R</div>
						</div>
					</div>
				</div>
			</section>

			<section class="team none">
				<div class="team__wrapper">
					<div class="team__bg-line">
						<div class="team__bg-line-img"></div>
					</div>
					<div class="container--xl">
						<div class="team__inner">
							<p class="team__overtitle overtitle">Our Team</p>
							<h2 class="team__title title">Meet With Our Team</h2>

							<img src="images/team/team.jpg" alt="Our Team" class="team__img">

							<div class="team__employees">
								<div class="team__box">
									<p class="team__name">Cody Fisher</p>
									<p class="team__job">CEO</p>
								</div>
								<div class="team__box">
									<p class="team__name">Savannah Nguyen</p>
									<p class="team__job">Interior architect</p>
								</div>

								<div class="team__box">
									<p class="team__name">Savannah Nguyen</p>
									<p class="team__job">Interior architect</p>
								</div>

								<div class="team__box">
									<p class="team__name">Jerome Bell</p>
									<p class="team__job">Interior</p>
								</div>

								<div class="team__box">
									<p class="team__name">Cameron Williamson</p>
									<p class="team__job">Architect</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="projects">
				<div class="container container--xl">
					<div class="projects__wrapper">
						<div class="project__heading">
							<div class="project__text">
								<p class="project__text-overtitle overtitle">OUR PROJECT</p>
								<h2 class="project__text-title title">Our Latest Projects</h2>
							</div>

							<div class="project__tabs">
								<div class="tab-controls">
									<button class="tab-controls__btn tab-controls__btn--active">
										All
									</button>
									<button class="tab-controls__btn">
										Architecture
									</button>
									<button class="tab-controls__btn">
										Construction
									</button>
									<button class="tab-controls__btn">
										Interior Design
									</button>
								</div>
							</div>
						</div>

						<div class="project__images">
							<img src="images/architecture/arch-7.jpg" alt="arch" class="project__images-img">
							<img src="images/architecture/arch-8.jpg" alt="arch" class="project__images-img">
							<img src="images/architecture/arch-9.jpg" alt="arch" class="project__images-img">
							<img src="images/architecture/arch-10.jpg" alt="arch" class="project__images-img">
							<img src="images/architecture/arch-19.jpg" alt="arch" class="project__images-img">
							<img src="images/architecture/arch-20.jpg" alt="arch" class="project__images-img">
							<img src="images/architecture/arch-21.jpg" alt="arch" class="project__images-img">
							<img src="images/architecture/arch-18.jpg" alt="arch" class="project__images-img">
						</div>

					</div>
				</div>
			</section>

			<section class="digital">
				<div class="digital__wrapper">
					<div class="container container--xl">
						<div class="digital__inner">
							<img class="digital__schema" src="images/architecture/home-project.png" alt="Schema home">
							<div class="digital__content">
								<h1 class="digital__title title">We Create Digital Experience</h1>
								<div class="digital__percent">
									<div class="digital__percent-box">
										<p class="digital__percent-number">75</p>
										<p class="digital__percent-text">Architecture</p>
									</div>
									<div class="digital__percent-box">
										<p class="digital__percent-number">85</p>
										<p class="digital__percent-text">Construction</p>
									</div>
									<div class="digital__percent-box">
										<p class="digital__percent-number">65</p>
										<p class="digital__percent-text">Interior Design</p>
									</div>
								</div>
								<a href="#" class="digital__btn btn">Lets Work Together</a>
							</div>
							<div class="digital__bg-text">R</div>
						</div>
					</div>
				</div>
			</section>

			<section class="availability">
				<div class="container container--xl">
					<div class="availability__wrapper">
						<div class="availability__text">
							<div class="availability__heading">
								<p class="availability__overtitle overtitle">OUR PROJECT</p>
								<h2 class="availability__title title">Check Availability</h2>
							</div>
							<p class="availability__description">The unique architect with ideas from outside the world. Where design
								and science meet. With people’s
								comfort in mind</p>
						</div>

						<div class="availability__content">
							<div class="availability__table">
								<table>
									<tr>
										<th>Residence</th>
										<th>Bed/Bath</th>
										<!-- <th>SQ. FT.</th> -->
										<th>Sale Price</th>
										<th>Rent Price</th>
										<th>Floor Plan</th>
									</tr>

									<tr>
										<td class="td-white">LUX APARTMENT</td>
										<td>3/2</td>
										<!-- <td>110</td> -->
										<td>$350,000</td>
										<td>$2,500</td>
										<td><a href="#!">VIEW NOW</a></td>
									</tr>

									<tr>
										<td class="td-white">THE GREEN VILLA</td>
										<td>3/3</td>
										<!-- <td>1120</td> -->
										<td>$194,000</td>
										<td>$3,500</td>
										<td><a href="#!">VIEW NOW</a></td>
									</tr>

									<tr>
										<td class="td-white">THE GREEN VILLA</td>
										<td>3/3</td>
										<!-- <td>1120</td> -->
										<td>$194,000</td>
										<td>$3,500</td>
										<td><a href="#!">VIEW NOW</a></td>
									</tr>

									<tr>
										<td class="td-white">SPA LUXURY</td>
										<td>3/3</td>
										<!-- <td>520</td> -->
										<td>$520,000</td>
										<td>$9,000</td>
										<td><a href="#!">VIEW NOW</a></td>
									</tr>

									<tr>
										<td class="td-white">DUPLEX 13A</td>
										<td>3/3</td>
										<!-- <td>50</td> -->
										<td>$150,000</td>
										<td>$1,900</td>
										<td><a href="#!">VIEW NOW</a></td>
									</tr>

									<tr>
										<td class="td-white">DUPLEX 13A</td>
										<td>3/3</td>
										<!-- <td>50</td> -->
										<td>$150,000</td>
										<td>$1,900</td>
										<td><a href="#!">VIEW NOW</a></td>
									</tr>

									<tr>
										<td class="td-white">SIMPLEX 12A8</td>
										<td>3/3</td>
										<!-- <td>100</td> -->
										<td>$120,000</td>
										<td>$1,000</td>
										<td><a href="#!">VIEW NOW</a></td>
									</tr>
								</table>


							</div>
							<img class="availability__img" src="images/architecture/arch-11.jpg" alt="img">
							<img src="images/architecture/arch-12.jpg" alt="arch" class="availability__img--stock">

						</div>
					</div>
				</div>
			</section>

			<section class="team ">
				<div class="team__wrapper">
					<div class="team__bg-line">
						<div class="team__bg-line-img"></div>
					</div>
					<div class="container--xl">
						<div class="team__inner">
							<p class="team__overtitle overtitle">Our Team</p>
							<h2 class="team__title title">Meet With Our Team</h2>

							<img src="images/team/team.jpg" alt="Our Team" class="team__img">

							<div class="team__employees">
								<div class="team__box">
									<p class="team__name">Cody Fisher</p>
									<p class="team__job">CEO</p>
								</div>
								<div class="team__box">
									<p class="team__name">Savannah Nguyen</p>
									<p class="team__job">Interior architect</p>
								</div>

								<div class="team__box">
									<p class="team__name">Savannah Nguyen</p>
									<p class="team__job">Interior architect</p>
								</div>

								<div class="team__box">
									<p class="team__name">Jerome Bell</p>
									<p class="team__job">Interior</p>
								</div>

								<div class="team__box">
									<p class="team__name">Cameron Williamson</p>
									<p class="team__job">Architect</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="gallery">
				<div class="container container--xxl">
					<div class="gallery__wrapper">
						<img class="gallery__img" src="images/architecture/arch-13.jpg" alt="gallery">
						<img class="gallery__img" src="images/architecture/arch-14.jpg" alt="gallery">
						<img class="gallery__img" src="images/architecture/arch-15.jpg" alt="gallery">
						<img class="gallery__img" src="images/architecture/arch-22.jpg" alt="gallery">
						<img class="gallery__img" src="images/architecture/arch-16.jpg" alt="gallery">
						<img class="gallery__img" src="images/architecture/arch-17.jpg" alt="gallery">
						<img class="gallery__img" src="images/architecture/arch-23.jpg" alt="gallery">
					</div>
				</div>
			</section>
	</main>

	<footer class="footer">
		<div class="container container--xl">
			<div class="footer__wrapper">
				<div class="footer__text">
					<div class="footer__logo">
						<a href="#!" class="logo">RMC</a>
					</div>

					<p class="footer__description">
						Take a look at how we designed this housesimply random text. It has roots in a piece of classical Latin
						literature from
						45 BC, making it over 2000 years old.
					</p>
				</div>

				<nav class="footer__nav">
					<ul class="footer__nav-list">
						<li class="footer__nav-list-item"><a class="footer__nav-list-link footer__nav-list-link--active"
								href="#!">THE STUDIO</a></li>
						<li class="footer__nav-list-item"><a class="footer__nav-list-link" href="#!">Projects</a></li>
						<li class="footer__nav-list-item"><a class="footer__nav-list-link" href="#!">Architecture</a></li>
						<li class="footer__nav-list-item"><a class="footer__nav-list-link" href="#!">Blog</a></li>
						<li class="footer__nav-list-item"><a class="footer__nav-list-link" href="#!">Contact</a></li>
					</ul>
				</nav>

				<div class="footer__props">
					<h2 class="footer__title">Visit</h2>
					<p class="footer__address">Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184</p>
					<h2 class="footer__title">Call</h2>
					<p class="footer__address">017-6153-1774</p>
				</div>
			</div>

		</div>
		<div class="footer__copyrights">
			<p>© Copyright 2022 Email: <span>Asibulasik@gmail.com</span></p>
		</div>
	</footer>
`