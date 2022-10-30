import './PageOne.css'


const PageOne = ({data}) => {
    const elements = data.slice(0,2).map(items => {
        return (
            <div className="doctor-record">
                <h1 className="p-20">{items.data} | {items.time} </h1>
                <div className="jk">{items.clinicName}, {items.address}</div>
                <div className="photo-doctor">
                    <img src={`icons/${items.doctorImg}`} alt="Doctor"/>
                </div>
                <div className="group">
                    <div className="name">{items.doctorName}</div>
                    <span className="job">{items.profile}</span>
                </div>
                <button className="button">Отменить</button>
            </div>
    )
    })

    return (
        <section className="main">
            <div className="container">
                <div className="hat">
                    <div className="p-1">Мой Профиль</div>
                    <div className="mask-group">
                        <img src="icons/mag-glass.png" className="mask-group-1 m-12"/>
                        <img src="icons/bell.png" className="mask-group-1 m-12"/>
                        <img src="icons/eye.png" className="mask-group-1 m-12"/>
                        <img src="icons/profile.png" className="mask-group-2 m-12"/>
                        <img src="icons/open.png" className="mask-group-1 p-2"/>
                    </div>
                </div>
                <div className="text-records">Записи на прием</div>

                {elements}

                <div className="more p-20">
                    Еще 3 записи
                    <a href="/pageTwo">Подробнее</a>
                </div>

                <div className="text-info">Электронная карта</div>
                <div className="info2">
                    <div className="info-img2">
                        <img src="icons/info.png"/>
                    </div>
                    <div className="info-text">
                        <h1 className="h1">Информация о пациенте </h1>
                        <hr className="color"/>
                        <div className="list">
                            <ul>
                                <li><span>Ваши личные данные</span></li>
                                <li><span>Рекомендации врачей</span></li>
                                <li><span>История болезней</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="info-img">
                        <img src="icons/results.png"/>
                    </div>
                    <div className="info-text">
                        <h1 className="h1">Результаты анализов</h1>
                        <hr/>
                        <div className="block-text">Вы можете узнать здесь результаты своих анализов</div>
                    </div>
                </div>
                <div className="info">
                    <div className="info-img">
                        <img src="icons/add-info.png"/>
                    </div>
                    <div className="info-text">
                        <h1 className="h1">Добавить информацию</h1>
                        <hr/>
                        <div className="block-text">Добавляйте в свою электронную медицинскую карту новые данные
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="info-img">
                        <img src="icons/story.png"/>
                    </div>
                    <div className="info-text">
                        <h1 className="h1">История приемов</h1>
                        <hr/>
                        <div className="block-text">Вся информация о полученных услугах за все время хранится
                            здесь
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageOne;