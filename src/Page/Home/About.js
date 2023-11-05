import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import me from './img/281560883_356089816625989_5027205111892086882_n.jpg';

const About = () => {
     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_g8b86ap', 'template_6bg6g9u', form.current, 'PX9bxfsHdd3VI7tuB')
               .then((result) => {
                    console.log(result.text);
                    alert('Send Your All Things')
               }, (error) => {
                    console.log(error.text);
               });
          console.log('hello maruf bellah')
     };
     return (
          <div className='lg:px-12 pt-5'>

               <div className='grid lg:text-medium md:grid-cols-2 lg:grid-cols-2 gap-32'>
                    <div className='p-5 text-justify'>
                         <h1 className='text-2xl'>About me ...</h1>
                         <p> I'm a decent Mern Stack developer. I have been learning and practicing it for years. By the time I have done some full-stack projects and explored new technologies. Being a very enthusiastic person I love to learn new things and am eager to know them even more than once. Maybe I don't know the technology you're looking for, but give me a week I'm gonna change your mind. I like doing team projects, problem-solving, and making strategic decisions.
                         </p>
                         <div className='text-primary pt-3'>
                              <p className=''>
                                   mdmaruf5511507@gmail.com
                              </p>
                              <p className=''>
                                   Dhaka, Bangladesh
                              </p>
                              <p className=''>
                                   Phone : 01985511507
                              </p>
                         </div>

                         <div>
                              <h1 className='text-2xl text-center pt-5'>DON'T HESITATE TO CONTACT...!</h1>
                              <div className='shadow-xl rounded-2xl p-5 pt-10'>
                                   <form ref={form} onSubmit={sendEmail}>
                                        <label>Name</label>
                                        <input className='input mb-1 input-bordered w-full' type="text" name="name" placeholder='Your Name' />
                                        <label>Email</label>
                                        <input className='input mb-1  input-bordered w-full' type="email" name="email" placeholder='Your Email' />
                                        <label>Mobile </label>
                                        <input className='input mb-1  input-bordered w-full' type="text" name="number" placeholder='Your Number' />
                                        <label>Message</label>
                                        <textarea className='input h-20 mb-3 input-bordered w-full' name="message" placeholder='Write Message' />
                                        <input className='btn btn-secondary w-full' type="submit" value="Send" />
                                   </form>
                              </div>
                         </div>
                    </div>
                    <div className='p-5 md:p-0 mt-5'>
                         <img className='mx-auto' src={me} alt="" />
                    </div>
               </div>

          </div >
     );
};

export default About;
