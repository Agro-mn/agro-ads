import React, {useState} from 'react';
import { Layout, Row, Col, Button, Typography, Input, Dropdown, Menu } from 'antd';
import { SearchOutlined, StarOutlined, StarFilled, MessageFilled } from '@ant-design/icons';
import logo from './assets/logos/agro logo har.png'
import 'antd/dist/reset.css';
import ad1 from './assets/ads/ads1.jpg';
import tractor from './assets/icons/tractor.png';
import haduur from './assets/icons/pickaxe.png';
import milk from './assets/icons/milk.png';
import vr from './assets/icons/hand-holding-seeding.png';
import bordoo from './assets/icons/bag-seedling.png';
import tos from './assets/icons/car-oil.png';
import tsunh from './assets/icons/briefcase.png';
import hashaa from './assets/icons/fence.png';
import unee from './assets/icons/cow-alt.png';
import box from './assets/icons/apple-crate.png';

const locations = [
'Улаанбаатар',
'Дархан',
'Эрдэнэт',
'Сүхбаатар',
'Дорнод',
'Ховд',
'Говь-Алтай',
'Баянхонгор',
'Дундговь',
'Өвөрхангай',
'Төв',
'Сэлэнгэ',
'Булган',
'Архангай',
'Хөвсгөл',
'Завхан',
'Увс',
'Хэнтий',
'Дорноговь',
'Говьсүмбэр',
'Хэнтий',
'Дорнод',
]

