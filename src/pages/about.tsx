import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useRouter } from 'next/router';

const About = () => {
    const router = useRouter();

    return (<Main meta={<Meta title="Nosotros - Valencia Hike" description="Sobre nosotros pagina" />}>
        <section className="relative flex items-center z-10 bg-slate-900 text-white text-center py-32 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${router.basePath}/assets/images/hero-bg.png)` }}>

            <div className="overflow-hidden">
                <img src={`${router.basePath}/assets/images/mountain-white-top.svg`} alt="" className="absolute top-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
                <img src={`${router.basePath}/assets/images/mountain-cream-bottom.svg`} alt="" className="absolute bottom-0 left-0 right-0 h-14 md:h-auto object-cover md:w-full select-none pointer-events-none" />
            </div>

            <div className="absolute bg-black/30 inset-0 -z-10"></div>

            <div className="container max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-title mb-6">Sobre nosotros</h1>

            </div>
        </section>

        <section className='py-8'>
            <div className="container">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
                    recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
                    voluptatibus distinctio recusandae autem esse explicabo molestias officia
                    placeat, accusamus aut saepe.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
                    recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
                    voluptatibus distinctio recusandae autem esse explicabo molestias officia
                    placeat, accusamus aut saepe.
                </p>
            </div>
        </section>
  </Main>);
}


export default About;
