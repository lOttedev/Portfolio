
import { useForm } from 'react-hook-form';

function MyForm() {
  const {register, handleSubmit, formState : { errors }} = useForm();

  const onSubmit = (data) => console.log(data)
  


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fname">
        Prénom
        <br />
        <input type="text" id="fname" name="fname" 
        onChange={handleInputChange} 
        {...register('fname', {
          require: true,
          minLength: 2,
          maxLength: 25,
        })} 
        aria-invalid={errors.fname ? "true" : "false"}
        />
        {errors.fname &&(
          <span className='formError'> Veuillez remplir ce champs, il doit contenir entre 2 et 25 caractères </span>
        )}
      </label>
      <br />
      <label htmlFor="lname">
        Nom
        <br />
        <input type="text" id="lname" name="lname" onChange={handleInputChange}
                {...register('lname', {
                  require: true,
                  minLength: 2,
                  maxLength: 30,
                })} 
                aria-invalid={errors.fname ? "true" : "false"}
        />
                {errors.lname &&(
          <span className='formError'> Veuillez remplir ce champs, il doit contenir entre 2 et 30 caractères </span>
        )}
      </label>
      <br />
      <label>
        Email
        <br />
        <input type="email" id="email" name="email" onChange={handleInputChange}
                {...register('email', {
                  require: true,
                  pattern: /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/,
                })} 
                aria-invalid={errors.fname ? "true" : "false"} 
                />
                 {errors.lname &&(
          <span className='formError'> Cette adresse email n'est pas valide  </span>
        )}
      </label>
      <br />
      <label htmlFor="message">
        Message
        <br />
        <input type="text" id="message" name="message"
                        {...register('lname', {
                          require: true,
                          minLength: 10,
                          maxLength: 350,
                        })} 
                        aria-invalid={errors.fname ? "true" : "false"}
        />
        {errors.lname &&(
          <span className='formError'> Ce champs doit contenir entre 10 et 350 caractères  </span>
        )}
        </label>
        <br />
      <button className="btn" type="submit">Envoyer</button>
    </form>
  );
}

export default MyForm;