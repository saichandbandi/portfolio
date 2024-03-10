
import Deep from './assets/deep.png'
import PYTHON from './assets/python.png'
import KERAS from './assets/keras.png'
import MATPLOT from './assets/mat.png'
import MHL from './assets/th.jpeg' 
import NUMPY from './assets/num.png' 
import OPENCV from './assets/opencv.png'
import PANDAS from './assets/panda.png'
import SCIKIT from './assets/scikit.jpg'
import SELENIUM from './assets/Selenium_Logo.png'
import POWERBI from './assets/powerbi2.png'



const Skills = () => {
  return (
    <div name='skills' className=' w-full bg-[#0a192f] text-gray-300  md:h-screen py-10 '  >
      <div className="h-full w-full flex flex-col justify-center p-4 mx-auto max-w-[1000px]">
        <div className="">
          <p className='text-4xl border-b-4 inline border-yellow-400 font-bold '>Skills</p>
          <p className='py-4'>\\\ These are the technologies i have worked on </p>
        </div>

        <div className="grid grid-cols-2 w-full sm:grid-cols-4 gap-4 text-center py-8 "> 

        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={PYTHON} alt="python-logo" />
            <p className="py-4">PYTHON</p>
          </div>


          <div className="shadow-md  hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={SELENIUM} alt="SELENIUM-logo" />
            <p className="py-4 mx-auto">SELENIUM</p>
          </div>


          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={PANDAS} alt="PANDAS-logo" />
            <p className="py-4">PANDAS</p>
          </div>


          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={NUMPY} alt="NUMPY-logo" />
            <p className="py-4">NUMPY</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={MATPLOT} alt="MATPLOT-logo" />
            <p className="py-4">MATPLOTLIB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={SCIKIT} alt="SCIKIT-logo" />
            <p className="py-4">SCIKIT-LEARN</p>
          </div> 


          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={MHL} alt="MHL-logo" />
            <p className="py-4">MACHINE LEARNING</p>
          </div> 


          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={Deep} alt="-logo" />
            <p className="py-4">DEEP LEARNING</p>
          </div>



          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={KERAS} alt="KERAS-logo" />
            <p className="py-4">KERAS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={OPENCV} alt="opencv-logo" />
            <p className="py-4">OPENCV</p>
          </div> 


          



          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={POWERBI} alt="power-logo" />
            <p className="py-4">Power BI</p>
          </div>

         
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={SQL} alt="sql-logo" />
            <p className="py-4">My-SQL</p>
          </div>  */}

          







        </div>

      </div>
    </div>
  )
}

export default Skills