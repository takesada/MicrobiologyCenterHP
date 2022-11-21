import { SwitchInstiAcademic } from "../components/atoms/switchInstiAcademic"
import { Academic } from "../components/organisms/academic"
import { Footer } from "../components/organisms/footer"
import { Header } from "../components/organisms/header"

export const  RelatedAcademicPage=()=>{
    return(
        <div>
            <Header/>
            <SwitchInstiAcademic/>
            <Academic/>
            <Footer/>
        </div>
    )
}