import React from 'react'
import "./contact-form.css"

export default function contactForm () {
    return (
        <div>
        <h1 style={{color:'white', textAlign:'center'}}>Disclaimer!  This form does not function yet.  Please email me at <a href="mailto:jonathonrenaud1988@gmail.com">jonathonrenaud1988@gmail.com</a></h1>    
        <div className='formbigger' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            
            <div className="form-style-3">
                <form>
                <fieldset><legend>Personal</legend>
                    <label for="field1"><span>Name <span className="required">*</span></span><input type="text" className="input-field" name="field1" value="" /></label>
                    <label for="field2"><span>Email <span className="required">*</span></span><input type="email" className="input-field" name="field2" value="" /></label>
                    <label for="field3"><span>Phone <span className="required">*</span></span><input type="text" className="input-field" name="field3" value="" /></label>
                    <label for="field4"><span>Subject</span><select name="field4" className="select-field">
                    <option value="Appointment">General</option>
                    <option value="Interview">Project Request</option>
                    
                    </select></label>
                    </fieldset>
                    <fieldset><legend>Message</legend>
                    <label for="field6"><span>Message <span className="required">*</span></span><textarea name="field6" className="textarea-field"></textarea></label>
                    <label><span> </span><input type="submit" value="Submit" /></label>
                    </fieldset>
                </form>
            </div>
  
        </div>
        </div>
    )
}