import React from 'react'

const TopNav = () => {

	const styles = {
		nav: 'bg-gray-50 h-24 border-b border-gray-300 w-full flex items-end justify-center',
		container: 'flex bg-red-100',
		link: 'flex px-4',
		navImage: 'w-4'
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<a href="#" className={styles.link}>
					<img className={styles.navImage} src="/assets/book.svg" alt="Book" />
					<span>Overview</span>
				</a>
				<a href="#" className={styles.link}>
					<img className={styles.navImage} src="/assets/book.svg" alt="Book" />
					<span>Overview</span>
				</a>
				<a href="#" className={styles.link}>
					<img className={styles.navImage} src="/assets/book.svg" alt="Book" />
					<span>Overview</span>
				</a>
				<a href="#" className={styles.link}>
					<img className={styles.navImage} src="/assets/package.svg" alt="Book" />
					<span>Packages</span>
				</a>
				<a href="#" className={styles.link}>
					<img className={styles.navImage} src="/assets/star.svg" alt="Book" />
					<span>Stars</span>
				</a>
			</div>
		</nav>
	)
}

export default TopNav;