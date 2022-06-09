import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import word from './word2.gif'

const Conect = () => {
     const form = useRef();

     function sentEmail(e) {
          e.preventDefault();

          emailjs.sendForm('gmail', 'template_6bg6g9u', form.current, 'PX9bxfsHdd3VI7tuB')
               .then((result) => {
                    console.log(result.text);
               }, (error) => {
                    console.log(error.text);
               });
     }

     return (
          <div className='lg:px-12 bg-primary pb-20 py-12'>
               <h1 className='text-3xl md:text-4xl lg:text-5xl uppercase text-center text-primary font-bold'>Have you any question ...?</h1>
               <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <img src={word} className="w-6/6 lg:w-5/6 hover:shadow-2xl rounded-2xl  ml-0 md:ml-0 lg:ml-10 " alt='' />

                         <div class="card flex-shrink-0 mt-4 lg:w-4/6 w-full mr-0 md:mr-0 lg:mr-8 shadow-md hover:shadow-2xl bg-base-100">
                              <div class="card-body">

                                   <form ret={form} onClick={sentEmail}>
                                        <div class="form-control w-full ">
                                             <label class="label">
                                                  <span class="label-text">Your Name</span>
                                             </label>
                                             <input type="text" name="user_name" placeholder="Type here" class="input input-bordered w-full " />
                                        </div>
                                        <div class="form-control w-full ">
                                             <label class="label">
                                                  <span class="label-text">Your Email</span>
                                             </label>
                                             <input type="email" name="user_email" placeholder="Type here" class="input input-bordered w-full " />
                                        </div>
                                        <div class="form-control w-full ">
                                             <label class="label">
                                                  <span class="label-text">Your Message</span>
                                             </label>
                                             <textarea type="text" name="message" placeholder="Type here" class="textarea h-32 textarea-bordered w-full " />
                                        </div>
                                        <div class="form-control w-full ">
                                             <label class="label">
                                                  <span class="label-text">What is your name?</span>
                                             </label>
                                             <input type="submit" value='submit' class=" btn btn-secondary w-full " />
                                        </div>
                                   </form>
                              </div>
                         </div>












                    </div>
               </div>
          </div>
     );
};

export default Conect;