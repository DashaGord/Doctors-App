import './Nav.css'

const Nav = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logotype">
                    <div className="p-20">Логотип</div>
                </div>
                <a href="#" className="menu m-t-10">
                    <div className="img-block"><img src="icons/profile-nav.png"/></div>
                    <div className="menu-item">Профиль</div>
                </a>
                <a href="#" className="menu m-t-10">
                    <div className="img-block"><img src="icons/doctors.png"/></div>
                    <div className="menu-item">Врачи и клиники</div>
                </a>
                <a href="#" className="menu m-t-10">
                    <div className="img-block"><img src="icons/messges.png"/></div>
                    <div className="menu-item">Сообщения</div>
                </a>
                <a href="#" className="menu m-t-10">
                    <div className="img-block"><img src="icons/test.png"/></div>
                    <div className="menu-item">Тестирование</div>
                </a>
                <a href="#" className="menu m-t-10">
                    <div className="img-block"><img src="icons/healthy-info.png"/></div>
                    <div className="menu-item">Полезно знать</div>
                </a>
                <button type="submit">Подать заявку</button>
                <div className="help">
                    <img src="icons/help.png" alt="Help"/>
                        <div className="help-text">Помощь</div>
                </div>
                <div className="logo">
                    <img src="icons/logo.png" alt="Logo"/>
                </div>
            </div>
        </header>
    );
};

export default Nav;