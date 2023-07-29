import React from 'react'
import Gambar from '../../public/man.png'
import { ThemeContext } from '../App'
import { useContext } from 'react'

const Main = () => {
  const { projects, theme } = useContext(ThemeContext)
  const { strings, bahasa, setBahasa } = useContext(ThemeContext);
  return (
    <main className='py-3 px-5 md:px-14 lg:px-16 flex flex-col gap-10'>
      <section className='banner'>
        {/* Say Hallo */}
        <div className='flex flex-col gap-6'>
          <h1 className='title'>{strings[bahasa].hi}<span className='text-blue-700'>Anggi</span> 👋</h1>
          <p className='text-lg lg:text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit accusamus consequatur iure alias quas id distinctio voluptas ad et aliquid, reiciendis repellendus cupiditate. Quaerat dolores voluptas ad tempore ex!
          </p>
        </div>
        {/* Image */}
        <div>
          <img src={Gambar} alt="" />
        </div>
      </section>
      <section className='flex flex-col gap-5 lg:gap-8'>
        <h1 className='title'>My <span className='text-blue-700'>{strings[bahasa].project}</span></h1>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:gap-10'>
          {
            projects.map((project) => {
              return (
                <figure key={project.id} className={`project-${theme} p-3 md:p-5 lg:p-7 border rounded-2xl flex flex-col gap-5`}>
                  <img src={project.gambar} alt={project.nama} className='rounded w-full aspect-video' />
                  <figcaption className='p-2 flex flex-col gap-1'>
                    <h1 className='font-bold text-xl text-center'>{project.nama}</h1>
                    <p className='text-justify'>
                      {project.deskripsi}
                    </p>
                    <div className='mt-6 flex justify-between'>
                      <a href={project.link} target='_blank'>
                          <button className='w-32 h-10 bg-blue-700 border-none rounded-3xl cursor-pointer'>GitHub</button>
                      </a>
                      {
                        project.view&& <a href={project.view} target='_blank'>
                        <button className='w-32 h-10 bg-red-600 border-none rounded-3xl cursor-pointer'>{strings[bahasa].view}</button>
                    </a>
                      }
                    </div>
                  </figcaption>
                </figure>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Main