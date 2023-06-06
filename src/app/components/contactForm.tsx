"use client"

export function ContactForm() {


  return (
    <form action="">

      <input type="text" name="name" required placeholder="name" pattern="[a-zA-Z]+" />
      <input type="text" name="email" required placeholder="Address Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
      <input type="number" required placeholder="Phone" />
      <textarea name="" id="" cols={30} rows={10} placeholder="Your Message"></textarea>
      <input type="submit" value="SUBMIT" />
    </form>
  )
}

/**
 * 
    Name
    Email address
    Phone
    Your message
    Submit

 */