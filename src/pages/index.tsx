import { IProductionProcess, getProductionProcesses } from "@/entities/production-process";
import { IProject, getProjects } from "@/entities/project";
import { BannerProps } from "@/shared/ui/layout/Banner";
import withLayout from "@/shared/ui/layout/withLayout";
import { Calculator } from "@/widgets/calculator";
import { OurAdvantages, OurProducts, OurProjects, ProductionProcess } from "@/widgets/home";
export const getStaticProps = async () => {
  const productionProcessData = await getProductionProcesses()
  const projectsData = await getProjects()
  return {
    props: {
      processData: productionProcessData,
      projects: projectsData
    },
  };
};
function Home({processData, projects} : {processData: IProductionProcess[], projects: IProject[]}) {
  return (
    <>
      <OurProducts />
      <ProductionProcess initialData={processData} />
      <Calculator />
      <OurAdvantages />
      <OurProjects initialData={projects} />
    </>
  );
}

const bannerOptions: BannerProps = {
  title : "ЗАВОД ПО ПРОИЗВОДСТВУ СЭНДВИЧ-ПАНЕЛЕЙ KERMAKAS",
  subTitle : "Завод «KERMAKAS» находится в Алматинской области и специализируется на производстве сэндвич-панелей с 2009 года. Мы используем передовое оборудование и технологии, включая надежную систему замка Z-LOCK, для производства стеновых и кровельных панелей высокого качества.",
  button : "Заказать проект"
}
// @ts-ignore
export default withLayout(Home, bannerOptions)
