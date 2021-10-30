import React from 'react';
import { OurService } from '../components/OurService';

export const Home = () => {
    return (<>
        <section className="section-header pb-8 pb-lg-12 mb-4 mb-lg-6 bg-primary text-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                        <h1 className="display-2 mb-3">CST SOLUTION COMPANY LIMITED</h1>
                        <p className="lead">จัดจำหน่ายและบริการติดตั้ง ระบบเน็ตเวิร์ค ระบบแลน ระบบ Firewall</p>
                        <p className="lead">ช่วยให้ธุรกิจของคุณมีเทคโนโลยีทันสมัย ทำงานได้สำเร็จตามเป้าหมาย ป้องกันความเสียหายของข้อมูล</p>
                    </div>
                </div>
            </div>
            <div className="pattern bottom"></div>
        </section>
        <OurService />
        <section id="AboutUs" className="section section-lg pt-4 pb-4">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-12 text-center">
                        <h2 className="h1 px-lg-5">ส่วนหนึ่งของลูกค้าที่ไว้ใจเรา</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-3 col-lg-2">
                        <div className="mb-4">
                            <img className="card-img-top card-img-logo"
                                src="./assets/img/our-customer/factory-outlet-logo.png" alt="Card cap" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-lg-2">
                        <div className="mb-4">
                            <img className="card-img-top card-img-logo" src="./assets/img/our-customer/grand-home-logo.png"
                                alt="Card cap" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-lg-2">
                        <div className="mb-4">
                            <img className="card-img-top card-img-logo" src="./assets/img/our-customer/interlink-logo.png"
                                alt="Card cap" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-lg-2">
                        <div className="mb-4">
                            <img className="card-img-top card-img-logo" src="./assets/img/our-customer/tisco-logo.png"
                                alt="Card cap" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-lg-2">
                        <div className="mb-4">
                            <img className="card-img-top card-img-logo" src="./assets/img/our-customer/mitr-phol-logo.png"
                                alt="Card cap" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-lg-2">
                        <div className="mb-4">
                            <img className="card-img-top card-img-logo" src="./assets/img/our-customer/it-city-log.png"
                                alt="Card cap" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-lg-2">
                        <div className="mb-4">
                            <img className="card-img-top card-img-logo"
                                src="./assets/img/our-customer/materia-world-logo.png" alt="Card cap" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