const adTitles = [
{
title: 'Техник, тоног төхөөрөмж',
icon: tractor
},
{
title: 'ХАА-н сэлбэг, багаж',
icon: haduur
},
{
title: 'Мах, сүү, сүүн бүтээгдэхүүн',
icon: milk
},
{
title: 'Тарималын үр',
icon: vr
},
{
title: 'Ургамал хамгаалах бодис',
icon: bordoo
},
{
title: 'Шатахуун, тос, тосолгооны материал',
icon: tos
},
{
title: 'ХАА-н ажлын байр',
icon: tsunh
},
{
title: 'ХАА-н обьект, Тариалангын газар',
icon: hashaa
},
{
title: 'Ферм, мал аж ахуй',
icon: unee
},
{
title: 'ХАА-н бүтээгдэхүүн',
icon: box
},
]
const ads = [
{
title: 'Турба зарна',
description: '1.4м урт 40-н турба 1ш нь 5к Дарханд байгаа 88064518',
image: ad1,
price: '5000₮',
location: 'Дархан',
date: '2023-10-01'
},
{
title: 'Зар 2',
description: 'Энэ бол зарын тайлбар 2',
image: ad1,
price: '5000₮',
location: 'Дархан',
date: '2023-10-01'
},
{
title: 'Зар 3',
description: 'Энэ бол зарын тайлбар 3',
image: ad1,
price: '5000₮',
location: 'Дархан',
date: '2023-10-01'
},
{
title: 'Турба зарна',
description: '1.4м урт 40-н турба 1ш нь 5к Дарханд байгаа 88064518',
image: ad1,
price: '5000₮',
location: 'Дархан',
date: '2023-10-01'
},
{
title: 'Зар 2',
description: 'Энэ бол зарын тайлбар 2',
image: ad1,
price: '5000₮',
location: 'Дархан',
date: '2023-10-01'
},
{
title: 'Зар 3',
description: 'Энэ бол зарын тайлбар 3',
image: ad1,
price: '5000₮',
location: 'Дархан',
date: '2023-10-01'
},
{
title: 'Турба зарна',
description: '1.4м урт 40-н турба 1ш нь 5к Дарханд байгаа 88064518',
image: ad1,
price: '5000₮',
location: 'Дархан',
date: '2023-10-01'
},
{
title: 'Зар 2',
description: 'Энэ бол зарын тайлбар 2',
image: ad1,
price: '5000₮',
location: 'Дархан',
date: '2023-10-01'
},
{
title: 'Зар 3',
description: 'Энэ бол зарын тайлбар 3',
image: ad1,
price: '5000₮',
location: 'Дархан',
date: '2023-10-01'
}
];
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {

  const [selectedCountry, setSelectedCountry] = useState('Бүх байршил');
const locationMenu = (
  <Menu
    onClick={(e) => setSelectedCountry(e.key)}
    style={{
      height: '400px',        // force 400px tall
      overflowY: 'auto',      // enable vertical scrolling
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    }}
  >
    {locations.map((loc) => (
      <Menu.Item key={loc} style={{ padding: '5px 10px' }}>
        {loc}
      </Menu.Item>
    ))}
  </Menu>
);


return (
<Layout style={{ minHeight: '100vh', fontFamily: 'var(--main-font)' }}>
<Header  style={{ background: '#fff', display: 'flex', alignItems: 'center',  minHeight: '10vh', borderBottom: '2px solid var(--main-gray)' }}>
<div style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="Logo" style={{ height: 50, filter: 'drop-shadow(1px 1px  0  #efd643)' }} />
            <div style={{margin: '10px 15px' , width: "2px", height: "60px"}}></div>
            <Title level={3} style={{ color: '#272826', margin: 0, fontSize: '18px', fontFamily: 'var(--main-font)', fontWeight: '700',  maxWidth: '250px' }}>
                Хөдөө аж ахуйн зарын нэгдсэн платформ
            </Title>
            </div>
            <div style={{ flex: 1 }}></div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button type="primary" style={{ marginRight: 16, padding: '5px 20px', background: 'var(--main-gray)', borderColor: 'var(--main-gray)' }}>
                    Нэвтрэх
                </Button>
                <Button type="default" style={{ padding: '5px 20px', background: '#fff', color: 'var(--main-gray)', border: '2px solid var(--main-gray)' }}>
                    Бүртгүүлэх
                </Button>
            </div>
        </Header>

        {/* Main Content */}
        <Content style={{ padding: '5vh 8vw', background: '#fff' }}>
            <Row gutter={[100]} justify="center">
                <Col xs={24} sm={12} md={18}>
                <div style={{ display: 'flex', alignItems: 'center', width: '50%' }}>
                    <div style={{display: 'flex',  border: '2px solid var(--main-gray)',fontFamily: "var(--main-font)", borderRadius: '10px', padding: '6px 20px', fontSize: '16px'}}>

                    <Input style={{ border: 'none', outline: 'none', fontFamily: "var(--main-font)", fontSize: '16px' }} placeholder={`${ads.length} зар байна`}></Input>
                    
                <Dropdown
                  trigger={['click']}
                  overlay={locationMenu}
                  placement="bottomLeft"
                  arrow
                >
                  <Button
                    style={{
                      border: 'none',
                      outline: 'none',
                      fontFamily: 'var(--main-font)',
                      fontSize: 16,
                      background: 'transparent',
                      color: 'var(--main-gray)',
                    }}
                  >
                    {selectedCountry}
                  </Button>
                </Dropdown>
                    </div>
                    <Button type="primary" icon={<SearchOutlined style={{}}></SearchOutlined>} 
                    style={{ marginLeft: '10px',border: '2px solid var(--main-gray)',fontFamily: "var(--main-font)", borderRadius: '10px', background: 'var(--main-gray)', padding: '23px 30px', borderColor: 'var(--main-gray)' }}>
                        Хайх
                    </Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', justifyContent: 'flex-start', marginTop: '20px', gap: '20px', flexWrap: 'wrap' }}>
                    {ads.map((ad, index) => (
                        <div key={index} 
                        style={{ width: '200px', borderRadius: '10px'}}>
                            <img src={ad.image} alt={ad.title} style={{ width: '100%', height: '120px', borderRadius: '10px', objectFit:'cover' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div style={{ fontFamily: 'var(--main-font)', fontSize: '20px', fontWeight: '700' }}>{ad.price}</div>
                                <StarOutlined style={{ fontSize: '20px', color: 'var(--main-gray)' }} />
                            </div>
                            <div style={{fontFamily: 'var(--main-font)', fontSize: "12px"}}>{ad.description}</div>
                            <div style={{ display: 'flex', marginTop: '5px'}}>
                                <div style={{ fontFamily: 'var(--main-font)', fontSize: '12px', color: 'var(--main-gray)', opacity: "0.8", marginRight: '10px' }}>{ad.date}</div>
                                <div style={{ fontFamily: 'var(--main-font)', fontSize: '12px', color: 'var(--main-gray)', opacity: "0.8"  }}>{ad.location}</div>
                            </div>
                        </div>
                    ))}
                </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px', borderRadius: '10px', border: '2px solid var(--main-gray)'}}>
                    <div style={{marginLeft: '20px', fontFamily: "var(--main-font)"}}>Миний зарууд</div>
                    <StarFilled style={{ fontSize: '18px', color: 'var(--main-gray)' }} />
                    <MessageFilled style={{ fontSize: '18px', color: 'var(--main-gray)' }} />
                    <Button type="primary" style={{ marginLeft: '10px', fontFamily: "var(--main-font)", padding: '5px 20px', background: 'var(--main-gray)', borderColor: 'var(--main-gray)' }}>
                        Зар нэмэх
                    </Button>
                </div>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', padding: '5px', marginTop: '20px'}}>
                    <div style={{ fontFamily: "var(--main-font)", fontSize: "16px", color: 'var(--main-gray)' }}>Зарын төрлүүд :</div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '5px'}}>
                        {adTitles.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '5px',  marginTop: '10px', cursor: 'pointer'}}>
                                <img src={item.icon} alt={item.title} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                                <div style={{ fontFamily: "var(--main-font)", fontSize: '14px' }}>{item.title}</div>
                            </div>
                        ))}
                        </div>
                </div>
                </Col>
            </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            ©2025 AgroAds. All rights reserved.
        </Footer>
    </Layout>
);

}

export default App;
