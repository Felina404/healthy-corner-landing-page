import React, { useState } from 'react'
import restaurant from './assets/restaurant.webp'

function Reservation() {

    const [submit, setSubmit] = useState(false);
    const [errors, setErrors] = useState<{ [key: string] : boolean} >({});
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        date: '',
        time: '',
        seats: 1,
        notes: ''
    })

    const today = new Date();
    const tommorw = new Date(today);
    tommorw.setDate(today.getDate() + 1);
    const oneWeek = new Date(today);
    oneWeek.setDate(today.getDate() + 7);

    const formatDate = (date: Date) => 
        date.toISOString().split('T')[0];

    const minDate = formatDate(tommorw);
    const maxDate = formatDate(oneWeek);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setSubmit(false);
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        setSubmit(false);
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
        const telValid = /^\d{7,}$/.test(form.tel.replace(/\D/g, ''));
        const dateValid = form.date >= minDate && form.date <= maxDate;
        const seatsValid = Number(form.seats) >= 1 && Number(form.seats) <= 12;

        const newErrors = {
            name: !form.name.trim(),
            email: !form.email.trim() || !emailValid,
            tel: !form.tel.trim() || !telValid,
            date: !form.date.trim() || !dateValid,
            time: !form.time.trim(),
            seats: !form.seats || !seatsValid,
        };
        setErrors(newErrors);

        if (!Object.values(newErrors).some(Boolean)){
            setSubmit(true);
        }
    }
    

  return (
    <div>
        <h1 id='reservation' className='p-2 m-2 text-center text-4xl font-semibold underline decoration-green-500 decoration-2 underline-offset-8'>BOOK A TABLE</h1>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 p-4 m-4'>
            <img src={restaurant} alt='restaurant-outdoors' className='md:w-1/2 m-4 p-4 rounded-4xl object-cover'></img>
            <div className='w-full p-2 m-2 md:w-1/2 '>
                <form className='flex flex-col space-y-4 '>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type='text' name='name' id='name' placeholder='Name*' value={form.name} onChange={handleChange}
                    className={`p-2 border rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} required aria-required="true"/>
                    
                    <label htmlFor="email" className="sr-only">email</label>
                    <input type='email' name='email' id='email' placeholder='Email*' value={form.email} onChange={handleChange}
                    className={`p-2 border rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} required aria-required="true"/>
                   
                    <label htmlFor="tel" className="sr-only">tel</label>
                    <input type='tel' name='tel' id='tel' placeholder='Phone Number*' value={form.tel} onChange={handleChange}
                    className={`p-2 border rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 ${errors.tel ? 'border-red-500' : 'border-gray-300'}`} required aria-required="true"/>
                    
                    <label htmlFor="date" className="sr-only">date</label> 
                    <input type='date' name='date' id='date' min={minDate} max ={maxDate} value={form.date} onChange={handleChange}
                    className={`p-2 border rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 ${errors.date ? 'border-red-500' : 'border-gray-300'}`} required aria-required="true"/>
                    
                    <label htmlFor="time" className="sr-only">time</label> 
                    <select name="time" id="time" value={form.time} onChange={handleChange}
                    className={`p-2 border rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 ${errors.date ? 'border-red-500' : 'border-gray-300'}`} required aria-required="true">
                        <option value="">Select time</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                        <option value="22:30">22:30</option>
                        <option value="23:00">23:00</option>
                        <option value="23:30">23:30</option>
                        <option value="24:00">24:00</option>
                        </select>
                    
                    <label htmlFor="seats" className="sr-only">Seats</label>
                    <input type='number' name='seats' id='seats' min={1} max={12} value={form.seats} onChange={handleChange}
                     className={`p-2 border rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 ${errors.seats ? 'border-red-500' : 'border-gray-300'}`} required aria-required="true"/>
                    {errors.seats && <span className='text-red-500 text-sm'>Please select between 1 and 12 seats.</span>}

                    <label htmlFor="notes" className="sr-only">Notes</label>
                    <textarea placeholder='Notes' name='notes' id='notes' value={form.notes} onChange={handleChange}
                    className={`p-2 border rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 ${errors.notes ? 'border-red-500' : 'border-gray-300'}`} required aria-required="true"/>
                    <button type='submit' onClick={handleSubmit} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Reserve Now</button>
                </form>
                {submit && (
                    <div className='mt-4 p-4 bg-green-100 text-green-800 rounded-md'>
                        <h2 className='text-lg font-semibold'>Reservation Successful!</h2>
                        <p>Thank you for your reservation, {form.name}. We look forward to welcoming you on {form.date} at {form.time}.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Reservation
