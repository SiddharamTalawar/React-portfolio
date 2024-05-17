import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import WaveImg from './assets/dev-ed-wave.png'
import consultingImg from './assets/consulting.png'
import codeImg from './assets/code.png'
import designImg from './assets/design.png'
import web1 from './assets/web1.png'
import web2 from './assets/web2.png'
import web3 from './assets/web3.png'
import web4 from './assets/web4.png'
import web5 from './assets/web5.png'
import web6 from './assets/web6.png'



function App() {
  const [count, setCount] = useState(0)
  const [darkmode, setdarkmode] = useState(false)

  return (
    < div className={darkmode? 'dark' :''}>
     <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900' >
      <section className='min-h-screen ' >
        <nav className='py-10 flex justify-between items-center '>
          <h1 className='text-xl font-burtons'>Siddharam</h1>
          <ul className='flex items-center' >
            <li className='cursor-pointer text-2xl' onClick={()=> setdarkmode(!darkmode)}><BsFillMoonStarsFill/></li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md  cursor-pointer  ml-5' >Resume</li>
          </ul>
        </nav>
        <div className='text-center p-10' >
          <h1 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl' >Siddharm Talawar</h1>
          <h3 className='text-2xl py-2 md:text-3xl' >Full stack developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl md:max-w-xl md:mx-auto'  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, reiciendis! Impedit sit sequi illo necessitatibus iusto atque aliquid fugit, velit nostrum sint quas numquam odio, magnam, quod eos modi provident?</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600' >
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillGithub/>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96' >
          <img src={WaveImg} alt="wave-image"/>
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1' >About me</h3>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, a!</p>
          <p>Lorem ipsum,<span className='text-teal-500' >dolor</span> dolor sit amet consectetur adipisicing elit. Sint, voluptatem quod. Neque eveniet voluptatum totam velit <span className='text-teal-500' >dolor</span> exercitationem quod, debitis blanditiis, sint nostrum inventore. Repellendus necessitatibus consequuntur explicabo magnam voluptates.</p>
        </div>
      </section>
      <section className='md:flex md:gap-10'>
        <div className='text-center shadow-lg rounded-xl my-10' >
          <img src={consultingImg} className="mx-auto w-24 h-24" alt="consultingImg" />
          <h3 className='text-3xl py-1' >Services</h3>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, a!</p>
          <h4 className='text-teal-500'>tools i use</h4>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum</p>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum</p>
          <p className='text-md py-2 leading-8 text-gray-800' > Lorem ipsum</p>
        </div>
        <div className='text-center shadow-lg rounded-xl my-10' >
          <img src={designImg} className="mx-auto w-24 h-24" alt="designImg" />
          <h3 className='text-3xl py-1' >Services</h3>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, a!</p>
          <h4 className='text-teal-500'>tools i use</h4>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum</p>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum</p>
          <p className='text-md py-2 leading-8 text-gray-800' > Lorem ipsum</p>
        </div>
        <div className='text-center shadow-lg rounded-xl my-10' >
          <img src={codeImg} className="mx-auto w-24 h-24" alt="codeImg" />
          <h3 className='text-3xl py-1' >Services</h3>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, a!</p>
          <h4 className='text-teal-500'>tools i use</h4>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum</p>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum</p>
          <p className='text-md py-2 leading-8 text-gray-800' > Lorem ipsum</p>
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1' >About me</h3>
          <p className='text-md py-2 leading-8 text-gray-800' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, a!</p>
          <p>Lorem ipsum,<span className='text-teal-500' >dolor</span> dolor sit amet consectetur adipisicing elit. Sint, voluptatem quod. Neque eveniet voluptatum totam velit <span className='text-teal-500' >dolor</span> exercitationem quod, debitis blanditiis, sint nostrum inventore. Repellendus necessitatibus consequuntur explicabo magnam voluptates.</p>
        </div>
      </section>
      <section className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1'>
          <img src={web1} alt="" className='rounded-lg object-cover w-full h-full'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <img src={web2} alt="" className='rounded-lg object-cover w-full h-full'/> 
        </div>
        <div className='basis-1/3 flex-1'>
          <img src={web3} alt="" className='rounded-lg object-cover w-full h-full'/> 
        </div>
        <div className='basis-1/3 flex-1'>
          <img src={web4} alt="" className='rounded-lg object-cover w-full h-full'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <img src={web5} alt="" className='rounded-lg object-cover w-full h-full' />
        </div>
        <div className='basis-1/3 flex-1 w-full h-full'>
          <img src={web6} alt="" className='rounded-lg object-cover w-full h-full'/>
        </div>
      </section>
     </main>
    </div>
  )
};

export default App
