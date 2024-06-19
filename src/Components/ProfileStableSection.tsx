import React, { useContext } from 'react'
import { AvailabilityContext } from './availabilityContext';
import profile from  "../Assets/profile.jpg"
interface ProfileStableSectionProps {
  index: number; // Define the type of 'index' prop
}
interface Skill {
  name: string;
  experience: string|number;
  description: string;
}
const ProfileStableSection: React.FC<ProfileStableSectionProps> = ({ index }) => {
  const { status, availability ,skills ,currentIndex} = useContext(AvailabilityContext)!;
  console.log(status , availability , currentIndex)

  console.log(currentIndex ,"currentIndex")
 


  return (
    
    <div className='py-6 px-4 bg-[#1f1f1f] rounded-md hidden sm:block'>
      <h2 className='mb-4'>Building Your Profile</h2>
    <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] rounded-md h-[max-content] '>
    <div className='bg-[#2D2D2D] grid gap-4 px-2 py-2 rounded-md'>
      {
        index==2 && <div className='grid gap-2'>
          <div className='flex gap-3'>
            <div className='w-[76px] h-[76px] '><img className='w-[100%] h-[100%] object-cover  rounded-md' src="https://www.healthdigest.com/img/gallery/why-men-who-smile-often-arent-as-appealing-to-women/l-intro-1623081697.jpg" alt="Profile"/></div>
            <div className='grid'>
              <p>Frontend Developer</p>
              <p>Weston Stearns</p>
              <p>🖤 Pesto's Choice</p>
            </div>
          </div>
          <p>Working as a full stack developer, as well as an automation test engineer I created test automation framework.</p>
          <div className='flex justify-around border border-indigo-600 rounded-md py-2'>
          <div className='px-1 py-2 '>
            <p className='text-gray-500'>Cost</p>  
            <p>₹56,06,285</p>  
            </div>

            <div className='px-2 py-2'>
            <p className='text-gray-500'>Experience</p>  
            <p>7 Years</p>  
            </div>


            <div className='px-2 py-2'>
            <p className='text-gray-500'>Full/part time</p>  
            <p className='w-[100%] h-4 animate-pulse bg-gray-500 rounded-md'></p>  
            </div>

            <div className='px-[2px] py-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md flex items-center'>
            <div className='bg-[#2d2d2d] rounded-md p-2'>
            <p className='text-gray-500'>Notice Period</p>  
            <p>{availability}</p> 
              </div> 
            </div>
          </div>
        </div>
      }


   <div className='px-3 py-3 border border-indigo-400 rounded-md bg-[#2D2D2D] text-white '>
    <h2 className='pb-2 '>TechStack</h2>
   {
      skills?.map((item:Skill)=>{
        return(
         <div className='grid gap-3 pr-10 border border-grey-200 rounded-md px-5 py-2 my-3'> 
            <div key={item.name} className='flex justify-between items-center'>
               <p>{item.name}</p>
               <p className='px-2 py-1 bg-[#474747] rounded-sm'>{item.experience} years</p>
            </div>
            <div>
             {item.description}
            </div>
         </div>
        )
      })
    }
   </div>
  </div>
    </div>
    </div>
  )
}

export default ProfileStableSection
