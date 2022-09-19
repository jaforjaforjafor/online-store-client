import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ContactModal = ({contact,setContact}) => {
    const {_id,Teacher,Course,img}=contact;
    const [user, loading, error] = useAuthState(auth);

    const handleContact=event=>{
        event.preventDefault(); 
        const cours =event.target.cours.value;
        console.log( cours,Course,Teacher);
        const contacting={
          contactNowId: _id,
          Teacher,
          contactNow:Course,
          cours,
          client:user.email,
          clientName:user.displayName,
          phone:event.target.phone.value
        }
        fetch('http://localhost:5000/contacting',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(contacting)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.success){
            toast(`course is purchase,at${cours},with that${Teacher}`);
          }
          else{

            toast.error(`course is already  purchased,on${data.contacting?.cours},with that ${data.contacting?.Teacher} `);

          }
            //to close the modal
              setContact(null);
        })
        
    }
    return (
        <div>
        <input type="checkbox" id="Contact-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <img src={img} alt="Teacher" width='200' />
  <label htmlFor="Contact-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

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