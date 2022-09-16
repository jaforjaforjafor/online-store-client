import React from 'react';

const ContactModal = ({contact,setContact}) => {
    const {Teacher,Course,img}=contact;
    const handleContact=event=>{
        event.preventDefault();
        const cours =event.target.cours.value;
        console.log( cours,Course,Teacher);
        setContact(null);
    }
    return (
        <div>
        <input type="checkbox" id="contact-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <img src={img} alt="Course" />
  <label htmlFor="contact-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

    <h3 className="font-bold text-lg text-green-400">contact :{Teacher}</h3>
    
    <p className="py-4">{Course}</p>
    <form onSubmit={handleContact} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    <select name='cours' className="select select-bordered w-full max-w-xs">
        {Course.map(cours=><option value={cours}>{cours}</option>)}
  
</select>
<input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />
    <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
    </form>
    
  </div>
</div>
</div>
    );
};

export default ContactModal;