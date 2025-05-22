
import Capabilities from "@/component/about/capabilities";
import Connect from "@/component/about/connect";
import Experience from "@/component/about/experience";
import About from "@/component/about/hero";
import Nav from "@/layout/nav";

export default function Abou() {
    return(
        <div className="body ">
            <Nav/>
            <About/>
            <Capabilities/>
            <Experience/>
            <Connect/>
        </div>
    )
}