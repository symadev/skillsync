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
            <Resume></Resume>
            <PdfImage></PdfImage>
            <Card></Card>
            <Ai></Ai>
            <CardOfTestimonial></CardOfTestimonial>
           <CtaSection></CtaSection>
    
        
          
            
        </div>
    );
};

export default Home;