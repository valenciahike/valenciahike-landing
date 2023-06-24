import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
    <Main meta={<Meta title="Nosotros - Valencia Hike" description="Sobre nosotros pagina" />}>
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
    </Main>
);

export default About;
