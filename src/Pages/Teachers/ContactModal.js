import React from 'react';

const ContactModal = ({Contact,setContact}) => {
    const {Teacher,Course,img}=Contact;
    const handleBuy=event=>{
        event.preventDefault();
        const cours =event.target.slo.value;
        console.log( cours,Course,Teacher);
        setContact(null);
    }
    return (
        <div>
        <input type="checkbox" id="Buy-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <img src={img} alt="Course" />
  <label for="contact-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

    <h3 class="font-bold text-lg text-green-400">contact :{Teacher}</h3>
    
    <p class="py-4">{Course}</p>
    <form onSubmit={handleBuy} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    <select name='cours' class="select select-bordered w-full max-w-xs">
        {Course.map(cours=><option value={cours}>{cours}</option>)}
  
</select>
<input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
    <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
    <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
    </form>
    
  </div>
</div>
</div>
    );
};

export default ContactModal;