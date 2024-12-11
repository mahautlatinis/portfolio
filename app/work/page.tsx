import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};


export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere vel tempore. Nam nobis earum quasi ipsam dignissimos, laboriosam, sint dolores quis, ut quod expedita ea quibusdam voluptates necessitatibus corporis.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Greenly</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem recusandae repellendus similique blanditiis consequuntur, deserunt dicta, fugit provident suscipit molestias inventore cupiditate saepe numquam id delectus eos nam quia repellat.
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam molestiae eaque animi aliquid eveniet dolorum reprehenderit illo, corporis alias esse quidem velit suscipit quam iusto laboriosam doloribus? Perferendis, aut blanditiis?
          </li>
          <li>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, ab modi! Nihil quod molestias ipsam accusantium ut quos beatae, vero in sit? Voluptatibus culpa obcaecati blanditiis quo animi autem eaque.
          </li>
          <li>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum debitis cupiditate consequuntur perferendis nesciunt saepe reiciendis quam quos placeat vitae eum nam unde architecto dignissimos nobis, consequatur sapiente quaerat. Maxime!
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis corporis architecto asperiores odio alias nesciunt nemo, vitae quas optio nulla odit accusamus porro, in ad rem beatae magnam? Quo
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </div>
      </section>
      )
    }
