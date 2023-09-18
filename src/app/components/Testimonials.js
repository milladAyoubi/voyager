import TestimonialSlider from "./TestimonialSlider";

export default function Testimonial() {
    return ( 
        <section className = "xl:h-[600px] section flex items-center "
        id = "testimonial" >
            <div className="container mx-auto">
                <TestimonialSlider/>
            </div>

        </section>
    )
}