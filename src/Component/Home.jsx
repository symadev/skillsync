import Ai from "./Ai";
import Banner from "./Banner";
import Card from "./Card";
import CardOfTestimonial from "./CardOfTestimonial";
import CtaSection from "./CtaSection";
import PdfImage from "./PdfImage";
import Resume from "./Resume";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <section id="resume">
                <Resume></Resume>
            </section>

            <section id="pdf-image">
                <PdfImage></PdfImage>
            </section>

            <section id="features" className="scroll-mt-24">
                <Card></Card>
            </section>

            <section id="ai-tools" className="scroll-mt-24">
                <Ai></Ai>
            </section>

            <section id="testimonials" className="scroll-mt-24">
                <CardOfTestimonial></CardOfTestimonial>
            </section>

            <section id="contacts" className="scroll-mt-24">
                <CtaSection></CtaSection>
            </section>
        </div>
    );
};

export default Home;
