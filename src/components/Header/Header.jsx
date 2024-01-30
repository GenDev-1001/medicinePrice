import React from "react";
import { logo } from "../../imgs/index";
import LoginModal from "../LoginModal/LoginModal";
import "./Header.css";

import { GrUserAdmin } from "react-icons/gr";

export default function Header({
	isLoggedIn,
	handleLogout,
	openModal,
	isModalOpen,
	closeModal,
	handleLogin,
}) {
	return (
		<div className="header">
			<div className="header__inner">
				<div className="header__logo">
					<img src={logo} alt="logo" className="header__logo-img" />
					<span className="logo-span">Price Medicine</span>
				</div>

				<div>
					{isLoggedIn ? (
						<div className="admin-flex">
							<GrUserAdmin />
							<button className="header-btn" onClick={handleLogout}>
								Выйти
							</button>
						</div>
					) : (
						<div>
							<button className="header-btn" onClick={openModal}>
								Войти
							</button>
							{isModalOpen && (
								<LoginModal onClose={closeModal} onLogin={handleLogin} />
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
