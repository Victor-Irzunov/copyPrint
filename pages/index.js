import Heading from '@component/components/Heading'
import { HeaderInfo } from '@component/components/header/headerInfo/HeaderInfo'
import Head from 'next/head'
import { InfoCircleTwoTone, UpOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import ServiceSection from '@component/components/sections/ServiceSection'
import { FloatButton } from 'antd'
import Image from 'next/image'


{/* <EnvironmentOutlined /> */ }
// export const getStaticProps = async () => {

// };

const Home = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Head>
        <title>
          Печатный центр в Минске
        </title>
        <meta
          name="description"
          content="Лучшая цена в Минске на печатные услуги."
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>



      <main className="" id='main'>
        <FloatButton.BackTop />

        <div className='w-full h-screen fon bg-cover bg-center'> </div>

        <div className=''>
          {
            isActive ?
              <motion.div
                className=''
                initial="hidden"
                whileInView="visible"
              >
                <HeaderInfo />
              </motion.div>
              :
              null
          }

          <div
            className={`text-center z-10 relative mt-3 ${!isActive ? 'animate-bounce' : ''}`}
            onClick={() => setIsActive(i => !i)}
          >
            {
              isActive ?
                <UpOutlined className='text-white' />
                :
                <div className='flex flex-col text-white'>
                  <InfoCircleTwoTone twoToneColor="#eb2f96" className='xyy:text-2xl sm:text-3xl' />
                </div>

            }
          </div>



          <div className='container mx-auto z-20 relative mt-10'>
            <Heading text='Печатный центр в Минске' size='text-4xl' />

            <div className='h-[60vh] mt-5'>
              <p className='text-white font-light'>
                Лучшая <span className='text-yellow-400 font-normal'>цена</span> на печатные услуги в Минске
              </p>
            </div>
          </div>



          <ServiceSection />
        </div>
      </main >
    </>
  )
}
export default Home




