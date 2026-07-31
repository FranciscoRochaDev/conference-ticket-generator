
function App() {

    return (
    <>
        <div className="pointer-events-none absolute inset-0 bg-[url(/images/pattern-lines.svg)]
            bg-center bg-cover bg-repeat
            before:pointer-events-none before:absolute before:inset-0
                before:bg-[url(/images/pattern-circle.svg)] before:bg-no-repeat before:bg-size-(--circle-width)
                md:before:bg-size-(--circle-width-m) before:-left-7 before:-top-11 md:before:-left-10
                md:before:-top-20 lg:before:left-5
            after:pointer-events-none after:absolute after:inset-0
                after:bg-[url(/images/pattern-squiggly-line-top.svg)]
                after:bg-no-repeat after:bg-size-(--squiggly-width) md:after:bg-size-(--squiggly-width-m)
                after:bg-top-right after:top-6"
        ></div>
        <header>
            <img src="/images/logo-full.svg" alt="Conference Ticket Generator" className="m-auto mt-8" />
        </header>
    </>
  )
}

export default App
