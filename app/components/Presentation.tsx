import Link from 'next/link';

/* 
TODO: à faire
*/

export default function Presentation() {
    return (
        <>
            <h1 className="mb-8 text-2xl font-medium tracking-tighter">
                hey, I'm Mahaut Latinis 👋
            </h1>
            <p className="prose prose-neutral dark:prose-invert">
                {`I'm a French software engineer based in Versailles and a bubbly mother. I currently `}
                {/* <Link href="/work">work</Link> */}
                {` as Backend Engineer and Product Builder at Greenly.`}
                <span className="not-prose">
                </span>
            </p>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, qui cumque. Aut facere possimus ullam molestiae laudantium illo aperiam impedit dolorum illum iste excepturi recusandae ipsum, beatae fugit inventore labore.
                </p>
            </div>
            <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos tempora, consectetur veniam accusantium nulla numquam? Est cupiditate reiciendis saepe nesciunt commodi dolores aliquid recusandae, delectus accusantium. Alias, quibusdam ducimus.
                </p>
            </div>
            <div className="my-8 flex w-full flex-col space-y-4">
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque quae, pariatur suscipit earum qui omnis alias nemo atque temporibus non, a quaerat? Placeat magnam, soluta nemo dolor est labore?
                </p>
            </div>
        </>
    )
}