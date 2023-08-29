import Swipper from '@/components/Swipper'
import { PROJECT_PAGE_DATA } from '@/site_data'
import Image from 'next/image'

const page = () => {
  return (
    <main className="mx-auto">
      <h1 data-aos="fade-right" className="mb-4 text-3xl font-bold">
        My project
      </h1>
      <p data-aos="fade-left" className="mb-4">
        A detailed description about my project goes here. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Impedit commodi facere illo, quam
        mollitia suscipit architecto perspiciatis eveniet voluptatum
        exercitationem, voluptatem ad blanditiis obcaecati necessitatibus porro
        laboriosam praesentium omnis cupiditate. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Impedit commodi facere illo, quam mollitia
        suscipit architecto perspiciatis eveniet voluptatum exercitationem,
        voluptatem ad blanditiis obcaecati necessitatibus porro laboriosam
        praesentium omnis cupiditate.
      </p>
      <div data-aos="zoom-in">
        <Image
          src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
          alt="cover photo"
          width={800}
          height={450}
          className="w-full h-[450px] my-10"
        />
      </div>
      <p data-aos="fade-right" className="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        corrupti quae perspiciatis ex, at molestiae eos eaque inventore! Nobis
        vero laudantium, deleniti reprehenderit et sed soluta placeat velit?
        Excepturi, ea?
      </p>

      <div>
        <h2 data-aos="fade-up" className="my-10 text-2xl font-semibold">
          Featured Content
        </h2>
        <Swipper>
          {PROJECT_PAGE_DATA.projects.map((card) => (
            <div key={card.id} data-aos="fade-up" className="relative mx-auto">
              <Image
                src={card.image}
                alt={card.title}
                width={800}
                height={450}
                className="w-full h-80"
              />
              <div className="absolute px-[10%] top-0 left-0 flex flex-col justify-center w-full h-full text-center align-middle bg-accent/60 text-primary-foreground">
                <h3 className="mt-4 text-xl font-bold">{card.title}</h3>
                <p className="mt-2 font-semibold">{card.description}</p>
              </div>
            </div>
          ))}
        </Swipper>
      </div>
    </main>
  )
}

export default page
