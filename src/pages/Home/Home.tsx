import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Content/Service/Service'
import Greeting from '../../components/Content/Greeting/Greeting'
import Tshirt from '../../components/Content/Tshirt/Tshirt'
import Shirt from '../../components/Content/Shirt/Shirt'
import Hoodie from '../../components/Content/Hoodie/Hoodie'
import Description from '../../components/Content/Description/Description'
import Superiority from '../../components/Content/Superiority/Superiority'
import HowToOrder from '../../components/Content/HowToOrder/HowToOrder'
import Faq from '../../components/Content/Faq/Faq'
import Footer from '../../components/Footer/Footer'
import Portofolio from '../../components/Content/Portofolio/Portofolio'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Greeting/>
        <Service/>
        <Tshirt/>
        <Shirt/>
        <Hoodie/>
        <Description/>
        <Superiority title='JUDULNYA MEMANG AGAK PANJANG' contentText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto numquam beatae est itaque necessitatibus harum dolorum dolor. Officia placeat voluptates tenetur labore, temporibus quo veritatis fugit laboriosam est ab nulla ducimus quae! Quia repellat.' subContentText='Ipsa soluta fugiat animi, voluptates ratione nemo sunt iste odit laboriosam voluptatum impedit quo sint aspernatur quasi, ea, dicta alias. Cupiditate sit cum nesciunt asperiores atque iusto laborum modi, temporibus dolor alias iure adipisci consequatur tempora harum nihil laboriosam deleniti voluptas amet aliquam illo. ' reverse={false}/>
        <Superiority title='KONVEKSI BAJU TERBAIK DARI AHLINYA' contentText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto numquam beatae est itaque necessitatibus harum dolorum dolor. Officia placeat voluptates tenetur labore, temporibus quo veritatis fugit laboriosam est ab nulla ducimus quae! Quia repellat.' subContentText='Ipsa soluta fugiat animi, voluptates ratione nemo sunt iste odit laboriosam voluptatum impedit quo sint aspernatur quasi, ea, dicta alias. Cupiditate sit cum nesciunt asperiores atque iusto laborum modi, temporibus dolor alias iure adipisci consequatur tempora harum nihil laboriosam deleniti voluptas amet aliquam illo. ' reverse={true}/>
        <Superiority title='MEMANG SIAPA YANG BERANI' contentText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto numquam beatae est itaque necessitatibus harum dolorum dolor. Officia placeat voluptates tenetur labore, temporibus quo veritatis fugit laboriosam est ab nulla ducimus quae! Quia repellat.' subContentText='Ipsa soluta fugiat animi, voluptates ratione nemo sunt iste odit laboriosam voluptatum impedit quo sint aspernatur quasi, ea, dicta alias. Cupiditate sit cum nesciunt asperiores atque iusto laborum modi, temporibus dolor alias iure adipisci consequatur tempora harum nihil laboriosam deleniti voluptas amet aliquam illo. ' reverse={false}/>
        <HowToOrder/>
        <Portofolio/>
        <Footer/>
    </div>

    
  )
}

export default Home