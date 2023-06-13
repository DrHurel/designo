import Link from "next/link";

export function CallToAction() {

  return <section className="callToAction">


    <div>
      <h2>Let’s talk about your project</h2>
      <p>
        Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
      </p>
    </div>

    <Link href="/contact"><button>Get in touch</button></Link>

  </section>


}

