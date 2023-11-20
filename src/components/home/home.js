import CourseList from "../course-list/course-list";
import About from "../about/about";
import Banner from "../banner/banner";

export function Home() {
    return <>
      <Banner />
      <About mainPage='true'/>
      <CourseList display="4"/>
    </>
}