import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BuyNowModal = ({buyNow,setBuyNow}) => {
    const {_id,Name,Slot,Teacher,img}=buyNow;
    const [user, loading, error] = useAuthState(auth);
    const handleBuy=event=>{
        event.preventDefault();
        const slo =event.target.slo.value;
        console.log( _id,slo,Name,Teacher);
        const buying={
          buyNowId: _id,
          buyNow:Name,
          buyNow:Teacher,
          slo,
          client:user.email,
          clientName:user.displayName,
          phone:event.target.phone.value
        }
        //to close the modal
        setBuyNow(null);
    }
    return (
        <div>
        <input type="checkbox" id="Buy-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <img src={img} alt="Course" />
  <label htmlFor="Buy-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

    <h3 className="font-bold text-lg text-green-400">Buy For:{Name}</h3>
    <h4>Teacher{Teacher}</h4>
    <p className="py-4">{Slot}</p>
    <form onSubmit={handleBuy} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    <select name='slo' className="select select-bordered w-full max-w-xs">
        {Slot.map((slo, index)=><option
        key={index} 
        value={slo}
        >{slo}</option>)}
  
</select>
<input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
    <input type="email" name='email'disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
    </form>
    
  </div>
</div>
</div>
    );
};

export default BuyNowModal;