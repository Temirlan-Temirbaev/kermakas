import withLayout from "@/shared/ui/layout/withLayout";
import { Calculator } from "@/widgets/calculator";
import { OurAdvantages, OurProducts, OurProjects, ProductionProcess } from "@/widgets/home";

function Home() {
  return (
    <>
      <OurProducts />
      <ProductionProcess />
      <Calculator />
      <OurAdvantages />
      <OurProjects />
    </>
  );
}

export default withLayout(Home, {title : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", subTitle : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", button : "Заказать проект"})
